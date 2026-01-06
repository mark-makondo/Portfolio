import { Outlet } from "react-router";
import clsx from "clsx";
import Navbar from "@/common/components/shared/navbar/Navbar";
import { useIsHomePath } from "@/common/hooks/useIsHome";

interface PublicLayoutProps {
    isAdmin?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = () => {
    const isHome = useIsHomePath();
    return (
        <div className={clsx("public-layout public-layout--company w-full", isHome ? "bg-base-200" : "bg-base-300")}>
            <div className="container m-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;
