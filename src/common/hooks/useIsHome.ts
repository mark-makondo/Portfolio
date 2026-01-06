import { ROUTE_PATHS } from "@/router/registry";
import RouteService from "@/services/Route.service";
import { useLocation } from "react-router";

export function useIsHomePath() {
    const location = useLocation();
    return RouteService.isCurrentPathActive(location, { pathname: ROUTE_PATHS.HOME });
}
