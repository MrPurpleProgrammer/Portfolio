'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UploadIcon = require('../../../assets/SVG/UploadIcon.svg');

var _UploadIcon2 = _interopRequireDefault(_UploadIcon);

var _UploadInput = require('../../PortfolioLibrary/uploadInput/UploadInput.js');

var _UploadInput2 = _interopRequireDefault(_UploadInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _nouisliderMin = require('../../../../node_modules/nouislider/distribute/nouislider.min.js');

var noUiSlider = _interopRequireWildcard(_nouisliderMin);

require('../../../../node_modules/nouislider/distribute/nouislider.min.css');

require('./filter_toolbar.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function transformScroll(event) {
    if (!event.deltaY) {
        return;
    }
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
}

var FilterToolbar = function (_Component) {
    _inherits(FilterToolbar, _Component);

    function FilterToolbar(props) {
        _classCallCheck(this, FilterToolbar);

        var _this = _possibleConstructorReturn(this, (FilterToolbar.__proto__ || Object.getPrototypeOf(FilterToolbar)).call(this, props));

        _this.toggleToolbar = function () {
            if (_this.state.toolbarExpand == false) {
                (0, _jquery2.default)('#divMediaGallery').animate({ padding: '630px 65px 0px' }, 500);
                (0, _jquery2.default)("#divAccountToolbar").animate({ height: '300px' }, 500, function () {
                    _this.setState({
                        toolbarExpand: true
                    });
                    (0, _jquery2.default)('.accountToolBarContent').css({ display: "flex" });
                    (0, _jquery2.default)('#divToolBarContent').animate({ opacity: 1 }, 200);
                });
            } else if (_this.state.toolbarExpand == true) {
                (0, _jquery2.default)('#divToolBarContent').animate({ opacity: 0 }, 200);
                (0, _jquery2.default)('.accountToolBarContent').css({ display: "none" });
                (0, _jquery2.default)('#divMediaGallery').animate({ padding: '350px 65px 0px' }, 500);
                (0, _jquery2.default)("#divAccountToolbar").animate({ height: '55px' }, 500, function () {
                    _this.setState({
                        toolbarExpand: false
                    });
                });
            }
        };

        _this.state = {
            toolbarExpand: false
        };
        return _this;
    }

    _createClass(FilterToolbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _jquery2.default)(function () {
                (0, _jquery2.default)('.colorInput').on('click', function () {
                    (0, _jquery2.default)(this).closest('.colorBox').toggleClass("opacityToggle");
                });
            });
            (0, _jquery2.default)(function () {
                (0, _jquery2.default)('.tagOption').on('click', function () {
                    (0, _jquery2.default)(this).toggleClass("buttonActive");
                });
            });
            (0, _jquery2.default)(function () {
                (0, _jquery2.default)('.orientBox').on('click', function () {
                    (0, _jquery2.default)(this).find('i').toggle();
                    (0, _jquery2.default)(this).toggleClass('orientSelectBox');
                });
            });
            (0, _jquery2.default)(function () {
                (0, _jquery2.default)('.sortOption').on('click', function () {
                    (0, _jquery2.default)('.sortFilter').addClass('noOpacity');
                    (0, _jquery2.default)(this).find('div').removeClass('noOpacity');
                });
            });
            (0, _jquery2.default)(function () {
                (0, _jquery2.default)('.uploadOption').on('click', function () {
                    (0, _jquery2.default)('.uploadFilter').addClass('noOpacity');
                    (0, _jquery2.default)(this).find('div').removeClass('noOpacity');
                });
            });
            var element = document.getElementById('divAccountToolbar');
            element.addEventListener('wheel', transformScroll);
            var slider = document.getElementById('priceSlider');
            noUiSlider.create(slider, {
                start: [0, 10000],
                tooltips: [true, true],
                connect: true,
                range: {
                    'min': 1,
                    'max': 10000
                }
            });
        }
    }, {
        key: 'handleCheckBox',
        value: function handleCheckBox(o) {
            (0, _jquery2.default)(o).closest('.colorBox').css('opacity', 1);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'divAccountToolbar', className: 'accountToolbar', style: { height: '55px' } },
                _react2.default.createElement(
                    'div',
                    { className: 'accountToolBarHeader', onClick: this.toggleToolbar },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Toolbar'
                    ),
                    _react2.default.createElement('i', { className: 'fas fa-angle-double-down' })
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'divToolBarContent', className: 'accountToolBarContent' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uploadTool' },
                        _react2.default.createElement(_UploadInput2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'refineTools' },
                        _react2.default.createElement(
                            'div',
                            { className: 'refineTitle' },
                            _react2.default.createElement('i', { className: 'fas fa-filter' }),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Refine'
                            ),
                            _react2.default.createElement('i', { className: 'fas fa-chevron-down', style: { marginLeft: "12px", fontSize: "10px", paddingTop: "20px" } }),
                            _react2.default.createElement(
                                'p',
                                { style: { padding: "0px 136px" } },
                                'Clear'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'refineFilters' },
                            _react2.default.createElement(
                                'div',
                                { className: 'radioRefine' },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'toolTitle' },
                                    'Sort by'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'filterRadioOption sortOption' },
                                    _react2.default.createElement('div', { className: 'filterRadioButton_Inner sortFilter' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Best Match'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'filterRadioOption sortOption' },
                                    _react2.default.createElement('div', { className: 'filterRadioButton_Inner noOpacity sortFilter' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Newest'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'filterRadioOption sortOption' },
                                    _react2.default.createElement('div', { className: 'filterRadioButton_Inner noOpacity sortFilter' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Most Popular'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'filterRadioOption sortOption' },
                                    _react2.default.createElement('div', { className: 'filterRadioButton_Inner noOpacity sortFilter' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Oldest'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uploadRefine' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'radioRefine' },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'toolTitle' },
                                        'Upload date'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'filterRadioOption uploadOption' },
                                        _react2.default.createElement('div', { className: 'filterRadioButton_Inner uploadFilter' }),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Last 24 Hours'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'filterRadioOption uploadOption' },
                                        _react2.default.createElement('div', { className: 'filterRadioButton_Inner noOpacity uploadFilter' }),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Last 7 Days'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'filterRadioOption uploadOption' },
                                        _react2.default.createElement('div', { className: 'filterRadioButton_Inner noOpacity uploadFilter' }),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Last 30 Days'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'filterRadioOption uploadOption' },
                                        _react2.default.createElement('div', { className: 'filterRadioButton_Inner noOpacity uploadFilter' }),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Last 12 Months'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'tagColorRefine' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'colorFilters' },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'toolTitle' },
                                        'Color'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'colorOptions' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "white" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "aliceblue" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "blue" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "green" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "yellow" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "cyan" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "grey" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "black" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'colorBox', style: { backgroundColor: "red" } },
                                            _react2.default.createElement('i', { className: 'fas fa-check' }),
                                            _react2.default.createElement('input', { className: 'colorInput', type: 'checkbox' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'toggleFilters' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'tagRefine searchBarOption' },
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'toolTitle' },
                                            'Search in'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'tagOption' },
                                            'All'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'tagOption' },
                                            'Tags'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'tagRefine searchBarOption', style: { marginLeft: "30px" } },
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'toolTitle' },
                                            'Search in'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'tagOption tagOptionSmall' },
                                            'S'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'tagOption tagOptionSmall' },
                                            'M'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'tagOption tagOptionSmall' },
                                            'L'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'priceOrienttionRefine' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'priceFilters' },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'toolTitle' },
                                        'Price Range'
                                    ),
                                    _react2.default.createElement('div', { id: 'priceSlider' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'orientationFilters' },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'toolTitle' },
                                        'Orientation'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'orientationOptions' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'landscape orientBox' },
                                            _react2.default.createElement('i', { className: 'fas fa-check' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'portrait orientBox' },
                                            _react2.default.createElement('i', { className: 'fas fa-check' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'square orientBox' },
                                            _react2.default.createElement('i', { className: 'fas fa-check' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'rectangle orientBox' },
                                            _react2.default.createElement('i', { className: 'fas fa-check' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FilterToolbar;
}(_react.Component);

exports.default = FilterToolbar;