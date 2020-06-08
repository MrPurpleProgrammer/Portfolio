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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.nextSignupOptions = function () {
            (0, _jquery2.default)('#divMainSignupInputs').animate({ opacity: 0, height: '0px' }, 500, function () {
                (0, _jquery2.default)('#divMainSignupInputs').hide();
                (0, _jquery2.default)('#divNextSingupInputs').show().animate({ opacity: 1, height: '340px' }, 700);
            });
            (0, _jquery2.default)('#btnNext').hide();
            (0, _jquery2.default)('#btnSignup').show();
            (0, _jquery2.default)('#btnCancel').hide();
            (0, _jquery2.default)('#btnBack').show();
        }, _this.mainSignupOptions = function () {
            (0, _jquery2.default)('#divNextSingupInputs').animate({ opacity: 0, height: '0px' }, 500, function () {
                (0, _jquery2.default)('#divNextSingupInputs').hide();
                (0, _jquery2.default)('#divMainSignupInputs').show().animate({ opacity: 1, height: '320px' }, 700);
            });
            (0, _jquery2.default)('#btnSignup').hide();
            (0, _jquery2.default)('#btnNext').show();
            (0, _jquery2.default)('#btnBack').hide();
            (0, _jquery2.default)('#btnCancel').show();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Content, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'divSignupBox', className: 'signupContainer' },
                _react2.default.createElement(_Logo2.default, { hoverActive: false, scene: 'login' }),
                _react2.default.createElement(
                    'div',
                    { className: 'signupWelcomeText' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Create an Account'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Take the first step to claiming your content'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'loginInputParent' },
                    _react2.default.createElement(
                        'div',
                        { id: 'divMainSignupInputs', style: { display: 'block' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'signupInputs' },
                            _react2.default.createElement('input', { id: 'signupUsername', type: 'text', name: 'username', placeholder: 'Username' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'signupInputs' },
                            _react2.default.createElement('input', { id: 'signupUsername', type: 'email', name: 'emailaddress', placeholder: 'Email' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'signupInputs' },
                            _react2.default.createElement('input', { id: 'signupPassword', type: 'password', name: 'password', placeholder: 'Password' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'signupInputs' },
                            _react2.default.createElement('input', { id: 'signupConfirmPassword', type: 'password', name: 'confirmpassword', placeholder: 'Confirm Password' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'signupInputs' },
                            _react2.default.createElement('input', { id: 'singupPhoneNumber', type: 'tel', name: 'phonenumber', placeholder: 'Phone Number' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'divNextSingupInputs', style: { display: 'none', height: '0px' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnConnectDapper', className: 'altSignupButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Connect with Dapper'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnConnectMetamask', className: 'altSignupButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Connect with Metamask'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnConnectLedger', className: 'altSignupButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Connect with Ledger Wallet'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnConnectTrezor', className: 'altSignupButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Connect with Trezor Wallet'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'altbuttonContainer' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnConnectKeystore', className: 'altSignupButton mt10' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Connect with a Keystore File'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttonsContainer' },
                        _react2.default.createElement(
                            'button',
                            { id: 'btnNext', className: 'signupButton', onClick: this.nextSignupOptions },
                            _react2.default.createElement(
                                'p',
                                { style: { margin: '0px' } },
                                'Next Step'
                            )
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/Login', className: '' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnSignup', className: 'signupButton', style: { display: 'none' } },
                                _react2.default.createElement(
                                    'p',
                                    { style: { margin: '0px' } },
                                    'Signup'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/Login', className: '' },
                            _react2.default.createElement(
                                'button',
                                { id: 'btnCancel', className: 'cancelButton' },
                                'Cancel'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'btnBack', className: 'cancelButton', style: { display: 'none' }, onClick: this.mainSignupOptions },
                            'Back'
                        )
                    )
                )
            );
        }
    }]);

    return Content;
}(_react.Component);

exports.default = Content;