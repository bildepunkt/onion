import { actionTypes } from "../actions/sceneActions";

export const initialState = {
  style: {}
};

/**
 * @param {object} state  - [description]
 * @param {object} action - [description]
 */
function updateCanvasStyle (state, action) {
  return Object.assign({}, state, {
    style: Object.assign(state.style, action.style)
  });
}

const scene = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CANVAS_STYLE:
      return updateCanvasStyle(state, action);
    default:
      return state;
  }
};

export default scene;
