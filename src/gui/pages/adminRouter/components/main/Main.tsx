import React from "react";
import {Route, Switch} from "react-router";
import {linksMap} from 'data/utils/constants';

interface IMainProps {
    pathName: string;
}

const Main = (props: IMainProps) => {
    return (
        <div data-page={props.pathName} className="mainAdminContainer">
            <Switch>
                <Route exact path={linksMap.adminUsers}>
                    admin users something
                </Route>
            </Switch>
        </div>
    );
};

Main.defaultProps = {
    pathName: "",
};

export default React.memo(Main);
