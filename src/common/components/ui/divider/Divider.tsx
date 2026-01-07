import clsx from "clsx";
import { useMemo } from "react";

interface DividerProps {
    secondary?: boolean;
    className?: string;
    horizontal?: boolean;
    children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ secondary = false, className = "", horizontal = false, children }) => {
    const dividerClassName = useMemo(() => {
        let str = className || "";
        if (horizontal) str += " divider-horizontal h-full";
        if (secondary) str += " divider-secondary";
        return str;
    }, [secondary, className, horizontal]);

    if (children) return <div className={clsx("divider", dividerClassName)}>{children}</div>;
    return <div className={clsx("divider", dividerClassName)} />;
};

export default Divider;
