'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Logo = require('../logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _ProfileButton = require('../profileButton/ProfileButton');

var _ProfileButton2 = _interopRequireDefault(_ProfileButton);

var _NavMenu = require('../../../components/PortfolioLibrary/navmenu/NavMenu.js');

var _NavMenu2 = _interopRequireDefault(_NavMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileHeader = function (_Component) {
    _inherits(ProfileHeader, _Component);

    function ProfileHeader() {
        _classCallCheck(this, ProfileHeader);

        return _possibleConstructorReturn(this, (ProfileHeader.__proto__ || Object.getPrototypeOf(ProfileHeader)).apply(this, arguments));
    }

    _createClass(ProfileHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.props.sceneState == 'account') {
                return _react2.default.createElement(
                    'div',
                    { id: 'divHeader', className: 'headerLayout' },
                    _react2.default.createElement(
                        'div',
                        { className: 'portfolioLogo' },
                        _react2.default.createElement(_Logo2.default, { hoverActive: false, scene: 'account' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'profileDiv' },
                        _react2.default.createElement(_ProfileButton2.default, null)
                    )
                );
            } else if (this.props.sceneState == 'public') {
                return _react2.default.createElement(
                    'div',
                    { id: 'divContent', className: 'headerLayout' },
                    _react2.default.createElement(
                        'div',
                        { className: 'portfolioLogo_PublicParent' },
                        _react2.default.createElement(_Logo2.default, { hoverActive: true, scene: 'public' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'navMenu_PublicParent' },
                        _react2.default.createElement(_NavMenu2.default, { route: 'Login' })
                    )
                );
            }
        }
    }]);

    return ProfileHeader;
}(_react.Component);

exports.default = ProfileHeader;