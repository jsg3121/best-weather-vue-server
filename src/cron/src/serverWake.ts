import { app } from "~/server";

export const serverWake = () => {
  setInterval(() => {
    return app.get("/", async (_, res) => {
      res.send("server start");
      res.end();
    });
  }, 1000 * 60 * 20);
};
