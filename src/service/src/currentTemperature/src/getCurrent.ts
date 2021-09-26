import { currentApi } from "~/api";
import { app } from "~/index";

export const getCurrentTemperature = async () => {
  app.get("/service/current", async (_, res) => {
    const data = await currentApi().then((res) => {
      return res;
    });
    res.send(data);
    res.end();
  });
};
