import { call, put, takeEvery } from "redux-saga/effects";
import { setWeather } from "../actions";
import { FETCH_WEATHER } from "../../constants";
import { getWeather } from "../../api";

function* fetchWeatherSaga(action) {
  try {
    const weatherData = yield call(getWeather, action.payload);
    yield put(setWeather(weatherData));
  } catch (error) {
    console.log(error);
  }
}

function* weatherSaga() {
  yield takeEvery(FETCH_WEATHER, fetchWeatherSaga);
}

export default weatherSaga;
