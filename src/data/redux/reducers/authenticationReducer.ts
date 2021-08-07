import {createReducer} from 'redux-starter-kit';

export interface IUser {
  id: number;
  email: string;

  firstName: string;
  lastName: string;
  createdAt: number;
  updatedAt: number;
}

const initialNavigationReducerState = {
  initialized: false,
  initializationTime: 0,
};

const authenticationReducer = createReducer(initialNavigationReducerState, {});
export default authenticationReducer;
