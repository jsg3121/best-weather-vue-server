"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOpenWeather = require("./src/getOpenWeather.service");

Object.keys(_getOpenWeather).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getOpenWeather[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getOpenWeather[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9vcGVuV2VhdGhlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3NyYy9nZXRPcGVuV2VhdGhlci5zZXJ2aWNlXCI7XG4iXX0=