import React from "react";

import { ROUTE_PATHS, RoutePathsType } from "./registry";

import PublicLayout from "@/layouts/PublicLayout";

// Lazy load pages for better performance
const NotFoundPage = React.lazy(() => import("@/pages/fallback/NotFound404Page"));

const HomePage = React.lazy(() => import("@/pages/home/HomePage"));
const ProjectsPage = React.lazy(() => import("@/pages/projects/ProjectsPage"));
const TestimonialsPage = React.lazy(() => import("@/pages/testimonials/TestimonialsPage"));
const ContactPage = React.lazy(() => import("@/pages/contact/ContactPage"));

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
        element: <NotFoundPage />
    },
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: ROUTE_PATHS.HOME, 
                element: <HomePage />
            },
            {
                path: ROUTE_PATHS.PROJECTS,
                element: <ProjectsPage />
            },
            {
                path: ROUTE_PATHS.TESTIMONIALS,
                element: <TestimonialsPage />
            },
            {
                path: ROUTE_PATHS.CONTACT_ME,
                element: <ContactPage />
            }
        ]
    }
];
