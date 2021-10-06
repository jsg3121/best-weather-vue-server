import { migrationLocate } from "~/database";
import { geolocation, getCurrentTemperature, getWeeklyTemperature } from "~/service";
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

  geolocation();
  getCurrentTemperature();
  getWeeklyTemperature();

  if (process.env.NODE_ENV === "development") {
    geolocation();
  }
};
