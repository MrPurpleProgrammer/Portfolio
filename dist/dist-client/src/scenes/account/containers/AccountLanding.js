'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _UploadChart = require('../../../components/PortfolioLibrary/uploadChart/UploadChart.js');

var _UploadChart2 = _interopRequireDefault(_UploadChart);

var _MediaGallery = require('../../../components/VarsunLibrary/mediaGallery/MediaGallery');

var _MediaGallery2 = _interopRequireDefault(_MediaGallery);

var _ProfileButton = require('../../../components/PortfolioLibrary/profileButton/ProfileButton.js');

var _ProfileButton2 = _interopRequireDefault(_ProfileButton);

var _Logo = require('../../../components/PortfolioLibrary/logo/Logo.js');

var _Logo2 = _interopRequireDefault(_Logo);

var _FilterToolbar = require('../../../components/VarsunLibrary/filterToolbar/FilterToolbar.js');

var _FilterToolbar2 = _interopRequireDefault(_FilterToolbar);

var _ProfileHeader = require('../../../components/PortfolioLibrary/profileHeader/ProfileHeader');

var _ProfileHeader2 = _interopRequireDefault(_ProfileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountLanding = function (_Component) {
    _inherits(AccountLanding, _Component);

    function AccountLanding() {
        _classCallCheck(this, AccountLanding);

        return _possibleConstructorReturn(this, (AccountLanding.__proto__ || Object.getPrototypeOf(AccountLanding)).apply(this, arguments));
    }

    _createClass(AccountLanding, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'accountContent', className: 'accountContentContainer' },
                _react2.default.createElement(_ProfileHeader2.default, { sceneState: 'account' }),
                _react2.default.createElement(
                    'div',
                    { id: 'divContent' },
                    _react2.default.createElement(
                        'div',
                        { id: 'divAccountContentHeader', className: 'accountContentHeader' },
                        _react2.default.createElement(
                            'div',
                            { id: 'divAccountDetails', className: 'accountDetails' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'accountNameLanding' },
                                'Aditya Sayyaparaju'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'divAccountMetrics', className: 'metricsContainer' },
                                _react2.default.createElement(
                                    'div',
                                    { id: 'divAccountBadges', className: 'accountBadges' },
                                    _react2.default.createElement('i', { className: 'fas fa-award' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '326'
                                    ),
                                    _react2.default.createElement('i', { className: 'fas fa-clone' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '5,489'
                                    ),
                                    _react2.default.createElement('i', { className: 'fas fa-download' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '1,289,762'
                                    ),
                                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '570,870'
                                    ),
                                    _react2.default.createElement('i', { className: 'fas fa-star' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '34,000'
                                    ),
                                    _react2.default.createElement('i', { className: 'fas fa-comment' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '23,489'
                                    ),
                                    _react2.default.createElement('i', { className: 'fas fa-users' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '5,600'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { id: 'divUploadAnalytics', className: 'uploadAnalytics' },
                                    _react2.default.createElement(_UploadChart2.default, null)
                                )
                            )
                        ),
                        _react2.default.createElement(_FilterToolbar2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'divAccountMediaList', className: 'accountContent' },
                        _react2.default.createElement(_MediaGallery2.default, { sort: 'default' })
                    )
                )
            );
        }
    }]);

    return AccountLanding;
}(_react.Component);

exports.default = AccountLanding;