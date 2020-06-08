'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n    border: ', ';\n    height: 170px;width: 190px;\n    margin-top: 0px;\n    text-align: center;\n    color: \n    '], ['\n    border: ', ';\n    height: 170px;width: 190px;\n    margin-top: 0px;\n    text-align: center;\n    color: \n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UploadIcon = require('../../../assets/SVG/UploadIcon.svg');

var _UploadIcon2 = _interopRequireDefault(_UploadIcon);

var _reactDropzone = require('react-dropzone');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBorderColor = function getBorderColor(props) {
    if (props.isDragActive) {
        return '#ff0051 2px dashed';
    }
    return '#cccccc 2px dashed';
};
var UploadBox = _styledComponents2.default.div(_templateObject, function (props) {
    return getBorderColor(props);
});

function UploadInput(props) {
    var history = (0, _reactRouterDom.useHistory)();

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isUploadActive = _useState2[0],
        setUploadStatus = _useState2[1];

    var handleUpload = function handleUpload(e, state) {
        console.log(e);
        if (state == "drop") {
            var eventMod = e;
        } else {
            e.preventDefault();
            var eventMod = e.target.files;
        }
        history.push({
            pathname: '/Upload',
            search: "?mediaType=jpeg&uploadStatus=true",
            state: { event: eventMod, inputName: e.target.name }
        });
    };

    var _useDropzone = (0, _reactDropzone.useDropzone)({
        onDrop: function onDrop(e) {
            handleUpload(e, "drop");
        },
        onDragEnter: function onDragEnter() {
            (0, _jquery2.default)('.uploadText').html("Initiate Upload Form");
        },
        onDragLeave: function onDragLeave() {
            (0, _jquery2.default)('.uploadText').html("Upload Media Here");
        }
    }),
        acceptedFiles = _useDropzone.acceptedFiles,
        getRootProps = _useDropzone.getRootProps,
        isDragActive = _useDropzone.isDragActive,
        getInputProps = _useDropzone.getInputProps,
        open = _useDropzone.open;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'toolTitle' },
            _react2.default.createElement(
                'p',
                null,
                'Add to your Portfolio'
            ),
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
        ),
        _react2.default.createElement(
            UploadBox,
            getRootProps({ isDragActive: isDragActive, className: "uploadBox" }),
            _react2.default.createElement('input', _extends({}, getInputProps(), { name: 'toolbarMediaUpload', onChange: function onChange(e) {
                    handleUpload(e);
                } })),
            _react2.default.createElement('img', { src: _UploadIcon2.default }),
            _react2.default.createElement(
                'p',
                { className: 'uploadText' },
                'Upload Media Here'
            )
        ),
        _react2.default.createElement(
            'button',
            { className: 'uploadToolText', onClick: open },
            'Browse Folder'
        )
    );
}
exports.default = UploadInput;