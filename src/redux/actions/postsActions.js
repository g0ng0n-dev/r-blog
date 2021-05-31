import * as types from "./actionTypes";
import * as postsApi from "../../api/postsApi";

function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

function filterPostsSuccessByUserId(id) {
  return { type: types.FILTER_POSTS_BY_USER_ID_SUCCESS, id };
}

export function filterPostByUserId(id) {
  return function (dispatch) {
    dispatch(filterPostsSuccessByUserId(id));
  };
}

export function loadPosts() {
  return function (dispatch) {
    console.log("api");
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
