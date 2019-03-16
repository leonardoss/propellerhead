import { ADD_USER, REMOVE_USER } from './actionTypes';

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
