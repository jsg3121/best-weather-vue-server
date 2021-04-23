import axios from "axios";
import { dailyWeatherRequestProps, getLivingInformationProps, getMaxMinTemperatureProps, getThreeHourWeatherProps, resultDailyDataProps, resultDailyTemperatureProps, returnDatilyDataProps } from "~/@types";
import { changDateFormMiniDust, changDateFormThreeHoursTime, defaultDate, defaultTime, formDataMiniDust } from "~/common";

const APIKEY = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
const BASE_DATE = defaultDate();
const BASE_TIME = defaultTime();

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
      case "TMN":
        out.maxTemperature = item.fcstValue;
        return;
      case "TMX":
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

  const time = parseInt(changDateFormThreeHoursTime(), 10);
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${APIKEY}&numOfRows=180&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${time}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  const out: getThreeHourWeatherProps = {
    pop: {
      description: "강수확률",
      data: [{}],
    },
    pty: {
      description: "강수형태",
      data: [{}],
    },
    sky: {
      description: "하늘상태",
      data: [{}],
    },
    t3h: {
      description: "기온",
      data: [{}],
    },
    vec: {
      description: "풍향",
      data: [{}],
    },
    wsd: {
      description: "풍속",
      data: [{}],
    },
  };

  res.map((item: resultDailyTemperatureProps) => {
    switch (item.category) {
      case "POP":
        {
          out.pop.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "PTY":
        {
          out.pty.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "SKY":
        {
          out.sky.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "T3H":
        {
          out.t3h.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "VEC":
        {
          out.vec.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "WSD":
        {
          out.wsd.data.push({
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
