import {createSelector} from 'redux-starter-kit';

export const isLoggedInSelector = (() => createSelector(["auth.initialized", "auth.isLoading", "auth.isSignedIn"], (isInitialized, isLoading, isSignedIn) => {
  if (isSignedIn === false && (isInitialized !== true || isLoading === true))
    return null;
  return !!isSignedIn;
}))();
