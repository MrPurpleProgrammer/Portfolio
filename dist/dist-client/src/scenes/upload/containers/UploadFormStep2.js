'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadFormStep2(props) {
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
                'These are the Terms...'
            ),
            _react2.default.createElement(
                'div',
                { id: 'terms-and-conditions' },
                _react2.default.createElement(
                    'strong',
                    null,
                    'Terms and Conditions'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.'
                )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { id: 'privacy-notice' },
                _react2.default.createElement(
                    'strong',
                    null,
                    'Privacy Notice'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Cum dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna.'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { id: 'divFormStep_2', className: 'uploadFormInputContainer' },
            _react2.default.createElement(
                'div',
                { className: 'uploadFormInput' },
                _react2.default.createElement(
                    'label',
                    null,
                    'Confirm with Unique UserHash:'
                ),
                _react2.default.createElement('input', { id: 'mediaTitle', name: 'mediaTitle', type: 'text' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'checkbox_Style1' },
                _react2.default.createElement('input', { type: 'checkbox', id: 'termsAgreeCheck', className: 'checkbox_Style1_Input' }),
                _react2.default.createElement(
                    'label',
                    { htmlFor: 'termsAgreeCheck', className: 'checkbox_Style1_Label', style: { margin: "15px 0px 40px 0px" } },
                    ' I hereby Agree to the Terms and Conditions'
                )
            )
        )
    );
}
exports.default = UploadFormStep2;