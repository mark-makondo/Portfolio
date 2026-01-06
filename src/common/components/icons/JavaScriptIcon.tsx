import React from "react";
import Icon from "@images/javascript.svg?react";

interface JavaScriptIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const JavaScriptIcon: React.FC<JavaScriptIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default JavaScriptIcon;
