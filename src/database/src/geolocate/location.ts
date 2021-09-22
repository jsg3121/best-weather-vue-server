import data from "./data.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// type InitDataType = {
//   fullLocation: string;
//   location1?: string;
//   location2?: string;
//   locationCode: string;
//   positionNx: number;
//   positionNy: number;
//   locationEncoding: string;
// };

type JsonDataType = {
  num: string;
  country?: string;
  divisionCode: string;
  depth1: string;
  depth2?: string;
  depth3?: string;
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

const encodingFormat = (txt: JsonDataType["depth1"]): string => {
  if (txt.indexOf("서울")) {
    return encodeURIComponent("서울");
  } else if (txt.indexOf("부산")) {
    return encodeURIComponent("부산");
  } else if (txt.indexOf("대구")) {
    return encodeURIComponent("대구");
  } else if (txt.indexOf("인천")) {
    return encodeURIComponent("인천");
  } else if (txt.indexOf("광주")) {
    return encodeURIComponent("광주");
  } else if (txt.indexOf("대전")) {
    return encodeURIComponent("대전");
  } else if (txt.indexOf("울산")) {
    return encodeURIComponent("울산");
  } else if (txt.indexOf("경기")) {
    return encodeURIComponent("경기");
  } else if (txt.indexOf("강원")) {
    return encodeURIComponent("강원");
  } else if (txt.indexOf("충북")) {
    return encodeURIComponent("충북");
  } else if (txt.indexOf("충남")) {
    return encodeURIComponent("충남");
  } else if (txt.indexOf("전북")) {
    return encodeURIComponent("전북");
  } else if (txt.indexOf("전남")) {
    return encodeURIComponent("전남");
  } else if (txt.indexOf("경북")) {
    return encodeURIComponent("경북");
  } else if (txt.indexOf("경남")) {
    return encodeURIComponent("경남");
  } else if (txt.indexOf("제주")) {
    return encodeURIComponent("제주");
  } else if (txt.indexOf("세종")) {
    return encodeURIComponent("세종");
  } else return encodeURIComponent("전국");
};

export const migrationLocate = async () => {
  console.log("지역정보 database init....");

  const initData: any = [];
  console.log("add initData array");

  data.map((item: JsonDataType, index: number) => {
    console.log(`${index} data 추출....`);
    initData.push({
      fullLocation: `${item.depth1} ${item.depth2} ${item.depth3} `,
      location1: item.depth2 ? item.depth2 : "",
      location2: item.depth3 ? item.depth3 : "",
      locationCode: item.divisionCode,
      positionNx: Number(item.longitudePerSec),
      positionNy: Number(item.latitudePerSec),
      locationEncoding: encodingFormat(item.depth1),
    });
  });

  const init = async () => {
    await Promise.all(
      initData.map(async (item, index: number) => {
        await prisma.weather_geolocation.create({
          data: item,
        });

        if (index % 200 === 0) {
          console.log(`${index} data init...`);
        }
      })
    );
  };

  await init()
    .then(() => {
      console.log("update success");
    })
    .catch((e) => {
      console.log(e);
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect;
    });
};
