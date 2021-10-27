import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
/**
 * ! 현재 날씨 상태 정보 시간 요청
 *
 * * 30분 이전일 때 전 시간 return
 *
 * @format "HHmm"
 * @return {string}
 */
export const getCurrentTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  if (TODAY.minute() <= 30) {
    return TODAY.subtract(1, "hour").format("HHmm");
  }
  return TODAY.format("HHmm");
};

/**
 * ! 현재 날씨 상태 정보 날짜 요청
 *
 * * 30분 이전일 때 요청 시간이 00시면 전날 23시로 return
 *
 * @format "YYYYMMDD"
 * @return {string}
 */
export const getCurrentDate = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  if (TODAY.minute() <= 30 && TODAY.hour() === 0) {
    return TODAY.subtract(1, "date").format("YYYYMMDD");
  }
  return TODAY.format("YYYYMMDD");
};

/**
 * ! 내일, 모레 최저, 최고기온 정보를 위한 날짜 요청
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
 * ! 내일 모레 최저, 최고기온 정보를 위한 시간
 * @format "HHmm"
 * @returns {string}
 */
export const getWeeklyTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const arr = [2, 5, 8, 11, 14, 17, 20, 23];
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const time = parseInt(TODAY.format("HH"), 10);
    if (time < 2) {
      result = "2300";
    } else {
      if (time > arr[i]) {
        String(arr[i]).length === 1 ? (result = `0${arr[i]}00`) : (result = `${arr[i]}00`);
      }
    }
  }
  console.log("1!!@#!@$!@$!@#$");
  console.log(result);
  return result;
};

/**
 * ! 3일 후 부터 날씨 정보 요청 시간
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
 * ! 3시간 단위 기온 정보
 * @format "HHmm"
 * @returns {string}
 */
export const changDateFormThreeHoursTime = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul");
  const hours = parseInt(TODAY.subtract(3, "hours").format("HH"), 10);
  if (hours % 3 === 2) {
    const res = TODAY.format(
      3 * Math.floor(hours / 3) + 2 > 10
        ? `${3 * Math.floor(hours / 3) + 2}00`
        : `0${3 * Math.floor(hours / 3) + 2}00`
    );
    return res.toString();
  } else {
    const res = TODAY.format(
      3 * Math.floor(hours / 3) - 1 > 10
        ? `${3 * Math.floor(hours / 3) - 1}00`
        : `0${3 * Math.floor(hours / 3) - 1}00`
    );
    return res.toString();
  }
};

/**
 * ! 대기환경(오존) 상태
 * @returns
 */
export const getAtmosDate = (): string => {
  const TODAY = dayjs(new Date()).tz("Asia/Seoul").format("YYYYMMDD06");

  return TODAY;
};
