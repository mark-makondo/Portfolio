import React from "react";
import Icon from "@images/docker.svg?react";

interface DockerIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const DockerIcon: React.FC<DockerIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default DockerIcon;
