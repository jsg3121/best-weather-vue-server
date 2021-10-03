export type ResultDailyDataProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
  obsrValue: string;
};

export type MinMaxSkyProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
};

export type ResultWeeklyDataProps = {
  minTemperature: number;
  maxTemperature: number;
  skyAm: string;
  skyPm: string;
};
