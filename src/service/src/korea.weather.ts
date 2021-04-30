import { getDailyWeather, getMaxMinTemperature, livingInfomation, threeHoursWeather } from "~/api";
import { app } from "~/server";

export const weatherKorea = () => {
  app.get("/", async (_, res) => {
    res.send("server start");
    res.end();
  });

  app.get("/api/daily", async (req, res) => {
    console.log("--------------------------------------------------");
    console.log("daily");
    console.log("--------------------------------------------------");
    const data = await getDailyWeather(req.query);
    res.send(data);
    res.end();
  });

  app.get("/api/weekly", async (req, res) => {
    console.log("--------------------------------------------------");
    console.log("weekly");
    console.log("--------------------------------------------------");
    const data = await getMaxMinTemperature(req.query);
    res.send(data);
    res.end();
  });

  app.get("/api/threeHours", async (req, res) => {
    console.log("--------------------------------------------------");
    console.log("threeHours");
    console.log("--------------------------------------------------");
    const data = await threeHoursWeather(req.query);
    res.send(data);
    res.end();
  });

  app.get("/api/livingInformation", async (_, res) => {
    console.log("--------------------------------------------------");
    console.log("livingInformation");
    console.log("--------------------------------------------------");
    const data = await livingInfomation();
    res.send(data);
    res.end();
  });

  app.get("/api/sunRiseFall", async (_, res) => {
    console.log("--------------------------------------------------");
    console.log("sunRiseFall");
    console.log("--------------------------------------------------");
    const data = await livingInfomation();
    res.send(data);
    res.end();
  });
};
