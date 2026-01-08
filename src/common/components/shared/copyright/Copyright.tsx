import clsx from "clsx";

interface CopyrightProps {
    hidden?: boolean;
    className?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ hidden = false, className = "" }) => {
    if (hidden) return null;
    return <div className={clsx("copyright", className)}>© 2026 Mark Makondo. All rights reserved.</div>;
};

export default Copyright;
