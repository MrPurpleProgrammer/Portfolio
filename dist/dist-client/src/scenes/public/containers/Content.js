'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TutorialAnimation = require('../../../components/PortfolioLibrary/tutorial-animations/TutorialAnimation.js');

var _TutorialAnimation2 = _interopRequireDefault(_TutorialAnimation);

var _TutorialText = require('../../../components/PortfolioLibrary/tutorial-animations/tutorialtext/TutorialText.js');

var _TutorialText2 = _interopRequireDefault(_TutorialText);

var _NavigationDots = require('../../../components/VarsunLibrary/navigationDots/NavigationDots.js');

var _NavigationDots2 = _interopRequireDefault(_NavigationDots);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function showScrollPosition(elm) {
    var parent = elm.parentNode,
        pos = (elm.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight) * 100;
    return Math.round(pos);
}

var Content = function (_Component) {
    _inherits(Content, _Component);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this.handleScroll = function () {
            var currentScrollPos = window.pageYOffset;
            var pos = showScrollPosition(document.body);
            var newStep;
            if (pos >= 0 && pos < 20) newStep = 0;else if (pos >= 20 && pos < 40) newStep = 1;else if (pos >= 40 && pos < 60) newStep = 2;else if (pos >= 60 && pos < 80) newStep = 3;else if (pos >= 80 && pos < 101) newStep = 4;
            _this.setState({
                prevScrollPos: currentScrollPos,
                stepNumber: newStep
            });
            console.log(_this.state, pos);
        };

        _this.state = {
            prevScrollpos: window.pageYOffset,
            stepNumber: 0
        };
        return _this;
    }

    _createClass(Content, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'divTutorialContent', className: 'parentContent' },
                _react2.default.createElement(
                    'div',
                    { className: 'tutorialAnimation' },
                    _react2.default.createElement(_NavigationDots2.default, { numberOfDots: 5, names: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"], state: this.state.stepNumber, links: [0, 3000, 5000, 7000, 10000], 'class': 'navigationDots' }),
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            'in': true,
                            appear: true,
                            timeout: 2000,
                            classNames: 'fade'
                        },
                        _react2.default.createElement(
                            'div',
                            { id: 'divTutorialSteps', className: 'tutorialSteps fade' },
                            _react2.default.createElement(_TutorialAnimation2.default, { tutorialStep: this.state.stepNumber }),
                            _react2.default.createElement(_TutorialText2.default, { tutorialStep: this.state.stepNumber })
                        )
                    )
                )
            );
        }
    }]);

    return Content;
}(_react.Component);

exports.default = Content;