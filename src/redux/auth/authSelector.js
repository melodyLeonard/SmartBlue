import { createSelector } from 'reselect';

const selectUser = (state) => state.auth;

// takes either and array or anny selector
export const selectCurrentUser = createSelector([ selectUser ], (user) => user.currentUser);

export const selectIsSignUpLoading = createSelector([ selectUser ], (user) => user.isSignUpLoading);

export const selectAuthError = createSelector([ selectUser ], (user) => user.error);

export const selectIsSignInLoading = createSelector([ selectUser ], (user) => user.isSignInLoading);
