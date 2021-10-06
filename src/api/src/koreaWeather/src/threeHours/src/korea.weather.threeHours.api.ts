import axios from "axios";
import { omit } from "lodash";
import { CurrentStatusProps } from "~/@types";
import { changDateFormThreeHoursTime, getCurrentDate } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

type ReturnDataType = Array<Omit<CurrentStatusProps, "baseDate" | "baseTime" | "nx" | "ny">>;

export const threeHours = async (): Promise<any> => {
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
