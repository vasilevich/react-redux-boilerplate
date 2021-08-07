import React from "react";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";


const AdminRouter = () => {
    return (<>
            <Navigation/>
            <Main/>
        </>    );
};

AdminRouter.defaultProps = {};

export default AdminRouter;
