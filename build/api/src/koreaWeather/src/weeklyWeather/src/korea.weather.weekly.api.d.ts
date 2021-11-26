import { ResultWeeklyDataProps } from "~/@types";
export declare type WeeklyDataProps = {
    nx: string;
    ny: string;
    locationCode: string;
    skyCode: string;
};
/**
 * ! 주간 기상 정보 데이터 요청
 * ! 00시 ~ 5시 이전이면 전날 23시에서 요청
 * ! 그 외의 경우는 현재 시간에서 요청 가능
 * * ***Return data options***
 *
 * - minTemperature: 최저기온
 * - maxTemperature: 최고기온
 * - skyAm: 오전 날씨 상태
 * - skyPm: 오후 날씨 상태
 *
 * @returns {Promise<ResultWeeklyDataProps>}
 */
export declare const weeklyWeather: (props: WeeklyDataProps) => Promise<ResultWeeklyDataProps>;
