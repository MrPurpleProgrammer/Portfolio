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
            var hoverArea = this.hover ? 0.6 : 0.6;
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
            _gsap.TweenMax.to(this.el, 0.5, {
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

var LearnButton = function (_Component) {
    _inherits(LearnButton, _Component);

    function LearnButton() {
        _classCallCheck(this, LearnButton);

        return _possibleConstructorReturn(this, (LearnButton.__proto__ || Object.getPrototypeOf(LearnButton)).apply(this, arguments));
    }

    _createClass(LearnButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var btn1 = document.querySelector('#btnLearnButton');
            new HoverButton(btn1);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'divLearnButton' },
                _react2.default.createElement(
                    'button',
                    { id: 'btnLearnButton', className: 'headerButton' },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/Learn', className: 'headerButttonLink' },
                        'Learn More'
                    )
                )
            );
        }
    }]);

    return LearnButton;
}(_react.Component);

exports.default = LearnButton;