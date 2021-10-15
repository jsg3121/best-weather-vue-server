import axios from "axios";
import { ResultUvDataProps } from "~/@types";
import { getAtmosDate } from "~/common";
import { KOREA_WEATHER_API_KEY } from "~/common";

type ReturnUvData = Pick<ResultUvDataProps, "today">;

/**
 * ! 자외선 지수 요청
 * ! today만 가져오기 때문에 String으로 반환
 *
 * * ***Return data options***
 * - {string} : today 자외선 지수 (06시에만 발표)
 *
 * @returns {ReturnUvData}
 */
export const uvService = async (): Promise<ReturnUvData> => {
  const BASE_DATE = getAtmosDate();

  const data = await axios.get(`http://apis.data.go.kr/1360000/LivingWthrIdxService01/getUVIdx?serviceKey=${KOREA_WEATHER_API_KEY}&dataType=json&areaNo=1100000000&time=${BASE_DATE}`).then((res) => {
    return res.data.response.body.items.item[0].today;
  });

  return data;
};
