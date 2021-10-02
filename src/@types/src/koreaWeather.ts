export type resultDailyDataProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
  obsrValue: string;
};

export type minMaxSkyProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
};

type DayProps = {
  minTemperature: string;
  minTemperatureTime: string;
  maxTemperature: string;
  maxTemperatureTime: string;
  skyValue: string;
  ptyValue: string;
};

export type WeeklyProps = {
  day1: DayProps;
  day2: DayProps;
  day3: DayProps;
  day4: DayProps;
  day5: DayProps;
  day6: DayProps;
  day7: DayProps;
};
