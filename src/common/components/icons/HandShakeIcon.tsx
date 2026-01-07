import React from "react";
import Icon from "@images/handshake.svg?react";

interface HandShakeIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const HandShakeIcon: React.FC<HandShakeIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default HandShakeIcon;
