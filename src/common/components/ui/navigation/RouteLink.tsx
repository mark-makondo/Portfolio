import { useMemo } from "react";
import { Link } from "react-router";

interface RouteLinkProps {
    path?: string;
    className?: string;
    hash?: string;
    replace?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties | object;
}

const RouteLink: React.FC<RouteLinkProps> = ({ path = "/", hash = "", replace, children, ...rest }) => {
    const className = useMemo(() => {
        let str = "link text-xs";
        if (rest.className) str += ` ${rest.className}`;
        return str;
    }, [rest.className]);

    return (
        <Link {...rest} className={className} to={{ pathname: path, hash }} replace={replace}>
            {children}
        </Link>
    );
};

export default RouteLink;
