"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sunRiseFall = exports.livingInfomation = exports.threeHoursWeather = exports.getMaxMinTemperature = exports.getDailyWeather = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _common = require("../../../../common");

var _global = require("../../../../common/src/global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDailyWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (data) {
    var BASE_DATE = (0, _common.defaultDate)();
    var BASE_TIME = (0, _common.defaultTime)();
    var nx = data.nx,
        ny = data.ny;
    var nowTemperatures = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=10&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=").concat(BASE_TIME, "&nx=").concat(nx ? nx : 60, "&ny=").concat(ny ? ny : 127)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.filter(function (item) {
        return item.category === "T1H" || item.category === "REH" || item.category === "RN1" || item.category === "VEC" || item.category === "WSD";
      });
    });
    var newSky = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=50&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=").concat(BASE_TIME, "&nx=").concat(nx ? nx : 60, "&ny=").concat(ny ? ny : 127)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.filter(function (item) {
        return item.category === "SKY";
      });
    });
    var minMax = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=40&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=0200&nx=").concat(nx ? nx : 60, "&ny=").concat(ny ? ny : 127)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.filter(function (item) {
        return item.category === "TMX" || item.category === "TMN";
      });
    });
    var currentWeather = {
      reh: nowTemperatures[0].obsrValue,
      rn1: nowTemperatures[1].obsrValue,
      t1h: nowTemperatures[2].obsrValue,
      vec: nowTemperatures[3].obsrValue,
      wsd: nowTemperatures[4].obsrValue,
      sky: newSky[0].fcstValue,
      tmn: minMax[0].fcstValue,
      tmx: minMax[1].fcstValue
    };
    return currentWeather;
  });

  return function getDailyWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDailyWeather = getDailyWeather;

var getMaxMinTemperature = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var BASE_DATE = (0, _common.defaultDate)();
    var WEEKLY_RES_DATE = (0, _common.checkWeeklyDate)();
    var nx = data.nx,
        ny = data.ny;
    var res = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=40&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=0200&nx=").concat(nx ? nx : 60, "&ny=").concat(ny ? ny : 127)).then(function (res) {
      var result = res.data.response.body.items.item;
      return result.filter(function (item) {
        return item.category === "TMX" || item.category === "TMN";
      });
    });
    var weeklyRes = yield _axios.default.get("http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=10&pageNo=&dataType=json&regId=11D20501&tmFc=").concat(WEEKLY_RES_DATE)).then(function (res) {
      return res.data.response.body.items.item[0];
    });
    var weeklyWeather = yield _axios.default.get("http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=10&pageNo=1&dataType=json&regId=11B00000&tmFc=").concat(WEEKLY_RES_DATE)).then(function (res) {
      return res.data.response.body.items.item[0];
    });
    var weekOut = {
      day3: {
        min: weeklyRes.taMin3,
        max: weeklyRes.taMax3,
        rnstAM: weeklyWeather.rnSt3Am,
        rnstPM: weeklyWeather.rnSt3PM,
        wfAm: weeklyWeather.wf3Am,
        wfPM: weeklyWeather.wf3PM
      },
      day4: {
        min: weeklyRes.taMin4,
        max: weeklyRes.taMax4,
        rnstAM: weeklyWeather.rnSt4Am,
        rnstPM: weeklyWeather.rnSt4PM,
        wfAm: weeklyWeather.wf4Am,
        wfPM: weeklyWeather.wf4PM
      },
      day5: {
        min: weeklyRes.taMin5,
        max: weeklyRes.taMax5,
        rnstAM: weeklyWeather.rnSt5Am,
        rnstPM: weeklyWeather.rnSt5PM,
        wfAm: weeklyWeather.wf5Am,
        wfPM: weeklyWeather.wf5PM
      },
      day6: {
        min: weeklyRes.taMin6,
        max: weeklyRes.taMax6,
        rnstAM: weeklyWeather.rnSt6Am,
        rnstPM: weeklyWeather.rnSt6PM,
        wfAm: weeklyWeather.wf6Am,
        wfPM: weeklyWeather.wf6PM
      },
      day7: {
        min: weeklyRes.taMin7,
        max: weeklyRes.taMax7,
        rnstAM: weeklyWeather.rnSt7Am,
        rnstPM: weeklyWeather.rnSt7PM,
        wfAm: weeklyWeather.wf7Am,
        wfPM: weeklyWeather.wf7PM
      }
    };
    return {
      res: res,
      weekOut: weekOut
    };
  });

  return function getMaxMinTemperature(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMaxMinTemperature = getMaxMinTemperature;

var threeHoursWeather = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (data) {
    var nx = data.nx,
        ny = data.ny;
    var BASE_DATE = (0, _common.defaultDate)();
    var R06 = [];
    var S06 = [];
    var PTY = [];
    var SKY = [];
    var T3H = [];
    var time = (0, _common.changDateFormThreeHoursTime)();
    var res = yield _axios.default.get("http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&numOfRows=180&pageNo=1&dataType=json&base_date=").concat(BASE_DATE, "&base_time=").concat(time, "&nx=").concat(nx ? nx : 60, "&ny=").concat(ny ? ny : 127)).then(function (res) {
      return res.data.response.body.items.item;
    });
    res.map(function (item) {
      switch (item.category) {
        case "R06":
          {
            R06.push({
              date: item.fcstDate,
              time: item.fcstTime,
              value: item.fcstValue
            });
          }
          return;

        case "S06":
          {
            S06.push({
              date: item.fcstDate,
              time: item.fcstTime,
              value: item.fcstValue
            });
          }
          return;

        case "PTY":
          {
            PTY.push({
              date: item.fcstDate,
              time: item.fcstTime,
              value: item.fcstValue
            });
          }
          return;

        case "SKY":
          {
            SKY.push({
              date: item.fcstDate,
              time: item.fcstTime,
              value: item.fcstValue
            });
          }
          return;

        case "T3H":
          {
            T3H.push({
              date: item.fcstDate,
              time: item.fcstTime,
              value: item.fcstValue
            });
          }
          return;

        default:
          return;
      }
    });
    var out = {
      R06: R06,
      PTY: PTY,
      SKY: SKY,
      T3H: T3H,
      S06: S06
    };
    return out;
  });

  return function threeHoursWeather(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.threeHoursWeather = threeHoursWeather;

var livingInfomation = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* () {
    var BASE_DATE = (0, _common.defaultDate)();
    var BASE_TIME = (0, _common.defaultTime)();
    var area = "서울";
    var encoding = encodeURIComponent(area); // const requestDate = changDateFormMiniDust();

    var out = [];
    var res = yield _axios.default.get("http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=".concat(encoding, "&pageNo=1&numOfRows=200&returnType=json&serviceKey=").concat(_global.KOREA_WEATHER_API_KEY, "&ver=1.3")).then(function (res) {
      console.log(res);
      return res.data.response.body.items;
    });
    res.map(function (list) {
      out.push({
        sidoName: list.sidoName,
        pm10Value: list.pm10Value,
        pm25Value: list.pm25Value,
        o3Value: list.o3Value
      });
    }); // const minidust = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?searchDate=${requestDate}&returnType=json&serviceKey=${APIKEY}&numOfRows=50&pageNo=1`).then((res) => {
    //   return res.data.response.body.items;
    // });
    // const minimumDust = formDataMiniDust(minidust);

    var uv = yield _axios.default.get("http://apis.data.go.kr/1360000/LivingWthrIdxService01/getUVIdx?serviceKey=".concat(_global.KOREA_WEATHER_API_KEY, "&dataType=json&areaNo=1100000000&time=").concat(BASE_DATE).concat(BASE_TIME.substr(0, 2))).then(function (res) {
      return res.data.response.body.items.item[0];
    });
    var uvValue = {
      date: uv.date,
      today: uv.today,
      tomorrow: uv.tomorrow,
      theDayAfterTomorrow: uv.theDayAfterTomorrow
    };
    return {
      out: out,
      uvValue: uvValue
    };
  });

  return function livingInfomation() {
    return _ref4.apply(this, arguments);
  };
}();

exports.livingInfomation = livingInfomation;

var sunRiseFall = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* () {
    var BASE_DATE = (0, _common.defaultDate)();
    var area = "서울";
    var encoding = encodeURIComponent(area);
    var res = yield _axios.default.get("http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?location=".concat(encoding, "&locdate=").concat(BASE_DATE, "&ServiceKey=").concat(_global.KOREA_WEATHER_API_KEY)).then(function (res) {
      return res.data.response.body.items.item;
    });
    var output = [];
    output.push({
      sunrise: res.sunrise,
      sunset: res.sunset,
      moonrise: res.moonset,
      moonset: res.moonrise
    });
    return output;
  });

  return function sunRiseFall() {
    return _ref5.apply(this, arguments);
  };
}();

exports.sunRiseFall = sunRiseFall;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL2tvcmVhV2VhdGhlci9zcmMva29yZWEud2VhdGhlci5hcGkudHMiXSwibmFtZXMiOlsiZ2V0RGFpbHlXZWF0aGVyIiwiZGF0YSIsIkJBU0VfREFURSIsIkJBU0VfVElNRSIsIm54IiwibnkiLCJub3dUZW1wZXJhdHVyZXMiLCJheGlvcyIsImdldCIsIktPUkVBX1dFQVRIRVJfQVBJX0tFWSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJyZXNwb25zZSIsImJvZHkiLCJpdGVtcyIsIml0ZW0iLCJmaWx0ZXIiLCJjYXRlZ29yeSIsIm5ld1NreSIsIm1pbk1heCIsImN1cnJlbnRXZWF0aGVyIiwicmVoIiwib2JzclZhbHVlIiwicm4xIiwidDFoIiwidmVjIiwid3NkIiwic2t5IiwiZmNzdFZhbHVlIiwidG1uIiwidG14IiwiZ2V0TWF4TWluVGVtcGVyYXR1cmUiLCJXRUVLTFlfUkVTX0RBVEUiLCJ3ZWVrbHlSZXMiLCJ3ZWVrbHlXZWF0aGVyIiwid2Vla091dCIsImRheTMiLCJtaW4iLCJ0YU1pbjMiLCJtYXgiLCJ0YU1heDMiLCJybnN0QU0iLCJyblN0M0FtIiwicm5zdFBNIiwicm5TdDNQTSIsIndmQW0iLCJ3ZjNBbSIsIndmUE0iLCJ3ZjNQTSIsImRheTQiLCJ0YU1pbjQiLCJ0YU1heDQiLCJyblN0NEFtIiwicm5TdDRQTSIsIndmNEFtIiwid2Y0UE0iLCJkYXk1IiwidGFNaW41IiwidGFNYXg1Iiwicm5TdDVBbSIsInJuU3Q1UE0iLCJ3ZjVBbSIsIndmNVBNIiwiZGF5NiIsInRhTWluNiIsInRhTWF4NiIsInJuU3Q2QW0iLCJyblN0NlBNIiwid2Y2QW0iLCJ3ZjZQTSIsImRheTciLCJ0YU1pbjciLCJ0YU1heDciLCJyblN0N0FtIiwicm5TdDdQTSIsIndmN0FtIiwid2Y3UE0iLCJ0aHJlZUhvdXJzV2VhdGhlciIsIlIwNiIsIlMwNiIsIlBUWSIsIlNLWSIsIlQzSCIsInRpbWUiLCJtYXAiLCJwdXNoIiwiZGF0ZSIsImZjc3REYXRlIiwiZmNzdFRpbWUiLCJ2YWx1ZSIsIm91dCIsImxpdmluZ0luZm9tYXRpb24iLCJhcmVhIiwiZW5jb2RpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsInNpZG9OYW1lIiwicG0xMFZhbHVlIiwicG0yNVZhbHVlIiwibzNWYWx1ZSIsInV2Iiwic3Vic3RyIiwidXZWYWx1ZSIsInRvZGF5IiwidG9tb3Jyb3ciLCJ0aGVEYXlBZnRlclRvbW9ycm93Iiwic3VuUmlzZUZhbGwiLCJvdXRwdXQiLCJzdW5yaXNlIiwic3Vuc2V0IiwibW9vbnJpc2UiLCJtb29uc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsZUFBaUM7QUFBQSwrQkFBRyxXQUFPQyxJQUFQLEVBQWdCO0FBQy9ELFFBQU1DLFNBQVMsR0FBRywwQkFBbEI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsMEJBQWxCO0FBRitELFFBSXZEQyxFQUp1RCxHQUk1Q0gsSUFKNEMsQ0FJdkRHLEVBSnVEO0FBQUEsUUFJbkRDLEVBSm1ELEdBSTVDSixJQUo0QyxDQUluREksRUFKbUQ7QUFNL0QsUUFBTUMsZUFBNkQsU0FBU0MsZUFBTUMsR0FBTiwyRkFBNkZDLDZCQUE3Riw0REFBb0tQLFNBQXBLLHdCQUEyTEMsU0FBM0wsaUJBQTJNQyxFQUFFLEdBQUdBLEVBQUgsR0FBUSxFQUFyTixpQkFBOE5DLEVBQUUsR0FBR0EsRUFBSCxHQUFRLEdBQXhPLEdBQStPSyxJQUEvTyxDQUFvUCxVQUFDQyxHQUFELEVBQVM7QUFDdlUsVUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNWLElBQUosQ0FBU1ksUUFBVCxDQUFrQkMsSUFBbEIsQ0FBdUJDLEtBQXZCLENBQTZCQyxJQUE1QztBQUNBLGFBQU9KLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLFVBQUNELElBQUQsRUFBZ0M7QUFDbkQsZUFBT0EsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLEtBQWxCLElBQTJCRixJQUFJ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O0FBSlYsS0FBaEI7QUFPQSxXQUFPO0FBQUVqQixNQUFBQSxHQUFHLEVBQUhBLEdBQUY7QUFBT2MsTUFBQUEsT0FBTyxFQUFQQTtBQUFQLEtBQVA7QUFDRCxHQXRDNEI7O0FBQUEsa0JBQWhCYixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7Ozs7QUF3Q0EsSUFBTWlCLFdBQVc7QUFBQSxnQ0FBRyxhQUFZO0FBQ3JDLFFBQU0zRyxTQUFTLEdBQUcsMEJBQWxCO0FBQ0EsUUFBTTJGLElBQUksR0FBRyxJQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxrQkFBa0IsQ0FBQ0YsSUFBRCxDQUFuQztBQUNBLFFBQU1sRixHQUFHLFNBQVNKLGVBQU1DLEdBQU4seUdBQTJHc0YsUUFBM0csc0JBQStINUYsU0FBL0gseUJBQXVKTyw2QkFBdkosR0FBZ0xDLElBQWhMLENBQXFMLFVBQUNDLEdBQUQsRUFBUztBQUM5TSxhQUFPQSxHQUFHLENBQUNWLElBQUosQ0FBU1ksUUFBVCxDQUFrQkMsSUFBbEIsQ0FBdUJDLEtBQXZCLENBQTZCQyxJQUFwQztBQUNELEtBRmlCLENBQWxCO0FBSUEsUUFBTThGLE1BQTRCLEdBQUcsRUFBckM7QUFDQUEsSUFBQUEsTUFBTSxDQUFDeEIsSUFBUCxDQUFZO0FBQ1Z5QixNQUFBQSxPQUFPLEVBQUVwRyxHQUFHLENBQUNvRyxPQURIO0FBRVZDLE1BQUFBLE1BQU0sRUFBRXJHLEdBQUcsQ0FBQ3FHLE1BRkY7QUFHVkMsTUFBQUEsUUFBUSxFQUFFdEcsR0FBRyxDQUFDdUcsT0FISjtBQUlWQSxNQUFBQSxPQUFPLEVBQUV2RyxHQUFHLENBQUNzRztBQUpILEtBQVo7QUFPQSxXQUFPSCxNQUFQO0FBQ0QsR0FqQnVCOztBQUFBLGtCQUFYRCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdlb2xvY2F0aW9uUHJvcHMsIGdldExpdmluZ0luZm9ybWF0aW9uUHJvcHMsIGdldFN1blNldFJpc2VQcm9wcywgcmVzdWx0RGFpbHlEYXRhUHJvcHMsIHJlc3VsdERhaWx5VGVtcGVyYXR1cmVQcm9wcywgdGhyZWVIb3VyV2VhdGhlck9wdGlvbiwgdGhyZWVIb3VyV2VhdGhlck91dHB1dCB9IGZyb20gXCJ+L0B0eXBlc1wiO1xuaW1wb3J0IHsgY2hhbmdEYXRlRm9ybVRocmVlSG91cnNUaW1lLCBjaGVja1dlZWtseURhdGUsIGRlZmF1bHREYXRlLCBkZWZhdWx0VGltZSB9IGZyb20gXCJ+L2NvbW1vblwiO1xuaW1wb3J0IHsgS09SRUFfV0VBVEhFUl9BUElfS0VZIH0gZnJvbSBcIn4vY29tbW9uL3NyYy9nbG9iYWxcIjtcblxuZXhwb3J0IGNvbnN0IGdldERhaWx5V2VhdGhlcjogR2VvbG9jYXRpb25Qcm9wcyA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IEJBU0VfREFURSA9IGRlZmF1bHREYXRlKCk7XG4gIGNvbnN0IEJBU0VfVElNRSA9IGRlZmF1bHRUaW1lKCk7XG5cbiAgY29uc3QgeyBueCwgbnkgfSA9IGRhdGE7XG5cbiAgY29uc3Qgbm93VGVtcGVyYXR1cmVzOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8cmVzdWx0RGFpbHlEYXRhUHJvcHM+PiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaXMuZGF0YS5nby5rci8xMzYwMDAwL1ZpbGFnZUZjc3RJbmZvU2VydmljZS9nZXRVbHRyYVNydE5jc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTEwJnBhZ2VObz0xJmRhdGFUeXBlPWpzb24mYmFzZV9kYXRlPSR7QkFTRV9EQVRFfSZiYXNlX3RpbWU9JHtCQVNFX1RJTUV9Jm54PSR7bnggPyBueCA6IDYwfSZueT0ke255ID8gbnkgOiAxMjd9YCkudGhlbigocmVzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcy5pdGVtO1xuICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChpdGVtOiByZXN1bHREYWlseURhdGFQcm9wcykgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnkgPT09IFwiVDFIXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJSRUhcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBcIlJOMVwiIHx8IGl0ZW0uY2F0ZWdvcnkgPT09IFwiVkVDXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJXU0RcIjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgbmV3U2t5OiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8cmVzdWx0RGFpbHlUZW1wZXJhdHVyZVByb3BzPj4gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9WaWxhZ2VGY3N0SW5mb1NlcnZpY2UvZ2V0VWx0cmFTcnRGY3N0P3NlcnZpY2VLZXk9JHtLT1JFQV9XRUFUSEVSX0FQSV9LRVl9Jm51bU9mUm93cz01MCZwYWdlTm89MSZkYXRhVHlwZT1qc29uJmJhc2VfZGF0ZT0ke0JBU0VfREFURX0mYmFzZV90aW1lPSR7QkFTRV9USU1FfSZueD0ke254ID8gbnggOiA2MH0mbnk9JHtueSA/IG55IDogMTI3fWApLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXMuaXRlbTtcbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcigoaXRlbTogeyBjYXRlZ29yeTogc3RyaW5nIH0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmNhdGVnb3J5ID09PSBcIlNLWVwiO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBtaW5NYXg6IFByb21pc2U8QXhpb3NSZXNwb25zZTxyZXN1bHREYWlseVRlbXBlcmF0dXJlUHJvcHM+PiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaXMuZGF0YS5nby5rci8xMzYwMDAwL1ZpbGFnZUZjc3RJbmZvU2VydmljZS9nZXRWaWxhZ2VGY3N0P3NlcnZpY2VLZXk9JHtLT1JFQV9XRUFUSEVSX0FQSV9LRVl9Jm51bU9mUm93cz00MCZwYWdlTm89MSZkYXRhVHlwZT1qc29uJmJhc2VfZGF0ZT0ke0JBU0VfREFURX0mYmFzZV90aW1lPTAyMDAmbng9JHtueCA/IG54IDogNjB9Jm55PSR7bnkgPyBueSA6IDEyN31gKS50aGVuKChyZXMpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW07XG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGl0ZW06IHJlc3VsdERhaWx5VGVtcGVyYXR1cmVQcm9wcykgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnkgPT09IFwiVE1YXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJUTU5cIjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSB7XG4gICAgcmVoOiBub3dUZW1wZXJhdHVyZXNbMF0ub2JzclZhbHVlLFxuICAgIHJuMTogbm93VGVtcGVyYXR1cmVzWzFdLm9ic3JWYWx1ZSxcbiAgICB0MWg6IG5vd1RlbXBlcmF0dXJlc1syXS5vYnNyVmFsdWUsXG4gICAgdmVjOiBub3dUZW1wZXJhdHVyZXNbM10ub2JzclZhbHVlLFxuICAgIHdzZDogbm93VGVtcGVyYXR1cmVzWzRdLm9ic3JWYWx1ZSxcbiAgICBza3k6IG5ld1NreVswXS5mY3N0VmFsdWUsXG4gICAgdG1uOiBtaW5NYXhbMF0uZmNzdFZhbHVlLFxuICAgIHRteDogbWluTWF4WzFdLmZjc3RWYWx1ZSxcbiAgfTtcblxuICByZXR1cm4gY3VycmVudFdlYXRoZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4TWluVGVtcGVyYXR1cmU6IEdlb2xvY2F0aW9uUHJvcHMgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCBCQVNFX0RBVEUgPSBkZWZhdWx0RGF0ZSgpO1xuICBjb25zdCBXRUVLTFlfUkVTX0RBVEUgPSBjaGVja1dlZWtseURhdGUoKTtcblxuICBjb25zdCB7IG54LCBueSB9ID0gZGF0YTtcblxuICBjb25zdCByZXM6IFByb21pc2U8QXhpb3NSZXNwb25zZTxyZXN1bHREYWlseVRlbXBlcmF0dXJlUHJvcHM+PltdID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vYXBpcy5kYXRhLmdvLmtyLzEzNjAwMDAvVmlsYWdlRmNzdEluZm9TZXJ2aWNlL2dldFZpbGFnZUZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTQwJnBhZ2VObz0xJmRhdGFUeXBlPWpzb24mYmFzZV9kYXRlPSR7QkFTRV9EQVRFfSZiYXNlX3RpbWU9MDIwMCZueD0ke254ID8gbnggOiA2MH0mbnk9JHtueSA/IG55IDogMTI3fWApLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXMuaXRlbTtcbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcigoaXRlbTogcmVzdWx0RGFpbHlUZW1wZXJhdHVyZVByb3BzKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5jYXRlZ29yeSA9PT0gXCJUTVhcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBcIlRNTlwiO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB3ZWVrbHlSZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9NaWRGY3N0SW5mb1NlcnZpY2UvZ2V0TWlkVGE/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTEwJnBhZ2VObz0mZGF0YVR5cGU9anNvbiZyZWdJZD0xMUQyMDUwMSZ0bUZjPSR7V0VFS0xZX1JFU19EQVRFfWApLnRoZW4oKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW1bMF07XG4gIH0pO1xuXG4gIGNvbnN0IHdlZWtseVdlYXRoZXIgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9hcGlzLmRhdGEuZ28ua3IvMTM2MDAwMC9NaWRGY3N0SW5mb1NlcnZpY2UvZ2V0TWlkTGFuZEZjc3Q/c2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX0mbnVtT2ZSb3dzPTEwJnBhZ2VObz0xJmRhdGFUeXBlPWpzb24mcmVnSWQ9MTFCMDAwMDAmdG1GYz0ke1dFRUtMWV9SRVNfREFURX1gKS50aGVuKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcy5pdGVtWzBdO1xuICB9KTtcblxuICBjb25zdCB3ZWVrT3V0ID0ge1xuICAgIGRheTM6IHsgbWluOiB3ZWVrbHlSZXMudGFNaW4zLCBtYXg6IHdlZWtseVJlcy50YU1heDMsIHJuc3RBTTogd2Vla2x5V2VhdGhlci5yblN0M0FtLCBybnN0UE06IHdlZWtseVdlYXRoZXIucm5TdDNQTSwgd2ZBbTogd2Vla2x5V2VhdGhlci53ZjNBbSwgd2ZQTTogd2Vla2x5V2VhdGhlci53ZjNQTSB9LFxuICAgIGRheTQ6IHsgbWluOiB3ZWVrbHlSZXMudGFNaW40LCBtYXg6IHdlZWtseVJlcy50YU1heDQsIHJuc3RBTTogd2Vla2x5V2VhdGhlci5yblN0NEFtLCBybnN0UE06IHdlZWtseVdlYXRoZXIucm5TdDRQTSwgd2ZBbTogd2Vla2x5V2VhdGhlci53ZjRBbSwgd2ZQTTogd2Vla2x5V2VhdGhlci53ZjRQTSB9LFxuICAgIGRheTU6IHsgbWluOiB3ZWVrbHlSZXMudGFNaW41LCBtYXg6IHdlZWtseVJlcy50YU1heDUsIHJuc3RBTTogd2Vla2x5V2VhdGhlci5yblN0NUFtLCBybnN0UE06IHdlZWtseVdlYXRoZXIucm5TdDVQTSwgd2ZBbTogd2Vla2x5V2VhdGhlci53ZjVBbSwgd2ZQTTogd2Vla2x5V2VhdGhlci53ZjVQTSB9LFxuICAgIGRheTY6IHsgbWluOiB3ZWVrbHlSZXMudGFNaW42LCBtYXg6IHdlZWtseVJlcy50YU1heDYsIHJuc3RBTTogd2Vla2x5V2VhdGhlci5yblN0NkFtLCBybnN0UE06IHdlZWtseVdlYXRoZXIucm5TdDZQTSwgd2ZBbTogd2Vla2x5V2VhdGhlci53ZjZBbSwgd2ZQTTogd2Vla2x5V2VhdGhlci53ZjZQTSB9LFxuICAgIGRheTc6IHsgbWluOiB3ZWVrbHlSZXMudGFNaW43LCBtYXg6IHdlZWtseVJlcy50YU1heDcsIHJuc3RBTTogd2Vla2x5V2VhdGhlci5yblN0N0FtLCBybnN0UE06IHdlZWtseVdlYXRoZXIucm5TdDdQTSwgd2ZBbTogd2Vla2x5V2VhdGhlci53ZjdBbSwgd2ZQTTogd2Vla2x5V2VhdGhlci53ZjdQTSB9LFxuICB9O1xuXG4gIHJldHVybiB7IHJlcywgd2Vla091dCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRocmVlSG91cnNXZWF0aGVyOiBHZW9sb2NhdGlvblByb3BzID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgeyBueCwgbnkgfSA9IGRhdGE7XG4gIGNvbnN0IEJBU0VfREFURSA9IGRlZmF1bHREYXRlKCk7XG5cbiAgY29uc3QgUjA2OiB0aHJlZUhvdXJXZWF0aGVyT3V0cHV0W10gPSBbXTtcbiAgY29uc3QgUzA2OiB0aHJlZUhvdXJXZWF0aGVyT3V0cHV0W10gPSBbXTtcbiAgY29uc3QgUFRZOiB0aHJlZUhvdXJXZWF0aGVyT3V0cHV0W10gPSBbXTtcbiAgY29uc3QgU0tZOiB0aHJlZUhvdXJXZWF0aGVyT3V0cHV0W10gPSBbXTtcbiAgY29uc3QgVDNIOiB0aHJlZUhvdXJXZWF0aGVyT3V0cHV0W10gPSBbXTtcblxuICBjb25zdCB0aW1lID0gY2hhbmdEYXRlRm9ybVRocmVlSG91cnNUaW1lKCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaXMuZGF0YS5nby5rci8xMzYwMDAwL1ZpbGFnZUZjc3RJbmZvU2VydmljZS9nZXRWaWxhZ2VGY3N0P3NlcnZpY2VLZXk9JHtLT1JFQV9XRUFUSEVSX0FQSV9LRVl9Jm51bU9mUm93cz0xODAmcGFnZU5vPTEmZGF0YVR5cGU9anNvbiZiYXNlX2RhdGU9JHtCQVNFX0RBVEV9JmJhc2VfdGltZT0ke3RpbWV9Jm54PSR7bnggPyBueCA6IDYwfSZueT0ke255ID8gbnkgOiAxMjd9YCkudGhlbigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXMuaXRlbTtcbiAgfSk7XG5cbiAgcmVzLm1hcCgoaXRlbTogdGhyZWVIb3VyV2VhdGhlck9wdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoaXRlbS5jYXRlZ29yeSkge1xuICAgICAgY2FzZSBcIlIwNlwiOlxuICAgICAgICB7XG4gICAgICAgICAgUjA2LnB1c2goe1xuICAgICAgICAgICAgZGF0ZTogaXRlbS5mY3N0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGl0ZW0uZmNzdFRpbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS5mY3N0VmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcIlMwNlwiOlxuICAgICAgICB7XG4gICAgICAgICAgUzA2LnB1c2goe1xuICAgICAgICAgICAgZGF0ZTogaXRlbS5mY3N0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGl0ZW0uZmNzdFRpbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS5mY3N0VmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcIlBUWVwiOlxuICAgICAgICB7XG4gICAgICAgICAgUFRZLnB1c2goe1xuICAgICAgICAgICAgZGF0ZTogaXRlbS5mY3N0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGl0ZW0uZmNzdFRpbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS5mY3N0VmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcIlNLWVwiOlxuICAgICAgICB7XG4gICAgICAgICAgU0tZLnB1c2goe1xuICAgICAgICAgICAgZGF0ZTogaXRlbS5mY3N0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGl0ZW0uZmNzdFRpbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS5mY3N0VmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcIlQzSFwiOlxuICAgICAgICB7XG4gICAgICAgICAgVDNILnB1c2goe1xuICAgICAgICAgICAgZGF0ZTogaXRlbS5mY3N0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGl0ZW0uZmNzdFRpbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS5mY3N0VmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb3V0ID0geyBSMDYsIFBUWSwgU0tZLCBUM0gsIFMwNiB9O1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5leHBvcnQgY29uc3QgbGl2aW5nSW5mb21hdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgQkFTRV9EQVRFID0gZGVmYXVsdERhdGUoKTtcbiAgY29uc3QgQkFTRV9USU1FID0gZGVmYXVsdFRpbWUoKTtcbiAgY29uc3QgYXJlYSA9IFwi7ISc7Jq4XCI7XG4gIGNvbnN0IGVuY29kaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KGFyZWEpO1xuICAvLyBjb25zdCByZXF1ZXN0RGF0ZSA9IGNoYW5nRGF0ZUZvcm1NaW5pRHVzdCgpO1xuICBjb25zdCBvdXQ6IGdldExpdmluZ0luZm9ybWF0aW9uUHJvcHNbXSA9IFtdO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaXMuZGF0YS5nby5rci9CNTUyNTg0L0FycGx0bkluZm9ySW5xaXJlU3ZjL2dldEN0cHJ2blJsdG1NZXN1cmVEbnN0eT9zaWRvTmFtZT0ke2VuY29kaW5nfSZwYWdlTm89MSZudW1PZlJvd3M9MjAwJnJldHVyblR5cGU9anNvbiZzZXJ2aWNlS2V5PSR7S09SRUFfV0VBVEhFUl9BUElfS0VZfSZ2ZXI9MS4zYCkudGhlbigocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcztcbiAgfSk7XG4gIHJlcy5tYXAoKGxpc3Q6IGdldExpdmluZ0luZm9ybWF0aW9uUHJvcHMpID0+IHtcbiAgICBvdXQucHVzaCh7XG4gICAgICBzaWRvTmFtZTogbGlzdC5zaWRvTmFtZSxcbiAgICAgIHBtMTBWYWx1ZTogbGlzdC5wbTEwVmFsdWUsXG4gICAgICBwbTI1VmFsdWU6IGxpc3QucG0yNVZhbHVlLFxuICAgICAgbzNWYWx1ZTogbGlzdC5vM1ZhbHVlLFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBjb25zdCBtaW5pZHVzdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaXMuZGF0YS5nby5rci9CNTUyNTg0L0FycGx0bkluZm9ySW5xaXJlU3ZjL2dldE1pbnVEdXN0V2Vla0ZyY3N0RHNwdGg/c2VhcmNoRGF0ZT0ke3JlcXVlc3REYXRlfSZyZXR1cm5UeXBlPWpzb24mc2VydmljZUtleT0ke0FQSUtFWX0mbnVtT2ZSb3dzPTUwJnBhZ2VObz0xYCkudGhlbigocmVzKSA9PiB7XG4gIC8vICAgcmV0dXJuIHJlcy5kYXRhLnJlc3BvbnNlLmJvZHkuaXRlbXM7XG4gIC8vIH0pO1xuICAvLyBjb25zdCBtaW5pbXVtRHVzdCA9IGZvcm1EYXRhTWluaUR1c3QobWluaWR1c3QpO1xuXG4gIGNvbnN0IHV2ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vYXBpcy5kYXRhLmdvLmtyLzEzNjAwMDAvTGl2aW5nV3RocklkeFNlcnZpY2UwMS9nZXRVVklkeD9zZXJ2aWNlS2V5PSR7S09SRUFfV0VBVEhFUl9BUElfS0VZfSZkYXRhVHlwZT1qc29uJmFyZWFObz0xMTAwMDAwMDAwJnRpbWU9JHtCQVNFX0RBVEV9JHtCQVNFX1RJTUUuc3Vic3RyKDAsIDIpfWApLnRoZW4oKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMuZGF0YS5yZXNwb25zZS5ib2R5Lml0ZW1zLml0ZW1bMF07XG4gIH0pO1xuXG4gIGNvbnN0IHV2VmFsdWUgPSB7XG4gICAgZGF0ZTogdXYuZGF0ZSxcbiAgICB0b2RheTogdXYudG9kYXksXG4gICAgdG9tb3Jyb3c6IHV2LnRvbW9ycm93LFxuICAgIHRoZURheUFmdGVyVG9tb3Jyb3c6IHV2LnRoZURheUFmdGVyVG9tb3Jyb3csXG4gIH07XG5cbiAgcmV0dXJuIHsgb3V0LCB1dlZhbHVlIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3VuUmlzZUZhbGwgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IEJBU0VfREFURSA9IGRlZmF1bHREYXRlKCk7XG4gIGNvbnN0IGFyZWEgPSBcIuyEnOyauFwiO1xuICBjb25zdCBlbmNvZGluZyA9IGVuY29kZVVSSUNvbXBvbmVudChhcmVhKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vYXBpcy5kYXRhLmdvLmtyL0IwOTAwNDEvb3BlbmFwaS9zZXJ2aWNlL1Jpc2VTZXRJbmZvU2VydmljZS9nZXRBcmVhUmlzZVNldEluZm8/bG9jYXRpb249JHtlbmNvZGluZ30mbG9jZGF0ZT0ke0JBU0VfREFURX0mU2VydmljZUtleT0ke0tPUkVBX1dFQVRIRVJfQVBJX0tFWX1gKS50aGVuKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2UuYm9keS5pdGVtcy5pdGVtO1xuICB9KTtcblxuICBjb25zdCBvdXRwdXQ6IGdldFN1blNldFJpc2VQcm9wc1tdID0gW107XG4gIG91dHB1dC5wdXNoKHtcbiAgICBzdW5yaXNlOiByZXMuc3VucmlzZSxcbiAgICBzdW5zZXQ6IHJlcy5zdW5zZXQsXG4gICAgbW9vbnJpc2U6IHJlcy5tb29uc2V0LFxuICAgIG1vb25zZXQ6IHJlcy5tb29ucmlzZSxcbiAgfSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn07XG4iXX0=