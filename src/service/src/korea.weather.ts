import { getDailyWeather } from "~/api";
import { app } from "~/server";

export const weatherKorea = () => {
  app.get("/api/daily", async (_, res) => {
    const data = await getDailyWeather();
    res.send(data);
    res.end();
  });
};
