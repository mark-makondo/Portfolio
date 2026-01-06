import React from "react";
import Icon from "@images/sequelize.svg?react";

interface SequelizeIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const SequelizeIcon: React.FC<SequelizeIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default SequelizeIcon;
