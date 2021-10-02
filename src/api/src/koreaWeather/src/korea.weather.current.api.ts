import axios from "axios";
import { set } from "lodash";
import { resultDailyDataProps, minMaxSkyProps } from "~/@types";
import { getCurrentDate, getCurrentTime } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

type ReturnCurrentWeather = {
  humidity: string;
  precipitation: string;
  temperature: string;
  windDirection: string;
  windSpeed: string;
  sky: string;
  minTemp: string;
  maxTemp: string;
};

/**
 * 현재 날씨 정보 요청 api 취합 데이터
 *
 * @returns {Promise<ReturnCurrentWeather>}
 */
export const currentWeather = async (): Promise<ReturnCurrentWeather> => {
  const nx = 60;
  const ny = 127;
  const BASE_TIME = getCurrentTime();
  const BASE_DATE = getCurrentDate();

  const data = {};

  /**
   * 현재 기상 정보 요청 api
   * T1H : 현재 기온
   * REH : 습도
   * RN1 : 1시간 강수량
   * VEC : 풍향
   * WSD : 풍속
   * SKY : 하늘상태
   * TMX : 최고기온
   * TMN : 최저기온
   *
   * @param {number} nx gridX
   * @param {number} ny gridY
   * @param {string} BASE_TIME 요청 시간
   * @param {string} BASE_DATE 요청 일자
   * @return {void}
   */
  await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const result = res.data.response.body.items.item;
    return result.map((item: resultDailyDataProps) => {
      switch (item.category) {
        case "T1H":
          set(data, "temperature", item.obsrValue);
          break;
        case "REH":
          set(data, "humidity", item.obsrValue);
          break;
        case "RN1":
          set(data, "precipitation", item.obsrValue);
          break;
        case "VEC":
          set(data, "windDirection", item.obsrValue);
          break;
        case "WSD":
          set(data, "windSpeed", item.obsrValue);
          break;
        default:
          break;
      }
    });
  });

  /**
   * 하늘 상태 정보 요청 api
   *
   * @param {number} nx gridX
   * @param {number} ny gridY
   * @param {string} BASE_TIME 요청 시간
   * @param {string} BASE_DATE 요청 일자
   * @return {void}
   */
  await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=50&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const result = res.data.response.body.items.item;
    return result.map((item: minMaxSkyProps) => {
      if (item.category === "SKY") {
        set(data, "sky", item.fcstValue);
      }
    });
  });

  /**
   * 당일 최저기온, 최고기온 요청 api
   *
   * @param {number} nx gridX
   * @param {number} ny gridY
   * @param {string} BASE_DATE 요청 일자
   * @return {void}
   */
  await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const result = res.data.response.body.items.item;
    return result.map((item: minMaxSkyProps) => {
      switch (item.category) {
        case "TMX":
          set(data, "maxTemp", item.fcstValue);
          break;
        case "TMN":
          set(data, "minTemp", item.fcstValue);
          break;
        default:
          break;
      }
    });
  });

  return data as ReturnCurrentWeather;
};
