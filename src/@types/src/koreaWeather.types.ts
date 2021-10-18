export type CurrentStatusProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
};

export type ResultDailyDataProps = {
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
  obsrValue: string;
};

export type ResultWeeklyDataProps = {
  minTemperature: number;
  maxTemperature: number;
  skyAm: string;
  skyPm: string;
};

export type ResultDustDataProps = {
  pm25Grade1h: string;
  pm10Value24: string;
  so2Value: string;
  pm10Grade1h: string;
  pm10Value: string;
  o3Grade: string;
  pm25Flag: string;
  khaiGrade: string;
  pm25Value: string;
  no2Flag: string;
  mangName: string;
  stationName: string;
  no2Value: string;
  so2Grade: string;
  coFlag: string;
  khaiValue: string;
  coValue: string;
  pm10Flag: string;
  sidoName: string;
  pm25Value24: string;
  no2Grade: string;
  o3Flag: string;
  pm25Grade: string;
  so2Flag: string;
  coGrade: string;
  dataTime: string;
  pm10Grade: string;
  o3Value: string;
};

export type ResultUvDataProps = {
  code: string;
  areaNo: string;
  date: string;
  today: string;
  tomorrow: string;
  theDayAfterTomorrow: string;
};
