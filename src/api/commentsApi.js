import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/posts/";

export function getCommentsByPostId(id) {
  return fetch(baseUrl + id + "/comments")
    .then(handleResponse)
    .catch(handleError);
}
