import React from "react";
import Icon from "@images/react.svg?react";

interface ReactIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const ReactIcon: React.FC<ReactIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default ReactIcon;
