import { actionTypes } from "../actions/settingsActions";

function init () {
  return {
    canvasHasInitialized: false
  }
}

/**
 * @param {object} state - the state
 * @param {object} action - the action
 * @param {boolean} action.hasInitialized - whether the canvas has been resized initially
 */
function setCanvasHasInitialized (state, action) {
  return Object.assign({}, state, {
    canvasHasInitialized: action.hasInitialized
  });
}

const settings = (state = init(), action) => {
  switch (action.type) {
    case actionTypes.NEW_SCENE:
      return init();
    case actionTypes.SET_CANVAS_HAS_INITIALIZED:
      return setCanvasHasInitialized(state, action);
    default:
      return state;
  }
};

export default settings;
