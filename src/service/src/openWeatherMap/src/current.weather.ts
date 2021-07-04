import { getCurrentWeatherOWM } from "~/api";
import { app } from "~/index";

export const openWeatherMapCurrent = () => {
  app.get("/api/open/current", async (_, res) => {
    console.log("--------------------------------------------------");
    console.log("current");
    console.log("--------------------------------------------------");
    const data = await getCurrentWeatherOWM();
    res.send(data);
  });
};
