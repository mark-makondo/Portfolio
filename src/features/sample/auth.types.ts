import type { ChangeEvent } from "react";
import { AuthState, MutationError } from "@/app/app.types";

export interface AdminFormLogin {
    email?: string;
    password?: string;
}

export type AdminLoginOptionReturnType = {
    form: AdminFormLogin;
    error: MutationError;
    onChange: (param: ChangeEvent<HTMLInputElement>) => void;
};

export type AdminLoginReturnType = Promise<AuthState | { error: unknown }>;

export type AdminLoginHookReturnType = [() => AdminLoginReturnType, boolean, AdminLoginOptionReturnType];
