'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

var _highchartsReactOfficial = require('highcharts-react-official');

var _highchartsReactOfficial2 = _interopRequireDefault(_highchartsReactOfficial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadChart = function (_Component) {
    _inherits(UploadChart, _Component);

    function UploadChart() {
        _classCallCheck(this, UploadChart);

        return _possibleConstructorReturn(this, (UploadChart.__proto__ || Object.getPrototypeOf(UploadChart)).apply(this, arguments));
    }

    _createClass(UploadChart, [{
        key: 'render',
        value: function render() {
            var options = {
                chart: {
                    backgroundColor: '#09183C'
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                annotations: {
                    labels: {
                        format: "{value}"
                    }
                },
                title: {
                    text: "Upload Activity",
                    style: { "color": '#ffffff', "font-size": "12px", "border-bottom": "1px solid #ffffff" },
                    useHtml: true,
                    y: 0
                },
                xAxis: {
                    visible: false,
                    title: {
                        text: ""
                    },
                    minorGridLineWidth: 0,
                    gridLineWidth: 0,
                    minorTicks: false,
                    showFirstLabel: false,
                    showLastLabel: false,
                    startOnTick: false,
                    lineWidth: 1
                },
                yAxis: {
                    visible: false,
                    title: {
                        text: ""
                    },
                    minorGridLineWidth: 0,
                    gridLineWidth: 0,
                    minorTicks: false,
                    showFirstLabel: false,
                    showLastLabel: false,
                    startOnTick: false,
                    lineWidth: 1
                },
                plotOptions: {
                    column: {
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            style: {
                                color: 'white',
                                font: '8px Montserrat, sans-serif',
                                fontWeight: 'normal'
                            },
                            filter: {
                                property: 'y',
                                operator: '>',
                                value: 10
                            },
                            position: 'center'
                        },
                        borderRadius: 3,
                        fillColor: '#ffffff',
                        fillOpacity: 1
                    }
                },
                tooltip: {
                    enabled: false,
                    color: '#ffffff',
                    backgroundColor: '#09183C',
                    borderColor: '#09183C',
                    borderRadius: 0,
                    borderWidth: 0,
                    headerFormat: "<span style='font-size: 10px'></span>",
                    shadow: false,
                    style: { color: '#ffffff' }
                },
                series: [{
                    name: 'Upload Count',
                    color: '#FFF',
                    type: 'column',
                    data: [0, 2, 5, 16, 0, 6, 15, 17, 0, 0, 21, 8, 11, 0, 2, 10, 4, 0, 2, 8, 2, 12, 4, 2, 2, 4, 13, 4, 0, 10, 12, 0, 2, 0, 5, 9, 12, 4, 0, 0],
                    dataLabels: {
                        color: 'white',
                        font: '8px Montserrat, sans-serif',
                        fontWeight: 'normal'
                    }
                }],
                legend: {
                    enabled: false
                }
            };
            return _react2.default.createElement(
                'div',
                { id: 'uploadChart' },
                _react2.default.createElement(_highchartsReactOfficial2.default, { highcharts: _highcharts2.default, options: options, containerProps: { className: 'uploadChart' } })
            );
        }
    }]);

    return UploadChart;
}(_react.Component);

exports.default = UploadChart;