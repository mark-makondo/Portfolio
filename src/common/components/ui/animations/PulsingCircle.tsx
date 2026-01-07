import clsx from "clsx";

interface PulsingCircleProps {
    className?: string;
    statusType?: statusType;
}

export type statusType = "success" | "error" | "warning" | "info" | "";

const PulsingCircle: React.FC<PulsingCircleProps> = ({ statusType = "success" }) => {
    return (
        <span className="relative flex size-2">
            <span className={clsx("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", `bg-${statusType}`)}></span>
            <span className={clsx("relative inline-flex size-2 rounded-full", `bg-${statusType}`)}></span>
        </span>
    );
};

export default PulsingCircle;
