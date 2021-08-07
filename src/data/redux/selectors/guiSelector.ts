import {createSelector} from 'redux-starter-kit';

export const isLoadingSelector = (() => createSelector(["gui.loading", "auth.initialized"], (loading, initialized) => loading || !initialized))();

export const getInitializationTimeStamp = (() => createSelector(["auth.initializationTime"]))();


export const getPageVariablesSelector = (page: string) => (() => createSelector([`gui.pages.${page}`]))();

