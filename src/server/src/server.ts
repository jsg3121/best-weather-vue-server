import { app } from "../../index";
import { geolocation, getCurrentTemperature, openWeatherMapCurrent, weatherKorea } from "~/service";
import { migrationLocate } from "~/database";
import { getDailyWeather } from "~/service/src/koreaWeather/src/korea.daily.weather";

const serverSetting = {
  initLocationData: false,
};

export const runServer = async (): Promise<void> => {
  if (serverSetting.initLocationData) {
    await migrationLocate();
  }

  const PORT = 80;

  app.listen(PORT, () => {
    console.log("server start!!");
    console.log(PORT);
  });

  weatherKorea();
  openWeatherMapCurrent();
  geolocation();
  getDailyWeather();

  if (process.env.NODE_ENV === "development") {
    getCurrentTemperature();
    geolocation();
  }
};
