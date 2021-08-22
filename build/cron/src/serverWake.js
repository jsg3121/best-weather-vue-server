"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverWake = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverWake = function serverWake() {
  setInterval(function () {
    _axios.default.get("https://best-weather-vue.herokuapp.com/");
  }, 1000 * 60 * 29);
};

exports.serverWake = serverWake;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcm9uL3NyYy9zZXJ2ZXJXYWtlLnRzIl0sIm5hbWVzIjpbInNlcnZlcldha2UiLCJzZXRJbnRlcnZhbCIsImh0dHAiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDOUJDLEVBQUFBLFdBQVcsQ0FBQyxZQUFNO0FBQ2hCQyxtQkFBS0MsR0FBTCxDQUFTLHlDQUFUO0FBQ0QsR0FGVSxFQUVSLE9BQU8sRUFBUCxHQUFZLEVBRkosQ0FBWDtBQUdELENBSk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IHNlcnZlcldha2UgPSAoKSA9PiB7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBodHRwLmdldChcImh0dHBzOi8vYmVzdC13ZWF0aGVyLXZ1ZS5oZXJva3VhcHAuY29tL1wiKTtcbiAgfSwgMTAwMCAqIDYwICogMjkpO1xufTtcbiJdfQ==