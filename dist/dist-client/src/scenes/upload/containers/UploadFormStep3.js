'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactRouterDom = require('react-router-dom');

var _ProfileHeader = require('../../../components/PortfolioLibrary/profileHeader/ProfileHeader');

var _ProfileHeader2 = _interopRequireDefault(_ProfileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadFormStep3(props) {
    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.checkbox_Style1_Label').on('click', function () {
            (0, _jquery2.default)(this).toggleClass('checkboxActive');
            (0, _jquery2.default)(this).parent().find('.checkbox_Style1_Input').toggleClass('check');
        });
    });
    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.check').on('click', function () {
            (0, _jquery2.default)(this).prop('checked', true);
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
                'It costs money...'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Let me tell you why. Its because you are initiating a smart contract to create a DMCT token on the blockchain. To insert anything into the blockchain you need to pay network fees for storing data into this publicly accessible fault tolerant database. Meaning anyone and everyone has access to the confirm ownership of these media and the can track its token transaction history.  Track and control usage and distribution of media on the internet, and claim more value through a new type of token economics.'
            )
        ),
        _react2.default.createElement(
            'div',
            { id: 'divFormStep_3', className: 'uploadFormInputContainer' },
            _react2.default.createElement(
                'div',
                { className: 'uploadFormInput' },
                _react2.default.createElement(
                    'label',
                    null,
                    'Confirm with Account Password:'
                ),
                _react2.default.createElement('input', { id: 'mediaTitle', name: 'mediaTitle', type: 'text' })
            ),
            _react2.default.createElement(
                'div',
                { id: 'divAltLoginInputs', style: { display: 'block', height: 'fit-content' } },
                _react2.default.createElement(
                    'div',
                    { className: 'altbuttonContainer_Style1' },
                    _react2.default.createElement(
                        'button',
                        { id: 'btnAltLogin', className: 'altLoginButton_Style1 mt10' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Connect With Dapper'
                        ),
                        _react2.default.createElement('p', null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'altbuttonContainer_Style1' },
                    _react2.default.createElement(
                        'button',
                        { id: 'btnAltLogin', className: 'altLoginButton_Style1 mt10' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Connect With Metamask'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'altbuttonContainer_Style1' },
                    _react2.default.createElement(
                        'button',
                        { id: 'btnAltLogin', className: 'altLoginButton_Style1 mt10' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Connect With Ledger Wallet'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'altbuttonContainer_Style1' },
                    _react2.default.createElement(
                        'button',
                        { id: 'btnAltLogin', className: 'altLoginButton_Style1 mt10' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Connect With Trezor Wallet'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'altbuttonContainer_Style1' },
                    _react2.default.createElement(
                        'button',
                        { id: 'btnAltLogin', className: 'altLoginButton_Style1 mt10' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Connect With Keystore File'
                        )
                    )
                )
            )
        )
    );
}
exports.default = UploadFormStep3;