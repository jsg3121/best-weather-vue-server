export declare const openWeather: () => Promise<{
    current: {
        temp: number;
        humidity: number;
        wind_speed: number;
        wind_deg: number;
        sky: string;
        min_temp: number;
        max_temp: number;
    };
    daily: {
        sky: string;
        maxTemperature: number;
        minTemperature: number;
    }[];
    hourly: {
        temp: number;
        sky: string;
    }[];
}>;
