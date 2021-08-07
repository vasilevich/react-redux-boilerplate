import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import lazyWithPreload from 'lazy-with-preload';
import {linksMap} from 'data/utils/constants';

const ControlRouter = lazyWithPreload(() => import(/* webpackChunkName: "ControlRouter" , webpackMode:'lazy' */ '../../../controlRouter/ControlRouter'));
const SignInContainer = lazyWithPreload(() => import(/* webpackChunkName: "SignInContainer" , webpackMode:'lazy' */ 'data/redux/containers/signInContainer/SignInContainer'));
const ForgotPasswordContainer = lazyWithPreload(() => import(/* webpackChunkName: "ForgotPasswordContainer" , webpackMode:'lazy' */ 'data/redux/containers/forgotPasswordContainer/ForgotPasswordContainer'));

interface IMainProps {
    pathName: string;
    signedIn?: boolean;
}

const Main = (props: IMainProps) => {
    return (
        <main data-page={props.pathName}
              className={`mainContainer ${props.signedIn ? 'signedIn' : 'signedOut'}`.trim()}
        >
            <Suspense fallback={<div style={{minHeight: 500}}></div>}>
                <Switch>
                    <Route path={linksMap.login}>
                        <SignInContainer/>
                    </Route>
                    <Route path={linksMap.forgotPassword}>
                        <ForgotPasswordContainer/>
                    </Route>
                    <Route path={linksMap.control}>
                        <ControlRouter/>
                    </Route>
                </Switch>
            </Suspense>
        </main>
    );
};

Main.defaultProps = {
    pathName: '',
    signedIn: false,
};

export default React.memo(Main);
