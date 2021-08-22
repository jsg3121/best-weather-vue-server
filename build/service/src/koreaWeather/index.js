"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _korea = require("./src/korea.weather");

Object.keys(_korea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _korea[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _korea[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9rb3JlYVdlYXRoZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9zcmMva29yZWEud2VhdGhlclwiO1xuIl19