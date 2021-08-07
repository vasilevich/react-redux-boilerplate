import {createSelector} from 'redux-starter-kit';

export const getPathName = (() => createSelector(["router.location.pathname"]))();
/**
 * Check if path name according to router is the same as the input
 * @param pathName
 */
export const isPathName = (pathName: string) => (() => createSelector(["router.location.pathname"], currentPathName => {
  if (currentPathName) {
    currentPathName = currentPathName.toLowerCase().split("/").join('').trim();
    pathName = pathName.toLowerCase().split("/").join('').trim();
    return currentPathName === pathName;
  }
  return false;
}))();

export const getQueryParamsSelector = (() => createSelector(["router.location.query"]))();
