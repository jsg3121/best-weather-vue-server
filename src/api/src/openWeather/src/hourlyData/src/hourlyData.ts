import { OpenWeatherDataProps } from "~/@types";

type ThreeHoursData = OpenWeatherDataProps["hourly"];
type ReutrnThreeHours = {
  temp: ThreeHoursData[0]["temp"];
  sky: ThreeHoursData[0]["weather"][0]["description"];
};

/**
 * ! 3시간 단위 기상 예보
 * * 1시간 단위로 나오기 때문에 3시간 간격으로 변경하여 데이터 반환
 *
 * --------------------------------
 * * ***Return data options***
 * - sky : 하늘 상태
 * - temp : 기온
 * --------------------------------
 * @param {ThreeHoursData} data
 * @returns {Array<ReutrnThreeHours>}
 */
export const hourlyData = (data: ThreeHoursData): Array<ReutrnThreeHours> => {
  const hourly: Array<ReutrnThreeHours> = [];
  data.map((item) => {
    hourly.push({
      sky: item.weather[0].description,
      temp: item.temp,
    });
  });

  return hourly;
};
