import { createStore } from "redux";

const initialThemeState = { isWhite: true };

const themeChange = (state = initialThemeState, action) => {
  switch (action.type) {
    case "THEMECHANGE":
      return { isWhite: !state.isWhite };
      break;
    default:
      return { isWhite: state.isWhite };
  }
};

export const themeChangeActions = themeChange.actions;
export default themeChange;
