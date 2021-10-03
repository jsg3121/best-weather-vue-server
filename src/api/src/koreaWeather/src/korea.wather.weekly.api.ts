import axios from "axios";
import dayjs from "dayjs";
import { get, omit, set } from "lodash";
import { MinMaxSkyProps, ResultWeeklyDataProps } from "~/@types";
import { getWeeklyDate, getWeeklyDateAfter3, getWeeklyTime } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

/**
 * day1, day2 대기 상태 변경
 * @param {string} sky 하늘 상태
 * @param {string} pty 강수 상태
 * @returns {string}
 */
const changeValue = (sky: string, pty: string): string => {
  switch (pty) {
    case "0":
      switch (sky) {
        case "0":
          return "맑음";
        case "3":
          return "구름 많음";
        case "4":
          return "흐림";
        default:
          return "구름 많음";
      }
    case "1":
      return "비";
    case "2":
      return "비";
    case "3":
      return "눈";
    case "4":
      return "비";
    case "5":
      return "비";
    case "6":
      return "비";
    case "7":
      return "눈";
    default:
      return "";
  }
};

/**
 * 주간 기상 정보 데이터 요청
 * @returns {Promise<ResultWeeklyDataProps>}
 */
export const weeklyWeather = async (): Promise<ResultWeeklyDataProps> => {
  const nx = 60;
  const ny = 127;
  const DATE = getWeeklyDate();
  const TIME = getWeeklyTime();
  const AFTER3 = getWeeklyDateAfter3();

  const data = {};
  const atmos: Array<MinMaxSkyProps> = [];
  /**
   * 주간 기온 요청 api
   * 00시 ~ 5시 이전이면 전날 23시에서 요청
   * 그 외의 경우는 현재 시간에서 요청 가능
   */
  await axios
    .get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=500&pageNo=1&dataType=json&base_date=${DATE}&base_time=${TIME}&nx=${nx}&ny=${ny}`
    )
    .then((res) => {
      const result = res.data.response.body.items.item;
      result.map((item: MinMaxSkyProps) => {
        if (item.fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD")) {
          if (item.category === "TMN") {
            set(data, "day1.minTemperature", parseInt(item.fcstValue, 10));
            set(data, "day1.minTemperatureTime", item.fcstTime);
          } else if (item.category === "TMX") {
            set(data, "day1.maxTemperature", parseInt(item.fcstValue, 10));
            set(data, "day1.maxTemperatureTime", item.fcstTime);
          }
          if (item.category === "SKY" || item.category === "PTY") {
            atmos.push(item);
          }
        } else if (item.fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD")) {
          if (item.category === "TMN") {
            set(data, "day2.minTemperature", parseInt(item.fcstValue, 10));
            set(data, "day2.minTemperatureTime", item.fcstTime);
          } else if (item.category === "TMX") {
            set(data, "day2.maxTemperature", parseInt(item.fcstValue, 10));
            set(data, "day2.maxTemperatureTime", item.fcstTime);
          }
          if (item.category === "SKY" || item.category === "PTY") {
            atmos.push(item);
          }
        }
      });
    });

  atmos.map((item: MinMaxSkyProps) => {
    if (item.fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD")) {
      if (item.fcstTime === get(data, "day1.minTemperatureTime")) {
        if (item.category === "SKY") {
          set(data, "day1.skyValueAm", item.fcstValue);
        } else {
          set(data, "day1.ptyValueAm", item.fcstValue);
        }
      } else if (item.fcstTime === get(data, "day1.maxTemperatureTime")) {
        if (item.category === "SKY") {
          set(data, "day1.skyValuePm", item.fcstValue);
        } else {
          set(data, "day1.ptyValuePm", item.fcstValue);
        }
      }
    } else {
      if (item.fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD")) {
        if (item.fcstTime === get(data, "day1.minTemperatureTime")) {
          if (item.category === "SKY") {
            set(data, "day2.skyValueAm", item.fcstValue);
          } else {
            set(data, "day2.ptyValueAm", item.fcstValue);
          }
        } else if (item.fcstTime === get(data, "day1.maxTemperatureTime")) {
          if (item.category === "SKY") {
            set(data, "day2.skyValuePm", item.fcstValue);
          } else {
            set(data, "day2.ptyValuePm", item.fcstValue);
          }
        }
      }
    }
  });

  await axios
    .get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=&dataType=json&regId=11D20501&tmFc=${AFTER3}`
    )
    .then((res) => {
      const result = res.data.response.body.items.item[0];
      set(data, `day3.minTemperature`, result.taMin3);
      set(data, `day3.maxTemperature`, result.taMax3);
      set(data, `day4.minTemperature`, result.taMin4);
      set(data, `day4.maxTemperature`, result.taMax4);
      set(data, `day5.minTemperature`, result.taMin5);
      set(data, `day5.maxTemperature`, result.taMax5);
      set(data, `day6.minTemperature`, result.taMin6);
      set(data, `day6.maxTemperature`, result.taMax6);
      set(data, `day7.minTemperature`, result.taMin7);
      set(data, `day7.maxTemperature`, result.taMax7);
    });

  await axios
    .get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=100&pageNo=1&dataType=json&regId=11B00000&tmFc=${AFTER3}`
    )
    .then((res) => {
      const result = res.data.response.body.items.item[0];
      set(data, "day3.skyAm", result.wf3Am);
      set(data, "day3.skyPm", result.wf3Pm);
      set(data, "day4.skyAm", result.wf4Am);
      set(data, "day4.skyPm", result.wf4Pm);
      set(data, "day5.skyAm", result.wf5Am);
      set(data, "day5.skyPm", result.wf5Pm);
      set(data, "day6.skyAm", result.wf6Am);
      set(data, "day6.skyPm", result.wf6Pm);
      set(data, "day7.skyAm", result.wf7Am);
      set(data, "day7.skyPm", result.wf7Pm);
    });

  set(data, "day1.skyAm", changeValue(get(data, "day1.skyValueAm"), get(data, "day1.ptyValueAm")));
  set(data, "day1.skyPm", changeValue(get(data, "day1.skyValuePm"), get(data, "day1.ptyValuePm")));
  set(data, "day2.skyAm", changeValue(get(data, "day2.skyValueAm"), get(data, "day2.ptyValueAm")));
  set(data, "day2.skyPm", changeValue(get(data, "day2.skyValuePm"), get(data, "day2.ptyValuePm")));

  const result = omit(data, [
    "day1.minTemperatureTime",
    "day1.maxTemperatureTime",
    "day1.ptyValueAm",
    "day1.skyValueAm",
    "day1.ptyValuePm",
    "day1.skyValuePm",
    "day2.minTemperatureTime",
    "day2.maxTemperatureTime",
    "day2.ptyValueAm",
    "day2.skyValueAm",
    "day2.ptyValuePm",
    "day2.skyValuePm",
  ]);

  return result as ResultWeeklyDataProps;
};
