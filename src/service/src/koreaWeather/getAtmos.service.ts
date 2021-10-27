import { dustService, uvService } from "~/api";
import { app } from "~/index";

/**
 * ! 대기환경 정보 제공 api 요청
 * ! dust : 미세먼지, 초미세먼지
 * ! uv : 자외선
 */
export const getAtmos = async () => {
  app.get("/service/dust", async (_, res) => {
    console.time("dust");
    const data = await dustService().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
    console.timeEnd("dust");
  });

  app.get("/service/uv", async (_, res) => {
    console.time("uv");
    const data = await uvService().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
    console.timeEnd("uv");
  });
};
