import React from "react";
import Logo from "@images/logo.svg?react";
import LogoAlt from "@images/logo-with-bg.svg?react";

interface LogoIconProps {
    style?: React.CSSProperties;
    className?: string;
    alternative?: boolean;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className, alternative, ...props }) => {
    return alternative ? <LogoAlt className={className} {...props} /> : <Logo className={className} {...props} />;
};

export default LogoIcon;
