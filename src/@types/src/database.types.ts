export type WeatherGeolocationTypes = {
  id: number;
  fullLocation: string;
  location1: string;
  location2: string;
  locationCode: string;
  positionNx: number;
  positionNy: number;
  locationEncoding: string;
};

export type WeatherDailyTypes = {
  id: number;
  updateTime: string;
  location: string;
  precipitationState: string;
  windDriections: string;
  skyStatus: string;
  temperature: number;
  humidity: number;
  precipitation1Hour: number;
  minTemperature: number;
  maxTemperature: number;
};

export type WeatherThreeHoursTypes = {
  id: number;
  updateTime: string;
  location: string;
  precipitationState: string;
  skyStatus: string;
  threeHoursTemperature: string;
  precipitation6Hour: number;
  snowLoad6Hour: number;
};

export type WeatherAtmosTypes = {
  id: number;
  updateTime: string;
  location: string;
  measuringStation: string;
  dust1Hours: number;
  minimumDust1Hours: number;
  ozonRate: number;
  uvRate: number;
};

export type WeatherWeeklyTypes = {
  id: number;
  location: string;
  updateTime: string;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  day7: string;
};
