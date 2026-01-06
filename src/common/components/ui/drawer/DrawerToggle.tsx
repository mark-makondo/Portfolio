import React from "react";
import CollapseIcon from "../../icons/CollapseIcon";
import clsx from "clsx";
import { useAppSelector } from "@/app/app.hooks";
import { selectIsSidebarOpen } from "@/app/app.slice";
import Tooltip from "../tooltip/Tooltip";

interface DrawerToggleProps {
    id?: string;
    children?: React.ReactNode;
    className?: string;
}

const DrawerToggle: React.FC<DrawerToggleProps> = ({ id = "drawer", className = "" }) => {
    const isSidebarOpen = useAppSelector(selectIsSidebarOpen);

    return (
        <Tooltip placement="right" content={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"} className="hidden md:flex" invertColor small>
            <div
                className={clsx(
                    "app-drawer__toggle shadow rounded-full bg-base-100 top-11.5 opacity-0 not-lg:opacity-100 is-drawer-close:opacity-100 w-12 flex p-1",
                    className
                )}
            >
                <label htmlFor={id} className="btn btn-ghost btn-xs w-full h-full" data-tip="Collapse">
                    <CollapseIcon className="text-xs text-fade" open={isSidebarOpen} />
                </label>
            </div>
        </Tooltip>
    );
};

export default DrawerToggle;
