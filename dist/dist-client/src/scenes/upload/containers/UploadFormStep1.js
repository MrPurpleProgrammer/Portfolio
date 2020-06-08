'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    border: ', ';\n    height: 100px;\n    width:100%;\n    margin-top: 0px;\n    text-align: center;\n    color: \n    '], ['\n    border: ', ';\n    height: 100px;\n    width:100%;\n    margin-top: 0px;\n    text-align: center;\n    color: \n    ']);

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
var UploadBoxLong = _styledComponents2.default.div(_templateObject, function (props) {
    return getBorderColor(props);
});
function UploadFormStep1(props) {
    var history = (0, _reactRouterDom.useHistory)();

    var _useDropzone = (0, _reactDropzone.useDropzone)({
        onDrop: function onDrop(e) {
            handleUpload(e, "drop");
        },
        onDragEnter: function onDragEnter() {
            (0, _jquery2.default)('.uploadText').html("Submit Evidence");
        },
        onDragLeave: function onDragLeave() {
            (0, _jquery2.default)('.uploadText').html("Upload Evidence Here");
        }
    }),
        acceptedFiles = _useDropzone.acceptedFiles,
        getRootProps = _useDropzone.getRootProps,
        isDragActive = _useDropzone.isDragActive,
        getInputProps = _useDropzone.getInputProps,
        open = _useDropzone.open;

    function handleUpload(event, state) {
        if (state == "drop") {
            var eventMod = event;
        } else {
            event.preventDefault();
            var eventMod = event.target.files;
        }
        console.log(event);
        var formData = new FormData(document.getElementById("formUploadStep1"));
        formData.append('mediaEvidence', eventMod);
    }
    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.checkbox_Style1_Label').on('click', function () {
            (0, _jquery2.default)('.checkbox_Style1_Label').removeClass('checkboxActive');
            (0, _jquery2.default)(this).parent().find('.checkbox_Style1_Input').prop('checked', true);
            (0, _jquery2.default)(this).toggleClass('checkboxActive');
        });
    });
    return _react2.default.createElement(
        'div',
        { id: 'divUploadForm_Step1', className: 'uploadForm' },
        _react2.default.createElement(
            'div',
            { id: 'divStepExplanation', className: 'stepExplainContainer' },
            _react2.default.createElement(
                'h1',
                null,
                'Its a little more complicated...'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Let me tell you why. Its because you are initiating a smart contract. We create a blockchain certified token, which encodes unique identification data into this file. This will help us track viewership, sharing, and usability of the multimedia item. We create a Digital Multimedia Certification Token (DMCT) on the blockchain. A publicly accessible, fault tolerant, distributed database to show that you are the owner of this media item.'
            )
        ),
        _react2.default.createElement(
            'div',
            { id: 'divFormStep_1', className: 'uploadFormInputContainer' },
            _react2.default.createElement(
                'form',
                { method: 'post', name: 'createCert_Step1', id: 'formUploadStep1' },
                _react2.default.createElement(
                    'div',
                    { className: 'uploadFormInput' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Title'
                    ),
                    _react2.default.createElement('input', { id: 'mediaTitle', name: 'mediaTitle', type: 'text' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uploadFormInput' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Tags'
                    ),
                    _react2.default.createElement('input', { id: 'mediaTags', name: 'mediaTags' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uploadFormInput' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Description'
                    ),
                    _react2.default.createElement('textarea', { id: 'mediaDescription', name: 'mediaDescription', className: 'uploadLongInput' })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Upload Evidence'
                ),
                _react2.default.createElement(
                    UploadBoxLong,
                    getRootProps({ isDragActive: isDragActive, className: "uploadBoxLong" }),
                    _react2.default.createElement('input', _extends({}, getInputProps(), { name: 'uploadFormEvidence', onChange: function onChange(e) {
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
                    'div',
                    { className: 'checkbox_Style1' },
                    _react2.default.createElement('input', { type: 'checkbox', id: 'storeOptionRecCheck', name: 'storeInPort', className: 'checkbox_Style1_Input' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'storeOptionRecCheck', className: 'checkbox_Style1_Label' },
                        'Store Media in Portfolio Servers (Recommended)'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'checkbox_Style1' },
                    _react2.default.createElement('input', { type: 'checkbox', id: 'box-2', name: 'storeLocal', className: 'checkbox_Style1_Input' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'box-2', className: 'checkbox_Style1_Label' },
                        'Store Media in IPFS Only'
                    )
                )
            )
        )
    );
}
exports.default = UploadFormStep1;