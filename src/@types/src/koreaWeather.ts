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

export type GeolocationProps = (data: { nx?: number; ny?: number }) => Promise<object>;
