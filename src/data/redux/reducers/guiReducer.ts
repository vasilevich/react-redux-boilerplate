import {createReducer} from 'redux-starter-kit';
import {setLoadingAction} from 'data/redux/actions/guiActions';

interface IGuiReducerState {
  loading: boolean;
}

const initialGuiReducerState: IGuiReducerState = {
  loading: false,
};


const guiReducer = createReducer(initialGuiReducerState, {
  [setLoadingAction.type]: (state, {payload}) => {
    state.loading = payload.state;
  },
});
export default guiReducer;
