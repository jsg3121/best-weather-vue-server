import cors from "cors";
import express from "express";
// import { koreaCron } from "~/cron";
import { weatherKorea } from "~/service";
export const app = express();

export const runServer = async (): Promise<void> => {
  const PORT = process.env.PORT || 8989;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(PORT, () => {
    console.log("server start!!");
    console.log(PORT);
  });

  weatherKorea();
  // koreaCron();
};
