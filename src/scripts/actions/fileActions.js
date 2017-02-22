export const actionTypes = Object.freeze({
  TRIGGER_BUTTON: "TRIGGER_BUTTON"
});

/**
 * @param {enum} button - the button type
 */
export const triggerButton = (button) => ({
  type: actionTypes.TRIGGER_BUTTON,
  button
});
