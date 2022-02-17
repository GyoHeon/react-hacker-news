import { createStore } from "redux";

const initialThemeState = { isWhite: true };

const themeChange = (state = initialThemeState, action) => {
  switch (action.type) {
    case "CHANGE":
      return { isWhite: !state.isWhite };
    default:
      return { isWhite: state.isWhite };
  }
};

export const themeChangeActions = themeChange.actions;
export default themeChange;
