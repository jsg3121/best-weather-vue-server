import {
  currentWeather,
  atmosStatus,
  weeklyWeather,
  WeeklyDataProps,
  CurrentDataProps,
} from "~/api";
import { app } from "~/index";

export const requestApi = () => {
  /**
   * ! 주간 기상정보 client 요청 및 전송 api
   */
  app.get("/service/weekly", async (req, res) => {
    const params = req.query as WeeklyDataProps;
    const data = await weeklyWeather(params).then((res) => {
      return res;
    });
    res.send(data);
    res.end();
  });

  /**
   * ! 현재 기상 정보 client 요청 및 전송 api
   */
  app.get("/service/current", async (req, res) => {
    const params = req.query as CurrentDataProps;
    const data = await currentWeather(params).then((res) => {
      return res;
    });
    res.send(data);
    res.end();
  });

  /**
   * ! 대기환경 정보 제공 api 요청
   * ! dust : 미세먼지, 초미세먼지
   * ! uv : 자외선
   */
  app.get("/service/atmos", async (req, res) => {
    const params = req.query;
    const data = await atmosStatus(params).then((res) => {
      return res;
    });
    res.send(data);
    res.end();
  });
};
