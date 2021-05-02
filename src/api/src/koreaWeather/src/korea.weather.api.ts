import axios from "axios";
import { dailyWeatherRequestProps, getLivingInformationProps, getMaxMinTemperatureProps, getSunSetRiseProps, resultDailyDataProps, resultDailyTemperatureProps, returnDatilyDataProps, threeHourWeatherOption, threeHourWeatherOutput } from "~/@types";
import { changDateFormMiniDust, changDateFormThreeHoursTime, checkWeeklyDate, defaultDate, defaultTime, formDataMiniDust } from "~/common";

const APIKEY = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
const BASE_DATE = defaultDate();
const BASE_TIME = defaultTime();

export const getDailyWeather: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${APIKEY}&numOfRows=10&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  let out: returnDatilyDataProps = {
    nowTemperatures: "",
    nowHumidity: "",
    nowPrecipitation: "",
  };

  res.map((item: resultDailyDataProps) => {
    switch (item.category) {
      case "T1H":
        out.nowTemperatures = item.obsrValue;
        return;
      case "REH":
        out.nowHumidity = item.obsrValue;
        return;
      case "RN1":
        out.nowPrecipitation = item.obsrValue;
        return;
      default:
        return;
    }
  });

  return out;
};

export const getMaxMinTemperature: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;

  const out: getMaxMinTemperatureProps = {
    maxTemperature: "",
    minTemperature: "",
  };
  const weeklyResDate = checkWeeklyDate();
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${APIKEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  const weeklyRes = await axios.get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${APIKEY}&numOfRows=10&pageNo=&dataType=json&regId=11D20501&tmFc=${weeklyResDate}`).then((res) => {
    return res.data.response.body.items.item[0];
  });

  const weekOut = {
    day3Min: weeklyRes.taMin3,
    day3Max: weeklyRes.taMax3,
    day4Min: weeklyRes.taMin4,
    day4Max: weeklyRes.taMax4,
    day5Min: weeklyRes.taMin5,
    day5Max: weeklyRes.taMax5,
    day6Min: weeklyRes.taMin6,
    day6Max: weeklyRes.taMax6,
    day7Min: weeklyRes.taMin7,
    day7Max: weeklyRes.taMax7,
    day8Min: weeklyRes.taMin8,
    day8Max: weeklyRes.taMax8,
    day9Min: weeklyRes.taMin9,
    day9Max: weeklyRes.taMax9,
    day10Min: weeklyRes.taMin10,
    day10Max: weeklyRes.taMax10,
  };

  res.map((item: resultDailyTemperatureProps) => {
    switch (item.category) {
      case "TMX":
        out.maxTemperature = item.fcstValue;
        return;
      case "TMN":
        out.minTemperature = item.fcstValue;
        return;
      default:
        return;
    }
  });

  return { out, weekOut };
};

export const threeHoursWeather: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;

  const POP: threeHourWeatherOutput[] = [];
  const PTY: threeHourWeatherOutput[] = [];
  const SKY: threeHourWeatherOutput[] = [];
  const T3H: threeHourWeatherOutput[] = [];
  const VEC: threeHourWeatherOutput[] = [];
  const WSD: threeHourWeatherOutput[] = [];

  const time = changDateFormThreeHoursTime();
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${APIKEY}&numOfRows=180&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${time}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    console.log(res);
    return res.data.response.body.items.item;
  });

  res.map((item: threeHourWeatherOption) => {
    switch (item.category) {
      case "POP":
        {
          POP.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "PTY":
        {
          PTY.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "SKY":
        {
          SKY.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "T3H":
        {
          T3H.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "VEC":
        {
          VEC.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "WSD":
        {
          WSD.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      default:
        return;
    }
  });

  const out = { POP, PTY, SKY, T3H, VEC, WSD };

  return out;
};

export const livingInfomation = async () => {
  const area = "서울";
  const encoding = encodeURIComponent(area);
  const requestDate = changDateFormMiniDust();
  const out: getLivingInformationProps[] = [];

  const res = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${encoding}&pageNo=1&numOfRows=200&returnType=json&serviceKey=${APIKEY}&ver=1.0`).then((res) => {
    return res.data.response.body.items;
  });
  res.map((list: getLivingInformationProps) => {
    out.push({
      sidoName: list.sidoName,
      pm10Value: list.pm10Value,
      o3Value: list.o3Value,
    });
  });

  const minidust = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?searchDate=${requestDate}&returnType=json&serviceKey=${APIKEY}&numOfRows=50&pageNo=1`).then((res) => {
    return res.data.response.body.items;
  });
  const minimumDust = formDataMiniDust(minidust);

  const uv = await axios.get(`http://apis.data.go.kr/1360000/LivingWthrIdxService01/getUVIdx?serviceKey=${APIKEY}&dataType=json&areaNo=1100000000&time=${BASE_DATE}${BASE_TIME.substr(0, 2)}`).then((res) => {
    return res.data.response.body.items.item;
  });

  const uvValue = {
    date: uv[0].date,
    today: uv[0].today,
    tomorrow: uv[0].tomorrow,
    theDayAfterTomorrow: uv[0].theDayAfterTomorrow,
  };

  return { minimumDust, out, uvValue };
};

export const sunRiseFall = async () => {
  const area = "서울";
  const encoding = encodeURIComponent(area);
  const res = await axios.get(`http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?location=${encoding}&locdate=${BASE_DATE}&ServiceKey=${APIKEY}`).then((res) => {
    return res.data.response.body.items.item;
  });

  const output: getSunSetRiseProps[] = [];
  output.push({
    sunrise: res.sunrise,
    sunset: res.sunset,
    moonrise: res.moonset,
    moonset: res.moonrise,
  });

  return output;
};
