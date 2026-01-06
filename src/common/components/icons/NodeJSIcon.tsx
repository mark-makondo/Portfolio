import React from "react";
import Icon from "@images/nodejs.svg?react";

interface NodeJSIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const NodeJSIcon: React.FC<NodeJSIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default NodeJSIcon;
