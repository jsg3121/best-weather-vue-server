import { migrationLocate } from "~/database";
import {
  geolocation,
  getAtmos,
  getCurrentTemperature,
  getThreeHours,
  getWeeklyTemperature,
} from "~/service";
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
  getThreeHours();
  getAtmos();
};
