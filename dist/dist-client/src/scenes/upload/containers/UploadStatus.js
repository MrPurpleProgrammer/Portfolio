'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Media = require('../../../components/VarsunLibrary/media/Media');

var _Media2 = _interopRequireDefault(_Media);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadStatus(props) {
    var location = (0, _reactRouter.useLocation)();
    var history = (0, _reactRouter.useHistory)();
    var handleUploadSource = function handleUploadSource() {
        if (typeof location.state.event != "undefined") {
            return URL.createObjectURL(location.state.event[0]);
        } else {
            console.log(location);
            return "https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg";
        }
    };
    var src = handleUploadSource();
    return _react2.default.createElement(
        'div',
        { id: 'divUploadStatusTracker' },
        _react2.default.createElement(
            'div',
            { id: 'divMediaSource', className: 'mediaUploadView' },
            _react2.default.createElement(_Media2.default, {
                mediaType: 'Image',
                src: src,
                certificateId: 1234,
                mediaId: 12345,
                ipfsUrl: 'www.helloworld.com',
                licenseCount: 1,
                mediaTitle: 'Purple',
                mediaCreator: 'MrPurple',
                format: 'upload'
            })
        ),
        _react2.default.createElement(
            'div',
            { id: 'divUploadProgressBars', className: 'progressBarContainer' },
            _react2.default.createElement(
                'p',
                null,
                'Analyzing Media Metadata'
            ),
            _react2.default.createElement(_semanticUiReact.Progress, { percent: 70, progress: true, indicating: true }),
            _react2.default.createElement(
                'p',
                null,
                'Hashing Media Metadata'
            ),
            _react2.default.createElement(_semanticUiReact.Progress, { percent: 24, progress: true }),
            _react2.default.createElement(
                'p',
                null,
                'Uploading meda to IPFS'
            ),
            _react2.default.createElement(_semanticUiReact.Progress, { percent: 0, progress: true }),
            _react2.default.createElement(
                'p',
                null,
                'Creating DMCT'
            ),
            _react2.default.createElement(_semanticUiReact.Progress, { percent: 0, progress: true }),
            _react2.default.createElement(
                'p',
                null,
                'Certifying DMCT In Ethereum'
            ),
            _react2.default.createElement(_semanticUiReact.Progress, { percent: 0, progress: true })
        )
    );
}
exports.default = UploadStatus;