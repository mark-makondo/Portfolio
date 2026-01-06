import { DrawerGroupByPathType, DrawerItemProps } from "./drawer.types";

export const mergeGroupToData = (items: DrawerItemProps[], groupByPath: DrawerGroupByPathType[]) => {
    return items.reduce((acc: DrawerItemProps[], item) => {
        const foundGroup = groupByPath.find((group) => group.paths!.includes(item.pathname as string));

        if (foundGroup) {
            let grouped = acc.find((i) => i.label === foundGroup.label);

            if (!grouped) {
                grouped = {
                    icon: foundGroup.icon,
                    label: foundGroup.label,
                    data: []
                };

                acc.push(grouped);
            }

            grouped.data!.push(item);
        } else {
            acc.push(item);
        }

        return acc;
    }, []);
};
