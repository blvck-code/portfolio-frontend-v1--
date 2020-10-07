import { combineReducers } from "redux";
import messages from "./messages";
import errors from "./errors";
import projects from "./projects";

export default combineReducers({
  messages,
  errors,
  projects,
});
