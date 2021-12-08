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

var _geolocation = require("./src/geolocation");

Object.keys(_geolocation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _geolocation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _geolocation[key];
    }
  });
});

var _openWeather = require("./src/openWeather");

Object.keys(_openWeather).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _openWeather[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _openWeather[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3JjL2tvcmVhV2VhdGhlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2dlb2xvY2F0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvb3BlbldlYXRoZXJcIjtcbiJdfQ==