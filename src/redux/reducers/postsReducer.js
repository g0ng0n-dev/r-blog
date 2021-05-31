import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return [...state.posts, ...action.posts];
    case types.FILTER_POSTS_BY_USER_ID_SUCCESS:
      console.log("FILTER_POSTS_BY_USER_ID_SUCCESS");
      return state.filter((post) => post.userId === parseInt(action.id));
    default:
      return state;
  }
}
