import { apiKey } from "../../../constants";

export const getWeather = async (lat, lon) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};
