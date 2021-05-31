import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.FILTER_POSTS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        filteredPosts: state.posts.filter(
          (post) => post.userId === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
}
