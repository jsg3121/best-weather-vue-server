"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOpenWeatherService = void 0;

var _api = require("../../../../api");

var _2 = require("../../../..");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getOpenWeatherService = function getOpenWeatherService() {
  _2.app.get("/service/openweather", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (_, res) {
      var data = yield (0, _api.openWeather)().then(function (res) {
        return res;
      });
      res.send(data);
      res.end();
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  return;
};

exports.getOpenWeatherService = getOpenWeatherService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9vcGVuV2VhdGhlci9zcmMvZ2V0T3BlbldlYXRoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6WyJnZXRPcGVuV2VhdGhlclNlcnZpY2UiLCJhcHAiLCJnZXQiLCJfIiwicmVzIiwiZGF0YSIsInRoZW4iLCJzZW5kIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUN6Q0MsU0FBSUMsR0FBSixDQUFRLHNCQUFSO0FBQUEsaUNBQWdDLFdBQU9DLENBQVAsRUFBVUMsR0FBVixFQUFrQjtBQUNoRCxVQUFNQyxJQUFJLFNBQVMsd0JBQWNDLElBQWQsQ0FBbUIsVUFBQ0YsR0FBRCxFQUFTO0FBQzdDLGVBQU9BLEdBQVA7QUFDRCxPQUZrQixDQUFuQjtBQUlBQSxNQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBU0YsSUFBVDtBQUNBRCxNQUFBQSxHQUFHLENBQUNJLEdBQUo7QUFDRCxLQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBO0FBQ0QsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wZW5XZWF0aGVyIH0gZnJvbSBcIn4vYXBpXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwifi9pbmRleFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbldlYXRoZXJTZXJ2aWNlID0gKCkgPT4ge1xuICBhcHAuZ2V0KFwiL3NlcnZpY2Uvb3BlbndlYXRoZXJcIiwgYXN5bmMgKF8sIHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBvcGVuV2VhdGhlcigpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcblxuICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuO1xufTtcbiJdfQ==