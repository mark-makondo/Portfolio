import React from "react";
import Logo from "@images/logo.svg?react";
import LogoAlt from "@images/logo-with-bg.svg?react";
import LogoCombined from "@images/logo-combine.svg?react";

interface LogoIconProps {
    style?: React.CSSProperties;
    className?: string;
    alternative?: boolean;
    combine?: boolean;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className, alternative, combine, ...props }) => {
    if (combine) return <LogoCombined className={className} {...props} />;
    if (alternative) return <LogoAlt className={className} {...props} />;
    return <Logo className={className} {...props} />;
};

export default LogoIcon;
