import { app } from "../../index";
import { geolocation, openWeatherMapCurrent, weatherKorea } from "~/service";
import { migrationLocate } from "~/database";

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
};
