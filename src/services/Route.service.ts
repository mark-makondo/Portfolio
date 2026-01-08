import { type RoutePathsType, ROUTE_PATHS } from "@/router/registry";
import { type RouteConfigType, ROUTES } from "@/router/RouteConfig";
import { LocationType } from "@/@types/common.types";

export class RouteService {
    static isCurrentPathActive(
        location: LocationType,
        currentLocation: LocationType,
        option: {
            pathnames: RoutePathsType[];
        } = { pathnames: [] }
    ) {
        let isActive = false;

        const pathname = location.pathname || "";
        const hash = location.hash || "";

        if (pathname && currentLocation.pathname) {
            if (option.pathnames.length && option.pathnames.some((op) => pathname.includes(op))) {
                isActive = pathname.includes(currentLocation.pathname);
            } else {
                isActive = pathname === currentLocation.pathname;
            }
        }

        if (isActive && hash) {
            isActive = currentLocation.hash === hash;
        }

        return isActive;
    }

    static getHome() {
        return ROUTE_PATHS.HOME;
    }

    static getRoute(path: RoutePathsType): RouteConfigType | undefined {
        const flattened = ROUTES.flatMap(({ children, ...r }: RouteConfigType) => [r, ...(children || [])]) as RouteConfigType[];
        return flattened.find((r) => r.path === path);
    }

    static getPathMeta(path: RoutePathsType) {
        return this.getRoute(path)?.meta;
    }

    static getRouteByPath(path: RoutePathsType): RouteConfigType[] | [] {
        return ROUTES.filter((r) => r.path === path);
    }
}

export default RouteService;
