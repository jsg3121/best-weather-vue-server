import axios from "axios";
import { pick } from "lodash";
import { ResultDustDataProps } from "~/@types";
import { KOREA_WEATHER_API_KEY } from "~/common";

type ReturnAtmosData = Pick<
  ResultDustDataProps,
  "sidoName" | "pm10Grade1h" | "pm25Grade1h" | "o3Grade" | "dataTime" | "stationName"
>;

/**
 * ! 대기환경(미세먼지, 초미세먼지) 정보
 * todo #TODO: 지역 정보를 파라미터로 받아와야 함
 *
 * * Return data options
 * - sidoName : 시,도 명
 * - pm10Grade1h : 1시간 단위 미세먼지
 * - pm25Grade1h : 1시간 단위 초미세먼지
 * - o3Grade : 오존
 * - dataTime : 예보 시간
 * - stationName : 측정소 명
 *
 * @returns {ReturnAtmosData}
 */
export const dustService = async (): Promise<ReturnAtmosData> => {
  const area = "서울";
  const encoding = encodeURIComponent(area);

  const data = await axios
    .get(
      `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${encoding}&pageNo=1&numOfRows=200&returnType=json&serviceKey=${KOREA_WEATHER_API_KEY}&ver=1.3`
    )
    .then((res) => {
      const item = res.data.response.body.items;
      const output = item.map((item: ResultDustDataProps) => {
        return pick(item, [
          "sidoName",
          "pm10Grade1h",
          "pm25Grade1h",
          "o3Grade",
          "dataTime",
          "stationName",
        ]);
      });
      return output;
    });

  return data;
};
