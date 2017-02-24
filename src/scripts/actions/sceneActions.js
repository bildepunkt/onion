export const actionTypes = Object.freeze({
  NEW_SCENE: "NEW_SCENE",
  SET_CANVAS_HAS_INITIALIZED: "SET_CANVAS_HAS_INITIALIZED"
});

export const newScene = () => ({ type: actionTypes.NEW_SCENE });

export const setCanvasHasInitialized = (hasInitialized) => ({
    type: actionTypes.SET_CANVAS_HAS_INITIALIZED,
    hasInitialized
});
