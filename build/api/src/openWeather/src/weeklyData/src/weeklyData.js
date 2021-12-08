"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weeklyData = void 0;

/**
 * !주간 기상 정보 요청
 * * 기온의 경우 오전 오후 모두 표시
 * * 오전 오후 날씨가 따로 분리되어 나타나지 않고 하나의 날씨만 제공
 * -----------------------------------------------------------
 * * ***Return data options***
 * - sky : 날씨 상태
 * - maxTemperature : 최고기온
 * - minTemperature : 최저기온
 * -----------------------------------------------------------
 * @param {WeeklyData} data
 * @returns {Array<RetyrnWeeklyData>}
 */
var weeklyData = function weeklyData(data) {
  var weekly = [];
  data.map(function (item, idx) {
    if (idx !== 0) {
      weekly.push({
        sky: item.weather[0].description,
        maxTemperature: item.temp.max,
        minTemperature: item.temp.min
      });
    }
  });
  return weekly;
};

exports.weeklyData = weeklyData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL29wZW5XZWF0aGVyL3NyYy93ZWVrbHlEYXRhL3NyYy93ZWVrbHlEYXRhLnRzIl0sIm5hbWVzIjpbIndlZWtseURhdGEiLCJkYXRhIiwid2Vla2x5IiwibWFwIiwiaXRlbSIsImlkeCIsInB1c2giLCJza3kiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJtYXhUZW1wZXJhdHVyZSIsInRlbXAiLCJtYXgiLCJtaW5UZW1wZXJhdHVyZSIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUErQztBQUN2RSxNQUFNQyxNQUErQixHQUFHLEVBQXhDO0FBRUFELEVBQUFBLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUF1QjtBQUM5QixRQUFJQSxHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ2JILE1BQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZO0FBQ1ZDLFFBQUFBLEdBQUcsRUFBRUgsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FBYixFQUFnQkMsV0FEWDtBQUVWQyxRQUFBQSxjQUFjLEVBQUVOLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxHQUZoQjtBQUdWQyxRQUFBQSxjQUFjLEVBQUVULElBQUksQ0FBQ08sSUFBTCxDQUFVRztBQUhoQixPQUFaO0FBS0Q7QUFDRixHQVJEO0FBVUEsU0FBT1osTUFBUDtBQUNELENBZE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVuV2VhdGhlckRhdGFQcm9wcyB9IGZyb20gXCJ+L0B0eXBlc1wiO1xuXG50eXBlIFdlZWtseURhdGEgPSBPcGVuV2VhdGhlckRhdGFQcm9wc1tcImRhaWx5XCJdO1xudHlwZSBSZXR5cm5XZWVrbHlEYXRhID0ge1xuICBza3k6IFdlZWtseURhdGFbMF1bXCJ3ZWF0aGVyXCJdWzBdW1wiZGVzY3JpcHRpb25cIl07XG4gIG1heFRlbXBlcmF0dXJlOiBXZWVrbHlEYXRhWzBdW1widGVtcFwiXVtcIm1heFwiXTtcbiAgbWluVGVtcGVyYXR1cmU6IFdlZWtseURhdGFbMF1bXCJ0ZW1wXCJdW1wibWluXCJdO1xufTtcblxuLyoqXG4gKiAh7KO86rCEIOq4sOyDgSDsoJXrs7Qg7JqU7LKtXG4gKiAqIOq4sOyYqOydmCDqsr3smrAg7Jik7KCEIOyYpO2bhCDrqqjrkZAg7ZGc7IucXG4gKiAqIOyYpOyghCDsmKTtm4Qg64Kg7JSo6rCAIOuUsOuhnCDrtoTrpqzrkJjslrQg64KY7YOA64KY7KeAIOyViuqzoCDtlZjrgpjsnZgg64Kg7JSo66eMIOygnOqztVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICogKioqUmV0dXJuIGRhdGEgb3B0aW9ucyoqKlxuICogLSBza3kgOiDrgqDslKgg7IOB7YOcXG4gKiAtIG1heFRlbXBlcmF0dXJlIDog7LWc6rOg6riw7JioXG4gKiAtIG1pblRlbXBlcmF0dXJlIDog7LWc7KCA6riw7JioXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQHBhcmFtIHtXZWVrbHlEYXRhfSBkYXRhXG4gKiBAcmV0dXJucyB7QXJyYXk8UmV0eXJuV2Vla2x5RGF0YT59XG4gKi9cbmV4cG9ydCBjb25zdCB3ZWVrbHlEYXRhID0gKGRhdGE6IFdlZWtseURhdGEpOiBBcnJheTxSZXR5cm5XZWVrbHlEYXRhPiA9PiB7XG4gIGNvbnN0IHdlZWtseTogQXJyYXk8UmV0eXJuV2Vla2x5RGF0YT4gPSBbXTtcblxuICBkYXRhLm1hcCgoaXRlbSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ICE9PSAwKSB7XG4gICAgICB3ZWVrbHkucHVzaCh7XG4gICAgICAgIHNreTogaXRlbS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICBtYXhUZW1wZXJhdHVyZTogaXRlbS50ZW1wLm1heCxcbiAgICAgICAgbWluVGVtcGVyYXR1cmU6IGl0ZW0udGVtcC5taW4sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB3ZWVrbHk7XG59O1xuIl19