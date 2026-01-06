import React from "react";
import OpenIcon from "@images/reactIcons/FaChevronRight.svg?react";
import clsx from "clsx";

interface CollapseIconProps {
    style?: React.CSSProperties;
    className?: string;
    open?: boolean;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({ className, open, ...props }) => {
    return (
        <OpenIcon
            className={clsx(
                "transition-transform duration-300 ease-in-out is-drawer-open:rotate-180 is-drawer-close:rotate-0",
                className,
                open ? "rotate-180" : "rotate-0"
            )}
            {...props}
        />
    );
};

export default CollapseIcon;
