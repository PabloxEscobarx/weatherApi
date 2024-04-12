import { FETCH_WEATHER, SET_WEATHER } from "../../constants";

export const fetchWeather = (city) => ({
  type: FETCH_WEATHER,
  payload: city,
});

export const setWeather = (weatherData) => ({
  type: SET_WEATHER,
  payload: weatherData,
});
