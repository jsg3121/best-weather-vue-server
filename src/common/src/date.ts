import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const defaultTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  return TODAY.minute() < 45 ? TODAY.subtract(1, "hour").format("HHmm") : TODAY.format("HHmm");
};

export const changDateFormMiniDust = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const output = TODAY.subtract(3, "day").format("YYYY-MM-DD");
  return output;
};

export const calcDate = () => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const date = TODAY.format("YYYYMMDD");
  const time = parseInt(TODAY.format("HH"), 10);

  return time < 5 ? TODAY.subtract(1, "day").format("YYYYMMDD") : date;
};

/**
 * * 현재 날씨 상태 정보 시간 요청
 * @format "HHmm"
 * @return {string}
 */
export const getCurrentTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  return TODAY.format("HHmm");
};

/**
 * * 현재 날씨 상태 정보 날짜 요청
 * @format "YYYYMMDD"
 * @return {string}
 */
export const getCurrentDate = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  return TODAY.format("YYYYMMDD");
};

/**
 * * 내일, 모레 최저, 최고기온 정보를 위한 날짜 요청
 * @format "YYYYMMDD"
 * @returns {string}
 */
export const getWeeklyDate = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  if (parseInt(TODAY.format("HH"), 10) < 5) {
    return TODAY.subtract(1, "day").format("YYYYMMDD");
  } else {
    return TODAY.format("YYYYMMDD");
  }
};

/**
 * * 내일 모레 최저, 최고기온 정보를 위한 시간
 * @format "HHmm"
 * @returns {string}
 */
export const getWeeklyTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  if (parseInt(TODAY.format("HH"), 10) < 5) {
    return "2300";
  } else {
    return "0500";
  }
};

/**
 * * 3일 후 부터 날씨 정보 요청 시간
 * @format "YYYYMMDDHHmm"
 * @returns {string}
 */
export const getWeeklyDateAfter3 = () => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const date = TODAY.format("YYYYMMDD");

  const time = parseInt(TODAY.format("HH"), 10);
  return time >= 6 && time <= 17 ? `${date}0600` : `${date}1800`;
};

/**
 * * 3시간 단위 기온 정보
 * @format "HHmm"
 * @returns {string}
 */
export const changDateFormThreeHoursTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const hours = parseInt(TODAY.format("HH"), 10);
  if (hours % 3 === 2) {
    const res = TODAY.format(3 * Math.floor(hours / 3) + 2 > 10 ? `${3 * Math.floor(hours / 3) + 2}00` : `0${3 * Math.floor(hours / 3) + 2}00`);
    return res.toString();
  } else {
    const res = TODAY.format(3 * Math.floor(hours / 3) - 1 > 10 ? `${3 * Math.floor(hours / 3) - 1}00` : `0${3 * Math.floor(hours / 3) - 1}00`);
    return res.toString();
  }
};
