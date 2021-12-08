"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weeklyWeather = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _lodash = require("lodash");

var _common = require("../../../../../../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * ! day1, day2 대기 상태 변경
 * @param {string} sky 하늘 상태
 * @param {string} pty 강수 상태
 * @returns {string}
 */
var changeValue = function changeValue(sky, pty) {
  switch (pty) {
    case "0":
      switch (sky) {
        case "0":
          return "맑음";

        case "3":
          return "구름 많음";

        case "4":
          return "흐림";

        default:
          return "구름 많음";
      }

    case "1":
      return "비";

    case "2":
      return "비";

    case "3":
      return "눈";

    case "4":
      return "비";

    case "5":
      return "비";

    case "6":
      return "비";

    case "7":
      return "눈";

    default:
      return "";
  }
};
/**
 * ! 주간 기상 정보 데이터 요청
 * ! 00시 ~ 5시 이전이면 전날 23시에서 요청
 * ! 그 외의 경우는 현재 시간에서 요청 가능
 * * ***Return data options***
 *
 * - minTemperature: 최저기온
 * - maxTemperature: 최고기온
 * - skyAm: 오전 날씨 상태
 * - skyPm: 오후 날씨 상태
 *
 * @returns {Promise<ResultWeeklyDataProps>}
 */


var weeklyWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (props) {
    var nx = props.nx,
        ny = props.ny,
        locationCode = props.locationCode,
        skyCode = props.skyCode;
    var DATE = (0, _common.getWeeklyDate)();
    var TIME = (0, _common.getWeeklyTime)();
    var AFTER3 = (0, _common.getWeeklyDateAfter3)();
    var data = {};
    var atmos = [];
    var timeData = {
      time02: [448, 339, 738, 629],
      time05: [411, 302, 701, 592],
      time08: [375, 266, 665, 556],
      time11: [339, 230, 629, 520],
      time14: [302, 193, 592, 483],
      time17: [266, 157, 556, 447],
      time20: [230, 121, 520, 411],
      time23: [194, 85, 484, 374]
    };
    /**
     * ! 3시간 단위 예보
     *
     * * ***Return data options***
     * - PTY : 강수 형태 (비, 눈 등) ---> 18부터 시작 --> 12개씩
     * - SKY : 하늘 상태 ---> 17번부터 시작 12개씩
     * - TMP : 1시간 기온 --> 0번부터 12개씩
     */

    var getHourlyData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        var arr = new Array(48).fill(0);
        var data = new Array();
        yield Promise.all(arr.map( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(function* (_, index) {
            var res = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=10&pageNo=").concat(index + 1, "&dataType=json&base_date=").concat(DATE, "&base_time=").concat(TIME, "&nx=").concat(nx, "&ny=").concat(ny));
            var filter = res.data.response.body.items.item.filter(function (item) {
              return item.category === "PTY" || item.category === "SKY" || item.category === "TMP";
            }).map(function (item) {
              return (0, _lodash.omit)(item, ["baseDate", "baseTime", "nx", "ny"]);
            });
            return data.push.apply(data, _toConsumableArray(filter));
          });

          return function (_x2, _x3) {
            return _ref3.apply(this, arguments);
          };
        }()));
        data.sort(function (a, b) {
          if (a.fcstTime > b.fcstTime) {
            return 1;
          } else if (a.fcstTime < b.fcstTime) {
            return -1;
          } else {
            return 0;
          }
        }).sort(function (a, b) {
          if (a.fcstDate > b.fcstDate) {
            return 1;
          } else if (a.fcstDate < b.fcstDate) {
            return -1;
          } else {
            return 0;
          }
        });
        return data;
      });

      return function getHourlyData() {
        return _ref2.apply(this, arguments);
      };
    }();

    var hourlyData = yield getHourlyData();
    /**
     * ! 데이터 요청
     * @param {number} val 데이터 인덱스
     * @returns {Promise<ApiResponseData>}
     */

    var getApiData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* (val) {
        return yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=1&pageNo=").concat(val, "&dataType=json&base_date=").concat(DATE, "&base_time=").concat(TIME, "&nx=").concat(nx, "&ny=").concat(ny)).then(function (res) {
          return res.data.response.body.items.item[0];
        });
      });

      return function getApiData(_x4) {
        return _ref4.apply(this, arguments);
      };
    }();
    /**
     * ! 시간대별 다른 인덱스에 맞춰 Sky, Pty 데이터 인덱스 계산하여 배열 추가
     * ! api 요청 일괄 적으로 요청 후 Return
     */


    var getData = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* (data) {
        var addArray = function addArray(arr) {
          for (var i = 0; i < 4; i++) {
            arr.push(arr[i] - 6);
            arr.push(arr[i] - 7);
          }
        };

        addArray(data);
        var result = yield Promise.all(data.map(function (item) {
          return getApiData(item);
        })).then(function (res) {
          return res;
        });
        return result;
      });

      return function getData(_x5) {
        return _ref5.apply(this, arguments);
      };
    }();
    /**
     * ! 시간별로 필요 인덱스 데이터만 요청
     *
     * @param {string} time 요청 시간
     * @returns {Promise<Array<ApiResponseData>>}
     */


    var getDayInfo = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* (time) {
        switch (time) {
          case "0200":
            return yield getData(timeData.time02);

          case "0500":
            return yield getData(timeData.time05);

          case "0800":
            return yield getData(timeData.time08);

          case "1100":
            return yield getData(timeData.time11);

          case "1400":
            return yield getData(timeData.time14);

          case "1700":
            return yield getData(timeData.time17);

          case "2000":
            return yield getData(timeData.time20);

          case "2300":
            return yield getData(timeData.time23);

          default:
            return yield getData(timeData.time02);
        }
      });

      return function getDayInfo(_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    var tomorrowData = yield getDayInfo(TIME);
    /**
     * ! 주간 기상 정보
     */

    for (var i = 0; i < tomorrowData.length; i++) {
      if (tomorrowData[i].fcstDate === (0, _dayjs.default)(DATE).add(1, "day").format("YYYYMMDD")) {
        if (tomorrowData[i].category === "TMN") {
          (0, _lodash.set)(data, "day1.minTemperature", parseInt(tomorrowData[i].fcstValue, 10));
          (0, _lodash.set)(data, "day1.minTemperatureTime", tomorrowData[i].fcstTime);
        } else if (tomorrowData[i].category === "TMX") {
          (0, _lodash.set)(data, "day1.maxTemperature", parseInt(tomorrowData[i].fcstValue, 10));
          (0, _lodash.set)(data, "day1.maxTemperatureTime", tomorrowData[i].fcstTime);
        }

        if ((tomorrowData[i].fcstTime === "0600" || tomorrowData[i].fcstTime === "1500") && (tomorrowData[i].category === "SKY" || tomorrowData[i].category === "PTY")) {
          atmos.push(tomorrowData[i]);
        }
      } else if (tomorrowData[i].fcstDate === (0, _dayjs.default)(DATE).add(2, "day").format("YYYYMMDD")) {
        if (tomorrowData[i].category === "TMN") {
          (0, _lodash.set)(data, "day2.minTemperature", parseInt(tomorrowData[i].fcstValue, 10));
          (0, _lodash.set)(data, "day2.minTemperatureTime", tomorrowData[i].fcstTime);
        } else if (tomorrowData[i].category === "TMX") {
          (0, _lodash.set)(data, "day2.maxTemperature", parseInt(tomorrowData[i].fcstValue, 10));
          (0, _lodash.set)(data, "day2.maxTemperatureTime", tomorrowData[i].fcstTime);
        }

        if ((tomorrowData[i].fcstTime === "0600" || tomorrowData[i].fcstTime === "1500") && (tomorrowData[i].category === "SKY" || tomorrowData[i].category === "PTY")) {
          atmos.push(tomorrowData[i]);
        }
      }
    }

    atmos.map(function (item) {
      if (item.fcstDate === (0, _dayjs.default)(DATE).add(1, "day").format("YYYYMMDD")) {
        if (item.fcstTime === (0, _lodash.get)(data, "day1.minTemperatureTime")) {
          if (item.category === "SKY") {
            (0, _lodash.set)(data, "day1.skyValueAm", item.fcstValue);
          } else {
            (0, _lodash.set)(data, "day1.ptyValueAm", item.fcstValue);
          }
        } else if (item.fcstTime === (0, _lodash.get)(data, "day1.maxTemperatureTime")) {
          if (item.category === "SKY") {
            (0, _lodash.set)(data, "day1.skyValuePm", item.fcstValue);
          } else {
            (0, _lodash.set)(data, "day1.ptyValuePm", item.fcstValue);
          }
        }
      } else {
        if (item.fcstDate === (0, _dayjs.default)(DATE).add(2, "day").format("YYYYMMDD")) {
          if (item.fcstTime === (0, _lodash.get)(data, "day1.minTemperatureTime")) {
            if (item.category === "SKY") {
              (0, _lodash.set)(data, "day2.skyValueAm", item.fcstValue);
            } else {
              (0, _lodash.set)(data, "day2.ptyValueAm", item.fcstValue);
            }
          } else if (item.fcstTime === (0, _lodash.get)(data, "day1.maxTemperatureTime")) {
            if (item.category === "SKY") {
              (0, _lodash.set)(data, "day2.skyValuePm", item.fcstValue);
            } else {
              (0, _lodash.set)(data, "day2.ptyValuePm", item.fcstValue);
            }
          }
        }
      }
    });
    yield _axios.default.get("http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=10&pageNo=&dataType=json&regId=").concat(locationCode ? locationCode : "11D20501", "&tmFc=").concat(AFTER3)).then(function (res) {
      var result = res.data.response.body.items.item[0];
      (0, _lodash.set)(data, "day3.minTemperature", result.taMin3);
      (0, _lodash.set)(data, "day3.maxTemperature", result.taMax3);
      (0, _lodash.set)(data, "day4.minTemperature", result.taMin4);
      (0, _lodash.set)(data, "day4.maxTemperature", result.taMax4);
      (0, _lodash.set)(data, "day5.minTemperature", result.taMin5);
      (0, _lodash.set)(data, "day5.maxTemperature", result.taMax5);
      (0, _lodash.set)(data, "day6.minTemperature", result.taMin6);
      (0, _lodash.set)(data, "day6.maxTemperature", result.taMax6);
      (0, _lodash.set)(data, "day7.minTemperature", result.taMin7);
      (0, _lodash.set)(data, "day7.maxTemperature", result.taMax7);
    });
    yield _axios.default.get("http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=100&pageNo=1&dataType=json&regId=").concat(skyCode ? skyCode : "11B00000", "&tmFc=").concat(AFTER3)).then(function (res) {
      var result = res.data.response.body.items.item[0];
      (0, _lodash.set)(data, "day3.skyAm", result.wf3Am);
      (0, _lodash.set)(data, "day3.skyPm", result.wf3Pm);
      (0, _lodash.set)(data, "day4.skyAm", result.wf4Am);
      (0, _lodash.set)(data, "day4.skyPm", result.wf4Pm);
      (0, _lodash.set)(data, "day5.skyAm", result.wf5Am);
      (0, _lodash.set)(data, "day5.skyPm", result.wf5Pm);
      (0, _lodash.set)(data, "day6.skyAm", result.wf6Am);
      (0, _lodash.set)(data, "day6.skyPm", result.wf6Pm);
      (0, _lodash.set)(data, "day7.skyAm", result.wf7Am);
      (0, _lodash.set)(data, "day7.skyPm", result.wf7Pm);
    });
    (0, _lodash.set)(data, "day1.skyAm", changeValue((0, _lodash.get)(data, "day1.skyValueAm"), (0, _lodash.get)(data, "day1.ptyValueAm")));
    (0, _lodash.set)(data, "day1.skyPm", changeValue((0, _lodash.get)(data, "day1.skyValuePm"), (0, _lodash.get)(data, "day1.ptyValuePm")));
    (0, _lodash.set)(data, "day2.skyAm", changeValue((0, _lodash.get)(data, "day2.skyValueAm"), (0, _lodash.get)(data, "day2.ptyValueAm")));
    (0, _lodash.set)(data, "day2.skyPm", changeValue((0, _lodash.get)(data, "day2.skyValuePm"), (0, _lodash.get)(data, "day2.ptyValuePm")));
    var weeklyData = (0, _lodash.omit)(data, ["day1.minTemperatureTime", "day1.maxTemperatureTime", "day1.ptyValueAm", "day1.skyValueAm", "day1.ptyValuePm", "day1.skyValuePm", "day2.minTemperatureTime", "day2.maxTemperatureTime", "day2.ptyValueAm", "day2.skyValueAm", "day2.ptyValuePm", "day2.skyValuePm"]);
    return {
      weeklyData: weeklyData,
      hourlyData: hourlyData
    };
  });

  return function weeklyWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.weeklyWeather = weeklyWeather;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvd2Vla2x5V2VhdGhlci9zcmMva29yZWEud2VhdGhlci53ZWVrbHkuYXBpLnRzIl0sIm5hbWVzIjpbImNoYW5nZVZhbHVlIiwic2t5IiwicHR5Iiwid2Vla2x5V2VhdGhlciIsInByb3BzIiwibngiLCJueSIsImxvY2F0aW9uQ29kZSIsInNreUNvZGUiLCJEQVRFIiwiVElNRSIsIkFGVEVSMyIsImRhdGEiLCJhdG1vcyIsInRpbWVEYXRhIiwidGltZTAyIiwidGltZTA1IiwidGltZTA4IiwidGltZTExIiwidGltZTE0IiwidGltZTE3IiwidGltZTIwIiwidGltZTIzIiwiZ2V0SG91cmx5RGF0YSIsImFyciIsIkFycmF5IiwiZmlsbCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJfIiwiaW5kZXgiLCJyZXMiLCJheGlvcyIsImdldCIsIktPUkVBX1dFQVRIRVJfQVBJX0tFWSIsImZpbHRlciIsInJlc3BvbnNlIiwiYm9keSIsIml0ZW1zIiwiaXRlbSIsImNhdGVnb3J5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImZjc3RUaW1lIiwiZmNzdERhdGUiLCJob3VybHlEYXRhIiwiZ2V0QXBpRGF0YSIsInZhbCIsInRoZW4iLCJnZXREYXRhIiwiYWRkQXJyYXkiLCJpIiwicmVzdWx0IiwiZ2V0RGF5SW5mbyIsInRpbWUiLCJ0b21vcnJvd0RhdGEiLCJsZW5ndGgiLCJhZGQiLCJmb3JtYXQiLCJwYXJzZUludCIsImZjc3RWYWx1ZSIsInRhTWluMyIsInRhTWF4MyIsInRhTWluNCIsInRhTWF4NCIsInRhTWluNSIsInRhTWF4NSIsInRhTWluNiIsInRhTWF4NiIsInRhTWluNyIsInRhTWF4NyIsIndmM0FtIiwid2YzUG0iLCJ3ZjRBbSIsIndmNFBtIiwid2Y1QW0iLCJ3ZjVQbSIsIndmNkFtIiwid2Y2UG0iLCJ3ZjdBbSIsIndmN1BtIiwid2Vla2x5RGF0YSJdLCJtYXBwaW5ncyI6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LHFCQUFJQSxJQUFKLEVBQVUsWUFBVixFQUF3QlosV0FBVyxDQUFDLGlCQUFJWSxJQUFKLEVBQVUsaUJBQVYsQ0FBRCxFQUErQixpQkFBSUEsSUFBSixFQUFVLGlCQUFWLENBQS9CLENBQW5DO0FBQ0EscUJBQUlBLElBQUosRUFBVSxZQUFWLEVBQXdCWixXQUFXLENBQUMsaUJBQUlZLElBQUosRUFBVSxpQkFBVixDQUFELEVBQStCLGlCQUFJQSxJQUFKLEVBQVUsaUJBQVYsQ0FBL0IsQ0FBbkM7QUFFQSxRQUFNd0UsVUFBVSxHQUFHLGtCQUFLeEUsSUFBTCxFQUFXLENBQzVCLHlCQUQ0QixFQUU1Qix5QkFGNEIsRUFHNUIsaUJBSDRCLEVBSTVCLGlCQUo0QixFQUs1QixpQkFMNEIsRUFNNUIsaUJBTjRCLEVBTzVCLHlCQVA0QixFQVE1Qix5QkFSNEIsRUFTNUIsaUJBVDRCLEVBVTVCLGlCQVY0QixFQVc1QixpQkFYNEIsRUFZNUIsaUJBWjRCLENBQVgsQ0FBbkI7QUFlQSxXQUFPO0FBQUV3RSxNQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY3BDLE1BQUFBLFVBQVUsRUFBVkE7QUFBZCxLQUFQO0FBQ0QsR0FoUnlCOztBQUFBLGtCQUFiN0MsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGdldCwgb21pdCwgc2V0IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2VEYXRhLCBSZXN1bHRXZWVrbHlEYXRhUHJvcHMgfSBmcm9tIFwifi9AdHlwZXNcIjtcbmltcG9ydCB7IGdldFdlZWtseURhdGUsIGdldFdlZWtseURhdGVBZnRlcjMsIGdldFdlZWtseVRpbWUsIEtPUkVBX1dFQVRIRVJfQVBJX0tFWSB9IGZyb20gXCJ+L2NvbW1vblwiO1xuXG5leHBvcnQgdHlwZSBXZWVrbHlEYXRhUHJvcHMgPSB7XG4gIG54OiBzdHJpbmc7XG4gIG55OiBzdHJpbmc7XG4gIGxvY2F0aW9uQ29kZTogc3RyaW5nO1xuICBza3lDb2RlOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqICEgZGF5MSwgZGF5MiDrjIDquLAg7IOB7YOcIOuzgOqyvVxuICogQHBhcmFtIHtzdHJpbmd9IHNreSDtlZjripgg7IOB7YOcXG4gKiBAcGFyYW0ge3N0cmluZ30gcHR5IOqwleyImCDsg4Htg5xcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGNoYW5nZVZhbHVlID0gKHNreTogc3RyaW5nLCBwdHk6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAocHR5KSB7XG4gICAgY2FzZSBcIjBcIjpcbiAgICAgIHN3aXRjaCAoc2t5KSB7XG4gICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgcmV0dXJuIFwi66eR7J2MXCI7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgcmV0dXJuIFwi6rWs66aEIOunjuydjFwiO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgIHJldHVybiBcIu2dkOumvFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcIuq1rOumhCDrp47snYxcIjtcbiAgICAgIH1cbiAgICBjYXNlIFwiMVwiOlxuICAgICAgcmV0dXJuIFwi67mEXCI7XG4gICAgY2FzZSBcIjJcIjpcbiAgICAgIHJldHVybiBcIuu5hFwiO1xuICAgIGNhc2UgXCIzXCI6XG4gICAgICByZXR1cm4gXCLriIhcIjtcbiAgICBjYXNlIFwiNFwiOlxuICAgICAgcmV0dXJuIFwi67mEXCI7XG4gICAgY2FzZSBcIjVcIjpcbiAgICAgIHJldHVybiBcIuu5hFwiO1xuICAgIGNhc2UgXCI2XCI6XG4gICAgICByZXR1cm4gXCLruYRcIjtcbiAgICBjYXNlIFwiN1wiOlxuICAgICAgcmV0dXJuIFwi64iIXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIlwiO1xuICB9XG59O1xuXG4vKipcbiAqICEg7KO86rCEIOq4sOyDgSDsoJXrs7Qg642w7J207YSwIOyalOyyrVxuICogISAwMOyLnCB+IDXsi5wg7J207KCE7J2066m0IOyghOuCoCAyM+yLnOyXkOyEnCDsmpTssq1cbiAqICEg6re4IOyZuOydmCDqsr3smrDripQg7ZiE7J6sIOyLnOqwhOyXkOyEnCDsmpTssq0g6rCA64qlXG4gKiAqICoqKlJldHVybiBkYXRhIG9wdGlvbnMqKipcbiAqXG4gKiAtIG1pblRlbXBlcmF0dXJlOiDstZzsoIDquLDsmKhcbiAqIC0gbWF4VGVtcGVyYXR1cmU6IOy1nOqzoOq4sOyYqFxuICogLSBza3lBbTog7Jik7KCEIOuCoOyUqCDsg4Htg5xcbiAqIC0gc2t5UG06IOyYpO2bhCDrgqDslKgg7IOB7YOcXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8UmVzdWx0V2Vla2x5RGF0YVByb3BzPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHdlZWtseVdlYXRoZXIgPSBhc3luYyAocHJvcHM6IFdlZWtseURhdGFQcm9wcyk6IFByb21pc2U8UmVzdWx0V2Vla2x5RGF0YVByb3BzPiA9PiB7XG4gIGNvbnN0IHsgbngsIG55LCBsb2NhdGlvbkNvZGUsIHNreUNvZGUgfSA9IHByb3BzO1xuICBjb25zdCBEQVRFID0gZ2V0V2Vla2x5RGF0ZSgpO1xuICBjb25zdCBUSU1FID0gZ2V0V2Vla2x5VGltZSgpO1xuXG4gIGNvbnN0IEFGVEVSMyA9IGdldFdlZWtseURhdGVBZnRlcjMoKTtcbiAgY29uc3QgZGF0YSA9IHt9O1xuICBjb25zdCBhdG1vczogQXJyYXk8QXBpUmVzcG9uc2VEYXRhPiA9IFtdO1xuXG4gIGNvbnN0IHRpbWVEYXRhID0ge1xuICAgIHRpbWUwMjogWzQ0OCwgMzM5LCA3MzgsIDYyOV0sXG4gICAgdGltZTA1OiBbNDExLCAzMDIsIDcwMSwgNTkyXSxcbiAgICB0aW1lMDg6IFszNzUsIDI2NiwgNjY1LCA1NTZdLFxuICAgIHRpbWUxMTogWzMzOSwgMjMwLCA2MjksIDUyMF0sXG4gICAgdGltZTE0OiBbMzAyLCAxOTMsIDU5MiwgNDgzXSxcbiAgICB0aW1lMTc6IFsyNjYsIDE1NywgNTU2LCA0NDddLFxuICAgIHRpbWUyMDogWzIzMCwgMTIxLCA1MjAsIDQxMV0sXG4gICAgdGltZTIzOiBbMTk0LCA4NSwgNDg0LCAzNzRdLFxuICB9O1xuXG4gIC8qKlxuICAgKiAhIDPsi5zqsIQg64uo7JyEIOyYiOuztFxuICAgKlxuICAgKiAqICoqKlJldHVybiBkYXRhIG9wdGlvbnMqKipcbiAgICogLSBQVFkgOiDqsJXsiJgg7ZiV7YOcICjruYQsIOuIiCDrk7EpIC0tLT4gMTjrtoDthLAg7Iuc7J6RIC0tPiAxMuqwnOyUqVxuICAgKiAtIFNLWSA6IO2VmOuKmCDsg4Htg5wgLS0tPiAxN+uyiOu2gO2EsCDsi5zsnpEgMTLqsJzslKlcbiAgICogLSBUTVAgOiAx7Iuc6rCEIOq4sOyYqCAtLT4gMOuyiOu2gO2EsCAxMuqwnOyUqVxuICAgKi9cbiAgY29uc3QgZ2V0SG91cmx5RGF0YSA9IGFzeW5jICgpOiBQcm9taXNlPFJlc3VsdFdlZWtseURhdGFQcm9wc1tcImhvdXJseURhdGFcIl0+ID0+IHtcbiAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXk8bnVtYmVyPig0OCkuZmlsbCgwKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEFycmF5KCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBhcnIubWFwKGFzeW5jIChfLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9WaWxhZ2VGY3N0SW5mb1NlcnZpY2VfMi4wL2dldFZpbGFnZUZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTEwJnBhZ2VObz0ke1xuICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgfSZkYXRhVHlwZT1qc29uJmJhc2VfZGF0ZT0ke0RBVEV9JmJhc2VfdGltZT0ke1RJTUV9Jm54PSR7bnh9Jm55PSR7bnl9YFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXMuaXRlbVxuICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IEFwaVJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnkgPT09IFwiUFRZXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJTS1lcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBcIlRNUFwiO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoaXRlbTogQXBpUmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb21pdChpdGVtLCBbXCJiYXNlRGF0ZVwiLCBcImJhc2VUaW1lXCIsIFwibnhcIiwgXCJueVwiXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhLnB1c2goLi4uZmlsdGVyKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBkYXRhXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5mY3N0VGltZSA+IGIuZmNzdFRpbWUpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhLmZjc3RUaW1lIDwgYi5mY3N0VGltZSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmZjc3REYXRlID4gYi5mY3N0RGF0ZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGEuZmNzdERhdGUgPCBiLmZjc3REYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZGF0YSBhcyBSZXN1bHRXZWVrbHlEYXRhUHJvcHNbXCJob3VybHlEYXRhXCJdO1xuICB9O1xuXG4gIGNvbnN0IGhvdXJseURhdGEgPSBhd2FpdCBnZXRIb3VybHlEYXRhKCk7XG5cbiAgLyoqXG4gICAqICEg642w7J207YSwIOyalOyyrVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsIOuNsOydtO2EsCDsnbjrjbHsiqRcbiAgICogQHJldHVybnMge1Byb21pc2U8QXBpUmVzcG9uc2VEYXRhPn1cbiAgICovXG4gIGNvbnN0IGdldEFwaURhdGEgPSBhc3luYyAodmFsOiBudW1iZXIpOiBQcm9taXNlPEFwaVJlc3BvbnNlRGF0YT4gPT4ge1xuICAgIHJldHVybiBhd2FpdCBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9WaWxhZ2VGY3N0SW5mb1NlcnZpY2VfMi4wL2dldFZpbGFnZUZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTEmcGFnZU5vPSR7dmFsfSZkYXRhVHlwZT1qc29uJmJhc2VfZGF0ZT0ke0RBVEV9JmJhc2VfdGltZT0ke1RJTUV9Jm54PSR7bnh9Jm55PSR7bnl9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcy5pdGVtWzBdO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICEg7Iuc6rCE64yA67OEIOuLpOuluCDsnbjrjbHsiqTsl5Ag66ee7LawIFNreSwgUHR5IOuNsOydtO2EsCDsnbjrjbHsiqQg6rOE7IKw7ZWY7JesIOuwsOyXtCDstpTqsIBcbiAgICogISBhcGkg7JqU7LKtIOydvOq0hCDsoIHsnLzroZwg7JqU7LKtIO2bhCBSZXR1cm5cbiAgICovXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoZGF0YTogQXJyYXk8bnVtYmVyPik6IFByb21pc2U8QXJyYXk8QXBpUmVzcG9uc2VEYXRhPj4gPT4ge1xuICAgIGNvbnN0IGFkZEFycmF5ID0gKGFycjogbnVtYmVyW10pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGFycltpXSAtIDYpO1xuICAgICAgICBhcnIucHVzaChhcnJbaV0gLSA3KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEFycmF5KGRhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGdldEFwaURhdGEoaXRlbSk7XG4gICAgICB9KVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogISDsi5zqsITrs4TroZwg7ZWE7JqUIOyduOuNseyKpCDrjbDsnbTthLDrp4wg7JqU7LKtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lIOyalOyyrSDsi5zqsIRcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8QXBpUmVzcG9uc2VEYXRhPj59XG4gICAqL1xuICBjb25zdCBnZXREYXlJbmZvID0gYXN5bmMgKHRpbWU6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QXBpUmVzcG9uc2VEYXRhPj4gPT4ge1xuICAgIHN3aXRjaCAodGltZSkge1xuICAgICAgY2FzZSBcIjAyMDBcIjpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGdldERhdGEodGltZURhdGEudGltZTAyKTtcbiAgICAgIGNhc2UgXCIwNTAwXCI6XG4gICAgICAgIHJldHVybiBhd2FpdCBnZXREYXRhKHRpbWVEYXRhLnRpbWUwNSk7XG4gICAgICBjYXNlIFwiMDgwMFwiOlxuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0RGF0YSh0aW1lRGF0YS50aW1lMDgpO1xuICAgICAgY2FzZSBcIjExMDBcIjpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGdldERhdGEodGltZURhdGEudGltZTExKTtcbiAgICAgIGNhc2UgXCIxNDAwXCI6XG4gICAgICAgIHJldHVybiBhd2FpdCBnZXREYXRhKHRpbWVEYXRhLnRpbWUxNCk7XG4gICAgICBjYXNlIFwiMTcwMFwiOlxuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0RGF0YSh0aW1lRGF0YS50aW1lMTcpO1xuICAgICAgY2FzZSBcIjIwMDBcIjpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGdldERhdGEodGltZURhdGEudGltZTIwKTtcbiAgICAgIGNhc2UgXCIyMzAwXCI6XG4gICAgICAgIHJldHVybiBhd2FpdCBnZXREYXRhKHRpbWVEYXRhLnRpbWUyMyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0RGF0YSh0aW1lRGF0YS50aW1lMDIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b21vcnJvd0RhdGEgPSBhd2FpdCBnZXREYXlJbmZvKFRJTUUpO1xuXG4gIC8qKlxuICAgKiAhIOyjvOqwhCDquLDsg4Eg7KCV67O0XG4gICAqL1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvbW9ycm93RGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0b21vcnJvd0RhdGFbaV0uZmNzdERhdGUgPT09IGRheWpzKERBVEUpLmFkZCgxLCBcImRheVwiKS5mb3JtYXQoXCJZWVlZTU1ERFwiKSkge1xuICAgICAgaWYgKHRvbW9ycm93RGF0YVtpXS5jYXRlZ29yeSA9PT0gXCJUTU5cIikge1xuICAgICAgICBzZXQoZGF0YSwgXCJkYXkxLm1pblRlbXBlcmF0dXJlXCIsIHBhcnNlSW50KHRvbW9ycm93RGF0YVtpXS5mY3N0VmFsdWUsIDEwKSk7XG4gICAgICAgIHNldChkYXRhLCBcImRheTEubWluVGVtcGVyYXR1cmVUaW1lXCIsIHRvbW9ycm93RGF0YVtpXS5mY3N0VGltZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvbW9ycm93RGF0YVtpXS5jYXRlZ29yeSA9PT0gXCJUTVhcIikge1xuICAgICAgICBzZXQoZGF0YSwgXCJkYXkxLm1heFRlbXBlcmF0dXJlXCIsIHBhcnNlSW50KHRvbW9ycm93RGF0YVtpXS5mY3N0VmFsdWUsIDEwKSk7XG4gICAgICAgIHNldChkYXRhLCBcImRheTEubWF4VGVtcGVyYXR1cmVUaW1lXCIsIHRvbW9ycm93RGF0YVtpXS5mY3N0VGltZSk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICh0b21vcnJvd0RhdGFbaV0uZmNzdFRpbWUgPT09IFwiMDYwMFwiIHx8IHRvbW9ycm93RGF0YVtpXS5mY3N0VGltZSA9PT0gXCIxNTAwXCIpICYmXG4gICAgICAgICh0b21vcnJvd0RhdGFbaV0uY2F0ZWdvcnkgPT09IFwiU0tZXCIgfHwgdG9tb3Jyb3dEYXRhW2ldLmNhdGVnb3J5ID09PSBcIlBUWVwiKVxuICAgICAgKSB7XG4gICAgICAgIGF0bW9zLnB1c2godG9tb3Jyb3dEYXRhW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRvbW9ycm93RGF0YVtpXS5mY3N0RGF0ZSA9PT0gZGF5anMoREFURSkuYWRkKDIsIFwiZGF5XCIpLmZvcm1hdChcIllZWVlNTUREXCIpKSB7XG4gICAgICBpZiAodG9tb3Jyb3dEYXRhW2ldLmNhdGVnb3J5ID09PSBcIlRNTlwiKSB7XG4gICAgICAgIHNldChkYXRhLCBcImRheTIubWluVGVtcGVyYXR1cmVcIiwgcGFyc2VJbnQodG9tb3Jyb3dEYXRhW2ldLmZjc3RWYWx1ZSwgMTApKTtcbiAgICAgICAgc2V0KGRhdGEsIFwiZGF5Mi5taW5UZW1wZXJhdHVyZVRpbWVcIiwgdG9tb3Jyb3dEYXRhW2ldLmZjc3RUaW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodG9tb3Jyb3dEYXRhW2ldLmNhdGVnb3J5ID09PSBcIlRNWFwiKSB7XG4gICAgICAgIHNldChkYXRhLCBcImRheTIubWF4VGVtcGVyYXR1cmVcIiwgcGFyc2VJbnQodG9tb3Jyb3dEYXRhW2ldLmZjc3RWYWx1ZSwgMTApKTtcbiAgICAgICAgc2V0KGRhdGEsIFwiZGF5Mi5tYXhUZW1wZXJhdHVyZVRpbWVcIiwgdG9tb3Jyb3dEYXRhW2ldLmZjc3RUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHRvbW9ycm93RGF0YVtpXS5mY3N0VGltZSA9PT0gXCIwNjAwXCIgfHwgdG9tb3Jyb3dEYXRhW2ldLmZjc3RUaW1lID09PSBcIjE1MDBcIikgJiZcbiAgICAgICAgKHRvbW9ycm93RGF0YVtpXS5jYXRlZ29yeSA9PT0gXCJTS1lcIiB8fCB0b21vcnJvd0RhdGFbaV0uY2F0ZWdvcnkgPT09IFwiUFRZXCIpXG4gICAgICApIHtcbiAgICAgICAgYXRtb3MucHVzaCh0b21vcnJvd0RhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF0bW9zLm1hcCgoaXRlbTogQXBpUmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgaWYgKGl0ZW0uZmNzdERhdGUgPT09IGRheWpzKERBVEUpLmFkZCgxLCBcImRheVwiKS5mb3JtYXQoXCJZWVlZTU1ERFwiKSkge1xuICAgICAgaWYgKGl0ZW0uZmNzdFRpbWUgPT09IGdldChkYXRhLCBcImRheTEubWluVGVtcGVyYXR1cmVUaW1lXCIpKSB7XG4gICAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIlNLWVwiKSB7XG4gICAgICAgICAgc2V0KGRhdGEsIFwiZGF5MS5za3lWYWx1ZUFtXCIsIGl0ZW0uZmNzdFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXQoZGF0YSwgXCJkYXkxLnB0eVZhbHVlQW1cIiwgaXRlbS5mY3N0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uZmNzdFRpbWUgPT09IGdldChkYXRhLCBcImRheTEubWF4VGVtcGVyYXR1cmVUaW1lXCIpKSB7XG4gICAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIlNLWVwiKSB7XG4gICAgICAgICAgc2V0KGRhdGEsIFwiZGF5MS5za3lWYWx1ZVBtXCIsIGl0ZW0uZmNzdFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXQoZGF0YSwgXCJkYXkxLnB0eVZhbHVlUG1cIiwgaXRlbS5mY3N0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLmZjc3REYXRlID09PSBkYXlqcyhEQVRFKS5hZGQoMiwgXCJkYXlcIikuZm9ybWF0KFwiWVlZWU1NRERcIikpIHtcbiAgICAgICAgaWYgKGl0ZW0uZmNzdFRpbWUgPT09IGdldChkYXRhLCBcImRheTEubWluVGVtcGVyYXR1cmVUaW1lXCIpKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiU0tZXCIpIHtcbiAgICAgICAgICAgIHNldChkYXRhLCBcImRheTIuc2t5VmFsdWVBbVwiLCBpdGVtLmZjc3RWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldChkYXRhLCBcImRheTIucHR5VmFsdWVBbVwiLCBpdGVtLmZjc3RWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZmNzdFRpbWUgPT09IGdldChkYXRhLCBcImRheTEubWF4VGVtcGVyYXR1cmVUaW1lXCIpKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiU0tZXCIpIHtcbiAgICAgICAgICAgIHNldChkYXRhLCBcImRheTIuc2t5VmFsdWVQbVwiLCBpdGVtLmZjc3RWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldChkYXRhLCBcImRheTIucHR5VmFsdWVQbVwiLCBpdGVtLmZjc3RWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBhd2FpdCBheGlvc1xuICAgIC5nZXQoXG4gICAgICBgaHR0cDovL2FwaXMuZGF0YS5nby5rci8xMzYwMDAwL01pZEZjc3RJbmZvU2VydmljZS9nZXRNaWRUYT9zZXJ2aWNlS2V5PSR7S09SRUFfV0VBVEhFUl9BUElfS0VZfSZudW1PZlJvd3M9MTAmcGFnZU5vPSZkYXRhVHlwZT1qc29uJnJlZ0lkPSR7XG4gICAgICAgIGxvY2F0aW9uQ29kZSA/IGxvY2F0aW9uQ29kZSA6IFwiMTFEMjA1MDFcIlxuICAgICAgfSZ0bUZjPSR7QUZURVIzfWBcbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcy5pdGVtWzBdO1xuICAgICAgc2V0KGRhdGEsIGBkYXkzLm1pblRlbXBlcmF0dXJlYCwgcmVzdWx0LnRhTWluMyk7XG4gICAgICBzZXQoZGF0YSwgYGRheTMubWF4VGVtcGVyYXR1cmVgLCByZXN1bHQudGFNYXgzKTtcbiAgICAgIHNldChkYXRhLCBgZGF5NC5taW5UZW1wZXJhdHVyZWAsIHJlc3VsdC50YU1pbjQpO1xuICAgICAgc2V0KGRhdGEsIGBkYXk0Lm1heFRlbXBlcmF0dXJlYCwgcmVzdWx0LnRhTWF4NCk7XG4gICAgICBzZXQoZGF0YSwgYGRheTUubWluVGVtcGVyYXR1cmVgLCByZXN1bHQudGFNaW41KTtcbiAgICAgIHNldChkYXRhLCBgZGF5NS5tYXhUZW1wZXJhdHVyZWAsIHJlc3VsdC50YU1heDUpO1xuICAgICAgc2V0KGRhdGEsIGBkYXk2Lm1pblRlbXBlcmF0dXJlYCwgcmVzdWx0LnRhTWluNik7XG4gICAgICBzZXQoZGF0YSwgYGRheTYubWF4VGVtcGVyYXR1cmVgLCByZXN1bHQudGFNYXg2KTtcbiAgICAgIHNldChkYXRhLCBgZGF5Ny5taW5UZW1wZXJhdHVyZWAsIHJlc3VsdC50YU1pbjcpO1xuICAgICAgc2V0KGRhdGEsIGBkYXk3Lm1heFRlbXBlcmF0dXJlYCwgcmVzdWx0LnRhTWF4Nyk7XG4gICAgfSk7XG5cbiAgYXdhaXQgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9NaWRGY3N0SW5mb1NlcnZpY2UvZ2V0TWlkTGFuZEZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTEwMCZwYWdlTm89MSZkYXRhVHlwZT1qc29uJnJlZ0lkPSR7XG4gICAgICAgIHNreUNvZGUgPyBza3lDb2RlIDogXCIxMUIwMDAwMFwiXG4gICAgICB9JnRtRmM9JHtBRlRFUjN9YFxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW1bMF07XG4gICAgICBzZXQoZGF0YSwgXCJkYXkzLnNreUFtXCIsIHJlc3VsdC53ZjNBbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXkzLnNreVBtXCIsIHJlc3VsdC53ZjNQbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk0LnNreUFtXCIsIHJlc3VsdC53ZjRBbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk0LnNreVBtXCIsIHJlc3VsdC53ZjRQbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk1LnNreUFtXCIsIHJlc3VsdC53ZjVBbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk1LnNreVBtXCIsIHJlc3VsdC53ZjVQbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk2LnNreUFtXCIsIHJlc3VsdC53ZjZBbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk2LnNreVBtXCIsIHJlc3VsdC53ZjZQbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk3LnNreUFtXCIsIHJlc3VsdC53ZjdBbSk7XG4gICAgICBzZXQoZGF0YSwgXCJkYXk3LnNreVBtXCIsIHJlc3VsdC53ZjdQbSk7XG4gICAgfSk7XG5cbiAgc2V0KGRhdGEsIFwiZGF5MS5za3lBbVwiLCBjaGFuZ2VWYWx1ZShnZXQoZGF0YSwgXCJkYXkxLnNreVZhbHVlQW1cIiksIGdldChkYXRhLCBcImRheTEucHR5VmFsdWVBbVwiKSkpO1xuICBzZXQoZGF0YSwgXCJkYXkxLnNreVBtXCIsIGNoYW5nZVZhbHVlKGdldChkYXRhLCBcImRheTEuc2t5VmFsdWVQbVwiKSwgZ2V0KGRhdGEsIFwiZGF5MS5wdHlWYWx1ZVBtXCIpKSk7XG4gIHNldChkYXRhLCBcImRheTIuc2t5QW1cIiwgY2hhbmdlVmFsdWUoZ2V0KGRhdGEsIFwiZGF5Mi5za3lWYWx1ZUFtXCIpLCBnZXQoZGF0YSwgXCJkYXkyLnB0eVZhbHVlQW1cIikpKTtcbiAgc2V0KGRhdGEsIFwiZGF5Mi5za3lQbVwiLCBjaGFuZ2VWYWx1ZShnZXQoZGF0YSwgXCJkYXkyLnNreVZhbHVlUG1cIiksIGdldChkYXRhLCBcImRheTIucHR5VmFsdWVQbVwiKSkpO1xuXG4gIGNvbnN0IHdlZWtseURhdGEgPSBvbWl0KGRhdGEsIFtcbiAgICBcImRheTEubWluVGVtcGVyYXR1cmVUaW1lXCIsXG4gICAgXCJkYXkxLm1heFRlbXBlcmF0dXJlVGltZVwiLFxuICAgIFwiZGF5MS5wdHlWYWx1ZUFtXCIsXG4gICAgXCJkYXkxLnNreVZhbHVlQW1cIixcbiAgICBcImRheTEucHR5VmFsdWVQbVwiLFxuICAgIFwiZGF5MS5za3lWYWx1ZVBtXCIsXG4gICAgXCJkYXkyLm1pblRlbXBlcmF0dXJlVGltZVwiLFxuICAgIFwiZGF5Mi5tYXhUZW1wZXJhdHVyZVRpbWVcIixcbiAgICBcImRheTIucHR5VmFsdWVBbVwiLFxuICAgIFwiZGF5Mi5za3lWYWx1ZUFtXCIsXG4gICAgXCJkYXkyLnB0eVZhbHVlUG1cIixcbiAgICBcImRheTIuc2t5VmFsdWVQbVwiLFxuICBdKSBhcyBSZXN1bHRXZWVrbHlEYXRhUHJvcHNbXCJ3ZWVrbHlEYXRhXCJdO1xuXG4gIHJldHVybiB7IHdlZWtseURhdGEsIGhvdXJseURhdGEgfTtcbn07XG4iXX0=