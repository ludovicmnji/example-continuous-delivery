"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Versionning = function Versionning(_ref) {
  var version = _ref.version;
  return _react.default.createElement("h2", {
    style: {
      color: 'cyan'
    }
  }, "This is v".concat(version));
};

Versionning.propTypes = {
  version: _propTypes.default.string.isRequired
};
var _default = Versionning;
exports.default = _default;