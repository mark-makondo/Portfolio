import React from "react";
import Icon from "@images/whatsapp.svg?react";

interface WhatsAppIconProps {
    style?: React.CSSProperties;
    className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className, ...props }) => {
    return <Icon className={className} {...props} />;
};

export default WhatsAppIcon;
