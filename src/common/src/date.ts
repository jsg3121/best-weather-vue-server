import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const defaultDate = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  return TODAY.format("YYYYMMDD");
};

export const defaultTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  return TODAY.minute() < 45 ? TODAY.subtract(1, "hour").format("HHmm") : TODAY.format("HHmm");
};

export const changDateFormMiniDust = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const output = TODAY.subtract(3, "day").format("YYYY-MM-DD");
  return output;
};

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

export const checkWeeklyDate = () => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const date = TODAY.format("YYYYMMDD");

  const time = parseInt(TODAY.format("HH"), 10);
  return time >= 6 && time <= 17 ? `${date}0600` : `${date}1800`;
};

export const calcDate = () => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const date = TODAY.format("YYYYMMDD");
  const time = parseInt(TODAY.format("HH"), 10);

  return time < 5 ? TODAY.subtract(1, "day").format("YYYYMMDD") : date;
};

/**
 * 현재 날씨 상태 정보 요청 시간
 * @format "HHmm"
 * @return {string}
 */
export const getCurrentTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  return TODAY.minute() < 45 ? TODAY.subtract(1, "hour").format("HHmm") : TODAY.format("HHmm");
};

/**
 * 현재 날씨 상태 정보 요청 날짜
 * @format "YYYYMMDD"
 * @return {string}
 */
export const getCurrentDate = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  if (TODAY.hour() == 0) {
    return TODAY.minute() < 45 ? TODAY.subtract(1, "date").format("YYYYMMDD") : TODAY.format("YYYYMMDD");
  }
  return TODAY.format("YYYYMMDD");
};
