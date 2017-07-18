// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)

import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => (
  APIUtil.login(user)
  .then(user1 => (dispatch(receiveCurrentUser(user1))),
  err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(user1 => (dispatch(receiveCurrentUser(user1))), err => (console.log(err)))
  // err => (dispatch(receiveErrors(err.responseJSON))))
);
