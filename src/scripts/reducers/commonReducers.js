import { actionTypes } from "../actions/commonActions";

export const initialState = {
    newSceneModalOpen: false
};

function toggleNewSceneModal (state, action) {
  return Object.assign({}, state, {
    newSceneModalOpen: action.override !== undefined ? override : !state.newSceneModalOpen
  });
}

const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NEW_SCENE_MODAL:
      return toggleNewSceneModal(state, action);
    default:
      return state;
  }
};

export default common;
