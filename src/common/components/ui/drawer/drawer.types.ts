export type DrawerGroupByPathType = {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    paths?: string[];
};

export interface DrawerProps {
    id: string;
    children?: React.ReactNode;
    header?: React.ReactNode;
    className?: string;
    data?: DrawerItemProps[];
    size?: {
        open: number;
        close: number;
    };
    isOpen?: boolean;
    onChange?: (checked: boolean) => void;
    hideToggle?: boolean;
    onlyBaseDrawer?: boolean;
    classNames?: {
        parent?: string;
        children?: string;
        side?: string;
        sideContainer?: string;
    };
    standAlone?: boolean;
    groupByPaths?: DrawerGroupByPathType[];
}

export interface DrawerItemProps {
    icon?: React.ReactNode;
    label: React.ReactNode;
    onClick?: () => void;
    className?: string;
    pathname?: string;
    hash?: string;
    replace?: boolean;
    data?: DrawerItemProps[];
    isBottom?: boolean;
    isOpen?: boolean;
    style?: React.CSSProperties | object;
    disabled?: boolean;
    exclude?: boolean;
    extraInfo?: {
        type: "warning" | "error" | "info";
        message: "";
    };
}
