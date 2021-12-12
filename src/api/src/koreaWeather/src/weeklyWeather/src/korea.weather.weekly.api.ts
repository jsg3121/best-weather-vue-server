import axios from "axios";
import dayjs from "dayjs";
import { get, omit, set } from "lodash";
import { ApiResponseData, ResultWeeklyDataProps } from "~/@types";
import { getWeeklyDate, getWeeklyDateAfter3, getWeeklyTime, KOREA_WEATHER_API_KEY } from "~/common";

export type WeeklyDataProps = {
  nx: string;
  ny: string;
  locationCode: string;
  skyCode: string;
};

/**
 * ! day1, day2 대기 상태 변경
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
export const weeklyWeather = async (
  props: WeeklyDataProps
): Promise<ResultWeeklyDataProps["weeklyData"]> => {
  const { nx, ny, locationCode, skyCode } = props;
  const DATE = getWeeklyDate();
  const TIME = getWeeklyTime();

  const AFTER3 = getWeeklyDateAfter3();
  const data = {};
  const atmos: Array<ApiResponseData> = [];

  const timeData = {
    time02: [448, 339, 738, 629],
    time05: [411, 302, 701, 592],
    time08: [375, 266, 665, 556],
    time11: [339, 230, 629, 520],
    time14: [302, 193, 592, 483],
    time17: [266, 157, 556, 447],
    time20: [230, 121, 520, 411],
    time23: [194, 85, 484, 374],
  };

  /**
   * ! 데이터 요청
   * @param {number} val 데이터 인덱스
   * @returns {Promise<ApiResponseData>}
   */
  const getApiData = async (val: number): Promise<ApiResponseData> => {
    return await axios
      .get(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=1&pageNo=${val}&dataType=json&base_date=${DATE}&base_time=${TIME}&nx=${nx}&ny=${ny}`
      )
      .then((res) => {
        return res.data.response.body.items.item[0];
      });
  };

  /**
   * ! 시간대별 다른 인덱스에 맞춰 Sky, Pty 데이터 인덱스 계산하여 배열 추가
   * ! api 요청 일괄 적으로 요청 후 Return
   */
  const getData = async (data: Array<number>): Promise<Array<ApiResponseData>> => {
    const addArray = (arr: number[]) => {
      for (let i = 0; i < 4; i++) {
        arr.push(arr[i] - 6);
        arr.push(arr[i] - 7);
      }
    };
    addArray(data);
    const result = await Promise.all(
      data.map((item) => {
        return getApiData(item);
      })
    ).then((res) => {
      return res;
    });

    return result;
  };

  /**
   * ! 시간별로 필요 인덱스 데이터만 요청
   *
   * @param {string} time 요청 시간
   * @returns {Promise<Array<ApiResponseData>>}
   */
  const getDayInfo = async (time: string): Promise<Array<ApiResponseData>> => {
    switch (time) {
      case "0200":
        return await getData(timeData.time02);
      case "0500":
        return await getData(timeData.time05);
      case "0800":
        return await getData(timeData.time08);
      case "1100":
        return await getData(timeData.time11);
      case "1400":
        return await getData(timeData.time14);
      case "1700":
        return await getData(timeData.time17);
      case "2000":
        return await getData(timeData.time20);
      case "2300":
        return await getData(timeData.time23);
      default:
        return await getData(timeData.time02);
    }
  };

  const tomorrowData = await getDayInfo(TIME);

  /**
   * ! 주간 기상 정보
   */
  for (let i = 0; i < tomorrowData.length; i++) {
    if (tomorrowData[i].fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD")) {
      if (tomorrowData[i].category === "TMN") {
        set(data, "day1.minTemperature", parseInt(tomorrowData[i].fcstValue, 10));
        set(data, "day1.minTemperatureTime", tomorrowData[i].fcstTime);
      } else if (tomorrowData[i].category === "TMX") {
        set(data, "day1.maxTemperature", parseInt(tomorrowData[i].fcstValue, 10));
        set(data, "day1.maxTemperatureTime", tomorrowData[i].fcstTime);
      }
      if (
        (tomorrowData[i].fcstTime === "0600" || tomorrowData[i].fcstTime === "1500") &&
        (tomorrowData[i].category === "SKY" || tomorrowData[i].category === "PTY")
      ) {
        atmos.push(tomorrowData[i]);
      }
    } else if (tomorrowData[i].fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD")) {
      if (tomorrowData[i].category === "TMN") {
        set(data, "day2.minTemperature", parseInt(tomorrowData[i].fcstValue, 10));
        set(data, "day2.minTemperatureTime", tomorrowData[i].fcstTime);
      } else if (tomorrowData[i].category === "TMX") {
        set(data, "day2.maxTemperature", parseInt(tomorrowData[i].fcstValue, 10));
        set(data, "day2.maxTemperatureTime", tomorrowData[i].fcstTime);
      }
      if (
        (tomorrowData[i].fcstTime === "0600" || tomorrowData[i].fcstTime === "1500") &&
        (tomorrowData[i].category === "SKY" || tomorrowData[i].category === "PTY")
      ) {
        atmos.push(tomorrowData[i]);
      }
    }
  }

  atmos.map((item: ApiResponseData) => {
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
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=&dataType=json&regId=${
        locationCode ? locationCode : "11D20501"
      }&tmFc=${AFTER3}`
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
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=100&pageNo=1&dataType=json&regId=${
        skyCode ? skyCode : "11B00000"
      }&tmFc=${AFTER3}`
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

  const weeklyData = omit(data, [
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
  ]) as ResultWeeklyDataProps["weeklyData"];

  return weeklyData;
};
