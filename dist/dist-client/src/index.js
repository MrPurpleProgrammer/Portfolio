'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Application = require('./scenes/Application');

var _Application2 = _interopRequireDefault(_Application);

var _ServiceWorker = require('./ServiceWorker');

var ServiceWorker = _interopRequireWildcard(_ServiceWorker);

require('semantic-ui-css/semantic.min.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.hydrate(_react2.default.createElement(_Application2.default, null), document.getElementById('root'));
ServiceWorker.unregister();