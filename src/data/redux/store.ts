import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import {listenForHistoryChange} from 'redux-location-state';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import createWaitForState from 'redux-wait-for-state';
import guiReducer from 'data/redux/reducers/guiReducer';
import {loadState, saveState} from 'data/redux/middlewares/localStorageMiddleWare';
import {connectRouter, routerMiddleware} from 'connected-react-router';

import reduxPromiseMiddleware from 'redux-promise-middleware';
import authenticationReducer from 'data/redux/reducers/authenticationReducer';

import errorHandlerMiddleWare from 'data/redux/middlewares/errorHandlingMiddleWare';
import navigationReducer from './reducers/navigationReducer';


const {waitForState, setStore: addWaitForState} = createWaitForState();
const defaultMiddleWare = getDefaultMiddleware();
if (defaultMiddleWare.length > 2) {
  defaultMiddleWare.pop();
}
export const history = createBrowserHistory();


const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    gui: guiReducer,
    router: connectRouter(history),
    auth: authenticationReducer,
  },
  middleware: [
    thunk.withExtraArgument({waitForState}),
    reduxPromiseMiddleware,
    errorHandlerMiddleWare,
    saveState(),
    routerMiddleware(history),
  ],
  preloadedState: loadState(),
});

listenForHistoryChange(store, history);

addWaitForState(store);

export default store;
