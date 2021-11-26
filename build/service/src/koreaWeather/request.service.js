"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestApi = void 0;

var _api = require("../../../api");

var _2 = require("../../..");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var requestApi = function requestApi() {
  /**
   * ! 주간 기상정보 client 요청 및 전송 api
   */
  _2.app.get("/service/weekly", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (req, res) {
      var params = req.query;
      console.time("total");
      var data = yield (0, _api.weeklyWeather)(params).then(function (res) {
        return res;
      });
      res.send(data);
      res.end();
      console.timeEnd("total");
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  /**
   * ! 현재 기상 정보 client 요청 및 전송 api
   */


  _2.app.get("/service/current", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      var params = req.query;
      var data = yield (0, _api.currentWeather)(params).then(function (res) {
        return res;
      });
      res.send(data);
      res.end();
    });

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  /**
   * ! 대기환경 정보 제공 api 요청
   * ! dust : 미세먼지, 초미세먼지
   * ! uv : 자외선
   */


  _2.app.get("/service/atmos", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (_, res) {
      console.time("dust");
      var data = yield (0, _api.atmosStatus)().then(function (res) {
        return res;
      });
      res.send(data);
      res.end();
      console.timeEnd("dust");
    });

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

exports.requestApi = requestApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9rb3JlYVdlYXRoZXIvcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RBcGkiLCJhcHAiLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJxdWVyeSIsImNvbnNvbGUiLCJ0aW1lIiwiZGF0YSIsInRoZW4iLCJzZW5kIiwiZW5kIiwidGltZUVuZCIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFPQTs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QjtBQUNGO0FBQ0E7QUFDRUMsU0FBSUMsR0FBSixDQUFRLGlCQUFSO0FBQUEsaUNBQTJCLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUM3QyxVQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csS0FBbkI7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsT0FBYjtBQUNBLFVBQU1DLElBQUksU0FBUyx3QkFBY0osTUFBZCxFQUFzQkssSUFBdEIsQ0FBMkIsVUFBQ04sR0FBRCxFQUFTO0FBQ3JELGVBQU9BLEdBQVA7QUFDRCxPQUZrQixDQUFuQjtBQUdBQSxNQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBU0YsSUFBVDtBQUNBTCxNQUFBQSxHQUFHLENBQUNRLEdBQUo7QUFDQUwsTUFBQUEsT0FBTyxDQUFDTSxPQUFSLENBQWdCLE9BQWhCO0FBQ0QsS0FURDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0Y7QUFDQTs7O0FBQ0VaLFNBQUlDLEdBQUosQ0FBUSxrQkFBUjtBQUFBLGtDQUE0QixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDOUMsVUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLEtBQW5CO0FBQ0EsVUFBTUcsSUFBSSxTQUFTLHlCQUFlSixNQUFmLEVBQXVCSyxJQUF2QixDQUE0QixVQUFDTixHQUFELEVBQVM7QUFDdEQsZUFBT0EsR0FBUDtBQUNELE9BRmtCLENBQW5CO0FBR0FBLE1BQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTRixJQUFUO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ1EsR0FBSjtBQUNELEtBUEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRVgsU0FBSUMsR0FBSixDQUFRLGdCQUFSO0FBQUEsa0NBQTBCLFdBQU9ZLENBQVAsRUFBVVYsR0FBVixFQUFrQjtBQUMxQ0csTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsTUFBYjtBQUNBLFVBQU1DLElBQUksU0FBUyx3QkFBY0MsSUFBZCxDQUFtQixVQUFDTixHQUFELEVBQVM7QUFDN0MsZUFBT0EsR0FBUDtBQUNELE9BRmtCLENBQW5CO0FBR0FBLE1BQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTRixJQUFUO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ1EsR0FBSjtBQUNBTCxNQUFBQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsTUFBaEI7QUFDRCxLQVJEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0QsQ0F6Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjdXJyZW50V2VhdGhlcixcbiAgYXRtb3NTdGF0dXMsXG4gIHdlZWtseVdlYXRoZXIsXG4gIFdlZWtseURhdGFQcm9wcyxcbiAgQ3VycmVudERhdGFQcm9wcyxcbn0gZnJvbSBcIn4vYXBpXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwifi9pbmRleFwiO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdEFwaSA9ICgpID0+IHtcbiAgLyoqXG4gICAqICEg7KO86rCEIOq4sOyDgeygleuztCBjbGllbnQg7JqU7LKtIOuwjyDsoITshqEgYXBpXG4gICAqL1xuICBhcHAuZ2V0KFwiL3NlcnZpY2Uvd2Vla2x5XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHJlcS5xdWVyeSBhcyBXZWVrbHlEYXRhUHJvcHM7XG4gICAgY29uc29sZS50aW1lKFwidG90YWxcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlZWtseVdlYXRoZXIocGFyYW1zKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgcmVzLmVuZCgpO1xuICAgIGNvbnNvbGUudGltZUVuZChcInRvdGFsXCIpO1xuICB9KTtcblxuICAvKipcbiAgICogISDtmITsnqwg6riw7IOBIOygleuztCBjbGllbnQg7JqU7LKtIOuwjyDsoITshqEgYXBpXG4gICAqL1xuICBhcHAuZ2V0KFwiL3NlcnZpY2UvY3VycmVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSByZXEucXVlcnkgYXMgQ3VycmVudERhdGFQcm9wcztcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY3VycmVudFdlYXRoZXIocGFyYW1zKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgcmVzLmVuZCgpO1xuICB9KTtcblxuICAvKipcbiAgICogISDrjIDquLDtmZjqsr0g7KCV67O0IOygnOqztSBhcGkg7JqU7LKtXG4gICAqICEgZHVzdCA6IOuvuOyEuOuovOyngCwg7LSI66+47IS466i87KeAXG4gICAqICEgdXYgOiDsnpDsmbjshKBcbiAgICovXG4gIGFwcC5nZXQoXCIvc2VydmljZS9hdG1vc1wiLCBhc3luYyAoXywgcmVzKSA9PiB7XG4gICAgY29uc29sZS50aW1lKFwiZHVzdFwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXRtb3NTdGF0dXMoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgcmVzLmVuZCgpO1xuICAgIGNvbnNvbGUudGltZUVuZChcImR1c3RcIik7XG4gIH0pO1xufTtcbiJdfQ==