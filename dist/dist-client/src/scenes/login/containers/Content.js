'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logo = require('../../../components/PortfolioLibrary/logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _reactRouterDom = require('react-router-dom');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
    _inherits(Content, _Component);

    function Content() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Content);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.altLoginOptions = function () {
            (0, _jquery2.default)('#divMainLoginInputs').animate({ opacity: 0, height: '0px' }, 500, function () {
                (0, _jquery2.default)('#divMainLoginInputs').hide();
                (0, _jquery2.default)('#divAltLoginInputs').show().animate({ opacity: 1, height: '260px' }, 700);
            });
            (0, _jquery2.default)('#btnLogin').hide();
            (0, _jquery2.default)('#btnBack').show();
            (0, _jquery2.default)('#divAltLoginOption').fadeOut(500);
        }, _this.mainLoginOptions = function () {
            (0, _jquery2.default)('#divAltLoginInputs').animate({ opacity: 0, height: '0px' }, 500, function () {
                (0, _jquery2.default)('#divAltLoginInputs').hide();
                (0, _jquery2.default)('#divMainLoginInputs').show().animate({ opacity: 1, height: '120px' }, 700);
            });
            (0, _jquery2.default)('#btnBack').hide();
            (0, _jquery2.default)('#btnLogin').show();
            (0, _jquery2.default)('#divAltLoginOption').fadeIn(500);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Content, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'divLoginBox', className: 'loginContainer' },
                _react2.default.createElement(_Logo2.default, { hoverActive: false, scene: 'login' }),
                _react2.default.createElement(
                    'div',
                    { className: 'loginWelcomeText' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Welcome Back!'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Input your credentials to log in.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'loginInputParent' },
                    _react2.default.createElement(
                        'div',
                        { id: 'divMainLoginInputs', style: { display: 'block' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'loginInputs' },
                            _react2.default.createElement('input', { id: 'loginEmail', type: 'email', name: 'emailaddress', placeholder: 'Email' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'loginInputs' },
                            _react2.default.createElement('input', { id: 'loginPassword', type: 'password', name: 'password', placeholder: 'Password' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'divAltLoginInputs', style: { display: 'none', height: '0px' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnAltLogin', className: 'altLoginButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Login with Web Extensions'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Use a web3 wallet like Metamask or Dapper'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnAltLogin', className: 'altLoginButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Login with Hardware Wallet'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Use a hardware wallet like Trezor or Ledger'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnAltLogin', className: 'altLoginButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Login with Software'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Keystore File, Private Key, Mnemonic Phrase'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttonsContainer' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/Account/User?UserGuid=12345', className: '' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnLogin', className: 'loginButton' },
                                _react2.default.createElement(
                                    'p',
                                    { style: { margin: '0px' } },
                                    'Login'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'btnBack', style: { display: 'none' }, className: 'loginButton', onClick: this.mainLoginOptions },
                            _react2.default.createElement('i', { style: { fontsize: '25px' }, className: 'fas fa-long-arrow-alt-left' })
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/Signup', className: '' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnCreateAccount', className: 'createAccountButton' },
                                'Create an Account'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'loginOptions' },
                        _react2.default.createElement(
                            'div',
                            { className: 'divRememberMe boxes checkBox_RememberMe' },
                            _react2.default.createElement('input', { type: 'checkbox', id: 'box-1' }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'box-1' },
                                'Remember Me'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Forgot Password?'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'divAltLoginOption', className: 'altbuttonContainer' },
                    _react2.default.createElement(
                        'button',
                        { id: 'btnAltLogin', className: 'altLoginButton', onClick: this.altLoginOptions },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Alternative Login Options'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Web3 Wallets, Hardware Wallets, Social Media'
                        )
                    )
                )
            );
        }
    }]);

    return Content;
}(_react.Component);

exports.default = Content;