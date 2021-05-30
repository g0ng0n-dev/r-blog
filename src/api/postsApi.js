import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/posts/";

export function getPosts() {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}
