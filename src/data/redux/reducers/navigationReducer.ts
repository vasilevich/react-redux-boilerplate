import {createReducer} from 'redux-starter-kit';
import {LOCATION_POP} from 'redux-location-state/lib/constants';
import {LOCATION_CHANGE} from 'connected-react-router';

const initialNavigationReducerState = {
  lastChange: 0,
  allowNavigation: true,
  history: [],
};

const navigationReducer = createReducer(initialNavigationReducerState, {

  [LOCATION_POP]: (state, action) => {
    state.lastChange = new Date().getTime();
    //  state.menuCollapseToggle = false;
    state.allowNavigation = true;
  },
  [LOCATION_CHANGE]: (state, {payload}) => {
    state.history.push({
      pathname: `${payload.location.pathname}${payload.location.search}`,
      timeStamp: new Date().getTime(),
    });
    if (state.history.length >= 10) {
      state.history.shift();
    }
  },
});
export default navigationReducer;
