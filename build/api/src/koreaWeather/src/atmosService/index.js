"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koreaWeatherDust = require("./src/korea.weather.dust.api");

Object.keys(_koreaWeatherDust).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _koreaWeatherDust[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _koreaWeatherDust[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvYXRtb3NTZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3JjL2tvcmVhLndlYXRoZXIuZHVzdC5hcGlcIjtcbiJdfQ==