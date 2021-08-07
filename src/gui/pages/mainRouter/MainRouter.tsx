import React from 'react';
import Footer from './components/footer/Footer';
import MainContainer from 'data/redux/containers/mainContainer/MainContainer';
import NavigationContainer from 'data/redux/containers/navigationContainer/NavigationContainer';
import {ConnectedRouter} from 'connected-react-router';
import {history} from 'data/redux/store';

interface IRouterProps {
}

class MainRouter extends React.PureComponent<IRouterProps, never> {
  render() {
    return (
      <ConnectedRouter history={history}>
        <NavigationContainer/>
        <MainContainer/>
        <Footer/>
      </ConnectedRouter>
    );
  }
}


export default React.memo(MainRouter);
