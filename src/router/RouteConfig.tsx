import React from "react";

import { ROUTE_PATHS, RoutePathsType } from "./registry";

import PublicLayout from "@/layouts/PublicLayout";

import NotFoundPage from "@/pages/fallback/NotFound404Page";
import HomePage from "@/pages/home/HomePage";
import ProjectsPage from "@/pages/projects/ProjectsPage";
import TestimonialsPage from "@/pages/testimonials/TestimonialsPage";
import ContactPage from "@/pages/contact/ContactPage";

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
