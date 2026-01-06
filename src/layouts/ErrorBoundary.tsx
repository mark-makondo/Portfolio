import { FallbackProps, ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 relative">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/404.webp')`
                }}
            />

            <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
                <button onClick={resetErrorBoundary} className="btn btn-primary gap-2">
                    Refresh
                </button>
            </div>
        </div>
    );
};

interface Props {
    children: React.ReactNode;
}

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // optional: reset app state or reload page
                window.location.reload();
            }}
        >
            {children}
        </ReactErrorBoundary>
    );
};
