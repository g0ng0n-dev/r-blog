import { combineReducers } from "redux";
import users from "./usersReducer";
import posts from "./postsReducer";
import comments from "./commentsReducer";

const rootReducer = combineReducers({
  users: users,
  posts: posts,
  comments: comments,
});

export default rootReducer;
