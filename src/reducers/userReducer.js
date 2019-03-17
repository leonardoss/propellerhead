import {
  ADD_USER,
  REMOVE_USER,
  IS_AUTHENTICATED,
} from '../actions/actionTypes';

const initialState = {
  user: false,
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        user: action.user,
      };
    // case ADD_USER:
    //   return {
    //     ...state,
    //     users: [...state.users, action.user],
    //   };
    // case REMOVE_USER:
    //   return {
    //     ...state,
    //     users: state.users.filter(user => user.id !== action.user),
    //   };
    default:
      return state;
  }
}
