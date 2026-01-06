import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchArgs, BaseQueryApi, FetchBaseQueryError, BaseQueryFn, MutationDefinition } from "@reduxjs/toolkit/query";
import appConfig from "@/app.config";
import {
    ApiResponse,
    EndpointConfig,
    EndpointBuilderType,
    QueryParams,
    HttpMethodUpperCase,
    EndpointsConfig,
    MutationEndpoint
} from "@/types/api.types";

export const BASE_PATH_URI = appConfig.url.server;

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_PATH_URI,
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set("Accept", "application/octet-stream");
        return headers;
    },
    responseHandler: async (response): Promise<Promise<Record<string, unknown> | Blob>> => {
        const contentType = response.headers.get("content-type");

        // Handle binary types (ZIP, PDF, Excel)
        if (
            contentType?.includes("application/zip") ||
            contentType?.includes("application/pdf") ||
            contentType?.includes("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        ) {
            return response.blob();
        }

        return response.json() as Promise<Record<string, unknown>>;
    }
});

export const apiSlice = createApi({
    baseQuery: async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
        const result = (await baseQuery(args, api, extraOptions)) as ApiResponse;
        return result;
    },
    endpoints: () => ({})
});

export const createMutationEndpoint = <Response, Config extends EndpointConfig>(
    builder: EndpointBuilderType,
    config: Config,
    basePath: string
): MutationDefinition<QueryParams, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, object>, never, Response, string> => {
    return builder.mutation<Response, QueryParams>({
        query: (queryParams: QueryParams = {}) => {
            let path = `${basePath}/${config.path}`;

            if (typeof queryParams.extraPath === "string" || typeof queryParams.extraPath === "number") {
                path = `${path}/${queryParams.extraPath}`;
            }

            if (Array.isArray(queryParams.extraPaths)) {
                path = `${path}/${queryParams.extraPaths.join("/")}`;
            }

            const requestConfig: FetchArgs & { formData: boolean } = {
                url: path,
                method: config.method.toUpperCase() as HttpMethodUpperCase,
                credentials: "include",
                formData: false
            };

            if (queryParams.params) {
                requestConfig.params = queryParams.params;
            }

            if (queryParams.body) {
                requestConfig.body = queryParams.body;
            }

            if (queryParams.formData) {
                requestConfig.formData = true;
            }

            return requestConfig;
        },
        ...(config.options || {})
    });
};

export const createEndpoints = (endpointsConfig: EndpointsConfig, basePath: string) => {
    return (builder: EndpointBuilderType) => {
        const result: Record<string, MutationEndpoint> = {};
        for (const [key, config] of Object.entries(endpointsConfig)) {
            result[key] = createMutationEndpoint(builder, config, basePath);
        }
        return result;
    };
};
