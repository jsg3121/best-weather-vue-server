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

  let minLat = latitude;
  let minLon = longitude;

  const location: PrismaPromise<WeatherGeolocationTypes> = prisma.$queryRaw`
  SELECT
	*,
	( 6371 * acos( cos( radians(${minLat}) ) * cos( radians(positionNx) ) * cos( radians(positionNy) - radians(${minLon}) ) + sin( radians(${minLat}) ) * sin( radians(positionNx) ) ) ) AS distance
  FROM
    weather_geolocation wg 
  ORDER BY distance LIMIT 1;
  `;

  return await location.then((data) => {
    return data[0];
  });
};

export const geolocation = () => {
  app.get("/geolocation", async (req, res) => {
    const payload = req.query as LocateType;
    console.log(payload);

    const location = await checkGeolocation(payload);
    console.log(location);
    res.send(location);
    res.end();
  });
};
