"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geolocation = void 0;

var _ = require("../../../..");

var _client = require("@prisma/client");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var prisma = new _client.PrismaClient();

var checkGeolocation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (locate) {
    var latitude = parseFloat(locate.latitude);
    var longitude = parseFloat(locate.longitude);
    var minLat = latitude;
    var minLon = longitude;
    var location = prisma.$queryRaw(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  SELECT *,\t( 6371 * acos( cos( radians(", ") ) * cos( radians(positionNx) ) * cos( radians(positionNy) - radians(", ") ) + sin( radians(", ") ) * sin( radians(positionNx) ) ) ) AS distance\n  FROM\n    weather_geolocation wg \n  ORDER BY distance LIMIT 1;\n  "])), minLat, minLon, minLat);
    return yield location.then(function (data) {
      return data[0];
    });
  });

  return function checkGeolocation(_x) {
    return _ref.apply(this, arguments);
  };
}();

var geolocation = function geolocation() {
  _.app.get("/geolocation", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      var payload = req.query;
      console.log(payload);
      var location = yield checkGeolocation(payload);
      console.log(location);
      res.send(location);
      res.end();
    });

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
};

exports.geolocation = geolocation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlL3NyYy9nZW9sb2NhdGlvbi9zcmMvZ2VvbG9jYXRpb24udHMiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiY2hlY2tHZW9sb2NhdGlvbiIsImxvY2F0ZSIsImxhdGl0dWRlIiwicGFyc2VGbG9hdCIsImxvbmdpdHVkZSIsIm1pbkxhdCIsIm1pbkxvbiIsImxvY2F0aW9uIiwiJHF1ZXJ5UmF3IiwidGhlbiIsImRhdGEiLCJnZW9sb2NhdGlvbiIsImFwcCIsImdldCIsInJlcSIsInJlcyIsInBheWxvYWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFRQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsb0JBQUosRUFBZjs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFBQSwrQkFBRyxXQUFPQyxNQUFQLEVBQWdFO0FBQ3ZGLFFBQU1DLFFBQWdCLEdBQUdDLFVBQVUsQ0FBQ0YsTUFBTSxDQUFDQyxRQUFSLENBQW5DO0FBQ0EsUUFBTUUsU0FBaUIsR0FBR0QsVUFBVSxDQUFDRixNQUFNLENBQUNHLFNBQVIsQ0FBcEM7QUFFQSxRQUFJQyxNQUFNLEdBQUdILFFBQWI7QUFDQSxRQUFJSSxNQUFNLEdBQUdGLFNBQWI7QUFFQSxRQUFNRyxRQUFnRCxHQUFHVCxNQUFNLENBQUNVLFNBQVYsNlVBQ2RILE1BRGMsRUFDaUVDLE1BRGpFLEVBQzZGRCxNQUQ3RixDQUF0RDtBQU9BLGlCQUFhRSxRQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDbkMsYUFBT0EsSUFBSSxDQUFDLENBQUQsQ0FBWDtBQUNELEtBRlksQ0FBYjtBQUdELEdBakJxQjs7QUFBQSxrQkFBaEJWLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFtQk8sSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQkMsUUFBSUMsR0FBSixDQUFRLGNBQVI7QUFBQSxrQ0FBd0IsV0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQzFDLFVBQU1DLE9BQU8sR0FBR0YsR0FBRyxDQUFDRyxLQUFwQjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUVBLFVBQU1ULFFBQVEsU0FBU1AsZ0JBQWdCLENBQUNnQixPQUFELENBQXZDO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixRQUFaO0FBQ0FRLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTYixRQUFUO0FBQ0FRLE1BQUFBLEdBQUcsQ0FBQ00sR0FBSjtBQUNELEtBUkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIn4vaW5kZXhcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCwgUHJpc21hUHJvbWlzZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgV2VhdGhlckdlb2xvY2F0aW9uVHlwZXMgfSBmcm9tIFwifi9AdHlwZXMvc3JjL2RhdGFiYXNlLnR5cGVzXCI7XG5cbnR5cGUgTG9jYXRlVHlwZSA9IHtcbiAgbGF0aXR1ZGU6IHN0cmluZztcbiAgbG9uZ2l0dWRlOiBzdHJpbmc7XG59O1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmNvbnN0IGNoZWNrR2VvbG9jYXRpb24gPSBhc3luYyAobG9jYXRlOiBMb2NhdGVUeXBlKTogUHJvbWlzZTxXZWF0aGVyR2VvbG9jYXRpb25UeXBlcz4gPT4ge1xuICBjb25zdCBsYXRpdHVkZTogbnVtYmVyID0gcGFyc2VGbG9hdChsb2NhdGUubGF0aXR1ZGUpO1xuICBjb25zdCBsb25naXR1ZGU6IG51bWJlciA9IHBhcnNlRmxvYXQobG9jYXRlLmxvbmdpdHVkZSk7XG5cbiAgbGV0IG1pbkxhdCA9IGxhdGl0dWRlO1xuICBsZXQgbWluTG9uID0gbG9uZ2l0dWRlO1xuXG4gIGNvbnN0IGxvY2F0aW9uOiBQcmlzbWFQcm9taXNlPFdlYXRoZXJHZW9sb2NhdGlvblR5cGVzPiA9IHByaXNtYS4kcXVlcnlSYXdgXG4gIFNFTEVDVCAqLFx0KCA2MzcxICogYWNvcyggY29zKCByYWRpYW5zKCR7bWluTGF0fSkgKSAqIGNvcyggcmFkaWFucyhwb3NpdGlvbk54KSApICogY29zKCByYWRpYW5zKHBvc2l0aW9uTnkpIC0gcmFkaWFucygke21pbkxvbn0pICkgKyBzaW4oIHJhZGlhbnMoJHttaW5MYXR9KSApICogc2luKCByYWRpYW5zKHBvc2l0aW9uTngpICkgKSApIEFTIGRpc3RhbmNlXG4gIEZST01cbiAgICB3ZWF0aGVyX2dlb2xvY2F0aW9uIHdnIFxuICBPUkRFUiBCWSBkaXN0YW5jZSBMSU1JVCAxO1xuICBgO1xuXG4gIHJldHVybiBhd2FpdCBsb2NhdGlvbi50aGVuKChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGRhdGFbMF07XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlb2xvY2F0aW9uID0gKCkgPT4ge1xuICBhcHAuZ2V0KFwiL2dlb2xvY2F0aW9uXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSByZXEucXVlcnkgYXMgTG9jYXRlVHlwZTtcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgY2hlY2tHZW9sb2NhdGlvbihwYXlsb2FkKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgcmVzLnNlbmQobG9jYXRpb24pO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG59O1xuIl19