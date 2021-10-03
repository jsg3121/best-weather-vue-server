// import axios from "axios";
// import { table } from "console";
// import dayjs from "dayjs";
// import { GeolocationProps, getLivingInformationProps, threeHourWeatherOption, threeHourWeatherOutput } from "~/@types";
// import { calcDate, changDateFormThreeHoursTime, checkWeeklyDate, defaultDate, defaultTime } from "~/common";
// import { KOREA_WEATHER_API_KEY } from "~/common/src/global";

// export const threeHoursWeather: GeolocationProps = async (data) => {
//   const { nx, ny } = data;
//   const BASE_DATE = defaultDate();

//   const R06: threeHourWeatherOutput[] = [];
//   const S06: threeHourWeatherOutput[] = [];
//   const PTY: threeHourWeatherOutput[] = [];
//   const SKY: threeHourWeatherOutput[] = [];
//   const T3H: threeHourWeatherOutput[] = [];

//   const time = changDateFormThreeHoursTime();
//   const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${KOREA_WEATHER_API_KEY}&numOfRows=180&pageNo=1&dataType=json&base_date=${BASE_DATE}&base_time=${time}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
//     return res.data.response.body.items.item;
//   });

//   res.map((item: threeHourWeatherOption) => {
//     switch (item.category) {
//       case "R06":
//         {
//           R06.push({
//             date: item.fcstDate,
//             time: item.fcstTime,
//             value: item.fcstValue,
//           });
//         }
//         return;
//       case "S06":
//         {
//           S06.push({
//             date: item.fcstDate,
//             time: item.fcstTime,
//             value: item.fcstValue,
//           });
//         }
//         return;
//       case "PTY":
//         {
//           PTY.push({
//             date: item.fcstDate,
//             time: item.fcstTime,
//             value: item.fcstValue,
//           });
//         }
//         return;
//       case "SKY":
//         {
//           SKY.push({
//             date: item.fcstDate,
//             time: item.fcstTime,
//             value: item.fcstValue,
//           });
//         }
//         return;
//       case "T3H":
//         {
//           T3H.push({
//             date: item.fcstDate,
//             time: item.fcstTime,
//             value: item.fcstValue,
//           });
//         }
//         return;
//       default:
//         return;
//     }
//   });

//   const out = { R06, PTY, SKY, T3H, S06 };

//   return out;
// };

// export const livingInfomation = async () => {
//   const BASE_DATE = defaultDate();
//   const BASE_TIME = defaultTime();
//   const area = "서울";
//   const encoding = encodeURIComponent(area);
//   // const requestDate = changDateFormMiniDust();
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
