import React from "react";
import Icon from "@images/postgresql.svg?react";

interface PostgresSQLIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const PostgresSQLIcon: React.FC<PostgresSQLIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default PostgresSQLIcon;
