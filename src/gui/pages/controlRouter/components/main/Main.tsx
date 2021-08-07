import React from 'react';
import styles from './Main.module.scss';
import {Route, Switch} from 'react-router';
import DashboardContainer from 'data/redux/containers/dashboardContainer/DashboardContainer';

import {linksMap} from 'data/utils/constants';

interface IMainProps {

}

const Main = (props: IMainProps) => {
    return (
        <div className={styles.mainControlContainer}>
            <Switch>
                <Route path={linksMap.dashboard}>
                    <DashboardContainer/>
                </Route>
            </Switch>
        </div>
    );
};

Main.defaultProps = {
    pathName: '',
};

export default React.memo(Main);
