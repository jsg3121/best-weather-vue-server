import { OpenWeatherDataProps } from "~/@types";
declare type ThreeHoursData = OpenWeatherDataProps["hourly"];
declare type ReutrnThreeHours = {
    temp: ThreeHoursData[0]["temp"];
    sky: ThreeHoursData[0]["weather"][0]["description"];
};
/**
 * ! 3시간 단위 기상 예보
 * * 1시간 단위로 나오기 때문에 3시간 간격으로 변경하여 데이터 반환
 *
 * --------------------------------
 * * ***Return data options***
 * - sky : 하늘 상태
 * - temp : 기온
 * --------------------------------
 * @param {ThreeHoursData} data
 * @returns {Array<ReutrnThreeHours>}
 */
export declare const hourlyData: (data: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: import("~/@types").WeatherSkyProps[];
    pop: number;
}[]) => Array<ReutrnThreeHours>;
export {};
