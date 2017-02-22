import { combineReducers } from "redux";
import common from "./commonReducers";

const todoApp = combineReducers({
  common
});

export default todoApp;
