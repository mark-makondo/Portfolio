/// <reference types="vite/client" />
import gsap from "gsap";

/**
 * Custom Window extensions for GSAP Carousel
 */
declare global {
    interface Window {
        scrollToOffset: (offset: number) => void;
        currentOffset: number;
        itemSpacing: number;
        scrub?: gsap.core.Tween;
    }
}

/**
 * Env declrations
 */
interface ImportMetaEnv {
    VITE_APP_SERVER_URI: string;
    VITE_APP_NAME: string;

    VITE_APP_WORK_STATUS: number;

    // Socials
    VITE_APP_LOCATION: string;
    VITE_APP_GOOGLE_API_KEY: string;
    VITE_APP_CRYPTO_SECRET_KEY: string;
    VITE_APP_GITHUB: string;
    VITE_APP_LINKEDIN: string;
    VITE_APP_EMAIL: string;
    VITE_APP_PHONE_QA: string;
    VITE_APP_PHONE_PH: string;
    VITE_APP_RESUME: string;

    // API
    VITE_APP_EMAILJS_SERVICE_ID: string;
    VITE_APP_EMAILJS_TEMPLATE_ID: string;
    VITE_APP_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

/**
 * Svg importing support via "?react"
 */

declare module "*.svg?react" {
    import React from "react";
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

// Regular SVG as URL
declare module "*.svg" {
    const content: string;
    export default content;
}

// This ensures the file is treated as a module to make sure our imported gsap will be read
export {};
