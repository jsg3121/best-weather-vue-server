export type resultDailyDataProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
  obsrValue: string;
};

export type resultDailyTemperatureProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
};

// export type returnDatilyDataProps = {
//   nowTemperatures: resultDailyDataProps["obsrValue"];
//   nowHumidity: resultDailyDataProps["obsrValue"];
//   nowPrecipitation: resultDailyDataProps["obsrValue"];
// };

export type getMaxMinTemperatureProps = {
  maxTemperature: resultDailyTemperatureProps["fcstValue"];
  minTemperature: resultDailyTemperatureProps["fcstValue"];
};

export type threeHourWeatherOption = {
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
};

export type threeHourWeatherOutput = {
  date: threeHourWeatherOption["fcstDate"];
  time: threeHourWeatherOption["fcstTime"];
  value: threeHourWeatherOption["fcstValue"];
};

export type getLivingInformationProps = {
  sidoName: string;
  pm10Value: string;
  pm25Value: string;
  o3Value: string;
};

export type getSunSetRiseProps = {
  sunset: string;
  sunrise: string;
  moonset: string;
  moonrise: string;
};

export type GeolocationProps = (data: { nx?: number; ny?: number }) => Promise<object>;
