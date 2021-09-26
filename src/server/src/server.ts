import { migrationLocate } from "~/database";
import { geolocation, getCurrentTemperature, weatherKorea } from "~/service";
import { app } from "../../index";

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
  geolocation();
  getCurrentTemperature();

  if (process.env.NODE_ENV === "development") {
    geolocation();
  }
};
