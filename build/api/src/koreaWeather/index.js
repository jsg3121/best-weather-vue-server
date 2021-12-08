"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currentWeather = require("./src/currentWeather");

Object.keys(_currentWeather).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _currentWeather[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _currentWeather[key];
    }
  });
});

var _weeklyWeather = require("./src/weeklyWeather");

Object.keys(_weeklyWeather).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _weeklyWeather[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _weeklyWeather[key];
    }
  });
});

var _threeHours = require("./src/threeHours");

Object.keys(_threeHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _threeHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _threeHours[key];
    }
  });
});

var _atmosService = require("./src/atmosService");

Object.keys(_atmosService).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _atmosService[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _atmosService[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3NyYy9jdXJyZW50V2VhdGhlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3dlZWtseVdlYXRoZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90aHJlZUhvdXJzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvYXRtb3NTZXJ2aWNlXCI7XG4iXX0=