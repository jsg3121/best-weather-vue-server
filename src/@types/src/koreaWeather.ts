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

export type returnDatilyDataProps = {
  nowTemperatures: resultDailyDataProps["obsrValue"];
  nowHumidity: resultDailyDataProps["obsrValue"];
  nowPrecipitation: resultDailyDataProps["obsrValue"];
};

export type getMaxMinTemperatureProps = {
  maxTemperature: resultDailyTemperatureProps["fcstValue"];
  minTemperature: resultDailyTemperatureProps["fcstValue"];
};

type threeHourWeatherOption = {
  description: string;
  data:
    | [
        {
          date: string;
          time: string;
          value: string;
        }
      ]
    | [{}];
};

export type getThreeHourWeatherProps = {
  pop: threeHourWeatherOption;
  pty: threeHourWeatherOption;
  sky: threeHourWeatherOption;
  t3h: threeHourWeatherOption;
  vec: threeHourWeatherOption;
  wsd: threeHourWeatherOption;
};

export type getLivingInformationProps = {
  sidoName: string;
  pm10Value: string;
  o3Value: string;
};

export type dailyWeatherRequestProps = (data: { nx?: number; ny?: number }) => Promise<object>;
