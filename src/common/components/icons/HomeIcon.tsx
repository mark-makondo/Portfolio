import React from "react";
import Icon from "@images/home.svg?react";

interface HomeIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default HomeIcon;
