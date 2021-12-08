"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hourlyData = void 0;

/**
 * ! 3시간 단위 기상 예보
 * * 1시간 단위로 나오기 때문에 3시간 간격으로 변경하여 데이터 반환
 *
 * --------------------------------
 * * ***Return data options***
 * - sky : 하늘 상태
 * - temp : 기온
 * --------------------------------
 * @param {ThreeHoursData} data
 * @returns {Array<ReutrnThreeHours>}
 */
var hourlyData = function hourlyData(data) {
  var hourly = [];
  data.map(function (item) {
    hourly.push({
      sky: item.weather[0].description,
      temp: item.temp
    });
  });
  return hourly;
};

exports.hourlyData = hourlyData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3JjL29wZW5XZWF0aGVyL3NyYy9ob3VybHlEYXRhL3NyYy9ob3VybHlEYXRhLnRzIl0sIm5hbWVzIjpbImhvdXJseURhdGEiLCJkYXRhIiwiaG91cmx5IiwibWFwIiwiaXRlbSIsInB1c2giLCJza3kiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJ0ZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFtRDtBQUMzRSxNQUFNQyxNQUErQixHQUFHLEVBQXhDO0FBQ0FELEVBQUFBLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBVTtBQUNqQkYsSUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVk7QUFDVkMsTUFBQUEsR0FBRyxFQUFFRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxXQURYO0FBRVZDLE1BQUFBLElBQUksRUFBRUwsSUFBSSxDQUFDSztBQUZELEtBQVo7QUFJRCxHQUxEO0FBT0EsU0FBT1AsTUFBUDtBQUNELENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVuV2VhdGhlckRhdGFQcm9wcyB9IGZyb20gXCJ+L0B0eXBlc1wiO1xuXG50eXBlIFRocmVlSG91cnNEYXRhID0gT3BlbldlYXRoZXJEYXRhUHJvcHNbXCJob3VybHlcIl07XG50eXBlIFJldXRyblRocmVlSG91cnMgPSB7XG4gIHRlbXA6IFRocmVlSG91cnNEYXRhWzBdW1widGVtcFwiXTtcbiAgc2t5OiBUaHJlZUhvdXJzRGF0YVswXVtcIndlYXRoZXJcIl1bMF1bXCJkZXNjcmlwdGlvblwiXTtcbn07XG5cbi8qKlxuICogISAz7Iuc6rCEIOuLqOychCDquLDsg4Eg7JiI67O0XG4gKiAqIDHsi5zqsIQg64uo7JyE66GcIOuCmOyYpOq4sCDrlYzrrLjsl5AgM+yLnOqwhCDqsITqsqnsnLzroZwg67OA6rK97ZWY7JesIOuNsOydtO2EsCDrsJjtmZhcbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogKiAqKipSZXR1cm4gZGF0YSBvcHRpb25zKioqXG4gKiAtIHNreSA6IO2VmOuKmCDsg4Htg5xcbiAqIC0gdGVtcCA6IOq4sOyYqFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEBwYXJhbSB7VGhyZWVIb3Vyc0RhdGF9IGRhdGFcbiAqIEByZXR1cm5zIHtBcnJheTxSZXV0cm5UaHJlZUhvdXJzPn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhvdXJseURhdGEgPSAoZGF0YTogVGhyZWVIb3Vyc0RhdGEpOiBBcnJheTxSZXV0cm5UaHJlZUhvdXJzPiA9PiB7XG4gIGNvbnN0IGhvdXJseTogQXJyYXk8UmV1dHJuVGhyZWVIb3Vycz4gPSBbXTtcbiAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICBob3VybHkucHVzaCh7XG4gICAgICBza3k6IGl0ZW0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIHRlbXA6IGl0ZW0udGVtcCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhvdXJseTtcbn07XG4iXX0=