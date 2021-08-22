"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _current = require("./src/current.weather");

Object.keys(_current).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _current[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _current[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9vcGVuV2VhdGhlck1hcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3NyYy9jdXJyZW50LndlYXRoZXJcIjtcbiJdfQ==