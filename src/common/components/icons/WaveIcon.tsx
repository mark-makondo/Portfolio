import React from "react";
import Icon from "@images/wave.svg?react";

interface WaveIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const WaveIcon: React.FC<WaveIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default WaveIcon;
