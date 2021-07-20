"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _server = require("./server");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
exports.app = app;
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use(_express.default.static(_path.default.join(process.cwd(), "public")));
(0, _server.runServer)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJleHByZXNzIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsInN0YXRpYyIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsR0FBRyxHQUFHLHVCQUFaOztBQUVQQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxvQkFBUjtBQUNBRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsaUJBQVFDLFVBQVIsQ0FBbUI7QUFBRUMsRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBbkIsQ0FBUjtBQUNBSixHQUFHLENBQUNDLEdBQUosQ0FBUUMsaUJBQVFHLElBQVIsRUFBUjtBQUNBTCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsaUJBQVFJLE1BQVIsQ0FBZUMsY0FBS0MsSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixRQUF6QixDQUFmLENBQVI7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJ1blNlcnZlciB9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIikpKTtcblxucnVuU2VydmVyKCk7XG4iXX0=