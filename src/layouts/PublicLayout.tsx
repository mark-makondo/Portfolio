import { Outlet } from "react-router";

interface PublicLayoutProps {
    isAdmin?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = () => {
    return (
        <div className="public-layout public-layout--company">
            <Outlet />
        </div>
    );
};

export default PublicLayout;
