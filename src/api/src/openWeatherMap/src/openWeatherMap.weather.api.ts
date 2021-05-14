import http from "axios";
import { DEFAULT_GEO_LAT, DEFAULT_GEO_LON, OPEN_WEATHER_MAP_API_KEY } from "~/common/src/global";

export const getCurrentWeatherOWM = async () => {
  const output = await http.get(`https://api.openweathermap.org/data/2.5/onecall?&lat=${DEFAULT_GEO_LAT}&lon=${DEFAULT_GEO_LON}&appid=${OPEN_WEATHER_MAP_API_KEY}`).then((res) => {
    return res.data;
  });

  return output;
};
