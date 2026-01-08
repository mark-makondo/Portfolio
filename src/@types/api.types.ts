import type {
    Api,
    BaseQueryFn,
    EndpointDefinitions,
    QueryReturnValue,
    FetchBaseQueryError,
    EndpointBuilder,
    FetchArgs,
    MutationDefinition
} from "@reduxjs/toolkit/query";

import type { Reducer, SerializedError } from "@reduxjs/toolkit";

export type ApiType = Api<BaseQueryFn<unknown, unknown, unknown>, EndpointDefinitions, string, string>;

export interface ErrorResponse {
    error: {
        data: ErrorDataResponse;
        status: number;
    };
}

export interface ErrorDataResponse {
    status: number;
    message: ErrorMessage;
}

export interface ErrorMessage {
    code: string;
    status: number;
    error: string;
}

export interface SuccessDataResponse {
    data: unknown;
}

export type ApiResponse = QueryReturnValue<SuccessDataResponse, FetchBaseQueryError, object>;

export interface QueryParams {
    extraPath?: string | number;
    extraPaths?: (string | number)[];
    params?: Record<string, unknown>;
    body?: unknown;
    formData?: boolean;
}

export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export type HttpMethodUpperCase = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface EndpointConfig {
    method: HttpMethod;
    path: string;
    options?: Record<string, unknown>;
}

export type EndpointsConfig = Record<string, EndpointConfig>;

export type EndpointBuilderType = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, object>, never, string>;

export type MutationEndpoint = MutationDefinition<
    QueryParams,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, object>,
    never,
    unknown,
    string
>;

export type MutationError = FetchBaseQueryError | SerializedError | undefined;

export interface SliceType {
    name: string;
    reducer: Reducer;
    actions: Record<string, Reducer>;
}
