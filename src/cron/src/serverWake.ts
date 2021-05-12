import { app } from "~/server";

export const serverWake = () => {
  setInterval(() => {
    app.get("https://best-weather-vue.herokuapp.com/", async (_, res) => {
      console.log("...ing");
      res.send("server start");
      res.end();
    });
  }, 1000 * 60 * 29);
};
