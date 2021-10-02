import axios from "axios";
import dayjs from "dayjs";
import { get, set } from "lodash";
import { minMaxSkyProps, WeeklyProps } from "~/@types";
import { getWeeklyDate, getWeeklyDateAfter3, getWeeklyTime } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

export const weeklyWeather = async () => {
  const nx = 60;
  const ny = 127;
  const DATE = getWeeklyDate();
  const TIME = getWeeklyTime();
  const AFTER3 = getWeeklyDateAfter3();

  const data = {};
  const atmos: Array<minMaxSkyProps> = [];
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
      result.map((item: minMaxSkyProps) => {
        if (item.fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD")) {
          if (item.category === "TMN") {
            set(data, "day1.minTemperature", item.fcstValue);
            set(data, "day1.minTemperatureTime", item.fcstTime);
          } else if (item.category === "TMX") {
            set(data, "day1.maxTemperature", item.fcstValue);
            set(data, "day1.maxTemperatureTime", item.fcstTime);
          }

          if (item.category === "SKY" || item.category === "PTY") {
            atmos.push(item);
          }
        } else if (item.fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD")) {
          if (item.category === "TMN") {
            set(data, "day2.minTemperature", item.fcstValue);
            set(data, "day2.minTemperatureTime", item.fcstTime);
          } else if (item.category === "TMX") {
            set(data, "day2.maxTemperature", item.fcstValue);
            set(data, "day2.maxTemperatureTime", item.fcstTime);
          }
          if (item.category === "SKY" || item.category === "PTY") {
            atmos.push(item);
          }
        }
      });
    });

  atmos.map((item: minMaxSkyProps) => {
    if (item.fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD")) {
      if (item.fcstTime === get(data, "day1.minTemperatureTime") || item.fcstTime === get(data, "day1.maxTemperatureTime")) {
        if (item.category === "SKY") {
          set(data, "day1.skyValue", item.fcstValue);
        } else {
          set(data, "day1.ptyValue", item.fcstValue);
        }
      }
    } else {
      if (item.fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD")) {
        if (item.fcstTime === get(data, "day1.minTemperatureTime") || item.fcstTime === get(data, "day1.maxTemperatureTime")) {
          if (item.category === "SKY") {
            set(data, "day2.skyValue", item.fcstValue);
          } else {
            set(data, "day2.ptyValue", item.fcstValue);
          }
        }
      }
    }
  });

  await axios.get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=&dataType=json&regId=11D20501&tmFc=${AFTER3}`).then((res) => {
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
    .get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=100&pageNo=1&dataType=json&regId=11B00000&tmFc=${AFTER3}`)
    .then((res) => {
      const result = res.data.response.body.items.item[0];
    });
  //, rnstAm: weeklyWeather.rnSt3Am, rnstPm: weeklyWeather.rnSt3Pm, wfAm: weeklyWeather.wf3Am, wfPm: weeklyWeather.wf3Pm

  return data as WeeklyProps;
};
