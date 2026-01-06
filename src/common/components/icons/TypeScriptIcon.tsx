import React from "react";
import Icon from "@images/typescript.svg?react";

interface TypeScriptIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const TypeScriptIcon: React.FC<TypeScriptIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default TypeScriptIcon;
