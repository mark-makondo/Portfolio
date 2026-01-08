import { IconProps } from "@/@types/common.types";
import Icon from "@images/reactIcons/FaChevronRight.svg?react";
import clsx from "clsx";

interface ArrowRightIconProps {
    isOpen?: boolean;
}

const DropdownArrowIcon: React.FC<IconProps & ArrowRightIconProps> = ({ className, isOpen = false, ...props }) => {
    return (
        <Icon className={clsx(`transition-transform duration-300 ease-in-out ${className || ""}`, isOpen ? "rotate-270" : "rotate-90")} {...props} />
    );
};

export default DropdownArrowIcon;
