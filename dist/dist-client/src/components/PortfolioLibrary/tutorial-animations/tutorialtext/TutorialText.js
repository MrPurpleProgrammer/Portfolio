'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TutorialText = function (_Component) {
    _inherits(TutorialText, _Component);

    function TutorialText() {
        _classCallCheck(this, TutorialText);

        return _possibleConstructorReturn(this, (TutorialText.__proto__ || Object.getPrototypeOf(TutorialText)).apply(this, arguments));
    }

    _createClass(TutorialText, [{
        key: 'render',
        value: function render() {
            if (this.props.tutorialStep == 0) {
                return _react2.default.createElement(
                    _reactTransitionGroup.TransitionGroup,
                    null,
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            key: 0,
                            timeout: 2000,
                            classNames: 'fade'
                        },
                        _react2.default.createElement(
                            'div',
                            { id: 'divAnimationText', className: 'tutorialText' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divStepOneText' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Title' },
                                    'Step One: Upload Your Media Into Portfolio'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Description' },
                                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                )
                            )
                        )
                    )
                );
            } else if (this.props.tutorialStep == 1) {
                return _react2.default.createElement(
                    _reactTransitionGroup.TransitionGroup,
                    null,
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            key: 1,
                            timeout: 2000,
                            classNames: 'fade'
                        },
                        _react2.default.createElement(
                            'div',
                            { id: 'divAnimationText', className: 'tutorialText' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divStepOneText' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Title' },
                                    'Step One: Upload Your Media Into Portfolio'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Description' },
                                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                )
                            )
                        )
                    )
                );
            } else if (this.props.tutorialStep == 2) {
                return _react2.default.createElement(
                    _reactTransitionGroup.TransitionGroup,
                    null,
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            key: 2,
                            timeout: 2000,
                            classNames: 'fade'
                        },
                        _react2.default.createElement(
                            'div',
                            { id: 'divAnimationText', className: 'tutorialText' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divStepOneText' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Title' },
                                    'Step One: Upload Your Media Into Portfolio'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Description' },
                                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                )
                            )
                        )
                    )
                );
            } else if (this.props.tutorialStep == 3) {
                return _react2.default.createElement(
                    _reactTransitionGroup.TransitionGroup,
                    null,
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            key: 3,
                            timeout: 2000,
                            classNames: 'fade'
                        },
                        _react2.default.createElement(
                            'div',
                            { id: 'divAnimationText', className: 'tutorialText' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divStepOneText' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Title' },
                                    'Step One: Upload Your Media Into Portfolio'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Description' },
                                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                )
                            )
                        )
                    )
                );
            } else if (this.props.tutorialStep == 4) {
                return _react2.default.createElement(
                    _reactTransitionGroup.TransitionGroup,
                    null,
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            key: 4,
                            timeout: 2000,
                            classNames: 'fade'
                        },
                        _react2.default.createElement(
                            'div',
                            { id: 'divAnimationText', className: 'tutorialText' },
                            _react2.default.createElement(
                                'div',
                                { id: 'divStepOneText' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Title' },
                                    'Step One: Upload Your Media Into Portfolio'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tutorialText_Description' },
                                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                )
                            )
                        )
                    )
                );
            }
        }
    }]);

    return TutorialText;
}(_react.Component);

exports.default = TutorialText;