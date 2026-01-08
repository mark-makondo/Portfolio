import { IconProps } from "@/@types/common.types";
import Icon from "@images/reactIcons/RiErrorWarningFill.svg?react";

const WarningIcon: React.FC<IconProps> = (props) => {
    return <Icon {...props} />;
};

export default WarningIcon;
