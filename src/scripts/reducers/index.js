import { combineReducers } from "redux";
import sidebar from "./sidebarReducers";
import draw from "./drawReducers";
import file from "./fileReducers";

const todoApp = combineReducers({
  sidebar,
  draw,
  file
});

export default todoApp;
