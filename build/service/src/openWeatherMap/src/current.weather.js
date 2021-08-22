"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openWeatherMapCurrent = void 0;

var _api = require("../../../../api");

var _2 = require("../../../..");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var openWeatherMapCurrent = function openWeatherMapCurrent() {
  _2.app.get("/api/open/current", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (_, res) {
      console.log("--------------------------------------------------");
      console.log("current");
      console.log("--------------------------------------------------");
      var data = yield (0, _api.getCurrentWeatherOWM)();
      res.send(data);
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.openWeatherMapCurrent = openWeatherMapCurrent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9vcGVuV2VhdGhlck1hcC9zcmMvY3VycmVudC53ZWF0aGVyLnRzIl0sIm5hbWVzIjpbIm9wZW5XZWF0aGVyTWFwQ3VycmVudCIsImFwcCIsImdldCIsIl8iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ3pDQyxTQUFJQyxHQUFKLENBQVEsbUJBQVI7QUFBQSxpQ0FBNkIsV0FBT0MsQ0FBUCxFQUFVQyxHQUFWLEVBQWtCO0FBQzdDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0EsVUFBTUMsSUFBSSxTQUFTLGdDQUFuQjtBQUNBSCxNQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBU0QsSUFBVDtBQUNELEtBTkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPRCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJPV00gfSBmcm9tIFwifi9hcGlcIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCJ+L2luZGV4XCI7XG5cbmV4cG9ydCBjb25zdCBvcGVuV2VhdGhlck1hcEN1cnJlbnQgPSAoKSA9PiB7XG4gIGFwcC5nZXQoXCIvYXBpL29wZW4vY3VycmVudFwiLCBhc3luYyAoXywgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRcIik7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXJPV00oKTtcbiAgICByZXMuc2VuZChkYXRhKTtcbiAgfSk7XG59O1xuIl19