import { set } from "lodash";
import { OpenWeatherDataProps } from "~/@types/src/openWeather.types";

type CurrentType = OpenWeatherDataProps["current"];
type TodayType = OpenWeatherDataProps["daily"][0];

type ReturnCurrentOpenWeather = {
  temp: CurrentType["temp"];
  humidity: CurrentType["humidity"];
  wind_speed: CurrentType["wind_speed"];
  wind_deg: CurrentType["wind_deg"];
  sky: CurrentType["weather"][0]["description"];
  min_temp: TodayType["temp"]["min"];
  max_temp: TodayType["temp"]["max"];
};

/**
 * current정보를 위한 데이터만 가공하여 반환
 *
 * * Return data options
 * - temp: 현재 기온
 * - humidity: 현재 습도
 * - wind_speed: 풍속
 * - wind_deg: 풍향
 * - sky: 하늘 상태
 * - min_temp: 최저기온
 * - max_temp: 최고기온
 *
 * @param {CurrentType} current
 * @param {TodayType} today
 * @returns {ReturnCurrentOpenWeather}
 */
export const currentData = (current: CurrentType, today: TodayType): ReturnCurrentOpenWeather => {
  const data = {};
  set(data, "temp", current.temp);
  set(data, "humidity", current.humidity);
  set(data, "wind_speed", current.wind_speed);
  set(data, "wind_deg", current.wind_deg);
  set(data, "sky", current.weather[0].description);
  set(data, "min_temp", today.temp.min);
  set(data, "max_temp", today.temp.max);

  return data as ReturnCurrentOpenWeather;
};
