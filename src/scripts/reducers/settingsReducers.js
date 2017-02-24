import { actionTypes } from "../actions/settingsActions";

const defaults = {
  width: 800,
  height: 600,
  background: "#ddd",
  stack: []
}

function init (action = defaults) {
  const width = action.width || defaults.width;
  const height = action.height || defaults.height;

  return {
    width,
    height,
    stack: [
      [
        { key: "fillStyle", val: action.background || defaults.background },
        { fn: "fillRect", args: [0, 0, width, height] }
      ]
    ]
  }
}

const settings = (state = init(), action) => {
  switch (action.type) {
    case actionTypes.NEW_SETTINGS:
      return init(action.settings);
    default:
      return state;
  }
};

export default settings;
