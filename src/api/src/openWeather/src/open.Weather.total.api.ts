import axios from "axios";
import { OPEN_WEATHER_MAP_API_KEY } from "~/common";
import { currentData } from "./currentData";
import { hourlyData } from "./hourlyData";
import { weeklyData } from "./weeklyData";

export const openWeather = async () => {
  const nx = 37.582;
  const ny = 126.984;
  const data = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${nx}&lon=${ny}&exclude=minutely&appid=${OPEN_WEATHER_MAP_API_KEY}&lang=kr&units=metric`).then((res) => {
    const current = currentData(res.data.current, res.data.daily[0]);
    const daily = weeklyData(res.data.daily);
    const hourly = hourlyData(res.data.hourly);

    console.log(hourly);
    console.log(daily);
    console.log(current);
    return JSON.stringify(res.data, null, 2);
  });
  return data;
};
