import * as types from "./actionTypes";
import * as postsApi from "../../api/postsApi";

function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
  return function (dispatch) {
    return postsApi
      .getPosts()
      .then((posts) => {
        dispatch(loadPostsSuccess(posts));
      })
      .catch((error) => {
        throw error;
      });
  };
}
