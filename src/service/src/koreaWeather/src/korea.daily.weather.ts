// import axios, { AxiosResponse } from "axios";
// import { resultDailyDataProps } from "~/@types";
// import { defaultDate, defaultTime } from "~/common";
// import { KOREA_WEATHER_API_KEY } from "~/common/src/global";
// import { app } from "~/index";

export const getDailyWeather = async () => {
  //   const nx = 60;
  //   const ny = 127;
  //   const BASE_TIME = defaultTime();
  //   const BASE_DATE = defaultDate();
  // app.get("/api/update/daily", async (_, res) => {
  //   // const newSky: Promise<AxiosResponse<resultDailyTemperatureProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=50&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
  //   //   const result = res.data.response.body.items.item;
  //   //   return result.filter((item: { category: string }) => {
  //   //     return item.category === "SKY";
  //   //   });
  //   // });
  //   // const minMax: Promise<AxiosResponse<resultDailyTemperatureProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=40&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
  //   //   const result = res.data.response.body.items.item;
  //   //   return result.filter((item: resultDailyTemperatureProps) => {
  //   //     return item.category === "TMX" || item.category === "TMN";
  //   //   });
  //   // });
  //   res.send();
  //   res.end();
  // });
};
