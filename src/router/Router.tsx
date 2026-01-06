import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router";
import { setViewport } from "@/app/app.slice";

import { useBreakpoint } from "@/common/hooks/useBreakpoint";
import { AppDispatch } from "@/app/app.store";

import { type RouteConfigType, ROUTES } from "./RouteConfig";

function renderRoutes(config: RouteConfigType[]) {
    return config.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
}

const router = createBrowserRouter(createRoutesFromElements(renderRoutes(ROUTES)));

export default function AppRouter() {
    useBreakpoint({
        mode: "min",
        onChange: (vp) => vp.screen && AppDispatch(setViewport(vp))
    });

    return <RouterProvider router={router} />;
}
