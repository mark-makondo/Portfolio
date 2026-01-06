import { apiSlice, createEndpoints } from "@/app/app.api";

const BASE_PATH = "/api/admin";

const END_POINTS = {
    login: { method: "post" as const, path: "auth/login" }
};

export const authAdminApi = apiSlice.injectEndpoints({
    endpoints: createEndpoints(END_POINTS, BASE_PATH)
});

export const { useLoginMutation } = authAdminApi;

export default authAdminApi.reducer;
