import { openWeather } from "~/api";
import { app } from "~/index";

export const getOpenWeatherService = () => {
  app.get("/service/openweather", async (_, res) => {
    const data = await openWeather().then((res) => {
      return res;
    });

    res.send(data);
    res.end();
  });

  return;
};
