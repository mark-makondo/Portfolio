import "./drawer.css";
import React, { useMemo, useState } from "react";
import { useLocation } from "react-router";
import clsx from "clsx";
import RouteLink from "../navigation/RouteLink";
import DrawerToggle from "./DrawerToggle";
import WarningIcon from "../../icons/WarningIcon";
import Tooltip from "../tooltip/Tooltip";
import { DrawerProps, DrawerItemProps } from "./drawer.types";
import { mergeGroupToData } from "./drawer.helper";
import RouteService from "@/services/Route.service";

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onChange,
    id = "drawer",
    children,
    data,
    header,
    hideToggle,
    classNames = {
        parent: "",
        children: "",
        sideContainer: "",
        side: ""
    },
    groupByPaths
}) => {
    const menuItems = useMemo(() => {
        const filteredItems = (data || []).filter((item) => !item.exclude);
        const drawerItems = mergeGroupToData(filteredItems, groupByPaths || []);
        const topItems = drawerItems.filter((item) => !item.isBottom) || [];
        const bottomItems = drawerItems.filter((item) => item.isBottom) || [];
        return (
            <ul className="menu w-full grow space-y-3 p-4">
                <li className="menu-top">
                    {topItems.length > 0 && (
                        <ul className="main-list space-y-3">
                            {topItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <DrawerItemGroup {...item} isOpen={isOpen} />
                                </React.Fragment>
                            ))}
                        </ul>
                    )}
                </li>
                <li className="menu-bottom mt-auto flex gap-2">
                    {bottomItems.length > 0 && (
                        <ul className="main-list space-y-3">
                            {bottomItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <DrawerItemGroup {...item} isOpen={isOpen} />
                                </React.Fragment>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        );
    }, [data, isOpen]);

    return (
        <div className={clsx("app-drawer drawer drawer-open overflow-hidden", classNames.parent)}>
            <input
                id={id}
                name="drawer-hidden-toggle"
                type="checkbox"
                className="drawer-toggle"
                onChange={(e) => onChange?.(e.target.checked)}
                placeholder="drawer-toggle"
                checked={isOpen}
            />
            {children && (
                <div className={clsx("drawer-content w-full h-screen flex justify-center items-center p-4 pt-0", classNames.children)}>
                    {children}
                </div>
            )}
            <div className={clsx("drawer-side is-drawer-close:overflow-visible", classNames.sideContainer)}>
                <label htmlFor={id} className="drawer-overlay"></label>
                <div className={clsx("flex min-h-full flex-col items-start is-drawer-close:w-30 is-drawer-open:w-60", classNames.side)}>
                    {!hideToggle && <DrawerToggle id={id} className="is-drawer-close:-right-3.5 not-lg:-right-3.5 lg:is-drawer-open:right-0" />}
                    {header && <div className="drawer-header flex items-center justify-center w-full">{header}</div>}
                    {menuItems}
                </div>
            </div>
        </div>
    );
};

export default Drawer;

const DrawerItem: React.FC<DrawerItemProps> = (item) => {
    const location = useLocation();
    const pathname = location.pathname;
    const hash = location.hash || "";

    const drawerTitleClassName = useMemo(() => {
        let str = "drawer-item--title link-text flex";
        if (RouteService.isCurrentPathActive(location, { pathname: item.pathname, hash: item.hash })) str += " menu-active";
        return str;
    }, [item, pathname, hash]);

    return (
        <li className={`drawer-item ${(item.disabled && "menu-disabled") || ""}`}>
            <Tooltip content={item.label} placement="right" hidden={item.isOpen || !!item.extraInfo?.message} small invertColor>
                <RouteLink
                    className={clsx(drawerTitleClassName, item.className)}
                    path={item.pathname}
                    hash={item.hash}
                    replace={item.replace}
                    onClick={item.onClick}
                    style={item.style || {}}
                >
                    {item.icon && <div className="drawer-item--icon">{item.icon}</div>}
                    <div className="drawer-item--label is-drawer-close:hidden text-sm">{item.label}</div>
                    {item.extraInfo && (
                        <Tooltip content={item.extraInfo.message && item.extraInfo.message} placement="right">
                            <WarningIcon className={`ml-auto text-${item.extraInfo.type}`.trim()} />
                        </Tooltip>
                    )}
                </RouteLink>
            </Tooltip>
        </li>
    );
};

const DrawerItemGroup: React.FC<DrawerItemProps> = (item) => {
    const [menuToggle, setMenuToggle] = useState(true);

    if (!item.data) return <DrawerItem {...item} />;

    return (
        <li className="drawer-group">
            <Tooltip content={item.label} placement="right" hidden={item.isOpen || !!item.extraInfo?.message} small invertColor>
                <span
                    className={`drawer-item--title menu-dropdown-toggle ${menuToggle ? "menu-dropdown-show" : ""}`.trim()}
                    onClick={() => setMenuToggle(!menuToggle)}
                >
                    {item.icon && <div className="drawer-item--icon">{item.icon}</div>}
                    <span className="drawer-item--label is-drawer-close:hidden text-sm">{item.label}</span>
                </span>
            </Tooltip>
            <ul className={`menu-dropdown space-y-3 ${menuToggle ? "menu-dropdown-show" : ""}`.trim()}>
                {item.data.map((subItem, subIndex) => (
                    <DrawerItem key={subIndex} {...subItem} isOpen={item.isOpen} />
                ))}
            </ul>
        </li>
    );
};
