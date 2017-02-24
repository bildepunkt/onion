export const actionTypes = Object.freeze({
  NEW_SETTINGS: "NEW_SETTINGS"
});

/**
 * @param {object} settings - the settings object
 */
export const newSettings = (settings) => ({
  type: actionTypes.NEW_SETTINGS,
  settings
});
