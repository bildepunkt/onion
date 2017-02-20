import { combineReducers } from "redux";
import toolbar from "./toolbar";
import sidebar from "./sidebar";
import draw from "./draw";

const todoApp = combineReducers({
  toolbar,
  sidebar,
  draw
});

export default todoApp;
