import { OpenWeatherDataProps } from "~/@types";

type WeeklyData = OpenWeatherDataProps["daily"];
type RetyrnWeeklyData = {
  sky: WeeklyData[0]["weather"][0]["description"];
  maxTemperature: WeeklyData[0]["temp"]["max"];
  minTemperature: WeeklyData[0]["temp"]["min"];
};

/**
 * !주간 기상 정보 요청
 * * 기온의 경우 오전 오후 모두 표시
 * * 오전 오후 날씨가 따로 분리되어 나타나지 않고 하나의 날씨만 제공
 * -----------------------------------------------------------
 * * ***Return data options***
 * - sky : 날씨 상태
 * - maxTemperature : 최고기온
 * - minTemperature : 최저기온
 * -----------------------------------------------------------
 * @param {WeeklyData} data
 * @returns {Array<RetyrnWeeklyData>}
 */
export const weeklyData = (data: WeeklyData): Array<RetyrnWeeklyData> => {
  const weekly: Array<RetyrnWeeklyData> = [];

  data.map((item, idx: number) => {
    if (idx !== 0) {
      weekly.push({
        sky: item.weather[0].description,
        maxTemperature: item.temp.max,
        minTemperature: item.temp.min,
      });
    }
  });

  return weekly;
};
