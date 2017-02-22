import { actionTypes } from "../actions/sceneActions";

/**
 * @param {object} action - the action
 * @param {number} action.width - the document width
 * @param {number} action.height - the document height
 */
function init (action = {}) {
  return {
    width: action.width,
    height: action.height
  }
}

/**
 * @param {Map} state - the state
 * @param {object} action - the action
 */
function triggerButton (state, action) {
  return state;
}

const toolbar = (state = init(), action) => {
  switch (action.type) {
    case actionTypes.INIT:
      return init(action);
    case actionTypes.TRIGGER_BUTTON:
      return triggerButton(state, action);
    default:
      return state;
  }
};

export default toolbar;
