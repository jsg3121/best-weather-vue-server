import { currentWeather } from "~/api";
import { app } from "~/index";

/**
 * 현재 기상 정보 client 요청 및 전송 api
 */
export const getCurrentTemperature = async () => {
  console.time("current");
  app.get("/service/current", async (_, res) => {
    const data = await currentWeather().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
    console.timeEnd("current");
  });
};
