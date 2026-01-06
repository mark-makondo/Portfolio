import { ROUTE_PATHS, RoutePathsType } from "@/router/registry";
import HomeIcon from "../../icons/HomeIcon";
import ProjectsIcon from "../../icons/ProjectsIcon";
import TestimonialsIcon from "../../icons/TestimonialsIcon";
import ContactIcon from "../../icons/ContactIcon";

export default [
    {
        pathname: ROUTE_PATHS.HOME,
        label: "Home",
        Icon: HomeIcon
    },
    {
        pathname: ROUTE_PATHS.PROJECTS,
        label: "Projects",
        Icon: ProjectsIcon
    },
    {
        pathname: ROUTE_PATHS.TESTIMONIALS,
        label: "Testimonials",
        Icon: TestimonialsIcon
    },
    {
        pathname: ROUTE_PATHS.CONTACT_ME,
        label: "Contact Me",
        Icon: ContactIcon
    }
] as {
    pathname: RoutePathsType;
    label: string;
    Icon: React.FC;
}[];
