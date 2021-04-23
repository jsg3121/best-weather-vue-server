const date = new Date();

export const defaultDate = () => {
  return `${date.getFullYear()}${date.getMonth() > 10 ? date.getMonth() : "0" + (date.getMonth() + 1)}${date.getDate()}`;
};

export const defaultTime = () => {
  return date.getHours() - 1 > 10 ? date.getHours() - 1 : "0" + (date.getHours() - 3);
};

export const changDateFormMiniDust = () => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const dd = date.getDate() - 3;
  const output = `${yyyy}-${mm}-${dd}`;
  return output;
};

export const changDateFormThreeHoursTime = () => {
  if (date.getHours() % 3 === 2) {
    if (date.getMinutes() > 10) {
      const hour = 3 * Math.floor(date.getHours() / 3) + 2;
      return hour + "00";
    } else {
      const hour = 3 * Math.floor(date.getHours() / 3) - 1;
      return hour + "00";
    }
  }
  const hour = 3 * Math.floor(date.getHours() / 3) - 1;
  return hour + "00";
};
