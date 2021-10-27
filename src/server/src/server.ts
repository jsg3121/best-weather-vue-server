import { env } from "~/common";
import { migrationLocate } from "~/database";
import { geolocation, getOpenWeatherService, requestApi } from "~/service";
import { app } from "../../index";

const serverSetting = {
  initLocationData: env("INIT_DATABASE"),
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
  requestApi();
  geolocation();
  getOpenWeatherService();
};
