'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _UploadChart = require('../../components/PortfolioLibrary/uploadChart/UploadChart.js');

var _UploadChart2 = _interopRequireDefault(_UploadChart);

var _MediaGallery = require('../../components/VarsunLibrary/mediaGallery/MediaGallery');

var _MediaGallery2 = _interopRequireDefault(_MediaGallery);

var _ProfileButton = require('../../components/PortfolioLibrary/profileButton/ProfileButton.js');

var _ProfileButton2 = _interopRequireDefault(_ProfileButton);

var _Logo = require('../../components/PortfolioLibrary/logo/Logo.js');

var _Logo2 = _interopRequireDefault(_Logo);

var _AccountLanding = require('./containers/AccountLanding.js');

var _AccountLanding2 = _interopRequireDefault(_AccountLanding);

var _reactTransitionGroup = require('react-transition-group');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUser() {}

var Account = function Account(props) {
    var history = (0, _reactRouterDom.useHistory)();
    var accountState = void 0;
    if (history.location.pathname.includes("/Account/User") && history.location.search.includes("?UserGuid=12345")) {
        accountState = _react2.default.createElement(_AccountLanding2.default, null);
    } else if (props.isLoggedIn == true && props.userId == 12345) accountState = _react2.default.createElement(_AccountLanding2.default, null);
    return _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
            'in': true,
            appear: true,
            timeout: 2000,
            classNames: 'fade'
        },
        _react2.default.createElement(
            'div',
            { className: 'accountSceneContainer' },
            accountState
        )
    );
};

exports.default = Account;