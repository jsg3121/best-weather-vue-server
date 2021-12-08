"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openWeatherTotal = require("./src/open.Weather.total.api");

Object.keys(_openWeatherTotal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _openWeatherTotal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _openWeatherTotal[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL29wZW5XZWF0aGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3JjL29wZW4uV2VhdGhlci50b3RhbC5hcGlcIjtcbiJdfQ==