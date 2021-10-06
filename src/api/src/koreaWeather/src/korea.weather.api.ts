// import axios from "axios";
// import { table } from "console";
// import dayjs from "dayjs";
// import { GeolocationProps, getLivingInformationProps, threeHourWeatherOption, threeHourWeatherOutput } from "~/@types";
// import { calcDate, changDateFormThreeHoursTime, checkWeeklyDate, defaultDate, defaultTime } from "~/common";
// import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

// export const livingInfomation = async () => {
//   const BASE_DATE = defaultDate();
//   const BASE_TIME = defaultTime();
//   const area = "서울";
//   const encoding = encodeURIComponent(area);
// const requestDate = changDateFormMiniDust();
//   const out: getLivingInformationProps[] = [];

//   const res = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${encoding}&pageNo=1&numOfRows=200&returnType=json&serviceKey=${KOREA_WEATHER_API_KEY}&ver=1.3`).then((res) => {
//     return res.data.response.body.items;
//   });
//   res.map((list: getLivingInformationProps) => {
//     out.push({
//       sidoName: list.sidoName,
//       pm10Grade1h: list.pm10Grade1h,
//       pm25Grade1h: list.pm25Grade1h,
//       o3Grade: list.o3Grade,
//       dataTime: list.dataTime,
//       stationName: list.stationName,
//     });
//   });

//   table(out);

//   const uv = await axios.get(`http://apis.data.go.kr/1360000/LivingWthrIdxService01/getUVIdx?serviceKey=${KOREA_WEATHER_API_KEY}&dataType=json&areaNo=1100000000&time=${BASE_DATE}${BASE_TIME.substr(0, 2)}`).then((res) => {
//     return res.data.response.body.items.item[0];
//   });

//   const uvValue = {
//     date: uv.date,
//     today: uv.today,
//   };
//   table(uvValue);

//   return { out, uvValue };
// };
