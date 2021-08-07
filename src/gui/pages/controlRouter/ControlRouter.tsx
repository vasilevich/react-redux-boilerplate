import React from 'react';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';

const ControlRouter = () => {
    return (
        <>
            <Navigation/>
            <Main/>
        </>
    );
};

ControlRouter.defaultProps = {};

export default ControlRouter;
