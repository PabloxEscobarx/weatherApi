import { SET_WEATHER } from "../../constants";

const initialState = {};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
