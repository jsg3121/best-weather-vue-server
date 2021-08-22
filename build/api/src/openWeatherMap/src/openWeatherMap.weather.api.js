"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentWeatherOWM = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _global = require("../../../../common/src/global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCurrentWeatherOWM = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var output = yield _axios.default.get("https://api.openweathermap.org/data/2.5/onecall?&lat=".concat(_global.DEFAULT_GEO_LAT, "&lon=").concat(_global.DEFAULT_GEO_LON, "&appid=").concat(_global.OPEN_WEATHER_MAP_API_KEY)).then(function (res) {
      return res.data;
    });
    return output;
  });

  return function getCurrentWeatherOWM() {
    return _ref.apply(this, arguments);
  };
}();

exports.getCurrentWeatherOWM = getCurrentWeatherOWM;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL29wZW5XZWF0aGVyTWFwL3NyYy9vcGVuV2VhdGhlck1hcC53ZWF0aGVyLmFwaS50cyJdLCJuYW1lcyI6WyJnZXRDdXJyZW50V2VhdGhlck9XTSIsIm91dHB1dCIsImh0dHAiLCJnZXQiLCJERUZBVUxUX0dFT19MQVQiLCJERUZBVUxUX0dFT19MT04iLCJPUEVOX1dFQVRIRVJfTUFQX0FQSV9LRVkiLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLG9CQUFvQjtBQUFBLCtCQUFHLGFBQVk7QUFDOUMsUUFBTUMsTUFBTSxTQUFTQyxlQUFLQyxHQUFMLGdFQUFpRUMsdUJBQWpFLGtCQUF3RkMsdUJBQXhGLG9CQUFpSEMsZ0NBQWpILEdBQTZJQyxJQUE3SSxDQUFrSixVQUFDQyxHQUFELEVBQVM7QUFDOUssYUFBT0EsR0FBRyxDQUFDQyxJQUFYO0FBQ0QsS0FGb0IsQ0FBckI7QUFJQSxXQUFPUixNQUFQO0FBQ0QsR0FOZ0M7O0FBQUEsa0JBQXBCRCxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IERFRkFVTFRfR0VPX0xBVCwgREVGQVVMVF9HRU9fTE9OLCBPUEVOX1dFQVRIRVJfTUFQX0FQSV9LRVkgfSBmcm9tIFwifi9jb21tb24vc3JjL2dsb2JhbFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFdlYXRoZXJPV00gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG91dHB1dCA9IGF3YWl0IGh0dHAuZ2V0KGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD8mbGF0PSR7REVGQVVMVF9HRU9fTEFUfSZsb249JHtERUZBVUxUX0dFT19MT059JmFwcGlkPSR7T1BFTl9XRUFUSEVSX01BUF9BUElfS0VZfWApLnRoZW4oKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMuZGF0YTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn07XG4iXX0=