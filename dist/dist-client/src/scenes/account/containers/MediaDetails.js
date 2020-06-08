'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _UploadChart = require('../../../components/PortfolioLibrary/uploadChart/UploadChart.js');

var _UploadChart2 = _interopRequireDefault(_UploadChart);

var _MediaGallery = require('../../../components/VarsunLibrary/mediaGallery/MediaGallery');

var _MediaGallery2 = _interopRequireDefault(_MediaGallery);

var _ProfileButton = require('../../../components/PortfolioLibrary/profileButton/ProfileButton.js');

var _ProfileButton2 = _interopRequireDefault(_ProfileButton);

var _Logo = require('../../../components/PortfolioLibrary/logo/Logo.js');

var _Logo2 = _interopRequireDefault(_Logo);

var _Media = require('../../../components/VarsunLibrary/media/Media.js');

var _Media2 = _interopRequireDefault(_Media);

require('../../../components/VarsunLibrary/mediaGallery/media_gallery.css');

var _NavigationDots = require('../../../components/VarsunLibrary/navigationDots/NavigationDots.js');

var _NavigationDots2 = _interopRequireDefault(_NavigationDots);

var _ProfileHeader = require('../../../components/PortfolioLibrary/profileHeader/ProfileHeader');

var _ProfileHeader2 = _interopRequireDefault(_ProfileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaJson = { mediaType: "Image", src: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 20, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" };

var MediaDetails = function MediaDetails(props) {
    var state = {
        stepNumber: 0
    };
    var divHeight = function divHeight() {
        var innerHeight = window.innerHeight;
        return innerHeight - 400;
    };
    var location = (0, _reactRouterDom.useLocation)();
    var history = (0, _reactRouterDom.useHistory)();
    var backButton = function backButton() {
        return history.goBack();
    };
    console.log(location, props);
    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.ResOption').on('click', function () {
            (0, _jquery2.default)('.ResFilter').css('background-color', '#ffffff');
            (0, _jquery2.default)(this).find('.RadioOption_Inner').css('background-color', '#ff004f');
        });
    });
    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.menuButton').on('click', function () {
            (0, _jquery2.default)('.menuButton').removeClass('activeButton');
            (0, _jquery2.default)(this).addClass('activeButton');
        });
    });
    return _react2.default.createElement(
        'div',
        { id: 'accountContent', className: 'accountContentContainer' },
        _react2.default.createElement(_ProfileHeader2.default, { sceneState: 'account' }),
        _react2.default.createElement(
            'div',
            { id: 'divContent' },
            _react2.default.createElement(
                'div',
                { id: 'divMediaGallery', className: 'horizontalGallery' },
                _react2.default.createElement(
                    'div',
                    { id: 'divLeftRightNav', className: 'mediaGallerySlimNav' },
                    _react2.default.createElement('i', { className: 'fas fa-long-arrow-alt-left' }),
                    _react2.default.createElement('i', { className: 'fas fa-long-arrow-alt-right' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'closeView', onClick: backButton },
                    _react2.default.createElement('i', { className: 'fas fa-times' })
                )
            ),
            _react2.default.createElement(
                'div',
                { id: 'divMediaContent', className: 'row' },
                _react2.default.createElement(
                    'div',
                    { id: 'divMediaView', className: 'mediaViewParent', style: { height: { divHeight: divHeight } } },
                    _react2.default.createElement(
                        'div',
                        { id: 'divMediaSource', className: 'mediaView' },
                        _react2.default.createElement(_Media2.default, {
                            mediaType: location.state.mediaType,
                            src: location.state.src,
                            certificateId: location.state.certificateId,
                            mediaId: mediaJson.mediaId,
                            ipfsUrl: mediaJson.ipfsUrl,
                            licenseCount: mediaJson.licenseCount,
                            mediaTitle: location.state.mediaTitle,
                            mediaCreator: location.state.mediaCreator,
                            format: 'detailed'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'divMediaMetrics', className: 'none' },
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
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'divMediaInfo', className: 'mediaContent', style: { height: { divHeight: divHeight } } },
                    _react2.default.createElement(
                        'div',
                        { className: 'menuButtons' },
                        _react2.default.createElement(
                            'div',
                            { className: 'buttonsContainer' },
                            _react2.default.createElement(
                                'div',
                                { id: "menuButton_1_" + location.state.mediaId, className: 'menuButton activeButton' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Share'
                                ),
                                _react2.default.createElement('i', { className: 'fas fa-star' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: "menuButton_2_" + location.state.mediaId, className: 'menuButton' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Certificates'
                                ),
                                _react2.default.createElement('i', { className: 'fas fa-award' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: "menuButton_3_" + location.state.mediaId, className: 'menuButton' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Licenses'
                                ),
                                _react2.default.createElement('i', { className: 'fas fa-clone' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: "menuButton_4_" + location.state.mediaId, className: 'menuButton' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Media Stats'
                                ),
                                _react2.default.createElement('i', { className: 'fas fa-download' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: "menuButton_5_" + location.state.mediaId, className: 'menuButton' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Token Stats'
                                ),
                                _react2.default.createElement('i', { className: 'fas fa-comment' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mediaContentContainer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mediaShare_Section section' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divMediaTitle', className: 'mediaTitle' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Lorem Ipsum dummy text and other stuff, and more stuff. etc. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'divMediaSubTitle' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mediaBody' },
                                    ' Lorem Ipsum dummy text and other stuff, and more stuff. etc. Lorem Ipsum dummy text and other stuff, and more stuff. etc. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'divMediaTags' },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'mediaHeader' },
                                    'Media Tags'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tagContainer' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Lightbulb,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Red,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Night Life,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Sunrise,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'MrPurple,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Animals,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Bunny,'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tags' },
                                        'Something,'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'divMediaShare', style: { marginTop: "-15px" } },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'mediaHeader' },
                                    'Share Media'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'RadioOption ResOption' },
                                    _react2.default.createElement('div', { className: 'RadioOption_Inner ResFilter', style: { backgroundColor: '#ff004f' } }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'RadioOption_Text' },
                                        _react2.default.createElement(
                                            'h1',
                                            null,
                                            'High Resolution'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Lorem Ipsum dummy text and other stuff, and more stuff. etc. '
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'RadioOption ResOption' },
                                    _react2.default.createElement('div', { className: 'RadioOption_Inner ResFilter' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'RadioOption_Text' },
                                        _react2.default.createElement(
                                            'h1',
                                            null,
                                            'Low Resolution'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Lorem Ipsum dummy text and other stuff, and more stuff. etc. '
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { id: 'divShareButtons', className: 'mediaShareButtons' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'shareButton' },
                                        _react2.default.createElement(
                                            'h1',
                                            null,
                                            'Share'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'downloadButton' },
                                        _react2.default.createElement(
                                            'h1',
                                            null,
                                            'Download'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'divMediaAnnotations', className: 'mediaAnnotations' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'annotation' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Certificate:'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Burst Some Certification'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'annotation' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'License:'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Burst Some Rights Reserved'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = MediaDetails;