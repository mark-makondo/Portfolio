/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_SERVER_URI: string;
    VITE_APP_NAME: string;
    VITE_APP_COMPANY_NAME: string;
    VITE_APP_SUPPORT_EMAIL: string;
    VITE_APP_GRT_COMPANY_URI: string;
    VITE_APP_PRIVACY_POLICY: string;
    VITE_APP_TERMS_CONDITIONS: string;
    VITE_APP_LABOR_LAW: string;

    // Numeric values (note: all env vars are strings at runtime)
    VITE_APP_SUBSCRIPTION_TIME_REMAINING_WARNING: string;
    VITE_APP_FILE_EXPIRY_TIME_REMAINING_WARNING: string;
    VITE_APP_BANNER_IDLE_INTERVAL: string;
    VITE_APP_BANNER_PLAY_INTERVAL: string;
    VITE_APP_MOBILE_PUSH_NOTIF_COOLDOWN: string;
    VITE_APP_DAILY_LOGIN_ACTIVITY_COOLDOWN: string;
    VITE_APP_INC_STATUS_WAITING_PERIOD: string;

    // API keys
    VITE_APP_GOOGLE_API_KEY: string;
    VITE_APP_CRYPTO_SECRET_KEY: string;
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
