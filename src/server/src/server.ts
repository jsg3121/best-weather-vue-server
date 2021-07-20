import { app } from "../../index";
import { serverWake } from "~/cron/src/serverWake";
import { geolocation, openWeatherMapCurrent, weatherKorea } from "~/service";

export const runServer = async (): Promise<void> => {
  const PORT = process.env.PORT || 80;

  app.listen(PORT, () => {
    console.log("server start!!");
    console.log(PORT);
  });

  weatherKorea();
  openWeatherMapCurrent();
  geolocation();
  serverWake();
};
