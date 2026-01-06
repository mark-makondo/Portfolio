import { useEffect, useRef, useState } from "react";
import { DropdownHookType } from "./Dropdown.types";

export const useDropdown = ({ onChange }: DropdownHookType) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLElement | null>(null);

    const toggle = () => {
        setOpen((v) => !v);
        onChange(!open);
    };

    const close = () => {
        setOpen(false);
        onChange?.(false);
    };

    useEffect(() => {
        if (!open) return;

        const onClick = (e: MouseEvent) => {
            if (!menuRef.current?.contains(e.target as Node) && !triggerRef.current?.contains(e.target as Node)) {
                close();
            }
        };

        window.addEventListener("mousedown", onClick);
        return () => window.removeEventListener("mousedown", onClick);
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") return close();

            const items = Array.from(menuRef.current?.querySelectorAll("[data-dropdown-item]") || []) as HTMLElement[];

            if (!items.length) return;

            const currentIndex = items.findIndex((el) => el === document.activeElement);

            if (e.key === "ArrowDown") {
                e.preventDefault();
                const next = items[currentIndex + 1] || items[0];
                next.focus();
            }

            if (e.key === "ArrowUp") {
                e.preventDefault();
                const prev = items[currentIndex - 1] || items.at(-1)!;
                prev.focus();
            }

            if (e.key === "Enter") {
                (document.activeElement as HTMLElement)?.click();
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return {
        open,
        setOpen,
        toggle,
        triggerRef,
        menuRef
    };
};
