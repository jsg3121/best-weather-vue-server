import { currentWeather, weeklyWeather } from "~/api";
import { app } from "~/index";

export const requestApi = () => {
  /**
   * ! 주간 기상정보 client 요청 및 전송 api
   */
  app.get("/service/weekly", async (_, res) => {
    console.time("total");
    const data = await weeklyWeather().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
    console.timeEnd("total");
  });

  // /**
  //  * ! 3시간 단위 기상 정보 client 요청 및 전송 api
  //  */
  // app.get("/service/threehours", async (_, res) => {
  //   console.time("threeHours");
  //   const data = await threeHours().then((res) => {
  //     return res;
  //   });
  //   res.send(data);
  //   res.end();
  //   console.timeEnd("threeHours");
  // });

  /**
   * ! 현재 기상 정보 client 요청 및 전송 api
   */
  app.get("/service/current", async (_, res) => {
    const data = await currentWeather().then((res) => {
      return res;
    });
    console.log(data);
    res.send(data);
    res.end();
  });
};
