import { getDailyWeather } from "~/service/src/koreaWeather/src/korea.daily.weather";

export const weeklyWeatherKoreaDatabase = () => {
  getDailyWeather();
};
