import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getEnvNumber = <K extends keyof ImportMetaEnv>(key: K): number => {
    const value = import.meta.env[key];
    if (value === undefined) throw new Error(`Missing env var: ${key}`);
    return Number(value);
};

export const getErrorMessage = (error: object): string => {
    if (!error) return "";
    if ("data" in error && error.data) {
        const data = (error as FetchBaseQueryError).data as any;
        if ("message" in data) return data.message;
    }
    if ("message" in (error as any)) return (error as any).message;
    return "Unknown error";
};

export const createInitials = (name: string = ""): string => {
    if (typeof name !== "string") return "";

    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "";

    const first = parts[0]?.[0]?.toUpperCase() ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0]?.toUpperCase() ?? "" : "";

    return first + last;
};

export function sanitizeWords(str: string | null | undefined, split: string = "_", lowerCase: boolean = true): string {
    const capitalizeWords = (input: string, splitSymbol: string = " "): string => {
        const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

        return input.split(splitSymbol).map(capitalize).join(" ");
    };

    // Guard invalid values
    if (!str) return "";
    if (typeof str !== "string") return String(str);

    let value = str.trim();

    if (lowerCase) {
        value = value.toLowerCase();
    }

    let segments = value.split(split);

    const hasSlash = (s: string): boolean => s.includes("/");
    const hasParenthesis = (s: string): boolean => s.includes("(") && s.includes(")");

    // Handle /separator capitalization
    if (segments.some(hasSlash)) {
        segments = segments.map((s) => (hasSlash(s) ? s.replace(/\/\w/g, (match) => match.toUpperCase()) : s));
    }

    // Handle (parenthesis) uppercasing
    if (segments.some(hasParenthesis)) {
        segments = segments.map((s) => (hasParenthesis(s) ? s.replace(/\(([^)]+)\)/g, (_, inner) => `(${inner.toUpperCase()})`) : s));
    }

    const joined = segments.join(" ");

    return capitalizeWords(joined);
}

export const waitForTimeout = (interval: number = 5000): Promise<void> => new Promise((resolve) => setTimeout(resolve, interval));
