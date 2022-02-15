import { createSelector } from 'reselect';

const selectUser = state => state.user; // me selecciona el estado del reducer user

export const selectCurrentUser = createSelector(

    [selectUser],

    (user) => user.currentUser
);