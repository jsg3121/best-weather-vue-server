import { app } from "~/server";

export const serverWake = () => {
  const time = 1000 * 60 * 29;
  setInterval(() => {
    return app.get("/", async (_, res) => {
      res.send("server start");
      res.end();
    });
  }, time);
};
