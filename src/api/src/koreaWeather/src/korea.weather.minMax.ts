import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";
import { GeolocationProps, ParamsInterface, ResultWeeklyTemperature } from "~/@types";
import { calcDate, checkWeeklyDate } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

export const getMaxMinTemperature: GeolocationProps<ParamsInterface, any> = async (data) => {
  const WEEKLY_RES_DATE = checkWeeklyDate();
  const { nx, ny } = data;
  const DATE = calcDate();

  const weeklyRes: Promise<AxiosResponse<any>> = await axios.get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=&dataType=json&regId=11D20501&tmFc=${WEEKLY_RES_DATE}`).then((res) => {
    return res.data.response.body.items.item[0];
  });

  const weeklyWeather = await axios.get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=100&pageNo=1&dataType=json&regId=11B00000&tmFc=${WEEKLY_RES_DATE}`).then((res) => {
    return res.data.response.body.items.item[0];
  });

  // 8시 이전일 때 전날 11시,
  // 8시 이후일 때 현재 11시\

  const tomorrowMinMax = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=500&pageNo=1&dataType=json&base_date=${DATE}&base_time=0500&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const temp = res.data.response.body.items.item.filter((item) => {
      return (item.fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD") && (item.category === "TMN" || item.category === "TMX")) || (item.fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD") && (item.category === "TMN" || item.category === "TMX"));
    });

    const tmn = temp[0].fcstTime;
    const tmx = temp[1].fcstTime;

    const sky = res.data.response.body.items.item.filter((item) => {
      return (item.fcstDate === dayjs(DATE).add(1, "day").format("YYYYMMDD") && (item.category === "SKY" || item.category === "PTY") && (item.fcstTime === tmn || item.fcstTime === tmx)) || (item.fcstDate === dayjs(DATE).add(2, "day").format("YYYYMMDD") && (item.category === "SKY" || item.category === "PTY") && (item.fcstTime === tmn || item.fcstTime === tmx));
    });

    const data = {
      day1: {
        date: temp[0].fcstDate,
        tmnValue: temp[0].fcstValue,
        tmxValue: temp[1].fcstValue,
        tmnPty: sky[0].fcstValue,
        tmnSky: sky[1].fcstValue,
        tmxPty: sky[2].fcstValue,
        tmxSky: sky[3].fcstValue,
      },
      day2: {
        date: temp[2].fcstDate,
        tmnValue: temp[2].fcstValue,
        tmxValue: temp[3].fcstValue,
        tmnPty: sky[4].fcstValue,
        tmnSky: sky[5].fcstValue,
        tmxPty: sky[6].fcstValue,
        tmxSky: sky[7].fcstValue,
      },
    };
    return data;
  });

  const weekOut = {
    // day3: { min: weeklyRes.taMin3, max: weeklyRes.taMax3, rnstAm: weeklyWeather.rnSt3Am, rnstPm: weeklyWeather.rnSt3Pm, wfAm: weeklyWeather.wf3Am, wfPm: weeklyWeather.wf3Pm, dateNum: 3 },
    // day4: { min: weeklyRes.taMin4, max: weeklyRes.taMax4, rnstAm: weeklyWeather.rnSt4Am, rnstPm: weeklyWeather.rnSt4Pm, wfAm: weeklyWeather.wf4Am, wfPm: weeklyWeather.wf4Pm, dateNum: 4 },
    // day5: { min: weeklyRes.taMin5, max: weeklyRes.taMax5, rnstAm: weeklyWeather.rnSt5Am, rnstPm: weeklyWeather.rnSt5Pm, wfAm: weeklyWeather.wf5Am, wfPm: weeklyWeather.wf5Pm, dateNum: 5 },
    // day6: { min: weeklyRes.taMin6, max: weeklyRes.taMax6, rnstAm: weeklyWeather.rnSt6Am, rnstPm: weeklyWeather.rnSt6Pm, wfAm: weeklyWeather.wf6Am, wfPm: weeklyWeather.wf6Pm, dateNum: 6 },
    // day7: { min: weeklyRes.taMin7, max: weeklyRes.taMax7, rnstAm: weeklyWeather.rnSt7Am, rnstPm: weeklyWeather.rnSt7Pm, wfAm: weeklyWeather.wf7Am, wfPm: weeklyWeather.wf7Pm, dateNum: 7 },
  };

  return { tomorrowMinMax, weekOut };
};
