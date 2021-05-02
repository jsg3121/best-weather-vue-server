const curr = new Date();

const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
const KR_TIME = 9 * 60 * 60 * 1000;
const DATE = new Date(utc + KR_TIME);

export const defaultDate = (): string => {
  return `${DATE.getFullYear()}${DATE.getMonth() > 10 ? DATE.getMonth() : "0" + (DATE.getMonth() + 1)}${DATE.getDate() > 10 ? DATE.getDate() : "0" + DATE.getDate()}`;
};

export const defaultTime = (): string => {
  return DATE.getHours() - 1 > 10 ? String(DATE.getHours() - 1) : "0" + (DATE.getHours() - 3);
};

export const changDateFormMiniDust = (): string => {
  const yyyy = DATE.getFullYear();
  const mm = DATE.getMonth() + 1 > 10 ? DATE.getMonth() + 1 : "0" + (DATE.getMonth() + 1);
  const dd = DATE.getDate() - 3 > 10 ? DATE.getDate() - 3 : "0" + (DATE.getDate() - 3);
  const output = `${yyyy}-${mm}-${dd}`;
  return output;
};

export const changDateFormThreeHoursTime = (): string => {
  if (DATE.getHours() % 3 === 2) {
    if (DATE.getMinutes() > 10) {
      const hour = 3 * Math.floor(DATE.getHours() / 3) + 2;
      if (hour < 10) {
        return "0" + hour + "00";
      } else {
        return hour + "00";
      }
    } else {
      const hour = 3 * Math.floor(DATE.getHours() / 3) - 1;
      if (hour < 10) {
        return "0" + hour + "00";
      } else {
        return hour + "00";
      }
    }
  }
  const hour = 3 * Math.floor(DATE.getHours() / 3) - 1;
  if (hour < 10) {
    return "0" + hour + "00";
  } else {
    return hour + "00";
  }
};
