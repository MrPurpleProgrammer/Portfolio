'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _reactRouterDom = require('react-router-dom');

var _ProfileHeader = require('../../components/PortfolioLibrary/profileHeader/ProfileHeader');

var _ProfileHeader2 = _interopRequireDefault(_ProfileHeader);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _UploadStatus = require('./containers/UploadStatus');

var _UploadStatus2 = _interopRequireDefault(_UploadStatus);

var _UploadFormStep = require('./containers/UploadFormStep1');

var _UploadFormStep2 = _interopRequireDefault(_UploadFormStep);

var _UploadFormStep3 = require('./containers/UploadFormStep2');

var _UploadFormStep4 = _interopRequireDefault(_UploadFormStep3);

var _UploadFormStep5 = require('./containers/UploadFormStep3');

var _UploadFormStep6 = _interopRequireDefault(_UploadFormStep5);

var _UploadFormStep7 = require('./containers/UploadFormStep4');

var _UploadFormStep8 = _interopRequireDefault(_UploadFormStep7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Upload(props) {
    var location = (0, _reactRouterDom.useLocation)();
    var history = (0, _reactRouterDom.useHistory)();
    var backButton = function backButton() {
        return history.goBack();
    };
    function nextButton() {
        var e = location.state;
        var formData = new FormData(document.getElementById("formUploadStep1"));
        formData.append(e.inputName, e.event[0]);
        console.log(formData);
        fetch('http://localhost:5000/upload/create/', {
            mode: 'cors',
            method: 'post',
            body: formData
        });
        setUploadFormState(UploadFormState + 1);
    }

    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        UploadFormState = _useState2[0],
        setUploadFormState = _useState2[1];

    var renderUploadForm = function renderUploadForm() {
        if (UploadFormState == 0) {
            return _react2.default.createElement(_UploadFormStep2.default, null);
        } else if (UploadFormState == 1) {
            return _react2.default.createElement(_UploadFormStep4.default, null);
        } else if (UploadFormState == 2) {
            return _react2.default.createElement(_UploadFormStep6.default, null);
        } else if (UploadFormState == 3) {
            return _react2.default.createElement(_UploadFormStep8.default, null);
        } else {
            setUploadFormState(0);
            return _react2.default.createElement(_UploadFormStep2.default, null);
        }
    };
    var handlePreviousButton = function handlePreviousButton() {
        if (UploadFormState != 0) {
            return _react2.default.createElement(
                'button',
                { className: 'formSecondaryButton', onClick: function onClick() {
                        setUploadFormState(UploadFormState - 1);
                    } },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Previous'
                )
            );
        } else {
            return;
        }
    };
    var handleNextButton = function handleNextButton() {
        if (UploadFormState == 2) {
            return _react2.default.createElement(
                'button',
                { className: 'formMainButton', onClick: function onClick() {
                        nextButton();
                    } },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Submit'
                )
            );
        } else {
            return _react2.default.createElement(
                'button',
                { className: 'formMainButton', onClick: function onClick() {
                        setUploadFormState(UploadFormState + 1);
                    } },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Next'
                )
            );
        }
    };
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
            { id: 'accountContent', className: 'accountContentContainer' },
            _react2.default.createElement(_ProfileHeader2.default, { sceneState: 'account' }),
            _react2.default.createElement(
                'div',
                { id: 'divAccountToolbar', className: 'accountToolbar uploadFormParent' },
                _react2.default.createElement(
                    'div',
                    { id: 'divUploadFormHeader', className: 'uploadHeader' },
                    _react2.default.createElement(
                        'div',
                        { className: 'closeView uploadClose', onClick: backButton },
                        _react2.default.createElement('i', { className: 'fas fa-times' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'accountToolBarHeader fitContent' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Toolbar'
                        ),
                        _react2.default.createElement('i', { className: 'fas fa-angle-double-down' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'divUploadFormContent', className: 'uploadContainer' },
                    _react2.default.createElement(
                        'div',
                        { id: 'divUploadStatusTracker', className: 'uploadStatusContainer' },
                        _react2.default.createElement(_UploadStatus2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'divUploadForm', className: 'uploadFormContainer' },
                        renderUploadForm(),
                        _react2.default.createElement(
                            'div',
                            { id: 'divButtonContainer', className: 'uploadButtonContainer' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divShareButtons', className: 'formNavButtons' },
                                handlePreviousButton(),
                                handleNextButton(),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'formSecondaryButton', onClick: backButton },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Cancel'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
exports.default = Upload;