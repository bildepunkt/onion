export const actionTypes = Object.freeze({
  NEW_SETTINGS: "NEW_SETTINGS"
});

/**
 * @param {boolean} settings - the new scene settings
 */
export const newSettings = (settings) => ({
  type: actionTypes.NEW_SETTINGS,
  settings
});
