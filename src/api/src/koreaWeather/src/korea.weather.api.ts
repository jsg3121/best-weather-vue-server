import axios from "axios";
import { dailyWeatherRequestProps, getMaxMinTemperatureProps, getThreeHourWeatherProps, resultDailyDataProps, resultDailyTemperatureProps, returnDatilyDataProps } from "~/@types";

const apikey = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
const date = new Date();
const base_date = `${date.getFullYear()}${date.getMonth() > 10 ? date.getMonth() : "0" + (date.getMonth() + 1)}${date.getDate()}`;
const base_time = date.getHours() - 1 > 10 ? date.getHours() - 1 : "0" + (date.getHours() - 3);

export const getDailyWeather: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${apikey}&numOfRows=10&pageNo=1&dataType=json&base_date=${base_date}&base_time=${base_time}00&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  let out: returnDatilyDataProps = {
    nowTemperatures: "",
    nowHumidity: "",
    nowPrecipitation: "",
  };

  res.map((item: resultDailyDataProps) => {
    switch (item.category) {
      case "T1H":
        out.nowTemperatures = item.obsrValue;
        return;
      case "REH":
        out.nowHumidity = item.obsrValue;
        return;
      case "RN1":
        out.nowPrecipitation = item.obsrValue;
        return;
      default:
        return;
    }
  });

  return out;
};

export const getMaxMinTemperature: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${apikey}&numOfRows=40&pageNo=1&dataType=json&base_date=${base_date}&base_time=0200&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  let out: getMaxMinTemperatureProps = {
    maxTemperature: "",
    minTemperature: "",
  };
  res.map((item: resultDailyTemperatureProps) => {
    switch (item.category) {
      case "TMN":
        out.maxTemperature = item.fcstValue;
        return;
      case "TMX":
        out.minTemperature = item.fcstValue;
        return;
      default:
        return;
    }
  });
  return out;
};

export const threeHoursWeather: dailyWeatherRequestProps = async (data) => {
  const { nx, ny } = data;

  const getTime = () => {
    if (date.getHours() % 3 === 2) {
      if (date.getMinutes() > 10) {
        const hour = 3 * Math.floor(date.getHours() / 3) + 2;
        return hour + "00";
      } else {
        const hour = 3 * Math.floor(date.getHours() / 3) - 1;
        return hour + "00";
      }
    }
    const hour = 3 * Math.floor(date.getHours() / 3) - 1;
    return hour + "00";
  };

  const time = parseInt(getTime(), 10);
  const res = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${apikey}&numOfRows=180&pageNo=1&dataType=json&base_date=${base_date}&base_time=${time}&nx=${nx ? nx : 60}&ny=${ny ? ny : 127}`).then((res) => {
    return res.data.response.body.items.item;
  });

  const out: getThreeHourWeatherProps = {
    pop: {
      description: "강수확률",
      data: [
        {
          date: "",
          time: "",
          value: "",
        },
      ],
    },
    pty: {
      description: "강수형태",
      data: [
        {
          date: "",
          time: "",
          value: "",
        },
      ],
    },
    sky: {
      description: "하늘상태",
      data: [
        {
          date: "",
          time: "",
          value: "",
        },
      ],
    },
    t3h: {
      description: "기온",
      data: [
        {
          date: "",
          time: "",
          value: "",
        },
      ],
    },
    vec: {
      description: "풍향",
      data: [
        {
          date: "",
          time: "",
          value: "",
        },
      ],
    },
    wsd: {
      description: "풍속",
      data: [
        {
          date: "",
          time: "",
          value: "",
        },
      ],
    },
  };

  res.map((item: resultDailyTemperatureProps) => {
    switch (item.category) {
      case "POP":
        {
          out.pop.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "PTY":
        {
          out.pty.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "SKY":
        {
          out.sky.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "T3H":
        {
          out.t3h.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "VEC":
        {
          out.vec.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      case "WSD":
        {
          out.wsd.data.push({
            date: item.fcstDate,
            time: item.fcstTime,
            value: item.fcstValue,
          });
        }
        return;
      default:
        return;
    }
  });

  console.log(out);

  return out;
};
