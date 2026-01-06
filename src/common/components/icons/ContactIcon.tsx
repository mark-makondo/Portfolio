import React from "react";
import Icon from "@images/contact.svg?react";

interface ContactIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default ContactIcon;
