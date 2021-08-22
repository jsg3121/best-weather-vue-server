export declare type resultDailyDataProps = {
    baseDate: string;
    baseTime: string;
    category: string;
    nx: number;
    ny: number;
    obsrValue: string;
};
export declare type resultDailyTemperatureProps = {
    baseDate: string;
    baseTime: string;
    category: string;
    fcstDate: string;
    fcstTime: string;
    fcstValue: string;
    nx: number;
    ny: number;
};
export declare type threeHourWeatherOption = {
    category: string;
    fcstDate: string;
    fcstTime: string;
    fcstValue: string;
};
export declare type threeHourWeatherOutput = {
    date: threeHourWeatherOption["fcstDate"];
    time: threeHourWeatherOption["fcstTime"];
    value: threeHourWeatherOption["fcstValue"];
};
export declare type getLivingInformationProps = {
    sidoName: string;
    pm10Value: string;
    pm25Value: string;
    o3Value: string;
};
export declare type getSunSetRiseProps = {
    sunset: string;
    sunrise: string;
    moonset: string;
    moonrise: string;
};
export declare type GeolocationProps = (data: {
    nx?: number;
    ny?: number;
}) => Promise<object>;
