import { combineReducers } from "redux";
import themeChange from "./themeChange";
import sort from "./sort";

const rootReducer = combineReducers({ themeChange, sort });

export default rootReducer;
