export type Placement =
    | "bottom"
    | "bottom-end"
    | "bottom-center"
    | "top"
    | "top-end"
    | "top-center"
    | "left"
    | "left-end"
    | "left-center"
    | "right"
    | "right-end"
    | "right-center";

export type DropdownPlacement = "dropdown-end" | "dropdown-center" | "dropdown-bottom" | "dropdown-top" | "dropdown-left" | "dropdown-right";

export interface DropdownItemModel {
    label: React.ReactNode;
    value: string | number;
    disabled?: boolean;
    navigateOptions?: {
        pathname?: string;
        hash?: string;
    };
}

export type DropdownVariant = "neutral" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error" | "default";

export interface DropdownGroupProps {
    label: string;
}

export interface DropdownItemProps {
    item: DropdownItemModel;
    onSelect?: (value: string | number) => void;
    className?: string;
    beforeExtra?: React.ReactNode;
    afterExtra?: React.ReactNode;
    isLoading?: boolean;
    isActive?: boolean;
}

export type DropdownHookType = { onChange: (bool: boolean) => void };

export interface DropdownSeparatorProps {
    className?: string;
}

export interface DropdownItemLabelProps {
    className?: string;
    children?: React.ReactNode;
}
