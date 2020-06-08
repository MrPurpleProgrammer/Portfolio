"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./stepone.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepOne = function (_Component) {
  _inherits(StepOne, _Component);

  function StepOne() {
    _classCallCheck(this, StepOne);

    return _possibleConstructorReturn(this, (StepOne.__proto__ || Object.getPrototypeOf(StepOne)).apply(this, arguments));
  }

  _createClass(StepOne, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "svg",
          { id: "Laptop", viewBox: "0 0 1121.72 1021" },
          _react2.default.createElement(
            "defs",
            null,
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient",
                x1: 141.66,
                y1: 3402.05,
                x2: 870.21,
                y2: 3402.05,
                gradientTransform: "matrix(1, 0, 0, -1, 0, 4170)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#bc82ff" }),
              _react2.default.createElement("stop", { offset: 0.12, stopColor: "#b782ff" }),
              _react2.default.createElement("stop", { offset: 0.22, stopColor: "#a980ff" }),
              _react2.default.createElement("stop", { offset: 0.34, stopColor: "#917eff" }),
              _react2.default.createElement("stop", { offset: 0.46, stopColor: "#707aff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#5778ff" })
            ),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-2",
                x1: -211.42,
                y1: -3452.05,
                x2: 306.33,
                y2: -3452.05,
                gradientTransform: "translate(39.75 3814.82) rotate(4.85)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#c0d6ff" }),
              _react2.default.createElement("stop", { offset: 0.3, stopColor: "#c5dbff" }),
              _react2.default.createElement("stop", { offset: 0.65, stopColor: "#d3e9ff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#e9ffff" })
            ),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-3",
                x1: -211.46,
                y1: -3318.75,
                x2: -122.42,
                y2: -3318.75,
                gradientTransform: "translate(39.75 3814.82) rotate(4.85)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#5778ff" }),
              _react2.default.createElement("stop", { offset: 0.18, stopColor: "#5c7dff" }),
              _react2.default.createElement("stop", { offset: 0.39, stopColor: "#6a8aff" }),
              _react2.default.createElement("stop", { offset: 0.61, stopColor: "#82a0ff" }),
              _react2.default.createElement("stop", { offset: 0.85, stopColor: "#a3beff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#bcd5ff" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-4",
              x1: -142.1,
              y1: -3168.63,
              x2: 589.24,
              y2: -3168.63,
              xlinkHref: "#linear-gradient-3"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-5",
              x1: 103.72,
              y1: -3193.14,
              x2: 835.33,
              y2: -3193.14,
              xlinkHref: "#linear-gradient-2"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-6",
              x1: 227.62,
              y1: -3151.52,
              x2: 414.75,
              y2: -3151.52,
              xlinkHref: "#linear-gradient-2"
            }),
            _react2.default.createElement(
              "clipPath",
              { id: "clip-path", transform: "translate(101.22 -0.5)" },
              _react2.default.createElement("polygon", {
                points: "598.34 114.98 146.74 327.96 173.42 648.8 624.65 435.82 598.34 114.98",
                fill: "none"
              })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-7",
              x1: -175.86,
              y1: -3356.38,
              x2: 555.77,
              y2: -3356.38,
              xlinkHref: "#linear-gradient-2"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-8",
              x1: -223.91,
              y1: -3410.36,
              x2: -36.78,
              y2: -3410.36,
              xlinkHref: "#linear-gradient-2"
            })
          ),
          _react2.default.createElement(
            "title",
            null,
            'Laptop'
          ),
          _react2.default.createElement("rect", { x: 100.72, width: 1021, height: 1021, fill: "none" }),
          _react2.default.createElement("path", {
            id: "Laptop_Wire_Path",
            "data-name": "Laptop Wire Path",
            d: "M212.58,846.4l-64.75-49a12.94,12.94,0,0,1,2.87-21.72L615.8,561.11a13.11,13.11,0,0,1,13.11,1.23L863.3,732.45a13,13,0,0,1-2,22.34L402.3,974.7a13.08,13.08,0,0,1-13.11-1L213.6,847.43A4.8,4.8,0,0,0,212.58,846.4Z",
            transform: "translate(101.22 -0.5)",
            fill: "none",
            strokeMiterlimit: 10,
            strokeWidth: 3,
            stroke: "url(#linear-gradient)"
          }),
          _react2.default.createElement("path", {
            id: "Laptop_Shadow_Path",
            "data-name": "Laptop Shadow Path",
            d: "M256.24,831.36l-55.37-40a10.34,10.34,0,0,1,2.45-17.75L601.09,598.32a11.64,11.64,0,0,1,11.22,1l200.46,139A10.41,10.41,0,0,1,811,756.52L418.5,936.16a11.62,11.62,0,0,1-11.21-.83L257.12,832.2A3.68,3.68,0,0,0,256.24,831.36Z",
            transform: "translate(101.22 -0.5)",
            fill: "#242993",
            opacity: 0.5
          }),
          _react2.default.createElement(
            "g",
            { id: "Laptop_Device" },
            _react2.default.createElement(
              "g",
              { id: "Laptop_Screen", "data-name": "Laptop Screen" },
              _react2.default.createElement("path", {
                d: "M634,433.26,606.2,95.42,610.76,94l-6.39-4.39h0c-1.28-.92-3.11-1.1-5.3,0L130.84,310.41c-3.84,1.83-7.13,6.95-6.76,11L152,662a4.55,4.55,0,0,0,2,3.65h0l6.21,4.39,1.65-6h-.37L627.21,444.23C631.05,442.4,634.34,437.1,634,433.26Z",
                transform: "translate(101.22 -0.5)",
                fill: "url(#linear-gradient-2)"
              }),
              _react2.default.createElement("path", {
                d: "M132.48,319.73l-7.12-3.83a10.69,10.69,0,0,0-1.47,5.48l28,340.59a4.55,4.55,0,0,0,2,3.65h0l6.21,4.39,1.64-6h-.36l23.58-11.15Z",
                transform: "translate(101.22 -0.5)",
                fill: "url(#linear-gradient-3)"
              }),
              _react2.default.createElement("path", {
                d: "M634,448.8l-468.41,221c-3.65,1.64-6.39.36-6.76-3.29L130.84,326c-.37-3.84,2.92-9.14,6.76-11L606,94c3.66-1.65,6.4-.37,6.76,3.29l28,340.58C640.92,441.86,637.81,447,634,448.8Z",
                transform: "translate(101.22 -0.5)",
                fill: "#242993"
              }),
              _react2.default.createElement("polygon", {
                points: "699.55 114.48 247.96 327.46 274.64 648.3 725.87 435.32 699.55 114.48",
                fill: "#4553c7"
              })
            ),
            _react2.default.createElement(
              "g",
              { id: "Laptop_Base", "data-name": "Laptop Base" },
              _react2.default.createElement("path", {
                d: "M901.17,631.62l-25.4,10.79L643.3,479.88c-3.84-2.74-11-3.11-16.09-.73L185.12,687.74c-3.84-2.56-21.57-13-21.57-13l6.95,24.14h0a4.83,4.83,0,0,0,2.19,2.92L417.4,873.12c3.84,2.74,11,3.11,16.09.73L885.82,660.32a8.54,8.54,0,0,0,4-3.47h0Z",
                transform: "translate(101.22 -0.5)",
                fill: "url(#linear-gradient-4)"
              }),
              _react2.default.createElement("path", {
                d: "M897.15,635.46,433.49,854.29c-5.12,2.38-12.43,2-16.45-.73L166.11,678.06c-4-2.75-3.11-6.95,2-9.33L631.78,449.9c5.12-2.38,12.43-2,16.45.73L899.16,626.14C903,628.88,902.08,633.08,897.15,635.46Z",
                transform: "translate(101.22 -0.5)",
                fill: "url(#linear-gradient-5)"
              }),
              _react2.default.createElement("path", {
                d: "M304.83,787.38l.36-4.94c0-.55.37-.73.73-.36l16.27,11.33a1.44,1.44,0,0,1,.55,1.28l-.37,4.94c0,.55-.37.73-.73.36l-16.27-11.33A2,2,0,0,1,304.83,787.38Z",
                transform: "translate(101.22 -0.5)",
                fill: "#2859cb"
              }),
              _react2.default.createElement("path", {
                d: "M329.13,804.38l.37-4.93c0-.55.36-.74.73-.37l16.26,11.33a1.43,1.43,0,0,1,.55,1.28l-.36,4.94c0,.55-.37.73-.73.37l-16.27-11.34A2,2,0,0,1,329.13,804.38Z",
                transform: "translate(101.22 -0.5)",
                fill: "#2859cb"
              }),
              _react2.default.createElement("path", {
                d: "M236.11,669.46,621.36,487.74a7.61,7.61,0,0,1,7.86.73l124.46,87.21a2.83,2.83,0,0,1-.36,4.93L368.24,762.33a7.59,7.59,0,0,1-7.86-.73l-124.64-87A3,3,0,0,1,236.11,669.46Z",
                transform: "translate(101.22 -0.5)",
                fill: "#adc8ff"
              }),
              _react2.default.createElement("path", {
                d: "M235.74,674.4l1.28.91L621,494.14a7.61,7.61,0,0,1,7.86.73L752,581.16l1.46-.73a2.84,2.84,0,0,0,.36-4.93L629.41,488.29a8.08,8.08,0,0,0-7.86-.73L236.29,669.28A3,3,0,0,0,235.74,674.4Z",
                transform: "translate(101.22 -0.5)",
                fill: "#91afff"
              }),
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("polygon", {
                  points: "738.85 507.9 404.21 665.86 390.69 656.35 725.32 498.58 738.85 507.9",
                  fill: "#242993"
                }),
                _react2.default.createElement("polygon", {
                  points: "771.92 531.12 457.94 679.2 444.42 669.69 758.4 521.61 771.92 531.12",
                  fill: "#242993"
                }),
                _react2.default.createElement("polygon", {
                  points: "793.49 546.11 423.77 720.52 410.25 711.19 779.97 536.79 793.49 546.11",
                  fill: "#242993"
                }),
                _react2.default.createElement("polygon", {
                  points: "815.06 561.28 445.33 735.69 431.81 726.18 801.53 551.78 815.06 561.28",
                  fill: "#242993"
                }),
                _react2.default.createElement("polygon", {
                  points: "836.44 576.27 466.9 750.68 453.38 741.17 823.1 566.95 836.44 576.27",
                  fill: "#242993"
                }),
                _react2.default.createElement("polygon", {
                  points: "383.93 675.36 368.94 682.49 355.6 672.99 370.4 666.04 383.93 675.36",
                  fill: "#242993"
                }),
                _react2.default.createElement("polygon", {
                  points: "432.91 690.9 402.02 705.53 388.68 696.2 419.57 681.58 432.91 690.9",
                  fill: "#242993"
                })
              ),
              _react2.default.createElement("path", {
                d: "M613.32,753.56l103.81-49c4-1.82,4.39-5.48.73-8l-64.33-45.16c-3.65-2.56-9.87-3.1-14.07-1.28l-103.81,49c-4,1.83-4.39,5.48-.73,8l64.33,45.16C602.91,754.84,609.12,755.39,613.32,753.56Z",
                transform: "translate(101.22 -0.5)",
                fill: "url(#linear-gradient-6)"
              }),
              _react2.default.createElement("path", {
                d: "M535.28,702.55l103.81-49c4-1.83,10.42-1.46,14.07,1.28L717.5,700a5.79,5.79,0,0,1,2.19,2.56c1.28-1.83.55-4.2-2-5.85l-64.33-45.15c-3.66-2.56-9.87-3.11-14.08-1.28l-103.8,49c-2.74,1.28-3.84,3.48-2.93,5.49A5.68,5.68,0,0,1,535.28,702.55Z",
                transform: "translate(101.22 -0.5)",
                fill: "#91afff"
              })
            ),
            _react2.default.createElement(
              "g",
              {
                id: "Screen_Shadow",
                "data-name": "Screen Shadow",
                opacity: 0.11,
                style: {
                  isolation: 'isolate'
                }
              },
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", {
                      d: "M632.33,449.35,168.67,668c-5.12,2.38-12.43,2-16.45-.73L-98.71,491.77c-4-2.75-3.1-6.95,2-9.33L367,263.61c5.12-2.38,12.43-2,16.45.73L634.34,439.85C638.18,442.77,637.26,447,632.33,449.35Z",
                      transform: "translate(101.22 -0.5)",
                      fill: "url(#linear-gradient-7)"
                    }),
                    _react2.default.createElement("path", {
                      d: "M185.12,457.4l103.81-49c4-1.83,4.38-5.48.73-8L225.33,355.2c-3.66-2.56-9.87-3.11-14.08-1.28l-103.8,49c-4,1.82-4.39,5.48-.74,8l64.34,45.16A14.86,14.86,0,0,0,185.12,457.4Z",
                      transform: "translate(101.22 -0.5)",
                      fill: "url(#linear-gradient-8)"
                    }),
                    _react2.default.createElement("path", {
                      d: "M107.08,406.39l103.81-49c4-1.83,10.41-1.47,14.07,1.27l64.33,45a5.62,5.62,0,0,1,2.19,2.56c1.28-1.83.55-4.21-2-5.85L225.14,355.2c-3.65-2.56-9.87-3.11-14.07-1.28l-103.81,49c-2.74,1.28-3.84,3.47-2.92,5.48A8.85,8.85,0,0,1,107.08,406.39Z",
                      transform: "translate(101.22 -0.5)",
                      fill: "#91afff"
                    }),
                    _react2.default.createElement(
                      "g",
                      null,
                      _react2.default.createElement("path", {
                        d: "M52.25,536.56,437.51,354.84a7.59,7.59,0,0,1,7.86.73l124.46,87.2a2.85,2.85,0,0,1-.37,4.94L184.39,629.43a7.59,7.59,0,0,1-7.86-.74l-124.64-87A3,3,0,0,1,52.25,536.56Z",
                        transform: "translate(101.22 -0.5)",
                        fill: "#adc8ff"
                      }),
                      _react2.default.createElement("path", {
                        d: "M51.89,541.49l1.28.92,384-181.18A7.59,7.59,0,0,1,445,362l123.18,86.28,1.46-.73a2.84,2.84,0,0,0,.37-4.93L445.55,355.38a8.11,8.11,0,0,0-7.86-.73L52.43,536.37A3,3,0,0,0,51.89,541.49Z",
                        transform: "translate(101.22 -0.5)",
                        fill: "#91afff"
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "637.23 434.04 301.5 592.36 313.56 600.96 649.29 442.45 637.23 434.04",
                    fill: "#242993"
                  })
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "605.25 411.74 286.15 562.2 298.21 570.61 617.13 420.15 605.25 411.74",
                    fill: "#242993"
                  })
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "262.21 573.35 232.42 587.43 244.48 595.84 274.27 581.76 262.21 573.35",
                    fill: "#242993"
                  })
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "285.24 600.04 264.59 609.91 276.65 618.32 297.3 608.63 285.24 600.04",
                    fill: "#242993"
                  })
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "585.14 397.66 212.5 573.35 224.38 581.76 597.21 406.07 585.14 397.66",
                    fill: "#242993"
                  })
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "565.04 383.59 192.4 559.27 204.46 567.87 577.1 392 565.04 383.59",
                    fill: "#242993"
                  })
                ),
                _react2.default.createElement(
                  "g",
                  { clipPath: "url(#clip-path)" },
                  _react2.default.createElement("polygon", {
                    points: "544.94 369.51 172.29 545.38 184.35 553.79 557 377.92 544.94 369.51",
                    fill: "#242993"
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "svg",
          { viewBox: "0 0 1920 1080" },
          _react2.default.createElement(
            "defs",
            null,
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient",
                x1: 1399.76,
                y1: 5067.24,
                x2: 1350.14,
                y2: 5014.03,
                gradientTransform: "matrix(1, -0.08, -0.08, -1, 65.83, 5983.59)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#bc82ff" }),
              _react2.default.createElement("stop", { offset: 0.18, stopColor: "#b782ff" }),
              _react2.default.createElement("stop", { offset: 0.39, stopColor: "#a980ff" }),
              _react2.default.createElement("stop", { offset: 0.61, stopColor: "#917eff" }),
              _react2.default.createElement("stop", { offset: 0.85, stopColor: "#707aff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#5778ff" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-2",
              x1: 1391.9,
              y1: 5058.61,
              x2: 1358.09,
              y2: 5022.35,
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-3",
              x1: -192.32,
              y1: -3348.75,
              x2: -230.33,
              y2: -3389.52,
              gradientTransform: "translate(44 3776.72) rotate(4.85)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-4",
              x1: -249.56,
              y1: -3310.51,
              x2: -272.19,
              y2: -3334.78,
              gradientTransform: "translate(44 3776.72) rotate(4.85)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-5",
              x1: 28.07,
              y1: 335.05,
              x2: 838.92,
              y2: 335.05,
              gradientTransform: "translate(-0.5 311.5)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-6",
                x1: 610.21,
                y1: -3994.8,
                x2: 635.1,
                y2: -3994.8,
                gradientTransform: "translate(0 4512)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#00b3ff" }),
              _react2.default.createElement("stop", { offset: 0.32, stopColor: "#1fadff" }),
              _react2.default.createElement("stop", { offset: 0.76, stopColor: "#44a6ff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#52a3ff" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-7",
              x1: 690.13,
              y1: -3769.74,
              x2: 724.53,
              y2: -3769.74,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-8",
              x1: 305.61,
              y1: -3904.88,
              x2: 339.44,
              y2: -3904.88,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-9",
                x1: 313.64,
                y1: -4143.03,
                x2: 356.93,
                y2: -4213.84,
                gradientTransform: "translate(0 4512)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#6700e7" }),
              _react2.default.createElement("stop", { offset: 0.09, stopColor: "#6a05e8" }),
              _react2.default.createElement("stop", { offset: 0.19, stopColor: "#7413ec" }),
              _react2.default.createElement("stop", { offset: 0.29, stopColor: "#832af2" }),
              _react2.default.createElement("stop", { offset: 0.41, stopColor: "#984afb" }),
              _react2.default.createElement("stop", { offset: 0.45, stopColor: "#a259ff" }),
              _react2.default.createElement("stop", { offset: 0.68, stopColor: "#9f57fc" }),
              _react2.default.createElement("stop", { offset: 0.85, stopColor: "#9752f3" }),
              _react2.default.createElement("stop", { offset: 0.99, stopColor: "#8948e4" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#8747e2" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-10",
              x1: 320.05,
              y1: -4169.28,
              x2: 379.94,
              y2: -4169.28,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-11",
              x1: 266.1,
              y1: -4210.16,
              x2: 292.64,
              y2: -4253.57,
              xlinkHref: "#linear-gradient-9"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-12",
              x1: 269.98,
              y1: -4226.26,
              x2: 306.7,
              y2: -4226.26,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-13",
              x1: 443.04,
              y1: -3695.87,
              x2: 485.36,
              y2: -3752.76,
              xlinkHref: "#linear-gradient-9"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-14",
              x1: 438.24,
              y1: -3707.81,
              x2: 507.62,
              y2: -3707.81,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-15",
              x1: 273.03,
              y1: -3759.51,
              x2: 337.3,
              y2: -3869.43,
              xlinkHref: "#linear-gradient-9"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-16",
              x1: 272.98,
              y1: -3783.6,
              x2: 377.82,
              y2: -3783.6,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-17",
                x1: 288.82,
                y1: -3783.88,
                x2: 361.86,
                y2: -3783.88,
                gradientTransform: "translate(-0.5 4511.5)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#00dfff" }),
              _react2.default.createElement("stop", { offset: 0.14, stopColor: "#00e2ff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#00f0ff" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-18",
              x1: 612.62,
              y1: -3835.69,
              x2: 682.42,
              y2: -3929.52,
              xlinkHref: "#linear-gradient-9"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-19",
              x1: 605.04,
              y1: -3855.57,
              x2: 719.44,
              y2: -3855.57,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-20",
                x1: 430.9,
                y1: -3959.71,
                x2: 509,
                y2: -4096.18,
                gradientTransform: "translate(0 4512)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#6700e7" }),
              _react2.default.createElement("stop", { offset: 0.13, stopColor: "#6903e8" }),
              _react2.default.createElement("stop", { offset: 0.22, stopColor: "#6f0cea" }),
              _react2.default.createElement("stop", { offset: 0.29, stopColor: "#791bee" }),
              _react2.default.createElement("stop", { offset: 0.36, stopColor: "#8730f4" }),
              _react2.default.createElement("stop", { offset: 0.42, stopColor: "#994cfb" }),
              _react2.default.createElement("stop", { offset: 0.45, stopColor: "#a259ff" }),
              _react2.default.createElement("stop", { offset: 0.86, stopColor: "#a058fd" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#9a54f7" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-21",
              x1: 435.15,
              y1: -4024.04,
              x2: 568.52,
              y2: -4024.04,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-22",
              x1: 471.07,
              y1: -4022.57,
              x2: 532.12,
              y2: -4022.57,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-23",
              x1: 201.97,
              y1: -3945.95,
              x2: 293.63,
              y2: -4095.89,
              xlinkHref: "#linear-gradient-9"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-24",
              x1: 215.65,
              y1: -4001.29,
              x2: 342.71,
              y2: -4001.29,
              xlinkHref: "#linear-gradient-6"
            }),
            _react2.default.createElement(
              "linearGradient",
              {
                id: "linear-gradient-25",
                x1: 446.64,
                y1: -2842.24,
                x2: 397.07,
                y2: -2895.4,
                gradientTransform: "translate(44 3776.72) rotate(4.85)",
                gradientUnits: "userSpaceOnUse"
              },
              _react2.default.createElement("stop", { offset: 0, stopColor: "#5778ff" }),
              _react2.default.createElement("stop", { offset: 0.15, stopColor: "#707aff" }),
              _react2.default.createElement("stop", { offset: 0.39, stopColor: "#917eff" }),
              _react2.default.createElement("stop", { offset: 0.61, stopColor: "#a980ff" }),
              _react2.default.createElement("stop", { offset: 0.82, stopColor: "#b782ff" }),
              _react2.default.createElement("stop", { offset: 1, stopColor: "#bc82ff" })
            ),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-26",
              x1: 493.28,
              y1: 892.75,
              x2: 738.42,
              y2: 892.75,
              gradientTransform: "matrix(0.77, -0.2, 0.06, 0.97, 410.6, -41.05)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-27",
              x1: -294.97,
              y1: 253.92,
              x2: -49.83,
              y2: 253.92,
              gradientTransform: "matrix(-0.75, 0.38, -0.3, -0.93, 1130.74, 1148.77)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-28",
              x1: -536.48,
              y1: 155.24,
              x2: -291.34,
              y2: 155.24,
              gradientTransform: "matrix(0.12, 0.47, -0.8, -0.47, 1486.88, 1081.3)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-29",
              x1: 994.86,
              y1: 784.89,
              x2: 1074.98,
              y2: 739.92,
              gradientTransform: "matrix(1, -0.04, 0.05, 0.59, -42.66, 369.64)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-30",
              x1: 1025.5,
              y1: 720.5,
              x2: 1033.47,
              y2: 720.5,
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-31",
              x1: 1282.5,
              y1: 848.5,
              x2: 1290.47,
              y2: 848.5,
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-32",
              x1: 832.5,
              y1: 672.5,
              x2: 840.47,
              y2: 672.5,
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#linear-gradient"
            }),
            _react2.default.createElement("linearGradient", {
              id: "linear-gradient-33",
              x1: 1333.5,
              y1: 781.5,
              x2: 1341.47,
              y2: 781.5,
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#linear-gradient"
            })
          ),
          _react2.default.createElement(
            "title",
            null,
            'Portfolio_StepOne'
          ),
          _react2.default.createElement(
            "g",
            { id: "Background" },
            _react2.default.createElement("rect", { width: 1920, height: 1080, fill: "none" })
          ),
          _react2.default.createElement(
            "g",
            { id: "StepOne" },
            _react2.default.createElement("path", {
              id: "Ripple_Path_2",
              "data-name": "Ripple Path 2",
              d: "M1029.81,876.7c-11.8,0-23.38-2.69-32.28-8.07-9.11-5.38-14.07-12.63-14.07-20.29s5.17-14.9,14.27-20.28c17.8-10.35,47-10.14,64.77.21,9.11,5.38,14.08,12.62,14.08,20.28s-5.18,14.9-14.28,20.29h0C1053.19,874.22,1041.4,876.91,1029.81,876.7ZM1030,826c-10.76-.21-21.73,2.28-29.8,7-7.45,4.34-11.8,9.93-11.8,15.93,0,5.8,4.14,11.6,11.59,15.94,16.35,9.53,43.25,9.73,59.8.21h0c7.45-4.35,11.8-9.94,11.8-15.94,0-5.79-4.14-11.59-11.59-15.94C1051.54,828.27,1040.78,825.78,1030,826Z",
              transform: "translate(-0.5 -0.5)",
              fill: "url(#linear-gradient)"
            }),
            _react2.default.createElement(
              "g",
              { id: "Ripple_Path_1", "data-name": "Ripple Path 1" },
              _react2.default.createElement("path", {
                id: "Ripple_path1",
                "data-name": "Ripple path1",
                d: "M1052.78,835.72c-12.62-7.45-33.11-7.45-45.73-.21s-12.63,19,0,26.5,33.11,7.45,45.73.2C1065.19,855,1065.19,843.17,1052.78,835.72ZM1042,856c-6.83,3.94-17.8,3.94-24.83,0-6.83-3.93-6.83-10.35,0-14.28s17.79-3.93,24.83,0S1048.85,852.07,1042,856Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-2)"
              })
            ),
            _react2.default.createElement(
              "g",
              { id: "Path_Circle_2", "data-name": "Path Circle 2" },
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                  d: "M116.48,423.08a46.28,46.28,0,0,1-22.35-7.45c-6.62-4.55-9.93-10.35-9.31-16.56.41-6,4.76-11.38,12-14.69,13.45-6.42,33.52-4.56,45.73,3.93,6.62,4.55,9.93,10.35,9.31,16.56-.41,6-4.76,11.38-12,14.69h0C133.24,422.67,124.76,423.7,116.48,423.08Zm2.89-34.36a39,39,0,0,0-19.24,2.9c-4.35,2.07-7,5-7.45,8.07-.21,3.11,1.86,6.42,6,9.32,9.73,6.83,27.11,8.28,37.87,3.31h0c4.35-2.07,7-5,7.45-8.07.21-3.11-1.86-6.42-6-9.32C133,391.41,126.2,389.34,119.37,388.72Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-3)"
                }),
                _react2.default.createElement("path", {
                  d: "M63.92,457a26.26,26.26,0,0,1-12.83-4.35c-3.93-2.69-6-6.62-5.8-10.35.42-3.93,3.11-7.24,7.45-9.31,7.66-3.52,19-2.69,26.08,2.28,3.93,2.69,6,6.62,5.79,10.35-.41,3.93-3.1,7.24-7.45,9.31A25.68,25.68,0,0,1,63.92,457Zm1.45-18a18.41,18.41,0,0,0-9.11,1.45c-1.65.83-2.69,1.86-2.9,2.69,0,.83.83,2.07,2.28,3.11,4.55,3.31,12.83,3.93,18,1.45,1.66-.83,2.69-1.87,2.9-2.7,0-.82-.83-2.07-2.28-3.1A17.42,17.42,0,0,0,65.37,439Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-4)"
                })
              )
            ),
            _react2.default.createElement("ellipse", {
              id: "Path_Circle_1",
              "data-name": "Path Circle 1",
              cx: 433,
              cy: 646.55,
              rx: 403.93,
              ry: 245.08,
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: 3,
              stroke: "url(#linear-gradient-5)"
            }),
            _react2.default.createElement("path", {
              id: "Element_Circle_S1_3",
              "data-name": "Element Circle S1 3",
              d: "M622.63,502.8c-7,4.14-12.42,13.87-12.42,21.53,0,7.87,5.38,11.39,12.42,7.25,7.24-4.14,12.41-14.08,12.41-21.74C635.25,502.39,629.87,498.66,622.63,502.8Z",
              transform: "translate(-0.5 -0.5)",
              opacity: 0.52,
              fill: "url(#linear-gradient-6)",
              style: {
                isolation: 'isolate'
              }
            }),
            _react2.default.createElement("path", {
              id: "Element_Circle_S1_2",
              "data-name": "Element Circle S1 2",
              d: "M707.25,722.35c-9.72,5.59-17.17,19-17.17,29.81,0,11,7.45,15.73,17.17,9.93,9.94-5.79,17.18-19.25,17.18-29.81C724.63,721.73,717.19,716.55,707.25,722.35Z",
              transform: "translate(-0.5 -0.5)",
              opacity: 0.41,
              fill: "url(#linear-gradient-7)",
              style: {
                isolation: 'isolate'
              }
            }),
            _react2.default.createElement("path", {
              id: "Element_Circle_S1_1",
              "data-name": "Element Circle S1 1",
              d: "M322.58,587.44c-9.52,5.59-17,18.83-17,29.39,0,10.76,7.45,15.53,17,9.94,9.73-5.59,17-19,17-29.4C339.55,586.82,332.31,581.85,322.58,587.44Z",
              transform: "translate(-0.5 -0.5)",
              opacity: 0.41,
              fill: "url(#linear-gradient-8)",
              style: {
                isolation: 'isolate'
              }
            }),
            _react2.default.createElement(
              "g",
              { id: "Element_Circle_S2_2", "data-name": "Element Circle S2 2" },
              _react2.default.createElement("path", {
                d: "M336.81,300.13c-17,9.72-30.22,33.32-30.22,52.37,0,9.1,3.11,16.35,8.9,19.66,5.18,2.9,13.45,7.87,13.45,7.87s37.87-44.72,37.66-62.72c0-6.21,4.56-11.39,4.56-11.39s-11.59-6.83-13.45-7.86C352.53,295,345.08,295.36,336.81,300.13Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-9)"
              }),
              _react2.default.createElement("path", {
                d: "M350.05,308c-17,9.94-30,33.12-30,52,0,19,13,27.32,30,17.39,17.18-9.94,30-33.75,29.8-52C380.06,307,367.23,298.06,350.05,308Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-10)"
              })
            ),
            _react2.default.createElement(
              "g",
              { id: "Element_Crcle_S2_1", "data-name": "Element Crcle S2 1" },
              _react2.default.createElement("path", {
                d: "M280.33,259.64c-10.35,6-18.62,20.49-18.62,32.08,0,5.59,1.86,10.15,5.58,12,3.11,1.86,8.28,4.76,8.28,4.76s23.18-27.32,23-38.5c0-3.73,2.9-7,2.9-7s-7-4.14-8.28-4.76C289.85,256.53,285.3,256.74,280.33,259.64Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-11)"
              }),
              _react2.default.createElement("path", {
                d: "M288.4,264.4c-10.35,6-18.42,20.28-18.42,31.88S278.05,313,288.4,307c10.55-6.21,18.42-20.7,18.42-31.88C306.82,263.78,299,258.4,288.4,264.4Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-12)"
              })
            ),
            _react2.default.createElement(
              "g",
              { id: "Element_Box_S1_1", "data-name": "Element Box S1 1" },
              _react2.default.createElement("path", {
                d: "M492.47,772.08c-.21-4.35,11.18-9.94,11.18-9.94s-13.46-7.86-15.32-8.9c-1.45-.83-2.89-.62-5,.21-11,5.59-22.15,11.59-33.11,18.21-3.93,2.28-7.87,5-11.8,7.46-1.65,1-3.52,2.27-5.17,3.51a17,17,0,0,0-5.59,6.42A31.13,31.13,0,0,0,424,801.88c-.21,2.9-.21,6-.42,8.91v9.31a9.87,9.87,0,0,0,.21,2.48c.21,2.9.21,6,.62,8.7.41,3.31,1.86,5.59,4.14,6.83l15.11,8.69s10.76-19.87,20.9-26.08c4.55-2.69,9.31-5.79,13.86-8.49,1.65-1,3.31-2.07,5-3.31a21,21,0,0,0,6-7.86,32.41,32.41,0,0,0,3.1-11.8C492.26,783.26,492.68,777.46,492.47,772.08Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-13)"
              }),
              _react2.default.createElement("path", {
                d: "M506.75,768.14a7.79,7.79,0,0,0-3.52-6.41c-1.45-.83-2.9-.62-5,.2-11,5.59-22.15,11.6-33.11,18.22-3.94,2.28-7.87,5-11.8,7.45-1.65,1-3.52,2.28-5.17,3.52a17,17,0,0,0-5.59,6.42,30.94,30.94,0,0,0-3.72,12.83c-.21,2.9-.21,6-.42,8.9v9.32a9.91,9.91,0,0,0,.21,2.48c.21,2.9.21,6,.62,8.7.41,3.31,1.86,5.58,4.14,6.83,1.45.82,3.1.82,5.17-.42,10.35-5.17,20.49-11,30.83-17,4.56-2.69,9.32-5.8,13.87-8.49,1.65-1,3.31-2.07,5-3.31a21,21,0,0,0,6-7.87,32.36,32.36,0,0,0,3.1-11.8c.21-5.79.62-11.59.41-17C507.37,776.42,507.16,772.28,506.75,768.14Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-14)"
              })
            ),
            _react2.default.createElement(
              "g",
              { id: "Icon_File", "data-name": "Icon File" },
              _react2.default.createElement("path", {
                d: "M349.19,642.56l-1.06-.52c-1.94-.88-4.22-.53-6.69.7a7.36,7.36,0,0,0-1.58.88c-14.26,8.27-28.51,16.55-42.94,24.82-4.23-2.46-7.75-4.57-8.45-4.93a6.14,6.14,0,0,0-2.47-.88,10.35,10.35,0,0,0-6.33,1.76c-6.51,3.88-13.2,7.57-19.71,11.45-5.28,3-9,8.1-11.27,14.79a26.85,26.85,0,0,0-1.05,4.92v81.87c.17.7.17,1.41.35,1.93a7.21,7.21,0,0,0,3.34,4.93c1.76.88,25,14.44,25,14.44s37.31-46.65,64.24-62.32c5.81-3.35,10.91-11.27,11.79-18.49a14.75,14.75,0,0,0,.18-2.81c0-21.66,22.17-58.1,22.17-58.1S351.3,644,349.19,642.56Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-15)"
              }),
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                  d: "M273,792.38V710.52a17.63,17.63,0,0,1,1.06-4.93c2.28-6.69,6-11.8,11.26-14.79,6.51-3.87,13.2-7.74,19.71-11.44a11.57,11.57,0,0,1,6.34-1.76c3,.35,4.92,2.46,5.63,6,.17.88.17,1.76.35,2.64.18,0,.18-.17.35-.17,15.84-9.16,31.68-18.31,47.35-27.47.52-.35,1.05-.52,1.58-.88a8.39,8.39,0,0,1,6.69-.7q4.21,1.85,4.22,8.45v65a15.82,15.82,0,0,1-.18,2.82c-.88,7-6,15.14-11.79,18.48-26.92,15.67-53.85,31.16-80.78,46.83a12.69,12.69,0,0,1-2.29,1.06c-4.57,1.76-8.62-.35-9.5-4.93A9.45,9.45,0,0,0,273,792.38Zm52.45-26.93c13.37-7.75,26.75-15.5,40.3-23.42a1.75,1.75,0,0,0,.88-.7,9,9,0,0,0,3.17-6.52v-66c-.36-2.12-2.12-2.65-4-1.41C339,682.88,312.05,698.55,285.3,714a9.17,9.17,0,0,0-4.22,7.22v65.31c0,2.82,1.76,3.7,4.22,2.47C298.5,781.11,311.87,773.37,325.43,765.45Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-16)"
                }),
                _react2.default.createElement("path", {
                  d: "M325.43,765.45c-13.38,7.74-26.75,15.49-40.31,23.41-2.28,1.41-4.22.35-4.22-2.46V721.08a8.75,8.75,0,0,1,4.22-7.22c26.75-15.49,53.68-31.16,80.43-46.65,2.11-1.23,3.7-.7,4.05,1.41v66a8.89,8.89,0,0,1-3.17,6.51,4,4,0,0,0-.88.71C352.18,750,338.8,757.7,325.43,765.45Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "#fff"
                }),
                _react2.default.createElement("polygon", {
                  points: "288.32 720.76 328.97 696.99 361.36 678.15 361.36 734.49 320.88 758.26 288.32 777.09 288.32 720.76",
                  opacity: 0.33,
                  fill: "url(#linear-gradient-17)",
                  style: {
                    isolation: 'isolate'
                  }
                })
              )
            ),
            _react2.default.createElement(
              "g",
              { id: "Icon_Video", "data-name": "Icon Video" },
              _react2.default.createElement("path", {
                d: "M694.64,603.79c-.2-7,18.42-16.56,18.42-16.56s-22.14-12.83-25.25-14.7c-2.27-1.24-5-1.24-8.07.42-18.21,9.11-36.42,19.25-54.83,30.22-6.63,3.93-13,8.07-19.66,12.21-2.9,1.87-5.8,3.73-8.49,5.59a29.92,29.92,0,0,0-9.31,10.76c-3.93,7.25-6,14.29-6.21,21.33-.2,5-.41,9.93-.82,14.9a1.83,1.83,0,0,1-.21,1v14.29c0,1.24.21,2.69.21,3.93.41,4.76.41,9.73,1,14.28.83,5.38,2.9,9.32,6.62,11.18C590.56,713.91,612.9,727,612.9,727s17.59-32.7,34.56-42.85c7.66-4.55,15.32-9.31,23-14.07,2.69-1.66,5.38-3.52,8.28-5.38,4.34-3.11,7.45-7.87,9.93-13a53.3,53.3,0,0,0,5.17-19.46C694.44,622.42,695.06,612.9,694.64,603.79Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-18)"
              }),
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                  d: "M605,697.35V683.07c0-.41.21-.62.21-1,.21-5,.41-9.93.83-14.9a50.87,50.87,0,0,1,6.2-21.32c2.49-4.55,5.38-8.28,9.32-10.76,2.89-1.87,5.79-3.94,8.48-5.59,6.62-4.14,13-8.28,19.66-12.21,18.21-11,36.63-21.12,54.84-30.23,3.1-1.65,5.79-1.65,8.07-.41,3.31,1.86,5.17,5.59,5.58,10.35.62,6.83,1,13.66,1.24,20.7.42,9.11-.41,18.63-.82,28.15a54.63,54.63,0,0,1-5.18,19.46c-2.48,5.17-5.58,9.93-9.93,13-2.69,1.86-5.38,3.72-8.28,5.38-7.65,4.76-15.31,9.52-23,14.08-17,10.14-33.93,19.45-50.69,27.94-3.32,1.66-6.21,1.86-8.7.62-3.72-1.86-6-5.79-6.62-11.18-.62-4.55-.82-9.52-1-14.28A23.6,23.6,0,0,0,605,697.35Zm43-8.28c12-14.9,23.8-29.6,35.8-44.5l-35.8-3.11Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-19)"
                }),
                _react2.default.createElement("path", {
                  d: "M648.08,689.07V641.46l35.8,3.11C671.88,659.47,660.08,674.17,648.08,689.07Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "#fff"
                })
              )
            ),
            _react2.default.createElement(
              "g",
              { id: "Icon_Image", "data-name": "Icon Image" },
              _react2.default.createElement("path", {
                d: "M537,390.79c-2.69-1.65-6.62-1.24-10.76,1.24-.21.21-.62.21-.62.42-7.24-4.14-15.52-9.11-16.55-9.52-3.52-2.07-8.28-1.87-13,.82l-44.08,25.46c-7.24,4.14-14.69,14.7-17.38,24.22-1,3.94-2.07,7.87-3.1,11.59a4.49,4.49,0,0,1-2.28,3.32,94.08,94.08,0,0,0-9.73,5.79c-6.82,5.18-11.38,14.7-11.38,23.19V551a16.51,16.51,0,0,0,.21,3.31c.41,3.31,1.86,6.21,4.55,7.86s27.11,15.74,27.11,15.74,17.38-36.85,34.35-46.58c17.38-10.14,34.56-20.08,51.94-30.22.83-.62,1.86-1,2.9-1.86,6.83-5.59,12.21-16.56,12.21-25.46V452.06c0-17.18,23.38-45.33,23.38-45.33S539.65,392.45,537,390.79Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-20)"
              }),
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                  d: "M568.41,416.67c0-10.15-6.41-13.87-15.1-8.9-2.69,1.65-5.38,3.1-7.86,4.55-1,.62-1.66.62-1.87-.41-1-2.9-2.07-5.39-3.1-8.28-2.69-6.63-9.93-8.49-17.38-4.14Q501.05,412.21,479,425c-7.24,4.14-14.69,14.69-17.38,24.21-1,3.94-2.07,7.87-3.11,11.6a4.46,4.46,0,0,1-2.27,3.31,94.08,94.08,0,0,0-9.73,5.79c-6.83,5.18-11.38,14.7-11.38,23.19v73.69a16.46,16.46,0,0,0,.21,3.31c.83,6.62,6.41,11.8,15.1,6.62,17.18-10.35,34.15-19.87,51.32-29.8,17.38-10.15,34.56-20.08,51.94-30.22.83-.63,1.86-1,2.9-1.87,6.83-5.59,12.21-16.56,12.21-25.46V467.59C568.41,451,568.41,433.85,568.41,416.67ZM538.2,485.39a73.69,73.69,0,0,1-21.31,37.05c-10.35,9.94-20.9,15.94-31.25,18-10.76,2.07-17.79-2.28-21.1-13.25-2.9-9.93-3.32-21.11,1-35,6-18.63,16.35-33.33,30.42-44.09,17.38-13,38.28-13.87,43.66,9.52.62,2.69.62,5.8,1,8.7A89,89,0,0,1,538.2,485.39Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-21)"
                }),
                _react2.default.createElement("path", {
                  d: "M496,447.92A86.86,86.86,0,0,0,465.57,492c-4.35,13.87-3.93,25-1,35,3.1,11,10.34,15.32,21.1,13.25,10.35-1.86,20.9-7.86,31.25-18a74.58,74.58,0,0,0,21.31-37.05,89,89,0,0,0,2.49-19c-.42-3.11-.62-6-1-8.7C534.48,434.05,513.37,434.88,496,447.92Zm5.59,77c-16.77,9.72-30.42,1.86-30.42-17.6s13.86-43.26,30.62-53c17-9.73,30.42-1.86,30.42,17.8C532.2,491.6,518.34,515,501.58,524.93Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "#fff"
                }),
                _react2.default.createElement("path", {
                  d: "M501.78,454.13c-17,9.73-30.62,33.54-30.62,53s13.65,27.33,30.42,17.6c17-9.73,30.62-33.33,30.62-52.79C532.2,452.27,518.75,444.4,501.78,454.13Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-22)"
                })
              )
            ),
            _react2.default.createElement(
              "g",
              { id: "Icon_Audio", "data-name": "Icon Audio" },
              _react2.default.createElement("path", {
                d: "M251.19,420.19c-36,20.49-64.15,70.58-63.94,110.74-.21,19.46,6.62,34.77,19,41.6,11,6.21,28.35,16.56,28.35,16.56s80.08-94.59,79.66-132.68c-.2-13,9.73-24,9.73-24l-28.56-16.56C284.3,409.42,268.78,410.25,251.19,420.19Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-23)"
              }),
              _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                  d: "M312,481V449.16a36.18,36.18,0,0,0-.21-4.76c0-1-.41-1.24-1.24-.62a11.33,11.33,0,0,0-2.07,1.24c-5.59,3.73-11.17,7.25-16.55,11.39a212,212,0,0,0-29,24.84c-2.48,2.69-2.69,2.28-2.69,6.21V541.9c0,2.9,0,2.9-2.48,3.72-4.34,1.45-8.28,4.56-12.21,9.32-3.31,4.35-5.79,8.9-6.41,13.87-.83,5.17,1,9.11,4.34,9.11,5.59.2,11.18-2.9,16.76-9.73,3.73-4.56,6.42-9.52,6.83-14.91a26,26,0,0,0,.21-3.93v-42c0-3.1,0-3.1,2.69-5.59,6-5.38,12.21-10.76,18.42-15.32,4.76-3.52,9.52-7,14.48-10.35,2.07-1.44,2.28-1.24,2.28,1.25v28.15c0,2.69-.21,2.9-2.28,3.52-5.17,1.86-10.14,5.79-14.28,12.21-3.1,4.76-5,9.52-4.34,14.07.41,4.35,2.9,6,6.41,5.8,3.94-.21,7.87-2.48,11.8-6.21,5.79-5.59,10.14-13.45,10.14-21.94C312,502.16,312,491.6,312,481Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "#fff"
                }),
                _react2.default.createElement("path", {
                  d: "M279.75,436.75c-36,20.49-64.15,70.58-63.95,110.74-.41,36.64,24.63,59,62.91,37,38.08-21.73,64.56-73.48,64.15-111.57C342.24,433.85,315.13,416.46,279.75,436.75Zm22.34,97.9c-3.93,3.73-7.86,6.21-11.79,6.21-3.52.21-6-1.45-6.42-5.79-.41-4.56,1.45-9.32,4.35-14.08,4.14-6.41,8.9-10.35,14.28-12.21,2.27-.83,2.27-1,2.27-3.52V477.11c0-2.48-.2-2.69-2.27-1.24-4.76,3.31-9.73,6.83-14.49,10.35-6.2,4.76-12.21,9.93-18.41,15.31-2.69,2.28-2.69,2.49-2.69,5.59v42a24.78,24.78,0,0,1-.21,3.94c-.41,5.38-3.1,10.35-6.83,14.9-5.59,6.83-11.17,9.94-16.76,9.73-3.31-.21-5.17-3.93-4.35-9.11a31.46,31.46,0,0,1,6.42-13.87c3.72-4.76,7.86-7.86,12.21-9.31,2.27-.83,2.48-.83,2.48-3.73V487.25c0-3.93.21-3.52,2.69-6.21a228.55,228.55,0,0,1,29-24.84c5.59-3.93,11.18-7.66,16.56-11.38.62-.42,1.44-.83,2.07-1.24.82-.42,1.24-.21,1.24.62,0,1.65.2,3.1.2,4.76v31.88c0,10.55-.2,21.11,0,31.67C312.44,521,307.89,529.07,302.09,534.65Z",
                  transform: "translate(-0.5 -0.5)",
                  fill: "url(#linear-gradient-24)"
                })
              )
            ),
            _react2.default.createElement(
              "g",
              { id: "Path_Circle_2-2", "data-name": "Path Circle 2" },
              _react2.default.createElement("path", {
                d: "M704.58,981.35c-11-.83-21.53-4.35-29.6-9.94-8.48-6-12.83-13.45-12-21.11.62-7.66,6.21-14.49,15.52-18.84,17.8-8.48,44.29-6.21,60.43,5.18,8.48,6,12.83,13.45,12,21.11-.62,7.66-6.21,14.49-15.52,18.84C726.51,980.73,715.34,982.38,704.58,981.35Zm3.93-46.16c-9.32-.83-19,.41-26.49,3.93-6.42,3.11-10.14,7.25-10.55,11.8s2.69,9.32,8.48,13.46c13.66,9.52,36.83,11.59,51.94,4.34h0c6.41-3.1,10.14-7.24,10.55-11.8s-2.69-9.31-8.48-13.45C726.92,938.92,717.82,936,708.51,935.19Z",
                transform: "translate(-0.5 -0.5)",
                fill: "url(#linear-gradient-25)"
              })
            ),
            _react2.default.createElement(
              "g",
              { id: "Wire_Path", "data-name": "Wire Path" },
              _react2.default.createElement("line", {
                id: "Wire_Path_1",
                x1: 837,
                y1: 673,
                x2: 1030,
                y2: 721,
                fill: "none",
                strokeMiterlimit: 10,
                strokeWidth: 3,
                stroke: "url(#linear-gradient-26)"
              }),
              _react2.default.createElement("line", {
                id: "Wire_Path_3",
                x1: 1289,
                y1: 849,
                x2: 1076,
                y2: 848,
                fill: "none",
                strokeMiterlimit: 10,
                strokeWidth: 3,
                stroke: "url(#linear-gradient-27)"
              }),
              _react2.default.createElement("line", {
                id: "Wire_Path_4",
                x1: 1338,
                y1: 782,
                x2: 1286.5,
                y2: 848,
                fill: "none",
                strokeMiterlimit: 10,
                strokeWidth: 3,
                stroke: "url(#linear-gradient-28)"
              }),
              _react2.default.createElement("line", {
                id: "Wire_Path_2",
                x1: 1032,
                y1: 821,
                x2: 1030,
                y2: 721,
                fill: "none",
                strokeMiterlimit: 10,
                strokeWidth: 3,
                stroke: "url(#linear-gradient-29)"
              }),
              _react2.default.createElement("circle", {
                id: "Path_Connector_Blip_Content",
                cx: 1029.5,
                cy: 720.5,
                r: 4,
                fill: "url(#linear-gradient-30)"
              }),
              _react2.default.createElement("circle", {
                id: "Path_Connector_Blip_Laptop",
                cx: 1286.5,
                cy: 848.5,
                r: 4,
                fill: "url(#linear-gradient-31)"
              }),
              _react2.default.createElement("circle", {
                id: "Path_Connector_Content",
                cx: 836.5,
                cy: 672.5,
                r: 4,
                fill: "url(#linear-gradient-32)"
              }),
              _react2.default.createElement("circle", {
                id: "Path_Connector_Laptop",
                cx: 1337.5,
                cy: 781.5,
                r: 4,
                fill: "url(#linear-gradient-33)"
              })
            )
          )
        )
      );
    }
  }]);

  return StepOne;
}(_react.Component);

exports.default = StepOne;