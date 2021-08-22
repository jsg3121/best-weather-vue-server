"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geolocation = void 0;

var _ = require("../../../..");

var _data = _interopRequireDefault(require("../../../../database/src/geolocate/data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkGeolocation = function checkGeolocation(locate) {
  var latitude = parseFloat(locate.latitude);
  var longitude = parseFloat(locate.longitude);
  console.log(latitude);
  console.log(longitude);
  var minLat = latitude;
  var minLon = longitude;
  var locateIdx = 0;

  for (var i = 0; i < _data.default.length; i++) {
    var absLat = Math.abs(parseFloat(_data.default[i].latitudePerSec) - latitude);
    var absLon = Math.abs(parseFloat(_data.default[i].longitudePerSec) - longitude);

    if (absLat == minLat) {
      if (absLon == minLon) {
        locateIdx = i;
      } else if (absLon < minLon) {
        minLon = absLon;
        locateIdx = i;
      }
    } else if (absLat < minLat) {
      if (absLon == minLon) {
        minLat = absLat;
        locateIdx = i;
      } else if (absLon < minLon) {
        minLat = absLat;
        minLon = absLon;
        locateIdx = i;
      }
    }
  }

  var result = _data.default[locateIdx];
  return result;
};

var geolocation = function geolocation() {
  // #TODO : check axios nethods 'post' dose not recieve request body
  _.app.get("/geolocation", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (req, res) {
      console.log(req.query);
      var payload = req.query;
      var location = checkGeolocation(payload);
      console.log(location);
      res.send(location);
      res.end();
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.geolocation = geolocation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9nZW9sb2NhdGlvbi9zcmMvZ2VvbG9jYXRpb24udHMiXSwibmFtZXMiOlsiY2hlY2tHZW9sb2NhdGlvbiIsImxvY2F0ZSIsImxhdGl0dWRlIiwicGFyc2VGbG9hdCIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJtaW5MYXQiLCJtaW5Mb24iLCJsb2NhdGVJZHgiLCJpIiwibG9jYXRlRGF0YSIsImxlbmd0aCIsImFic0xhdCIsIk1hdGgiLCJhYnMiLCJsYXRpdHVkZVBlclNlYyIsImFic0xvbiIsImxvbmdpdHVkZVBlclNlYyIsInJlc3VsdCIsImdlb2xvY2F0aW9uIiwiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwicXVlcnkiLCJwYXlsb2FkIiwibG9jYXRpb24iLCJzZW5kIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBMkJBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsTUFBRCxFQUF3QztBQUMvRCxNQUFNQyxRQUFnQixHQUFHQyxVQUFVLENBQUNGLE1BQU0sQ0FBQ0MsUUFBUixDQUFuQztBQUNBLE1BQU1FLFNBQWlCLEdBQUdELFVBQVUsQ0FBQ0YsTUFBTSxDQUFDRyxTQUFSLENBQXBDO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFaO0FBRUEsTUFBSUcsTUFBTSxHQUFHTCxRQUFiO0FBQ0EsTUFBSU0sTUFBTSxHQUFHSixTQUFiO0FBQ0EsTUFBSUssU0FBUyxHQUFHLENBQWhCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsY0FBV0MsTUFBL0IsRUFBdUNGLENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsUUFBSUcsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1osVUFBVSxDQUFDUSxjQUFXRCxDQUFYLEVBQWNNLGNBQWYsQ0FBVixHQUEyQ2QsUUFBcEQsQ0FBYjtBQUNBLFFBQUllLE1BQU0sR0FBR0gsSUFBSSxDQUFDQyxHQUFMLENBQVNaLFVBQVUsQ0FBQ1EsY0FBV0QsQ0FBWCxFQUFjUSxlQUFmLENBQVYsR0FBNENkLFNBQXJELENBQWI7O0FBRUEsUUFBSVMsTUFBTSxJQUFJTixNQUFkLEVBQXNCO0FBQ3BCLFVBQUlVLE1BQU0sSUFBSVQsTUFBZCxFQUFzQjtBQUNwQkMsUUFBQUEsU0FBUyxHQUFHQyxDQUFaO0FBQ0QsT0FGRCxNQUVPLElBQUlPLE1BQU0sR0FBR1QsTUFBYixFQUFxQjtBQUMxQkEsUUFBQUEsTUFBTSxHQUFHUyxNQUFUO0FBQ0FSLFFBQUFBLFNBQVMsR0FBR0MsQ0FBWjtBQUNEO0FBQ0YsS0FQRCxNQU9PLElBQUlHLE1BQU0sR0FBR04sTUFBYixFQUFxQjtBQUMxQixVQUFJVSxNQUFNLElBQUlULE1BQWQsRUFBc0I7QUFDcEJELFFBQUFBLE1BQU0sR0FBR00sTUFBVDtBQUNBSixRQUFBQSxTQUFTLEdBQUdDLENBQVo7QUFDRCxPQUhELE1BR08sSUFBSU8sTUFBTSxHQUFHVCxNQUFiLEVBQXFCO0FBQzFCRCxRQUFBQSxNQUFNLEdBQUdNLE1BQVQ7QUFDQUwsUUFBQUEsTUFBTSxHQUFHUyxNQUFUO0FBQ0FSLFFBQUFBLFNBQVMsR0FBR0MsQ0FBWjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFNUyxNQUFNLEdBQUdSLGNBQVdGLFNBQVgsQ0FBZjtBQUVBLFNBQU9VLE1BQVA7QUFDRCxDQXBDRDs7QUFzQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQjtBQUNBQyxRQUFJQyxHQUFKLENBQVEsY0FBUjtBQUFBLGlDQUF3QixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDMUNuQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWlCLEdBQUcsQ0FBQ0UsS0FBaEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdILEdBQUcsQ0FBQ0UsS0FBcEI7QUFDQSxVQUFNRSxRQUFRLEdBQUczQixnQkFBZ0IsQ0FBQzBCLE9BQUQsQ0FBakM7QUFDQXJCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUIsUUFBWjtBQUNBSCxNQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBU0QsUUFBVDtBQUNBSCxNQUFBQSxHQUFHLENBQUNLLEdBQUo7QUFDRCxLQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUQsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCB9IGZyb20gXCJ+L2luZGV4XCI7XG5pbXBvcnQgbG9jYXRlRGF0YSBmcm9tIFwifi9kYXRhYmFzZS9zcmMvZ2VvbG9jYXRlL2RhdGEuanNvblwiO1xuXG50eXBlIExvY2F0ZVR5cGUgPSB7XG4gIGxhdGl0dWRlOiBzdHJpbmc7XG4gIGxvbmdpdHVkZTogc3RyaW5nO1xufTtcblxudHlwZSBSZXR1cm5Mb2NhdGlvbiA9IHtcbiAgbnVtOiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgZGl2aXNpb25Db2RlOiBzdHJpbmc7XG4gIGRlcHRoMTogc3RyaW5nO1xuICBkZXB0aDI6IHN0cmluZyB8IFwiXCI7XG4gIGRlcHRoMzogc3RyaW5nIHwgXCJcIjtcbiAgZ3JpZFg6IHN0cmluZztcbiAgZ3JpZFk6IHN0cmluZztcbiAgbG9uZ2l0dWRlSG91cjogc3RyaW5nO1xuICBsb25naXR1ZGVNaW46IHN0cmluZztcbiAgbG9uZ2l0dWRlU2VjOiBzdHJpbmc7XG4gIGxhdGl0dWRlSG91cjogc3RyaW5nO1xuICBsYXRpdHVkZU1pbjogc3RyaW5nO1xuICBsYXRpdHVkZVNlYzogc3RyaW5nO1xuICBsb25naXR1ZGVQZXJTZWM6IHN0cmluZztcbiAgbGF0aXR1ZGVQZXJTZWM6IHN0cmluZztcbiAgbG9jYXRpb251cGRhdGU/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBjaGVja0dlb2xvY2F0aW9uID0gKGxvY2F0ZTogTG9jYXRlVHlwZSk6IFJldHVybkxvY2F0aW9uID0+IHtcbiAgY29uc3QgbGF0aXR1ZGU6IG51bWJlciA9IHBhcnNlRmxvYXQobG9jYXRlLmxhdGl0dWRlKTtcbiAgY29uc3QgbG9uZ2l0dWRlOiBudW1iZXIgPSBwYXJzZUZsb2F0KGxvY2F0ZS5sb25naXR1ZGUpO1xuICBjb25zb2xlLmxvZyhsYXRpdHVkZSk7XG4gIGNvbnNvbGUubG9nKGxvbmdpdHVkZSk7XG5cbiAgbGV0IG1pbkxhdCA9IGxhdGl0dWRlO1xuICBsZXQgbWluTG9uID0gbG9uZ2l0dWRlO1xuICBsZXQgbG9jYXRlSWR4ID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0ZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYWJzTGF0ID0gTWF0aC5hYnMocGFyc2VGbG9hdChsb2NhdGVEYXRhW2ldLmxhdGl0dWRlUGVyU2VjKSAtIGxhdGl0dWRlKTtcbiAgICBsZXQgYWJzTG9uID0gTWF0aC5hYnMocGFyc2VGbG9hdChsb2NhdGVEYXRhW2ldLmxvbmdpdHVkZVBlclNlYykgLSBsb25naXR1ZGUpO1xuXG4gICAgaWYgKGFic0xhdCA9PSBtaW5MYXQpIHtcbiAgICAgIGlmIChhYnNMb24gPT0gbWluTG9uKSB7XG4gICAgICAgIGxvY2F0ZUlkeCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGFic0xvbiA8IG1pbkxvbikge1xuICAgICAgICBtaW5Mb24gPSBhYnNMb247XG4gICAgICAgIGxvY2F0ZUlkeCA9IGk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhYnNMYXQgPCBtaW5MYXQpIHtcbiAgICAgIGlmIChhYnNMb24gPT0gbWluTG9uKSB7XG4gICAgICAgIG1pbkxhdCA9IGFic0xhdDtcbiAgICAgICAgbG9jYXRlSWR4ID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoYWJzTG9uIDwgbWluTG9uKSB7XG4gICAgICAgIG1pbkxhdCA9IGFic0xhdDtcbiAgICAgICAgbWluTG9uID0gYWJzTG9uO1xuICAgICAgICBsb2NhdGVJZHggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGxvY2F0ZURhdGFbbG9jYXRlSWR4XSBhcyBSZXR1cm5Mb2NhdGlvbjtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdlb2xvY2F0aW9uID0gKCkgPT4ge1xuICAvLyAjVE9ETyA6IGNoZWNrIGF4aW9zIG5ldGhvZHMgJ3Bvc3QnIGRvc2Ugbm90IHJlY2lldmUgcmVxdWVzdCBib2R5XG4gIGFwcC5nZXQoXCIvZ2VvbG9jYXRpb25cIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcbiAgICBjb25zdCBwYXlsb2FkID0gcmVxLnF1ZXJ5IGFzIExvY2F0ZVR5cGU7XG4gICAgY29uc3QgbG9jYXRpb24gPSBjaGVja0dlb2xvY2F0aW9uKHBheWxvYWQpO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgICByZXMuc2VuZChsb2NhdGlvbik7XG4gICAgcmVzLmVuZCgpO1xuICB9KTtcbn07XG4iXX0=