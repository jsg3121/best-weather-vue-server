"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _server = require("./server");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
exports.app = app;
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
(0, _server.runServer)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJleHByZXNzIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ08sSUFBTUEsR0FBRyxHQUFHLHVCQUFaOztBQUVQQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxvQkFBUjtBQUNBRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsaUJBQVFDLFVBQVIsQ0FBbUI7QUFBRUMsRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBbkIsQ0FBUjtBQUNBSixHQUFHLENBQUNDLEdBQUosQ0FBUUMsaUJBQVFHLElBQVIsRUFBUjtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcnVuU2VydmVyIH0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuXHJcbnJ1blNlcnZlcigpO1xyXG4iXX0=