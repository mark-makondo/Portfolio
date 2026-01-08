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
        <div className={clsx("card", className || classNames?.parent)} {...rest}>
            <div className="card__header p-4 bg-base-100 text-neutral-black-content grow shrink basis-0 items-center justify-center">{header}</div>
            <div className={clsx("card-body p-4 flex items-center justify-center bg-base-200 text-neutral-white-content flex-0", classNames?.body)}>
                {children}
            </div>
        </div>
    );
};

export default Card;
