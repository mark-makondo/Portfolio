import { Outlet } from "react-router";
import clsx from "clsx";
import Navbar from "@/common/components/shared/navbar/Navbar";
import { useIsHomePath } from "@/common/hooks/useIsHome";
import Copyright from "@/common/components/shared/copyright/Copyright";

interface PublicLayoutProps {
    isAdmin?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = () => {
    const isHome = useIsHomePath();

    return (
        <div className={clsx("public-layout public-layout--company w-full h-screen", isHome ? "bg-base-200" : "bg-base-300")}>
            <div className="container m-auto flex flex-col h-full relative">
                <Navbar />
                <div className="flex gap-1 grow shrink basis-0 min-h-0 py-4 pb-8 pt-12 max-h-240 relative">
                    <div
                        className={clsx(
                            "layout-line flex flex-col h-full items-center gap-4",
                            isHome ? "text-neutral-white-content" : "text-neutral-black-content"
                        )}
                    >
                        <span className="[writing-mode:vertical-lr] text-inherit">full stack engineer</span>
                        <div className={clsx("divider divider-horizontal grow", (!isHome && "divider-secondary") || "")}></div>
                        <span className="[writing-mode:vertical-lr]">2026</span>
                    </div>
                    <Outlet />
                </div>
                <Copyright className="text-neutral-black-content label-sm text-center mb-4 ml-12" hidden={isHome} />
            </div>
        </div>
    );
};

export default PublicLayout;
