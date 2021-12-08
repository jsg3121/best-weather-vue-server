import { ApiResponseData } from "~/@types";
declare type ReturnDataType = Array<Omit<ApiResponseData, "baseDate" | "baseTime" | "nx" | "ny">>;
/**
 * ! 3시간 단위 예보
 *
 * * ***Return data options***
 * - PTY : 강수 형태 (비, 눈 등)
 * - SKY : 하늘 상태
 * - T3H : 3시간 기온
 *
 * @returns {ReturnDataType}
 */
export declare const threeHours: () => Promise<ReturnDataType>;
export {};
