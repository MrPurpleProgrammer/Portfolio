'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./navigation_dots.css');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationLI = function (_Component) {
    _inherits(NavigationLI, _Component);

    function NavigationLI() {
        _classCallCheck(this, NavigationLI);

        return _possibleConstructorReturn(this, (NavigationLI.__proto__ || Object.getPrototypeOf(NavigationLI)).apply(this, arguments));
    }

    _createClass(NavigationLI, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                            window.scrollTo(0, _this2.props.location);
                        } },
                    _react2.default.createElement('a', { className: this.props.state == this.props.activeState ? "active_dot" : "" }),
                    _react2.default.createElement(
                        'p',
                        { className: this.props.state == this.props.activeState ? "active_text" : "" },
                        ' ',
                        this.props.name,
                        ' '
                    )
                )
            );
        }
    }]);

    return NavigationLI;
}(_react.Component);

var NavigationUL = function (_Component2) {
    _inherits(NavigationUL, _Component2);

    function NavigationUL() {
        _classCallCheck(this, NavigationUL);

        return _possibleConstructorReturn(this, (NavigationUL.__proto__ || Object.getPrototypeOf(NavigationUL)).apply(this, arguments));
    }

    _createClass(NavigationUL, [{
        key: 'renderul',
        value: function renderul(numberOfDots) {
            var j = 0;
            var renderedUL = [];
            for (j = 0; j < numberOfDots; j++) {
                renderedUL.push(_react2.default.createElement(NavigationLI, { state: this.props.state, name: this.props.names[j], activeState: j, location: this.props.links[j] }));
            }
            return renderedUL;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                null,
                this.renderul(this.props.numberOfDots)
            );
        }
    }]);

    return NavigationUL;
}(_react.Component);

var NavigationDots = function (_Component3) {
    _inherits(NavigationDots, _Component3);

    function NavigationDots() {
        _classCallCheck(this, NavigationDots);

        return _possibleConstructorReturn(this, (NavigationDots.__proto__ || Object.getPrototypeOf(NavigationDots)).apply(this, arguments));
    }

    _createClass(NavigationDots, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _jquery2.default)('.navigationDots ul').hover(function () {
                (0, _jquery2.default)('.navigationDots p').fadeIn(800);
            }, function () {
                (0, _jquery2.default)('.navigationDots p').fadeOut(800);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'divNavigation', className: this.props.class },
                _react2.default.createElement(NavigationUL, { numberOfDots: this.props.numberOfDots, names: this.props.names, state: this.props.state, links: this.props.links })
            );
        }
    }]);

    return NavigationDots;
}(_react.Component);

exports.default = NavigationDots;