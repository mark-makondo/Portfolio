import React from "react";
import clsx from "clsx";
import LogoIcon from "@icons/LogoIcon";
import RouteLink from "@ui/navigation/RouteLink";
import RouteService from "@/services/Route.service";
import { LocationType } from "@/types/common.types";
import menus from "./menus";
import Socials from "../socials/Socials";
import { useIsHomePath } from "@/common/hooks/useIsHome";
import { useSelector } from "react-redux";
import { selectViewport } from "@/app/app.slice";
import Divider from "../../ui/divider/Divider";

type LinkType = {
    pathname: string;
    location: LocationType;
    label: string;
    compact?: boolean;
    Icon: React.FC;
};

const createLink = ({ pathname, location, label, Icon, compact = false }: LinkType) => {
    return (
        <li>
            <RouteLink
                path={pathname}
                className={clsx("link-text p-2 text-sm!", RouteService.isCurrentPathActive(location, { pathname }) ? "menu-active" : "")}
            >
                {compact ? <Icon /> : label}
            </RouteLink>
        </li>
    );
};

const NavMenus: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    return (
        <ul className="menu menu-horizontal px-1 py-0 h-full">
            {menus.map((menuItem, i) => (
                <React.Fragment key={menuItem.pathname}>
                    {i !== 0 && <Divider className="mx-1 py-1.5" horizontal />}
                    {createLink({
                        pathname: menuItem.pathname,
                        location,
                        label: menuItem.label,
                        Icon: menuItem.Icon,
                        compact
                    })}
                </React.Fragment>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const isHome = useIsHomePath();
    const viewport = useSelector(selectViewport);
    const isSmallScreen = viewport?.screen === "sm";

    return (
        <div className={clsx("navbar pt-5 h-15", isHome ? "navbar--home" : "")}>
            <div className="navbar-inner flex justify-between items-center w-full h-full">
                <div className="navbar-left flex items-center gap-4 h-full">
                    <div className="navbar-logo">
                        <LogoIcon alternative={!isHome} className={isHome ? "w-9" : "w-12"} />
                    </div>

                    {!isSmallScreen && (
                        <div className="navbar-menu h-full">
                            <NavMenus />
                        </div>
                    )}
                </div>
                <div className="navbar-right items-center h-full">{isSmallScreen ? <NavMenus compact /> : <Socials min />}</div>
            </div>
        </div>
    );
};

export default Navbar;
