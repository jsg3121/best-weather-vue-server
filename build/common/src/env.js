"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;

var _lodash = require("lodash");

/**
 * ! .env 파일 변수 가져와 리턴
 * * 'true', 'false'는 `boolean`으로 리턴
 * * 그 외의 경우 `string`으로 리턴
 *
 * @param {string} val
 * @returns {boolean | string}
 */
var env = function env(val) {
  var data = (0, _lodash.get)(process.env, val);

  if (data) {
    if (data === "true") {
      return true;
    } else if (data === "false") {
      return false;
    } else {
      return data;
    }
  } else {
    throw new Error("not found env value!!");
  }
};

exports.env = env;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vc3JjL2Vudi50cyJdLCJuYW1lcyI6WyJlbnYiLCJ2YWwiLCJkYXRhIiwicHJvY2VzcyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBbUM7QUFDcEQsTUFBTUMsSUFBSSxHQUFHLGlCQUFJQyxPQUFPLENBQUNILEdBQVosRUFBaUJDLEdBQWpCLENBQWI7O0FBQ0EsTUFBSUMsSUFBSixFQUFVO0FBQ1IsUUFBSUEsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlBLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCLGFBQU8sS0FBUDtBQUNELEtBRk0sTUFFQTtBQUNMLGFBQU9BLElBQVA7QUFDRDtBQUNGLEdBUkQsTUFRTztBQUNMLFVBQU0sSUFBSUUsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRDtBQUNGLENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogISAuZW52IO2MjOydvCDrs4DsiJgg6rCA7KC47JmAIOumrO2EtFxuICogKiAndHJ1ZScsICdmYWxzZSfripQgYGJvb2xlYW5g7Jy866GcIOumrO2EtFxuICogKiDqt7gg7Jm47J2YIOqyveyasCBgc3RyaW5nYOycvOuhnCDrpqzthLRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbiB8IHN0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGVudiA9ICh2YWw6IHN0cmluZyk6IGJvb2xlYW4gfCBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0KHByb2Nlc3MuZW52LCB2YWwpO1xuICBpZiAoZGF0YSkge1xuICAgIGlmIChkYXRhID09PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChkYXRhID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBmb3VuZCBlbnYgdmFsdWUhIVwiKTtcbiAgfVxufTtcbiJdfQ==