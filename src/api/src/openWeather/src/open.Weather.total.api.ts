import axios from "axios";
import { OPEN_WEATHER_MAP_API_KEY } from "~/common";
import { currentData } from "./currentData";

export const openWeather = async () => {
  const nx = 37.582;
  const ny = 126.984;
  const data = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${nx}&lon=${ny}&exclude=minutely&appid=${OPEN_WEATHER_MAP_API_KEY}&lang=kr&units=metric`
    )
    .then((res) => {
      const current = currentData(res.data.current, res.data.daily[0]);

      console.log(current);
      return JSON.stringify(res.data, null, 2);
    });
  return data;
};
