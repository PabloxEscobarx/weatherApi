import { combineReducers } from "redux";
import { weatherReducer } from "../reducers";

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
