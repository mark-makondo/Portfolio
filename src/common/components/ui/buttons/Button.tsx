import React, { useMemo } from "react";
import SpinnerIcon from "@icons/SpinnerIcon";

interface ButtonProps {
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    isLoading?: boolean;
    active?: boolean;
    beforeExtra?: React.ReactNode;
    afterExtra?: React.ReactNode;
    children?: React.ReactNode;
    type?: "reset" | "button" | "submit" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ className, style, disabled, active, beforeExtra, afterExtra, isLoading, children, ...rest }) => {
    const classes = useMemo(() => {
        let str = "btn btn-sm";
        if (className) str += ` ${className}`;
        if (disabled || isLoading) str += " btn-disabled";
        if (active) str += " btn-active";
        return str;
    }, [className, disabled, isLoading, active]);

    return (
        <button type="button" className={classes} style={style} disabled={isLoading || disabled} {...rest}>
            {isLoading ? (
                <>
                    <SpinnerIcon className="mr-1 size-5" />
                    Processing...
                </>
            ) : (
                <>
                    {beforeExtra}
                    {children}
                    {afterExtra}
                </>
            )}
        </button>
    );
};

export default Button;
