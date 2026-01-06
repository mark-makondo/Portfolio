import { useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";

interface BreakPointOptions {
    mode?: "min" | "max";
    values?: number[];
    onChange?: (param: UseBreakPointReturnType) => void;
}

export type BreakPointSize = "custom" | "sm" | "md" | "lg" | "xl" | "";

export type UseBreakPointReturnType = {
    screen: BreakPointSize;
    customScreen: null | number;
};

export function useBreakpoint({ mode = "max", values = [], onChange }: BreakPointOptions): UseBreakPointReturnType {
    let retval: UseBreakPointReturnType = {
        screen: "" as BreakPointSize,
        customScreen: null
    };

    const createQuery = (vp: number | null): string => {
        if (!vp) return "";
        let str = "(min-width: ";
        if (mode === "max") str = "(max-width: ";
        return (str += `${vp}px)`);
    };

    const isSm = useMediaQuery(createQuery(640));
    const isMd = useMediaQuery(createQuery(768));
    const isLg = useMediaQuery(createQuery(1024));
    const isXl = useMediaQuery(createQuery(1280));

    if (mode === "max") {
        if (isSm) retval.screen = "sm";
        else if (isMd) retval.screen = "md";
        else if (isLg) retval.screen = "lg";
        else if (isXl) retval.screen = "xl";
        else retval.screen = "xl";
    } else {
        if (isSm) retval.screen = "sm";
        if (isMd) retval.screen = "md";
        if (isLg) retval.screen = "lg";
        if (isXl) retval.screen = "xl";
        if (!retval.screen) retval.screen = "sm";
    }

    values.forEach((value) => {
        const isCustom = useMediaQuery(createQuery(value));
        if (isCustom) {
            retval.screen = "custom";
            retval.customScreen = value;
        }
    });

    useEffect(() => {
        onChange?.(retval);
    }, [retval]);

    return retval;
}
