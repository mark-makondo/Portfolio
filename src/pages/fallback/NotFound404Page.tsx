import { useNavigate } from "react-router";

const NotFound404Page: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = (): void | Promise<void> => navigate("/");

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-blue-20">
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/404.webp')` }} />

            <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
                <button onClick={handleGoHome} className="btn btn-primary gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFound404Page;
