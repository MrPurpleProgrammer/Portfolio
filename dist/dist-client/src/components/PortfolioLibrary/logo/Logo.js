'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gsap = require('gsap');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HoverButton = function () {
  function HoverButton(el) {
    _classCallCheck(this, HoverButton);

    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }

  _createClass(HoverButton, [{
    key: 'attachEventsListener',
    value: function attachEventsListener() {
      var _this = this;

      window.addEventListener('mousemove', function (e) {
        return _this.onMouseMove(e);
      });
      window.addEventListener('resize', function (e) {
        return _this.calculatePosition(e);
      });
    }
  }, {
    key: 'calculatePosition',
    value: function calculatePosition() {
      _gsap.TweenMax.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
      });
      var box = this.el.getBoundingClientRect();
      this.x = box.left + box.width * 0.5;
      this.y = box.top + box.height * 0.5;
      this.width = box.width;
      this.height = box.height;
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      var hover = false;
      var hoverArea = this.hover ? 0.9 : 0.9;
      var x = e.clientX - this.x;
      var y = e.clientY - this.y;
      var distance = Math.sqrt(x * x + y * y);
      if (distance < this.width * hoverArea) {
        hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
      }

      if (!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    }
  }, {
    key: 'onHover',
    value: function onHover(x, y) {
      _gsap.TweenMax.to(this.el, 0.4, {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.15,
        ease: _gsap.Power2.easeOut
      });
      this.el.style.zIndex = 10;
    }
  }, {
    key: 'onLeave',
    value: function onLeave() {
      _gsap.TweenMax.to(this.el, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        ease: _gsap.Elastic.easeOut.config(0.2, 0.4)
      });
      this.el.style.zIndex = 1;
    }
  }]);

  return HoverButton;
}();

var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var btn2 = document.querySelector('#btnLogoButton');
      if (this.props.hoverActive == true) new HoverButton(btn2);
    }
  }, {
    key: 'render',
    value: function render() {
      var cssName = {
        'public': 'logoBtn_public',
        'login': 'logoBtn_login',
        'account': 'logoBtn_account'
      };
      return _react2.default.createElement(
        'div',
        { id: 'divLogo', className: 'logo_dimensions' },
        _react2.default.createElement(
          'button',
          { id: 'btnLogoButton', className: cssName[this.props.scene] },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/', className: 'headerButttonLink' },
            _react2.default.createElement(
              'svg',
              { 'data-name': 'Layer 1', viewBox: '0 0 1839.69 346.89' },
              _react2.default.createElement(
                'title',
                null,
                'Portfolio_Full_Logo'
              ),
              _react2.default.createElement(
                'g',
                {
                  style: {
                    isolation: 'isolate'
                  },
                  fill: '#ff0051',
                  stroke: '#ff0051',
                  strokeMiterlimit: 10
                },
                _react2.default.createElement('path', { d: 'M51.94 14.92h71.56q37.58 0 61.26 17.07t34.58 42.47q10.89 25.41 9.28 54.87a139.44 139.44 0 01-14.16 54.77 114.59 114.59 0 01-35.74 42.24q-23.21 16.93-55.72 16.93-24.61 0-37.83-8.12t-17.83-19.49a41.67 41.67 0 01-2.34-23.9 55.1 55.1 0 018.82-21.82c1.55 3.41 4.48 6 8.82 7.89A64.69 64.69 0 0097.27 182a94.42 94.42 0 0016 1.4 73.68 73.68 0 0013-.94 40.88 40.88 0 0021.58-11.14 55.6 55.6 0 0013.46-20.64 71.22 71.22 0 004.41-25.07 55.65 55.65 0 00-5.34-24.37 44.17 44.17 0 00-16.71-18.33q-11.37-7.19-29-7.19H62.23v264.56H.5V72.09q0-25.56 11.69-41.36t39.75-15.81zM382 94.29q36.66 0 65.21 17.64t44.79 45q16.25 27.41 17.4 60.81t-16.93 65.44a121.67 121.67 0 01-39.92 42.24 130 130 0 01-52.45 19.72 127.85 127.85 0 01-55.92-4.64q-28.1-8.58-50.36-30.86-25.06-25.53-33.42-58.95a125.68 125.68 0 011.39-66.83 50 50 0 0113.69-22.28 60.79 60.79 0 0121.59-13 68.74 68.74 0 0125.06-3.71 65.44 65.44 0 0124.13 5.34 50.94 50.94 0 0118.8 13.92 39.81 39.81 0 019.05 22.05 28.74 28.74 0 00-16.71-5.34 40.22 40.22 0 00-18.78 4.16 39.62 39.62 0 00-15.32 13.46Q317 207.55 317 221q0 23.2 9.75 38.52t24.37 23a66.91 66.91 0 0031.56 7.66 65.33 65.33 0 0031.56-7.89q14.63-7.87 24.36-23.43t9.75-38.76q0-18.09-6.5-32a65.18 65.18 0 00-17.4-23 61.85 61.85 0 00-25.29-12.53 70.5 70.5 0 00-30.64-.23 50.68 50.68 0 00-16.94-13.23 71.58 71.58 0 00-21.58-6.5 72.84 72.84 0 00-23.2.47 65.22 65.22 0 00-21.8 8.09 133.66 133.66 0 0143.16-34.58A118.83 118.83 0 01382 94.29zM546.77 98.93h52v30.64q7.89-16.25 20.2-25.76a48.55 48.55 0 0127.13-10.45q19.49-1.38 31.56 7.2t16.94 20.89a44.88 44.88 0 012.55 25.06 30.84 30.84 0 01-12.53 20.18 23.1 23.1 0 00-16-15.08q-11.83-3.48-24.84.93T620.34 169Q609.9 181.08 608 200.57q-.94 11.16-.93 22.06v117.65h-60.3zM759.81 62.73q0-13 4.87-22a40.92 40.92 0 0113-14.62 56 56 0 0118.8-8.12 93.53 93.53 0 0121.81-2.56v86.33h53.84a100 100 0 01-1.62 18.11 44 44 0 01-6.27 16 35 35 0 01-12.53 11.61q-7.9 4.41-20.42 4.4h-13v131.31q0 7.44 5.57 10.44a25.11 25.11 0 0013 2.79 39.87 39.87 0 0014.86-3.48c4.94-2.16 8.51-5.1 10.67-8.82q6 15.31.7 27.15a43.15 43.15 0 01-16.71 19 65.7 65.7 0 01-26.45 9.28 61.73 61.73 0 01-28.32-2.32 48.36 48.36 0 01-22.51-15.78q-9.29-11.37-9.28-30.87V151.84H730.1v-50.13h29.71zM909.25 99.4h21.36q0-12.06-.24-23.91a169.44 169.44 0 01.93-22.27A114.44 114.44 0 01935 34a45.07 45.07 0 018.12-15.79 42.87 42.87 0 0117.42-12.33q10.9-4.42 28.54-5.35a97 97 0 0134.81 5.11q15.78 5.58 24.37 15.55a33.21 33.21 0 018.35 23q-.22 13-13.22 27.39a28.63 28.63 0 00-11.84-14.85 35.52 35.52 0 00-17.63-6 25 25 0 00-16 4.41q-7 4.88-7 16.48V99.4h59.41q0 23.21-13 37.36t-32.48 14.16h-13.91v189.36h-60.33V150.92h-21.36zM1201.19 94.29q36.66 0 65.21 17.64t44.79 45q16.23 27.41 17.4 60.81t-16.94 65.44a121.58 121.58 0 01-39.92 42.24 130 130 0 01-52.44 19.72 127.9 127.9 0 01-55.93-4.64q-28.08-8.58-50.36-30.86-25.07-25.53-33.41-58.95a125.68 125.68 0 011.39-66.83 49.77 49.77 0 0113.69-22.28 60.75 60.75 0 0121.58-13 68.77 68.77 0 0125.06-3.71 65.54 65.54 0 0124.14 5.34 51.11 51.11 0 0118.8 13.92 39.88 39.88 0 019 22.05 28.76 28.76 0 00-16.71-5.34 40.23 40.23 0 00-18.8 4.18 39.6 39.6 0 00-15.31 13.46q-6.27 9.06-6.27 22.51 0 23.2 9.75 38.52t24.36 23a66.94 66.94 0 0031.56 7.66 65.3 65.3 0 0031.56-7.89q14.63-7.87 24.37-23.43t9.75-38.76q0-18.09-6.5-32a65.2 65.2 0 00-17.41-23 61.79 61.79 0 00-25.29-12.53 70.45 70.45 0 00-30.63-.23 50.78 50.78 0 00-16.94-13.23 71.65 71.65 0 00-21.59-6.5 72.85 72.85 0 00-23.2.47 65.17 65.17 0 00-21.81 8.12 133.45 133.45 0 0143.16-34.58 118.8 118.8 0 0153.89-12.32zM1424.43 15.38v324.9H1366V62.73q0-22.29 15.78-35t42.65-12.35zM1510.29 1a36 36 0 0126.92 11.61A36.48 36.48 0 011548.82 40a38.81 38.81 0 01-11.14 27.85 35.14 35.14 0 01-15.09 9q-8.6 2.57-17.17 5.11a105.15 105.15 0 00-15.78 6 19.15 19.15 0 00-10 11.38q-2.33-7.43-4.87-19a149.47 149.47 0 01-3.25-24.12 105.71 105.71 0 011.39-24.37 36 36 0 0110-19.73A37.21 37.21 0 011510.29 1zm-30.17 147.59q.93-13.9 5.81-23.2a41.16 41.16 0 0112.76-14.85 53.67 53.67 0 0118.33-8.13 96.83 96.83 0 0123-2.55v240.42h-59.88zM1711.72 94.29q36.66 0 65.21 17.64t44.79 45q16.23 27.41 17.4 60.81t-16.94 65.44a121.58 121.58 0 01-39.92 42.24 130 130 0 01-52.44 19.72 127.9 127.9 0 01-55.93-4.64q-28.08-8.58-50.36-30.86-25.07-25.53-33.41-58.95a125.68 125.68 0 011.39-66.83 49.77 49.77 0 0113.69-22.28 60.75 60.75 0 0121.58-13 68.77 68.77 0 0125.06-3.71 65.54 65.54 0 0124.14 5.34 51.11 51.11 0 0118.8 13.92 39.88 39.88 0 019 22.05 28.76 28.76 0 00-16.71-5.34 40.23 40.23 0 00-18.8 4.18 39.6 39.6 0 00-15.27 13.47q-6.27 9.06-6.27 22.51 0 23.2 9.75 38.52t24.36 23a66.94 66.94 0 0031.56 7.66 65.33 65.33 0 0031.56-7.89q14.63-7.87 24.37-23.43t9.75-38.76q0-18.09-6.5-32a65.2 65.2 0 00-17.41-23 61.79 61.79 0 00-25.29-12.53 70.45 70.45 0 00-30.63-.23 50.78 50.78 0 00-16.94-13.23 71.65 71.65 0 00-21.59-6.5 72.85 72.85 0 00-23.2.47 65.09 65.09 0 00-21.81 8.12 133.45 133.45 0 0143.16-34.58 118.8 118.8 0 0153.85-12.33z' })
              )
            )
          )
        )
      );
    }
  }]);

  return Logo;
}(_react.Component);

exports.default = Logo;