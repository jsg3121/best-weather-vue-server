import axios from "axios";
import { omit } from "lodash";
import { ApiResponseData, ResultWeeklyDataProps } from "~/@types";
import { getWeeklyDate, getWeeklyTime, KOREA_WEATHER_API_KEY } from "~/common";

type CurrentDataProps = {
  nx: string;
  ny: string;
};

/**
 * ! 3시간 단위 예보
 *
 * * ***Return data options***
 * - PTY : 강수 형태 (비, 눈 등) ---> 18부터 시작 --> 12개씩
 * - SKY : 하늘 상태 ---> 17번부터 시작 12개씩
 * - TMP : 1시간 기온 --> 0번부터 12개씩
 */
export const getHourly = async (
  props: CurrentDataProps
): Promise<ResultWeeklyDataProps["hourlyData"]> => {
  const { nx, ny } = props;
  const DATE = getWeeklyDate();
  const TIME = getWeeklyTime();

  const arr = new Array<number>(5).fill(0);
  const data = new Array();

  await Promise.all(
    arr.map(async (_, index) => {
      const res = await axios.get(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=100&pageNo=${
          index + 1
        }&dataType=json&base_date=${DATE}&base_time=${TIME}&nx=${nx}&ny=${ny}`
      );
      const filter = res.data.response.body.items.item
        .filter((item: ApiResponseData) => {
          return item.category === "PTY" || item.category === "SKY" || item.category === "TMP";
        })
        .map((item: ApiResponseData) => {
          return omit(item, ["baseDate", "baseTime", "nx", "ny"]);
        });
      return data.push(...filter);
    })
  );
  data
    .sort((a, b) => {
      if (a.fcstTime > b.fcstTime) {
        return 1;
      } else if (a.fcstTime < b.fcstTime) {
        return -1;
      } else {
        return 0;
      }
    })
    .sort((a, b) => {
      if (a.fcstDate > b.fcstDate) {
        return 1;
      } else if (a.fcstDate < b.fcstDate) {
        return -1;
      } else {
        return 0;
      }
    });
  return data as ResultWeeklyDataProps["hourlyData"];
};
