"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weatherKorea = void 0;

var _api = require("../../../../api");

var _2 = require("../../../..");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var weatherKorea = function weatherKorea() {
  _2.app.get("/api/ko/nowWeather", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (req, res) {
      console.log("--------------------------------------------------");
      console.log("daily");
      console.log("--------------------------------------------------");
      var data = yield (0, _api.getDailyWeather)(req.query);
      res.send(data);
      res.end();
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  _2.app.get("/api/ko/weekly", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      console.log("--------------------------------------------------");
      console.log("weekly");
      console.log("--------------------------------------------------");
      var data = yield (0, _api.getMaxMinTemperature)(req.query);
      res.send(data);
      res.end();
    });

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  _2.app.get("/api/ko/threeHours", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (req, res) {
      console.log("--------------------------------------------------");
      console.log("threeHours");
      console.log("--------------------------------------------------");
      var data = yield (0, _api.threeHoursWeather)(req.query);
      res.send(data);
      res.end();
    });

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  _2.app.get("/api/ko/livingInformation", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (_, res) {
      console.log("--------------------------------------------------");
      console.log("livingInformation");
      console.log("--------------------------------------------------");
      var data = yield (0, _api.livingInfomation)();
      res.send(data);
      res.end();
    });

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  _2.app.get("/api/ko/sunRiseFall", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (_, res) {
      console.log("--------------------------------------------------");
      console.log("sunRiseFall");
      console.log("--------------------------------------------------");
      var data = yield (0, _api.sunRiseFall)();
      res.send(data);
      res.end();
    });

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

exports.weatherKorea = weatherKorea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9rb3JlYVdlYXRoZXIvc3JjL2tvcmVhLndlYXRoZXIudHMiXSwibmFtZXMiOlsid2VhdGhlcktvcmVhIiwiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJxdWVyeSIsInNlbmQiLCJlbmQiLCJfIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaENDLFNBQUlDLEdBQUosQ0FBUSxvQkFBUjtBQUFBLGlDQUE4QixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDaERDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7QUFDQSxVQUFNQyxJQUFJLFNBQVMsMEJBQWdCSixHQUFHLENBQUNLLEtBQXBCLENBQW5CO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRixJQUFUO0FBQ0FILE1BQUFBLEdBQUcsQ0FBQ00sR0FBSjtBQUNELEtBUEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0FULFNBQUlDLEdBQUosQ0FBUSxnQkFBUjtBQUFBLGtDQUEwQixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDNUNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7QUFDQSxVQUFNQyxJQUFJLFNBQVMsK0JBQXFCSixHQUFHLENBQUNLLEtBQXpCLENBQW5CO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRixJQUFUO0FBQ0FILE1BQUFBLEdBQUcsQ0FBQ00sR0FBSjtBQUNELEtBUEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0FULFNBQUlDLEdBQUosQ0FBUSxvQkFBUjtBQUFBLGtDQUE4QixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDaERDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7QUFDQSxVQUFNQyxJQUFJLFNBQVMsNEJBQWtCSixHQUFHLENBQUNLLEtBQXRCLENBQW5CO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRixJQUFUO0FBQ0FILE1BQUFBLEdBQUcsQ0FBQ00sR0FBSjtBQUNELEtBUEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0FULFNBQUlDLEdBQUosQ0FBUSwyQkFBUjtBQUFBLGtDQUFxQyxXQUFPUyxDQUFQLEVBQVVQLEdBQVYsRUFBa0I7QUFDckRDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0EsVUFBTUMsSUFBSSxTQUFTLDRCQUFuQjtBQUNBSCxNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0YsSUFBVDtBQUNBSCxNQUFBQSxHQUFHLENBQUNNLEdBQUo7QUFDRCxLQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBVCxTQUFJQyxHQUFKLENBQVEscUJBQVI7QUFBQSxrQ0FBK0IsV0FBT1MsQ0FBUCxFQUFVUCxHQUFWLEVBQWtCO0FBQy9DQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0EsVUFBTUMsSUFBSSxTQUFTLHVCQUFuQjtBQUNBSCxNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0YsSUFBVDtBQUNBSCxNQUFBQSxHQUFHLENBQUNNLEdBQUo7QUFDRCxLQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUQsQ0E3Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYWlseVdlYXRoZXIsIGdldE1heE1pblRlbXBlcmF0dXJlLCBsaXZpbmdJbmZvbWF0aW9uLCBzdW5SaXNlRmFsbCwgdGhyZWVIb3Vyc1dlYXRoZXIgfSBmcm9tIFwifi9hcGlcIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCJ+L2luZGV4XCI7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyS29yZWEgPSAoKSA9PiB7XG4gIGFwcC5nZXQoXCIvYXBpL2tvL25vd1dlYXRoZXJcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhcImRhaWx5XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhaWx5V2VhdGhlcihyZXEucXVlcnkpO1xuICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG5cbiAgYXBwLmdldChcIi9hcGkva28vd2Vla2x5XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coXCJ3ZWVrbHlcIik7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWF4TWluVGVtcGVyYXR1cmUocmVxLnF1ZXJ5KTtcbiAgICByZXMuc2VuZChkYXRhKTtcbiAgICByZXMuZW5kKCk7XG4gIH0pO1xuXG4gIGFwcC5nZXQoXCIvYXBpL2tvL3RocmVlSG91cnNcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhcInRocmVlSG91cnNcIik7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhyZWVIb3Vyc1dlYXRoZXIocmVxLnF1ZXJ5KTtcbiAgICByZXMuc2VuZChkYXRhKTtcbiAgICByZXMuZW5kKCk7XG4gIH0pO1xuXG4gIGFwcC5nZXQoXCIvYXBpL2tvL2xpdmluZ0luZm9ybWF0aW9uXCIsIGFzeW5jIChfLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgIGNvbnNvbGUubG9nKFwibGl2aW5nSW5mb3JtYXRpb25cIik7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbGl2aW5nSW5mb21hdGlvbigpO1xuICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG5cbiAgYXBwLmdldChcIi9hcGkva28vc3VuUmlzZUZhbGxcIiwgYXN5bmMgKF8sIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coXCJzdW5SaXNlRmFsbFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdW5SaXNlRmFsbCgpO1xuICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG59O1xuIl19