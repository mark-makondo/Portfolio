import clsx from "clsx";
import { useMemo } from "react";

interface BadgeProps {
    className?: string;
    children: React.ReactNode;
    size?: size;
}

type size = "sm" | "md" | "lg";

const Badge: React.FC<BadgeProps> = ({ className = "", children, size = "sm" }) => {
    const badgeClassName = useMemo(() => {
        let str = className;
        switch (size) {
            case "sm":
                str += " badge-sm";
                break;
            case "md":
                str += " badge-md";
                break;
            case "lg":
                str += " badge-lg";
                break;
            default:
                break;
        }
        return str;
    }, [size, className]);

    return <div className={clsx("badge", badgeClassName)}>{children}</div>;
};

export default Badge;
