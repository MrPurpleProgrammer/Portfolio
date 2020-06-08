"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Public = require("./public/Public.js");

var _Public2 = _interopRequireDefault(_Public);

var _Login = require("./login/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _Account = require("./account/Account.js");

var _Account2 = _interopRequireDefault(_Account);

var _Signup = require("./signup/Signup.js");

var _Signup2 = _interopRequireDefault(_Signup);

var _MediaDetails = require("./account/containers/MediaDetails.js");

var _MediaDetails2 = _interopRequireDefault(_MediaDetails);

var _Upload = require("./upload/Upload.js");

var _Upload2 = _interopRequireDefault(_Upload);

var _reactRouterDom = require("react-router-dom");

require("./Application.css");

var _AccountButton = require("../components/PortfolioLibrary/accountButton/AccountButton.js");

var _AccountButton2 = _interopRequireDefault(_AccountButton);

var _Media = require("../components/VarsunLibrary/media/Media.js");

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Application = function (_Component) {
    _inherits(Application, _Component);

    function Application(props) {
        _classCallCheck(this, Application);

        var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, props));

        _this.state = {
            isLoggedIn: true,
            userId: 12345
        };
        return _this;
    }

    _createClass(Application, [{
        key: "render",
        value: function render() {
            var accountState;
            if (this.state.isLoggedIn == false) accountState = _react2.default.createElement(_Public2.default, null);
            if (this.state.isLoggedIn == true) accountState = _react2.default.createElement(_Account2.default, { isLoggedIn: this.state.isLoggedIn, userId: this.state.userId });
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _reactRouterDom.BrowserRouter,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { exact: true, path: "/" },
                            accountState
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { exact: true, path: "/Public" },
                            _react2.default.createElement(_Public2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/Login" },
                            _react2.default.createElement(_Login2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/Account" },
                            _react2.default.createElement(_Account2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/Signup" },
                            _react2.default.createElement(_Signup2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/Media/MediaDetails" },
                            _react2.default.createElement(_MediaDetails2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/Upload" },
                            _react2.default.createElement(_Upload2.default, null)
                        )
                    )
                )
            );
        }
    }]);

    return Application;
}(_react.Component);

exports.default = Application;