import React, { CSSProperties, ReactNode, useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router";
import clsx from "clsx";
import { useDropdown } from "./Dropdown.hooks";
import { DropdownGroupProps, DropdownItemLabelProps, DropdownItemProps, DropdownSeparatorProps, DropdownVariant, Placement } from "./Dropdown.types";
import { convertPlacementToDropdownClass } from "./Dropdown.helper";
import SpinnerIcon from "../../icons/SpinnerIcon";
import RouteService from "@/services/Route.service";

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode;
    placement?: Placement;
    autoPlacement?: boolean;
    variant?: DropdownVariant;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    onChange?: (bool: boolean) => void;
    open?: boolean;
}

const variantClasses: Record<DropdownVariant, string> = {
    default: "bg-base-100",
    neutral: "bg-neutral text-neutral-content",
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    accent: "bg-accent text-accent-content",
    ghost: "bg-base-100 shadow",
    info: "bg-info text-info-content",
    success: "bg-success text-success-content",
    warning: "bg-warning text-warning-content",
    error: "bg-error text-error-content"
};

export const Dropdown: React.FC<DropdownProps> = ({
    trigger,
    children,
    placement = "bottom",
    onChange = () => {},
    className,
    variant,
    open: outsideOpenState
}) => {
    const id = useId();
    const popoverId = `popover-${id}`;
    const anchorName = `--anchor-${id}`;

    const { open: isOpen = false, toggle, triggerRef, menuRef } = useDropdown({ onChange });

    const [portalEl] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(portalEl);
        return () => portalEl.remove();
    }, []);

    const dropdownClassName = useMemo(() => {
        let str = "dropdown menu rounded-box shadow-sm transition-all duration-200 origin-top mt-5 min-w-40";
        if (variantClasses) str += ` ${variantClasses[variant ?? "default"]}`;
        if (isOpen) str += " opacity-100 scale-100";
        else str += "opacity-0 scale-95 pointer-events-none";
        if (placement) str += ` ${convertPlacementToDropdownClass(placement)}`;
        return str;
    }, [variantClasses, isOpen, placement]);

    useEffect(() => {
        if (outsideOpenState !== isOpen) {
            triggerRef.current && triggerRef.current.click();
        }
    }, [outsideOpenState]);

    return (
        <>
            <button type="button" ref={triggerRef as any} className="btn btn-xs btn-ghost my-auto" popoverTarget={popoverId} onClick={toggle}>
                {trigger}
            </button>

            {createPortal(
                <ul
                    tabIndex={-1}
                    id={popoverId}
                    ref={menuRef as any}
                    popover="auto"
                    className={clsx(dropdownClassName, className)}
                    style={{ zIndex: 9999, anchorName } as CSSProperties}
                >
                    {children}
                </ul>,
                portalEl
            )}
        </>
    );
};

export const DropdownGroup: React.FC<DropdownGroupProps> = ({ label }) => {
    return <li className="menu-title px-2 py-1 opacity-70 text-xxs uppercase tracking-wide">{label}</li>;
};

export const DropdownSeparator: React.FC<DropdownSeparatorProps> = ({ className }) => <li className={clsx("my-1 h-px bg-black", className)} />;

export const DropdownItemLabel: React.FC<DropdownItemLabelProps> = ({ className, children }) => {
    return <li className={clsx("pointer-events-none", className)}>{children}</li>;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({ item, onSelect, className, beforeExtra, afterExtra, isLoading, isActive = false }) => {
    if (isLoading) {
        beforeExtra = <SpinnerIcon className="text-neutral size-5" />;
        item.disabled = true;
    }

    const navigate = useNavigate();
    const location = useLocation();

    const isActivePath = useMemo(() => {
        const navigateOpts = item?.navigateOptions;
        if (!navigateOpts) return false;
        return RouteService.isCurrentPathActive(location, { pathname: navigateOpts.pathname, hash: navigateOpts.hash });
    }, [item?.navigateOptions, location]);

    const handleSelect = () => {
        if (item?.navigateOptions?.pathname) {
            navigate(item?.navigateOptions);
        }
        onSelect?.(item.value);
    };

    return (
        <li className={isActive || isActivePath ? "menu-active rounded-full" : "text-fade"}>
            <button
                type="button"
                data-dropdown-item
                disabled={item.disabled}
                className={clsx("disabled:opacity-50 disabled:pointer-events-none text-xs font-medium btn-active", className)}
                onClick={handleSelect}
            >
                {beforeExtra}
                {item.label}
                {afterExtra}
            </button>
        </li>
    );
};
