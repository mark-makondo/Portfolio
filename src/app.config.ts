import { getEnvNumber } from "./common/utilities/helper";

export default {
    appName: import.meta.env.VITE_APP_NAME,
    location: import.meta.env.VITE_APP_LOCATION,
    isAvailableForWork: getEnvNumber("VITE_APP_WORK_STATUS") === 1,
    url: {
        server: import.meta.env.VITE_APP_SERVER_URI
    },
    socials: {
        email: import.meta.env.VITE_APP_EMAIL,
        github: import.meta.env.VITE_APP_GITHUB,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        whatsapp: import.meta.env.VITE_APP_PHONE_QA,
        resume: import.meta.env.VITE_APP_RESUME
    },
    api: {
        email: {
            serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        }
    }
};
