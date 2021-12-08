"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openWeather = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _common = require("../../../../common");

var _currentData = require("./currentData");

var _hourlyData = require("./hourlyData");

var _weeklyData = require("./weeklyData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var openWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var nx = 37.582;
    var ny = 126.984;
    var data = yield _axios.default.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(nx, "&lon=").concat(ny, "&exclude=minutely&appid=").concat(_common.OPEN_WEATHER_MAP_API_KEY, "&units=metric")).then(function (res) {
      var current = (0, _currentData.currentData)(res.data.current, res.data.daily[0]);
      var daily = (0, _weeklyData.weeklyData)(res.data.daily);
      var hourly = (0, _hourlyData.hourlyData)(res.data.hourly);
      console.log(hourly);
      console.log(daily);
      console.log(current);
      return {
        current: current,
        daily: daily,
        hourly: hourly
      };
    });
    return data;
  });

  return function openWeather() {
    return _ref.apply(this, arguments);
  };
}();

exports.openWeather = openWeather;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL29wZW5XZWF0aGVyL3NyYy9vcGVuLldlYXRoZXIudG90YWwuYXBpLnRzIl0sIm5hbWVzIjpbIm9wZW5XZWF0aGVyIiwibngiLCJueSIsImRhdGEiLCJheGlvcyIsImdldCIsIk9QRU5fV0VBVEhFUl9NQVBfQVBJX0tFWSIsInRoZW4iLCJyZXMiLCJjdXJyZW50IiwiZGFpbHkiLCJob3VybHkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsV0FBVztBQUFBLCtCQUFHLGFBQVk7QUFDckMsUUFBTUMsRUFBRSxHQUFHLE1BQVg7QUFDQSxRQUFNQyxFQUFFLEdBQUcsT0FBWDtBQUNBLFFBQU1DLElBQUksU0FBU0MsZUFDaEJDLEdBRGdCLCtEQUV3Q0osRUFGeEMsa0JBRWtEQyxFQUZsRCxxQ0FFK0VJLGdDQUYvRSxvQkFJaEJDLElBSmdCLENBSVgsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsVUFBTUMsT0FBTyxHQUFHLDhCQUFZRCxHQUFHLENBQUNMLElBQUosQ0FBU00sT0FBckIsRUFBOEJELEdBQUcsQ0FBQ0wsSUFBSixDQUFTTyxLQUFULENBQWUsQ0FBZixDQUE5QixDQUFoQjtBQUNBLFVBQU1BLEtBQUssR0FBRyw0QkFBV0YsR0FBRyxDQUFDTCxJQUFKLENBQVNPLEtBQXBCLENBQWQ7QUFDQSxVQUFNQyxNQUFNLEdBQUcsNEJBQVdILEdBQUcsQ0FBQ0wsSUFBSixDQUFTUSxNQUFwQixDQUFmO0FBRUFDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0EsYUFBTztBQUNMQSxRQUFBQSxPQUFPLEVBQUVBLE9BREo7QUFFTEMsUUFBQUEsS0FBSyxFQUFFQSxLQUZGO0FBR0xDLFFBQUFBLE1BQU0sRUFBRUE7QUFISCxPQUFQO0FBS0QsS0FqQmdCLENBQW5CO0FBa0JBLFdBQU9SLElBQVA7QUFDRCxHQXRCdUI7O0FBQUEsa0JBQVhILFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBPUEVOX1dFQVRIRVJfTUFQX0FQSV9LRVkgfSBmcm9tIFwifi9jb21tb25cIjtcbmltcG9ydCB7IGN1cnJlbnREYXRhIH0gZnJvbSBcIi4vY3VycmVudERhdGFcIjtcbmltcG9ydCB7IGhvdXJseURhdGEgfSBmcm9tIFwiLi9ob3VybHlEYXRhXCI7XG5pbXBvcnQgeyB3ZWVrbHlEYXRhIH0gZnJvbSBcIi4vd2Vla2x5RGF0YVwiO1xuXG5leHBvcnQgY29uc3Qgb3BlbldlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG54ID0gMzcuNTgyO1xuICBjb25zdCBueSA9IDEyNi45ODQ7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xuICAgIC5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bnh9Jmxvbj0ke255fSZleGNsdWRlPW1pbnV0ZWx5JmFwcGlkPSR7T1BFTl9XRUFUSEVSX01BUF9BUElfS0VZfSZ1bml0cz1tZXRyaWNgXG4gICAgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50RGF0YShyZXMuZGF0YS5jdXJyZW50LCByZXMuZGF0YS5kYWlseVswXSk7XG4gICAgICBjb25zdCBkYWlseSA9IHdlZWtseURhdGEocmVzLmRhdGEuZGFpbHkpO1xuICAgICAgY29uc3QgaG91cmx5ID0gaG91cmx5RGF0YShyZXMuZGF0YS5ob3VybHkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhob3VybHkpO1xuICAgICAgY29uc29sZS5sb2coZGFpbHkpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICBkYWlseTogZGFpbHksXG4gICAgICAgIGhvdXJseTogaG91cmx5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIl19