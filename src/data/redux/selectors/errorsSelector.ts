import {createSelector} from 'redux-starter-kit';

export const isEmailUniqueErrorSelector = (() => createSelector(["usersService"], (users) => {
  return !!(users && users.isError && typeof users.isError.data === 'object' && typeof users.isError.data.constraint === 'string' && users.isError.data.constraint.toLowerCase() === "users_email_unique");
}))();

export const isInvalidLoginSelector = (() => createSelector(["auth"], (auth) => {
  return auth.isError ? auth.isError.name === "NotAuthenticated" : false;
}))();

