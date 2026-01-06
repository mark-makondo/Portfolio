import React from "react";
import Icon from "@images/mail.svg?react";

interface EmailIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const EmailIcon: React.FC<EmailIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default EmailIcon;
    