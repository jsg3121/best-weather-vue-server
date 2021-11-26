"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentWeather = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _lodash = require("lodash");

var _common = require("../../../../../../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * ! 현재 날씨 정보 요청 api 취합 데이터
 *
 * * ***Return data options***
 * - T1H : 현재 기온
 * - REH : 습도
 * - RN1 : 1시간 강수량
 * - VEC : 풍향
 * - WSD : 풍속
 * - SKY : 하늘상태
 * - TMX : 최고기온
 * - TMN : 최저기온
 *
 * @returns {Promise<ReturnCurrentWeather>}
 */
var currentWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (props) {
    var nx = props.nx,
        ny = props.ny;
    var BASE_TIME = (0, _common.getCurrentTime)();
    var BASE_DATE = (0, _common.getCurrentDate)();
    var data = {};
    /**
     * ! 현재 기상 정보 요청 api
     *
     * @param {number} nx gridX
     * @param {number} ny gridY
     * @param {string} BASE_TIME 요청 시간
     * @param {string} BASE_DATE 요청 일자
     * @return {void}
     */

    yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=10&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=").concat(BASE_TIME, "&nx=").concat(nx, "&ny=").concat(ny)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.map(function (item) {
        switch (item.category) {
          case "T1H":
            (0, _lodash.set)(data, "temperature", item.obsrValue);
            break;

          case "REH":
            (0, _lodash.set)(data, "humidity", item.obsrValue);
            break;

          case "PTY":
            (0, _lodash.set)(data, "pty", item.obsrValue);
            break;

          case "VEC":
            (0, _lodash.set)(data, "windDirection", item.obsrValue);
            break;

          case "WSD":
            (0, _lodash.set)(data, "windSpeed", item.obsrValue);
            break;

          default:
            break;
        }
      });
    });
    /**
     * 하늘 상태 정보 요청 api
     *
     * @param {number} nx gridX
     * @param {number} ny gridY
     * @param {string} BASE_TIME 요청 시간
     * @param {string} BASE_DATE 요청 일자
     * @return {void}
     */

    yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=25&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=").concat(BASE_TIME, "&nx=").concat(nx, "&ny=").concat(ny)).then(function (res) {
      var result = res.data.response.body.items.item;
      var sky = result.filter(function (list) {
        return list.category === "SKY";
      });
      (0, _lodash.set)(data, "sky", sky[0].fcstValue);
    });
    /**
     * 당일 최저기온, 최고기온 요청 api
     * @param {number} nx gridX
     * @param {number} ny gridY
     * @param {string} BASE_DATE 요청 일자
     * @return {void}
     */

    yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=25&pageNo=2&dataType=json&base_date=").concat(BASE_DATE, "&base_time=0200&nx=").concat(nx, "&ny=").concat(ny)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.map(function (item) {
        switch (item.category) {
          case "TMN":
            (0, _lodash.set)(data, "minTemp", item.fcstValue);
            break;

          default:
            break;
        }
      });
    });
    yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=".concat(_common.KOREA_WEATHER_API_KEY, "&numOfRows=25&pageNo=7&dataType=json&base_date=").concat(BASE_DATE, "&base_time=0200&nx=").concat(nx, "&ny=").concat(ny)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.map(function (item) {
        switch (item.category) {
          case "TMX":
            (0, _lodash.set)(data, "maxTemp", item.fcstValue);
            break;

          default:
            break;
        }
      });
    });
    return data;
  });

  return function currentWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.currentWeather = currentWeather;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMvY3VycmVudFdlYXRoZXIvc3JjL2tvcmVhLndlYXRoZXIuY3VycmVudC5hcGkudHMiXSwibmFtZXMiOlsiY3VycmVudFdlYXRoZXIiLCJwcm9wcyIsIm54IiwibnkiLCJCQVNFX1RJTUUiLCJCQVNFX0RBVEUiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJLT1JFQV9XRUFUSEVSX0FQSV9LRVkiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwicmVzcG9uc2UiLCJib2R5IiwiaXRlbXMiLCJpdGVtIiwibWFwIiwiY2F0ZWdvcnkiLCJvYnNyVmFsdWUiLCJza3kiLCJmaWx0ZXIiLCJsaXN0IiwiZmNzdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGNBQWM7QUFBQSwrQkFBRyxXQUFPQyxLQUFQLEVBQWtFO0FBQUEsUUFDdEZDLEVBRHNGLEdBQzNFRCxLQUQyRSxDQUN0RkMsRUFEc0Y7QUFBQSxRQUNsRkMsRUFEa0YsR0FDM0VGLEtBRDJFLENBQ2xGRSxFQURrRjtBQUU5RixRQUFNQyxTQUFTLEdBQUcsNkJBQWxCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLDZCQUFsQjtBQUVBLFFBQU1DLElBQUksR0FBRyxFQUFiO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFLFVBQU1DLGVBQ0hDLEdBREcsK0ZBRXFGQyw2QkFGckYsNERBRTRKSixTQUY1Six3QkFFbUxELFNBRm5MLGlCQUVtTUYsRUFGbk0saUJBRTRNQyxFQUY1TSxHQUlITyxJQUpHLENBSUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsVUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNMLElBQUos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LENBQVA7QUFTRCxLQWZHLENBQU47QUFpQkEsV0FBT2pCLElBQVA7QUFDRCxHQTNHMEI7O0FBQUEsa0JBQWROLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzZXQgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBSZXN1bHREYWlseURhdGFQcm9wcywgQXBpUmVzcG9uc2VEYXRhIH0gZnJvbSBcIn4vQHR5cGVzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZSwgZ2V0Q3VycmVudFRpbWUgfSBmcm9tIFwifi9jb21tb25cIjtcbmltcG9ydCB7IEtPUkVBX1dFQVRIRVJfQVBJX0tFWSB9IGZyb20gXCJ+L2NvbW1vblwiO1xuXG50eXBlIFJldHVybkN1cnJlbnRXZWF0aGVyID0ge1xuICBodW1pZGl0eTogc3RyaW5nO1xuICBwcmVjaXBpdGF0aW9uOiBzdHJpbmc7XG4gIHRlbXBlcmF0dXJlOiBzdHJpbmc7XG4gIHdpbmREaXJlY3Rpb246IHN0cmluZztcbiAgd2luZFNwZWVkOiBzdHJpbmc7XG4gIHNreTogc3RyaW5nO1xuICBtaW5UZW1wOiBzdHJpbmc7XG4gIG1heFRlbXA6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEN1cnJlbnREYXRhUHJvcHMgPSB7XG4gIG54OiBzdHJpbmc7XG4gIG55OiBzdHJpbmc7XG59O1xuXG4vKipcbiAqICEg7ZiE7J6sIOuCoOyUqCDsoJXrs7Qg7JqU7LKtIGFwaSDst6jtlakg642w7J207YSwXG4gKlxuICogKiAqKipSZXR1cm4gZGF0YSBvcHRpb25zKioqXG4gKiAtIFQxSCA6IO2YhOyerCDquLDsmKhcbiAqIC0gUkVIIDog7Iq164+EXG4gKiAtIFJOMSA6IDHsi5zqsIQg6rCV7IiY65+JXG4gKiAtIFZFQyA6IO2Sje2WpVxuICogLSBXU0QgOiDtko3sho1cbiAqIC0gU0tZIDog7ZWY64qY7IOB7YOcXG4gKiAtIFRNWCA6IOy1nOqzoOq4sOyYqFxuICogLSBUTU4gOiDstZzsoIDquLDsmKhcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxSZXR1cm5DdXJyZW50V2VhdGhlcj59XG4gKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50V2VhdGhlciA9IGFzeW5jIChwcm9wczogQ3VycmVudERhdGFQcm9wcyk6IFByb21pc2U8UmV0dXJuQ3VycmVudFdlYXRoZXI+ID0+IHtcbiAgY29uc3QgeyBueCwgbnkgfSA9IHByb3BzO1xuICBjb25zdCBCQVNFX1RJTUUgPSBnZXRDdXJyZW50VGltZSgpO1xuICBjb25zdCBCQVNFX0RBVEUgPSBnZXRDdXJyZW50RGF0ZSgpO1xuXG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICAvKipcbiAgICogISDtmITsnqwg6riw7IOBIOygleuztCDsmpTssq0gYXBpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBueCBncmlkWFxuICAgKiBAcGFyYW0ge251bWJlcn0gbnkgZ3JpZFlcbiAgICogQHBhcmFtIHtzdHJpbmd9IEJBU0VfVElNRSDsmpTssq0g7Iuc6rCEXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBCQVNFX0RBVEUg7JqU7LKtIOydvOyekFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYXdhaXQgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9WaWxhZ2VGY3N0SW5mb1NlcnZpY2VfMi4wL2dldFVsdHJhU3J0TmNzdD9zZXJ2aWNlS2V5PSR7S09SRUFfV0VBVEhFUl9BUElfS0VZfSZudW1PZlJvd3M9MTAmcGFnZU5vPTEmZGF0YVR5cGU9anNvbiZiYXNlX2RhdGU9JHtCQVNFX0RBVEV9JmJhc2VfdGltZT0ke0JBU0VfVElNRX0mbng9JHtueH0mbnk9JHtueX1gXG4gICAgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXMuaXRlbTtcbiAgICAgIHJldHVybiByZXN1bHQubWFwKChpdGVtOiBSZXN1bHREYWlseURhdGFQcm9wcykgPT4ge1xuICAgICAgICBzd2l0Y2ggKGl0ZW0uY2F0ZWdvcnkpIHtcbiAgICAgICAgICBjYXNlIFwiVDFIXCI6XG4gICAgICAgICAgICBzZXQoZGF0YSwgXCJ0ZW1wZXJhdHVyZVwiLCBpdGVtLm9ic3JWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUkVIXCI6XG4gICAgICAgICAgICBzZXQoZGF0YSwgXCJodW1pZGl0eVwiLCBpdGVtLm9ic3JWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUFRZXCI6XG4gICAgICAgICAgICBzZXQoZGF0YSwgXCJwdHlcIiwgaXRlbS5vYnNyVmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlZFQ1wiOlxuICAgICAgICAgICAgc2V0KGRhdGEsIFwid2luZERpcmVjdGlvblwiLCBpdGVtLm9ic3JWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiV1NEXCI6XG4gICAgICAgICAgICBzZXQoZGF0YSwgXCJ3aW5kU3BlZWRcIiwgaXRlbS5vYnNyVmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAvKipcbiAgICog7ZWY64qYIOyDge2DnCDsoJXrs7Qg7JqU7LKtIGFwaVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnggZ3JpZFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG55IGdyaWRZXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBCQVNFX1RJTUUg7JqU7LKtIOyLnOqwhFxuICAgKiBAcGFyYW0ge3N0cmluZ30gQkFTRV9EQVRFIOyalOyyrSDsnbzsnpBcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGF3YWl0IGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwOi8vYXBpcy5kYXRhLmdvLmtyLzEzNjAwMDAvVmlsYWdlRmNzdEluZm9TZXJ2aWNlXzIuMC9nZXRVbHRyYVNydEZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTI1JnBhZ2VObz0xJmRhdGFUeXBlPWpzb24mYmFzZV9kYXRlPSR7QkFTRV9EQVRFfSZiYXNlX3RpbWU9JHtCQVNFX1RJTUV9Jm54PSR7bnh9Jm55PSR7bnl9YFxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW07XG4gICAgICBjb25zdCBza3kgPSByZXN1bHQuZmlsdGVyKChsaXN0OiBBcGlSZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY2F0ZWdvcnkgPT09IFwiU0tZXCI7XG4gICAgICB9KTtcbiAgICAgIHNldChkYXRhLCBcInNreVwiLCBza3lbMF0uZmNzdFZhbHVlKTtcbiAgICB9KTtcblxuICAvKipcbiAgICog64u57J28IOy1nOyggOq4sOyYqCwg7LWc6rOg6riw7JioIOyalOyyrSBhcGlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG54IGdyaWRYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBueSBncmlkWVxuICAgKiBAcGFyYW0ge3N0cmluZ30gQkFTRV9EQVRFIOyalOyyrSDsnbzsnpBcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGF3YWl0IGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwOi8vYXBpcy5kYXRhLmdvLmtyLzEzNjAwMDAvVmlsYWdlRmNzdEluZm9TZXJ2aWNlXzIuMC9nZXRWaWxhZ2VGY3N0P3NlcnZpY2VLZXk9JHtLT1JFQV9XRUFUSEVSX0FQSV9LRVl9Jm51bU9mUm93cz0yNSZwYWdlTm89MiZkYXRhVHlwZT1qc29uJmJhc2VfZGF0ZT0ke0JBU0VfREFURX0mYmFzZV90aW1lPTAyMDAmbng9JHtueH0mbnk9JHtueX1gXG4gICAgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXMuaXRlbTtcbiAgICAgIHJldHVybiByZXN1bHQubWFwKChpdGVtOiBBcGlSZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgc3dpdGNoIChpdGVtLmNhdGVnb3J5KSB7XG4gICAgICAgICAgY2FzZSBcIlRNTlwiOlxuICAgICAgICAgICAgc2V0KGRhdGEsIFwibWluVGVtcFwiLCBpdGVtLmZjc3RWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICBhd2FpdCBheGlvc1xuICAgIC5nZXQoXG4gICAgICBgaHR0cDovL2FwaXMuZGF0YS5nby5rci8xMzYwMDAwL1ZpbGFnZUZjc3RJbmZvU2VydmljZV8yLjAvZ2V0VmlsYWdlRmNzdD9zZXJ2aWNlS2V5PSR7S09SRUFfV0VBVEhFUl9BUElfS0VZfSZudW1PZlJvd3M9MjUmcGFnZU5vPTcmZGF0YVR5cGU9anNvbiZiYXNlX2RhdGU9JHtCQVNFX0RBVEV9JmJhc2VfdGltZT0wMjAwJm54PSR7bnh9Jm55PSR7bnl9YFxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW07XG4gICAgICByZXR1cm4gcmVzdWx0Lm1hcCgoaXRlbTogQXBpUmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS5jYXRlZ29yeSkge1xuICAgICAgICAgIGNhc2UgXCJUTVhcIjpcbiAgICAgICAgICAgIHNldChkYXRhLCBcIm1heFRlbXBcIiwgaXRlbS5mY3N0VmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICByZXR1cm4gZGF0YSBhcyBSZXR1cm5DdXJyZW50V2VhdGhlcjtcbn07XG4iXX0=