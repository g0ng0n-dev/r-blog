import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      console.log(action);
      return action.users;
    default:
      return state;
  }
}
