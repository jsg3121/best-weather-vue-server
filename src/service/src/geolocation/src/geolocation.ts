import { app } from "~/index";
import { PrismaClient, PrismaPromise } from "@prisma/client";
import { WeatherGeolocationTypes } from "~/@types/src/database.types";

type LocateType = {
  latitude: string;
  longitude: string;
};

const prisma = new PrismaClient();

const checkGeolocation = async (locate: LocateType): Promise<WeatherGeolocationTypes> => {
  const latitude: number = parseFloat(locate.latitude);
  const longitude: number = parseFloat(locate.longitude);
  console.log(latitude);
  console.log(longitude);

  let minLat = latitude;
  let minLon = longitude;

  const location: PrismaPromise<WeatherGeolocationTypes> = prisma.$queryRaw`
    SELECT wg.*
    FROM (SELECT *
          FROM weather_geolocation
          ORDER BY ABS(positionNy - ${minLon})
          ) wg
    ORDER BY ABS(positionNx - ${minLat})
    LIMIT 1;
  `;

  return await location.then((data) => {
    return data[0];
  });
};

export const geolocation = () => {
  app.get("/geolocation", async (req, res) => {
    const payload = req.query as LocateType;
    const location = await checkGeolocation(payload);
    res.send(location);
    res.end();
  });
};
