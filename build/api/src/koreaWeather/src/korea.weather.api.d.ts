import { GeolocationProps, getLivingInformationProps, getSunSetRiseProps } from "~/@types";
export declare const getDailyWeather: GeolocationProps;
export declare const getMaxMinTemperature: GeolocationProps;
export declare const threeHoursWeather: GeolocationProps;
export declare const livingInfomation: () => Promise<{
    out: getLivingInformationProps[];
    uvValue: {
        date: any;
        today: any;
        tomorrow: any;
        theDayAfterTomorrow: any;
    };
}>;
export declare const sunRiseFall: () => Promise<getSunSetRiseProps[]>;
