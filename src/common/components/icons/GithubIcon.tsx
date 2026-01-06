import React from "react";
import Icon from "@images/github.svg?react";

interface GithubIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const GithubIcon: React.FC<GithubIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default GithubIcon;
