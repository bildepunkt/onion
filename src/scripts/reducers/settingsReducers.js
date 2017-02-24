import { actionTypes } from "../actions/settingsActions";

const sceneDefaults = {
  width: 640,
  height: 480,
  background: "white"
};

/**
 * @param {object} [settings = sceneDefaults] - the scene settings
 * @param {number} settings.width - the scene width
 * @param {number} settings.height - the scene height
 * @param {number} settings.background - the scene background color
 */
function init (settings = sceneDefaults) {
  return {
    width: settings.width || sceneDefaults.width,
    height: settings.height || sceneDefaults.height,
    background: settings.background || sceneDefaults.background
  }
}

const settings = (state = init(), action) => {
  switch (action.type) {
    case actionTypes.NEW_SETTINGS:
      return init(action.settings);
    default:
      return state;
  }
};

export default settings;
