import { type ChangeEvent, useState } from "react";
import { useLoginMutation } from "./services/sample.api";
import { AdminFormLogin, AdminLoginHookReturnType, AdminLoginReturnType } from "./auth.types";
import { AppDispatch } from "@/app/app.store";
import { setLoggedInUser } from "@/app/app.slice";
import { ApiResponse, AuthState } from "@/app/app.types";

export const useAdminLogin = (): AdminLoginHookReturnType => {
    const [form, setForm] = useState<AdminFormLogin>({
        email: "",
        password: ""
    });

    const [login, { isLoading, error }] = useLoginMutation();

    const handleLogin = async (): AdminLoginReturnType => {
        try {
            const { email, password } = form;

            if (!email || !password) {
                throw new Error("Email and Password cannot be empty!");
            }

            const response = (await login({ body: { email, password } })) as ApiResponse;

            if (response.error) {
                throw new Error("Login failed.");
            }

            const newLoggedInUser = response.data.data as AuthState;
            const { user, role, accessToken } = newLoggedInUser;

            AppDispatch(setLoggedInUser({ user, role, accessToken }));

            return newLoggedInUser;
        } catch (error) {
            return { error };
        }
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    return [
        handleLogin,
        isLoading,
        {
            form,
            error,
            onChange: handleOnChange
        }
    ];
};
