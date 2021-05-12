import http from "axios";

export const serverWake = () => {
  setInterval(() => {
    http.get("https://best-weather-vue.herokuapp.com/");
  }, 1000 * 60 * 29);
};
