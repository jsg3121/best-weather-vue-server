import axios from "axios";
import { omit } from "lodash";
import { CurrentStatusProps } from "~/@types";
import { changDateFormThreeHoursTime, getCurrentDate } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common";

type ReturnDataType = Array<Omit<CurrentStatusProps, "baseDate" | "baseTime" | "nx" | "ny">>;

/**
 * ! 3시간 단위 예보
 *
 * * ***Return data options***
 * - R06 : 6시간 강수량
 * - S06 : 6시간 적설량
 * - PTY : 강수 형태 (비, 눈 등)
 * - SKY : 하늘 상태
 * - T3H : 3시간 기온
 *
 * @returns {ReturnDataType}
 */
export const threeHours = async (): Promise<ReturnDataType> => {
  const BASE_DATE = getCurrentDate();
  const TIME = changDateFormThreeHoursTime();
  const nx = 60;
  const ny = 127;

  const data: ReturnDataType = await axios
    .get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=180&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${TIME}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`)
    .then((res) => {
      return res.data.response.body.items.item.filter((item: CurrentStatusProps) => {
        return item.category === "R06" || item.category === "S06" || item.category === "PTY" || item.category === "SKY" || item.category === "T3H";
      });
    })
    .then((res) => {
      const output: ReturnDataType = res.map((item: CurrentStatusProps) => {
        return omit(item, ["baseDate", "baseTime", "nx", "ny"]);
      });

      return output;
    });

  return data;
};
