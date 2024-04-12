import s from "./styles.module.css";

export const WeatherView = ({ currentCity }) => {
  const kelvinTemp = 273.15;
  return (
    <div className={s.wrapper}>
      {currentCity ? (
        <div className={s.checkedCity}>
          <div className={s.top}>
            {currentCity.name}, {currentCity.sys.country}
          </div>
          <div className={s.weatherData}>
            <div>
              <p>temperature</p>
              <p>{currentCity.main.temp.toFixed(1)}</p>
            </div>
            <div>
              <p>feels like</p>
              <p>{currentCity.main.feels_like}</p>
            </div>
            <div>
              <p>temperature max</p>
              <p>{(currentCity.main.temp_max - kelvinTemp).toFixed(1)}</p>
            </div>
            <div>
              <p>temperature min</p>
              <p>{(currentCity.main.temp_min - kelvinTemp).toFixed(1)}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.noData}>Choose city</div>
      )}
    </div>
  );
};
