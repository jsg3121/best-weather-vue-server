import axios from "axios";

export const serverAwake = () => {
  setInterval(() => {
    axios.get("https://best-weather-vue.herokuapp.com/").then((_) => {
      return;
    });
  }, 1000 * 60 * 29);
};
