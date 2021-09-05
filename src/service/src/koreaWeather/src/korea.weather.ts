import { getMaxMinTemperature, livingInfomation, threeHoursWeather } from "~/api";
import { getDailyWeather } from "~/api/src/koreaWeather/src/korea.weather.daily";
import { app } from "~/index";

type WeatherKoreaType = () => Promise<void>;

export const weatherKorea: WeatherKoreaType = async (): Promise<void> => {
  app.get("/api/ko/get/weather/korea", async (req, res): Promise<void> => {
    const daily = await getDailyWeather(req.query);
    const minMax = await getMaxMinTemperature(req.query);
    const threeHours = await threeHoursWeather(req.query);
    const atoms = await livingInfomation();

    console.log(daily);
    console.log(minMax);
    console.log(threeHours);
    console.log(atoms);
    res.send({ daily, minMax, threeHours, atoms });
  });
};

// export const weatherKorea = () => {

//   app.get("/api/ko/nowWeather", async (req, res) => {
//     console.log("--------------------------------------------------");
//     console.log("daily");
//     console.log("--------------------------------------------------");
//     const data = await getDailyWeather(req.query);
//     res.end();
//   });

//   app.get("/api/ko/weekly", async (req, res) => {
//     console.log("--------------------------------------------------");
//     console.log("weekly");
//     console.log("--------------------------------------------------");
//     const data = await getMaxMinTemperature(req.query);
//     res.send(data);
//     res.end();
//   });

//   app.get("/api/ko/threeHours", async (req, res) => {
//     console.log("--------------------------------------------------");
//     console.log("threeHours");
//     console.log("--------------------------------------------------");
//     const data = await threeHoursWeather(req.query);
//     res.send(data);
//     res.end();
//   });

//   app.get("/api/ko/livingInformation", async (_, res) => {
//     console.log("--------------------------------------------------");
//     console.log("livingInformation");
//     console.log("--------------------------------------------------");
//     const data = await livingInfomation();
//     res.send(data);
//     res.end();
//   });

//   app.get("/api/ko/sunRiseFall", async (_, res) => {
//     console.log("--------------------------------------------------");
//     console.log("sunRiseFall");
//     console.log("--------------------------------------------------");
//     const data = await sunRiseFall();
//     res.send(data);
//     res.end();
//   });
// };
