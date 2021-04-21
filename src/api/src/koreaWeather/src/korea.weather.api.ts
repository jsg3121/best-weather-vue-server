import axios from "axios";
const apikey = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
const date = "20210421";
const time = "1500";

// type RequestDailyWeatherProps = {
//   query: {
//     apikey: "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
//   };
// };

export const getDailyWeather = async () => {
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${apikey}&numOfRows=8&pageNo=1&dataType=json&base_date=${date}&base_time=${time}&nx=${55}&ny=${127}`);
  console.log(res.data.response.body.items);
  return res.data.response.body.items;
};
