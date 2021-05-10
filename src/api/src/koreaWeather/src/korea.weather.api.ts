import axios, { AxiosResponse } from "axios";
import { GeolocationProps, getLivingInformationProps, getMaxMinTemperatureProps, getSunSetRiseProps, resultDailyDataProps, resultDailyTemperatureProps, threeHourWeatherOption, threeHourWeatherOutput } from "~/@types";
import { changDateFormThreeHoursTime, checkWeeklyDate, defaultDate, defaultTime } from "~/common";

const APIKEY = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
const BASE_DATE = defaultDate();
const BASE_TIME = defaultTime();

export const getDailyWeather: GeolocationProps = async (data) => {
  const { nx, ny } = data;
  const nowTemperatures: Promise<AxiosResponse<resultDailyDataProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${APIKEY}&numOfRows=10&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    console.log(res);
    const result = res.data.response.body.items.item;
    return result.filter((item) => {
      return item.category === "T1H" || item.category === "REH" || item.category === "RN1";
    });
  });

  const newSky: Promise<AxiosResponse<resultDailyTemperatureProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=${APIKEY}&numOfRows=50&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}&category=SKY`).then((res) => {
    console.log(res);
    const result = res.data.response.body.items.item;
    return result.filter((item: { category: string }) => {
      return item.category === "SKY";
    });
  });
  const res = [nowTemperatures, newSky[0]];
  return res;
};

export const getMaxMinTemperature: GeolocationProps = async (data) => {
  const { nx, ny } = data;

  const out: getMaxMinTemperatureProps = {
    maxTemperature: "",
    minTemperature: "",
  };
  const weeklyResDate = checkWeeklyDate();
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${APIKEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    console.log(res);
    return res.data.response.body.items.item;
  });

  const weeklyRes = await axios.get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${APIKEY}&numOfRows=10&pageNo=&dataType=json&regId=11D20501&tmFc=${weeklyResDate}`).then((res) => {
    console.log(res);
    return res.data.response.body.items.item[0];
  });

  const weeklyWeather = await axios.get(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${APIKEY}&numOfRows=10&pageNo=1&dataType=json&regId=11B00000&tmFc=${weeklyResDate}`).then((res) => {
    console.log(res);
    return res.data.response.body.items.item[0];
  });

  const weekOut = {
    day3: { min: weeklyRes.taMin3, max: weeklyRes.taMax3, rnstAM: weeklyWeather.rnSt3Am, rnstPM: weeklyWeather.rnSt3PM, wfAm: weeklyWeather.wf3Am, wfPM: weeklyWeather.wf3PM },
    day4: { min: weeklyRes.taMin4, max: weeklyRes.taMax4, rnstAM: weeklyWeather.rnSt4Am, rnstPM: weeklyWeather.rnSt4PM, wfAm: weeklyWeather.wf4Am, wfPM: weeklyWeather.wf4PM },
    day5: { min: weeklyRes.taMin5, max: weeklyRes.taMax5, rnstAM: weeklyWeather.rnSt5Am, rnstPM: weeklyWeather.rnSt5PM, wfAm: weeklyWeather.wf5Am, wfPM: weeklyWeather.wf5PM },
    day6: { min: weeklyRes.taMin6, max: weeklyRes.taMax6, rnstAM: weeklyWeather.rnSt6Am, rnstPM: weeklyWeather.rnSt6PM, wfAm: weeklyWeather.wf6Am, wfPM: weeklyWeather.wf6PM },
    day7: { min: weeklyRes.taMin7, max: weeklyRes.taMax7, rnstAM: weeklyWeather.rnSt7Am, rnstPM: weeklyWeather.rnSt7PM, wfAm: weeklyWeather.wf7Am, wfPM: weeklyWeather.wf7PM },
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

export const threeHoursWeather: GeolocationProps = async (data) => {
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
  // const requestDate = changDateFormMiniDust();
  const out: getLivingInformationProps[] = [];

  const res = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${encoding}&pageNo=1&numOfRows=200&returnType=json&serviceKey=${APIKEY}&ver=1.3`).then((res) => {
    console.log(res);
    return res.data.response.body.items;
  });
  res.map((list: getLivingInformationProps) => {
    out.push({
      sidoName: list.sidoName,
      pm10Value: list.pm10Value,
      pm25Value: list.pm25Value,
      o3Value: list.o3Value,
    });
  });

  // const minidust = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?searchDate=${requestDate}&returnType=json&serviceKey=${APIKEY}&numOfRows=50&pageNo=1`).then((res) => {
  //   return res.data.response.body.items;
  // });
  // const minimumDust = formDataMiniDust(minidust);

  const uv = await axios.get(`http://apis.data.go.kr/1360000/LivingWthrIdxService01/getUVIdx?serviceKey=${APIKEY}&dataType=json&areaNo=1100000000&time=${BASE_DATE}${BASE_TIME.substr(0, 2)}`).then((res) => {
    return res.data.response.body.items.item[0];
  });

  const uvValue = {
    date: uv.date,
    today: uv.today,
    tomorrow: uv.tomorrow,
    theDayAfterTomorrow: uv.theDayAfterTomorrow,
  };

  return { out, uvValue };
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
