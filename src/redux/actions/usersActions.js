import * as types from "./actionTypes";
import * as usersApi from "../../api/usersApi";

function loadUsersSuccess(users) {
    return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
    return function (dispatch) {
        return usersApi
            .getUsers()
            .then((users) => {
                dispatch(loadUsersSuccess(users));
            })
            .catch((error) => {
                throw error;
            });
    };
}
