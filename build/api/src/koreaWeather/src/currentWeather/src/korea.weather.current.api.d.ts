declare type ReturnCurrentWeather = {
    humidity: string;
    precipitation: string;
    temperature: string;
    windDirection: string;
    windSpeed: string;
    sky: string;
    minTemp: string;
    maxTemp: string;
};
export declare type CurrentDataProps = {
    nx: string;
    ny: string;
};
/**
 * ! 현재 날씨 정보 요청 api 취합 데이터
 *
 * * ***Return data options***
 * - T1H : 현재 기온
 * - REH : 습도
 * - RN1 : 1시간 강수량
 * - VEC : 풍향
 * - WSD : 풍속
 * - SKY : 하늘상태
 * - TMX : 최고기온
 * - TMN : 최저기온
 *
 * @returns {Promise<ReturnCurrentWeather>}
 */
export declare const currentWeather: (props: CurrentDataProps) => Promise<ReturnCurrentWeather>;
export {};
