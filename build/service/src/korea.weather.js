"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weatherKorea = void 0;

var _api = require("../../api");

var _server = require("../../server");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var weatherKorea = function weatherKorea() {
  _server.app.get("/api/daily", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (req, res) {
      var data = yield (0, _api.getDailyWeather)(req.query);
      res.send(data);
      res.end();
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  _server.app.get("/api/weekly", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      var data = yield (0, _api.getMaxMinTemperature)(req.query);
      res.send(data);
      res.end();
    });

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  _server.app.get("/api/threeHours", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (req, res) {
      var data = yield (0, _api.threeHoursWeather)(req.query);
      res.send(data);
      res.end();
    });

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

exports.weatherKorea = weatherKorea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9rb3JlYS53ZWF0aGVyLnRzIl0sIm5hbWVzIjpbIndlYXRoZXJLb3JlYSIsImFwcCIsImdldCIsInJlcSIsInJlcyIsImRhdGEiLCJxdWVyeSIsInNlbmQiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNoQ0MsY0FBSUMsR0FBSixDQUFRLFlBQVI7QUFBQSxpQ0FBc0IsV0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQ3hDLFVBQU1DLElBQUksU0FBUywwQkFBZ0JGLEdBQUcsQ0FBQ0csS0FBcEIsQ0FBbkI7QUFDQUYsTUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVNGLElBQVQ7QUFDQUQsTUFBQUEsR0FBRyxDQUFDSSxHQUFKO0FBQ0QsS0FKRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQVAsY0FBSUMsR0FBSixDQUFRLGFBQVI7QUFBQSxrQ0FBdUIsV0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQ3pDLFVBQU1DLElBQUksU0FBUywrQkFBcUJGLEdBQUcsQ0FBQ0csS0FBekIsQ0FBbkI7QUFDQUYsTUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVNGLElBQVQ7QUFDQUQsTUFBQUEsR0FBRyxDQUFDSSxHQUFKO0FBQ0QsS0FKRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQVAsY0FBSUMsR0FBSixDQUFRLGlCQUFSO0FBQUEsa0NBQTJCLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUM3QyxVQUFNQyxJQUFJLFNBQVMsNEJBQWtCRixHQUFHLENBQUNHLEtBQXRCLENBQW5CO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTRixJQUFUO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0ksR0FBSjtBQUNELEtBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLRCxDQWpCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERhaWx5V2VhdGhlciwgZ2V0TWF4TWluVGVtcGVyYXR1cmUsIHRocmVlSG91cnNXZWF0aGVyIH0gZnJvbSBcIn4vYXBpXCI7XHJcbmltcG9ydCB7IGFwcCB9IGZyb20gXCJ+L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlYXRoZXJLb3JlYSA9ICgpID0+IHtcclxuICBhcHAuZ2V0KFwiL2FwaS9kYWlseVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYWlseVdlYXRoZXIocmVxLnF1ZXJ5KTtcclxuICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH0pO1xyXG5cclxuICBhcHAuZ2V0KFwiL2FwaS93ZWVrbHlcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWF4TWluVGVtcGVyYXR1cmUocmVxLnF1ZXJ5KTtcclxuICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH0pO1xyXG4gIGFwcC5nZXQoXCIvYXBpL3RocmVlSG91cnNcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhyZWVIb3Vyc1dlYXRoZXIocmVxLnF1ZXJ5KTtcclxuICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH0pO1xyXG59O1xyXG4iXX0=