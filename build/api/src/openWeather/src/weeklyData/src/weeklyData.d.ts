import { OpenWeatherDataProps } from "~/@types";
declare type WeeklyData = OpenWeatherDataProps["daily"];
declare type RetyrnWeeklyData = {
    sky: WeeklyData[0]["weather"][0]["description"];
    maxTemperature: WeeklyData[0]["temp"]["max"];
    minTemperature: WeeklyData[0]["temp"]["min"];
};
/**
 * !주간 기상 정보 요청
 * * 기온의 경우 오전 오후 모두 표시
 * * 오전 오후 날씨가 따로 분리되어 나타나지 않고 하나의 날씨만 제공
 * -----------------------------------------------------------
 * * ***Return data options***
 * - sky : 날씨 상태
 * - maxTemperature : 최고기온
 * - minTemperature : 최저기온
 * -----------------------------------------------------------
 * @param {WeeklyData} data
 * @returns {Array<RetyrnWeeklyData>}
 */
export declare const weeklyData: (data: {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    };
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: import("~/@types").WeatherSkyProps[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}[]) => Array<RetyrnWeeklyData>;
export {};
