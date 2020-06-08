'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../mediaGallery/media_gallery.css');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactRouterDom = require('react-router-dom');

var _MediaDetailed = require('./MediaDetailed.js');

var _MediaDetailed2 = _interopRequireDefault(_MediaDetailed);

var _MediaThumbnail = require('./MediaThumbnail.js');

var _MediaThumbnail2 = _interopRequireDefault(_MediaThumbnail);

var _MediaUploadTracker = require('./MediaUploadTracker');

var _MediaUploadTracker2 = _interopRequireDefault(_MediaUploadTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = function (_Component) {
    _inherits(Media, _Component);

    function Media(props) {
        _classCallCheck(this, Media);

        return _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));
    }

    _createClass(Media, [{
        key: 'render',
        value: function render() {
            var mediaUrl = '/Media/MediaDetails?id=' + this.props.mediaId + '&mediaType=' + this.props.mediaType;
            var media = void 0;
            if (this.props.format == 'thumbnail') {
                media = _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: {
                            pathname: '/Media/MediaDetails',
                            search: 'id=' + this.props.mediaId + '&mediaType=' + this.props.mediaType + '&certificateID=' + this.props.certificateId,
                            state: {
                                src: this.props.src,
                                mediaType: this.props.mediaType,
                                certificateId: this.props.certificateId,
                                mediaTitle: this.props.mediaTitle,
                                mediaCreator: this.props.mediaCreator,
                                mediaId: this.props.mediaId
                            }
                        }
                    },
                    _react2.default.createElement(_MediaThumbnail2.default, {
                        mediaType: this.props.mediaType,
                        src: this.props.src,
                        certificateId: this.props.certificateId,
                        mediaId: this.props.mediaId,
                        ipfsUrl: this.props.ipfsUrl,
                        licenseCount: this.props.licenseCount,
                        mediaTitle: this.props.mediaTitle,
                        mediaCreator: this.props.mediaCreator
                    })
                );
            } else if (this.props.format == 'detailed') {
                media = _react2.default.createElement(_MediaDetailed2.default, {
                    mediaType: this.props.mediaType,
                    src: this.props.src,
                    certificateId: this.props.certificateId,
                    mediaId: this.props.mediaId,
                    ipfsUrl: this.props.ipfsUrl,
                    licenseCount: this.props.licenseCount,
                    mediaTitle: this.props.mediaTitle,
                    mediaCreator: this.props.mediaCreator
                });
            } else if (this.props.format == 'upload') {
                media = _react2.default.createElement(_MediaUploadTracker2.default, {
                    mediaType: this.props.mediaType,
                    src: this.props.src,
                    certificateId: this.props.certificateId,
                    mediaId: this.props.mediaId,
                    ipfsUrl: this.props.ipfsUrl,
                    licenseCount: this.props.licenseCount,
                    mediaTitle: this.props.mediaTitle,
                    mediaCreator: this.props.mediaCreator
                });
            }
            return _react2.default.createElement(
                'div',
                { id: "divMedia_" + this.props.mediaId },
                media
            );
        }
    }]);

    return Media;
}(_react.Component);

exports.default = Media;