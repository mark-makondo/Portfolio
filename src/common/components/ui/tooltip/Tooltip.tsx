import React, { useState, useMemo, Ref } from "react";
import { createPortal } from "react-dom";
import {
    useFloating,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    flip,
    offset,
    shift,
    safePolygon,
    useMergeRefs,
    type Placement
} from "@floating-ui/react";

interface TooltipProps {
    children: React.ReactElement;
    content: React.ReactNode;
    placement?: Placement;
    hidden?: boolean;
    small?: boolean;
    invertColor?: boolean;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, placement = "top", hidden, small, invertColor, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { x, y, refs, strategy, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        middleware: [offset(8), flip(), shift({ padding: 5 })]
    });

    const hover = useHover(context, {
        move: false,
        delay: {
            open: 100,
            close: 0
        },
        handleClose: safePolygon()
    });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

    const referenceRef = useMergeRefs([refs.setReference, getReferenceProps().ref as Ref<unknown> | undefined]);
    const floatingRef = useMergeRefs([refs.setFloating, getFloatingProps().ref as Ref<unknown> | undefined]);

    const portalTarget = useMemo(() => {
        if (typeof document !== "undefined") {
            return document.body;
        }
        return null;
    }, []);

    const tooltipContentClassName = useMemo(() => {
        let str = "tooltip-open tooltip-primary rounded-full shadow-lg p-2 max-w-xs text-sm font-medium transition-opacity duration-150";
        if (small) str += " text-xs";
        if (invertColor) str += " bg-black text-white";
        else str += " bg-neutral-content text-neutral";
        if (className) str += ` ${className}`;
        return str;
    }, [small, invertColor]);

    if (hidden) {
        return <>{children}</>;
    }

    return (
        <>
            {React.cloneElement(children, {
                ref: referenceRef,
                ...getReferenceProps(),
                className: `${(children.props as any)?.className || ""} focus:outline-none`
            } as any)}
            {isOpen &&
                portalTarget &&
                createPortal(
                    <div
                        ref={floatingRef}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            zIndex: 9999
                        }}
                        className={tooltipContentClassName}
                        {...getFloatingProps()}
                    >
                        {content}
                    </div>,
                    portalTarget
                )}
        </>
    );
};

export default Tooltip;
