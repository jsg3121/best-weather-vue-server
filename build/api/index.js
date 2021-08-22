"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koreaWeather = require("./src/koreaWeather");

Object.keys(_koreaWeather).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _koreaWeather[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _koreaWeather[key];
    }
  });
});

var _openWeatherMap = require("./src/openWeatherMap");

Object.keys(_openWeatherMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _openWeatherMap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _openWeatherMap[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9zcmMva29yZWFXZWF0aGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvb3BlbldlYXRoZXJNYXBcIjtcbiJdfQ==