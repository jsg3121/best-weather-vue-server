"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runServer = void 0;

var _common = require("../../common");

var _database = require("../../database");

var _service = require("../../service");

var _index = require("../../index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var serverSetting = {
  initLocationData: (0, _common.env)("INIT_DATABASE")
};

var runServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    if (serverSetting.initLocationData) {
      yield (0, _database.migrationLocate)();
    }

    var PORT = 80;

    _index.app.listen(PORT, function () {
      console.log("server start!!");
      console.log(PORT);
    });

    (0, _service.geolocation)();
    (0, _service.requestApi)();
    (0, _service.getOpenWeatherService)();
  });

  return function runServer() {
    return _ref.apply(this, arguments);
  };
}();

exports.runServer = runServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6WyJzZXJ2ZXJTZXR0aW5nIiwiaW5pdExvY2F0aW9uRGF0YSIsInJ1blNlcnZlciIsIlBPUlQiLCJhcHAiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsaUJBQUksZUFBSjtBQURFLENBQXRCOztBQUlPLElBQU1DLFNBQVM7QUFBQSwrQkFBRyxhQUEyQjtBQUNsRCxRQUFJRixhQUFhLENBQUNDLGdCQUFsQixFQUFvQztBQUNsQyxZQUFNLGdDQUFOO0FBQ0Q7O0FBRUQsUUFBTUUsSUFBSSxHQUFHLEVBQWI7O0FBRUFDLGVBQUlDLE1BQUosQ0FBV0YsSUFBWCxFQUFpQixZQUFNO0FBQ3JCRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNELEtBSEQ7O0FBSUE7QUFDQTtBQUNBO0FBQ0QsR0FkcUI7O0FBQUEsa0JBQVRELFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2NvbW1vblwiO1xuaW1wb3J0IHsgbWlncmF0aW9uTG9jYXRlIH0gZnJvbSBcIn4vZGF0YWJhc2VcIjtcbmltcG9ydCB7IGdlb2xvY2F0aW9uLCBnZXRPcGVuV2VhdGhlclNlcnZpY2UsIHJlcXVlc3RBcGkgfSBmcm9tIFwifi9zZXJ2aWNlXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuY29uc3Qgc2VydmVyU2V0dGluZyA9IHtcbiAgaW5pdExvY2F0aW9uRGF0YTogZW52KFwiSU5JVF9EQVRBQkFTRVwiKSxcbn07XG5cbmV4cG9ydCBjb25zdCBydW5TZXJ2ZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChzZXJ2ZXJTZXR0aW5nLmluaXRMb2NhdGlvbkRhdGEpIHtcbiAgICBhd2FpdCBtaWdyYXRpb25Mb2NhdGUoKTtcbiAgfVxuXG4gIGNvbnN0IFBPUlQgPSA4MDtcblxuICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlcnZlciBzdGFydCEhXCIpO1xuICAgIGNvbnNvbGUubG9nKFBPUlQpO1xuICB9KTtcbiAgZ2VvbG9jYXRpb24oKTtcbiAgcmVxdWVzdEFwaSgpO1xuICBnZXRPcGVuV2VhdGhlclNlcnZpY2UoKTtcbn07XG4iXX0=