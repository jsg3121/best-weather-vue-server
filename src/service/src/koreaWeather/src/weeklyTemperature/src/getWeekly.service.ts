import { weeklyWeather } from "~/api";
import { app } from "~/index";

/**
 * ! 주간 기상정보 client 요청 및 전송 api
 */
export const getWeeklyTemperature = async () => {
  app.get("/service/weekly", async (_, res) => {
    console.time("total");
    const data = await weeklyWeather().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
    console.timeEnd("total");
  });
};
