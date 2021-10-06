import { threeHours } from "~/api";
import { app } from "~/index";

/**
 * 3시간 단위 기상 정보 client 요청 및 전송 api
 */
export const getThreeHours = async () => {
  app.get("/service/threehours", async (_, res) => {
    console.time("threeHours");
    const data = await threeHours().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
    console.timeEnd("threeHours");
  });
};
