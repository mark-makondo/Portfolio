import React from "react";
import Icon from "@images/linux.svg?react";

interface LinuxIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const LinuxIcon: React.FC<LinuxIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default LinuxIcon;
