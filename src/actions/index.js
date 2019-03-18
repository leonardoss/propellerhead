import { ADD_USER, REMOVE_USER, IS_AUTHENTICATED } from './actionTypes';

export function isAuthenticated(user) {
  return {
    type: IS_AUTHENTICATED,
    user: user,
    authenticated: true,
  };
}

export function addUser(value) {
  return {
    type: ADD_USER,
    user: value,
  };
}

export function removeUser(value) {
  return {
    type: REMOVE_USER,
    user: value,
  };
}
