import React from "react";
import Icon from "@images/linkedin.svg?react";

interface LinkedinIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default LinkedinIcon;
