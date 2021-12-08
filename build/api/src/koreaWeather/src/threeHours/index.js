"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koreaWeatherThreeHours = require("./src/korea.weather.threeHours.api");

Object.keys(_koreaWeatherThreeHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _koreaWeatherThreeHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _koreaWeatherThreeHours[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvdGhyZWVIb3Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3NyYy9rb3JlYS53ZWF0aGVyLnRocmVlSG91cnMuYXBpXCI7XG4iXX0=