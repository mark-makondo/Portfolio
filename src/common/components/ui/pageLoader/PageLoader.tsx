import "nprogress/nprogress.css";

import { useEffect, useState } from "react";
import styles from "./PageLoader.module.css";
import NProgress from "nprogress";

const PageLoader: React.FC<PageLoaderProps> = ({ onUnmount, imgSrc = "", options = { showSpinner: false } }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => {
            NProgress.done();
            onUnmount?.();
        };
    }, []);

    useEffect(() => {
        if (mounted) {
            NProgress.configure({ showSpinner: !!options.showSpinner });
            NProgress.start();
        }
    }, [mounted]);

    return (
        <div className={styles.pageLoader}>
            <div className={styles.pageLoader__logo}>{imgSrc && <img alt="loader" src={imgSrc} />}</div>
        </div>
    );
};

export default PageLoader;

interface PageLoaderProps {
    onUnmount?: () => void;
    imgSrc?: string;
    options?: {
        showSpinner?: boolean;
    };
}
