import axios, { AxiosResponse } from "axios";
import { resultDailyDataProps } from "~/@types";
import { getCurrentDate, getCurrentTime } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";
import { app } from "~/index";

export const getCurrentTemperature = async () => {
  const nx = 60;
  const ny = 127;
  const BASE_TIME = getCurrentTime();
  const BASE_DATE = getCurrentDate();

  app.get("/service/current", async (_, res) => {
    const nowTemperatures: Promise<AxiosResponse<resultDailyDataProps>> = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=10&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
      const result = res.data.response.body.items.item;
      return result.filter((item: resultDailyDataProps) => {
        return item.category === "T1H" || item.category === "REH" || item.category === "RN1" || item.category === "VEC" || item.category === "WSD";
      });
    });
    console.log(nowTemperatures);
    res.send();
    res.end();
  });
};
