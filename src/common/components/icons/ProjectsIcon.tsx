import React from "react";
import Icon from "@images/works.svg?react";

interface ProjectsIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const ProjectsIcon: React.FC<ProjectsIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default ProjectsIcon;
