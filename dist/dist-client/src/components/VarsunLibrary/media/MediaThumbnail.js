"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaThumbnail = function (_Component) {
    _inherits(MediaThumbnail, _Component);

    function MediaThumbnail() {
        _classCallCheck(this, MediaThumbnail);

        return _possibleConstructorReturn(this, (MediaThumbnail.__proto__ || Object.getPrototypeOf(MediaThumbnail)).apply(this, arguments));
    }

    _createClass(MediaThumbnail, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "li",
                { className: "mediaType" },
                _react2.default.createElement(
                    "div",
                    { className: "mediaContainer",
                        "data-asset": this.props.mediaType,
                        "data-certificate": this.props.certificateID
                    },
                    _react2.default.createElement("img", { className: "mediaThumbnail", src: this.props.src,
                        "data-source": this.props.ipfsUrl,
                        "data-dimensions": { Obj: "42" }
                    }),
                    _react2.default.createElement(
                        "div",
                        { id: "divMediaOverlay", className: "mediaOverlay" },
                        _react2.default.createElement(
                            "div",
                            { className: "overlayMetrics" },
                            _react2.default.createElement(
                                "p",
                                { className: "mediaTitle" },
                                this.props.mediaTitle
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "mediaBy" },
                                this.props.mediaCreator
                            ),
                            _react2.default.createElement("i", { className: "fas fa-link" }),
                            _react2.default.createElement(
                                "p",
                                null,
                                this.props.licenseCount
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MediaThumbnail;
}(_react.Component);

exports.default = MediaThumbnail;