import * as types from "./actionTypes";
import * as commentsApi from "../../api/commentsApi";

function loadCommentsSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments };
}

export function loadCommentsByPostId(id) {
  return function (dispatch) {
    return commentsApi
      .getCommentsByPostId(id)
      .then((comments) => {
        dispatch(loadCommentsSuccess(comments));
      })
      .catch((error) => {
        throw error;
      });
  };
}
