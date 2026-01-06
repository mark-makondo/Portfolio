import React, { Suspense } from "react";
import { Provider } from "react-redux";
import AppRouter from "../router/Router";
import { store } from "./app.store";
import AppContainer from "./AppContainer";
import { ErrorBoundary } from "@/layouts/ErrorBoundary";
import PageLoader from "@/common/components/ui/pageLoader/PageLoader";

const App: React.FC = () => {
    return (
        <div className="app min-h-screen bg-base-200">
            <Provider store={store}>
                <ErrorBoundary>
                    <Suspense
                        fallback={
                            <div className="min-h-screen flex items-center justify-center">
                                <PageLoader />
                            </div>
                        }
                    >
                        <AppContainer>
                            <AppRouter />
                        </AppContainer>
                    </Suspense>
                </ErrorBoundary>
            </Provider>
        </div>
    );
};

export default App;
