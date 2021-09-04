import { app } from "~/index";
import locateData from "~/database/src/geolocate/data.json";

type LocateType = {
  latitude: string;
  longitude: string;
};

type ReturnLocation = {
  num: string;
  country: string;
  divisionCode: string;
  depth1: string;
  depth2: string | "";
  depth3: string | "";
  gridX: string;
  gridY: string;
  longitudeHour: string;
  longitudeMin: string;
  longitudeSec: string;
  latitudeHour: string;
  latitudeMin: string;
  latitudeSec: string;
  longitudePerSec: string;
  latitudePerSec: string;
  locationupdate?: string;
};

const checkGeolocation = (locate: LocateType): ReturnLocation => {
  const latitude: number = parseFloat(locate.latitude);
  const longitude: number = parseFloat(locate.longitude);

  let minLat = latitude;
  let minLon = longitude;
  let locateIdx = 0;

  for (let i = 0; i < locateData.length; i++) {
    let absLat = Math.abs(parseFloat(locateData[i].latitudePerSec) - latitude);
    let absLon = Math.abs(parseFloat(locateData[i].longitudePerSec) - longitude);

    if (absLat == minLat) {
      if (absLon == minLon) {
        locateIdx = i;
      } else if (absLon < minLon) {
        minLon = absLon;
        locateIdx = i;
      }
    } else if (absLat < minLat) {
      if (absLon == minLon) {
        minLat = absLat;
        locateIdx = i;
      } else if (absLon < minLon) {
        minLat = absLat;
        minLon = absLon;
        locateIdx = i;
      }
    }
  }

  const result = locateData[locateIdx] as ReturnLocation;

  return result;
};

export const geolocation = () => {
  // #TODO : check axios nethods 'post' dose not recieve request body
  app.get("/geolocation", async (req, res) => {
    console.log(req.query);
    const payload = req.query as LocateType;
    const location = checkGeolocation(payload);
    console.log(location);
    res.send(location);
    res.end();
  });
};
