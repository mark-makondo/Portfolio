import appConfig from "@/app.config";
import EmailIcon from "../../icons/EmailIcon";
import GithubIcon from "../../icons/GithubIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";

export default [
    {
        Icon: GithubIcon,
        link: appConfig.socials.github
    },
    {
        Icon: LinkedinIcon,
        link: appConfig.socials.linkedin
    },
    {
        Icon: EmailIcon,
        link: `mailto:${appConfig.socials.email}`
    }
];
