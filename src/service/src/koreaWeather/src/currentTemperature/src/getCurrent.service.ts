import { currentWeather } from "~/api";
import { app } from "~/index";

/**
 * 현재 기상 정보 client 요청 및 전송 api
 */
export const getCurrentTemperature = async () => {
  app.get("/service/current", async (_, res) => {
    const data = await currentWeather().then((res) => {
      return res;
    });
    console.log(data);
    res.send(data);
    res.end();
  });
};
