import { createContext, useContext, RefObject } from "react";

interface PageContextType {
    containerRef: RefObject<HTMLDivElement | null> | null;
}

export const PageContext = createContext<PageContextType>({ containerRef: null });

export const usePageContext = () => useContext(PageContext);
