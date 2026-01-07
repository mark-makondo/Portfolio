import clsx from "clsx";
import { useMemo } from "react";

interface PageContainerProps {
    alternative?: boolean;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ alternative, children, title, subtitle, className }) => {
    const pageContainerClassName = useMemo(() => {
        let str = className || "";
        if (alternative) str += " page--alternative";
        return str;
    }, [className, alternative]);

    return (
        <div className={clsx("page flex flex-col h-full w-full gap-10", pageContainerClassName)}>
            {title && (
                <div className="page__title text-center">
                    {subtitle && <span className="text-lg text-primary-300 font-bold!">{subtitle}</span>}
                    <h2 className="text-secondary-100 max-w-7xl">{title}</h2>
                </div>
            )}
            <div className="page__content grow shrink basis-0 min-h-0 w-full p-4 flex justify-center overflow-auto">{children}</div>
        </div>
    );
};

export default PageContainer;
