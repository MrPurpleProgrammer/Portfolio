'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSpring = require('react-spring');

var _largelogo = require('client/src/assets/Images/largelogo.png');

var _largelogo2 = _interopRequireDefault(_largelogo);

require('./stepzero.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = function calc(x, y) {
  return [x - window.innerWidth / 2, y - window.innerHeight / 2];
};
var trans1 = function trans1(x, y) {
  return 'translate3d(' + x / -10 + 'px,' + y / 10 + 'px,0)';
};
var trans2 = function trans2(x, y) {
  return 'translate3d(' + (x / 8 + 35) + 'px,' + (y / 8 - 230) + 'px,0)';
};

function LandingPage() {
  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return { xy: [0, 0], config: { mass: 20, tension: 550, friction: 450 } };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  return _react2.default.createElement(
    'div',
    { id: 'divAnimation', 'class': 'container', onMouseMove: function onMouseMove(_ref) {
        var x = _ref.clientX,
            y = _ref.clientY;
        return set({ xy: calc(x, y) });
      } },
    _react2.default.createElement(_reactSpring.animated.div, { 'class': 'particlebg', style: { transform: props.xy.interpolate(trans1) } }),
    _react2.default.createElement(_reactSpring.animated.div, { 'class': 'iconsbg', style: { transform: props.xy.interpolate(trans2) } }),
    _react2.default.createElement(
      'div',
      { className: 'title' },
      _react2.default.createElement('img', { src: _largelogo2.default, alt: 'Logo' })
    )
  );
}

exports.default = LandingPage;