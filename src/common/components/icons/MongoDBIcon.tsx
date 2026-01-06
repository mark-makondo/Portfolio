import React from "react";
import Icon from "@images/mongodb.svg?react";

interface MongoDBIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const MongoDBIcon: React.FC<MongoDBIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default MongoDBIcon;
