import { app } from "../../index";
import { geolocation, openWeatherMapCurrent, weatherKorea } from "~/service";
import { migrationLocate } from "~/database";

const serverSetting = {
  initLocationData: true,
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
};
