import dayjs from "dayjs";
import "dayjs/locale/ko";
const TODAY = dayjs(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

export const defaultDate = (): string => {
  return TODAY.format("YYYYMMDD");
};

export const defaultTime = (): string => {
  return TODAY.subtract(1, "hour").format("HH00");
};

export const changDateFormMiniDust = (): string => {
  const output = TODAY.subtract(3, "day").format("YYYY-MM-DD");
  return output;
};

export const changDateFormThreeHoursTime = (): string => {
  const hours = parseInt(TODAY.format("HH"), 10);
  if (hours % 3 === 2) {
    const res = TODAY.format(3 * Math.floor(hours / 3) + 2 > 10 ? `${3 * Math.floor(hours / 3) + 2}00` : `0${3 * Math.floor(hours / 3) + 2}00`);
    return res.toString();
  } else {
    const res = TODAY.format(3 * Math.floor(hours / 3) - 1 > 10 ? `${3 * Math.floor(hours / 3) - 1}00` : `0${3 * Math.floor(hours / 3) - 1}00`);
    return res.toString();
  }
};

export const checkWeeklyDate = () => {
  const date = TODAY.format("YYYYMMDD");

  const time = parseInt(TODAY.format("HH"), 10);
  return time >= 6 && time <= 17 ? `${date}0600` : `${date}1800`;
};
