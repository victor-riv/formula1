import { combineReducers } from "redux";
import driversReducer from "./driversReducer";

export default combineReducers({
  formula1: driversReducer
});
