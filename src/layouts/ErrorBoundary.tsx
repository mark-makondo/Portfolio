import { FallbackProps, ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 relative">
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="display-xl font-work-sans">404</div>
                <p className="title-lg text-fade font-work-sans">Oops, Something went wrong!</p>
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
        <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
            {children}
        </ReactErrorBoundary>
    );
};
