import { createStore } from "redux";

const initialSortState = { sortMode: "top" };

const sortChange = (state = initialSortState, action) => {
  switch (action.type) {
    case "NEW":
      return { sortMode: "new" };
      break;
    case "TOP":
      return { sortMode: "top" };
      break;
    default:
      return { sortMode: state.sortMode };
  }
};

export default sortChange;
