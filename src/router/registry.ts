import { FlattenedTypes } from "@/types/common.types";

/**
 * 1: Register a route here.
 */
export const ROUTE_PATHS = {
    NOT_FOUND: "*",
    HOME: "/",
    PROJECTS: "/projects",
    CONTACT_ME: "/contact-me",
    TESTIMONIALS: "/testimonials"
} as const;

export type RoutePathsType = FlattenedTypes<typeof ROUTE_PATHS>;
export const ROUTES: RoutePathsType[] = Object.values(ROUTE_PATHS);

/**
 * 2: Public routes registration from route paths.
 */
export const PUBLIC_ROUTES: RoutePathsType[] = [ROUTE_PATHS.HOME];

/**
 * 3: Private route registration from route paths.
 */
export const PRIVATE_ROUTES: RoutePathsType[] = [];

export const ALL_ROUTES: RoutePathsType[] = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);

/**
 * 4: Proceed to RouteConfig.tsx -->
 */
