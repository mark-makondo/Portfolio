import React from "react";
import clsx from "clsx";
import socials from "./socials";
import { useIsHomePath } from "@/common/hooks/useIsHome";
import appConfig from "@/app.config";

const SocialIcon: React.FC<{ children: React.ReactNode; link: string }> = ({ children, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-lg text-primary-content rounded-full shadow-sm bg-base-200 p-1.25 size-[1.4rem]"
        >
            {children}
        </a>
    );
};

const Socials: React.FC<{ min?: boolean }> = ({ min = false }) => {
    const isHome = useIsHomePath();
    return (
        <div className="socials flex gap-2 h-full items-center">
            {!min && <span className="label-sm">Follow Me</span>}
            {socials.map((social) => (
                <SocialIcon key={social.link} link={social.link}>
                    <social.Icon className="w-full h-auto" />
                </SocialIcon>
            ))}
            {!min && (
                <>
                    <div className={clsx("divider divider-horizontal h-full mx-1 py-1.5", (!isHome && "divider-secondary") || "")} />
                    <a
                        href={`mailto:${appConfig.socials.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx("text-sm", isHome ? "text-primary-600" : "text-neutral-black-content")}
                    >
                        {appConfig.socials.email}
                    </a>
                </>
            )}
            <div className={clsx("divider divider-horizontal h-full mx-1 py-1.5", (!isHome && "divider-secondary") || "")} />
            <a
                href={appConfig.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx("text-sm", isHome ? "text-primary-600" : "text-neutral-black-content")}
            >
                View/Download Resume
            </a>
        </div>
    );
};

export default Socials;
