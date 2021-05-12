import { app } from "~/server";

export const serverWake = () => {
  setInterval(() => {
    return app.get("https://best-weather-vue.herokuapp.com/", async (_, res) => {
      res.send("server start");
      res.end();
    });
  }, 1000 * 60 * 29);
};
