"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koreaWeatherWeekly = require("./src/korea.weather.weekly.api");

Object.keys(_koreaWeatherWeekly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _koreaWeatherWeekly[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _koreaWeatherWeekly[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvd2Vla2x5V2VhdGhlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3NyYy9rb3JlYS53ZWF0aGVyLndlZWtseS5hcGlcIjtcbiJdfQ==