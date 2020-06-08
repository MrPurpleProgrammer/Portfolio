'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./media_gallery.css');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Media = require('../media/Media.js');

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaGallery = function (_Component) {
    _inherits(MediaGallery, _Component);

    function MediaGallery(props) {
        _classCallCheck(this, MediaGallery);

        var _this = _possibleConstructorReturn(this, (MediaGallery.__proto__ || Object.getPrototypeOf(MediaGallery)).call(this, props));

        _this.sortGalleryDefault = function () {
            var pw = document.getElementById('ulMediaGallery').offsetWidth;
            var mediaItems = (0, _jquery2.default)('.mediaGrid').children();
            var n = mediaItems.length;
            var tw = 0;
            for (var j = 0; j < mediaItems.length; j++) {
                tw += mediaItems[j].offsetWidth;
            }
            var orderNum = 0;
            while (orderNum != n) {
                var rs = pw;
                for (var i = 0; i < mediaItems.length; i++) {
                    if (mediaItems[i].style.order == "") {
                        rs = rs - mediaItems[i].offsetWidth;
                        if (rs > 100) {
                            mediaItems[i].style.order = orderNum;
                            orderNum++;
                        } else if (rs <= 100) {
                            rs = rs + mediaItems[i].offsetWidth;
                        }
                        console.log(mediaItems[i], rs, mediaItems[i].offsetWidth, orderNum);
                    }
                }
            }
        };

        _this.sortGalleryByAscendingWidth = function () {
            var parentWidth = document.getElementById('divMediaGallery').offsetWidth;
            var children = (0, _jquery2.default)('.mediaGrid').children();
            children.sort(function (a, b) {
                return a.offsetWidth - b.offsetWidth;
            });
            children.each(function (e) {
                document.getElementById('ulMediaGallery').appendChild(children[e]);
            });
            console.log(parentWidth, children);
        };

        _this.sortGalleryByDescendingWidth = function () {
            var parentWidth = document.getElementById('divMediaGallery').offsetWidth;
            var children = (0, _jquery2.default)('.mediaGrid').children();
            children.sort(function (a, b) {
                return b.offsetWidth - a.offsetWidth;
            });
            children.each(function (e) {
                document.getElementById('ulMediaGallery').appendChild(children[e]);
            });
            console.log(parentWidth, children);
        };

        _this.state = {
            sort: _this.props.sort
        };
        return _this;
    }

    _createClass(MediaGallery, [{
        key: 'getUserMediaList',
        value: function getUserMediaList() {
            var json = [{ id: 1231245344, mediaType: "Image", src: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 20, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1232341245, mediaType: "Image", src: "https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?cs=srgb&dl=person-in-black-jacket-walking-on-snow-covered-pathway-3494648.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 12, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231123213, mediaType: "Image", src: "https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?cs=srgb&dl=hot-air-balloons-3377538.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 4, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231127782, mediaType: "Image", src: "https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?cs=srgb&dl=chairs-furniture-indoors-interior-design-245535.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 23, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231280898, mediaType: "Image", src: "https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 14, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231212312, mediaType: "Image", src: "https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?cs=srgb&dl=running-vehicles-on-road-3347244.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 2, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231224788, mediaType: "Image", src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=photo-of-temple-during-daytime-3361480.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 0, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231227774, mediaType: "Image", src: "https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?cs=srgb&dl=assorted-color-vehicle-lot-3319097.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231223676, mediaType: "Image", src: "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231235687, mediaType: "Image", src: "https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231235467, mediaType: "Image", src: "https://images.pexels.com/photos/3476402/pexels-photo-3476402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231268832, mediaType: "Image", src: "https://images.pexels.com/photos/3484678/pexels-photo-3484678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231212356, mediaType: "Image", src: "https://images.pexels.com/photos/3536526/pexels-photo-3536526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231456862, mediaType: "Image", src: "https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231245457, mediaType: "Image", src: "https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231221325, mediaType: "Image", src: "https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?cs=srgb&dl=person-in-black-jacket-walking-on-snow-covered-pathway-3494648.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 12, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1212335312, mediaType: "Image", src: "https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?cs=srgb&dl=hot-air-balloons-3377538.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 4, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1343462312, mediaType: "Image", src: "https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?cs=srgb&dl=chairs-furniture-indoors-interior-design-245535.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 23, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231654612, mediaType: "Image", src: "https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 14, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231234442, mediaType: "Image", src: "https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?cs=srgb&dl=running-vehicles-on-road-3347244.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 2, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1232346512, mediaType: "Image", src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=photo-of-temple-during-daytime-3361480.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 0, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231234572, mediaType: "Image", src: "https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?cs=srgb&dl=assorted-color-vehicle-lot-3319097.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1234687312, mediaType: "Image", src: "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1234877312, mediaType: "Image", src: "https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1234784252, mediaType: "Image", src: "https://images.pexels.com/photos/2304917/pexels-photo-2304917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231223222, mediaType: "Image", src: "https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 14, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1233479812, mediaType: "Image", src: "https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?cs=srgb&dl=running-vehicles-on-road-3347244.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 2, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231231112, mediaType: "Image", src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=photo-of-temple-during-daytime-3361480.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 0, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1233456712, mediaType: "Image", src: "https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?cs=srgb&dl=assorted-color-vehicle-lot-3319097.jpg&fm=jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231245656, mediaType: "Image", src: "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }, { id: 1231345542, mediaType: "Image", src: "https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }];
            return json;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            /*window.addEventListener('load', this.sortGalleryDefault);*/
        }
    }, {
        key: 'render',
        value: function render() {
            var mediaJson = this.getUserMediaList();
            var mediaList = mediaJson.map(function (e) {
                return _react2.default.createElement(_Media2.default, {
                    key: e.id,
                    mediaType: e.mediaType,
                    src: e.src,
                    certificateId: e.certificateId,
                    mediaId: e.mediaId,
                    ipfsUrl: e.ipfsUrl,
                    licenseCount: e.licenseCount,
                    mediaTitle: e.mediaTitle,
                    mediaCreator: e.mediaCreator,
                    format: 'thumbnail'
                });
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'divMediaGallery', className: 'galleryContainer' },
                    _react2.default.createElement(
                        'ul',
                        { id: 'ulMediaGallery', className: 'mediaGrid' },
                        mediaList
                    )
                )
            );
        }
    }]);

    return MediaGallery;
}(_react.Component);

exports.default = MediaGallery;