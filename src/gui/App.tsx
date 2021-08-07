import React from 'react';
import MainRouter from './pages/mainRouter/MainRouter';
import {ErrorBoundary as _ErrorBoundary} from 'react-error-boundary';


const ErrorFallback = ({error, resetErrorBoundary}) => (
    <div>website was updated, reload</div>
);


const ErrorBoundary: any = _ErrorBoundary;


const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MainRouter/>
        </ErrorBoundary>
    );
};

export default App;
