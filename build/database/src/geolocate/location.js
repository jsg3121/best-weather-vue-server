"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.migrationLocate = void 0;

var _data = _interopRequireDefault(require("./data.json"));

var _client = require("@prisma/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var prisma = new _client.PrismaClient();

var encodingFormat = function encodingFormat(txt) {
  if (txt.indexOf("서울")) {
    return encodeURIComponent("서울");
  } else if (txt.indexOf("부산")) {
    return encodeURIComponent("부산");
  } else if (txt.indexOf("대구")) {
    return encodeURIComponent("대구");
  } else if (txt.indexOf("인천")) {
    return encodeURIComponent("인천");
  } else if (txt.indexOf("광주")) {
    return encodeURIComponent("광주");
  } else if (txt.indexOf("대전")) {
    return encodeURIComponent("대전");
  } else if (txt.indexOf("울산")) {
    return encodeURIComponent("울산");
  } else if (txt.indexOf("경기")) {
    return encodeURIComponent("경기");
  } else if (txt.indexOf("강원")) {
    return encodeURIComponent("강원");
  } else if (txt.indexOf("충북")) {
    return encodeURIComponent("충북");
  } else if (txt.indexOf("충남")) {
    return encodeURIComponent("충남");
  } else if (txt.indexOf("전북")) {
    return encodeURIComponent("전북");
  } else if (txt.indexOf("전남")) {
    return encodeURIComponent("전남");
  } else if (txt.indexOf("경북")) {
    return encodeURIComponent("경북");
  } else if (txt.indexOf("경남")) {
    return encodeURIComponent("경남");
  } else if (txt.indexOf("제주")) {
    return encodeURIComponent("제주");
  } else if (txt.indexOf("세종")) {
    return encodeURIComponent("세종");
  } else return encodeURIComponent("전국");
};

var migrationLocate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    console.log("지역정보 database init....");
    var initData = [];
    console.log("add initData array");

    _data.default.map(function (item, index) {
      console.log("".concat(index, " data \uCD94\uCD9C...."));
      initData.push({
        fullLocation: "".concat(item.depth1, " ").concat(item.depth2, " ").concat(item.depth3, " "),
        location1: item.depth1 ? item.depth1 : "",
        location2: item.depth2 ? item.depth2 : "",
        location3: item.depth3 ? item.depth3 : "",
        locationCode: item.divisionCode,
        weeklyLocatioCode: item.weeklyTemperature,
        weeklySkyLocationCode: item.weeklySky,
        positionNx: Number(item.latitudePerSec),
        positionNy: Number(item.longitudePerSec),
        gridX: Number(item.gridX),
        gridY: Number(item.gridY),
        locationEncoding: encodingFormat(item.depth1)
      });
    });

    var init = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        console.log("add database table init...");

        for (var i = 0; i < initData.length; i++) {
          if (i % 200 === 0) {
            console.log("".concat(i, " data init..."));
          }

          yield prisma.weather_geolocation.create({
            data: initData[i]
          });
        }

        console.log("init closed....");
      });

      return function init() {
        return _ref2.apply(this, arguments);
      };
    }();

    yield init().then(function () {
      console.log("update success");
    }).catch(function (e) {
      console.log(e);
      throw e;
    }).finally( /*#__PURE__*/_asyncToGenerator(function* () {
      yield prisma.$disconnect;
    }));
  });

  return function migrationLocate() {
    return _ref.apply(this, arguments);
  };
}();

exports.migrationLocate = migrationLocate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9zcmMvZ2VvbG9jYXRlL2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsImVuY29kaW5nRm9ybWF0IiwidHh0IiwiaW5kZXhPZiIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1pZ3JhdGlvbkxvY2F0ZSIsImNvbnNvbGUiLCJsb2ciLCJpbml0RGF0YSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwdXNoIiwiZnVsbExvY2F0aW9uIiwiZGVwdGgxIiwiZGVwdGgyIiwiZGVwdGgzIiwibG9jYXRpb24xIiwibG9jYXRpb24yIiwibG9jYXRpb24zIiwibG9jYXRpb25Db2RlIiwiZGl2aXNpb25Db2RlIiwid2Vla2x5TG9jYXRpb0NvZGUiLCJ3ZWVrbHlUZW1wZXJhdHVyZSIsIndlZWtseVNreUxvY2F0aW9uQ29kZSIsIndlZWtseVNreSIsInBvc2l0aW9uTngiLCJOdW1iZXIiLCJsYXRpdHVkZVBlclNlYyIsInBvc2l0aW9uTnkiLCJsb25naXR1ZGVQZXJTZWMiLCJncmlkWCIsImdyaWRZIiwibG9jYXRpb25FbmNvZGluZyIsImluaXQiLCJpIiwibGVuZ3RoIiwid2VhdGhlcl9nZW9sb2NhdGlvbiIsImNyZWF0ZSIsInRoZW4iLCJjYXRjaCIsImUiLCJmaW5hbGx5IiwiJGRpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsb0JBQUosRUFBZjs7QUF3QkEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxHQUFELEVBQXlDO0FBQzlELE1BQUlBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUNyQixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGRCxNQUVPLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUM1QixXQUFPQyxrQkFBa0IsQ0FBQyxJQUFELENBQXpCO0FBQ0QsR0FGTSxNQUVBLE9BQU9BLGtCQUFrQixDQUFDLElBQUQsQ0FBekI7QUFDUixDQXBDRDs7QUFzQ08sSUFBTUMsZUFBZTtBQUFBLCtCQUFHLGFBQVk7QUFDekNDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBRUEsUUFBTUMsUUFBYSxHQUFHLEVBQXRCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaOztBQUVBRSxrQkFBS0MsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBcUJDLEtBQXJCLEVBQXVDO0FBQzlDTixNQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUssS0FBZjtBQUNBSixNQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBYztBQUNaQyxRQUFBQSxZQUFZLFlBQUtILElBQUksQ0FBQ0ksTUFBVixjQUFvQkosSUFBSSxDQUFDSyxNQUF6QixjQUFtQ0wsSUFBSSxDQUFDTSxNQUF4QyxNQURBO0FBRVpDLFFBQUFBLFNBQVMsRUFBRVAsSUFBSSxDQUFDSSxNQUFMLEdBQWNKLElBQUksQ0FBQ0ksTUFBbkIsR0FBNEIsRUFGM0I7QUFHWkksUUFBQUEsU0FBUyxFQUFFUixJQUFJLENBQUNLLE1BQUwsR0FBY0wsSUFBSSxDQUFDSyxNQUFuQixHQUE0QixFQUgzQjtBQUlaSSxRQUFBQSxTQUFTLEVBQUVULElBQUksQ0FBQ00sTUFBTCxHQUFjTixJQUFJLENBQUNNLE1BQW5CLEdBQTRCLEVBSjNCO0FBS1pJLFFBQUFBLFlBQVksRUFBRVYsSUFBSSxDQUFDVyxZQUxQO0FBTVpDLFFBQUFBLGlCQUFpQixFQUFFWixJQUFJLENBQUNhLGlCQU5aO0FBT1pDLFFBQUFBLHFCQUFxQixFQUFFZCxJQUFJLENBQUNlLFNBUGhCO0FBUVpDLFFBQUFBLFVBQVUsRUFBRUMsTUFBTSxDQUFDakIsSUFBSSxDQUFDa0IsY0FBTixDQVJOO0FBU1pDLFFBQUFBLFVBQVUsRUFBRUYsTUFBTSxDQUFDakIsSUFBSSxDQUFDb0IsZUFBTixDQVROO0FBVVpDLFFBQUFBLEtBQUssRUFBRUosTUFBTSxDQUFDakIsSUFBSSxDQUFDcUIsS0FBTixDQVZEO0FBV1pDLFFBQUFBLEtBQUssRUFBRUwsTUFBTSxDQUFDakIsSUFBSSxDQUFDc0IsS0FBTixDQVhEO0FBWVpDLFFBQUFBLGdCQUFnQixFQUFFakMsY0FBYyxDQUFDVSxJQUFJLENBQUNJLE1BQU47QUFacEIsT0FBZDtBQWNELEtBaEJEOztBQWtCQSxRQUFNb0IsSUFBSTtBQUFBLG9DQUFHLGFBQVk7QUFDdkI3QixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjs7QUFDQSxhQUFLLElBQUk2QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNUIsUUFBUSxDQUFDNkIsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsY0FBSUEsQ0FBQyxHQUFHLEdBQUosS0FBWSxDQUFoQixFQUFtQjtBQUNqQjlCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlNkIsQ0FBZjtBQUNEOztBQUNELGdCQUFNckMsTUFBTSxDQUFDdUMsbUJBQVAsQ0FBMkJDLE1BQTNCLENBQWtDO0FBQ3RDOUIsWUFBQUEsSUFBSSxFQUFFRCxRQUFRLENBQUM0QixDQUFEO0FBRHdCLFdBQWxDLENBQU47QUFHRDs7QUFFRDlCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0QsT0FaUzs7QUFBQSxzQkFBSjRCLElBQUk7QUFBQTtBQUFBO0FBQUEsT0FBVjs7QUFjQSxVQUFNQSxJQUFJLEdBQ1BLLElBREcsQ0FDRSxZQUFNO0FBQ1ZsQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNELEtBSEcsRUFJSGtDLEtBSkcsQ0FJRyxVQUFDQyxDQUFELEVBQU87QUFDWnBDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbUMsQ0FBWjtBQUNBLFlBQU1BLENBQU47QUFDRCxLQVBHLEVBUUhDLE9BUkcsaUNBUUssYUFBWTtBQUNuQixZQUFNNUMsTUFBTSxDQUFDNkMsV0FBYjtBQUNELEtBVkcsRUFBTjtBQVdELEdBakQyQjs7QUFBQSxrQkFBZnZDLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbnR5cGUgSnNvbkRhdGFUeXBlID0ge1xuICBudW06IHN0cmluZztcbiAgY291bnRyeT86IHN0cmluZztcbiAgZGl2aXNpb25Db2RlOiBzdHJpbmc7XG4gIHdlZWtseVRlbXBlcmF0dXJlOiBzdHJpbmc7XG4gIHdlZWtseVNreTogc3RyaW5nO1xuICBkZXB0aDE6IHN0cmluZztcbiAgZGVwdGgyPzogc3RyaW5nO1xuICBkZXB0aDM/OiBzdHJpbmc7XG4gIGdyaWRYOiBzdHJpbmc7XG4gIGdyaWRZOiBzdHJpbmc7XG4gIGxvbmdpdHVkZUhvdXI6IHN0cmluZztcbiAgbG9uZ2l0dWRlTWluOiBzdHJpbmc7XG4gIGxvbmdpdHVkZVNlYzogc3RyaW5nO1xuICBsYXRpdHVkZUhvdXI6IHN0cmluZztcbiAgbGF0aXR1ZGVNaW46IHN0cmluZztcbiAgbGF0aXR1ZGVTZWM6IHN0cmluZztcbiAgbG9uZ2l0dWRlUGVyU2VjOiBzdHJpbmc7XG4gIGxhdGl0dWRlUGVyU2VjOiBzdHJpbmc7XG4gIGxvY2F0aW9udXBkYXRlPzogc3RyaW5nO1xufTtcblxuY29uc3QgZW5jb2RpbmdGb3JtYXQgPSAodHh0OiBKc29uRGF0YVR5cGVbXCJkZXB0aDFcIl0pOiBzdHJpbmcgPT4ge1xuICBpZiAodHh0LmluZGV4T2YoXCLshJzsmrhcIikpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KFwi7ISc7Jq4XCIpO1xuICB9IGVsc2UgaWYgKHR4dC5pbmRleE9mKFwi67aA7IKwXCIpKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcIuu2gOyCsFwiKTtcbiAgfSBlbHNlIGlmICh0eHQuaW5kZXhPZihcIuuMgOq1rFwiKSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoXCLrjIDqtaxcIik7XG4gIH0gZWxzZSBpZiAodHh0LmluZGV4T2YoXCLsnbjsspxcIikpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KFwi7J247LKcXCIpO1xuICB9IGVsc2UgaWYgKHR4dC5pbmRleE9mKFwi6rSR7KO8XCIpKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcIuq0keyjvFwiKTtcbiAgfSBlbHNlIGlmICh0eHQuaW5kZXhPZihcIuuMgOyghFwiKSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoXCLrjIDsoIRcIik7XG4gIH0gZWxzZSBpZiAodHh0LmluZGV4T2YoXCLsmrjsgrBcIikpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KFwi7Jq47IKwXCIpO1xuICB9IGVsc2UgaWYgKHR4dC5pbmRleE9mKFwi6rK96riwXCIpKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcIuqyveq4sFwiKTtcbiAgfSBlbHNlIGlmICh0eHQuaW5kZXhPZihcIuqwleybkFwiKSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoXCLqsJXsm5BcIik7XG4gIH0gZWxzZSBpZiAodHh0LmluZGV4T2YoXCLstqnrtoFcIikpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KFwi7Lap67aBXCIpO1xuICB9IGVsc2UgaWYgKHR4dC5pbmRleE9mKFwi7Lap64KoXCIpKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcIuy2qeuCqFwiKTtcbiAgfSBlbHNlIGlmICh0eHQuaW5kZXhPZihcIuyghOu2gVwiKSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoXCLsoITrtoFcIik7XG4gIH0gZWxzZSBpZiAodHh0LmluZGV4T2YoXCLsoITrgqhcIikpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KFwi7KCE64KoXCIpO1xuICB9IGVsc2UgaWYgKHR4dC5pbmRleE9mKFwi6rK967aBXCIpKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcIuqyveu2gVwiKTtcbiAgfSBlbHNlIGlmICh0eHQuaW5kZXhPZihcIuqyveuCqFwiKSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoXCLqsr3rgqhcIik7XG4gIH0gZWxzZSBpZiAodHh0LmluZGV4T2YoXCLsoJzso7xcIikpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KFwi7KCc7KO8XCIpO1xuICB9IGVsc2UgaWYgKHR4dC5pbmRleE9mKFwi7IS47KKFXCIpKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcIuyEuOyihVwiKTtcbiAgfSBlbHNlIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoXCLsoITqta1cIik7XG59O1xuXG5leHBvcnQgY29uc3QgbWlncmF0aW9uTG9jYXRlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIuyngOyXreygleuztCBkYXRhYmFzZSBpbml0Li4uLlwiKTtcblxuICBjb25zdCBpbml0RGF0YTogYW55ID0gW107XG4gIGNvbnNvbGUubG9nKFwiYWRkIGluaXREYXRhIGFycmF5XCIpO1xuXG4gIGRhdGEubWFwKChpdGVtOiBKc29uRGF0YVR5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtpbmRleH0gZGF0YSDstpTstpwuLi4uYCk7XG4gICAgaW5pdERhdGEucHVzaCh7XG4gICAgICBmdWxsTG9jYXRpb246IGAke2l0ZW0uZGVwdGgxfSAke2l0ZW0uZGVwdGgyfSAke2l0ZW0uZGVwdGgzfSBgLFxuICAgICAgbG9jYXRpb24xOiBpdGVtLmRlcHRoMSA/IGl0ZW0uZGVwdGgxIDogXCJcIixcbiAgICAgIGxvY2F0aW9uMjogaXRlbS5kZXB0aDIgPyBpdGVtLmRlcHRoMiA6IFwiXCIsXG4gICAgICBsb2NhdGlvbjM6IGl0ZW0uZGVwdGgzID8gaXRlbS5kZXB0aDMgOiBcIlwiLFxuICAgICAgbG9jYXRpb25Db2RlOiBpdGVtLmRpdmlzaW9uQ29kZSxcbiAgICAgIHdlZWtseUxvY2F0aW9Db2RlOiBpdGVtLndlZWtseVRlbXBlcmF0dXJlLFxuICAgICAgd2Vla2x5U2t5TG9jYXRpb25Db2RlOiBpdGVtLndlZWtseVNreSxcbiAgICAgIHBvc2l0aW9uTng6IE51bWJlcihpdGVtLmxhdGl0dWRlUGVyU2VjKSxcbiAgICAgIHBvc2l0aW9uTnk6IE51bWJlcihpdGVtLmxvbmdpdHVkZVBlclNlYyksXG4gICAgICBncmlkWDogTnVtYmVyKGl0ZW0uZ3JpZFgpLFxuICAgICAgZ3JpZFk6IE51bWJlcihpdGVtLmdyaWRZKSxcbiAgICAgIGxvY2F0aW9uRW5jb2Rpbmc6IGVuY29kaW5nRm9ybWF0KGl0ZW0uZGVwdGgxKSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImFkZCBkYXRhYmFzZSB0YWJsZSBpbml0Li4uXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpICUgMjAwID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2l9IGRhdGEgaW5pdC4uLmApO1xuICAgICAgfVxuICAgICAgYXdhaXQgcHJpc21hLndlYXRoZXJfZ2VvbG9jYXRpb24uY3JlYXRlKHtcbiAgICAgICAgZGF0YTogaW5pdERhdGFbaV0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImluaXQgY2xvc2VkLi4uLlwiKTtcbiAgfTtcblxuICBhd2FpdCBpbml0KClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBzdWNjZXNzXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfSlcbiAgICAuZmluYWxseShhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3Q7XG4gICAgfSk7XG59O1xuIl19