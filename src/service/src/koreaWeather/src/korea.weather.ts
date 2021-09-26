import { getMaxMinTemperature, livingInfomation, threeHoursWeather } from "~/api";
import { app } from "~/index";

export const weatherKorea = () => {
  app.get("/api/ko/weekly", async (req, res) => {
    console.log("--------------------------------------------------");
    console.log("weekly");
    console.log("--------------------------------------------------");
    const data = await getMaxMinTemperature(req.query);
    res.send(data);
    res.end();
  });

  app.get("/api/ko/threeHours", async (req, res) => {
    console.log("--------------------------------------------------");
    console.log("threeHours");
    console.log("--------------------------------------------------");
    const data = await threeHoursWeather(req.query);
    res.send(data);
    res.end();
  });

  app.get("/api/ko/livingInformation", async (_, res) => {
    console.log("--------------------------------------------------");
    console.log("livingInformation");
    console.log("--------------------------------------------------");
    const data = await livingInfomation();
    res.send(data);
    res.end();
  });
};
