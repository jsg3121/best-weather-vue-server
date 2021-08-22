"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weeklyWeatherKoreaDatabase = void 0;

var _client = require("@prisma/client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var weeklyWeatherKoreaDatabase = function weeklyWeatherKoreaDatabase(data) {
  var prisma = new _client.PrismaClient();

  var main = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (data) {
      return yield prisma.weatherKoWeekly.create({
        data: data
      }).then(function (res) {
        if (res !== null) {
          return false;
        }

        return true;
      });
    });

    return function main(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return main(data).then(function (res) {
    return res;
  }).catch(function (e) {
    return e;
  }).finally( /*#__PURE__*/_asyncToGenerator(function* () {
    yield prisma.$disconnect();
  }));
};

exports.weeklyWeatherKoreaDatabase = weeklyWeatherKoreaDatabase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9zcmMva29yZWFXZWF0aGVyL3NyYy9rb3JlYS5kYXRhYmFzZS50cyJdLCJuYW1lcyI6WyJ3ZWVrbHlXZWF0aGVyS29yZWFEYXRhYmFzZSIsImRhdGEiLCJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJtYWluIiwid2VhdGhlcktvV2Vla2x5IiwiY3JlYXRlIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZSIsImZpbmFsbHkiLCIkZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNDLElBQUQsRUFBVTtBQUNsRCxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsb0JBQUosRUFBZjs7QUFDQSxNQUFNQyxJQUFJO0FBQUEsaUNBQUcsV0FBT0gsSUFBUCxFQUFnQjtBQUMzQixtQkFBYUMsTUFBTSxDQUFDRyxlQUFQLENBQXVCQyxNQUF2QixDQUE4QjtBQUFFTCxRQUFBQSxJQUFJLEVBQUVBO0FBQVIsT0FBOUIsRUFBOENNLElBQTlDLENBQW1ELFVBQUNDLEdBQUQsRUFBUztBQUN2RSxZQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQixpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FMWSxDQUFiO0FBTUQsS0FQUzs7QUFBQSxvQkFBSkosSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQVNBLFNBQU9BLElBQUksQ0FBQ0gsSUFBRCxDQUFKLENBQ0pNLElBREksQ0FDQyxVQUFDQyxHQUFELEVBQVM7QUFDYixXQUFPQSxHQUFQO0FBQ0QsR0FISSxFQUlKQyxLQUpJLENBSUUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1osV0FBT0EsQ0FBUDtBQUNELEdBTkksRUFPSkMsT0FQSSxpQ0FPSSxhQUFZO0FBQ25CLFVBQU1ULE1BQU0sQ0FBQ1UsV0FBUCxFQUFOO0FBQ0QsR0FUSSxFQUFQO0FBVUQsQ0FyQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB3ZWVrbHlXZWF0aGVyS29yZWFEYXRhYmFzZSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIGNvbnN0IG1haW4gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS53ZWF0aGVyS29XZWVrbHkuY3JlYXRlKHsgZGF0YTogZGF0YSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBtYWluKGRhdGEpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICB9KTtcclxufTtcclxuIl19