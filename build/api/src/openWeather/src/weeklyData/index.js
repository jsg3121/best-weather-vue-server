"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weeklyData = require("./src/weeklyData");

Object.keys(_weeklyData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _weeklyData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _weeklyData[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL29wZW5XZWF0aGVyL3NyYy93ZWVrbHlEYXRhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3JjL3dlZWtseURhdGFcIjtcbiJdfQ==