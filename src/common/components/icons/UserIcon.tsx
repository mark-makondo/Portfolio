import { IconProps } from "@/@types/common.types";
import Icon from "@images/person-single.svg?react";

const UserIcon: React.FC<IconProps> = (props) => {
    return <Icon {...props} />;
};

export default UserIcon;
