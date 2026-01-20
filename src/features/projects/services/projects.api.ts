import { apiSlice, createEndpoints } from "@/app/app.api";

const BASE_PATH = "/api/projects";

const END_POINTS = {
    getProjects: { method: "get" as const, path: "getProjects" }
};

export const projectsApi = apiSlice.injectEndpoints({
    endpoints: createEndpoints(END_POINTS, BASE_PATH)
});

export const { useGetProjectsMutation } = projectsApi;

export default projectsApi.reducer;
