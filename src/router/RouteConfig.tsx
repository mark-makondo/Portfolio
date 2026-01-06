import React from "react";

import { ROUTE_PATHS, RoutePathsType } from "./registry";

import PublicLayout from "@/layouts/PublicLayout";

// Lazy load pages for better performance
const NotFound = React.lazy(() => import("@/pages/fallback/NotFound404Page"));

const Home = React.lazy(() => import("@/pages/home/HomePage"));

export type RouteMeta = {
    icon?: React.JSX.Element;
    label?: string;
    group?: string;
};

export type RouteConfigType = {
    path: RoutePathsType;
    element: React.JSX.Element;
    meta?: RouteMeta;
    children?: RouteConfigType[];
};

export const ROUTES: RouteConfigType[] = [
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: ROUTE_PATHS.HOME,
                element: <Home />
            }
        ]
    }
];
