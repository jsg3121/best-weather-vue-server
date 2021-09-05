import axios, { AxiosResponse } from "axios";
import { GeolocationProps, ParamsInterface, ResponseDailyWeather, resultDailyDataProps, resultDailyTemperatureProps } from "~/@types";
import { defaultDate, defaultTime } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

export const getDailyWeather: GeolocationProps<ParamsInterface, ResponseDailyWeather> = async (data) => {
  const BASE_TIME = defaultTime();
  const BASE_DATE = defaultDate();

  const { nx, ny } = data;

  const nowTemperatures: Promise<AxiosResponse<resultDailyDataProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const result = res.data.response.body.items.item;
    return result.filter((item: resultDailyDataProps) => {
      return item.category === "T1H" || item.category === "REH" || item.category === "RN1" || item.category === "VEC" || item.category === "WSD";
    });
  });

  const newSky: Promise<AxiosResponse<resultDailyTemperatureProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=50&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const result = res.data.response.body.items.item;
    return result.filter((item: { category: string }) => {
      return item.category === "SKY";
    });
  });

  const minMax: Promise<AxiosResponse<resultDailyTemperatureProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    const result = res.data.response.body.items.item;
    return result.filter((item: resultDailyTemperatureProps) => {
      return item.category === "TMX" || item.category === "TMN";
    });
  });

  const currentWeather: ResponseDailyWeather = {
    reh: nowTemperatures[0].obsrValue,
    rn1: nowTemperatures[1].obsrValue,
    t1h: nowTemperatures[2].obsrValue,
    vec: nowTemperatures[3].obsrValue,
    wsd: nowTemperatures[4].obsrValue,
    sky: newSky[0].fcstValue,
    tmn: minMax[0].fcstValue,
    tmx: minMax[1].fcstValue,
  };

  return currentWeather;
};
