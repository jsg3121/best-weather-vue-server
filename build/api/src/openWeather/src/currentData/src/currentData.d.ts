import { OpenWeatherDataProps } from "~/@types";
declare type CurrentType = OpenWeatherDataProps["current"];
declare type TodayType = OpenWeatherDataProps["daily"][0];
declare type ReturnCurrentOpenWeather = {
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
 * * ***Return data options***
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
export declare const currentData: (current: CurrentType, today: TodayType) => ReturnCurrentOpenWeather;
export {};
