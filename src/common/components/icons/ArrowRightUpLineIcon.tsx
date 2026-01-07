import React from "react";
import Icon from "@images/reactIcons/RiArrowRightUpLine.svg?react";

interface ArrowRightUpLineIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const ArrowRightUpLineIcon: React.FC<ArrowRightUpLineIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default ArrowRightUpLineIcon;
