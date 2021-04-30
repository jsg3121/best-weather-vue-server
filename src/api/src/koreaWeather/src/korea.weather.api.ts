import axios from "axios";
import { dailyWeatherRequestProps, getLivingInformationProps, getMaxMinTemperatureProps, resultDailyDataProps, resultDailyTemperatureProps, returnDatilyDataProps, threeHourWeatherOutput } from "~/@types";
import { changDateFormMiniDust, changDateFormThreeHoursTime, defaultDate, defaultTime, formDataMiniDust } from "~/common";

const APIKEY = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
const BASE_DATE = defaultDate();
const BASE_TIME = defaultTime();
console.log(BASE_DATE);
console.log(BASE_TIME);
export const getDailyWeather: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${APIKEY}&numOfRows=10&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}00&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
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
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${APIKEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  let out: getMaxMinTemperatureProps = {
    maxTemperature: "",
    minTemperature: "",
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
  return out;
};

export const threeHoursWeather: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;

  const POP: threeHourWeatherOutput[] = [];
  const PTY: threeHourWeatherOutput[] = [];
  const SKY: threeHourWeatherOutput[] = [];
  const T3H: threeHourWeatherOutput[] = [];
  const VEC: threeHourWeatherOutput[] = [];
  const WSD: threeHourWeatherOutput[] = [];

  const time = parseInt(changDateFormThreeHoursTime(), 10);
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${APIKEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${time}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res;
  });
  console.log(res);

  // res.map((item: threeHourWeatherOption) => {
  //   switch (item.category) {
  //     case "POP":
  //       {
  //         POP.push({
  //           date: item.fcstDate,
  //           time: item.fcstTime,
  //           value: item.fcstValue,
  //         });
  //       }
  //       return;
  //     case "PTY":
  //       {
  //         PTY.push({
  //           date: item.fcstDate,
  //           time: item.fcstTime,
  //           value: item.fcstValue,
  //         });
  //       }
  //       return;
  //     case "SKY":
  //       {
  //         SKY.push({
  //           date: item.fcstDate,
  //           time: item.fcstTime,
  //           value: item.fcstValue,
  //         });
  //       }
  //       return;
  //     case "T3H":
  //       {
  //         T3H.push({
  //           date: item.fcstDate,
  //           time: item.fcstTime,
  //           value: item.fcstValue,
  //         });
  //       }
  //       return;
  //     case "VEC":
  //       {
  //         VEC.push({
  //           date: item.fcstDate,
  //           time: item.fcstTime,
  //           value: item.fcstValue,
  //         });
  //       }
  //       return;
  //     case "WSD":
  //       {
  //         WSD.push({
  //           date: item.fcstDate,
  //           time: item.fcstTime,
  //           value: item.fcstValue,
  //         });
  //       }
  //       return;
  //     default:
  //       return;
  //   }
  // });

  const out = { POP, PTY, SKY, T3H, VEC, WSD };

  return out;
};

export const livingInfomation = async () => {
  const area = "서울";
  const encoding = encodeURIComponent(area);
  const requestDate = changDateFormMiniDust();
  let out: getLivingInformationProps[] = [];

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
  const dust = formDataMiniDust(minidust);

  return { dust, out };
};
