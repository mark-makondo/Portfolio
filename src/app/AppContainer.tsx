import React from "react";
import { ToastContainer } from "react-toastify";

interface AppContainerProps {
    children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer limit={2} autoClose={3000} pauseOnHover newestOnTop />
        </>
    );
};

export default AppContainer;
