import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import clsx from "clsx";

import { PageContext } from "@/common/context/PageContext";

interface PageContainerProps {
    alternative?: boolean;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    hiddenScroll?: boolean;
}

const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
    ({ alternative, children, title, subtitle, className, hiddenScroll = false }, ref) => {
        const internalRef = useRef<HTMLDivElement>(null);
        const [, rerender] = useState(false);

        // This ensures that if a parent passes a ref, it still gets the DOM element
        useImperativeHandle(ref, () => internalRef.current!);

        const pageContainerClassName = useMemo(() => {
            let str = className || "";
            if (alternative) str += " page--alternative";
            return str;
        }, [className, alternative]);

        useEffect(() => {
            rerender(true);
        }, [internalRef.current]);

        return (
            <PageContext.Provider value={{ containerRef: internalRef }}>
                <div className={clsx("page flex flex-col h-full w-full gap-10 pr-4 sm:p-0", pageContainerClassName)}>
                    {title && (
                        <div className="page__title text-center">
                            {subtitle && <span className="text-lg text-primary-300 font-bold!">{subtitle}</span>}
                            <h2 className="text-secondary-100 max-w-7xl">{title}</h2>
                        </div>
                    )}
                    <div
                        ref={internalRef}
                        className={clsx(
                            "page__content grow shrink basis-0 min-h-0 w-full flex justify-center",
                            hiddenScroll ? "overflow-hidden" : "overflow-auto"
                        )}
                    >
                        {internalRef.current && children}
                    </div>
                </div>
            </PageContext.Provider>
        );
    }
);

PageContainer.displayName = "PageContainer";

export default PageContainer;
