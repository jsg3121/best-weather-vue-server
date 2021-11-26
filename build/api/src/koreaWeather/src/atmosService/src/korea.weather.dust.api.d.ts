import { ResultDustDataProps, ResultUvDataProps } from "~/@types";
declare type ReturnDustData = Pick<ResultDustDataProps, "sidoName" | "pm10Grade1h" | "pm25Grade1h" | "o3Grade" | "dataTime" | "stationName">;
declare type ReturnUvData = Pick<ResultUvDataProps, "today">;
declare type ReturnAtmosData = {
    dust: ReturnDustData;
    uv: ReturnUvData;
};
/**
 * ! 대기환경(미세먼지, 초미세먼지) 정보
 * todo #TODO: 지역 정보를 파라미터로 받아와야 함
 *
 * * ***Return data options (dust)***
 * - sidoName : 시,도 명
 * - pm10Grade1h : 1시간 단위 미세먼지
 * - pm25Grade1h : 1시간 단위 초미세먼지
 * - o3Grade : 오존
 * - dataTime : 예보 시간
 * - stationName : 측정소 명
 *
 * * ***Return data options (dust)***
 * - uv : string
 * @returns {ReturnAtmosData}
 */
export declare const atmosStatus: () => Promise<ReturnAtmosData>;
export {};
