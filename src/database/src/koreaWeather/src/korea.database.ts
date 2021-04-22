import { PrismaClient } from "@prisma/client";

export const weeklyWeatherKoreaDatabase = (data) => {
  const prisma = new PrismaClient();
  const main = async (data) => {
    return await prisma.weatherKoWeekly.create({ data: data }).then((res) => {
      if (res !== null) {
        return false;
      }
      return true;
    });
  };

  return main(data)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
