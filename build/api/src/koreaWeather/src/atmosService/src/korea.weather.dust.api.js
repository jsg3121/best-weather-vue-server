"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atmosStatus = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _lodash = require("lodash");

var _common = require("../../../../../../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * ! 대기환경(미세먼지, 초미세먼지) 정보
 * todo #TODO: 지역 정보를 파라미터로 받아와야 함
 *
 * * ***Return data options (dust)***
 * - sidoName : 시,도 명
 * - pm10Grade1h : 1시간 단위 미세먼지
 * - pm25Grade1h : 1시간 단위 초미세먼지
 * - o3Grade : 오존
 * - dataTime : 예보 시간
 * - stationName : 측정소 명
 *
 * * ***Return data options (dust)***
 * - uv : string
 * @returns {ReturnAtmosData}
 */
var atmosStatus = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var area = "서울";
    var encoding = encodeURIComponent(area);
    var BASE_DATE = (0, _common.getAtmosDate)();
    var dust = yield _axios.default.get("http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=".concat(encoding, "&pageNo=1&numOfRows=40&returnType=json&serviceKey=").concat(_common.KOREA_WEATHER_API_KEY, "&ver=1.3")).then(function (res) {
      var item = res.data.response.body.items;
      var output = item.map(function (item) {
        return (0, _lodash.pick)(item, ["sidoName", "pm10Grade1h", "pm25Grade1h", "o3Grade", "dataTime", "stationName"]);
      });
      return output;
    });
    var uv = yield _axios.default.get("http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&dataType=json&areaNo=1100000000&time=").concat(BASE_DATE)).then(function (res) {
      return res.data.response.body.items.item[0].today;
    });
    return {
      dust: dust,
      uv: uv
    };
  });

  return function atmosStatus() {
    return _ref.apply(this, arguments);
  };
}();

exports.atmosStatus = atmosStatus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvYXRtb3NTZXJ2aWNlL3NyYy9rb3JlYS53ZWF0aGVyLmR1c3QuYXBpLnRzIl0sIm5hbWVzIjpbImF0bW9zU3RhdHVzIiwiYXJlYSIsImVuY29kaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiQkFTRV9EQVRFIiwiZHVzdCIsImF4aW9zIiwiZ2V0IiwiS09SRUFfV0VBVEhFUl9BUElfS0VZIiwidGhlbiIsInJlcyIsIml0ZW0iLCJkYXRhIiwicmVzcG9uc2UiLCJib2R5IiwiaXRlbXMiLCJvdXRwdXQiLCJtYXAiLCJ1diIsInRvZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxXQUFXO0FBQUEsK0JBQUcsYUFBc0M7QUFDL0QsUUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLGtCQUFrQixDQUFDRixJQUFELENBQW5DO0FBQ0EsUUFBTUcsU0FBUyxHQUFHLDJCQUFsQjtBQUVBLFFBQU1DLElBQW9CLFNBQVNDLGVBQ2hDQyxHQURnQyxpR0FFMERMLFFBRjFELCtEQUV1SE0sNkJBRnZILGVBSWhDQyxJQUpnQyxDQUkzQixVQUFDQyxHQUFELEVBQVM7QUFDYixVQUFNQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCQyxJQUFsQixDQUF1QkMsS0FBcEM7QUFDQSxVQUFNQyxNQUFNLEdBQUdMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNOLElBQUQsRUFBK0I7QUFDckQsZUFBTyxrQkFBS0EsSUFBTCxFQUFXLENBQ2hCLFVBRGdCLEVBRWhCLGFBRmdCLEVBR2hCLGFBSGdCLEVBSWhCLFNBSmdCLEVBS2hCLFVBTGdCLEVBTWhCLGFBTmdCLENBQVgsQ0FBUDtBQVFELE9BVGMsQ0FBZjtBQVVBLGFBQU9LLE1BQVA7QUFDRCxLQWpCZ0MsQ0FBbkM7QUFtQkEsUUFBTUUsRUFBZ0IsU0FBU1osZUFDNUJDLEdBRDRCLHVGQUVvREMsNkJBRnBELG1EQUVrSEosU0FGbEgsR0FJNUJLLElBSjRCLENBSXZCLFVBQUNDLEdBQUQsRUFBUztBQUNiLGFBQU9BLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCQyxJQUFsQixDQUF1QkMsS0FBdkIsQ0FBNkJKLElBQTdCLENBQWtDLENBQWxDLEVBQXFDUSxLQUE1QztBQUNELEtBTjRCLENBQS9CO0FBUUEsV0FBTztBQUFFZCxNQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUWEsTUFBQUEsRUFBRSxFQUFGQTtBQUFSLEtBQVA7QUFDRCxHQWpDdUI7O0FBQUEsa0JBQVhsQixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgcGljayB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IFJlc3VsdER1c3REYXRhUHJvcHMsIFJlc3VsdFV2RGF0YVByb3BzIH0gZnJvbSBcIn4vQHR5cGVzXCI7XG5pbXBvcnQgeyBnZXRBdG1vc0RhdGUsIEtPUkVBX1dFQVRIRVJfQVBJX0tFWSB9IGZyb20gXCJ+L2NvbW1vblwiO1xuXG50eXBlIFJldHVybkR1c3REYXRhID0gUGljazxcbiAgUmVzdWx0RHVzdERhdGFQcm9wcyxcbiAgXCJzaWRvTmFtZVwiIHwgXCJwbTEwR3JhZGUxaFwiIHwgXCJwbTI1R3JhZGUxaFwiIHwgXCJvM0dyYWRlXCIgfCBcImRhdGFUaW1lXCIgfCBcInN0YXRpb25OYW1lXCJcbj47XG50eXBlIFJldHVyblV2RGF0YSA9IFBpY2s8UmVzdWx0VXZEYXRhUHJvcHMsIFwidG9kYXlcIj47XG5cbnR5cGUgUmV0dXJuQXRtb3NEYXRhID0geyBkdXN0OiBSZXR1cm5EdXN0RGF0YTsgdXY6IFJldHVyblV2RGF0YSB9O1xuXG4vKipcbiAqICEg64yA6riw7ZmY6rK9KOuvuOyEuOuovOyngCwg7LSI66+47IS466i87KeAKSDsoJXrs7RcbiAqIHRvZG8gI1RPRE86IOyngOyXrSDsoJXrs7Trpbwg7YyM652866+47YSw66GcIOuwm+yVhOyZgOyVvCDtlahcbiAqXG4gKiAqICoqKlJldHVybiBkYXRhIG9wdGlvbnMgKGR1c3QpKioqXG4gKiAtIHNpZG9OYW1lIDog7IucLOuPhCDrqoVcbiAqIC0gcG0xMEdyYWRlMWggOiAx7Iuc6rCEIOuLqOychCDrr7jshLjrqLzsp4BcbiAqIC0gcG0yNUdyYWRlMWggOiAx7Iuc6rCEIOuLqOychCDstIjrr7jshLjrqLzsp4BcbiAqIC0gbzNHcmFkZSA6IOyYpOyhtFxuICogLSBkYXRhVGltZSA6IOyYiOuztCDsi5zqsIRcbiAqIC0gc3RhdGlvbk5hbWUgOiDsuKHsoJXshowg66qFXG4gKlxuICogKiAqKipSZXR1cm4gZGF0YSBvcHRpb25zIChkdXN0KSoqKlxuICogLSB1diA6IHN0cmluZ1xuICogQHJldHVybnMge1JldHVybkF0bW9zRGF0YX1cbiAqL1xuZXhwb3J0IGNvbnN0IGF0bW9zU3RhdHVzID0gYXN5bmMgKCk6IFByb21pc2U8UmV0dXJuQXRtb3NEYXRhPiA9PiB7XG4gIGNvbnN0IGFyZWEgPSBcIuyEnOyauFwiO1xuICBjb25zdCBlbmNvZGluZyA9IGVuY29kZVVSSUNvbXBvbmVudChhcmVhKTtcbiAgY29uc3QgQkFTRV9EQVRFID0gZ2V0QXRtb3NEYXRlKCk7XG5cbiAgY29uc3QgZHVzdDogUmV0dXJuRHVzdERhdGEgPSBhd2FpdCBheGlvc1xuICAgIC5nZXQoXG4gICAgICBgaHR0cDovL2FwaXMuZGF0YS5nby5rci9CNTUyNTg0L0FycGx0bkluZm9ySW5xaXJlU3ZjL2dldEN0cHJ2blJsdG1NZXN1cmVEbnN0eT9zaWRvTmFtZT0ke2VuY29kaW5nfSZwYWdlTm89MSZudW1PZlJvd3M9NDAmcmV0dXJuVHlwZT1qc29uJnNlcnZpY2VLZXk9JHtLT1JFQV9XRUFUSEVSX0FQSV9LRVl9JnZlcj0xLjNgXG4gICAgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gaXRlbS5tYXAoKGl0ZW06IFJlc3VsdER1c3REYXRhUHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHBpY2soaXRlbSwgW1xuICAgICAgICAgIFwic2lkb05hbWVcIixcbiAgICAgICAgICBcInBtMTBHcmFkZTFoXCIsXG4gICAgICAgICAgXCJwbTI1R3JhZGUxaFwiLFxuICAgICAgICAgIFwibzNHcmFkZVwiLFxuICAgICAgICAgIFwiZGF0YVRpbWVcIixcbiAgICAgICAgICBcInN0YXRpb25OYW1lXCIsXG4gICAgICAgIF0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuXG4gIGNvbnN0IHV2OiBSZXR1cm5VdkRhdGEgPSBhd2FpdCBheGlvc1xuICAgIC5nZXQoXG4gICAgICBgaHR0cDovL2FwaXMuZGF0YS5nby5rci8xMzYwMDAwL0xpdmluZ1d0aHJJZHhTZXJ2aWNlVjIvZ2V0VVZJZHhWMj9zZXJ2aWNlS2V5PSR7S09SRUFfV0VBVEhFUl9BUElfS0VZfSZkYXRhVHlwZT1qc29uJmFyZWFObz0xMTAwMDAwMDAwJnRpbWU9JHtCQVNFX0RBVEV9YFxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcy5pdGVtWzBdLnRvZGF5O1xuICAgIH0pO1xuXG4gIHJldHVybiB7IGR1c3QsIHV2IH07XG59O1xuIl19