import { combineReducers } from "redux";
import users from "./usersReducer";
import posts from "./postsReducer";

const rootReducer = combineReducers({
    users: users,
    posts: posts,
});

export default rootReducer;
