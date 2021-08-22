"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runServer = void 0;

var _index = require("../../index");

var _serverWake = require("../../cron/src/serverWake");

var _service = require("../../service");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var runServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var PORT = 80;

    _index.app.listen(PORT, function () {
      console.log("server start!!");
      console.log(PORT);
    });

    (0, _service.weatherKorea)();
    (0, _service.openWeatherMapCurrent)();
    (0, _service.geolocation)();
    (0, _serverWake.serverWake)();
  });

  return function runServer() {
    return _ref.apply(this, arguments);
  };
}();

exports.runServer = runServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6WyJydW5TZXJ2ZXIiLCJQT1JUIiwiYXBwIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxTQUFTO0FBQUEsK0JBQUcsYUFBMkI7QUFDbEQsUUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUFDLGVBQUlDLE1BQUosQ0FBV0YsSUFBWCxFQUFpQixZQUFNO0FBQ3JCRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNELEtBSEQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVpxQjs7QUFBQSxrQkFBVEQsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5pbXBvcnQgeyBzZXJ2ZXJXYWtlIH0gZnJvbSBcIn4vY3Jvbi9zcmMvc2VydmVyV2FrZVwiO1xuaW1wb3J0IHsgZ2VvbG9jYXRpb24sIG9wZW5XZWF0aGVyTWFwQ3VycmVudCwgd2VhdGhlcktvcmVhIH0gZnJvbSBcIn4vc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgcnVuU2VydmVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBQT1JUID0gODA7XG5cbiAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZXJ2ZXIgc3RhcnQhIVwiKTtcbiAgICBjb25zb2xlLmxvZyhQT1JUKTtcbiAgfSk7XG5cbiAgd2VhdGhlcktvcmVhKCk7XG4gIG9wZW5XZWF0aGVyTWFwQ3VycmVudCgpO1xuICBnZW9sb2NhdGlvbigpO1xuICBzZXJ2ZXJXYWtlKCk7XG59O1xuIl19