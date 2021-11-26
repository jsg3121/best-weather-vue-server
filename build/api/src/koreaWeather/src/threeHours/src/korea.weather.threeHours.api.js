"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threeHours = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _lodash = require("lodash");

var _common = require("../../../../../../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * ! 3시간 단위 예보
 *
 * * ***Return data options***
 * - PTY : 강수 형태 (비, 눈 등)
 * - SKY : 하늘 상태
 * - T3H : 3시간 기온
 *
 * @returns {ReturnDataType}
 */
var threeHours = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var BASE_DATE = (0, _common.getCurrentDate)();
    var TIME = (0, _common.changDateFormThreeHoursTime)();
    var nx = 60;
    var ny = 127;
    var data = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=180&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=").concat(TIME, "&nx=").concat(nx ? nx : 60, "&ny=").concat(ny ? ny : 127)).then(function (res) {
      return res.data.response.body.items.item.filter(function (item) {
        return item.category === "PTY" || item.category === "SKY" || item.category === "TMP";
      });
    }).then(function (res) {
      var output = res.map(function (item) {
        return (0, _lodash.omit)(item, ["baseDate", "baseTime", "nx", "ny"]);
      });
      return output;
    });
    return data;
  });

  return function threeHours() {
    return _ref.apply(this, arguments);
  };
}();

exports.threeHours = threeHours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvdGhyZWVIb3Vycy9zcmMva29yZWEud2VhdGhlci50aHJlZUhvdXJzLmFwaS50cyJdLCJuYW1lcyI6WyJ0aHJlZUhvdXJzIiwiQkFTRV9EQVRFIiwiVElNRSIsIm54IiwibnkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJLT1JFQV9XRUFUSEVSX0FQSV9LRVkiLCJ0aGVuIiwicmVzIiwicmVzcG9uc2UiLCJib2R5IiwiaXRlbXMiLCJpdGVtIiwiZmlsdGVyIiwiY2F0ZWdvcnkiLCJvdXRwdXQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFVBQVU7QUFBQSwrQkFBRyxhQUFxQztBQUM3RCxRQUFNQyxTQUFTLEdBQUcsNkJBQWxCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLDBDQUFiO0FBQ0EsUUFBTUMsRUFBRSxHQUFHLEVBQVg7QUFDQSxRQUFNQyxFQUFFLEdBQUcsR0FBWDtBQUVBLFFBQU1DLElBQW9CLFNBQVNDLGVBQ2hDQyxHQURnQyw2RkFFc0RDLDZCQUZ0RCw2REFFOEhQLFNBRjlILHdCQUVxSkMsSUFGckosaUJBRzdCQyxFQUFFLEdBQUdBLEVBQUgsR0FBUSxFQUhtQixpQkFJeEJDLEVBQUUsR0FBR0EsRUFBSCxHQUFRLEdBSmMsR0FNaENLLElBTmdDLENBTTNCLFVBQUNDLEdBQUQsRUFBUztBQUNiLGFBQU9BLEdBQUcsQ0FBQ0wsSUFBSixDQUFTTSxRQUFULENBQWtCQyxJQUFsQixDQUF1QkMsS0FBdkIsQ0FBNkJDLElBQTdCLENBQWtDQyxNQUFsQyxDQUF5QyxVQUFDRCxJQUFELEVBQTJCO0FBQ3pFLGVBQU9BLElBQUksQ0FBQ0UsUUFBTCxLQUFrQixLQUFsQixJQUEyQkYsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLEtBQTdDLElBQXNERixJQUFJLENBQUNFLFFBQUwsS0FBa0IsS0FBL0U7QUFDRCxPQUZNLENBQVA7QUFHRCxLQVZnQyxFQVdoQ1AsSUFYZ0MsQ0FXM0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsVUFBTU8sTUFBc0IsR0FBR1AsR0FBRyxDQUFDUSxHQUFKLENBQVEsVUFBQ0osSUFBRCxFQUEyQjtBQUNoRSxlQUFPLGtCQUFLQSxJQUFMLEVBQVcsQ0FBQyxVQUFELEVBQWEsVUFBYixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQUFYLENBQVA7QUFDRCxPQUY4QixDQUEvQjtBQUlBLGFBQU9HLE1BQVA7QUFDRCxLQWpCZ0MsQ0FBbkM7QUFtQkEsV0FBT1osSUFBUDtBQUNELEdBMUJzQjs7QUFBQSxrQkFBVkwsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG9taXQgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBBcGlSZXNwb25zZURhdGEgfSBmcm9tIFwifi9AdHlwZXNcIjtcbmltcG9ydCB7IGNoYW5nRGF0ZUZvcm1UaHJlZUhvdXJzVGltZSwgZ2V0Q3VycmVudERhdGUgfSBmcm9tIFwifi9jb21tb25cIjtcbmltcG9ydCB7IEtPUkVBX1dFQVRIRVJfQVBJX0tFWSB9IGZyb20gXCJ+L2NvbW1vblwiO1xuXG50eXBlIFJldHVybkRhdGFUeXBlID0gQXJyYXk8T21pdDxBcGlSZXNwb25zZURhdGEsIFwiYmFzZURhdGVcIiB8IFwiYmFzZVRpbWVcIiB8IFwibnhcIiB8IFwibnlcIj4+O1xuXG4vKipcbiAqICEgM+yLnOqwhCDri6jsnIQg7JiI67O0XG4gKlxuICogKiAqKipSZXR1cm4gZGF0YSBvcHRpb25zKioqXG4gKiAtIFBUWSA6IOqwleyImCDtmJXtg5wgKOu5hCwg64iIIOuTsSlcbiAqIC0gU0tZIDog7ZWY64qYIOyDge2DnFxuICogLSBUM0ggOiAz7Iuc6rCEIOq4sOyYqFxuICpcbiAqIEByZXR1cm5zIHtSZXR1cm5EYXRhVHlwZX1cbiAqL1xuZXhwb3J0IGNvbnN0IHRocmVlSG91cnMgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5EYXRhVHlwZT4gPT4ge1xuICBjb25zdCBCQVNFX0RBVEUgPSBnZXRDdXJyZW50RGF0ZSgpO1xuICBjb25zdCBUSU1FID0gY2hhbmdEYXRlRm9ybVRocmVlSG91cnNUaW1lKCk7XG4gIGNvbnN0IG54ID0gNjA7XG4gIGNvbnN0IG55ID0gMTI3O1xuXG4gIGNvbnN0IGRhdGE6IFJldHVybkRhdGFUeXBlID0gYXdhaXQgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9WaWxhZ2VGY3N0SW5mb1NlcnZpY2VfMi4wL2dldFZpbGFnZUZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTE4MCZwYWdlTm89MSZkYXRhVHlwZT1qc29uJmJhc2VfZGF0ZT0ke0JBU0VfREFURX0mYmFzZV90aW1lPSR7VElNRX0mbng9JHtcbiAgICAgICAgbnggPyBueCA6IDYwXG4gICAgICB9Jm55PSR7bnkgPyBueSA6IDEyN31gXG4gICAgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW0uZmlsdGVyKChpdGVtOiBBcGlSZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnkgPT09IFwiUFRZXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJTS1lcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBcIlRNUFwiO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCBvdXRwdXQ6IFJldHVybkRhdGFUeXBlID0gcmVzLm1hcCgoaXRlbTogQXBpUmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBvbWl0KGl0ZW0sIFtcImJhc2VEYXRlXCIsIFwiYmFzZVRpbWVcIiwgXCJueFwiLCBcIm55XCJdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiJdfQ==