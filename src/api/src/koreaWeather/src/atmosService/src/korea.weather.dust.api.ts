import axios from "axios";
import { pick } from "lodash";
import { ResultDustDataProps, ResultUvDataProps } from "~/@types";
import { getAtmosDate, KOREA_WEATHER_API_KEY } from "~/common";

type ReturnDustData = Pick<
  ResultDustDataProps,
  "sidoName" | "pm10Grade1h" | "pm25Grade1h" | "o3Grade" | "dataTime" | "stationName"
>;
type ReturnUvData = Pick<ResultUvDataProps, "today">;

type ReturnAtmosData = { dust: ReturnDustData; uv: ReturnUvData };

/**
 * ! 대기환경(미세먼지, 초미세먼지) 정보
 * todo #TODO: 지역 정보를 파라미터로 받아와야 함
 *
 * * ***Return data options (dust)***
 * - sidoName : 시,도 명
 * - pm10Grade1h : 1시간 단위 미세먼지
 * - pm25Grade1h : 1시간 단위 초미세먼지
 * - o3Grade : 오존
 * - dataTime : 예보 시간
 * - stationName : 측정소 명
 *
 * * ***Return data options (dust)***
 * - uv : string
 * @returns {ReturnAtmosData}
 */
export const atmosStatus = async (payload): Promise<ReturnAtmosData> => {
  const area = payload.locationCode;
  const locationCode = payload.skyCode;
  const encoding = encodeURIComponent(area);
  const BASE_DATE = getAtmosDate();

  const dust: ReturnDustData = await axios
    .get(
      `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${encoding}&pageNo=1&numOfRows=40&returnType=json&serviceKey=${KOREA_WEATHER_API_KEY}&ver=1.3`
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

  const uv: ReturnUvData = await axios
    .get(
      `http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?serviceKey=${KOREA_WEATHER_API_KEY}&dataType=json&areaNo=${locationCode}&time=${BASE_DATE}`
    )
    .then((res) => {
      return res.data.response.body.items.item[0].today;
    });

  return { dust, uv };
};
