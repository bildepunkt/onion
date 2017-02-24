export const actionTypes = Object.freeze({
  UPDATE_CANVAS_STYLE: "UPDATE_CANVAS_STYLE"
});

/**
 * @param {object} style - the React style object
 */
export const updateCanvasStyle = (style) => ({
  type: actionTypes.UPDATE_CANVAS_STYLE,
  style
});
