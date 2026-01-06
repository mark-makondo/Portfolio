export default {
    appName: import.meta.env.VITE_APP_NAME,
    url: {
        server: import.meta.env.VITE_APP_SERVER_URI
    },
    socials: {
        email: import.meta.env.VITE_APP_EMAIL,
        github: import.meta.env.VITE_APP_GITHUB,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        whatsapp: import.meta.env.VITE_APP_PHONE_QA,
        resume: import.meta.env.VITE_APP_RESUME
    }
};
