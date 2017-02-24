export const actionTypes = Object.freeze({
  TOGGLE_NEW_SCENE_MODAL: "TOGGLE_NEW_SCENE_MODAL"
});

/**
 * @param {boolean} override - overrides the toggle
 */
export const toggleNewSceneModal = (override) => ({
  type: actionTypes.TOGGLE_NEW_SCENE_MODAL,
  override
});
