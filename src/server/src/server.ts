import { app } from "../../index";
import { geolocation, openWeatherMapCurrent, weatherKorea } from "~/service";
import { migrationLocate } from "~/database";
import { getDailyWeather } from "~/service/src/koreaWeather/src/korea.daily.weather";
import { getCurrentTemperature } from "~/service/src/currentTemperature/src/getCurrent";

const serverSetting = {
  initLocationData: false,
};

export const runServer = async (): Promise<void> => {
  const PORT = 80;

  app.listen(PORT, () => {
    console.log("server start!!");
    console.log(PORT);
  });

  if (serverSetting.initLocationData) {
    await migrationLocate();
  }

  weatherKorea();
  openWeatherMapCurrent();
  geolocation();
  getDailyWeather();

  if (process.env.NODE_ENV === "development") {
    getCurrentTemperature();
  }
};
