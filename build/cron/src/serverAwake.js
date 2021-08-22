"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverAwake = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverAwake = function serverAwake() {
  setInterval(function () {
    _axios.default.get("https://best-weather-vue.herokuapp.com/").then(function (_) {
      return;
    });
  }, 1000 * 60 * 29);
};

exports.serverAwake = serverAwake;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcm9uL3NyYy9zZXJ2ZXJBd2FrZS50cyJdLCJuYW1lcyI6WyJzZXJ2ZXJBd2FrZSIsInNldEludGVydmFsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBWTtBQUNyQ0MsRUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDaEJDLG1CQUFNQyxHQUFOLENBQVUseUNBQVYsRUFBcURDLElBQXJELENBQTBELFVBQUNDLENBQUQsRUFBTztBQUMvRDtBQUNELEtBRkQ7QUFHRCxHQUpVLEVBSVIsT0FBTyxFQUFQLEdBQVksRUFKSixDQUFYO0FBS0QsQ0FOTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJBd2FrZSA9ICgpOiB2b2lkID0+IHtcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwczovL2Jlc3Qtd2VhdGhlci12dWUuaGVyb2t1YXBwLmNvbS9cIikudGhlbigoXykgPT4ge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICB9LCAxMDAwICogNjAgKiAyOSk7XHJcbn07XHJcbiJdfQ==