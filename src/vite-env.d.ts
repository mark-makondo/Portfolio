/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_SERVER_URI: string;
    VITE_APP_NAME: string;

    // Socials
    VITE_APP_GOOGLE_API_KEY: string;
    VITE_APP_CRYPTO_SECRET_KEY: string;
    VITE_APP_GITHUB: string;
    VITE_APP_LINKEDIN: string;
    VITE_APP_EMAIL: string;
    VITE_APP_PHONE_QA: string;
    VITE_APP_PHONE_PH: string;
    VITE_APP_RESUME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

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
