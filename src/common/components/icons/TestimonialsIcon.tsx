import React from "react";
import Icon from "@images/testimonals.svg?react";

interface TestimonialsIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const TestimonialsIcon: React.FC<TestimonialsIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default TestimonialsIcon;
