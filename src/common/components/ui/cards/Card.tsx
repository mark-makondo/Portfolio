import React from "react";
import clsx from "clsx";

interface CardProps {
    className?: string;
    header?: React.ReactNode;
    children?: React.ReactNode;
    classNames?: {
        parent?: string;
        body?: string;
    };
}

const Card: React.FC<CardProps> = ({ className, children, classNames, header, ...rest }) => {
    return (
        <div className={clsx("card bg-base-100", className || classNames?.parent)} {...rest}>
            {header}
            <div className={clsx("card-body flex items-center justify-center", classNames?.body)}>{children}</div>
        </div>
    );
};

export default Card;
