import { ADD_USER, REMOVE_USER } from '../actions/actionTypes';

const initialState = {
  users: [],
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.user),
      };
    default:
      return state;
  }
}
