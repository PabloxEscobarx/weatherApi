import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentCoordinates } from "../../functions";
import { Searcher, WeatherView, Loader } from "../index";
import { getWeather, getNearestCities } from "../../api";
import { SET_WEATHER } from "../../constants";
import s from "./stykes.module.css";

export const WeatherApp = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [citiesList, setCitiesList] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    currentCoordinates(setCoordinates);
  }, []);

  useEffect(() => {
    if (coordinates) {
      const weatherApi = async () => {
        try {
          const { latitude, longitude } = coordinates;
          const data = await getWeather(latitude, longitude);
          dispatch({ type: SET_WEATHER, payload: data });
        } catch (err) {
          console.log(err);
        }
      };
      weatherApi();
    }
  }, [coordinates, dispatch]);

  useEffect(() => {
    if (coordinates) {
      const getList = async () => {
        try {
          const { latitude, longitude } = coordinates;
          const { list } = await getNearestCities(latitude, longitude);
          setCitiesList(list);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
      getList();
    }
  }, [coordinates]);

  return (
    <div className={s.weatherApp}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Searcher options={citiesList} setCurrentCity={setCurrentCity} />
          <WeatherView currentCity={currentCity} />
        </>
      )}
    </div>
  );
};
