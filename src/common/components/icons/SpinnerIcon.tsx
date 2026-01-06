import { useMemo } from "react";
import { IconProps } from "@/types/common.types";
import Icon from "@images/circle-hole.svg?react";

const SpinnerIcon: React.FC<IconProps> = (props) => {
    const className = useMemo(() => {
        let str = "animate-spin";
        if (props.className) str += ` ${props.className}`;
        else str += " size-5 text-white";
        return str;
    }, [props.className]);

    return <Icon {...props} className={className} />;
};

export default SpinnerIcon;
