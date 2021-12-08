/**
 * ! 현재 날씨 상태 정보 시간 요청
 *
 * * 30분 이전일 때 전 시간 return
 *
 * @format "HHmm"
 * @return {string}
 */
export declare const getCurrentTime: () => string;
/**
 * ! 현재 날씨 상태 정보 날짜 요청
 *
 * * 30분 이전일 때 요청 시간이 00시면 전날 23시로 return
 *
 * @format "YYYYMMDD"
 * @return {string}
 */
export declare const getCurrentDate: () => string;
/**
 * ! 내일, 모레 최저, 최고기온 정보를 위한 날짜 요청
 * @format "YYYYMMDD"
 * @returns {string}
 */
export declare const getWeeklyDate: () => string;
/**
 * ! 내일 모레 최저, 최고기온 정보를 위한 시간
 * @format "HHmm"
 * @returns {string}
 */
export declare const getWeeklyTime: () => string;
/**
 * ! 3일 후 부터 날씨 정보 요청 시간
 * @format "YYYYMMDDHHmm"
 * @returns {string}
 */
export declare const getWeeklyDateAfter3: () => string;
/**
 * ! 3시간 단위 기온 정보
 * @format "HHmm"
 * @returns {string}
 */
export declare const changDateFormThreeHoursTime: () => string;
/**
 * ! 대기환경(오존) 상태
 * @returns
 */
export declare const getAtmosDate: () => string;
