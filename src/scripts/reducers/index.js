import { combineReducers } from "redux";
import common from "./commonReducers";
import scene from "./sceneReducers";
import settings from "./settingsReducers";

const todoApp = combineReducers({
  common,
  scene,
  settings
});

export default todoApp;
