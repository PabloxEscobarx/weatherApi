import { apiKey } from "../../../constants";

export const getNearestCities = async (lat, lon) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};
