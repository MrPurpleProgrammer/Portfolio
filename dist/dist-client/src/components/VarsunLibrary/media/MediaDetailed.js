'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaDetailed = function (_Component) {
    _inherits(MediaDetailed, _Component);

    function MediaDetailed() {
        _classCallCheck(this, MediaDetailed);

        return _possibleConstructorReturn(this, (MediaDetailed.__proto__ || Object.getPrototypeOf(MediaDetailed)).apply(this, arguments));
    }

    _createClass(MediaDetailed, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mediaDetailedContainer',
                    'data-asset': this.props.mediaType,
                    'data-certificate': this.props.certificateID
                },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: {
                            pathname: '/Media/MediaDetails',
                            search: 'id=' + this.props.mediaId + '&mediaType=' + this.props.mediaType + '&certificateID=' + this.props.certificateId,
                            state: {
                                src: this.props.src,
                                mediaType: this.props.mediaType,
                                certificateId: this.props.certificateId,
                                mediaTitle: this.props.mediaTitle,
                                mediaCreator: this.props.mediaCreator
                            }
                        } },
                    _react2.default.createElement('img', { className: 'mediaDetailed', src: this.props.src,
                        'data-source': this.props.ipfsUrl,
                        'data-dimensions': { Obj: "42" }
                    })
                )
            );
        }
    }]);

    return MediaDetailed;
}(_react.Component);

exports.default = MediaDetailed;