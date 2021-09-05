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
  pm10Grade1h: string;
  pm25Grade1h: string;
  o3Grade: string;
  dataTime: string;
  stationName: string;
};

export type getSunSetRiseProps = {
  sunset: string;
  sunrise: string;
  moonset: string;
  moonrise: string;
};

export interface ParamsInterface {
  nx: number;
  ny: number;
}

export interface ResponseDailyWeather {
  reh: resultDailyDataProps["obsrValue"];
  rn1: resultDailyDataProps["obsrValue"];
  t1h: resultDailyDataProps["obsrValue"];
  vec: resultDailyDataProps["obsrValue"];
  wsd: resultDailyDataProps["obsrValue"];
  sky: string;
  tmn: resultDailyTemperatureProps["fcstValue"];
  tmx: resultDailyTemperatureProps["fcstValue"];
}

export type ResultWeeklyTemperature = {
  taMin3: string;
  taMax3: string;
  taMin4: string;
  taMax4: string;
  taMin5: string;
  taMax5: string;
  taMin6: string;
  taMax6: string;
  taMin7: string;
  taMax7: string;
};

export type GeolocationProps<T, K> = (data: T) => Promise<K>;
