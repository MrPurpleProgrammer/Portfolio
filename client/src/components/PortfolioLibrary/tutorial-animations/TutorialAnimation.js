import React, { Component } from "react";
import "./tutorial_animation.css"

class TutorialAnimation extends Component {
    render() {
        const stepOne = {
            0: "stepOne-hide",
            1: "stepOne-enter",
            2: "stepOne-exiting",
            3: "stepOne-exited",
            4: "stepOne-exited",
        }
        const stepTwo = {
            0: "stepTwo-hide",
            1: "stepTwo-exit-backward",
            2: "stepTwo-enter",
            3: "stepTwo-exit-forward",
            4: "stepTwo-hide",
        }
        const stepThree = {
            0: "stepThree-hide",
            1: "stepThree-exit-backward",
            2: "stepThree-enter",
            3: "stepThree-exit-forward",
            4: "stepThree-hide",
        }
        const stepFour = {
            0: "stepFour-hide",
            1: "stepFour-exit-backward",
            2: "stepFour-enter",
            3: "stepFour-exit-forward",
            4: "stepFour-hide",
        }
        const laptopClassNames = {
            0: "laptop-stepZero",
            1: "laptop-stepOne",
            2: "laptop-stepTwo",
            3: "laptop-stepThree",
            4: "laptop-stepFour",
        };
        return (
            <div id="tutorialAnimationSvg" className="tutorialSvg">
                <svg viewBox="0 0 2279 350">
                    <defs>
                        <linearGradient
                            id="linear-gradient"
                            x1={2095.78}
                            y1={900.56}
                            x2={2126.93}
                            y2={900.56}
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1068)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#5778ff" />
                            <stop offset={0.18} stopColor="#5c7dff" />
                            <stop offset={0.39} stopColor="#6a8aff" />
                            <stop offset={0.61} stopColor="#e17fff" />
                            <stop offset={0.85} stopColor="#e17fff" />
                            <stop offset={1} stopColor="#e17fff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-2"
                            x1={2095.75}
                            y1={894.78}
                            x2={2115.58}
                            y2={894.78}
                            xlinkHref="#linear-gradient"
                        />
                        <linearGradient
                            id="linear-gradient-3"
                            x1={2041.64}
                            y1={857}
                            x2={2108.16}
                            y2={857}
                            xlinkHref="#linear-gradient"
                        />
                        <linearGradient
                            id="linear-gradient-4"
                            x1={2058.62}
                            y1={850.3}
                            x2={2064.29}
                            y2={850.3}
                            xlinkHref="#linear-gradient"
                        />
                        <linearGradient
                            id="linear-gradient-5"
                            x1={1979.16}
                            y1={809.65}
                            x2={2041.96}
                            y2={809.65}
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1068)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#bc82ff" />
                            <stop offset={0.18} stopColor="#b782ff" />
                            <stop offset={0.39} stopColor="#a980ff" />
                            <stop offset={0.61} stopColor="#917eff" />
                            <stop offset={0.85} stopColor="#707aff" />
                            <stop offset={1} stopColor="#5778ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-6"
                            x1={1875.33}
                            y1={808.99}
                            x2={1963.79}
                            y2={808.99}
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-7"
                            x1={1962.02}
                            y1={268.22}
                            x2={1979.27}
                            y2={268.22}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-8"
                            x1={1965.56}
                            y1={268.22}
                            x2={1975.34}
                            y2={268.22}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-9"
                            x1={1420.72}
                            y1={202.6}
                            x2={1549.08}
                            y2={200.15}
                            gradientTransform="translate(18.52 -54.97) rotate(2.52)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#bc82ff" />
                            <stop offset={0.12} stopColor="#b782ff" />
                            <stop offset={0.22} stopColor="#a980ff" />
                            <stop offset={0.34} stopColor="#917eff" />
                            <stop offset={0.46} stopColor="#707aff" />
                            <stop offset={1} stopColor="#5778ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-10"
                            x1={2324.42}
                            y1={899.94}
                            x2={2447.12}
                            y2={899.94}
                            gradientTransform="matrix(1.06, 0, 0, -1, -1042.93, 1068)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#a31fa9" />
                            <stop offset={0.07} stopColor="#8b17a0" />
                            <stop offset={0.15} stopColor="#740f98" />
                            <stop offset={0.24} stopColor="#640a92" />
                            <stop offset={0.34} stopColor="#5b078f" />
                            <stop offset={0.48} stopColor="#58068e" />
                            <stop offset={0.63} stopColor="#4d22a3" />
                            <stop offset={0.94} stopColor="#3168da" />
                            <stop offset={1} stopColor="#2c75e4" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-11"
                            x1={1524.94}
                            y1={499.86}
                            x2={1586.85}
                            y2={553.48}
                            gradientTransform="matrix(0.92, 0.5, 1.06, -0.58, -501.48, -363.13)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#8d139b" />
                            <stop offset={0.17} stopColor="#851ba1" />
                            <stop offset={0.43} stopColor="#6e33b2" />
                            <stop offset={0.76} stopColor="#4958cd" />
                            <stop offset={1} stopColor="#2979e4" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-12"
                            x1={1535.8}
                            y1={509.3}
                            x2={1576.41}
                            y2={544.46}
                            gradientTransform="matrix(0.92, 0.5, 1.06, -0.58, -501.48, -363.13)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#630692" />
                            <stop offset={0.23} stopColor="#5b0e94" />
                            <stop offset={0.59} stopColor="#432399" />
                            <stop offset={1} stopColor="#2142a1" />
                        </linearGradient>
                        <clipPath id="clip-path" transform="translate(-0.5 -1)">
                            <path
                                d="M1511.91,120.41l-35.35-21c-2.52-1.51-2.21-4.14.69-5.83l-13.3,8c2.9-1.76,7.31-1.95,9.83-.44l35.35,21c2.52,1.51,2.21,4.14-.69,5.83l13.3-8C1518.77,121.73,1514.43,121.91,1511.91,120.41Z"
                                fill="none"
                            />
                        </clipPath>
                        <linearGradient
                            id="linear-gradient-13"
                            x1={2324.42}
                            y1={961.06}
                            x2={2447.12}
                            y2={961.06}
                            xlinkHref="#linear-gradient-10"
                        />
                        <linearGradient
                            id="linear-gradient-14"
                            x1={1508.83}
                            y1={513.8}
                            x2={1570.75}
                            y2={567.42}
                            xlinkHref="#linear-gradient-11"
                        />
                        <linearGradient
                            id="linear-gradient-15"
                            x1={1519.7}
                            y1={523.24}
                            x2={1560.3}
                            y2={558.41}
                            xlinkHref="#linear-gradient-12"
                        />
                        <clipPath id="clip-path-4" transform="translate(-0.5 -1)">
                            <path
                                d="M1511.91,104.31l-35.35-21.06c-2.52-1.5-2.21-4.13.69-5.82L1464,85.38c2.9-1.75,7.31-1.94,9.83-.43l35.35,21c2.52,1.5,2.21,4.13-.69,5.83l13.3-8C1518.77,105.62,1514.43,105.81,1511.91,104.31Z"
                                fill="none"
                            />
                        </clipPath>
                        <linearGradient
                            id="linear-gradient-16"
                            x1={2324.42}
                            y1={974.79}
                            x2={2447.12}
                            y2={974.79}
                            xlinkHref="#linear-gradient-10"
                        />
                        <linearGradient
                            id="linear-gradient-17"
                            x1={1495.11}
                            y1={525.68}
                            x2={1557.03}
                            y2={579.31}
                            xlinkHref="#linear-gradient-11"
                        />
                        <linearGradient
                            id="linear-gradient-18"
                            x1={1563.66}
                            y1={870.84}
                            x2={1586.6}
                            y2={912.14}
                            gradientTransform="translate(3155.5 1068) rotate(180) scale(1.06 1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#5778ff" />
                            <stop offset={0.04} stopColor="#5c7dff" />
                            <stop offset={0.09} stopColor="#6a8aff" />
                            <stop offset={0.14} stopColor="#82a0ff" />
                            <stop offset={0.19} stopColor="#a3beff" />
                            <stop offset={0.22} stopColor="#bcd5ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-19"
                            x1={1592.48}
                            y1={869.42}
                            x2={1576.33}
                            y2={900.99}
                            gradientTransform="translate(3155.5 1068) rotate(180) scale(1.06 1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#c0d6ff" />
                            <stop offset={0.3} stopColor="#c5dbff" />
                            <stop offset={0.65} stopColor="#d3e9ff" />
                            <stop offset={1} stopColor="#e9ffff" />
                        </linearGradient>
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 2"
                            x1={1397.85}
                            y1={231.35}
                            x2={1391.51}
                            y2={224.55}
                            gradientTransform="translate(-9.47 3.2) rotate(0.46)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2-2"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 2"
                            x1={1399.31}
                            y1={232.91}
                            x2={1390.05}
                            y2={222.99}
                            gradientTransform="translate(-9.47 3.2) rotate(0.46)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2-3"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 2"
                            x1={1390.99}
                            y1={220.08}
                            x2={1430.58}
                            y2={220.08}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2-4"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 2"
                            x1={1328.92}
                            y1={646.44}
                            x2={1374.89}
                            y2={646.44}
                            gradientTransform="matrix(1, 0, 0, -0.88, 0, 798)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_38"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 38"
                            x1={-209.33}
                            y1={222.82}
                            x2={-237.8}
                            y2={172.36}
                            gradientTransform="matrix(-1.06, 0, 0, 1, 1224.06, 0)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#c0d6ff" />
                            <stop offset={0.12} stopColor="#d6ecff" />
                            <stop offset={0.21} stopColor="#e9ffff" />
                            <stop offset={0.25} stopColor="#e3f9ff" />
                            <stop offset={0.41} stopColor="#c9dfff" />
                            <stop offset={0.51} stopColor="#c0d6ff" />
                            <stop offset={0.62} stopColor="#d0e6ff" />
                            <stop offset={0.75} stopColor="#e9ffff" />
                            <stop offset={1} stopColor="#c0d6ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-20"
                            x1={922.46}
                            y1={292.87}
                            x2={945.14}
                            y2={292.87}
                            gradientTransform="matrix(1.48, 0.3, -0.3, 1.51, -421.19, -472.47)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-21"
                            x1={853.28}
                            y1={426.24}
                            x2={877.69}
                            y2={426.24}
                            gradientTransform="matrix(0.52, 1.23, -1.84, 0.78, 1144.34, -1141.66)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-22"
                            x1={1244.31}
                            y1={351.71}
                            x2={1266.8}
                            y2={351.71}
                            gradientTransform="matrix(-1.31, -0.25, 0.38, -1.96, 2305.01, 1172.97)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-23"
                            x1={742.32}
                            y1={122.03}
                            x2={823.5}
                            y2={122.03}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-24"
                            x1={691.2}
                            y1={212.65}
                            x2={713.87}
                            y2={212.65}
                            gradientTransform="matrix(1.12, 0.22, -0.23, 1.14, -32.54, -248.51)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 6"
                            x1={864.33}
                            y1={214.87}
                            x2={1017.26}
                            y2={214.87}
                            gradientTransform="translate(28.78 -81.64) rotate(4.85)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#d642ff" />
                            <stop offset={0.16} stopColor="#d144ff" />
                            <stop offset={0.34} stopColor="#c34aff" />
                            <stop offset={0.54} stopColor="#ab54ff" />
                            <stop offset={0.75} stopColor="#8a62ff" />
                            <stop offset={0.96} stopColor="#6074ff" />
                            <stop offset={1} stopColor="#5778ff" />
                        </linearGradient>
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-2"
                            x1={915.34}
                            y1={245.4}
                            x2={924.41}
                            y2={246.17}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-3"
                            x1={1220.89}
                            y1={165.01}
                            x2={1230.46}
                            y2={165.82}
                            gradientTransform="matrix(0.65, -0.76, 0.76, 0.65, -4.67, 1069.87)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-4"
                            x1={924}
                            y1={248.07}
                            x2={931.24}
                            y2={241.02}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-5"
                            x1={864.8}
                            y1={209.38}
                            x2={1017.73}
                            y2={209.38}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-6"
                            x1={916.27}
                            y1={239.97}
                            x2={925.34}
                            y2={240.74}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-7"
                            x1={1225.6}
                            y1={162.15}
                            x2={1235.18}
                            y2={162.97}
                            gradientTransform="matrix(0.65, -0.76, 0.76, 0.65, -4.67, 1069.87)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-8"
                            x1={924.93}
                            y1={242.64}
                            x2={932.17}
                            y2={235.59}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-9"
                            x1={865.7}
                            y1={203.49}
                            x2={1018.63}
                            y2={203.49}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-10"
                            x1={917.66}
                            y1={234.18}
                            x2={926.73}
                            y2={234.95}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-11"
                            x1={1230.89}
                            y1={159.42}
                            x2={1240.47}
                            y2={160.23}
                            gradientTransform="matrix(0.65, -0.76, 0.76, 0.65, -4.67, 1069.87)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-12"
                            x1={926.33}
                            y1={236.84}
                            x2={933.57}
                            y2={229.8}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-13"
                            x1={864.31}
                            y1={198.16}
                            x2={1017.25}
                            y2={198.16}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-14"
                            x1={916.73}
                            y1={228.75}
                            x2={925.8}
                            y2={229.52}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-15"
                            x1={1234.38}
                            y1={155.16}
                            x2={1243.96}
                            y2={155.97}
                            gradientTransform="matrix(0.65, -0.76, 0.76, 0.65, -4.67, 1069.87)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-16"
                            x1={925.4}
                            y1={231.41}
                            x2={932.64}
                            y2={224.37}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-17"
                            x1={863.76}
                            y1={191.67}
                            x2={1016.7}
                            y2={191.67}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-18"
                            x1={916.73}
                            y1={222.23}
                            x2={925.8}
                            y2={223}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-19"
                            x1={1239.31}
                            y1={150.89}
                            x2={1248.89}
                            y2={151.7}
                            gradientTransform="matrix(0.65, -0.76, 0.76, 0.65, -4.67, 1069.87)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-20"
                            x1={925.4}
                            y1={224.9}
                            x2={932.64}
                            y2={217.85}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-21"
                            x1={863.12}
                            y1={184.09}
                            x2={1016.05}
                            y2={184.09}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-22"
                            x1={916.73}
                            y1={214.63}
                            x2={925.8}
                            y2={215.4}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-23"
                            x1={1245.05}
                            y1={145.91}
                            x2={1254.63}
                            y2={146.72}
                            gradientTransform="matrix(0.65, -0.76, 0.76, 0.65, -4.67, 1069.87)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-24"
                            x1={925.4}
                            y1={217.29}
                            x2={932.64}
                            y2={210.25}
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 87"
                            x1={891.41}
                            y1={285.97}
                            x2={819.16}
                            y2={271.11}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#180d5b" />
                            <stop offset={0.09} stopColor="#1a1660" />
                            <stop offset={0.25} stopColor="#1e2d6e" />
                            <stop offset={0.44} stopColor="#255385" />
                            <stop offset={0.66} stopColor="#2f87a5" />
                            <stop offset={0.9} stopColor="#3ccace" />
                            <stop offset={1} stopColor="#42e8e0" />
                        </linearGradient>
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-2"
                            x1={870.23}
                            y1={307.49}
                            x2={818.9}
                            y2={274.15}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-3"
                            x1={500.74}
                            y1={309.91}
                            x2={543.62}
                            y2={287.04}
                            gradientTransform="matrix(-1, 0, 0, 1, 1358.28, -1)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-4"
                            x1={875.25}
                            y1={320.25}
                            x2={823.61}
                            y2={291.94}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 59"
                            x1={833.64}
                            y1={312.91}
                            x2={869.56}
                            y2={312.91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#2b237c" />
                            <stop offset={1} stopColor="#180d5b" />
                        </linearGradient>
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                            data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 122"
                            x1={845.37}
                            y1={321.98}
                            x2={811.04}
                            y2={302.46}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#180d5b" />
                            <stop offset={0.1} stopColor="#1a1560" />
                            <stop offset={0.25} stopColor="#1e2d6e" />
                            <stop offset={0.28} stopColor="#1f3372" />
                            <stop offset={0.38} stopColor="#22447c" />
                            <stop offset={0.57} stopColor="#2b7097" />
                            <stop offset={0.83} stopColor="#39b7c2" />
                            <stop offset={1} stopColor="#42e8e0" />
                        </linearGradient>
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-5"
                            x1={858.74}
                            y1={272.2}
                            x2={816.61}
                            y2={244.83}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-2"
                            x1={833.64}
                            y1={272.21}
                            x2={869.56}
                            y2={272.21}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-2"
                            x1={840.98}
                            y1={278.72}
                            x2={810.09}
                            y2={261.31}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-6"
                            x1={850.97}
                            y1={263.34}
                            x2={816.46}
                            y2={255.55}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="linear-gradient-25"
                            x1={841.99}
                            y1={267.58}
                            x2={841.99}
                            y2={202.63}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#42e8e0" />
                            <stop offset={0.04} stopColor="#3fdcd5" />
                            <stop offset={0.3} stopColor="#31999d" />
                            <stop offset={0.54} stopColor="#256570" />
                            <stop offset={0.74} stopColor="#1d3f4f" />
                            <stop offset={0.9} stopColor="#18283b" />
                            <stop offset={1} stopColor="#161f34" />
                        </linearGradient>
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-7"
                            x1={822.24}
                            y1={216}
                            x2={749.99}
                            y2={201.14}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-8"
                            x1={801.06}
                            y1={237.52}
                            x2={749.73}
                            y2={204.18}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-9"
                            x1={569.91}
                            y1={239.94}
                            x2={612.79}
                            y2={217.07}
                            gradientTransform="matrix(-1, 0, 0, 1, 1358.28, -1)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-10"
                            x1={806.08}
                            y1={250.28}
                            x2={754.44}
                            y2={221.96}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-3"
                            x1={764.47}
                            y1={242.94}
                            x2={800.38}
                            y2={242.94}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-3"
                            x1={776.2}
                            y1={252}
                            x2={741.87}
                            y2={232.49}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-11"
                            x1={789.57}
                            y1={202.22}
                            x2={747.44}
                            y2={174.86}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-4"
                            x1={764.47}
                            y1={202.24}
                            x2={800.38}
                            y2={202.24}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-4"
                            x1={771.81}
                            y1={208.75}
                            x2={740.92}
                            y2={191.34}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-12"
                            x1={781.8}
                            y1={193.37}
                            x2={747.29}
                            y2={185.58}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="linear-gradient-26"
                            x1={772.82}
                            y1={197.61}
                            x2={772.82}
                            y2={132.66}
                            xlinkHref="#linear-gradient-25"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-13"
                            x1={877.22}
                            y1={124.67}
                            x2={804.97}
                            y2={109.81}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-14"
                            x1={856.04}
                            y1={146.18}
                            x2={804.71}
                            y2={112.84}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-15"
                            x1={514.93}
                            y1={148.61}
                            x2={557.81}
                            y2={125.74}
                            gradientTransform="matrix(-1, 0, 0, 1, 1358.28, -1)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-16"
                            x1={861.06}
                            y1={158.95}
                            x2={809.42}
                            y2={130.63}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-5"
                            x1={819.45}
                            y1={151.61}
                            x2={855.37}
                            y2={151.61}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-5"
                            x1={831.18}
                            y1={160.67}
                            x2={796.85}
                            y2={141.16}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-17"
                            x1={844.55}
                            y1={110.89}
                            x2={802.42}
                            y2={83.52}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-6"
                            x1={819.45}
                            y1={110.91}
                            x2={855.37}
                            y2={110.91}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-6"
                            x1={826.79}
                            y1={117.42}
                            x2={795.9}
                            y2={100}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-18"
                            x1={836.78}
                            y1={102.04}
                            x2={802.27}
                            y2={94.25}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="linear-gradient-27"
                            x1={827.8}
                            y1={106.28}
                            x2={827.8}
                            y2={41.32}
                            xlinkHref="#linear-gradient-25"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-19"
                            x1={777.97}
                            y1={115.58}
                            x2={705.71}
                            y2={100.72}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-20"
                            x1={756.78}
                            y1={137.09}
                            x2={705.46}
                            y2={103.76}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-21"
                            x1={614.18}
                            y1={139.52}
                            x2={657.07}
                            y2={116.65}
                            gradientTransform="matrix(-1, 0, 0, 1, 1358.28, -1)"
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-22"
                            x1={761.8}
                            y1={149.86}
                            x2={710.16}
                            y2={121.54}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-7"
                            x1={720.2}
                            y1={142.52}
                            x2={756.11}
                            y2={142.52}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-7"
                            x1={731.93}
                            y1={151.58}
                            x2={697.6}
                            y2={132.07}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-23"
                            x1={745.3}
                            y1={101.8}
                            x2={703.16}
                            y2={74.43}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-8"
                            x1={720.2}
                            y1={101.82}
                            x2={756.11}
                            y2={101.82}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-8"
                            x1={727.53}
                            y1={108.33}
                            x2={696.65}
                            y2={90.92}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122"
                        />
                        <linearGradient
                            id="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-24"
                            x1={737.53}
                            y1={92.95}
                            x2={703.02}
                            y2={85.16}
                            xlinkHref="#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87"
                        />
                        <linearGradient
                            id="linear-gradient-28"
                            x1={728.55}
                            y1={97.19}
                            x2={728.55}
                            y2={32.24}
                            xlinkHref="#linear-gradient-25"
                        />
                        <linearGradient
                            id="linear-gradient-29"
                            x1={719.78}
                            y1={5699.84}
                            x2={711.31}
                            y2={5690.76}
                            gradientTransform="matrix(1, -0.08, -0.08, -1, 65.37, 5972.16)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-30"
                            x1={721.75}
                            y1={5702}
                            x2={709.32}
                            y2={5688.67}
                            gradientTransform="matrix(1, -0.08, -0.08, -1, 65.37, 5972.16)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-31"
                            x1={-257.39}
                            y1={-3602.03}
                            x2={-266.92}
                            y2={-3612.24}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-32"
                            x1={-271.73}
                            y1={-3592.45}
                            x2={-277.4}
                            y2={-3598.53}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-33"
                            x1={63.53}
                            y1={-92.85}
                            x2={268.91}
                            y2={-92.85}
                            gradientTransform="translate(-0.5 311)"
                            xlinkHref="#linear-gradient-5"
                        />
                        <linearGradient
                            id="linear-gradient-34"
                            x1={1092.45}
                            y1={4369.81}
                            x2={1147.56}
                            y2={4369.81}
                            gradientTransform="matrix(1.07, -0.04, -0.04, -1.23, -652.92, 5670.53)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-35"
                            x1={537.36}
                            y1={6538.45}
                            x2={596.73}
                            y2={6538.45}
                            gradientTransform="matrix(0.89, -0.17, -0.19, -0.98, 1033.05, 6765.44)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-36"
                            x1={210.49}
                            y1={-4325.38}
                            x2={216.73}
                            y2={-4325.38}
                            gradientTransform="translate(0 4512)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#00b3ff" />
                            <stop offset={0.32} stopColor="#1fadff" />
                            <stop offset={0.76} stopColor="#44a6ff" />
                            <stop offset={1} stopColor="#52a3ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-37"
                            x1={230.51}
                            y1={-4269}
                            x2={239.13}
                            y2={-4269}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-38"
                            x1={134.18}
                            y1={-4302.85}
                            x2={142.66}
                            y2={-4302.85}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-39"
                            x1={136.19}
                            y1={-4362.51}
                            x2={147.04}
                            y2={-4380.25}
                            gradientTransform="translate(0 4512)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#6700e7" />
                            <stop offset={0.09} stopColor="#6a05e8" />
                            <stop offset={0.19} stopColor="#7413ec" />
                            <stop offset={0.29} stopColor="#832af2" />
                            <stop offset={0.41} stopColor="#984afb" />
                            <stop offset={0.45} stopColor="#a259ff" />
                            <stop offset={0.68} stopColor="#9f57fc" />
                            <stop offset={0.85} stopColor="#9752f3" />
                            <stop offset={0.99} stopColor="#8948e4" />
                            <stop offset={1} stopColor="#8747e2" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-40"
                            x1={137.8}
                            y1={-4369.09}
                            x2={152.8}
                            y2={-4369.09}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-41"
                            x1={124.29}
                            y1={-4379.33}
                            x2={130.93}
                            y2={-4390.2}
                            xlinkHref="#linear-gradient-39"
                        />
                        <linearGradient
                            id="linear-gradient-42"
                            x1={125.26}
                            y1={-4383.36}
                            x2={134.46}
                            y2={-4383.36}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-43"
                            x1={168.61}
                            y1={-4250.49}
                            x2={179.21}
                            y2={-4264.74}
                            xlinkHref="#linear-gradient-39"
                        />
                        <linearGradient
                            id="linear-gradient-44"
                            x1={167.41}
                            y1={-4253.48}
                            x2={184.79}
                            y2={-4253.48}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-45"
                            x1={126.02}
                            y1={-4266.43}
                            x2={142.12}
                            y2={-4293.97}
                            xlinkHref="#linear-gradient-39"
                        />
                        <linearGradient
                            id="linear-gradient-46"
                            x1={126.01}
                            y1={-4272.47}
                            x2={152.27}
                            y2={-4272.47}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-47"
                            x1={129.98}
                            y1={-4272.54}
                            x2={148.27}
                            y2={-4272.54}
                            gradientTransform="translate(-0.5 4511)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#00dfff" />
                            <stop offset={0.14} stopColor="#00e2ff" />
                            <stop offset={1} stopColor="#00f0ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-48"
                            x1={211.09}
                            y1={-4285.52}
                            x2={228.58}
                            y2={-4309.02}
                            xlinkHref="#linear-gradient-39"
                        />
                        <linearGradient
                            id="linear-gradient-49"
                            x1={209.2}
                            y1={-4290.5}
                            x2={237.86}
                            y2={-4290.5}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-50"
                            x1={165.57}
                            y1={-4316.59}
                            x2={185.14}
                            y2={-4350.78}
                            gradientTransform="translate(0 4512)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#6700e7" />
                            <stop offset={0.13} stopColor="#6903e8" />
                            <stop offset={0.22} stopColor="#6f0cea" />
                            <stop offset={0.29} stopColor="#791bee" />
                            <stop offset={0.36} stopColor="#8730f4" />
                            <stop offset={0.42} stopColor="#994cfb" />
                            <stop offset={0.45} stopColor="#a259ff" />
                            <stop offset={0.86} stopColor="#a058fd" />
                            <stop offset={1} stopColor="#9a54f7" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-51"
                            x1={166.64}
                            y1={-4332.7}
                            x2={200.05}
                            y2={-4332.7}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-52"
                            x1={175.63}
                            y1={-4332.33}
                            x2={190.93}
                            y2={-4332.33}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-53"
                            x1={108.22}
                            y1={-4313.14}
                            x2={131.18}
                            y2={-4350.7}
                            xlinkHref="#linear-gradient-39"
                        />
                        <linearGradient
                            id="linear-gradient-54"
                            x1={111.65}
                            y1={-4327}
                            x2={143.48}
                            y2={-4327}
                            xlinkHref="#linear-gradient-36"
                        />
                        <linearGradient
                            id="linear-gradient-55"
                            x1={-97.32}
                            y1={-3475.14}
                            x2={-109.74}
                            y2={-3488.45}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#5778ff" />
                            <stop offset={0.15} stopColor="#707aff" />
                            <stop offset={0.39} stopColor="#917eff" />
                            <stop offset={0.61} stopColor="#a980ff" />
                            <stop offset={0.82} stopColor="#b782ff" />
                            <stop offset={1} stopColor="#bc82ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-56"
                            x1={351.77}
                            y1={4001.69}
                            x2={538.34}
                            y2={4001.69}
                            gradientTransform="matrix(1, 0, 0, -1, 0, 4218)"
                            xlinkHref="#linear-gradient-9"
                        />
                        <linearGradient
                            id="linear-gradient-57"
                            x1={-6.52}
                            y1={-3674.3}
                            x2={124.48}
                            y2={-3674.3}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-19"
                        />
                        <linearGradient
                            id="linear-gradient-58"
                            x1={-6.53}
                            y1={-3640.57}
                            x2={16}
                            y2={-3640.57}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#5778ff" />
                            <stop offset={0.18} stopColor="#5c7dff" />
                            <stop offset={0.39} stopColor="#6a8aff" />
                            <stop offset={0.61} stopColor="#82a0ff" />
                            <stop offset={0.85} stopColor="#a3beff" />
                            <stop offset={1} stopColor="#bcd5ff" />
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-59"
                            x1={11.02}
                            y1={-3602.59}
                            x2={196.06}
                            y2={-3602.59}
                            xlinkHref="#linear-gradient-58"
                        />
                        <linearGradient
                            id="linear-gradient-60"
                            x1={73.22}
                            y1={-3608.79}
                            x2={258.32}
                            y2={-3608.79}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-19"
                        />
                        <linearGradient
                            id="linear-gradient-61"
                            x1={104.57}
                            y1={-3598.26}
                            x2={151.91}
                            y2={-3598.26}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-19"
                        />
                        <clipPath id="clip-path-7" transform="translate(-0.5 -1)">
                            <polygon
                                points="468.43 51.1 354.17 104.98 360.92 186.16 475.09 132.27 468.43 51.1"
                                fill="none"
                            />
                        </clipPath>
                        <linearGradient
                            id="linear-gradient-62"
                            x1={2.48}
                            y1={-3650.09}
                            x2={187.59}
                            y2={-3650.09}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-19"
                        />
                        <linearGradient
                            id="linear-gradient-63"
                            x1={-9.68}
                            y1={-3663.75}
                            x2={37.67}
                            y2={-3663.75}
                            gradientTransform="translate(43.52 3774.04) rotate(4.85)"
                            xlinkHref="#linear-gradient-19"
                        />
                    </defs>
                    <title>{"Portfolio_TutorialAnimation"}</title>
                    <g style={{ isolation: "isolate" }}>
                        <g id="Background">
                            <rect width={2279} height={350} fill="none" />
                        </g>
                        <g id="StepFour" className={stepFour[this.props.tutorialStep]}>
                            <g id="World_Map" data-name="World Map">
                                <path
                                    id="AD"
                                    d="M2031.65,132.28h0l-.09.05,0,0h-.08l0,0v-.17l0,0,0,0h.06l.13,0,0,0v0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AE"
                                    d="M2082,151.09l.06.08v.56l0,0h0l0,0,0,.07-.06,0-.05,0,0,0h0l-.05-.06,0-.07h0v0l0,0,0,0h0l0,0,0,0,0,0v.24l0,.06v.15l0,0v0l0,.11,0,0h.11l0,.08,0,0v0l-.09,0-.1,0h-.08l-.14,0-.07,0,0,0,0,0v.06l0,.1,0,.09,0,.11-.06.13-.07.2-.07.16v.32l-.06.08h-.18l-.11,0-.14,0-.17,0-.19,0-.19,0-.21,0-.2,0-.2,0-.19,0-.17,0-.14,0h-.28l0-.06-.05-.06-.05-.07,0-.06-.05-.07,0-.06-.05-.07-.05-.06,0-.07-.05-.06-.06-.07-.05-.07,0-.06-.05-.07,0-.06-.05-.07-.05-.06,0,0,0-.05v-.16l0-.05,0,0,0,0h.1l0,.19.05.06.06,0,.19,0,.12,0,.24-.11.13-.05h.35l.28,0,.43,0h.09l.23-.09.15-.09.08,0,.06-.08,0-.11,0-.06,0,0,0-.06,0-.09.08-.1.32-.23.19-.2,0-.06.1-.1.08-.1.39-.3.08-.13,0-.14h0l0,0v.1l0,.1v.16l0,0,.06,0h0l0,0Zm0,.42v-.06h0l0,0v.06h0l0,0Zm-1.67.8v0h0l-.06,0,0,0,0,0h0l0,0,0,0Zm-1.05.19h-.07l-.06,0,.13-.05,0,0,0,0,0,0,0,.06,0,0-.05,0Zm-.66,0h0v-.06h0l0,0,0,.05Zm1.21.11v0h-.2l-.07,0,0,0,.13-.05.06,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AF"
                                    d="M2099.15,138.6h0l-.07,0,0-.05h0l-.05,0-.1,0-.17.09v0l.11.1,0,0h0l-.1,0-.22.1-.14.08h0l-.08,0-.13,0h-.6l-.12,0-.21,0h-.13l-.08,0-.09,0-.1,0h-.07l-.09,0-.05.07-.17.12-.09,0,0,.06h-.14l-.07.07-.08.09-.14.14-.07.06,0,.09,0,0,.11.07,0,.07,0,.05.05.14,0,.13.05.06,0,.09v.06l0,.05,0,0v.05l0,0,0,0,0,0,0,0,0,.06,0,.06-.06.09-.08.06-.06.05-.07.1-.1.11,0,.09-.05,0,0,0,0,.05,0,.06.06.07v.27l0,.08-.18.08-.18,0h-.31l-.06,0-.24-.08-.1.05,0,.12.18.2.07.11.08.18.05.09,0,.09-.15.1-.16.09-.2,0-.13,0-.06.05,0,.2,0,.08v.08l0,.11-.06.06,0,.11,0,.2,0,.33-.09.11-.09.11-.1.08-.1,0h-.08l-.06-.07,0-.05-.07,0h-.07l-.07,0h-.12l-.09-.05H2093l0,0-.11.09-.25.14h-.11l0,0,0,.06,0,0,.08,0v0l-.07,0-.06,0-.14,0-.15,0-.16,0-.08-.06h-.09l-.09,0-.09.07-.1.16,0,0,0,0-.07,0-.09.06-.05.11-.05.21v.31l0,.13,0,.09v.07l.06.08,0,0,0,.06-.05,0-.2.06-.27.08-.18.06-.27.07-.08,0h-.53l-.12,0-.12,0-.08.05-.05,0,0,0-.12,0-.37-.07-1,.09-.09,0-.34-.11-.45-.14-.27-.09-.35-.11.24-.29.21-.25.21-.25.21-.25,0-.08v-.18l-.05-.22-.09-.11-.29,0-.22,0-.23,0h0l0-.18v-.35l0-.2v-.08l-.1-.39-.07-.21-.06-.22v-.15l.14-.21.05,0,.08-.1.06-.06v0l-.1,0H2086l-.07,0-.06,0,0-.09,0-.14,0-.28.08-.14.06-.09.23,0-.08-.11,0-.06,0,0v-.06h.06l0,0,.06-.05,0,0v-.06l0-.05.05,0,0-.07v-.07l0-.09,0,0,0-.05,0-.07,0-.06v-.07l0,0,.05,0v-.05l0-.07,0-.06,0,0v-.05l0-.07.08,0,0,.05,0,.05.11.1.07,0h.21l.09,0h0l.1.08.11.1,0,0v.07l0,0,.07-.07.07,0h.14l.07,0,0,0,.13-.09.11-.07.07,0,0-.14,0-.07,0,0v-.06l0,0,0-.06,0,0h.15l.2-.07.17-.06.15,0h.17v0l0-.05.09,0,.16-.09.14-.13.05-.1,0-.15.07-.22.07-.25,0-.11,0-.08.13-.07.12,0h.43l.05-.13,0-.12,0-.06.06,0h0l.12.07.19.1.23.06.11,0h.05l.28,0,.22,0,.12.11.11,0,.11-.05.07,0,0,0,.06,0h.08l.05,0v.07l.07.09.11.1.1,0,.13-.08h.05l0,0v-.06l.08-.06.15,0,.09-.05,0,0h0l.05,0,0,0v0h0l0,0h.07l.09.07.12.12.07.06h0l.05,0,0-.07,0-.09,0-.13,0-.1.06-.08.13,0,.18,0h.11l0,0,0,0h.07l.07,0,0-.1V138l-.05-.14v-.05l0,0,.07-.05.1-.1.09-.14.09-.17.11-.1.13,0,.16.05.19.13.07.16,0,.19v.1l0,0h.06l.09,0h.06l0,0v.05l0,.08,0,.23,0,.19,0,.19,0,.17,0,.12.05.2.07.13.06,0h.12l.13-.08.2-.15.19-.1.27,0,.1-.17.12-.11.29-.16.16-.06h.09l.12,0h.1l0,.05,0,0-.06.05,0,0,0,0h.09l.18-.06.12,0,.09,0,0,0,.05-.05h.08l.09,0h.2l.07,0,.09.08,0,.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AG"
                                    d="M1973.16,159.58l0,0-.1,0,0,0v0l.07-.06.07,0,0,0h0v0Zm0-.52v0L1973,159l0-.08v0h0l0,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AI"
                                    d="M1972,158.44l-.14.05v0l.12-.06h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AL"
                                    d="M2048.59,132.23l0,0,.08.13.05.11.1,0,.05,0,.08.07,0,.06,0,.2v.19l-.05.19v.16l0,0,0,0,0,.16v.15l.07.18,0,.05,0,0,0,.16,0,0,.12,0,.06,0,0,0v.12l0,.06,0,.08v0l0,.07,0,.09-.06,0-.07,0,0,.07,0,.07,0,.05,0,0,0,.12v0l0,0-.08,0H2049l0,0,0,0,0,0h0v0l0,.07,0,.06v.05h-.07v.12l0,0,0,0h-.07l-.07-.05h0v-.11l0-.09-.1-.2-.34-.2L2048,135l0-.08,0-.07h0l0,0,0,0,0,0,0-.08-.09-.18v-.05l0-.15.07-.18V134l0-.16,0-.1v-.13l0-.17.05,0,0-.05v-.18l-.1-.09h-.12V133l0-.1v-.09l0-.07-.05-.06.05-.09.06-.12.06-.09.08-.1,0-.09.05-.08,0,0,0,0v.17l0,0h.07l.07,0,.1-.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AM"
                                    d="M2073,136.64h-.16l-.14.06h0l0-.1,0-.07-.09-.19,0-.08,0,0-.12-.08,0,0,0,0v-.16l0,0h-.06l-.07,0-.14.06-.1,0-.06,0,0,0-.08,0h0v-.09l0-.05,0,0,0,0-.15.06-.09,0,0-.06-.16-.16-.15-.13-.1-.06h-.1l-.16,0h-.06l-.14-.05-.12-.07,0,0,0,0,0-.09-.07-.14v0l0-.06,0-.05.09-.11,0-.09v-.09l0-.09-.06-.16,0-.05-.07,0-.06-.08V134h.18l.14,0,.11,0,.15,0,.07,0h.07l.23,0,.08,0h.26l0,0h0l.15,0h0l0,.05,0,.06.06,0,0,0v0l-.11,0h0v0h0l.16.07h.08l0,0,0,0,.08.06.06.06v.05l-.17.12,0,0v0l.07.13.11.14.15.1.21.12v.07l0,.08,0,.06v0l0,0h-.21l0,0h0v0l.07,0,.12.09.07.09.07,0,.08.07.06.06.1.08.11,0,.15.07v.1l-.1.05v0h0l0,0,0,0,.06.06.08.09,0,0H2073l-.06,0v.05l.06.07,0,0v.19Zm-1.35-2.54V134h0v.06h.05Zm.48.5,0,0h0v-.05l0,0h0l0,0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AO"
                                    d="M2042.14,179.68h0l-.1,0-.11,0-.14.16-.07.06,0,0-.07,0,0,0v0l0,0,0,0v.26l0,.24v0h-.1l-.12,0h0l0,0,0-.09,0-.09,0-.06,0-.14-.06-.11-.06-.15,0,0,0-.05.08-.1,0-.06h.09l0,0,0-.06v0l.11,0,.13-.06.07-.05.07,0h.08l.08.1.07.06,0,0Zm10,5.77,0,.12,0,.17V186l0,0v.07l0,.07v.49l0,.22v.07l0,.11,0,.09,0,.1v.05l.08.15v0h-1.83v2.8l.06.29.1.32,0,0,.1.06.14.12.08.09.17.16.21.2.21.18.18.16-.28.06-.41.08-.28,0-.34.07-.22,0-.28,0h0l-.08,0h-.16l-.19.05h-.15l-.11,0-.11,0-.1-.07-.19,0-.26,0-.25,0-.24,0h-.28l-.11,0-.12,0-.1-.06-.12-.13-.09-.13h0l0,0H2043l0,0,0,0-.1-.07-.09-.06-.12-.08-.08-.1-.07,0-.12,0-.09,0h-.07l-.13,0-.09,0-.07,0-.12,0-.1.05h-.31l-.09,0h-.09l-.1.06-.15,0,0-.36,0-.16v-.19l0-.5,0-.07v-.08l.09-.06,0,0,.07-.09,0-.11,0-.25.2-.58.09-.57.11-.27,0-.29.32-.39.08-.24.17-.11.23-.13.17-.22.08-.15.09-.29V186l.06-.4v-.12l-.09-.16,0-.11-.08-.12-.08-.08,0-.15-.16-.24,0-.16-.07-.12v-.14l0-.15-.07-.15-.07-.17v-.05l0-.06.05,0,0,0,0,0v0l.28-.29,0-.06v-.24l-.26-.54-.22-.51,0-.25-.28-.34-.11-.22-.06-.15,0-.06,0,0h.07l.16,0,.22,0,.2-.09.05,0h.11l.11,0,0,0h.78l.19,0h1.77l.11,0,.09.06.05.06,0,0,0,.06,0,.05,0,.07v.21l0,.14.07.14.1.15,0,.11V182l0,.1.07.09,0,.05,0,0,.09.15.15.24.12.18,0,0h0l.13,0h.12l.09,0h0l.13-.07.13,0,.14,0,.07,0h.09l.22.06h.23l.18,0,0-.24v0l0-.09.06-.08v-.18l0-.12.12-.1.2,0h.12l.17,0,.27,0h.1v0l-.06.17V182l0,.05.05,0h1.1l0,.09v.16l0,.25,0,.22.09.22v.32l0,.2,0,.24,0,.28,0,.12.09.12.12.13.1.16.08.21,0,.13,0,.05v.09l0,.13,0,.09-.07,0,0,.06,0,.11v.1l0,0,0,0h0l.07,0,.09-.07.07,0h.1l.13,0h.32l.22-.09h.15l.13,0h.12l.07,0v0l0-.05,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AR"
                                    d="M1972.3,196.34l0,0v0l.08.06.15.09.15.17.14.26.12.19.12.12.11.08.1.06.06,0v0l.1.06.18.1.11.1,0,.1.18.1.31.11.22.05h.14l.2.08.26.17.16.13.06.06.17.11.43.23.19.06.09.05,0,.06,0,0,0,0,.11,0,.16.08.13.08.17.2,0,.08,0,.07v.06l0,.06-.09.07,0,0v0l0,.06-.08.13,0,.06v0l0,.05-.13.08,0,.05v0l0,0h0l0,.05,0,.07v.26l0,0v.08l0,0,0,0V201l0,0-.08,0,0,0,0,.07,0,0-.06.05,0,.07,0,.12.4,0,.33,0,.39.12.26,0,.12,0h.1l.06.05h.08l.1,0,.09,0,.07.07.06,0,.05-.1.07-.07.07-.05.09,0,.11,0,.08,0,.06.06h.07l.08-.06,0-.08v-.08l0-.06.06,0,0-.05,0-.06.07,0h.13l.07,0V201l0,0,.07,0,.05,0,0-.06,0,0h.06l.07-.12.07-.23,0-.31,0-.44h.07l0,0,.06,0,.05,0h.12l0,0h0l0,0,0,0h.06l.06.07.06,0,0,.09,0,.21.07.13.07.14v.07l0,.06v.1l0,.22v.09l0,.06V201l0,.1-.08.14-.07,0h0l-.09.09-.07,0,0,0,0,0,0,.09-.07,0-.11,0h-.1l0,0,0,.05-.05,0h0l0,0,0,.05,0,0v.06l0,0-.07,0,0,0v0l0,0-.13,0-.1.06-.06.08-.06.05-.09,0-.14.08,0,.06,0,.05,0,0v0h0l-.07,0h0l0,0v.07l0,0,0,0,0,0v.06l-.06.07-.12.09-.09.12-.06.15-.08.1-.09.05-.06.07,0,.09-.09.14-.16.18-.13.13-.13.07-.07.08v.09l-.09.1-.14.11,0,0,0,0v.07l-.06.1-.11.12,0,.1,0,.13v.15l0,.07,0,0v0l0,.06v.08l0,.1,0,.11-.08.12v.09l0,0,0,0v0l0,.07,0,.09,0,.07-.07,0,0,.06,0,.07v.07l0,.07v.07l0,.07v.08l-.07.16,0,.1,0,.44,0,.06-.05.07h-.11l0,0,0,.19-.09.42,0,.1.06.16,0,.1,0,.08v.15l0,.06h0l-.05,0,.06.18,0,.08.12.17.48.24.2.14.23.19.12.19v.16l-.18.25,0,.2,0,.14.06.14.18.17.13.06h.17l0,.05,0,0,0,.35v.14l0,.12-.33.56-.29.35-.1.19,0,.2-.09.1-.49.31-.76.28-.62.15-.14,0-1,.16-.2,0-.25,0-.2,0-.22-.05-.21-.05-.11-.12-.13,0,0,.06.07.16,0,.2,0,.11.08,0,.08.05.07.08h-.12l0,.06,0,0V215l0,.31-.11.06,0,0,0,.07-.07.29,0,.2,0,.12.14.26-.05.17-.09.09-.37.19-.15.08-.23,0h-.52l-.32-.17-.24-.11-.22-.08-.21-.05,0,0v0l-.06,0h0l-.14.09-.06.09,0,.08v.19l0,.17.1.4v.22l0,.28.06.16.08.07.19.08.07.05h.08l0,0v0l0,.07v.08l.13,0h.15l.15,0,0-.05v-.11l-.18,0,0,0,.13,0,.18-.07.09,0,.06,0,0,.05.05.11,0,.16v.18l0,.18,0,.06,0,.07-.32.1-.09,0-.08-.14,0-.13-.07-.1-.15-.07-.15,0-.15.13-.14,0-.06.12.37.18.17.06h.06l.06,0,0,.07-.06,0-.26.1-.11.07-.14.13-.19.29,0,.06,0,.07,0,.2.06.34-.07.14,0,.15,0,.11-.06.15-.27.24,0,.17.09.1v.09l0,.08h-.11l-.4,0-.14.09-.14.11,0,.05,0,0-.28.06-.05,0-.29.42-.13.26-.15.26,0,.11v.15l0,.13,0,.1,0,.13.11.15.56.61.12.05.6.07.13.08.08.14,0,.12,0,.3,0,.1-.07.08-.14.12-.17.06,0,0h.07l.15,0,.06,0,.05.12-.09,0,0,.06-.07.09-.35.36-.18.1-.18.15-.23.14-.09.08-.12.18-.19.19-.2.42v.08l0,0-.11.74,0,.08-.08.09-.21.16-.1,0-.14-.09-.08-.09-.07-.16-.09-.17v.06l0,.1,0,.11-.23,0-.06,0,.21,0,.14,0,.06,0,.06.08,0,.09,0,.06-.11,0-.15.08-.17.15-.1.17,0,.12,0,.24v.17l-.08.12-.11.11v0l.07-.06.07,0,0,.15.07.31,0,.21v.06l0,.09-.15,0h-.13l-.1,0,0,0h.09l.12.09.14,0,.06.06,0,.06.21.44.18.28.09.16,0,.08v-.1l-.12,0-.12,0-.19-.07-.26-.1H1966l-.21-.1-.22-.1h-1.81l0,0,0-.13-.07-.09-.1-.11-.12-.08-.06-.1-.07-.12,0-.11.05-.25v-.11l-.06-.08v-.16l.05,0,0-.18,0-.17,0-.16,0-.07-.06,0h0l-.1.06h-.17l-.06,0-.08.06-.11.09-.07,0,0-.1,0-.08,0-.08,0-.12,0-.16-.06-.19-.11-.15v-.14l0-.17.06-.17,0-.13-.07-.17,0-.17.07-.09,0-.12.3,0,0-.16.05-.12.06-.12,0,0,.11-.05.12-.06.07-.08,0-.07,0-.09v-.09l0-.2,0-.06.07-.08.14-.07.05-.19,0-.17-.07-.13-.1-.05v-.14l0-.12,0-.14.07-.15v-.11l.06-.06.17-.15.06-.13,0,0,.07,0v-.07l0-.08v-.2l0-.15.08,0,.11-.11,0-.08v-.09l0-.21,0-.14v-.05l-.05-.1,0-.06.06-.08.12-.08,0-.12,0-.09-.07-.06,0-.15,0-.19,0-.06.17,0v-.09l.13-.14v-.14l-.08-.08-.08-.13-.06-.11-.2-.07-.21,0,0-.11v-.06l.09,0,.16,0h.21l.1,0,.09,0,.08,0,0-.17.06-.1v-.08l-.06-.07-.1,0-.46,0v-.19l0-.11v-.06l0,0,0-.1,0-.07,0-.1-.08-.13.06-.06V220l0-.08-.07-.08-.07-.11v-.11l.08,0,.05,0v-.07l0-.09-.1,0-.15,0,0-.05,0-.09,0-.27,0-.16v-.09l0-.07,0-.06,0-.14,0-.08v-.06l0,0,0-.08h0l0,0,.08,0,.09,0V218l0-.1-.06-.24-.07-.15,0-.05,0-.06,0-.21v-.61l-.06-.12v-.12l0-.09,0-.11,0-.1,0-.05,0,0v-.06l0,0-.07-.07,0-.08,0-.06,0,0h.06l0-.09v-.16l0-.06,0-.15,0-.09,0,0h0l.06,0h0V215l0,0,0-.11,0-.13v-.1l0-.26,0-.06,0-.06.06-.05.08,0,.1-.06.13,0,0-.07,0-.09v-.07l0-.06-.07-.06,0-.15v-.32l-.06-.15-.07-.17,0-.16,0-.08,0-.13,0-.06,0-.11,0-.08,0-.13v-.07l0-.16,0-.09,0-.09,0-.09,0,0v-.14l.08,0,.06-.08h.11l0,0v-.13l.09-.08.06-.07.1,0,0-.08v-.1l0-.11,0-.12,0-.18v-.1l0-.08v-.08l0-.06,0,0,0-.07,0,0,.06,0,.06-.05.06-.25,0-.08,0-.09v0l0-.07,0-.1.07-.1,0-.07,0-.09v-.06l0,0h.06l.06,0,0,0v-.33l0-.22,0-.14,0-.15,0-.07v-.13l-.07,0-.06,0h0l-.06-.08,0-.08v-.11l0-.07,0-.09,0,0-.06-.06-.06-.2v-.17l0,0,0-.13-.06,0,0-.1,0-.1v0l.06,0,0-.08,0,0,0,0h-.06l-.05,0-.07-.19,0-.11,0-.15v-.12l0-.1v-.08l0,0,0,0h0l0-.06,0,0v0l0,0v-.06l0-.07,0-.17.07-.19,0-.06v-.06l0,0,0,0,.14,0,0-.08,0-.08,0,0,0-.05-.05,0,0,0,0-.07,0-.15V204l0-.23,0-.24,0-.07.09-.11.07,0v-.06l.07-.27v-.15l0-.09,0-.15.12-.13,0-.09h0l0,0,.07-.1.08-.1.07-.05,0-.08,0-.11.07-.18,0-.12,0-.05.07-.16,0-.1.07,0h.06l0,.05h.06l0-.06.12,0,0,0,0,0V201l0-.07-.1-.14-.09-.16v-.17l0-.08.11-.12v-.09l-.08-.33,0-.1,0-.16v-.07l0-.19,0-.07.07,0,0,0v0l0,0,0-.06,0-.07,0,0,0-.06v-.09l.05-.12.06,0,0-.06.06,0,.06,0,0-.07.19-.08.15-.07.29-.12.2-.09,0-.06v0l.09-.3.12-.39.08-.24-.18-.18,0,0,.09-.12,0-.1,0,0,.18-.1,0-.07v-.07l0-.05h.07l.12-.05.13,0,0-.06,0-.1,0-.12,0,0h0l.07,0,0,0,.19.14.08.08h.72l.13,0,.08,0,.06,0,.08,0,.08.14,0,.11,0,.1.07.18,0,.06,0,0,0-.19,0-.11.07-.13.14-.29,0,0,.06,0h0l0,0h0l0,0h.78l0,.05.06.11.07.06,0,0Zm.71,18.19v.07h0l-.11-.07,0-.06v0l.12,0,0,0,0,0Zm-6.25,21.37v-3.43l.06.07.21.31.06.13,0,.15-.08-.1-.09.06,0,.08,0,.1v.07l0,.06.09,0,.22,0v0l.13.38.06.08.07.07.17.2.16.21.19.2.21.15.19.12.18.14.19.2.21.15.22.1.23.09.35,0h.11l.07.07-.07.17-.09.15-.11.06-.13,0h-.11l-.11,0h-.1l-.1.06-.1,0h-.11l-.1.05-.1,0-.11,0-.28-.14-.18,0-.62-.06-.19,0-.2,0h-.1l-.15,0h-.12l0,0Zm3.79-.22.1,0,.2,0h.15l0,0,.14,0h.06v.07l-.13.07,0,0h-.27l-.12.07h-.06l-.11.1-.09-.07,0,0,.07-.09h.06l0,0,0-.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AT"
                                    d="M2045.72,124.27h0v0l0,.07,0,.09v.07l.1.26.08.16,0,.06.06,0-.06,0v.09l0,0v.15l0,.08h-.22l0,0,0,0-.09-.07h-.09l0,0,0,0,0,0v0l.19.06,0,.1,0,.08,0,0,0,0-.06,0h-.06v0l0,.13,0,0,0,0,0,.11h0v.11l0,.05v0h-.12l-.07,0-.15.15-.05,0,0,.06v.13h0v0l-.18,0h0l-.12,0-.08.06-.1,0h-.2l-.2,0-.05,0h0l0,0,0,0,0,.06-.07.05-.08,0v0l0,0,0,0h0l0,0h-.14l-.15,0-.08,0-.08,0-.09,0h-.12l-.2,0h-.12l-.17,0-.34-.07-.1,0h-.09l-.11,0-.08,0-.06-.08,0-.1-.11-.14,0-.06,0-.06,0,0v0h0l-.19.06-.18.07h-.07l-.07,0h-.09l-.08,0h-.18l-.1.05-.06.11,0,.08,0,0h-.15l-.06,0-.07-.07h-.22v0l0-.09-.06,0-.16.16,0,0-.13,0-.11-.07v-.05l0,0-.09,0-.12,0h0v-.1l0,0,0,0v-.12l.07-.16,0-.11-.07-.06h0l0,0h.09l.06,0,0,0,.09,0,.12.06.06,0,0,0v.07l0,0h.1v.12h.06l.06,0,.05-.07,0-.07,0-.17h.21l.08,0h.12v0l0,0,0,.06,0,0h.06l.08,0,.05,0,0,0,.08,0,.07,0,0,0,.07,0,.1-.06.13,0,.43,0,0,0v-.09h0l.06,0,.08,0,.07,0,0,0h0l.07,0,.08,0,.08,0,0,0v.06l0,0,.06,0,.08,0h0l0,0,0-.1v-.1l0-.06,0,0H2042v0l0-.08v-.12l-.1-.12-.08-.13v0l.05-.08.08-.06.17-.09,0,0,.07,0,.1,0,.05,0,0,0,0-.24h0l.17.08h0l.06-.07V124h0l.07,0,.06,0,.06.12.13,0h.16l.06-.06h0l.06,0,.13,0,0-.1.07-.11,0,0h.09l0-.08,0-.22,0,0h.07l.06,0,0,0h0l.05,0,0,0,.09,0,.18.1.09,0h.12l.21.15.15,0h.14l0,0,.06,0h.06l.05,0,.11.07,0,0h.11l0,.12Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AU"
                                    d="M2150.35,185.85l0-.08,0,0h0l.09.09,0,0,.05.07h.12l.15-.07.07,0h0l.11-.07h.07l.05-.05,0,.05.11.06,0,.07,0,0v0l-.06.06v.08h-.07l-.09.12-.31.21-.28-.18-.13-.11-.08-.16,0-.14Zm6.07,4.17v0l.05.05,0-.05,0,0V190l-.05-.06,0,0,0,0,0,0Zm2.08.95h0l.07,0,0,0h0l.07-.08.05,0h.13l-.09-.11h0l-.12,0-.15,0-.06.06-.06.09V191l.07,0Zm2.7-6.19,0-.06,0,0-.05.07,0,.06,0,0Zm-5.13,1.14.13-.17,0-.17h0v.08l0,.05,0,0,0,0-.08.13,0,0v0l.07-.06Zm-3.79-.2.07.15,0,0,0-.12,0-.06v-.13l0,.06h-.05l0,.08,0,0Zm3.58.39.09-.07v0l0,0-.17.09-.08.09.15-.07,0,0Zm.44,3.82h0l0,0,0-.08,0,0Zm4.87-4.7v.09l0,0,.08-.06-.07-.1-.06,0Zm-5.19,4.66v0h.07l0-.08H2156l0,0Zm.35-1.32-.09,0,0,0v0l0-.12,0,0h0l.06-.07v0l0,0h0l0,.09h-.05l0,0v-.12h0l-.07,0,0,.07-.1.07,0,.14,0,.1,0,.05-.06,0h.12l.17,0h.11l.12,0,0,0,0-.06h0l-.05,0Zm13.24,9.3h0l0,0,0-.06,0-.07v-.06l0,0h0l0,0-.08,0,0,.07.14.21.05,0Zm1.67,2,0,0v-.07l.05-.18.2-.45v-.09l-.06-.06,0-.18h0l0,0,0,0,0,0,.05.09,0,.08,0,.07-.14.12,0,.11v.05l0,.1,0,.1,0,.19,0,.05Zm.34,1.59,0,0v-.12l0-.17h0l-.05,0v.19Zm0,.18v.16l0,0h0l.08-.28v0l-.08,0,0,.11Zm-2.66-5.25h0l0-.08,0,0v.06l0,0,0,0Zm-.54-.12v-.15l0,0v.07l0,.08,0,0Zm-3.52-3.82.07.07.05.09.05,0,0,0v0l0-.08,0-.09h0l0,0h-.08v0Zm-3.53-7.61.05-.05,0,0h-.07l0,0,0,0Zm6.14,9.42v0l0-.09,0,0,0,0,0,0h0Zm0,.14h.06l0,0,0-.07,0,.13Zm-8.78-3.14-.05,0v0l0,0,.11,0v-.05l-.06-.05,0,.06Zm5.55,22.28-.05,0h-.12v.09l.06,0,.13-.07Zm2.6,1.93,0,0-.08,0-.17-.21-.06,0-.09.12-.06.05,0,0h.06l0,.08,0,.05.13.19,0,.05,0,0,0,0,.1,0,.08-.08h0v0l-.07-.06,0,0v-.09Zm-.06.64,0,0h0l-.07,0v0l.06.06,0-.09Zm-2.87-2.37h.14l.07,0v0l0-.05,0,0H2164Zm-.31,2.36v-.08h0l0,0,0,0,0,.13,0-.1Zm-8-28h0v.06l.08,0h0l0,0,0-.08,0,0-.05.07Zm21,47.2-.05.32v.07l0-.06.06-.22v-.16l-.06.05Zm-9.75-19.46-.11.07h-.13l0,0v0l.08.06h.1l.1,0,0,.07h.05l.06-.06L2167,216Zm0,2.21V218l0,0v-.14l0-.14v-.43l0-.14V217l0-.07v-.28l-.07-.11-.17-.09h-.06l-.09.11h-.05l-.18,0,0,0-.07.11,0,0-.06,0-.06,0h-.05l0,0-.1,0h-.11l-.06,0-.06.05,0,.06v.07l-.06-.07-.06,0-.06.05-.07,0-.24,0-.19,0-.27-.12,0,0,0,0,0,0-.1,0,0-.05h-.1l-.07,0-.06-.06H2164l-.06,0h-.11l-.2-.08-.1-.06v.13l-.06.24v.12l0,.14.06.18v.1l.13.27.13.23.16.24,0,.1,0,.12h.06l0-.06v.06l0,0,.14.16v0l-.05.13,0-.1-.06-.09-.16-.13,0,.28,0,.11.2.48,0,0,.05,0,0,0,.06.09.12.21.06.07.09,0,.14,0h.05l0,0,0,.05h-.11l-.11,0v0l0,0,0,.13.13,0h.33l.14.12.13,0h0l.08-.14,0-.17,0-.06,0,0-.08-.08v-.08l.16.13.07-.05v-.18l0,0,0,0,0-.06v-.05l0-.1v-.06l.11.12,0,.18.08-.05v0l0-.13,0,0,.11,0,.1.07v.06l0,0-.08,0,0,.05,0,.13.09.12,0,0h.1l0,0,0-.24,0-.18v-.31l0-.08,0-.09v-.22l0-.11.06-.08,0,0,0,0,0-.07,0-.06,0,.07,0,0,0,0,.07.05,0,0v.15h0v-.18Zm4.83-15.66-.12-.2,0-.16,0-.13-.17-.38-.08-.21,0-.22-.07-.7.08-.35,0,0-.09,0,0-.06-.06-.13v-.26l-.11-.16-.12-.07-.09-.13-.06-.11V199l0-.11-.09-.07-.07,0-.14-.1-.07-.11-.14-.29-.06-.08-.13-.09h-.11l-.07,0-.24-.19-.08,0-.06-.09-.09-.09-.05-.07-.09-.08,0-.28V197l0-.33-.08-.15-.05-.05H2169v.17h0l-.13-.09-.16-.1-.08-.1-.06-.1h-.05l0,0,0,.12.06.21,0,0-.05-.05-.09-.11,0,0h-.07l-.05-.11,0-.07-.06-.23-.06-.26v-.18l-.11-.1,0-.18,0,0,0-.12-.13-.16-.14-.11-.11-.11-.1-.15.05-.11.06,0h.08l-.06-.11-.06-.08-.14-.14-.07,0-.15,0-.16-.13-.1-.06h-.07l-.09,0-.05-.07-.11,0-.14-.15-.07-.14,0-.06,0,0-.07,0h-.06l-.13,0,0-.06-.09-.07-.16,0-.12-.05-.1,0-.1-.06-.09-.1L2165,193v-.17l0-.11-.1,0-.17-.23v-.09l0-.19,0-.33-.07-.25-.13-.29v-.16h-.07l-.08,0-.11-.14-.08-.1-.05-.09-.06-.12v-.33l-.08-.17,0-.17-.07-.22,0-.14,0-.12,0-.1,0-.06v-.08l-.1-.08-.1-.07-.14-.11-.25-.17-.06-.13-.1-.12-.14.05-.1,0-.1.09-.13.06-.13-.06-.06,0-.05-.17-.06-.19,0-.09,0-.12,0-.28-.05-.13,0-.2-.05-.22,0-.12v-.09l-.1-.13,0-.09-.06,0-.08-.05v-.13l0-.09,0-.11-.11,0H2162l-.05,0-.06,0,0-.18V186l0-.11,0-.09,0-.09-.05-.1-.16-.13v0l0-.07-.06,0h-.08l0,.08-.07.08-.15.06,0,.3-.09.34-.09.25,0,.07v.07l0,0,0,0-.06.1-.11.25V187l.06,0,.05,0,0,0,0,0v.06l0,.06v.06l-.05,0h-.08l0,.06-.11.1,0,.3,0,.15-.05.12-.06.23v.13l0,.08.05.13,0,.17,0,.13.07.36,0,.2,0,.13-.12.39-.05.28,0,.16-.06.14,0,.24-.07.17-.24.35,0,.17-.08.22-.17.12-.12.08-.28.08h-.16l-.09,0,0,0-.19-.07-.23-.16-.18,0-.09-.15v-.06l0-.09-.09-.11-.17,0-.18-.08h-.11l-.24-.07-.16-.1-.15-.13-.19-.23-.17-.07-.21-.09-.12-.08-.07,0-.08-.06h-.2l-.08-.05V190h0l0,0h0l-.11-.05-.16-.08,0-.07-.05-.09-.21-.12-.13-.11-.28-.15-.07-.07,0-.06,0-.1.06-.09.06-.07.19-.28.06,0,.07-.08.06-.21,0-.11-.06-.18v-.3l.22-.12h.06l.06,0,.06,0,0,.06h.05l.12-.21,0-.09-.05-.07,0,0,.38-.41,0-.1-.05,0h-.11l-.1-.09-.07-.17h-.09l-.16.17v0l0,0,0,.1-.06.12h-.17l-.05-.09,0-.13-.06,0-.08,0-.06.05h0l0,0v0l.09-.09.08-.06v0l-.06,0v0l.07-.08h0l-.09.08-.09,0-.13.1-.18.07-.13.08-.17,0-.16-.09,0,0-.08-.07-.17.07h-.11l-.07,0-.1,0-.09-.06-.22-.1-.23,0h-.11l-.08-.05-.08,0-.16,0-.07-.08-.08-.16-.06,0-.09,0-.1.08-.06,0-.12-.13-.21-.13-.06,0,0,0,0,.06h0l0,0-.08-.08h-.05l-.14.08v0l.12,0,.11.12.06,0,.13,0,.18,0,.19.14,0,.08v.29l.07.08h0l-.09,0-.06,0-.07,0,0,.11,0-.05-.11,0-.07,0-.1.05-.1,0-.07,0-.15,0h-.26l-.09-.06,0-.11,0,0,0,0,0,.06H2151l0,0v.12h-.07l-.07,0V187l0,0-.08-.06,0-.07-.06,0,0,0,0,.05v.15l0,0h-.11l-.05,0-.08.18-.13.07,0,.1v.08l.11.15,0,.07-.06.06-.06,0-.13,0-.09.07,0,.07v.07l0,.09,0,.1v.06l-.08,0-.15.17-.07.17.1.09.11.06h.08v0l-.08.07.05.07.08.06h.05l0,0h-.19l0,.07,0,.08,0,.07v.05l-.05,0,0-.05-.1-.11-.07,0-.1,0,0,0v.17l0,.07,0,0v-.12l-.1-.1-.39-.1h-.14l-.06,0v0l0,0-.07,0-.06.06,0,0v.06l0,.1,0,0v.05l0-.05,0,0,0,.09h0v-.23l0-.15,0-.09,0-.08,0,0-.27-.22-.11-.17-.08-.1-.14-.1-.06-.06-.15-.09-.18-.06-.09-.09-.09,0-.12,0v.16l-.09.13-.1.07-.08-.08-.08-.06-.07,0,0,.07,0,0,0,0,0-.1-.06,0-.06,0,0,.09,0,0v.07l0,0v.06l0,.08v.12l-.07,0,0,.09,0,0v-.12l-.08,0,0,.06v0h0l0,0v-.09l0-.09-.07,0,0,0v.08l0,.11-.07,0-.06,0h-.09l0,0V189l-.09.06v.07l.05.08v.07l.13.06v.07l0,0h0l-.11-.06h-.1l0,0,0,0v.05l0,0h-.06l-.07,0,.05.08v0l0,0h.15v.13l0,0,0-.06-.2-.11h0v.08l-.05.06-.07.07-.06,0-.06,0,0,.12v.13l.07.09,0,.11.1-.14h0v.06l0,.06,0,.08v.09h-.13l0,0,0,.06v.1l0,0h.2l.08,0v0h-.44l-.1-.05,0,0h-.08l-.08,0,0,.07,0,0-.12-.18-.08,0,0,.05,0,.11,0,.07,0,0h0l0,0,0,.05.09.12.06.05.06.08,0,.06h.08v0l0,.08v.11h0l0,0-.08-.07h0l0,0v0l0,.13-.05.19v.1l0,0,0-.08-.09-.11-.11-.25-.11-.16-.07-.14-.09-.27h-.05l-.06.11-.07.15-.05.08-.12.07-.06.07-.09,0-.09.09-.07.07-.09.17v.23l0,.16,0,.24.07,0,.05,0,0,.07-.08,0-.23.23-.16.08,0,.06-.05.12-.09.15,0,.1-.08.18-.15.21-.14.15-.17.13-.11.05-.41.18-.22.06-.4,0-.16.08-.21,0h-.24l-.32.26-.27.06-.24,0-.11,0-.23.15-.14.07-.25.08h-.11l-.14-.07h-.4l-.09.06-.55.31-.11.08-.11.13-.16.11-.13.13-.27.14-.28.1-.14.09-.1.12-.17.31,0,.08-.07.09-.09,0,0,0,0-.16-.07-.14.05-.26,0-.08-.09.05-.06,0-.15.39-.11.31.08.17,0,.1v.11l0,.16v.24l-.19.31-.06.14-.06.26v.31l.08.16.06.1.09.28.11.19.19.39.2.31,0,.12,0,.16v.17l0,.05-.08.05-.09-.07,0-.06-.06-.24h0l0,.1,0,0,0,0,0,0v0l0-.05V200l-.08-.1-.08-.11-.08,0,0,0v.07l.11.19.07.2.11.13.06,0,.07.08v.17l-.06.07,0,0-.14,0,0-.12-.11-.25,0-.09,0,0v.14l0,0h0l0-.05,0,0h0l.05.06.09.18.35.44.29.52.07.2,0,.45,0,.11.17.22.17.26.05.13V203l0,.1.21.29.09.3v.11l0,.2,0,.34,0,.18.08.37.09.26.11.16.15.37.22.42,0,.21v.56l0,.18-.05,0,0,.08.05.36v.21l-.07.2-.09.17-.14.12h-.16l-.08-.07-.1-.07v.59l0,.1v.13l.11.09.06,0h.07l.27.13.15.12.24.3.21.08.28.13.32,0h.26l.4.08.09,0,.17,0,.13,0,.12,0,.35-.28.35-.29.17,0h.16l.18-.1.17-.3.09-.06.12-.08.32,0,.2,0,.1,0,.26-.05.55-.05.29,0h.2l.11,0,.08.13.58-.11h.17l.1,0,.13.1.14-.09h.13l.14-.09.2-.26.09-.17.14-.35.11-.12.12-.06.14,0,.22-.07.47-.29.18-.06.09-.06.33-.23.2,0,.59.06.28,0,.22,0,.33-.12.36-.1.44-.19.37-.2.22,0,.35,0,.52-.05.6,0,.16-.05.07,0,.11,0,.13,0,.1,0,.3.16.45.33h.1l.3-.07h.1l.42.24h.32l.1,0,.11.07.14.15.28.15v.12l0,.08h-.06l-.06,0,.07.25.12.2.28,0,.1.07.07.08,0,.13,0,.2.14.17.13.14,0,.06.07.2,0,.06,0,.2.08.23,0,0h0l-.08-.06-.07-.07h0l-.05.05v0h.09l.09.07.08.08.07.05.15.2.06,0,.07,0,.12.11,0,0,0-.05,0-.19,0-.05v-.07l.06,0,0-.06.13-.15.28-.44.09-.05.1-.1.14-.08.14-.08.09,0,.09,0,.1-.08.1-.22.09-.26.08-.11.13-.12.11-.17v-.27l.07.11.05.1.07.35-.06.08-.07,0,0,.13,0,.16,0,.13-.14.13-.12.18-.15.33v.1l0,.14v.13l0,.12,0,.18-.06.17h-.35l-.12.37h.08l.06,0h.1l.12-.06.17-.06.1,0h.12l.16-.47.05-.3.08-.14,0-.09,0-.09.09.15.07.15.16.24,0,.12,0,.29-.1.34-.06.1-.08.08-.06.15.19,0h.12l.19-.1,0,0h.1l0-.05.1-.06.07-.06.09,0,.08,0,0,0,0,0,0,.06v.14h-.05l-.05-.08-.06,0,0,.06-.09,0,0,0,.05.08.19.16.2.21.08.09.16.32.12.33v.1l0,.18-.05.18v.09l0,.12.08.12.31.34.16.29.22.16.36.05.18.12.2.22.06,0h.09l.13-.14.18,0,.24.13.15,0,.1,0,.14.07.21.15.23.08.13.11.1,0,.19.08.13-.07.12-.08.27-.28.21-.13.11-.05.09,0,.11-.09-.07-.06h-.07l-.11,0,.06,0,.07,0,.33-.2.08.06.06.07.07.09,0,.13-.05.07-.1.1h-.17l.12.11.1.08.21-.14.06-.11,0-.06h.06l.1,0,0,.08,0,.09-.08,0,0,.07,0,.07.13.09.06,0h.08l.09,0,.07.12.07.15.07,0,.05,0,.08,0,.09.12.07.13v.05l.06,0,0,0,0-.06v-.26l0,0-.08.09-.05-.06-.06-.07V214l.07,0,.06,0h.07l.39-.06.5-.52.21-.19.23-.14.23-.09.12,0,.63-.05h.33l.17,0,.08,0,.13-.13.09-.08.11,0,0-.1v-.11l0-.11,0-.2v-.27l0-.14.06-.2,0-.2,0-.29,0-.17,0-.15.09-.18.07-.11.18-.41.06,0h0l0,0v0l0-.05,0,0,0,0,0,0h0v0l0-.11,0-.16.05-.28.05-.13,0-.1.12-.15.13-.14,0,0h-.07l0,0h0l0,0,0-.07v-.1l0-.15,0-.13.06,0,.07,0,0-.13,0-.06,0,0,.07-.11.06-.11.13-.22.13-.09.19-.06,0,0,0,0v0h.07l0-.08.08-.05.13-.13,0-.12,0-.09,0-.22.21-.28.14-.38,0-.24,0-.13,0-.19,0-.2v-.17l.15-.42,0-.18,0-.11.06-.42v-.22l.1-.25.13-.21v-.19l0-.14v-.31Zm-21.63-16.09.17-.05.17.06.1,0v0l0,0,0,0-.08,0,0-.08,0-.07V186l0-.08h0l0,0-.09.11,0,.06v.1l0,0h-.06l0,.1,0,0Zm-15.68,13.73V200l0-.07-.1-.3h0l0,0,.05.22.18.32,0,0,0-.09,0,0Zm2.08-5.08.06-.08v-.07l0-.05-.08.08,0,.06v0Zm8.43-5.26h0l0,0v0l0,0v0h0l0,0,0,0,0,0v0Zm.62-.8v-.1h0l0,0,0,.1,0,0,.06-.06ZM2166,219.3l0,0v0l0,0,0,0v.06h.08l0-.15,0,0Zm0,.25h0l0,.06,0,.06h0v0l0,0,0,0v0l0,.09.07,0,.08,0,0-.13v-.07l0-.08Zm.76-.83-.06,0-.05.06v.09h0l0,0v0l.07,0,0,0Zm-9.42-8.18-.08,0-.22,0v0l0-.08,0,0-.05,0h-.19l-.22.08-.42.1,0,.06,0,.1,0,.05.15.11h.15l.1,0,.11,0,.06-.07.16,0,.06.06.13-.06,0-.1,0,0,.15,0,.16.05h.05l0-.06-.07-.11-.11,0Zm5.71,4.72,0-.18-.09-.07h0v.09l-.06,0v.15l0,.09.05.1v.09l0,.07h0l.1,0,.07-.07,0-.08,0-.1v-.1Zm-18.93-28.35h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AW"
                                    d="M1965.61,163.93v0l0,0,0-.06-.06,0v-.05h0l0,0,.06.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AX"
                                    d="M2048.52,105.49h.09l.07.07,0,0,.05,0,0,0-.06.12h0l0,0h0l0,0V106l-.22,0-.05,0-.06-.25v-.06l0,0h0v.14l.06,0,0-.08v-.07l0,0,0,0,0,0,0-.07.06,0,.06.09Zm-.3.31v0h-.06l0,0,0,0,0-.07,0-.11h.07l0,.11Zm.87.27v0H2049l0,0h-.07l0,0,0,0,.06,0h.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="AZ"
                                    d="M2074.88,133.1l.09.07.14.19.21.32,0,.08,0,.11,0,.12,0,.11.22.28.09.1.15.13,0,0h.2l.12,0,.06,0,.06.05.05.06.05.16-.2-.05h-.21l-.11,0-.12,0-.11.07-.06.13-.06.29-.09.28v.13l0,.12v.06l0,0-.05.05-.06.25,0,.05,0,0,0,0v-.07l-.09-.06-.05.07,0,.14-.07.14v.48h0l-.19.05,0,0-.16-.2,0,0h-.07l0,0,0,0,0,0-.17-.12,0,0v0l0,0,0,0,.08,0,.1,0,0,0v-.08l0-.05-.13-.08,0,0v-.09l0,0,.11,0,.06-.05,0-.06-.12-.14-.14-.14h-.1l-.11,0-.17.12-.1.06-.13.09-.14.1-.11.1-.07.09-.13,0-.06.08-.21.21H2073v-.24l-.07-.07v-.05h.12l0,0-.08-.08-.06-.06,0,0,0,0v0l0,0,.09,0v-.1l-.15-.07-.11,0-.1-.08-.06-.06-.08-.07-.07,0-.07-.09-.11-.09-.08,0v0h0l0,0h.21l0,0,0,0,0-.06,0-.08v-.07l-.21-.12-.15-.1-.11-.14-.07-.13v0l0,0,.16-.12v-.05l-.06-.06-.08-.07,0,0,0,0h-.09l-.16-.07h0v0h0l.11,0v0l0,0-.07,0,0-.06,0-.05.2-.17.05,0,.13,0,.27.11v.06l0,0,.07.05.11,0,.11,0,.05,0,.07,0,.11.05.09.07,0,0h0l.07,0,.09-.08,0-.11v-.05l-.05-.07-.1-.07-.12-.07-.07-.06-.05-.11,0,0h0v-.14l0,0h.05l0,0,.05-.08,0,0,.1,0,0,.08h.06l.06,0,.06,0,.07.08.1.09.05.06,0,0,0,0,.07.05.06.07.05.18,0,0,.19.06.07,0,.18,0,.06,0,.1-.15.08-.15.08,0,.15-.07.08-.07,0-.08.08-.14.05-.08Zm-2.79,1.5v0l0,0h0l0,0v.05h0l0,0Zm-.48-.5h-.05V134h0v.06Zm1,2.58-.18,0-.31-.08-.09,0-.09-.1-.05,0-.07-.07-.06,0-.05-.05,0-.07,0-.06-.07-.07-.14-.25,0,0,0,0v0h.09l.15-.06,0,0,0,0,0,.05v.09h0l.08,0,0,0,.06,0,.1,0,.14-.06.07,0h.06l0,0V136l0,.05,0,0,.12.09,0,0,0,.08.09.19,0,.07,0,.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BA"
                                    d="M2045.69,128.74l.19.14.07,0,0,0h.06l.13,0,0,0h0l.1-.05h0l.11.1h.06l.07,0,0,0,.13,0,.07,0h.07l.06,0,.06,0,.06,0h.16l.08.07,0,.06v.08l0,0,.1,0h.09l.09,0,.09,0,.07,0,0,0v0l0,.1,0,.11-.06.11-.07.1V130l0,0,.07,0,.1.07.08.09.11.11,0,0v0l0,0h-.26l0,0v0l.1.13.12.18v.14l0,0h0l0,0h-.1l-.06.07h-.07l0,0,0,0-.05,0,0,0v0l0,.07.06.11v.08h0l0-.07h-.07l-.1.08-.07.07v0l0,.06v.15l-.13,0,0,0,0,0v.24l.07.13v.06l0,.06h0l-.09,0,0,0-.16-.11-.08-.07-.11-.08-.07-.05,0-.07-.06,0-.06,0-.08,0,0,0,0,0v0l0-.05-.21-.19-.1-.14,0,0v-.13l0,0-.15-.06-.17-.17-.17-.17,0,0-.09-.13-.11-.11-.08-.07-.08-.09-.07-.11,0-.18,0-.16,0-.06,0,0-.15-.18-.14-.11v-.12l0-.2,0-.22,0,0,.06,0h.07l.06,0,.12.15.07.06.06,0,.06-.06.09-.14.07-.07.24,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BB"
                                    d="M1975.21,163.34h0l-.08,0,0,0v-.14l0,0,.1.12,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BD"
                                    d="M2115.46,154.77v.51l0,.11v.05l0,0h0l0-.06-.06,0-.09,0,0,0h0l-.06.07,0,.06v.09l0,.09,0,.05v0l0,.08,0,.06v.07h0l-.06-.09,0-.1-.12-.18,0-.34v-.17l-.09-.19-.06-.27,0-.07,0-.09v0h0l0,.05-.06-.11,0-.1-.15-.2,0-.09v-.09l-.06.09-.09.06-.09.1-.06,0-.19,0-.11-.12-.16-.31,0-.06,0-.18,0-.17v-.15h0v.16h-.13l-.13,0,.11.08.12,0,.06.08v.14l-.06.05-.06,0v.06l.07.08-.09,0,0,.05V154l0,.06,0,.05v0l0,.05.06.1,0,.07,0,.11,0,0-.06,0-.12.13-.07.14,0,.07h-.06l0,0-.06,0v-.07l0,0,.11-.14-.06,0-.07,0-.1.07,0-.09,0-.09v-.1l.09-.16-.1.08,0,.1,0,.11,0,.08,0,.11-.06.06-.08,0,0,.07-.06,0v-.09l0-.12-.06-.29v.06l0,.18v.12l-.05.09-.09.1h-.11l-.06-.06-.07-.09v-.14l0-.08v-.18l-.07-.23,0-.12v-.06l0-.15,0-.1v-.1l.07-.15,0,0-.08,0-.08,0,0,0,0-.15,0,0-.06-.06,0,0,0,0,0-.07.05-.16.07-.17v-.28l-.07,0-.14,0-.09,0-.05-.07,0,0-.06,0-.07,0-.06-.06-.05-.08v0l0-.05.09-.2h0l.08,0h0l.06-.08.08-.23h.4l0,0,0,0v0l-.08,0,0,0,0-.09,0,0h-.16l-.08,0-.05,0-.08-.13-.1-.09-.1,0,0,0,0-.05v-.07l0-.06,0-.07.08-.09.09-.09,0-.05.06-.06v-.07l-.05,0,0,0v0l0-.06h.05l.09.06.1.09,0,.08v.06h.08l.06,0h.06l0,0h0v0l0-.06,0,0,0,0h.06l.05,0,0,.07v.11l.07.1.09.07.08,0,.09,0,.07,0,0-.07,0-.06,0,0,0,0h0l0,0,.1.24,0,.1,0,.29,0,.18v0l0,0v0h0l.13,0,.11,0,.12,0,.17,0h.79l.1,0h.07l.26,0h.27l.14.06.16.1.08.07,0,0v0l0,0h-.05l-.13,0h0V152l0,.08-.08.2v.08l0,0,0,0h-.1l0,0,0,.07,0,.07,0,0-.07,0h-.09l-.06,0,0,0h-.19l0,0v0l-.1.1,0,.16,0,.1v.08l.08.21.06.27,0,0h0v-.13h.06l0,.06,0,.11,0,0h.06l.07,0,0,0,0-.05v-.18l0-.08.12-.11,0,0v-.18h0l.06,0,.08-.05h0l0,.05h0l0,.19,0,.17v.25l0,.14,0,0,0,.08,0,.08,0,0v.16l0,.12,0,.36v.06Zm-1.78-1,0,0,0,0,0,0,0,0,0,0,.06.08Zm.13.86-.16,0h-.09l.16-.26v-.12l0-.09-.08-.08v0l0-.08,0-.09.09,0,.07,0V154l0,.08.12.15v.1l0,.22,0,.07Zm.71-.29,0,0,0,0-.05-.1,0-.12v0l0,0,0,.09,0,.06v0Zm-.37.21-.1.07,0-.41.08.15,0,.08Zm.67.34,0,.08v-.13l0-.05h0v.1Zm.07.32h-.06l0,0,0,0,0-.13h.07l0,0v.17Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BE"
                                    d="M2034.52,120.21v0h.11l0-.06,0,0,0,0v.07l0,.09.11.1.09,0,.11,0h.07l0,0,.06.06.14,0,0,0,0,0v.06l-.07.14v.08l-.08.1v0l0,.06,0,0h0l.13,0,.06.09h.09v0l.11.08,0,.06.07.06-.06.08v0l0,0,.09,0,0,0v.08l0,.12-.17.12,0,.13v0h0l0,0h0l-.08,0-.1.12,0,.1,0,.08,0,.06v.08l0,0v0l.06.07v0l.07.13,0,0v0l0,0,0,0h-.16l-.07,0h0l-.07-.06-.07-.1,0,0,0,0-.06,0-.08,0-.06,0,0,0-.07,0h-.06l0-.08v-.1l0-.06.06-.25,0,0,0,0-.06.06,0,.07v.07l-.11.06-.16,0-.18,0,0,0v-.07l0-.05v0l0-.06,0,0v0l0-.06v0l-.12-.11-.09,0h-.18l0,0,0,0,0,0,0-.19,0,0-.11,0h-.15l0,0,0-.09,0-.1,0-.1,0,0,0,0h-.08l-.09.06-.06,0h0l-.07-.05-.09-.09-.06-.09,0-.06,0-.06,0,0,0-.09v-.07l.4-.24.25-.13.11,0,0,.13,0,0,0,0h0l0,0,.06,0,.1,0,.07,0,0,0,0,0h.07l.13-.06.12-.09,0-.06v0l.07,0h.09v-.09l0,0,0,0,0,0,0,0h0l.11-.11,0,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BF"
                                    d="M2030.28,161.61v.12l0,.12,0,.15.08.1.1.1,0,0,0,.1,0,.06,0,.1.08.12.09.13.06,0h.06l0,0,0,0,.05,0,0,0,0,0,0,.08.1.06.07.05,0,0h-.09l-.08,0v.3l0,0,.08,0,.2.16.18.15,0,0h.21l0,0,.11-.07h.13l0,.07,0,.09v.1l0,0H2032l0,0v.06l0,0,.1.13.13.18,0,0,0,.05-.07.14,0,.06-.23.2-.12,0-.23,0,0,0h-.12l0,0v0l0,0,0,.08,0,0h-.12v.07l0,0v.08H2031l0,0,0,0h-.26l-.08,0h0v0l-.3-.07-.21,0-.22-.05v.05l0,0h-.08l0,0,0,.05-.05,0,0,0,0,0h0l0-.06h-.49l-.28,0h-1.19v0l-.06.23v.13l0,.08,0,.05,0,0v0l0,0v0l0,0v0l0,0v.1l0,.16v.11l0,.05v.08l.06.11v.07l0,0h0l0-.07,0,0-.05-.07,0-.07,0,0,0,0-.06-.09-.06,0h-.06l-.09,0-.18,0h-.2l-.08,0-.07,0-.21.07-.07,0-.06.09H2026l-.07,0,0,0h-.1l-.08,0-.09-.08-.06,0-.08-.06,0-.1-.06-.08,0-.11-.07,0-.08,0h-.11l-.08-.05,0-.06v0l0-.08v-.07l0-.12v-.15l0-.1.06-.05.07,0,0-.07,0-.16,0-.14,0-.05,0,0,0-.06v-.14l.06-.06.06,0,0,0,.13,0,.16,0,.09,0,.06,0,0,0,0-.07.06,0,0-.05v-.23l0-.05,0,0,.23-.11v-.08l0-.09,0-.08,0-.06.06-.07.06-.06,0,0,.09-.08.1,0,.09,0,.25.17h.1l.07,0,.09,0,0-.11v-.17l0-.08h0l.15,0h.08l0,0v-.1l0-.15.09-.12.18-.14,0,0,.06,0,.32.1,0,0,.08-.25.09,0h.1l.07,0,0,0,.15-.09.27-.13.14-.05,0,0,.1-.09.14-.1.09,0h.12l.07,0,0,0h0l.15,0,.23.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BG"
                                    d="M2056.45,130.72l0,.31-.09.14-.13,0-.17,0-.09.16-.05.05,0,0,0,.21V132l-.06,0-.06,0-.25.29.14.09.07.06.1.18.15.2,0,.09-.13,0h0l0,0h-.13l-.07,0h0l-.06,0-.1-.1-.06-.06-.05,0-.05,0-.17,0,0,0-.07,0-.08,0h-.17l0,0,0,.06,0,.06,0,0-.14,0,0,0v.06l-.11,0-.09,0,0,0,0,0v0l0,0,0,.1v.17l-.07,0-.13.05-.13,0-.05,0h-.1l-.09,0-.13,0-.12,0-.11-.09-.13-.06-.13,0-.05,0,0,0-.11-.08-.05,0,0,0,0-.1h0l-.1,0h-.3l0,.07h-.14l-.11.06-.12,0h-.36l-.08.08h-.22v0l0-.31.05-.14v-.05l-.05,0,0-.07-.07-.2,0,0-.11,0-.09-.05-.08-.08-.14-.18.07,0,0,0,.07-.1v-.08l-.05-.05,0-.11,0-.1V132l0-.05,0-.06,0,0h.17l.09-.12,0,0,.06-.08,0,0,0-.06v-.06l-.11-.08,0-.06-.05-.07-.07,0-.13-.08-.05-.09,0-.1,0-.08,0,0v-.05l0-.05v-.1l0-.14,0-.05h0l.12-.07v-.1l0-.06,0,0,0,0,.07,0,.15.09.08.06v0l0,0-.07,0,0,.05v.1l0,0,.28,0,.29,0,.38.08.26,0,.18,0,.35.08.33.06.31,0,.17-.05.12-.07.11-.13.26-.18.25-.1.33-.08.22,0,0,0,.29.17h.12l.1,0,0,.05h0l.14,0,.06.09.09.12.16.06.14,0h.2Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BH"
                                    d="M2076.76,150.85l0,.08,0,0-.07-.13,0-.09,0-.14,0,0,.09,0h0l0,0,.05.08v.24Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BI"
                                    d="M2058.26,177.63l0,0-.08.17,0,0h0l0,0,0,0v0l0,.05v0l0,0,.06,0,.08,0,.09,0h.07l0,0v.05l0,0v.08l0,.07-.1,0-.05,0h0l0,0v0l-.09.07-.1.09,0,.06,0,.07,0,0-.07.07-.08.13,0,.08-.19.21-.16.1-.05,0h-.29l0-.14,0-.19-.1-.17v-.57l0-.13v-.08l-.06-.09-.08-.1,0,0v-.12l0-.06h0l.09,0,.09,0,.05.11h.32l.08,0,.08,0,0,0,0-.11,0-.19h0l.1.07h.05l0,0,0,0h0l.13,0,.07.06h.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BJ"
                                    d="M2033.4,164.64l0,.06-.06.12v.1l.14.2v0l0,0,0,0,0,.1v.12l0,.07.06.11v0l0,.16v0h-.08l0,0,0,0,0,.06v0l.06.1,0,.15,0,.09-.07.05h-.07l0,0,0,0v.1l-.1.09,0,.07,0,0v.12l0,.12-.06.1-.14,0h-.11l0,.25v.32l0,.06v.46l0,.05v.19l0,.07,0,.06v0l0,0V169l0,0v.11l0,.08,0,.06,0,0,0,.06,0,.16v.05l-.39,0-.43.06-.18,0v0l.15,0,0-.12-.1-.14,0,0,0-.07,0,0v-.13l0-.1h.09v-1.18l0-.26v-.46l0-.08-.14-.14,0-.07v-.09l0-.1v-.4l-.14-.09-.2-.14-.16-.1h0v0l0-.3,0,0,.05-.13,0-.1h0l0,0,0,0h.09v-.08l0,0v-.07h.12l0,0,0-.08,0,0v0l0,0h.12l0,0,.23,0,.12,0,.23-.2,0-.06.07-.14,0-.05,0-.1,0-.17v0l.1,0,.12,0h.07l0,0,.07,0h.07l.25.23.1.12,0,.06.06,0,.08,0,.08.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BL"
                                    d="M1972.13,158.78h0v0h.05v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BN"
                                    d="M2136.17,170.93l-.07,0-.08.05-.07,0,0,0,0,.05v.18l0,0,0,0v0l0,.07,0,0,0,.09-.05.06-.06.06h0l0,0-.05-.06-.06-.09,0,0h-.09l0,0v0l0-.05,0-.06,0,0-.07,0,0,0h.11l.11,0,.12,0,.11-.06.09-.06.09-.08.09-.06.14-.07h.05v0l0,.05Zm0,0h.11l0,0,.06.11,0,.11v.16l0,.07h0l0,0h-.11l-.06,0,0-.17,0-.1v-.2Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BO"
                                    d="M1976.44,194.3l0-.16,0-.14,0,0-.27-.16-.25-.16-.32-.2h-.84l-.41.08-.41.09-.19,0-.38.09-.23,0-.06.16-.09.24-.08.14-.1.15-.15.21v.49l-.1.34-.08.29-.08.28-.06.2,0,.05,0,0-.07-.06-.06-.11,0-.05h-.78l0,0h0l0,0h0l0,0-.05.05-.15.29-.07.12,0,.11,0,.19,0,0,0-.06-.07-.18,0-.1,0-.11-.07-.14-.09,0-.06,0-.07,0-.14,0h-.72l-.08-.08-.19-.13,0-.05-.07,0h0l0,0,0,.11,0,.11,0,.06-.13,0-.12.05h-.07l0,.05,0,.07,0,.07-.18.1,0,0,0,.1-.1.12,0,0-.16,0-.2,0h-.2l0,0,0,0v-.33l-.06-.16v-.12l0-.15-.08-.07,0-.12v-.11l-.07-.13v-.32l-.11-.16-.11-.18-.09,0,0,0v-.18l.07-.07v0h0l-.18-.12,0,0,0,0v0l0,0,0,0,0-.08v-.08l0,0v0l0,0,.12,0,0-.07V194l0,0-.11-.11v0l.11-.16.09-.1,0,0v0l0,0-.05,0-.07-.05,0,0-.08-.08-.09-.06-.06-.07,0-.05V193l0-.16v-.1l0-.11,0-.08v-.07l0-.07,0-.06,0,0,0,0v0l-.18-.08,0,0,0-.17-.12-.15,0-.11h0v-.11l0-.05-.06,0v0l0,0,.11-.09.06,0v0l0,0,.11-.13.06-.09.06-.06.07,0,0,0v-.16l0,0,.07,0,.06,0h0v0l-.06-.05-.12,0h-.08l0,0,0,0-.16-.4,0-.09v0l.1-.2,0-.06.07-.09v0l-.13-.15,0-.07v-.16l.08,0,0-.07,0-.07,0,0,0,0,0-.06.06-.05,0,0v-.1l0,0,.08,0v0l0-.08,0-.07,0,0,0-.18-.05-.09,0,0,0-.05,0-.09v-.58l0-.05.06-.07.06,0,0,0v-.08l0,0,0-.06-.12-.21-.11-.19-.1-.18-.12-.21-.08-.14-.09-.17-.09-.14-.11-.21h.32l.21,0,.14,0,.06,0v0l0,0h.1l.11,0,.1,0,.08,0,0,0,.1-.14.08-.08.07,0,.15,0,0,0h.06l.05-.08.08-.08.15-.11.08,0,0,0h.08l.07,0,.36-.28.14-.07h.09l.07,0,.13,0,.31,0,.2,0,.06,0h.08l.06-.06,0,0h0l0,.07,0,.08,0,.06v.08l0,.11,0,.1-.07.13,0,.06v.12l0,.12.06.17v.12l0,.08,0,.07v.06l0,0,0,0V186l0,.07.07.06,0,.06v.1h.09l0,.08v0l0,.07v0l.07,0,.08,0,0,0,.09.08.07.06.09,0,0,.07.06.11.15,0,.18,0,.11,0,.14-.06h.09l.1,0,0,0,.07,0,.11.07.09,0,.06,0h.1l0,.08,0,0,0,0,.12.1.06,0h.07l.15.06.16.07h.17l0,0,0,.08.14.16.06.06.08.05h.35l.26,0h0l.15.07.18.1.11.07.09.05,0,.07,0,.07,0,.07,0,.08,0,0,0,.05,0,.07.06.07,0,.08,0,.15,0,0,0,.45h-.29l0,0,.14.16.13.16,0,.24v.16l0,.22v.13h.32l.36,0h.44l.39,0h.11l0,0h0v.2l-.11.15v.25l0,.17,0,.14,0,0,.13.08.2.14.07,0,.07,0,0,.06v.09l.11.27.07.17,0,.06,0,0v0h0l0,0-.06.19-.08.25,0,.17h0v.12h-.06l0,0-.07.14-.09.19-.09.19,0,.12.09.09.16.14,0,0-.07,0h0l0,.06,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BM"
                                    d="M1970.38,144.12l-.08,0h0l.08,0,.07-.08h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BQ"
                                    d="M1967.17,164.22l0,.1,0,0v-.09l0,0,0,0,0,0v0l.14.07v.08Zm4.86-5.08,0,0h0v0h0Zm-.27-.12h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BR"
                                    d="M1978,173.65h.09l.14,0,.19,0h.06l0,0v-.14l0-.05-.06-.06-.05-.07,0,0v0l0,0,0,0,0,0,0-.09v0h0l0,0,.15.07h.07l.25,0,0,0h0l.09,0h.11l.06,0h0v0l0,0,0,0h.14l0,0v0l0,0h.06l0,0,0,0,.08,0,.13,0h.06l0,0h0l0,0,.14-.08.06,0,0,0,0,0h0l0,0v0l0,0,.11,0h0l.07,0,.06,0,0,0,0,0,0,.06,0,0h.13l.07,0h0l.06,0,0-.05.08,0,.08,0,0-.06.06-.09,0,0V173l.09-.2,0,0,0-.07,0-.07v-.06l0-.06,0,0,0,0,.06-.09,0-.08.11-.18V172l0,0,0,0,0,0,0,0,0-.06,0,0,.07-.05,0,0,.09-.15v-.08h.08l.12.08.1.12.13.39,0,.36,0,.19.15.39v.07l0,.09,0,.09,0,.15v0l0,0h0l0,0,0,.1,0,.06.07.09.15,0h.1l.13.05.09.07.07.22,0,.13v.1l0,0-.1.06,0,0-.21.16,0,.08-.11.1-.11.2-.16.18-.06.05h-.08l-.06,0-.12.15-.17,0v.08l-.1.2-.08.1-.06,0-.13.2,0,.08v.15l-.09.09-.1.06v.13l0,0,0,0-.19,0-.3.13-.1,0h.32l.11.07.23-.05.28-.18.1,0,.22-.12.09-.08.16-.1,0,0,.09,0,0,.05v0l-.07.07,0,0,0,.06v.14l0,.1.1.14V177l.05.05,0,0,.16.15.13-.08.09,0,0,0,.11,0,.08,0,.17.05.13-.05.25-.13-.08.22-.06.2,0,.09,0,.22,0,0,0,.07.06,0,.05,0,.06-.09,0-.15.18-.39.06,0,.15-.05.26-.31h.1l.06.07.06,0,0-.09.09,0-.09,0,0,0v-.06l.07-.09,0-.07.13-.1v-.07l0-.06.06-.06.06,0,0-.06,0,0h0l.07.06.07-.07.07,0,0,0,0,0h.07l.09-.05.08.07,0,0v0l0,0,0,0,0,0,.12,0,.06,0,.07.06h.17l0,0h.08l0,.05.11.08,0,0,.09,0,.09,0h.19v.06l.07,0h.09l.06.08.18,0,.13.09h.08l.09,0,.09.19,0,.14,0,0,0-.06.05-.11.1,0,0,0,.09.07.09.08,0,0h.07l-.06.06h.06l.06,0,.06.08,0,.1v.1l0,.05,0,0,0,.07h0l0,0,.06.05,0,0,.08-.13,0,0,.08,0,0,.1v.08l-.13,0v.07l0,0,0,0,0,.09,0,.08-.07.35v.05l.09-.06.17-.17.05-.19.07-.19.07-.06h0l.07,0v.1l-.07.09,0,0,0,.05.17-.15.07-.06h.07l.12-.07h.26v-.08l0,0h.14l.27.07.1.06.14.06.08.06.32.12.23,0,.11-.06.14.06.08.06.15,0,.15,0,.11-.05h.29l.37-.07h.22l.25.05.18.11.15.07.09.06.15.07.31.17.11.11.19.14.2.05.1.15.09.07.2.24.24.17.15.18.3.11.12.18.2,0,.09,0,.1.08.15,0h.39l.17,0,.4.07.06,0,.08.08.15.29.08.33,0,.24.09.19.06.37,0,.11v.09l0,0,0,.24v.1l0,.13v.09l0,.05v0l0,.12v.09l-.06.11-.07.3-.17.48-.17.28-.24.29-.15.15H1997l-.06,0,0,.08,0,.07-.16.21-.15.14-.17.24h0l-.2.09-.13.08-.15.14-.15.22,0,0,0,0v.11l-.12.18,0,0v-.05l0,0v-.08l0,0-.08.13,0,.1,0,.15-.21.41-.24.36-.06.11-.2.23-.15.12h-.09l0-.18-.12-.11,0,0-.05.11,0,0h-.06l.06,0,0,.06-.06.12v.11l-.12.12-.06.08,0,.11,0,.1,0,0,0,0v.08l0,.08v.27l0,.06,0-.09,0,0-.11.59,0,.27,0,.3.05.3,0,.26v0l-.07.31-.1.3,0,.25,0,.27,0,.13,0,.13,0,.31v.06l-.11.14-.13.07-.07.07-.15.25-.08.38V193l0,.42,0,.17,0,.12-.06.07-.14.1-.13.22-.06.23-.08.08,0,.13-.07.14-.19.21-.12.06-.06.06,0,.13-.12.2-.08.26,0,.09v0l0,.3v.08l-.11.08-.43.16-.11.07-.25.27,0,.06v.09l0,0,0,.06,0,.1h-.5l-.23,0h-.12l0,0-.06,0,0-.06,0-.07v-.05h-.07l-.07,0v.08l0,.05,0,.06,0,.06h-.14l-.15,0-.18,0-.15,0-.07,0,.07,0h.1l.1,0,0,0-.15-.06-.17,0-.09.06h-.21l-.24.05-.05,0v.1l0,0,0,.05,0,0,0,0-.26,0-.25.2-.1,0-.09.09v.07l0,.05h-.06l-.12,0h-.17l-.12,0-.6.31-.22.13-.25.26-.42.29-.22.17,0,0h0l-.07,0,0,0h.05l0,.1-.09.07-.16.18h0l.05-.09h-.08l-.12,0,0,0,0,.09-.05,0h-.08l-.07,0-.08-.06,0,.12.17,0,.07,0,0,.05-.13.22-.11,0v0h.06l0,.06,0,.25,0,0h0l0,0,.05.08,0,.06v.12l0,.09v.1l.06.18,0,.18,0,.07v.08l0,.07,0,.11-.07.19,0,.28,0,.26,0,.13,0,.11-.09.14v.14l-.21.13-.23.18-.21.21-.23.3-.26.47-.25.66-.29.5-.12.18-.16.21-.21.24-.29.24-.31.21-.11.1-.11.13,0,0,0-.1,0-.07v-.09h.06l.09.05,0,0,0,0,.11,0,.22-.23.16-.09.09-.14v-.24l0,0h.12l0,0v-.05l0-.11.16-.1.07-.12,0-.29,0,0,.06,0,0,0,0-.13,0-.07h-.08l-.26.14H1983v-.12l-.13-.05-.05-.1v-.06l0,0v.22l.11.13,0,.05-.06.06,0,.13v.18l0-.06,0,0,0,.19-.08.07,0,.07,0,.08,0,0-.19.15-.2.1,0,.05,0,.12,0,.11-.09.11-.06.2v.09l0,.13,0,.09-.06.06-.08.11-.06.12-.15.48-.14.29-.1.14-.14.15-.42.37h0l-.06,0-.06,0v-.56l0-.06,0,0,.08-.06.08-.09.09-.12.08-.09,0-.06-.07-.06-.12,0-.12-.09-.1-.11-.05-.11,0-.12,0-.1,0,0,0,0-.06-.05-.05,0-.06,0-.1,0-.11-.05-.14-.12-.1-.13,0-.09,0-.06-.28-.1-.13-.12,0,0-.08,0-.08-.06,0,0,0,0,0-.05,0-.05-.08-.09-.09-.09,0,0h0l0,0v0l0,0,0,.05-.05,0-.06,0h-.12v-.1l0-.16,0-.07-.06-.07-.06-.09-.22-.19-.29-.28-.1-.08h-.18l-.09,0-.06.13,0,0h-.16l-.15,0-.06-.07,0-.06.15-.11.08-.1,0-.09.07-.07.12-.07.14-.13.15-.19.1-.14,0-.09.06-.06.09-.05.07-.1.07-.15.09-.12.11-.09.07-.08v-.06l0,0,0,0,0,0v0l0,0h.08l.06,0h0l0,0,0,0,0-.05,0-.05.13-.09.1,0,.06-.05.06-.09.09-.06.14,0,0,0v0l0,0,.08,0,0,0v-.05l0-.06,0,0,0,0h.11l0-.06.06,0h.1l.11,0,.06,0,0-.1.05,0,0,0,.06,0,.1-.08h0l.07,0,.07-.15,0-.1v-.08l0-.06v-.08l0-.23v-.09l0-.07v-.06l-.06-.15-.08-.12,0-.22,0-.08-.06,0,0-.07h-.07l0,0,0,0h-.05l0,0H1980l0,0-.06,0h0l0,0h-.08v-.14l.13-.22,0-.1,0-.05,0-.2.09-.35,0-.22,0-.11v-.07l0-.06,0,0-.12-.08-.06-.07-.09-.05-.08,0,0,0,0,0-.09,0-.1.06,0,0-.1,0-.1,0h-.08l-.08,0,0,0,0-.08v-.18l-.06-.06,0-.05v-.22l0,0v-.16l0-.06,0-.07v-.07l0-.07v-.08l0-.07v-.06l0-.05,0,0,0-.08v-.1l-.05-.06,0,0h-.06l-.07,0h-.19l0,0,0,0-.07-.05,0-.09h0l-.08,0,0,0,0,.05-.05.05h-.06l-.07,0h-.15l-.08,0-.11,0-.08,0-.09,0H1977l-.07-.05-.07,0h0l0,0h-.06l-.07,0,0-.06v0l0,0,0-.06,0-.06v-.35l0-.07,0-.07,0-.05v0l0-.06,0-.07v-.14l0-.08,0,0v0l0,0v-.06l0-.06h0l0,0v-.19l0-.05,0,0,0,0,0,0v0l0-.07.06,0,0,0,0-.05h.06l.07,0,0,0-.15-.15-.1-.08.06-.12.09-.19.09-.19.07-.15v0h.06v-.13h0l.06-.17.08-.25.06-.19,0,0h0v0l0,0,0-.05-.07-.17-.11-.27v-.09l0-.06-.07,0-.08,0-.2-.14-.13-.08,0,0,0-.15,0-.16,0-.2v0l.11-.15v-.2h0l0,0h-.49l-.44,0h-.68v-.13l0-.22V190l0-.24-.13-.16-.14-.16,0-.05h.29l0-.44,0-.05,0-.14,0-.08-.06-.07v-.12l0,0,0-.08,0-.08,0-.07,0-.07-.08,0-.12-.07-.17-.1-.15-.07h0l-.27,0h-.09l0,0h-.2l-.08-.06-.06-.06-.14-.15,0-.08-.06,0h-.16l-.16-.07-.15-.06h-.07l-.07,0-.11-.1,0,0,0,0,0-.08-.05,0,0,0-.07,0-.09,0-.11-.07-.07-.06,0,0-.09,0h-.1l-.13.06-.12,0-.18,0-.15-.05-.05-.1,0-.07-.09-.05-.08-.05-.08-.08,0,0-.07,0-.08,0v0l0-.07v0l0-.08h0l0,0h0v0l0-.06,0-.06-.07-.06,0-.07v-.07l0,0,0,0v-.1l0-.07,0-.08v-.12l-.06-.17,0-.12v-.13l0-.05.08-.13v-.1l0-.11v-.14l0-.08-.06-.07h0l-.06,0-.06.06h-.07l-.06,0-.2,0-.32,0-.12,0-.08,0h-.08l-.15.07-.35.28-.07,0H1968l0,0-.08,0-.15.11-.08.08,0,.08h-.06l0,0h-.14l-.07,0-.08.08-.1.13-.05,0-.08.05-.09,0-.11,0h-.1l0,0v0l-.06,0-.14,0-.21,0h-.68l-.09.05-.15.06-.06,0h-.09l-.06,0-.08-.07,0,0,0,0v-1.11l0-.05,0-.06,0-.08v-.07l0-.05,0,0-.06,0h0l0,0-.08.05-.06,0-.06,0-.08.09-.06.05-.07,0-.12.1-.09,0-.25,0h-.53v-.15l-.08-.06v-.08l0-.06,0-.07-.06,0-.08,0-.13,0-.19,0h-.36l.11-.14.11-.13v-.12l-.09-.1,0-.07-.08-.08-.09-.06,0-.09v-.08l0,0,0,0,0,0-.06,0v0l0-.05,0,0v-.05l0-.06,0,0,0,0,0-.05v0l0,0,0,0v0l0,0h0l-.07-.08,0,0,0,0,0,0,0,0,0,0v-.12h.07l0,0h.1l0,0v0l0-.09,0,0v0l0-.1,0-.06.06-.07.18-.14.16-.1h.08l.06,0,0-.06v-.11l0-.08,0-.09,0-.06,0-.06,0-.09.09-.13.08-.14v-.13l0-.18,0-.09,0,0,0,0,.05,0,.13,0,.08,0,.13-.1.11-.1.08,0,.17-.1.09-.06,0,0,.09,0,.17,0h.13l.08,0,.11,0,.08,0h.08l.16,0,0,0,0-.06.06-.06h.25l.11,0,.06,0,0,0,.08.05h.1l.07,0h0l0,0v-.09l0-.19.05-.31.06-.28,0-.31.06-.32.06-.32,0-.27,0-.23,0-.14,0-.18v-.16l0,0v0l0,0v-.09l0,0,0,0,0,0v0l0,0v0l0,0v-.2l0,0,0,0-.07,0-.08-.06-.08-.06-.11-.11,0-.06v-.65h.22l0,0,0,0h.07l0,0h0l0,0h0l0,0,0,0h.08l0,0h.11v-.21l0,0,0-.06,0,0,0,0h0l0,0h-.2l-.09,0,0,0h0l0,0v-.6h0l.06,0h.08l.06,0h0l.07,0,.07,0h1.12l0,0,0-.06,0-.06,0-.05,0,0,.06,0,0,.09,0,.07,0,0h.11l0,0,.1-.13.09-.1,0,0,0,0h.09l0,0,0,.05.1.18.08.12,0,.09v.39h0l.18,0,.23.21.18.15.08.05,0,0h.1l.12,0,.06,0,.06-.05.11-.06.09,0h0l0,0,.08,0,0,.07,0,.09v.06h.07l.06-.09,0-.07.09-.06.08-.08.06-.08.07,0,.11-.05.09,0h.08l.06,0,.07-.07.06,0,0,0h.17l.09-.07.08-.08,0-.14,0-.12,0,0,0,0,0,0h.08l.15-.06.11-.07h.1l0,0,0-.06,0-.11,0-.06-.18,0h-.11l-.2,0-.09,0,0,0v-.06l0-.09,0-.12-.1-.19-.07-.18v-.35l0-.07-.27-.22-.1-.1,0-.07-.1-.13,0,0h.06l.06,0,0,.07,0,0h.35l0,0,0,0,0,.08,0,0h.34l0,0,.07,0,.13-.05h0l0,0,.15.15.08.07.07.08h.11l.08-.07,0-.25,0-.07,0,0h0l.06,0,.07-.05h.06l.23,0,.07,0,.24-.06.25-.09.07-.1.1,0,.08-.08h.16l.06,0h0l0,0,.05-.1.07,0,.09,0,0-.05.05-.06,0-.05v0l0-.08,0-.08,0,0h0l.08,0,.07,0h.11l0,0h.07l.09-.06,0,0h0l0,0,0,.05.08,0v.32l0,.07,0,.06,0,0v0l0,0h.14l0,0h.07l.08.06,0,0v0l0,.06v.05l0,0,0,0,.06.13,0,0,0,0v0l0,.05,0,.06-.06.06v0l0,0-.11.07,0,.11v.11l0,.06-.07.18,0,.09,0,.2V173l0,.1.06.2,0,0,.09,0v.37h0l0,0v.09l.06,0,.06,0,0,.06.09.1,0,0,0,0,.08.08.12,0,.12,0,0,.05,0,0h.07l.05,0,0,0h.16l0,0v0l0-.08,0,0h.07v0l0,0,0,0h.1l.06,0,0,0h.12l0,0v-.06h.1l.07,0h.19l0,0,0,0,.08-.12,0,0,0,0h0l.08,0,.07,0h0l0,.06,0,0h0l.12,0h.06l.07,0h.12l0,0Zm5.7,0-.09,0h0l0-.11v-.09l.07,0h.05l0,0,0,.14Zm.13,1.42-.1,0V175l0-.06.13,0h0l0,0,0,0V175l-.11.12Zm-.25.23v.14l-.17-.06v-.14l.08,0,.07-.07,0-.09v-.12l0,0h0v.29l-.09.11Zm.64-.12,0,0-.14.19-.07,0H1984l-.1-.06h-.21v-.08l.06-.09h.14l.23-.07.13,0Zm.27.35-.25,0-.11-.05,0,0,.08-.07.1,0,.09,0,.1,0,0,.05v0l-.06.05Zm-1.12,0-.25.18-.08-.06,0,0v0h0l0-.07.14-.05h.16l0,.05v0Zm1,.09h.08l.13,0,.08,0h.18l.3,0h.19l.06,0,.07,0,0,0v.05l0,.08,0,.09,0,.12,0,0h0l0,.1v0l0,.05,0,.08-.07.11,0,0-.06,0,0,.05v0l0,0,0,.06-.09.09,0,0h-.09l-.08-.09v.07l0,.07,0,0h-.1l-.06,0-.09,0,0,.11-.05.08-.06,0-.09,0,0,0-.1,0-.09,0h-.06l0,0h-.21l-.09,0h-.06l-.09-.09v0l-.06-.11,0-.13,0-.12,0-.11h.14v-.06h-.11l-.07-.07V176l0-.06,0-.05,0,0,0-.1,0-.08.17-.11.2,0,.57.1Zm-2,1.1-.1,0,.12-.23.12-.11v-.21l.12-.19.11-.07.16,0,.09.12-.11.32h0l-.15.17-.15.12Zm6.41-.1-.06,0,0,0h0v0h0l0-.07h.08v0Zm.35,1.48-.09.09,0-.1,0-.07,0-.06.06,0h0V178l0,.11Zm5.31,9.41,0,0v-.06l.09-.07,0-.09,0,0v.07l-.13.09Zm-.15.36,0,.05h0v0l0,0,0,0h.09Zm-4.82,9.35,0,0h-.05l-.06,0-.1,0,0,0,.08-.06,0,0h0l0,0,.06,0Zm-1,.75v0l0,0-.1,0,0,0,.14-.17,0,0,0,0V198Zm-3.07,2.54h0l0-.12.11-.12,0,0,0,.1,0,.07,0,0Zm.09,1.41-.06.05v-.25l0-.08,0-.06,0,0,0,.05,0,.12-.08.15v.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BS"
                                    d="M1958.86,150.83h0l-.08-.1-.07,0,.1-.07,0-.06v-.14l0-.07v-.07l0-.06,0-.08-.08-.06-.17-.23-.26-.06h-.14l.08,0h.07l.1,0h.13l.08.07.07.09.07,0,0,0v.05l.08,0,.09.07,0,.2-.12.1,0,.29,0,.05Zm-1.17-.84.11,0h.06l0,0h.17l.13,0,0,.06v0l-.28,0-.26.08-.15.06h-.06l-.06,0-.17-.17,0,0,.13.09.07,0,.08-.06V150l0-.07.1.07Zm1.7,1.27.15.11.13,0,.14.14.06.05v0l0,.21,0,.12v.12l0,0,0-.07,0,0,0,0h.1v-.11l0-.09v-.1l-.12-.1-.08-.1-.12,0-.11-.1h-.06l-.08,0,0-.06,0-.07h0Zm-1,.79v.24l-.1.06,0,0-.09,0-.06.05,0-.08,0,0v-.09l0,0-.06,0-.1-.06-.06-.08.09,0,0,.06.07-.07,0,0h0l0-.06.1-.16,0-.11,0-.17h0l.12.06.05.06v.08l0,.06.07.15.09.09Zm.36-.31-.1,0-.08,0v0l0,0,.07,0h.11l0,0h0l-.08,0Zm1.88.82v.05h-.06l-.09,0h0l0,0,.07,0v0l-.08-.06-.09-.16,0,0,0-.06-.08-.07,0,0h.07l.11.24v0Zm-2.16-.05v0l-.09.07.06,0,.07-.1,0,.08,0,.15v.12l0,.13h-.18v-.11l0,0,0-.16-.06-.05-.08-.13,0,0h.06l0,0h.09l.05,0,0,0Zm3,.18-.07.11h0l0-.14.05,0h0l0,.06Zm-1.13.62h0l-.07,0-.16-.12H1960l0-.07,0,0,.13.11,0,.05Zm.76.55v0l-.12-.2-.14-.05-.09,0,0,0h.06v-.07l0-.07-.07-.13,0-.1,0,0v-.08l.09.12,0,.11.06.11,0,.18.12.06.08.09v.1Zm.72.17,0,0-.06,0-.13-.05h0l0-.06v-.07l.08,0,0,.05.11,0Zm-.14.51-.07,0,0,0,.12-.09.07-.07,0,0v0l.06,0,0-.05v0l-.06-.07v0l0,0h.1l0,.05,0,.14-.13.17-.11.06-.1.09Zm1.07-.21h.09l.11,0,.06,0,0,0,0,0-.09-.06h-.21l-.05,0,0-.07.08,0Zm.12.91-.12,0,0-.06.07,0,.07.06Zm-.1.31,0,.07-.1.14-.22,0h-.24l0,0v0l0,0v0l.08,0,.06-.06h.09l.12,0h.06l.09-.05.07-.11h0v.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BT"
                                    d="M2114.59,148.92v0l0,.06v.12l.06.07.08.05h.1l.09,0h0l0,.08,0,.08-.05.08,0,.07v.07l0,0,0,.07v.06l0,0-.05,0h-.14l-.08,0-.08,0h-.14l-.06-.06h0l-.12.08-.15,0-.25,0h-.22l-.06,0-.1-.06-.09,0-.1,0h0l-.08.09-.16,0-.17,0,0,0h-.09V150h0l0,0h-.07l-.08,0-.05,0-.17,0-.1-.05-.11-.07-.05,0,0-.11,0,0,0,0,0,0,0,0,.11-.09v0l0-.15.07,0,.07-.08,0-.12.11-.13.11-.13.08-.11,0-.05.11-.05.09,0,.06-.07.07,0,.08,0h.12l.1,0,.12,0v.16h.35l.17.05.06,0,.05,0h0l.07,0,.07-.05h0l0,0,.06,0,.12,0,.1,0,0,0v.16Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BV"
                                    d="M2033.27,235.25h-.07l0,0h0v-.07h0l0,0h0l0,0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BW"
                                    d="M2053.38,192l0,.05v.12l0,.07,0,.06,0,0,.05.09.05.11.06.09.19.2,0,.07,0,.07.12.14v.14l.12.28.08.16.06,0,.22.17.19.15.22.09.16.06.08.05,0,0,0,.09,0,.14v.1h.32l.05,0,0,0v.52l0,0,.14.15.06.09.06.15,0,0,0,0,.12,0,.33.06.2.06.15.05.07,0h0v0l0,.12v.05l0,0,0,0,0,0h.12l.07.08,0,0-.21,0-.11.06-.06.12-.1.08-.13,0-.14,0-.15,0-.16.1-.17.18-.08.11v0l0,0-.07,0,0,.05v0l0,0h-.06l0,0,0,.07-.06,0-.09,0-.08,0-.06.07-.06,0h0l-.06,0-.09.13v.06l-.13.48-.07.06-.13.09-.11.12,0,.07-.05,0-.25.06-.09,0-.11,0,0,0,0,.15-.08.21-.06.16,0,.14-.07.17-.06.06-.07.05-.09,0h-.32l-.12.06h-.11l-.18,0-.14,0h-.07l-.13-.11h-.2l-.07,0-.07-.05-.14-.12-.13-.09-.13,0-.11,0-.11,0-.08,0h0l-.06,0-.07.09,0,.14,0,.08-.07.19-.08.21,0,.07,0,0-.07,0-.24.18-.11.19-.08.06-.09,0-.07,0,0,0,0,.1,0,0,0,0-.14,0h0l-.35,0-.11,0h-.08l-.12,0-.05,0,0-.08,0-.16v-.15l.06-.1.06-.08.05-.1v-.09l0-.08V200l-.08-.18-.09-.25-.13-.27,0-.08-.07-.12-.3-.22,0,0V196.1h.91v-3.59h.23l.28,0,.44-.07.42-.08.27,0,.32-.06h.14l0,0,.15.19.09.15,0,.07h.06l.05,0,.15-.15,0,0,.1-.07.12-.07.1-.06.11,0h0l.05,0,.06,0,.24-.18.1,0,.29,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BY"
                                    d="M2056,112.86l.13.15h0l.07-.05h.16l.06,0,.05.09.05.08,0,0,.14-.09.08,0h0l.18.09.08,0,0,0v.05l0,.08,0,.08.06.1.06.07.14-.11.05,0h.05l.08,0,0-.07.05,0,.1,0,.18,0,.2.1,0,0,.1.11,0,.06h0l.06.06.07,0h.05l0,0,0,0v.28l0,.06,0,0v.08l.06.09.07.14,0,.08v.06l-.1.18,0,0,0,.09v.12l.17.14.12.08,0,0v0l-.07.15v0l.1.07.06.09,0,.16.09.15.21.13.15.09,0,0,0,0,0,.1,0,.13,0,.06.06,0h.16l.19,0,.23.14v.06l0,.05V117l0,.05.2.16,0,0v.13h0l-.06,0-.1.06,0,.09-.16.13-.1.06h-.08l-.19,0-.07-.06,0-.06-.07,0h-.23l0,0,0,.07-.06.12,0,.07,0,0,.06.09.08.11.09.09,0,.06v0l0,0v.1l.08.14,0,0v.33l0,0,0,0,0,.07.06.14v0l-.18,0H2059l-.12.08,0,0-.08,0-.1,0-.12.14-.08.08-.08.12,0,.07-.05.12-.05.14,0,.09,0,.09v.1l0,.07,0,.06,0,.08-.08,0-.11-.07,0-.11-.09-.08,0,0h-.09l-.14,0-.19,0h-.14l-.08,0-.11,0-.05,0-.06-.13L2057,120l0,0,0,0h0l0,0,0,0,0,0-.07,0-.05,0-.06.12h0l0,0,0-.12-.06,0h-.1l-.13,0-.09,0h0l-.06.05h-.06l-.14,0,0,0,0,.07,0,.07h0l0,0V120l-.08,0h-.14l-.1,0h0l0,0-.12-.2-.06,0h-.11l-.17,0-.19,0h-.1l-.06-.05-.11,0-.32-.08-.13,0h-.19l-.28,0h-.19l-.09,0-.09,0h-.35l-.12,0,0,0-.05.09-.14.17-.13.1h0l-.08,0-.07,0H2052l-.06,0,0,0v.12h0l-.06-.15v-.13l0-.08,0-.07,0-.1,0-.14v-.1l0,0,0-.05-.09,0,0,0-.12-.06-.12-.07,0,0v0l0,0,.09-.14.1-.13.07,0,.33-.17.06-.06V118l0-.19,0-.13-.07-.24-.17-.51-.11-.53.07,0,.16,0,.13,0h.07l0,0,.09,0h.08l0,0,.08,0,.15-.06.13-.08h.14v0l0-.19,0,0,.16,0,.06,0,.06-.1.1-.06h.08l.08-.06.05,0,0,.08,0,.06v0l.06,0h.1l.06,0v-.16l0-.05-.08,0h-.06v0l0-.07.05-.14.06-.12,0,0v-.25l.05-.18.07-.14.1,0,.12,0,.07-.06,0-.08v-.06l0-.06,0,0h.29l0-.11,0,0,.06,0,0,0,0,0-.07,0-.17,0,0,0v0l.05-.12,0-.16,0-.12v-.08l0,0,.14,0,.05,0,.12-.17.09,0,.24,0h.25v0l0-.17,0,0,.19-.22.13-.09.07,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="BZ"
                                    d="M1948.65,158.2l-.05.11h.2l0,.12v.1l-.1.26,0,.1,0,.13.06.09-.06.12,0,.08v.11l0,.22,0,.32-.09.14,0,0-.09.14-.12,0-.17.22,0,.06v.06h-.31v-1.92l0-.07.08,0,.1.05,0,0,0,0,0,0,.06-.1.15-.21,0-.15.06,0h.16Zm.31.53,0,0,0-.06v0l0-.14h0l-.1.21Zm.09.48-.07.14v0l0-.1,0,0,0,0v0l0,0v0l0,.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CA"
                                    d="M1966,28l.75.14.25-.05.28.33.16,0,.28-.06.2.08.75.07.16.13v.16l-.16.33-.22.32-1.41,1-.1.17.27.06.41,0,.31-.11.37-.35.12,0,.23-.17.46-.48.36-.26.16.11.14.19.1,0,0-.14.08-.39,0-.13.12-.1h.07l.12.18.13.43.12.29h.06l.28-.34.14,0,.31.12.14.15,0,.15-.09.17,0,.14,0,.12,0,.14.19.29.28.63v.23l-.15.47v.12l.71-.49.72.22.2.15.08.17.08.3.09.41-.06.42-.32.65-.32.5-.2.45-.29.24-1,1.06-.49.34-.29.32-.13.06-.6-.06-.16.18-.09.3-.19.14-.28.11-.57.08-.13.34,0,.22-.06.18,0,.08-1.64,1.18,0,.2.16.08.21-.08,2.38-1.43.46-.1.42.1,0,.34-.61,1-.76.83-.38.63-1,1.06-.79,1-.3.52-.41.92-.14.22-.17.09-.19,0-.18-.13-.24-.34-.22-.38-.07-.07,0,.19.42,1.26,0,.24-.77.25-.34.22-.17.06-.13,0-.12,0-.12.09v.09l.1.1.31.09.68-.28.11,0,.17.13v.13l-.18.38-.55.46.07,0,.16.16v.15l-.17.34-.08.1-.53.32-.23.07-.21,0-.93-.69-.33-.1-.31-.17-.23,0-.25.2.11.1.45.2.38,0,.16.07.06.13.16.45,0,.25,0,.22,0,.16-.06.09-.1,0-.37,0-.13.05-.16.13-.2.06-.37,0-.42.19-.23,0-.25-.09-.27-.21-.28-.11-.48-.09,0,.13.17.05.34.32.17.44.15.07.32.36.23,0,.24.12.34-.15.23,0-.05.86-.1.09h-.55l-.26-.13-.11-.13-.25-.14-.23.08-.21,0-.13.09h-.23l-.57.14h-.31l-.23-.09-.26,0-.3,0,0,.1.13,0,.19.17.17.24.14.11.17-.06.17-.12.63-.19.28,0,.25.09.16.1.12.13.14.33.37,0,.28.11.44.48.12,0,0,.13-.09.3v.18l-.31.36-.48.1-.52,0-.38,0,0,0,.26.09.6.41.23.22,0,.12-.33.49-.29.94-.1.08-.1,0h-.25l-.33.23-.24,0-.45-.09h-.51l0,.15,0,.29v.43l0,.57,0,.41-.08.26-.11.19-.19.18-.2.12-.15,0h-.25l-.71.13H1956l-.27-.06-.28-.18L1955,59l-.14-.12-.12-.07v.11l.14.3.11.19.1.08,0,.09-.21.14-.22.06h-.27v.05l.09.15.12.14.08,0,.2,0,.24-.17.14-.06.3,0,.12.07.36.39h0l.28-.19h.39l.14.16.06.3v.24l0,.19.09.18.23.18.17,0,.12-.09.19-.25.08,0h.07l.12.18.15.33,0,.39-.13.45-.15.29-.6.47-.18.19-.15.19-.2.17-.41.23-.22,0-.46.24-.1,0-.15,0,0-.12,0-.22,0-.2.07-.18v-.16l-.13-.24-.1-.11-.08-.06-.18,0-.1.07h-.11l-.12,0-.1-.1-.19-.43-.07-.06-.1,0-.09-.07-.07-.13-.13-.14,0,.1.12.25.09.25,0,.24,0,.19-1.07.1-.46-.05-.09-.17-.22-.72-.05,1.26-.8.21-.18,0-.31-.14-.41-.33-.16-.23-.07-.22-.05-.12,0,0-.1.28-.11.55-.27-.15-.35-.13-.12-.55v.79l-.56-.1-.27,0-.08-.69v-.77l-.11.49.05.41v.5l-.23-.14-.53-.07-.18-.07,0-.66,0-.67.68-.68.19-.33.15-.13.23-.08.29,0,.21,0,.23,0,.27-.12.2,0,0,0,0-.07-.21-.45-.08-.1-.08,0-.15,0-.14-.2-.09-.18-.09-.24-.15-.46-.14-.51.07-.29.24-.22.24-.16.24-.09h.2l.24.13.35.24.19.27.25.57.16.45.13.21.59.36.19.06.24,0,.47-.1.23-.1.11-.11,0-.18.07-.13.21-.3.32-.64.18-.51,0-.17,0-.21,0-.25-.1.13-.55,1.26-.12.23-.32.38-.14.06-.22,0-.29-.16-.35.26-.21-.07-.18-.18v-.89l-.24-.71.26-.37.22-.23.38-.6h.08l.28.09-.15-.14-.15-.2-.33,0,.11-1.32-.22,1-.22.51-.14.26-.16.15-.58.12.14-.47.14-.71-.14.27-.33.4-.25.2-.2.11-.39,0-.2-.19.06-.49v-.61l.12-.28.18-.37.19-.49.14-.52.52-.24.51-.09.42-.28.21,0,.2.13.81.22.33.17.15.11.11.05.11-.18.15-.17h.5l.14,0,.13-.08.16-.16.18-.25,0-.12h-.13l-.12.06-.2.18-.18.1-.19,0-.38-.15-.67,0-.34-.07-.16-.07-.08-.1-.08-.16-.07-.21,0-.14.13-.09h.12l.19.11.21.19.23,0-.08-.18-.29-.36-.21-.3-.17-.38-.13-.37-.29-.6-.23-.59-.16-.27-.18-.13-.53-.17-.1-.11-.26-.53-.06-.91-.12-.56.11-.73.18-.34,1.06.26.44,0,.57.1.31.17.35.45.31.49.31.33.27.45.31.66.17.31.16.19.21.16.39.21.34.06.18,0,.19-.15.13-.18-.15,0-.39,0-.28-.09-.15-.21-.17-.28-.26-.54-.2-.35-.43-.58-.33-.58-.25-.56,0-.25.19-.17L1954,45l1.43-.38.86-.47.35-.54,0-.13,1.14-.78.82-.29.31,0,.28-.13v-.07l-.25-.11-.25,0h-.56l-.51-.1-.15-.17,0-.29,0-.26.15-.42.17-.32.69-.93.46-.39.14-.28-1,.62-.35.43-.36.65-.18.19-.13,0-.11.06-.11.17-.08.31-.07.45-.06.3-.06.16-.14.24-.35.45-.8.62-.27.16-.24,0-.75.35h-.22l-.25-.1.1-.3.4-.56.11-.25-.26,0-.26.16-.57.12-.23.23-.22.41-.17.26-.14.1-.18.06-.67,0-.15,0-.39-.31-.34.1-.14,0-.26-.22-.08-.14,0-.19.15-.37.17-.35.56-.79.37-.37.52-.32,1.23-.36,0-.27-1.24.3-1.06.38-.17.13-.24.37-.78,1.29-.23.32-.36.08-.27-.11-.21-.16-.36-.38-.27-.2-.13-.14-.08-.14-.06-.17,0-.19.09-.15.7-.35.94.07.43-.07.41-.21.62-.52.67-.74.13-.24-.25-.06-.18.06-.43.27-.69.71-.6.25-1.49.14-.47.19-.21,0-.16-.19-.17-.36,0-.29.36-.32.27-.08,0-.06-.39-.32,0-.16.23-.36.49-.54.25-.17.46-.11.47.06,0-.1-.47-.21-.34,0-.46.14-1.23.87-.1,0-.18-.15,0-.22.66-.92,0-.15-.47,0-.14,0-.13-.11-.2.1-.24.3-.18.13-.1,0-.26-.36,0-.31.21-.39.19-.28.26-.25.41-.33.3-.11h.49l.23-.15.21-.25.26-.41.29-.29.46-.24.39.08.22.2.17.36.18.28,0-.22L1950,35l.19-.11.23,0,.21.13.26.33.21.14h.1l.12-.18h.33v-.08l-.11-.19-.13-.14-1.17-1,0-.21.4-.2.25-.24.11-.06.29-.52.19-.27.35-.31.14.09.18.27.17.17.5.16.21.17.39.95.15.31.22.31.13.12.25.08,0-.18-.3-.44-.09-.26,0-.22.06-.12h.1l.24.2.63.66,1,.77.36.18.23.28.21.33.2.22,0,0-.19-.51-.46-.63-1.24-1.11-.49-.58-.23-.4-.18-.41v-.22l.17-.27.23-.21.28-.08,0-.09-.25-.31-.15-.28v-.19l.31-.15.19,0,.36.35.3.17,0-.11-.31-.93,0-.21,0-.13.11-.12.33.07.54.46,1,.23.26,0,0-.1-.38-.29-.41-.38-.17-.23-.13-.31-.16-.27v-.12l.25-.21.65,0,.6.32.52-.12.32.08.13.1.23.34.75,1.21.07.19.09.29.09.39.13.1.24-.26.16-.26-.07-.25-.41-.58-.09-.25-.2-.43-.46-.77-.13-.36-.07-.31,1.27-.29,1.23.26.2.18.13.26.12.38.2.39.4.59.56.36-.1-.24-.43-.66-.19-.45v-.3l0-.24.06-.16.48-.63.69-.19.08,0,.53,1,.25.39.18.15v-.06l-.25-.44-.19-.24,0-.15.32-.47.19-.12.83-.14.1.05.08.13.19.52.08.06Zm-20.66,12.66.13.5.44,1.17.2.42.34.51,0,.19v.35l.1.1.29.15.33.28h.06l.11-.17.14,0,.18,0,.09.12.06.18,0,.12v.09l-.06.19v.07l0,.09v.1l-.06.39v.14l.17.35.15.18.29.18h.19l.12.12v-.07l-.06-.23-.11-.31-.22-.17,0-.19v-.32l0-.21.1-.17.1-.06h.27l.16.07.26.24,0,.13V46l-.22.29,0,.19.06.06.19,0,.3.18.11,0,.12.4.09.38-.06.47-.09.74-.07.17-.07.25,0,.05.29-.11.06,0,.2-.25.28.06.1.06,0,.09.08.28.08.36,0,0,.13-.44,0-.11.07-.11,0,0,.13.41.3.73.11.29,0,.22-.13.25-.1.12-.74.53-.33.3-.17.23-.08.08-.18,0,0,0-.05.37-.06.15-.16.25-.21.46-.13.19-.22-.14-.06-.21,0-.48v-.3l0-.17.1-.42v0l0,0-.15.2-.06.11,0,.19,0,.32,0,.58,0,.23-.06.11,0,.09.17.12,0,.06v.36l0,.2-.1.08-.12-.09-.28-.49-.12,0,0,0,0,.18.08.39,0,.32,0,.27-.08.42,0,.22,0,0H1948l-.11-.11-.35-.73-.17-.31-.25-.62-.06-.13,0,0,0,.27.07.24.23.58.13.42.1.34V56l0,.06,0,0-.07-.11-.2-.21-.09-.11,0-.13-.1-.1-.15-.07h-.15l-.15,0,0,.07.17.17.06.1,0,.13,0,.15,0,.1-.21.06-.28,0-.46-.13-.45-.22-.42-.35-.3-.35-.12-.18,0-.14.11-.12.39-.16.4-.1-.06-.09-.72-.2-.24,0-.12.05-.15,0-.11-.16-.15-.31-.08-.2v-.08l.06,0,.32,0,.05,0L1944,53l-.53-.31-.19-.27,0-.1v-.21l.2-.21.6-.5.21-.08h.21l.15-.15.12-.47.63-.18.48-.21,0-.06-.36,0-.51-.05-.22-.33-.15,0h-.16l-.19.1-.33.31-.15.07-.36.32-.09,0,0,0,0-.06.07-.21.09-.15,0-.05-.14,0h-.16l-.11,0-.41.28-.18.2-.05,0-.2-.32-.32-.18-.07-.14.07-.55.09-.11.24-.1.72-.5,0-.1.07-.26-.16,0-.37.25-.29.13H1942l-.17,0-.11-.07-.13-.16-.43-.74-.12-.36v-.32l0-.25-.13-.6.92.37.36.07.69,0,0,0v-.37l0-.09.26-.22,0-.07-.3,0-.56.36h-.19l-.23-.52-.23.09-.12,0-.17-.13-.09-.12,0-.14,0-.12v-.1l0-.11.2-.15.1,0,.24.1h.18l-.06-.16-.26-.41-.23-.47v-.78l.19-.16.2,0,.19.2.26,0,.19.22.12.43h.14l.23.08h.52l-.09-.15-.16-.13-.37-.18-.18-.63-.37-.33-.29-.17v-.14l.22-.81.27-.29.42.11.28-.15.36-.29.36.13h.09l0-.09,0-.17v-.16l0-.14-.11-.18-.45,0-.2-.07-.08-.09,0-.15v-.4l0-.05.11-.07h.42l.25-.09.27.11.58.42.18.21.2.35.1.31ZM1939,47.14l0,.68,0,.34,0,.25,0,.06h-.06l-.25-.19-.08-.12v-.1l0-.19-.17-.25-.32,0-.13,0,0-.08,0-.1,0-.44v-.16l0-.27,0-.06.23-.25.07,0,.28.1h.25l.13.07.11.16.07.24Zm-4.27,3.41.22.1.25.32.24.67,0,.08V52l0,.17-.05.11.13.12v.31l.08-.1.06-.16,0-.1v-.27l.19-.14.2-.2.09,0,.16,0,.37.47.14,0,.06.05,0,.11v.12l-.08.27,0,.16,0,.11.2.09.44-.18.39.43.21.52.16.17,0,.09,0,.09,0,.23-.13.18,0,.08.07.21v.31l0,.1.17.1.4.73.07.21,0,.25v.08l0,.14-.07.39,0,.09-.16.07-.29.07-.28.13-.29-.17-.29-.26-.09-.17-.07-.2,0-.09,0-.33v-.07l-.12-.19-.11-.29-.21,0-.49-.3-.21-.07-.21,0-.29.12-.06,0-.05-.09,0-.14v-.11l0-.18-.87.23-.25.27-.35,0-.17-.12-.23-.26-.11-.22-.1-.31v-.23l.08-.16.08-.1.09,0,.47.19.42.09.18-.09.08-.25-.1-.14-.4,0,.09-.14.33-.14.18-.2,0-.07-.1-.09-.46,0-.16-.08v-.07l0-.09.26-.42v-.08l-.12-.14-.09-.18,0,0-.22.16-.32.62-.07.09h-.08l-.06-.1v-.13l.07-.16.14-.49V52l-.14-.12-.38.09h-.21l0-.14v-.5l0-.39.08-.29,0-.11.5.06.81-.18.24,0,.26.18Zm6.66,3.77.22.12.37,0,.14.08.35.31.11.19,0,.13v.07l-.12.15-.23.23-.06.17.21.21.1.19,0,.13v.14l-.14.37-.1.11h-.16l-.07,0-.21.17-.31.16-.43.07-.12.1-.21.17-.14,0-.05-.09,0-.14v-.1l0-.12-.07-.11-.31-.21-.17-.31,0-.09v-.09l.4,0,.17-.06.08-.1v-.06l-.08,0-.27-.2-.46-.13,0-.14-.19-.29,0-.27,0-.08-.13-.12,0,0,0-.18v-.19l.24-.19,0-.13-.18-.49,0-.28v-.11l.11-.14h.16l.41,0,.19.06.2.12.22.17.32.16.1.1.19.33,0,.1,0,.11,0,.09Zm-12.55-.56.16.28h0l.07,0,0,.07.1.35v.38l0,.19,0,.14-.09.1-.2,0-.29-.08-.25.11h-.12l-.31-.07-.08,0-.17-.21-.13-.08-.06,0-.06.18-.13.23-.07.06-.23,0-.34-.38-.39.11-.41.22-.16,0,0-.06-.07-.17v-.08l.12-.26.27-.26.2-.16.4-.22.46-.12.18-.14.11-.19.3-.3.18-.13.24-.1h.19l.25.25.18.12.12.13Zm6.28,2.31-.11.09-.12,0,0-.06v-.14l.14-.28.13-.1.07,0,.06.1,0,.14-.2.32Zm-6.88.2.74.1,0,0v.08l-.06.26-.08.19-.4.23-.5.21-.11.1v.06l0,.07.08.1.4,0,.09,0,0,.06,0,.09v.51l0,.22-.06.21-.15.14-.29.19-.2.08-.15,0-.15,0-.67.36h-.21l-.18-.08-.25-.34-.26-.13-.11-.16-.11-.08,0-.12v-.09l0-.09,0-.07,0-.07,0-.19,0-.18-.08-.26v-.36l.05-.19,0,0,.15,0,.2-.09.46-.29,1-.37.3,0,.14-.07Zm-3.11,1.53-.25.15h-.17l-.29-.21-.35-.64,0-.23.13,0,.09-.07.06-.1.11-.11.25-.17,0,.07v.13l0,.13.09,0,.09.1.17.27.12,0,0,.06,0,.1.07.16v.08l-.1.16-.1.09Zm11.2.26-.13,0-.23,0-.27-.16-.08-.18v-.45l0,0,.17,0,.32,0,.26,0,.29.17.12.11.06.07.08.15,0,.07,0,.12-.37,0-.17,0Zm5.73-.42.23.17.25-.09h.27l.6.07.4-.05.1,0,.16.11.08.13.08.21-.2.13-.16.67,0,0h-.19l-.08.05L1943,59l-1.46,0-.06-.09-.19-.38,0-.16,0-.18,0-.12.05-.06.42-.3.19,0Zm-8.37,2.77-.14.07-.29-.17-.18-.07-.15-.3-.16-.42-.13-.46,0-.27-.09-.16,0-.27-.16-.43,0-.06.16-.06.26.07.12.16.15.25.2.4.06.18v.24l0,.13.17,0,.21.32,0,.12,0,.25v.12l0,.24-.06.09Zm13.58-.53-.24.24h-.13l-.7-.49-.14-.24,0-.17v-.55l0-.22,0-.08.08-.08.17,0,.15,0,.23.09.23.15.31.44.11.21,0,.27v.16l0,.12,0,.08Zm-23.72-.4.07.16v.07l0,.07-.11.11-.54.36-.11.17,0,.15.2.3.2.24,0,.13-.1.12-.18,0h-.07l-.06.06,0,.11.2.36.06.2v.1l0,.1-.09.13-.13.17-.23.14-.49.18v.5l0,.12-.06.2,0,.09-.07.07-.11,0h-.13l-.22-.17-.1-.11-.14-.24,0-.16V63l0-.3.06-.32.09-.32,0-.2,0-.08h-.06l-.18.13-.12.05-.09.1-.06.14,0,.16,0,.29,0,.16-.1.09h-.14l-.06.05,0,.11,0,.08.15.19v.32l-.16.22,0,.08-.1.35,0,.09-.08.08h-.08l-.07-.13-.11-.24-.08-.21,0-.17,0-.08,0,0-.06.18v.48l-.09.15v.07l.16.18,0,.08V65h-.06l-.06.15-.06.11-.16.22-.23,0-.19.1h0l0-.17,0-.33,0-.19-.07-.1-.09-.38,0-.13,0,0h0l0,.07-.11.55-.17.14-.1,0-.1,0-.25-.15-.2,0-.13.06-.23.22-.09.06-.12,0L1917,65l0-.13v-.09l0,0,.06-.16v-.06l0-.09V64.4l0,0v0l0,0,0,0-.2.11,0-.12.1-.24.23-.49.09-.15,0,0,.7-.16,0,0,.33-.67.1-.16.09-.12.48-.41,0-.09.08-.29,0-.07.1-.11.34-.58.31-.43L1920,60l.21-.27.25-.12.75-.21.55.27.12,0,.07-.08,0-.12.09,0,.2,0,0,0,.08-.14,0-.08-.25-.14v-.14l.09-.17.1-.1.3-.08.14,0,.14.11.19.24.42.41Zm19.6,1.87.17,0,.15-.05h.13l.19.16.17.25.13.12,0,.05,0,.07,0,.18v.16l-.06.17,0,.21-.1.18-.05.14,0,.18.11-.11.39-.58.26.07.38-.05.47-.24.23,0,.22,0,.17.08.35.32.13.15,0,.11V63l-.07.12-.22-.07-.37-.07-.07,0h-.06l0,0,0,.16.07,0,.45,0,1.44.53.06.17V64l0,.08-.11.11-.83.12-.48-.1-.4-.17-.13,0,.11.23.24.07.2.14.09.11.42.09.07.09.13.22.11,0,.11.16.09.27.05,0,.12,0,.22.24.07.12v.09l0,.15-.1.19-.24.23,0,.07.28,0,.06,0,.33.4h0l0,0,0-.15,0-.13,0-.18v-.14l.06-.08.07,0h.06l.07,0,.34.49.44-.24.08.11.06.2,0,0,.16-.39.1-.1.41.47.25.1.1.1.18.11.27,0,0-.17-.15-.22.09-.1.36-.19.19,0,.36-.27.22,0h.13l.44-.41.1-.07.08-.14.17,0,.47.23.13,0,.5-.23.19-.06h.18l.47.14.35.14.1.08,0,.19v.06l0,0,.11,0h.44l.19,0,.15.17,0,.08v.07l-.15.19,0,0,.14,0,.34,0,.07,0,.07.24.07.32v.13l-.12.22-.31.29-.35.24,0,.06.12.12.11,0h.09l.28-.11h.07l.12.11.06.11.06.15-.1.13-.4.16-.24-.21-.08,0,0,0,0,.09.11.17,0,.12,0,.05,0,.11v.32l0,.26h0l-.87.05-.11,0-.25.18-.18.09h-.12l-.12,0-.32-.18-.21,0-.09,0-.18-.12,0-.06-.07-.16-.06-.22v-.14l0-.2,0-.1h0l-.05,0-.18-.2-.1,0,0,0,0,.15,0,0,.11.12,0,.13,0,.33,0,0-.11.24-.08.07h-.23l-.35.17-.17,0-.22,0-.14-.08-.09-.09-.09-.12h0l0,.27,0,0h-.07l-.12-.08-.09-.2h0l0,.12,0,.07,0,0-.24.12h-.14l-.14-.14h-.09l-.12.08-.29-.14h-.07l.06.24-.1,0h-.2l-.35-.08-.21.11-.38-.07h-.38l-.07-.06,0-.11v-.09l0-.14.06-.2.09-.27,0-.14-.08-.07,0-.09h0l-.13.1-.09.31-.07.09,0-.08,0-.18,0-.09h0l0,0,0,.1,0,0-.07,0,0,0,0,.12v.21l-.07.1-.17.14-.1,0-.26,0-.16,0-.32-.18h-.18l-.21-.29-.17-.07v-.11l.07-.19v-.06l-.23.29,0,.09,0,.21h0l-.16-.07-.16.06,0,0-.1-.15-.19-.16-.09-.17-.13-.55-.06-.37v-.07l.09-.11v-.08L1945,68l-.13-.17,0-.12,0-.13v-.31l0-.08.07-.27.21-.48,0-.09,0-.09,0-.26,0-.26,0-.19-.11-.26-.16-.27-.21-.49-.17-.38-.19-.54-.09,0-.11,0-.23.19-.08.09,0,.06h-.17l-.49,0-.19-.05h-.13l-.24.14-.26,0-.16-.38-.36-.21-.11-.12-.08-.16,0-.1.21-.1.08-.1,0-.08-.2.07h-.09l-.62-.54-.19-.09,0-.05,0-.06v-.08l0-.12.18.15h.09l.12,0,.05-.1,0-.05-.21-.18-.1-.14,0-.1,0-.14v-.09l.07-.06h.12l.16-.07.29-.19.2-.06h.19l.48.19.47.24.29.19Zm-17.77.68-.14.13-1-.19-.06-.06,0-.09.17-.22.21-.1.49-.08.17.09.11.1.06.09,0,.17-.07.16Zm22,.94,0,.06-.14,0,0,0-.08,0-.1-.11-.12-.22-.13-.34-.11-.28V62l0-.14.11-.09.25-.11h.17l.16.22,0,.07,0,.09v.16l-.07.17,0,.11v.28l0,.11,0,.05v0Zm-17.13,1.75h.12l.13,0,.16,0,.07.09,0,.15v.15l0,.06-.2.38,0,.13.07,0,0,0,.2-.28.15-.09.11,0,.18,0,.08.05,0,.06,0,.07.07.27,0,.35v-.39l.19-.1v0l-.06-.09-.06-.12,0-.21,0-.08,0-.09.12-.19.14-.11.12,0,.45.2.18.16.07.08,0,.06,0,.18.07.51v.16l0,.26-.15.49,0,.32-.15.81-.1.21-.11.15-.46.27-.34.27-.09,0h-.09l-.28-.09-.33-.17-.19,0-.19.12-.12,0-.11,0-.11,0-.14-.12.07-.05,0-.06,0-.06-.15-.09-.16.2-.46.45-.63.15-.19.09-.14.12-.08.1-.11.22-.18.17-.32.19-.41.29-.73.29-.46,0-.45-.09-.15-.08-.15-.13-.31-.29-.09-.11-.1-.23.06-.15.17-.18.24-.16.5-.22.45-.36.16-.07.43,0,.22,0,.16,0,.11,0,.15-.13.23-.25.16-.25,0-.11-.05-.11h-.08l-.27.25-.14.08H1927l-.2.08-.2,0h0l-.21-.24-.11,0,0,0,0,.06-.09.18,0,.06-.09,0-.35.05-.35.09-.07-.06-.05-.1V68l0-.08,0-.18,0-.13.05-.1.24-.27,0-.07h-.11l-.27.14,0,0-.06-.15,0,0,0,.07,0,.09,0,.37,0,.18-.11,0-.13-.12h0l0,0v.07l.14.31v.11l-.09.19-.38.31-.14.09-.06,0,0-.09-.05-.14-.09-.19-.06,0h-.07l-.06,0,0,.08,0,.09,0,.17-.07.13,0,0-.38-.26-.31-.47-.33.07-.15,0-.46-.17-.06-.1,0-.14v-.08l0-.08.06-.15.11-.24,0-.07.07-.07.1,0,.24,0h.63l.12,0,.69-.46.07-.08.1-.15,0-.06v0l-.84.37-.36.08-.55-.06-.11-.06,0-.1.11-.28.07-.1.15-.1.38-.13.51-.13h.34l.28-.1.16-.11h-.56l-.68,0-.1,0-.19-.15V65.1l.08-.13,0-.09-.06-.22,0-.09.12-.18.23-.2.14,0,.27.06.76.07.15,0-.09-.09-.14-.06-.59-.11-.12,0,0-.07v-.23l0-.14.18-.28L1924,63l.21,0h.21l.22.11.1.09,0,.11,0,.11v.25l0,.12.13.28.09.09.43-.17.17,0,.18,0,.26.17.33.49.44.51v.11l-.16.17,0,.07,0,0,.17,0,.15,0,.15,0,0,0,.06.18.07.32.09.24.1.15.11.08h.15l.15,0,.24,0,1.27.18.07,0,.06-.1,0-.17v-.14l0-.18,0-.1-.78-.61-.07-.25.38-.35,0-.08v-.12l0-.14-.05-.13-.21-.27-.18,0-.27-.26,0-.06,0-.1,0-.15V63.4l0-.07.26-.27.11-.15.33-.67.16-.28.11-.13.11-.08.25,0,.25.25.06,0,0,.06v.12l0,.11-.09.21,0,.08v.09l.07.2,0,.13v.25l.15.19.14.24.07.37,0,.13-.12.18-.07.15,0,.11,0,.08.08,0Zm6.52-2h-.24l-.11,0v-.07l.1-.1.32-.15.18-.27.07,0,.25,0h.14l.18.07-.44.34-.44.28Zm3.25.44v.31l0,.1v.11l0,.12.12.31,0,.16v.28l-.08.22,0,.28v.15l0,.23v.11l-.08.18-.18.16,0,.08.39.2,0,0v.45l.07.49h0l-.09-.15-.17-.19-.21.34,0,.57.14.25,0,.14v.09l-.12,0,0,0-.12-.11-.07-.18h0l0,.08v.09l.08.15,0,.18,0,0-.12.05h-.16l-.25.08h-.12l-.12,0h-.17l-.13,0-.08,0-.08-.08-.08,0-.19.21-.3-.07h-.27l-.05-.07-.06-.14-.12-.44,0-.11.28-.06v0l-.21-.16-.23-.11-.1-.09,0-.18v0l.4-.2.29-.4.18-.16,0-.08.15-.08.35,0v-.11l-.66.06-.91.23-.28.11-.24-.07-1,.35h0l-.1-.11-.09-.2.06-.15.3-.28.14-.24v-.13l.11-.24.19,0,.32.19.16.2.15.08h.13l.13-.14h0l-.23.07,0,0-.11-.21-.06-.14,0-.14v-.09l.07-.19-.26-.06-.1-.13-.05-.16v-.07l.09-.18.22-.26,0-.08h-.32l-.07,0-.14-.17,0-.18.13-.26.1-.16.06-.05h.1l.24.11.07.05.19.26,0,.14v.14l0,.11.14.15.62.76.11.18.08.08.14.06h.09l.07-.06v-.07l-.27-.26-.07-.14,0-.2,0-.06.08,0,.19,0,.23-.05-.25-.08-.17-.11h-.17l-.21-.17V64l0-.05.29-.08.06,0v0l-.1-.12-.08-.07-.44-.14-.16-.16,0-.08V63.1l0-.19.24-.24.17-.12.3-.08h.23l.14,0,.31.41.15.26.25,0-.07-.28,0-.31.08-.12.21-.2.17.11.22.27,0,.09.24.17.15.06.08.09,0,.11Zm-5.83-.46,0,0,.14-.08h.09l.1.15,0,.1.37.24.13.11v.07l0,.1-.11.14-.1.09-.15.07h-.74l-.08,0,0-.12-.1-.45-.06-.24,0-.17v-.09l.08-.1.27-.14h.12l.08,0,0,.07v.1l0,.12Zm1.66,2.21.19.24v0l0,0-.25.12-.09.1-.09.23-.06.1-.33.06h-.35l.07-.22.19-.36-.15-.15-.53.25-.2-.15.18-.4-.17,0h-.24l-.15-.23,0-.29.31-.16.41-.13.43-.21.34,0,.14.1,0,.33,0,.39.06,0,.19.27Zm21.36.34v.23l-.07,0-.21.15-.17,0-.09-.06-.06-.16.14-.28.16-.2.18-.31.16-.21.08,0,.07.11-.09.31-.1.16v.22ZM1921,66.52l-.27.24-.18,0-.25-.17-.21-.06-.07-.06v-.06l.07-.17.09-.13.2-.27.35-.51.23-.2.22-.14.23-.31.13-.14h.11l.11.06v.09l-.12.42-.08.17-.16.44-.31.72-.09.12Zm22-.63h-.09l-.12-.08,0-.08,0-.11v-.14l0-.12,0-.08V65.2l0,0,0,0h.09l.19-.15,0,0,0,.08,0,.21,0,.12.08.22,0,.14v.05l0,0Zm-24.49,0-.07,0-.08,0,0-.1.18-.26v-.14l0-.07,0-.09.07,0,0,0v.31l0,.11,0,.1,0,.09-.07.07Zm23.06.88-.07.12h-.08l-.1-.12-.11,0-.14.24-.06.13,0,0-.12,0,0,0,0-.12-.05-.2,0-.15.12-.11.31-.17.08-.08v-.09l0-.06,0,0,.21.15.09.11.08.11v0l-.1.12Zm2.34,1.74.06.27v.34l0,.3v0l0,0v.2l0,.08,0,0-.33.06h-.21l-.3,0-.15,0-.1-.06-.14-.14-.3-.33h-.15l-.39-.12-.21-.36-.08-.06-.08.11,0,0,0-.07,0-.12,0-.06-.16,0,0,0v-.2l0-.15.17-.4.08,0,.1-.08.06-.22v-.21l.16-.31.09-.09.17-.22.58-.35.15,0,.22,0,.2.11.16.18.32.45.14.27.08.27.07.16.09.33,0,.14,0,.17v.08Zm-9.76,0-.17,0-.3-.1-.18-.21-.06-.1v0l0,0,0-.13.1-.4,0-.11.16-.23.12-.06.25,0,.15.12.06.08,0,.09,0,.2v.14l.08.15,0,.09V68l0,.09,0,.08-.1.13-.28.15Zm8.13,1.87,0,0-.08,0-.31-.16-.06-.06v0l.07-.06,0-.06.08-.07h.14l.15.18.07.16v.07l0,0Zm-1.89-.07-.28.2-.06-.08,0-.07.21-.32.09-.08.09.1,0,.07v.06Zm-20.64,1.41h0l.24-.31.15,0,.1,0,0,0,0,.06V72l0,0,0,0,0-.07.26-.5.11-.14.08,0,.31-.07h.22l.24,0,.18.07.29.21.23.24.21.24.7.93.3.27.11.16.06.11,0,.14v.25l0,.08-.07.07-.43.3-.23.1-.22.13-.54.46-.37.22-.48.43-.9.68-.11.14,0,.09-.25.76-.1.18-.23.18-.3,0-.08,0,0,.26-.1.43,0,.28-.07.76,0,.07-.06.14-.09.15-.28.18-.22.09-.28.07-.07-.05-.07-.12h-.07l0,0-.37.52-.37.2-.15.19-.11.09-.09,0h-.15l-.11-.09-.09-.13-.07-.14-.19-.59-.08-.2-.07-.1-.18-.36,0-.08-.7-.46-.33-.26-.09-.1-.07,0-.43,0-.06,0,0,0,0-.14,0-.08V78l.16-.14,0,0,0,0v-.14l0,0,.06-.13.07-.22,0-.13.07-.08.13-.22.09-.09.07-.11v-.06l0,0,0-.09,0-.27v-.25l0-.1,0-.06.32-.2v-.19l0-.06-.05,0H1915l-.08-.11,0-.06,0-.16.15-.25.05-.12.15-.56.29-.36.08-.38.21-.41v0l-.07-.14-.2-.1-.09-.15-.07-.17-.29-1,0-.08,0-.11-.06-.08V70.9l1.14-.3.78-.1.8-.26.23,0,.17,0,.17.14.23.24.3.23.57.34.35.07-.14.27,0,.08v.06Zm24.5-.17.36.16.18.11.08.07.17.23.08.07.33-.14.22,0,.5.06.42.2.16.14.1.13,0,.15-.08.23-.09.22-.18.35-.16.17,0,.08,0,.12-.06.17-.17.35,0,.07-.24.15.08.07,0,.06,0,.16-.15.38-.16.35-.1.2-.2.3-.11.09-.14,0-.88-.26h-.22l-.58.13,0,.07.22.1.14.11.18.34,0,.08v.29l0,.05-.29.51-.09.37-.06.3-.1.09-.32-.13h-.11l-.37.09-.17,0,0-.46,0-.5,0-.48L1942,76l0-.16,0-.17v-.36l0-.36v-.19l0-.49,0-.74v-.46l.06-.1.11-.08h.06l.36.23.16.07h.11v0l-.1,0-.09-.09-.15-.3-.07-.25,0-.08v-.18l0-.09.08-.12.06-.06.22-.15.23-.09.5-.07.14.05.22-.17.13,0,.22.06Zm-4.7,1-.27.07-.12,0-.07.09,0,0-.14,0-.3-.17-.08,0,0-.06v0l0-.05.23-.07.09-.06,0-.08.06-.06.08,0,.22,0,.48-.24.24,0,.09,0,0,.06v.13l-.08.16-.1.12-.26.27Zm-1.6-.25.78.71.11-.06.23,0,.25-.1.34-.09.2-.16.09,0,.15,0h.08l.24.09.09,0,0,.07,0,.11.1.28v.13l-.09.17-.06.07-.11.07-.11,0-.08.13-.1,0,0,.11v.07l0,0h.05l0,0,.11,0,.06.08.05.12,0,.11-.2.15-.29.18-.35.54-.18.22,0,.07,0,.07v.19l0,0,.17-.19.11-.08.11-.05h.2l.08,0,.15.11.13.17,0,.06v.06l-.06.06v0l.13.08.14.23v.15l-.06.13,0,.1,0,0,.07,0,.17-.16.18-.08h.07l0,0,0,.22,0,.23v.2l0,.17,0,.12-.11.16-.1.06h0v0l.11.13,0,.11,0,.09v.1l0,.08-.14.3v0l0,0,.08.17v.4l-.3.13-.08.09-.08.14-.1.11-.22.12h-.11l-.55-.09-.06-.06,0-.1,0-.14v-.25h0l-.06.08-.07.15,0,.17.17.46,0,.2V80l-.2.27-.11.09-.12,0-.11,0-.1-.11-.09-.05h-.16l0,0,0-.11-.12-.39-.16-.27-.15-.31-.35-.46-.19-.27-.25-.45-.1-.1-.09,0-.17,0,0-.06-.06-.15-.1-.12h0l-.07,0-.16.1-.21-.11,0-.08,0-.13,0-.08-.07-.06-.06-.17-.4-.34-.23-.38-.05-.14V76l0-.18.06-.22.07-.21,0-.09.16-.18.12,0,.17,0,.09,0,.08.12,0,.15,0,.09.13.11.07.08.1.19.08.24.07.07.17,0,.17,0,.38-.15,0,0,0-.08,0-.54h0l.13.25,0,0,0-.06,0-.11v-.06l-.08-.29,0-.13,0-.08,0,0-.1,0-.08-.06,0-.08,0-.11,0-.11,0-.07.09,0,.1,0,.15.14.09,0,.13,0-.16-.08-.24-.32-.1-.06-.12.14-.08.05-.16.07H1937l-.52-.5,0,0,0-.13v-.06l0-.1.13-.12.19-.08h.13l.11.09.17.25.14.15v-.06l0-.14-.07-.21,0-.06-.11-.07-.11-.14,0-.11,0-.12v-.13l0-.08,0,0,.39-.12.28.14.18,0,.07-.18,0,0-.1,0h-.1l-.07-.09v-.06l.08-.13.13,0Zm12.37,9,0,.06.21-.07.18-.1.27-.21.17-.08h.51l.08,0,0,.13,0,0,0,.06.06.07.11.09,0-.08,0-.18.07-.76,0-.23v-.43l0-.13-.13-.08h-.17l-.1,0-.11,0-.08-.07,0-.08-.11-.27-.07-.15-.2-.26-.09-.09,0-.11.18-.12.11-.12.13-.34.08,0,.28,0,.38.27.23.23.07,0v0l-.06-.1-.27-.29-.13-.21-.06-.15,0-.06.15-.07,0-.08-.21-.09h-.1l-.09.07h-.09l-.17-.11,0-.07-.09-.21,0-.18-.06-.11,0-.08V76l0-.14.05-.12.11-.21.06-.07.11,0,.25.1.68.39,0-.13-.75-.52-.27-.13-.06-.19.4-.74.37-.17.18-.22h.31l.28.14v0l-.12-.26v-.06l.16-.15.29-.19.36-.14.07-.08.09,0,.17,0,.43,0,.23,0,.32.11.18.2.06.12.09.39.08.53.12.22.19.12.13.14.07.14,0,.18,0,.21,0,.22.09.22.06.13.14.14v.08l0,.08-.09.12-.24.38-.29.4-.22.35v.1l.45-.54.13,0v.07l-.09.27-.11.24-.11.15,0,0,.21.27,0,0-.1,0,0,0,0,0,0,.07v.33l0,.07,0,0h.07l0-.05.09-.18.29-.48.19-.18h.06l.17.11h0l-.19-.38v-.09l0-.14,0,0,.11-.1.08-.06,0,0,.08.19,0,.14.06,0,.15-.07.09-.16.12.11.18.25,0,.25v.44l.22.34.14.14h0v0l0-.11-.08-.11-.08-.17-.06-.21,0-.5.11-.26.1.07.15.15h.28l.36.3h.2l0-.12-.15-.06-.21-.17-.33-.2-.16-.23,0-.1v-.12l0-.1,0-.09.07-.09.32-.27.23-.12.17,0h.29l.33,0,.18.08.21.19.26.18.1,0h.11l.12,0,.12,0,.38.28.1.14.06.17,0,.17,0,.16v.13l-.31.56-.14.09-.09.22-.14.39-.11.21v0h0l.07-.1.12-.27.09-.24.15-.2.26-.23.23-.11h.19l.16,0,.13.06.08,0,0,0,.05.17v.12l0,.13-.06.16-.28.16-.16.13-.09,0-.29,0v0l.22.07.23,0v.08l-.11.22,0,.2,0,.15v.13l-.09.27-.09.24,0,0,.22-.34.06-.38.09-.34.1-.18.08-.07.24,0,.14-.2.11-.06h0l.1.07v.08l-.15.35-.3.57.12-.07.09-.13.11-.14.13-.2.08.19.13.13.08.31.12.14.08.12v-.2l-.11-.38,0-.16.08-.08.26-.33.19.11.11.1.06,0,.14,0,.23,0,.22.09.22.13.16.15.12.18.07.12,0,.07,0,.17,0,.11-.17.27-.09.11-.09.06-.24,0-.08,0-.08.08-.25.36-.14.15-.14.1,0,0h.3l.08-.11.07-.2.13-.21.24-.09.35.2h.17l.13-.2.14-.14.06,0,0,0,.11.14,0,.13v.39l-.1.22-.24.33-.16.12-.17.07-.19.11-.07.09-.06.12-.07.09-.08.07.11.1h0l0-.06.11-.25.08-.1,0,0h0l0,0,0,.09v.21l-.14.81h0l.09-.22.25-.85.06-.17.12-.18L1965,82l.21-.14.23-.12.13,0,.14,0,.09.14.13,0,.15,0h.1l.11.06.09.1.16.11.37.21,0,.05,0,.08,0,.12v.11l0,.12-.06.06-.07,0-.08.06-.14.16,0,0-.22.07-.2,0-.13.07-.24.17-.34.32v.08l.13,0,.11,0,.15-.22.14-.09.22-.07.3-.06h.13l0,0,0,0v.09l0,.12-.06.06-.15.27.1.07.14,0,.08-.07.07-.17.08-.09.09,0,.08,0,.07-.07,0,0-.1-.09v-.05l0-.13.08-.15.07-.09h.06l.19.1.13.17.32.5,0,.1.12.37,0,.16,0,.12,0,.06,0,0H1968l-.44-.15-.19,0-.09,0-.07.06,0,.08,0,.1-.08,0h-.27l-.16,0-.26.13-.1.07,0,.09h.16l.27-.12.25,0,.42.27.14,0,.08,0h.09l.33,0,.12,0,.17.1.26.22,0,.07,0,.07v.24l0,.06-.09,0-.38,0-.11,0-.14.05-.11,0-.15-.07-.16-.13-.24.12-.19-.07-.2.06-.39.28,0,0,.53-.24.1,0,.17.08.27.18.07.07v.27l0,.18-.08.2-.12,0-.29-.12-.11,0-.09,0-.11.08h-.06l-.45-.16h-.11l0,0,.41.25.31,0,.19,0,.11.08,0,0v.17l.1.16.09.07h.06l.1-.06h.1l.08,0,.11.09.12,0,.11.05.08,0,.24,0,.1,0,0,0,0,.06-.22.12,0,.12.12.16.06.12v.09l-.07.2V89h0l.16-.17,0,0,0,.23h0l.05-.19,0-.25.09-.1.29-.07,0,.39v.2l-.13.34-.11.1v0l.08,0h0l0,0,.11-.26.22-.27h0v.09l0,.19.11.08.09-.08.06-.08h.12l.05,0,0,.08-.06.33v.08l.13.23,0,0,0-.1,0-.27,0-.11.11-.15.21-.21.08,0,0,0,.08.11,0,.06-.09.06-.06.12,0,.16,0,.09h.18l.18-.14.1.07.12.18.22.28L1971,90l.15.22-.21.17.07.35h-.27l-.16,0-.1,0h-.11l.1.08.2,0,0,.1h.15l.12,0h.21v-.12l.13-.07.08-.08.07.05.19,0,.25.24-.11.15,0,.13,0,.12,0,.1,0,.07-.37.41h.06l.16-.1.3-.14.16-.06.12,0h.06l.06,0,.09.06.21,0,.24-.33.14.06.13.21.29.36.15.21,0,.09v.09l-.13.1-.07,0-.18-.18-.17-.1h-.1l-.1.08,0,0,.4.29.07.21v.09l-.27.14h-.09l-.18-.07-.11-.12-.09,0h-.13l0,0,.14.21,0,.06-.07,0,0,.1.27.18.2.19,0,.07-.14,0-.09,0-.21,0-.11,0,0,0,.11.1,0,.06,0,.09,0,.09v.08l-.1.06-.11.18,0,.19-.1,0,0,0-.14.06-.19-.08-.06-.08-.2-.36v0l0,.18v.11l-.21.07v0l.13.06.16,0,0,.17v.69l0,.24-.08.22-.11.2-.12-.13,0-.14,0-.07-.06-.06-.07,0H1971l-.08.13-.1-.11-.08-.13,0-.33,0-.17h0l0,.08-.12.25-.08.3-.1-.12-.09-.14-.08-.15-.12-.16-.12-.2-.06-.23,0,0-.07-.19,0-.06,0,0-.06-.12,0-.13.1-.15.08-.11.14-.11.17-.07.07-.14.1-.26.1-.18.11-.1-.06,0-.14.09-.1.12-.11.22-.11.13-.28.16-.1,0-.12,0-.26,0-.06-.06,0-.15.19-.27h0l-.07.09-.09.07-.07,0h-.12l-.13-.17-.06,0-.13-.06-.06-.06-.22-.41,0-.11,0-.11-.07-.09-.12-.08h0l0,.1v.08l-.1,0-.11,0-.1-.09v.12l.11.2v.26l0,0-.08,0,0,0-.18-.19-.16-.14-.12-.07,0,0,.08.23.09.23.14.18.23.23.11.12L1968,94l-.07.06,0,0h-.14l-.26-.1-.11-.11-.18-.27-.29-.27h-.06l-.2.11,0,0h.13l.1,0,.23.21v.09l0,.1v.13l.06.15.07.1.14.07h.06l0,0-.08.34v.09l0,0h0l.18-.14.07,0h.06l.08,0,.08.08,0,.09V95l0,.06.17.09v0l-.18.14v0h0l.12.09.1.13.06.15v.15l0,0h0l0,0h0l0,0,0,.12.07.35,0,.09h0V96.2l0-.06.1.06.16.14.12.12v.05l-.09.11,0,0,.06.07.06,0,0-.13.07-.12.09-.08.16.07.13.18,0,.06.08.08.08,0,.14.21-.07.09-.15.13v0h.32l.08,0,0,.11-.13.28-.12,0h-.23v0l.21.13.06.11.09.11,0,.09v0l0,.06,0,0,.14,0,.1,0,.11,0h.1v0l0,.1-.1.1,0,0,.12,0,0,0,.08.22.08.17-.07,0-.07,0v.22l0,.23v.22l0,.19-.07,0h-.07l0,0-.17-.58,0-.1-.06-.09-.18-.26v0l0,.12,0,.17.06.35,0,.22v.08l0,0v0l0,.06.14.22.07.13,0,.14,0,.1,0,0v0l-.07,0-.11,0,0,0-.19-.13,0,0,.11.47v.11l-.06,0-.06,0-.08-.13-.12-.15-.16-.16-.16-.13h0l0,0h0l0,0-.06-.1,0-.07-.23-.21h0l0,.06,0,.14,0,0h-.06l-.11-.06-.08-.14-.09-.25-.05-.09v.06l0,.23v.08l0,0,0,0,0-.06,0-.11-.06-.07-.08-.06,0-.06,0-.1,0,0-.15,0-.07-.07-.22-.29-.2-.32-.12-.16,0,0,.07.2.07.3,0,.14h0l-.08-.06-.37-.39-.23-.19-.13,0-.21,0,0,.1.12.22.11.17.1.12.17.22.15.28.06.08.21.12.11,0h.11v0l-.05.08v0l.25.13.09.07.09.11,0,0,.22.29,0,0,.19.1.06.06.11.18.07.09.09.22.07.1.17.11.08,0,0,0,0,.1,0,0-.09.07v.09l.06.17v.11l-.06,0-.13,0h-.06l-.09,0-.12-.07-.23-.17-.35-.12-.13-.06,0-.06-.07,0-.86-.17-.15,0-.09,0-.08-.07-.33-.17,0,0-.23-.29-.16-.35,0,0-.18,0-.15,0-.1,0h-.16l-.1-.06-.21-.15-.21-.09-.18-.13-.1,0v0l.14-.2h-.05l-.24.16-.08-.05-.14-.12L1964,100l-.22-.34-.13-.13,0,0h.26l.07,0,.15-.15.06-.08v-.06h-.13l0,0,0-.06L1964,99l-.09-.09-.1,0-.36,0-.06,0v-.06l.07-.17,0-.07v0h-.06l-.21.15h0l-.08-.16-.05-.19,0-.06,0,0-.17-.18-.24-.35-.09-.11-.09-.09-.08,0,0-.05.15-.29v0l-.13,0-.19-.06-.1.07H1962l-.07,0h0l0,.24,0,.06,0,0h0l0,0v-.06l0-.29-.07,0h-.19l0,0-.05-.06,0-.1,0-.15,0-.08h-.08l0,0-.06,0H1961v.06l.09.1.09.15.08.2,0,.13-.18.06-.16,0-.14,0-.1,0-.15-.11-.21,0,0,.28,0,0h-.2l-.08,0-.27.16-.08,0-.06,0-.06,0-.09.09h-.12l-.16-.07-.13,0h-.11l-.11,0-.11-.1-.09,0h-.13l0,0-.18-.2-.06-.08L1958,97l0-.1v-.19l0-.12,0-.29,0-.09.06-.09.11-.11.39-.19.08-.08v0l-.09-.24v-.06l0,0,.07-.14,0,0,.07,0,.15.07.12,0h.17l.27.1.39.18.22.13.16.19.12.19,0,.09-.06.15,0,0v0l0,.05.09.08,0,0v-.09l0-.09,0-.06v-.09l0-.11,0-.09-.06-.08-.24-.26,0-.09.09,0,.36.09.14,0,0-.11.06-.07.06,0h.12l.17,0h.08l.08,0,.09,0,.14-.19.09,0,.14,0h.1l.19.07h.12v-.13l-.08-.24-.09-.26-.08-.08-.19-.16-.22-.31-.12-.19,0-.1,0-.06,0-.1.4-.34.33-.34.14-.18.06-.12.08-.09.07-.06.15-.07,0-.08V92l0-.13.15-.35.11-.09.17-.07.11-.08.13-.29v-.07l-.06-.05-.05-.09-.21-.76-.13-.37-.17-.33-.14-.4-.25-.39v-.11l0-.12,0,0-.25.17h-.06l-.1-.08-.06-.09-.06-.17V88l0-.08,0-.2v-.21l0-.07,0,0-.08,0h-.13l0,0,.14.31,0,.07-.18,0h-.08l-.07,0-.07-.06-.21-.32,0-.12v-.14l0,0h-.05l-.08,0,0,0,.15-.18V86.9l-.07-.05-.1,0,0,0,0,0,.13-.1.05-.06-.08,0h0l-.09.11-.14.22-.1.07-.13-.1-.09,0-.06,0-.1.17-.2.12-.36.29-.15.09-.17,0,0-.06v-.17l0-.07v-.08l0-.32,0-.09.06-.06.11,0,.26.06h.13l.09-.07.09-.11.08-.15,0-.14-.09-.22,0,0-.24-.18-.13-.06-.11,0-.09,0,0-.08,0-.12v-.2l0-.08.21-.08v0l-.17-.06h-.09l-.07.07-.09.17,0,0-.16-.1-.09,0-.07,0,0,0,0,0,.08-.05.14-.15v-.08l-.1-.13,0,0-.2,0-.24,0-.09,0,0-.14,0-.18v-.2l0-.35-.05-.19-.06,0-.29.08h-.07l0,0-.19-.23-.08-.09,0,0-.14-.25,0,0-.07-.12-.07-.2-.08-.07-.09.08-.08.11-.09.15-.05.12V83l.05.08.3.13.08.09.07.14.05.17,0,.2v.16l0,.1-.07.08-.19.15-.19.08-.2,0-.09,0-.5-.27h-.09l-.12,0-.26-.12h-.14l-.25-.09-.43-.06-.09,0,.12.12.1.07h.08l.12.11.16.22.1.14.07.15v.06l-.07.11-.59-.57-.37.2-.16.07h-.15l-.18-.08-.4-.27-.15-.1h-.06l-.35.12h-.3l-.61-.12-.23-.08-.06-.08-.07,0h-.13l-.35-.09L1951,84l-.39-.19-.11-.11,0-.07-.11-.32,0-.17,0-.15,0-.11,0,0-.21.17-.08,0H1950l-.29-.07,0,0,0,.06.07.09v0l-.16,0-.24,0-.11,0,0,0-.11.14,0,0-.06,0-.26-.32-.2-.2-.24-.08-.11-.06-.06-.08-.34-.66,0-.14-.11-.52,0-.12,0-.07.09,0,.31.07h.31l.16,0,.19.13.25.09.18,0,.29,0,.32-.09,0-.07-.21-.12-.19-.15-.17-.2-.1-.09-.18,0-.49,0-.45-.14-.31-.18-.25-.21-.11-.11,0-.09,0-.27,0-.46,0-.31,0-.16v-.14l.09-.3.24-.32v-.06h-.05l-.1-.08,0-.13v-.49l0-.17.11-.31.15-.38.17-.35,0-.12,0-.32,0-.23,0-.16,0-.13.1-.23.13-.23.2-.19v-.24l0,0,.49-.63.23-.25.19-.16.22-.12.65-.25.34-.07.42,0,.77.14.1.09,0,0,0,.14,0,.09-.21.3-.27.24-.17.22-.3.48-.08.17-.36,1-.09.15,0,.13,0,.34v.12l0,.19.2.42.06.2v.18l0,.42V78l0,.29.07.38.17.38.26.38.2.25.19.18.23.28.05.13-.1.14-.25.22-.32.09-.18.09-.21.19-.27.15-.11.09Zm6.5-8,.16,0,1-.08.2.06.63.36.16.12.08.16.08.25,0,.06.23.15.09.17,0,.1,0,.21.1.12.12.06,0,.07,0,.26,0,.12.11.15,0,.1-.08.11-.2.07-.57-.07-.76-.16-.44,0-.22.08-.53.27-.17,0h-.17l-.3-.22-.1-.12,0-.09-.07-.26-.06-.32,0-.27,0-.2-.1-.07-.3-.08-.1-.11-.05-.09,0-.15V74l0-.13,0,0h0l-.09-.17,0-.19V73l0-.07,0-.05.13,0h.2l.27.2h.21l.32.16ZM1933,75.57l0,0-.09-.07-.13-.16-.21-.33-.25-.33,0-.2-.06-.15-.32-.35-.21-.14-.15-.07,0-.1.11-.29.13-.23.07-.09L1932,73l.79-.16h.18l.18.07.26.32.11,0,.06.07.06.12,0,.12v.24l0,.36,0,.14-.16.46-.16.25,0,.16-.07.13-.12.16-.08.08Zm-8.51,1,.06,0,.1,0,.16-.11.2-.08.24-.07.07.08h0l.07-.13v-.4l0-.13.14-.27.08-.1.12,0,.3,0,.28.16.37.15.55.38.17.17v.14l-.09.29-.24.42-.19.15-.07.09.12.07.08.1.12-.15.09-.17.13-.15h0v0l0,.08v.14l0,0,.08,0,0,0,.16-.21.17-.31.25-.2.06-.1.22-.09v-.3l-.08-.11-.25-.21-.13-.26,0-.2.14,0,.38,0,.08,0,.37.34.13.21.1.11.22.15.07.12,0,0,0,.05,0,0v.13l0,0,.14,0,0,0,0,.16.06.26.06.29.09.54.18.71.06.44,0,.09,0,.05.11.08.09.11.11,0h0l0-.1.06-.15.32-.31v0l0-.07v-.08l.06,0-.22-.39-.14-.37-.09-.46v-.43l0-.08,0-.07,0-.09v-.2l0-.2-.23-1.42v-.14l0-.11.08-.06h.13l0,0,0,0-.08-.15v-.07l.06-.15.28.07.21.13.35.3h0l0-.16.08-.09.11,0,.32.22.37.4.25.19.17.26.12.25.08.19v.07l0,.07,0,.1.05.12,0,.11,0,.23,0,.3v.15l.33,1.31.06.23,0,.1.23.5.13.36v.56l0,.13,0,.11,0,.15-.07.33V81l0,.11.32.39.19.46.1.08.24.29.27.16.09.07.09.1h0l0,0,0,0v0l-.07-.22v-.08l0,0,.27.37.15.15.21.15.35.35,0,0,.19,0,0,0,0,0v.25l.05.1.3,0h.08l0,0,.05.07.06.22.06.43v.15l0,.26,0,.09,0,0-.16,0-.11-.08-.06-.1,0-.23,0,0,0,0,0,.21,0,.09,0,.06h-.08l-.11-.09-.22-.23-.08-.06h0l-.1.08-.17.14-.06.11,0,.07v.26l0,0-.06.06h-.11l-.16,0-.13-.08-.23-.21,0,0-.07,0,0,.07,0,.08.11.12.14.18,0,0h0v.3l-.07.35v.08l0,0,.19-.34.1-.09.21-.15.09-.11.28,0,.09.06.07.1v0l-.07.12,0,.06V86l0,.06.09,0,0,0,.05.06,0,.09v.13l-.06.28-.12.09-.35.16-.11.09-.24.06-.08.08-.06,0h-.25l-.28.05-.32-.1-.23,0-.26-.16-.1,0-.11.1-.49-.12-.06-.09,0-.06.12-.19v-.07l-.22,0-.25-.1-.25,0-.19,0-.12,0-.12-.09-.07-.07v-.3l0-.11,0-.09-.11-.08h-.11l-.09.09-.09.16-.17.43-.08.07-.21.31-.08.08-.39.12-.46,0-.18.1-.16.18-.2.17-.49.21-.44.12-.47.05-.35.08-.11,0h-.15l-.17.12-.19,0-.73,0-.33.07-.18,0h-.15l-.1,0-.09-.1-.1-.16-.2-.43-.06-.18,0-.31v-.18l-.07-.39v0l-.35-.14-.23-.05h-.35l-.42,0-.42,0-.23,0-.22-.09-.38-.23,0,0,0-.08,0-.13-.09-.17-.26-.37-.1-.23,0-.06,0-.16,0-.28v-.17l0-.11,0,0,.53-.2,1-.22.86-.15h.39l.24.07.23,0,.42,0,.52.1h.11l.24-.08.07,0h.37l.07,0,.07-.06-.08-.12-.36-.26-1-.47-.24-.1-.33-.11H1925l-.25.06h-.09l-.24.1-.23,0-.43.06-.63,0H1923l-.13-.07-.09,0-.61.05-.55-.07-.62-.72-.11-.23,0-.09.08-.1.31-.28.11-.07.46-.15.46-.19.36-.17.18-.06h.17l.14-.06,0,0-.11-.07V80l.06,0,.23,0,.24.06.12,0,0-.06,0,0-.23-.11-1.1.3-.51,0-.36.13h-.19l-.24-.12,0,0V80l.07-.17.25-.1.13-.29h-.14l-.45.06-.19,0-.26-.11-.08-.13,0-.09v-.44l0-.18,0,0,.32-.54.21-.12.14-.17v-.07l0-.08-.13-.18-.06-.09,0-.08,0-.14.07-.19.23-.3.53-.62.27-.26.27-.14.36-.3,1-.51.84-.51.31.14.09.1,0,.09,0,.13,0,.16,0,.35v.35l0,.16,0,.15-.07.17-.09.21-.2.35,0,.1Zm16.36-1.07-.15,0-.14-.22v-.42l0-.09.14-.1.07.08,0,.09,0,0,.09.08,0,.09v.1l0,.16,0,.09,0,0-.07,0Zm20.36,53.58H1961l-.13,0-.17.09-.2.17-.36.35h0l-.1.1-.11.06-.26.09-.06.05-.08,0h-.09l-.09,0-.09,0-.19.14h0v0l0,0,.12-.07h-.05l-.06,0h0v-.05h0l-.08,0h0l0,0h0l0,0h0l-.06,0-.14,0,0,0h0l.13-.06.06,0h.06v0h0v0l.15,0,0,0,0,.09v0h.06l.06,0,.07-.05h0l0,0,0,0-.09.07,0,0h.16v0l-.05,0-.11.06-.09,0h-.05v0l0-.05h0l-.07,0h0l0,0h0l-.08,0h-.08l0,0v0h0l0,0h-.09l0,0,0,0h-.09l0,0-.11,0-.17,0-.14,0-.1,0h-.13l-.08,0-.11,0-.18,0-.07,0-.09.07-.13.12-.09.05h0l0,0,0,0-.07,0,0,0v0l-.05.08-.11.17v0l0,.06.08,0,.1,0h.22l.07-.05.14,0h0v.22h0l0,0v0l0,0,.06.05,0,0v0l-.12.05h-.06l0,0h-.19l-.19,0h-.06l0,0h0l-.16,0-.17,0-.11,0-.06.05,0,0,0,0h0l0,.07h.08l0,0,.19,0,0,0h0l-.28,0h-.07l-.13,0-.2,0-.19,0h-.2l-.14,0-.08,0-.22.18-.07.1,0,.09,0,0h0v0l0,0h0l0,.05h0l-.1,0-.11,0-.14.08-.09.07,0,.05,0,.07V133l0-.08,0,0h-.08l-.13,0h-.09l-.12-.06,0,0v-.18l0-.08h0v0l.07,0,.12-.06.12-.14.09-.08.09-.08,0-.14.07-.35.09,0,.12,0,.09-.06.05-.07.06,0,0,0,.06,0,.06-.06,0-.09,0-.1v-.75l0-.09.06-.07,0-.08V130l0-.06,0-.05,0,0,0,0,0,0,0-.05,0-.05,0-.07,0-.07v-.18l0-.06,0,0,0-.05v-.09H1955l0,0,0-.08,0-.06,0,0v0l0,0,0,0,0,0v0l.09,0h.29l0,.07v0l0,0,0,.06v.07l0,0h0v0h0v0l0,0h.07l0-.06h.06v0l0,0v.07l0,.05-.08.08h0l.08,0h.06l0,0,0,0v.09l0,.1,0,0,0-.06.06,0,.11,0h0l0,.1.12.08.22.09.13,0,0,0,0-.07v-.11l0-.07-.06,0,0-.05v0l0,0,.06,0h.07v.06h0v0l0,0h.13l0,0v0l0-.05v0h0v.06h0l0-.05v0l0-.06-.06,0,0,0v-.06h0l0-.07-.06,0v0h0l0,0v0l0,0h0l0,0h0l0,0v0l.06-.06v-.05l0,0,0,0h-.09l0,.05h0l-.08,0,0,0,0,0,0-.07v-.16l0-.06h0v.05h0l0,0v0l0,0,0,0,0-.06,0,0v-.06l0,0V128l0,0,0,0,0,0h-.27l0,0v-.07h0v0l0,0h-.07l-.13,0h0l-.09,0,0,0,0,0v0h0v0l.1,0v0l-.06,0h0l0,0,0,0h0l0,0h0v-.07h-.05l-.18,0h-.17l-.11,0,0,0-.23,0h-.06l0,0-.16,0h-.12l-.4-.07-.11,0,0,0h-.06l-.17,0h0v0h-.14l-.06,0v-.09l0-.06v0l0-.05,0,0h-.07l-.1,0h-.08l0,0,0,0h0l-.07-.08v0l0,0,.08-.1,0-.06,0,0h0l0,0,0,0h0l0,0v-.1l0,0,0,0h.07l0,0v0l0,0,0,0,0,0h-.09l0,0h0l0,0-.08,0,0,0v0l0-.12v0l0-.06.07-.1,0-.08,0,0,0,0h0l0,0,0-.05,0,0-.09,0-.07-.06,0-.08,0-.06,0,0v-.07l0,0,0-.06v-.09l0-.05,0,0v0h-.45l-.12,0h-.13l-.15,0-.13-.09-.1-.12-.07-.12-.05-.13,0-.12v0l0,0,0-.06v-.11l0-.07,0,0v0l0-.07,0,0v0l0,0h-.13l0,0,0,0h-.1l-.06,0h-.07l-.11,0-.07,0h-.13l-.08,0-.09,0h-.13v0h0l-.08,0-.07,0-.19-.06,0-.05h-.1l0,0h-.1l0,.05v0l0,.07.07.07,0,.06v.06l0,.07-.09.12h0l-.07,0,0,0h-.07l0,0v.09l0,0h0v-.07l0,0,.15-.18.06-.08V124l0-.06,0,0h0l0,0,0,.07v.2h0l0,0v.07l0,0h0l0,0,0,.08v0l0,0-.1,0h0v0l0,0h0l.05-.17,0-.1h0l-.28.12-.11.06,0,0v0l0,.05v0l0,0,0,.1v.07l0,.05-.09,0h0l-.09.11h0l-.18,0-.11,0-.09,0,0-.08,0-.06-.21,0-.27,0h-.12l-.05,0,0-.09h-.07l-.12,0-.16.12-.16.06h-.12l-.11-.06-.2-.13-.13-.14-.16-.05H1945l0,.07h-.06l0-.12,0-.1-.08,0-.14-.09-.09,0-.15-.06H1944l-.08.08-.09,0-.14,0-.08,0,0-.08-.19-.08-.33-.06-.19-.05,0,0,0,0v-.07h0l-.09-.2,0-.16,0-.2v-.06l0,0-.06,0-.2,0v.53h-25.48l0,0-.09-.07h0l0,0,0,0,0,.07v0h0l0-.09v0l0,0v0l-.06,0,0,0,0,0v-.1l0-.06,0,0,.1,0h.11l0,0,0-.11-.08.1h-.05l-.14,0h-.1v0l0,0,0-.08,0-.21,0-.07v0h0l-.12.14,0,0,0,0v.08l-.06,0h0l-.06.07h0l-.31-.12,0,0,0-.06-.07-.09,0-.09,0-.07,0,0h0l0,0,.07.12,0,.07h.07l.12-.09,0,0-.12,0h0l0,0-.05-.07,0-.09v-.26l0,0,.06,0,0-.07v0l0-.06,0,0,0,0h0l.08.11v0l-.09.11v.17l-.07,0-.08.09-.13,0h-.12l-.06,0-.2-.21-.08-.09v-.07l-.14-.27v-.06l0-.08h0v-.08l.11-.17.07-.15V121l-.07.09v.21l0,.11-.06.11-.14.06-.25,0,0,0v0l0-.16v0l0,.09,0,.12,0,0h0l0,0,0,0H1914l-.12,0h-.12l-.13,0h-.15l0,0v-.06l0,0,.16,0,.16-.06.15,0v0h-.07l-.36.06h-.14v-.06l0-.06.07-.06,0,0,0,0-.06,0,0,0,0-.14,0-.14,0,.14-.06.07-.31,0,0,0h0l-.19-.07-.08,0-.08-.07-.14-.14-.11-.1v-.17l0-.11,0-.12.2-.27.07,0,.06,0,.29,0,.21,0,0,0-.31,0h-.28l-.1,0-.12.17,0,.07,0,0h-.06v0l0,0-.07-.09,0-.11v-.22l0-.08.1-.17h-.12v-.14l0-.16.12-.09.11-.07.1-.09.18-.06.07.13.15,0,0,.06,0,.1.07.09.08.09h0l0-.08L1913,119V119l0-.07-.17-.09,0,0,0-.09v-.06l0-.06.17-.18,0-.1v-.1l0-.08h0v.18l0,.06,0,0,0,0-.38.42,0,0-.14,0-.07,0,0,.06-.06.15-.09.3-.1.24-.08-.31-.15-.24.29-.24v0l0-.12v0l0-.06.07-.08h0l-.09,0-.13.19-.06.06h0v-.11l.07-.28.06-.28,0-.08,0-.08h0l-.24.12-.08-.07-.07-.41-.12-.16-.2-.13-.19-.06,0-.11,0-.14,0-.17.08-.08.08,0,.08,0v.06l0,.17h.07l.27.2,0,0,.12-.08h.06l.14.06,0,.08.14.14,0-.08-.15-.18-.09-.06h-.14l-.1,0h0l-.08,0-.07-.08-.07-.16v-.14l0,0,0,0,.05,0,.09,0,0,0-.1-.09h0l-.18.14h0l0,0h0l-.05.07,0,0-.14.21,0,.1v.24l0,0-.16.07-.1.15-.11-.13-.12-.12-.09-.21-.15,0-.17-.12-.07-.11.1-.22.13-.17,0-.21,0,0,.23,0,.16-.1h-.26l-.17.07-.19-.14-.09-.12,0-.11,0-.1v-.09l0-.13,0,0,0-.08.08,0,.07-.15,0-.11.15-.31,0-.13.1-.19.21-.29h-.07l0,0h0l0,0,0-.07,0-.1,0,0v.19l0,.16,0,.11-.09.22-.06.09,0-.08,0-.14.06-.11v-.15l0-.19,0-.15v-.3l0-.11,0-.1v-.22l0-.09,0-.07-.11,0-.18-.06-.06-.18-.16-.06-.08-.12-.18-.07-.14,0-.11-.07-.12-.09-.13-.09-.09-.07h-.23V112l0-.09,0-.09-.09,0-.13-.07,0-.16,0-.12-.12,0-.17,0,.06-.12,0-.09-.06-.13-.13-.22-.1-.16-.13-.25-.12-.22-.09-.18-.08-.12-.11-.23-.14-.25-.14-.2,0-.13-.13-.16-.12-.17-.13-.19-.14-.09-.09-.07-.14-.1-.07-.08,0-.08,0,0,0-.07,0-.09,0,0-.17-.12-.05-.08-.12-.09-.09,0,0,0-.12-.28,0-.1,0-.1,0,0-.19-.21-.1-.09-.1-.09-.21.12-.21.12-.15,0-.21.06.07.14,0,.09-.06,0h-.11v.32l-.11.23h-.21l-.12.08-.17.11-.14.1-.15.15-.08,0,0-.14-.06-.23,0-.19-.1-.1-.16-.17-.12-.12-.17-.18-.12-.13-.13-.13-.16-.17-.07-.23-.15-.08-.16-.09-.13-.16,0-.17.06-.2v-.12h-.55l-.15.14-.13.13-.2-.1-.24-.11-.07.15-.21-.08-.23-.07V85l.14,0,.42.09.39-.06.73.28.46.53.36.25.15.17.24.16.57.33.17,0,.33.16.2,0,.35,0,.23.12.47.35.09,0,0,0-.16-.35,0,0L1905,87l-.22-.06v0l0-.12,0,0,0,0h.16l.1,0v0H1905l-.08,0-.1-.08-.06-.08.2-.52.07.05.11-.12.19.08,0,0,0-.27,0-.06,0,0,.27,0,.33,0,0,0,0-.17V85.2l0-.17,0-.08,0,0,.15,0,0,.08,0,.14.05.07.16.08,0,0-.06.21-.06.11-.14.28V86l.21-.12.23-.18.21-.1h.16l.12-.06.08-.1.05-.1.1-.32.07-.05.29,0h.07l0,0v0l-.06-.05-.09,0v0l0,0,.05,0,.14,0,.09.12h.07l.21-.13.32-.34.13-.09.12,0,.09.06.07,0,.1-.19,0-.1.06-.1.24-.2.15,0,.1,0,.11.09.09,0,.12,0h.09l0,0,.15-.24h0l0,.07.08.17v.08l-.1.21-.75.58-.23.25-.12.1-.11.05-.23,0-.09,0-.16.05-.36.08-.07,0,0,0-.13.3-.06.1-.13.15-.14.09-.19,0-.12.14-.14.27-.11.19-.12.16-.14.21,0,.11,0,.14,0,0,.14.08.06,0,0-.07-.12-.11v0l0,0,.55.08.12-.08,0-.07v0l-.15,0,0-.06,0-.13v-.18l0-.1.17-.16.17-.06.13-.09.07-.09.2-.15.08-.11,0-.1v0l0,0,0-.08.15-.07h.06l.2.07,0,0,0,.14h0l.08-.18,0-.06h.05l0,0,0,0,0,.18v.4l0-.2,0-.09.19-.43.14-.23.15-.23.21-.17.51-.28.28-.08.14-.07.07-.06,0-.08.08-.09h0l0,.19,0,0-.18.11,0,.09,0,.13,0,.09,0,0,.08,0,.11-.1.14-.16.29-.4,0-.07.07-.33.17-.14.3-.17.08-.1-.27-.09,0-.06v0l0-.09-.12-.1-.05,0v-.17l0-.13.08-.11,0,0,.11.06.11.09.34.41.14.2.08.16.2.48.08.27.07.29.07.2.07.13.33.49.17.2.15.13.16.1.19.07h.13l.2-.21v-.13l-.09-.23-.09-.16,0-.09.11-.19v-.06l0-.2.08,0h0l0-.07,0-.13.08-.11.08-.09,0-.06-.09,0h-.05l0,0,0,0,0,0,.19-.1,0-.1.07-.07.07,0,0,0,.06.09v.13l0,.21v.17l.06.41.05.09.21.11V85l-.24.42,0,.1,0,.08v.07l0,0,.08,0,.21,0,.06,0h.41l.07,0,.06-.08.1-.21.1-.06,0,0,.07-.24,0-.28,0-.12,0-.08.06,0,.16,0,.07,0,.29,0,.3,0,.3,0,.19.05.18.1.35.21.13.12.49.51.14.11.26.1.91.22.11.06.24.23.17.14.19.13.25.11.48.16.07.06h.09l.1,0,.44.1h.11l.09,0,.1.07.15,0v0l-.17-.27v0h.07l.21,0,0-.07h.07l.17,0,.17.08.19.12.22.11.35.26.19.22.18.28.1.18v.11l0,0h.06l0,0,0,.23,0,.06,0,0-.16,0-.46-.06-.08.19-.25.15,0,.07v.21l0,0-.21.19v0l.13.08.14.12.12,0h.14l.18,0,.21.11.15,0h.09l.11,0,.15,0h.62l.13,0h.59l.11-.08.08,0h.12l.36-.07h.13l.11,0,.15-.1h.09l0,0,.07,0h.09l.17-.1.4-.3h.14l.1-.09h0l0,0,.1.22,0,0,.06,0,.07.11.07.17,0,0h.37l.14,0,0,0,0,.13,0,.25,0,.09.05.14,0,0,0,0,.09-.35,0-.06.06,0,0,0,.09.26.13.19.33.35.06.13,0,.09,0,.09-.06.07-.09.06-.12,0-.11,0-.11-.07h0l0,.07.22.29.06.11.05.08,0,0,0,.07,0,.08.18.23.06.11.2.34.1.13.08.07h0l0-.06-.26-.45-.14-.28,0-.07V91.7l0,0,.09-.05.12.16,0,0h0l0,0,.06,0,.12.12h0l-.09-.23-.06-.1,0-.08.06-.11,0-.06-.15-.17-.08-.18-.07-.27v-.3l-.1-.18-.1-.13-.08-.15,0-.07v-.21l.06-.1.12-.12,0-.13,0-.13v-.06h0l.24-.06,0,0,.09,0,.12-.08.09,0h.12l.07,0,.08,0,0,0,.07-.15,0,0h.13l.06,0h0v-.22l0-.08.12-.16.13,0,.08,0,.1-.09.07-.08.07-.13,0-.16,0,0-.15-.07-.09,0-.19.11-.2.16-.08.14,0,.18,0,.07-.16-.07h-.07l-.08,0-.09.07-.1.11-.14,0-.18-.07-.12,0-.11.11v.09l0,.12,0,.07-.27,0-.07,0-.15,0h0l0-.06-.3-.25,0-.05.07-.2.28-.55,0,0,.5-.1.3-.1.56-.31.11,0,.36-.21.15,0,.13,0,.21.1.1.1.07.11.06.16.08.36,0,.3,0,.11.17.21.09.08,0,0,0,0h0l0,0,0,.13h.13l.11,0,0,0,0,.16,0,.07.13.15.13,0,.15,0,.26,0,.23-.07.17-.11.14.12.28.31.16.21.14.1.28.12.06.07h.1l.15,0,.16,0,.17.09.13,0,.42-.17h.07l.15-.08.1,0h.12l.09,0,.06-.06h.23l.4.05.28.08.16.09.14.06h.11l.1,0,.1,0,.1-.09.23,0,0,0v0l0-.08-.13-.13-.09-.13,0-.09v-.1l0-.06,0,0,.09.07.11.14.33.53.08.08,0,.07.3.19.14,0,.17-.12.07-.08,0-.07V89.8l0-.1,0-.06,0-.08-.12-.12-.2-.14-.17,0-.16.06-.19.12-.07,0-.23-.35-.06-.13v0l.11,0v0l-.06-.16,0-.06-.13-.27V88.3l.08,0,0,0h0l.23.17.12-.08.28-.1-.11-.16,0-.15,0,0,.08,0,.18.12.08,0,.06,0h.07l.07,0,.06.07.12.18.06.12.07.17,0,0h.32l.18-.15v0l0,.12-.23.45v.06l.12,0,.06,0,0-.06,0-.12,0,0,.34-.21.1,0-.06.23-.13.8,0,.28,0,.09-.13.31v.1l.14.26,0,.07v.2l0,0h.12l.12-.07.15,0,0,0-.08.25v0l.14-.06h.09l.11.13v.34l0,0,0,0h-.1l-.15,0-.08,0-.09-.08-.06,0-.07.06h-.11l-.12-.17,0,0,0,0v0l.06.11.44.59.06.12,0,.17h0l0-.18,0-.08-.23-.34,0-.12v0l.06,0,.32.09.12,0,.08-.06.05-.07,0-.41,0-.26,0-.24-.09-.37-.07-.23-.15-.22,0-.09.18-.69,0-.06,0,0h.14l.1-.06.15.08.09,0,.11-.07.24-.3.09-.09.12-.17.14-.26.16-.18.26-.18.15-.14,0,0h-.14l0,0,0-.13,0-.25V87.1l0-.12,0-.12-.05-.09,0-.06,0,0h0v0l0,.24,0,.18-.07.09-.14.06-.24,0-.1-.08v-.07l0-.28.08-.12.22-.23.14-.19v0h-.13l0,0,0-.24V86l0-.1.09-.07.28-.09.22-.11v0l-.17.32,0,.07.07.07.16-.18.11-.15,0-.06h-.1v-.07l0-.11v-.08l-.11-.1-.14,0-.11.11-.09,0h-.14l-.1,0-.06,0-.07-.11-.09-.17-.11-.18,0,0,0,0-.07.17,0,0-.44-.24-.18-.13-.09-.1-.11-.06-.13,0-.11,0-.08-.07-.06-.11,0-.14-.09-.18-.2-.36-.06-.23V83.4l0-.23.19-.4,0-.11.07-.08.1-.06h.07l.15,0-.09-.13v-.06l.09-.22h0l-.26.17h-.07l-.09-.1-.18-.37V81.6l.06-.31,0-.19,0-.17v0l.06,0,0,0,0-.18,0-.1.12-.19.12-.16.07,0h.06l.07,0,.07.09.11.1.09,0,.06,0,.11-.36,0-.09,0,0h-.21l-.09,0,0,0,0-.13,0-.08.2-.25.1-.27.29-.38.29-.17.14-.06h.11l0,0,.06.19v.2l.16.24.13,0,.08,0h.25l.06.07v.08l0,.12v.11l.18.2.15.14.14.17.21.36,0,.11,0,.11.06.39v.16l0,.43,0,.08-.06.1,0,0,.17.11.13.22.07.07.16.12,0,0,0,.07.09.32.15.28,0,.07,0,.13,0,0,0,0,.06,0,0-.1.05,0,.06,0,0,.07.06.18.08.15v.05l0,0-.22,0-.13,0-.11-.08-.08-.07-.08-.12h0l0,.1-.08.14,0,.12.06.06h.29l.07,0,.07.09-.08.15-.2.24-.43.48-.13.12,0,0h0l.15,0,.13-.06.17,0,.08,0,0,0,0,.08.27.19.17,0,.18-.18.14-.09h.17l0,0,0,0-.12.1-.11.11v0l.14,0,.31.07.15,0,.11,0,.1,0,.1.08,0,0-.09,0h-.08l-.08,0-.06.1,0,.12,0,.14-.07.06-.1,0,0,0,0-.06h0l-.08,0H1946l0,0,.46.47.14.41.1.17v0l-.06.12v.08l0,.25v.19l0,.35,0,.1.09.1.06.12,0,0,0,.1,0,.06,0,0,0,0,0-.09,0-.08.1-.15.1-.23,0-.08,0-.18v-.08l.09-.28,0-.2,0-.3.05-.21.11-.19.18-.36.07-.08.07,0h.13l.1.12.13.22.16.2.3.27.08.1.17.27.07.26,0,.36,0,.22,0,.08v.37l0,.08,0,0-.09,0-.11,0,0,0-.06-.17h0l-.1.12v.08l0,.23v.53l.11.45.18.34.46.65,0,.08,0,.26,0,.05,0,0h0l0,0,.17-.2.14-.21.1-.11h.06l.07,0,.06-.07,0-.07,0-.08,0-.33,0-.15.07-.21,0-.06.36-.54,0-.07.15-.63,0-.3v-.17l0-.16v-.13l0-.11,0-.07.08-.07,0-.11h.08l.08.07.06,0,.38-.09v0l-.22-.14V87l0-.09.07-.11.08,0,0-.07v-.08l0-.14,0,0-.21-.18h-.12l0,0-.1-.16,0-.22v-.24l0,0v-.07l0-.1v-.08l0-.07v-.09l0-.1,0-.09,0-.25v-.08l0-.11,0-.05,0,0h.08l.11,0,.11.08h.15l.17-.09.17,0h.3l.08,0,.29.24.24.12h.1l.52,0,.23,0h.11l.23.13,0,.11-.09.18-.13,0-.11.06.1.09.31.13.07.2,0,.09,0,.09v0h.07l.19-.07.2,0,.3.15,0,0,0,.13v0l-.26.31-.13.11-.18.13V87h.25l.2,0,.08,0,0,.05.06.13v.22l0,.09-.23.25-.1.08-.18.1-.08.07h-.08l-.09-.09-.1,0-.17.07h-.1l0,0v.06l.09.16,0,.06,0,0,0,.08v0l0,0,.16.35,0,0,0,0,.07-.09,0,0h0v0l-.07.3v.15l0,.16.08.16.09.14.15.2.2.21.08.1.1.23,0,.09,0,.25-.08.4,0,.23,0,0-.15.16-.08,0h-.14l0,0-.07.13-.1.22-.08.14-.06.06-.1.07-.17.2-.08.08-.28.09-.23.27-.09.09-.1,0h-.11l-.06,0,0-.16,0-.06-.08-.11-.17-.34-.07-.12,0,0-.09,0h0l-.11-.11,0-.07v0l.08,0,0-.06-.14-.15-.06-.08v0l-.14-.1-.14,0-.18.17-.07.12v0l.09,0,0,0,.07-.11,0,0h.11l.09.08,0,.06v0l.25.34.09.07,0,.08,0,.14,0,.14.12.25.13.3,0,.12-.07.05h0l-.1,0-.26-.14h0l-.07.07-.06.17h0l-.14-.06-.26-.15-.17-.12-.09-.1-.11-.17-.12-.22-.15-.07-.17.08-.25,0-.53,0-.07,0,0,0,.05.12v0l0,0v0l.06.13.09.08.27.12.17.11.1.08,0,.08v.08l0,.16,0,.06-.6.79-.23.32-.12.19-.11.13-.09.06-.15,0h-.2l-.27,0-.14-.1-.25-.27-.18-.16-.08,0-.07-.15-.06,0-.12,0-.13-.08-.31-.28-.16-.11-.14-.06h-.13l0,0,.09.14h0l-.11,0h-.1l-.19-.09h-.18l-.13,0-.16-.06-.17,0h-.37v0l.13.12.22.14,0-.12v0l.08,0,.35.08.41.16.1,0,.11,0,.13.1.17.2.33.45.11.11.14.11.72.15h.24l.5,0,.26.08.08.06,0,.19,0,.1-.15.3-.09.22-.55.91-.08.21,0,.12-.1.13-.25.2-.25.17-.16,0-.13,0-.09-.05-.13-.17v0l.1.26,0,0-.08,0-.17-.11-.06,0,0,0h0l-.06,0-.11-.1,0-.05,0-.15,0,0L1947,98l0,0,.09.06,0,0,.08.21v.05l-.06,0-.21-.08h0l.1.22,0,.1v0l-.13.24-.08.1-.11,0-.08,0-.08-.06h0l0,.08-.07.05-.09,0h-.13l-.15-.06-.39-.23-.13,0-.23,0,0,0v0l0,0v0l0,0,0,0-.06.06-.09,0-.13,0-.2-.09-.38-.23-.43-.19-.24-.25.09.23v.07l0,.07v.06l.09.16.13.06h.14v0l0,0,0-.06,0-.09h0l.12,0,.08.06.58.29.18.06.13,0,0,0,0,.07-.23.18v0l.16,0,.2-.16.11-.07.11,0,.14.08.18.2.15.12.21.06.12.07.21.19,0,.1,0,.39v.1l0,.09,0,.09-.09.06h-.12l-.1,0-.22.21-.09,0-.39-.06-.15-.06h-.07l0,0,0,0-.15,0,0,0v.06l0,.07,0,.05.06,0,.08,0,.18,0,0,.11v0l-.06.07h-.06l-.12-.08H1945l0,0-.07,0-.09,0,0,0v.09l0,.06-.1.1-.06.08v.06l.06,0,.07.1.08.15V102l0,0-.07-.06-.08-.1-.12-.09-.26-.12h-.05l0,0,.18.13.07.08v.06l-.14.13v0l0,0v0l0,.06-.09,0H1944l0,0,.06.07,0,0-.06,0h0l-.19,0,0,.14,0,0,.06.07.11.06v0l0,.06-.06.06-.27.2-.18.24,0,.07,0,.15v0l0,.07-.11,0,0,0,0,.07v.11l0,.14-.08.21-.14.3-.11.26-.08.24-.05.12h-.1l-.08.08,0,0,0,0,0,.07,0,.21-.07.36,0,.29v1.25l0,.2-.05.12-.08,0,.1,0,.07,0,0,.08,0,.13,0,.06h.09l0,0,.11.18.12,0v.1l-.05.57v.07l.05-.14.06-.44.08-.2.06,0,.26,0,.27,0h.1l.09,0,.09,0,0,.06,0,.23,0,.13.17.47.07.26.1.4,0,.11.2.53,0,.15,0,.11V111l0,.11-.07.16-.06.13-.05.08-.06.06-.06,0h0l.07,0,.07,0,.13-.11,0,0,.14,0v0l-.06.08h0l.1-.06.21-.1.84-.3.2,0,.28,0,.22.13.25.16.27.12.41.11.12.06.24.05.11.06.14.15.21.2.17.12.18.11.18.21.29.48.07,0,.18.08.34.1.5.23.22.09.15,0,.14.06.14.09.11.1.07.11.07.07.11.07.06.06v.08l-.14.33v0l.14-.24.08-.07.06,0h.13l.2,0h.17l.15,0,.12,0h.19l0,0h.06l.22.08h.09l.33.08.21,0h0l.07.1h.17l.1,0,.17.13.08.11.07.23V115l-.14.53,0,.2v.17l0,.1.12.17,0,0,.07.25,0,.1v.12l0,.2v.16l0,.22v.16l-.06.08,0,.08,0,.14v.06l0,.1.06.06.08.07.08.1.15.24.11.14.13.2,0,.09,0,.07,0,.05-.1.06-.05,0h0l.16,0h.09l.07,0,.07.09.1.08.15.07.14.11.25.26,0,.06.06.13.09.21,0,.14v.06l-.05.07-.16.12-.17.2h0l.11-.09.19-.17.1,0,.09,0,.15.05.13.07.12.09.17.24.18.2.1.16,0-.1-.07-.13-.17-.19-.07-.1,0,0v-.14l0-.14.05-.1,0-.06,0-.06,0-.07,0,0,.15-.09h0l0,.1,0,0,.07,0,.05,0,0,0,0,.06,0,.06,0,.18,0,.09v-.1l0-.17,0-.07.09-.1v0l0-.06-.18-.25v-.06l0,0,0-.07,0-.11,0-.07.11-.1.1-.16.06-.11,0-.06,0,0-.06,0v-.16l0-.14,0-.07-.12-.14,0,0,0-.16,0-.08,0-.07V118l-.11-.12,0-.1,0-.25,0-.32,0-.23,0-.15,0-.09,0,0,0-.12,0,0h0l-.08-.07,0-.08v0l.07-.08v0l0,0-.16-.08,0,0,0-.06v0l-.06,0-.07,0-.06-.08-.07-.11,0-.09,0-.16-.07-.17,0,0,0,0,0,0v0l0,0,.7-.3.06,0,.34-.17.16-.09.16-.13.22-.14.11-.09.07-.08.34-.35.15-.17.09-.15.12-.18.16-.22.11-.18,0-.15,0-.27,0-.23v-.66l0-.49,0-.15,0-.19-.12-.37,0-.1-.08-.18-.24-.45-.31-.3-.06-.08-.12-.09-.18-.11-.12-.08-.31-.32-.11,0,0-.08v-.22l0-.1,0-.08,0-.05.17-.24.1-.19.07-.11.07-.08.13-.1.08-.14,0,0-.06-.06v-.06l.1-.15,0,0,0-.15,0,0h.13l.18.21,0,0-.06-.06-.07-.13v-.06l.14-.15v-.06l0-.1v-.07l.07-.18,0,0-.21,0,0,0v0l.11-.06v0l-.18-.4,0-.12.08-.15.09-.07v0h-.12l-.07,0-.07-.12,0-.07,0,0,.06-.17.07,0v0l-.25.07-.12-.06-.11,0-.06,0,0-.06.21-.29.1-.15.06-.14,0-.09v0l0-.31v-.09l.08-.08.13-.15-.17-.13-.11-.14-.07-.06,0-.07-.07-.13,0-.18-.06-.36v-.2l0-.15,0-.07,0-.07.15-.14.28-.21.21-.08.15,0,.3,0,.25.12.73.3.13.13-.12.11,0,0,.28-.22.07,0h.06l.21.09h.09l.1.07.26.22v0l-.07-.11,0-.06.2-.12.21-.09.15-.1.15-.13.11-.07h0l.07,0,.19.17.12.09.09.09.14.16,0,0,.1.11h.18v0l0,.08v.1l0,.14-.1.22h0l.06,0,.08-.09.07,0,.13.07.13.11,0,.06,0,.09,0,.05,0,.09v0l0,.05-.15.08,0,0,.18,0,.06,0,0-.08,0,0,.21.14,0,0,0,0,0,0-.09.05-.08.12v.05l0,0,.14,0v0l-.08,0v.07l.18.23.12.11.06,0h.16l.13,0,.29.13.17,0,.14,0h.1l.09,0,0,0,0,.08v.11l0,.08.1,0h.07l.1-.09.09,0,0-.06,0-.13,0-.06.06,0,0,0,0,.06.06.17v.14l0,.06,0,.07-.08.07-.06.1-.08.23,0,.15v.18l0,.1,0,.09.07.12v.18l0,.09-.11.08-.16,0h-.5l-.14,0,0,.08.14,0h.13l.48,0,.06.05.06.09,0,.09,0,.18v.08l0,.1,0,.11,0,.13,0,.18,0,.09h.26l0,.06v0l-.1.17v.05l0,.12v0l0,0,0,.08,0,.15,0,.09-.07.07h0l0,0-.07-.19,0,0,0,0v.07l0,0,0,0-.1.07-.17,0v0l.11,0,.14.08.08,0,.13-.07.25-.22.1-.06.09,0h.1l.11,0,.23,0,0,0,.07,0,.08.08.06.07,0,.07,0,.26.07.07,0,.05V109l-.08.3,0,.11-.1.15-.12.07-.21.06-.11.06-.08.07v0l.24-.12.27-.07.07-.07.06-.06.06-.15.1-.4.06-.12.08,0,0,0,.09.23v.06l0,0-.14.22,0,0,.15-.21,0-.07v-.09l0-.07,0,0,0,.25v.24l0,.17,0,0,0-.15,0-.11,0-.08,0,0,.17-.15.2-.12.14-.11.11,0,.16,0,.11-.11,0-.15,0-.11,0-.06.11-.1h.06l.06,0,.06.08.07.12.05.09V109h0l.06-.18v-.14l0-.06-.06-.15,0-.1v-.06l.07,0h.1l0,0-.08-.06v0l.07-.12h.05l.08,0,0-.06v0h0l.14,0v0h.12l0,0-.11-.06-.1,0,0,0,0,0,0-.11v0h0l0,0,0-.06,0-.13,0-.06.09.07v0l-.07-.21v0l.12,0,.07,0,.18.15h0l0-.05-.1-.09-.08-.06-.08,0-.06,0-.06-.14v-.13l0-.16,0,0,0,0,.06,0,.07,0,.15.1,0,0-.07-.06,0,0,0-.07v-.07l.06-.16,0-.12.13-.36,0-.06,0,0,0,0h.1l.19.12.06.08,0,.1-.1.15-.17.1-.06.05,0,0,.16-.08.14,0h.11l.1.17v.23l-.06.19.07-.09.09,0,.07.12v.1l0,.1.08.13.08.11-.09.12-.11.07,0,0,.16.06,0,0,0,.08h0l.11-.12.09,0,.11.25-.08.14-.13.06-.1,0h-.14l-.06,0,0,0h.13l.21,0,.16-.06h.07l.07,0,0,0-.07,0v0l0,0,.06.13v0l0,.08.08,0,.13,0,0,0,.07.16,0,.17-.21.22-.11,0-.15.11,0,.1-.09.12h.06l.16-.2.08,0h.06l0,0,0,.06h.06l.22-.11.09,0h.12v0l-.07.27-.13.21-.23.13-.08.07-.11.12,0,0,.22-.16.15-.06.22,0h.09l.17.31.09,0h.08l.15.09,0,.09V110l0,0,0,.06.06.17,0,.1-.11.08-.08,0h-.08l-.07.07,0,0-.11,0,0,0,0,0h.09l.1,0h.1l.15,0,.07.07v0l0,0,0,.12,0,.05,0,0,.08,0,0,0h.08l.08,0,.27.29v.15l0,.12,0,.13V112l-.15,0-.49-.07-.28-.12v0l.08-.08h-.08l-.08,0,0,0,.09.12.26.11.12.13h.12l0,0,.07.08,0,0H1973l-.1.09.06.05.23,0h.17l.08,0-.07.06-.19.06v.1l.14,0,.13,0h0l0,.23,0,0-.13,0v0l.09,0,.15,0,0,0v.07l0,0h.08l.1-.08,0-.07.09,0v.09l.1.1,0,0,0,.14.08-.12.06,0h.07l0,.12,0,.1.05.06,0,.09.1.13,0,0-.13.13-.07.2v.07l-.07.11-.09.11h.06l.2-.2.12-.07.26,0,.06,0,.09,0,.06.07v.12l.08,0,.08,0,.07,0,0,.07-.24.3-.07.12,0,.09.08-.12.3-.27,0,0,.07-.11.06-.08.15,0,.09,0,0,.15.06.17.1.18.26.09h.09l.16-.06,0-.08.12,0h.09l0,.16.1.09.09.07.09,0,.13,0,.08.07v0l-.08.08-.07.12-.13.09h-.17l-.24.06v0l-.06.06-.12,0-.07,0-.12.19-.07.09h-.26l-.06,0,0,0,0,0-.15.06-.27.15h-.15l-.09,0-.06,0-.05,0-.13.07,0,0,0,0,0,.11,0,0,0,0-.11,0-.12-.06,0,.07.19.12.06.06-.05.06-.13.09v0l0,0,0,0-.07,0v0l.16-.07.15-.13.1-.13.05,0,.19,0,.11-.06.17-.11.17-.15.2-.21.24-.16.3-.11.22-.06h.14v0l-.12,0h-.11l-.13,0,0-.07v0l0-.05.11,0,.53.06.18,0,.2.38,0,.12v.08l0,.06-.08.06-.22.13,0,0v0l.1,0,0,0,0,.14.1-.09.2-.22.15-.11.14,0,.16,0h0l0,.08.08.14.08,0,.15,0,.13.18,0,.12,0,.08v.09l0,.06,0,0v.12l-.08.2.06.19,0,.08v.14l0,.09v.05l0,0-.29.07h-.12l0,0h.25l.2,0,.08.05,0,.07v.06l0,0h-.12l-.1,0v0l.15.09.05,0,.08,0,0,.08,0,.08-.3.31-.24.2-.25.17-.39.33,0,0h-.07l-.19,0h-.15l-.28.07-.08,0-.16.11-.06,0-.16,0h-.23l-.07.06,0,0,0,.09-.39.43-.1.14-.2.16-.21.26-.19.11-.06.15-.18.09-.33,0-.16,0-.18,0-.14.07-.21,0-.1,0-.4.14-.1-.13L1973,122h-.23l-.18-.06h-.16l-.16,0h-.39l-.1.07-.32,0-.13-.07H1971l-.15.05-.31-.05-.33,0-.29,0-.08,0-.45.09-.18,0-.16.13-.11,0-.11,0,0,0-.08,0,0,.07h-.06l-.11.13-.19.1-.27.56,0,.21-.11.15-.09,0h-.07l-.47.11-.21.08.06.07-.07,0-.11,0-.12.06-.07.07,0,.09-.24.16-.28.35-.13.26-.17.19-.11.07h-.08l-.08,0-.14-.09h-.1l-.25-.12-.59-.12.09,0,.08.08.15,0h.16l.33.15.16,0,.09,0,.09.1-.06.2-.06.16-.09.13-.28.32-.13.11-.24.39-.25.18-.13.11-.14.17-.33.13-.12,0h-.11l-.14.1-.16.07,0,.1-.39.26-.15,0-.13.07,0,.12-.11.07,0,.06-.1.16-.18.22-.21,0-.08.08-.09.12-.13.08-.26,0,.06.05.23.08,0,.11-.11,0-.24.15-.32.27Zm-23.61-46.4,0,0-.19-.1-.08-.06,0,0v-.23l0-.07h.09l.1.06.15.15,0,0v.1l0,.1v0Zm12.35,1,.11,0,.1,0,.07,0,0,.08,0,.08,0,.08,0,.06-.16.05-.12,0-.11-.07-.06,0-.14,0-.06-.06-.06-.1v-.06l.15-.07,0,0,.18.09ZM1940.21,85l0,0,0,0,0-.08,0,0,0,0,.13.15.1.16.1.12.17.1.36.33.11.23.11.34.1.26.09.18.1.15.15.16.14-.12.06,0,.05.05,0,.12,0,.05-.06.07-.1.08h-.13l-.07,0-.11.13-.08.15-.12,0-.23.25-.12.09-.18,0-.38-.2-.24,0-.19,0-.21-.21-.17-.12-.32-.17,0,0,0-.06v-.09l0-.06,0,0h-.05l0,.06-.1,0h-.15l-.07,0,0-.05,0-.07V87l0-.06,0,0h0l-.09,0,0,0,0,.06,0,0h-.15l-.06,0-.11-.1,0-.11-.07-.19v0l0-.12,0-.08.34,0,.16,0,.18-.13.2-.23,0-.07v-.11l-.07-.13,0-.09,0,0h.08l0,0,0-.08v-.12h.07l.08,0,.15.21.06,0,.11,0-.11-.15-.12-.31v-.16l0-.17,0-.07,0,0,.11-.1.18-.07h.09l.09.06.08.1.18.17,0,.07v0l-.07.05v0l0,.07Zm16.61-.39,0,.16,0,0,0,.08-.14.14-.3.06-.16-.07.07.21,0,.08,0,0h-.07l-.1-.06-.06-.07,0-.08,0,0,0,0h0l-.06-.12,0-.05-.3-.07,0,0,0-.06.05-.08.07,0,.17,0v-.12l0,0h.11l.08,0,0,0,0,.12.06,0h.08l.1,0,.14-.11.11,0,.15.06Zm1.29.2.05.13V85l-.07.08-.24.15-.15.13-.08,0-.1,0-.12.06h-.05l.05-.1.2-.31.16,0,0-.07,0,0,0,0v-.08l.06-.06h0l.1.07Zm9.33.46h0l-.24-.12,0-.09.12-.11.09-.06h.15l.07.12-.08.1-.07.14Zm-65.6-.1-.08.1-.12-.1,0-.05.14-.14h.06l.13.08,0,.07-.15,0Zm40.15,0,.12.18v.08l0,.15,0,.11-.06.07-.07,0h-.1l0,0,0-.11,0,0v-.09l0-.16,0-.1,0-.06h0v0l0,.11,0,.14,0,.17,0,.08-.06,0,0-.07v-.11l0-.09,0-.11,0-.15.05-.1.08,0h.08l.1.06Zm-5.22.47-.08,0h0v-.1l0,0,.07-.06v0l0,0-.09-.06,0-.06v0l0,0h.06l.14.09.06.12,0,.09h0l0,0,0,.08Zm22.3.66-.12,0-.08,0-.06-.06,0-.08-.06-.21,0-.1v-.24l0,0,.12-.07h.07l.11.07.23,0,.06.06v.08l0,.06-.11.16-.06.11,0,.13-.08.08Zm-12.18-.72,0,.16-.08.22,0,0h0l0,0-.1-.18,0-.1,0-.06.08-.06,0,0,.06,0,0,0,0,0ZM1957,87.08l-.06,0-.07,0,0-.08,0-.09,0,0,0,0,0-.09.06-.15.09-.1.19-.09,0,0,.09-.26,0,0,.1,0v0l0-.06v-.07l0-.06,0,0,.13,0h.11l0,0,0,0,0,.12v0l0,.11-.14.16-.09.14,0,0v.06l0,.07-.1.17-.07.16-.07.09-.18.09-.15.09Zm-10.4-1-.08,0,0-.11,0,0,0-.07h-.08v-.11l0-.06.07,0h.06l.06.12,0,.08,0,.12v.06Zm-8.76.54,0,.15-.11,0,0-.05,0-.13V86.5l0-.11,0,0,.07.05,0,.06,0,.11v.08Zm-.21.53,0,.08,0,0-.07.1h0l0-.06,0-.1h0l0,.06h0l0,0V87l0-.19v-.18l0,0,0,0h.1l.08.08,0,.11.08.08,0,.05Zm-1.5.56h0l0,0-.3-.16,0,0,0-.07.1-.08.08-.09,0-.13.17.07.07.06,0,.06v.25l0,0,0,.13Zm24.87.6H1961l-.11-.15-.22-.18-.08-.13v-.16l0-.12.07-.13.08,0,.12,0,.08.1.09.26.06.12,0,.09,0,0v.11l0,.07,0,0Zm-27.36-.15h-.05l-.09,0-.14-.09-.11-.09-.07-.1v-.07l0,0,.08,0h.2l.09,0,.12.15,0,.08v0l0,0Zm23.58.53-.08,0-.1-.13v-.07l0-.18.18,0,.08.1,0,.11-.14.18Zm3-.32.49.22,0,.08,0,.07v.31l0,.16v.05l0,.52v.28l0,.24-.07.19-.1.14-.08.08-.35.2-.25,0h-.26l-.33,0h-.16l-.08,0,0,0-.07-.13-.07-.21-.06-.24-.08-.43v0l.07-.35.1-.24.16-.35.19-.35,0-.06.09-.06.21-.1.18,0,.07,0,.1,0h.11l.17,0Zm-10.07,1.45h0l-.06,0-.14-.14,0-.07,0-.07v-.09l0-.09,0-.17-.08-.15,0-.08v0l0-.11,0-.07,0-.1.13-.19.12,0,.11.15,0,.11V89l0,.21v.24l-.05.18,0,.08,0,.08Zm-21-.63h0l-.13-.14,0-.13.11.13,0,.08Zm32.93.51h-.69l-.1,0-.09-.06-.1-.19-.06-.19v-.08l0-.08,0,0,.3-.07.25.08.21.1h.27l.09,0,0,0,0,0,0,.23v.21l-.2,0Zm-32.78-.49.1,0,.08,0,.05.1,0,.1v0l0,0-.16-.11-.06-.07,0-.06,0,0Zm1.16,1.41,0,.2h0l0-.1-.07,0-.07-.1v-.23l0-.11v-.14l.08-.09,0,.1,0,.18,0,.08,0,.09,0,0v.15Zm41.71.83-.11.06-.07-.08.05,0,.06-.1.09-.08,0-.07.14,0h0l0,0-.08.1-.18.19Zm-41.88.12.11,0h.15l0,.18-.06.12,0,0,0-.06-.08-.15,0-.13Zm23,1.68.09,0h.07v0l-.07.12,0,0-.08-.08-.06-.1v-.13h0Zm-.56,1.1.12.09.12,0,.19,0,0,0v0l0,.07-.07.08h0l-.11-.06,0,0,0-.06h0l0,0v.07h0l-.13,0,0,0v-.07l.09-.1-.07,0,0,0-.12.06-.06,0-.1,0v-.32l0-.06,0-.06,0,0-.09,0-.08-.12v-.09l0-.06.27.12.15.12.15.14.08.1v.07l0,.06,0,.07,0,.08Zm-.87.49,0,0h0l-.05-.07,0-.11-.06-.09-.13-.11,0,0,0-.15v-.14l0-.13V94l0-.09.11,0,.08,0,0,0,0,0,0,.07.1.19.06.15.08.3v.06l0,.06,0,.06Zm-.23.7,0,0,0,0,.07-.11.14-.31,0,0h.07l.21.21.08.11,0,.15,0,.07.17.08.16,0,.22.08.08.07.17.29,0,0,.19.12.3.27.07,0,.29.09.11.06.1.1.11.18.13.29.1.45V98l0,0-.17.19,0,0h.15l.36-.12.21.08.07,0h0l.08-.14.08,0,.13.14.08.11,0,.09v0l-.08,0,.2.08.18.13,0,.08-.19.18-.19.16-.22.24-.06,0h0l-.12,0-.18-.11-.54-.27-.17,0-.22,0,0-.07,0-.39-.09-.07-.34-.09-.09,0v-.08l0-.14,0-.06h-.11l-.11,0-.18.09-.08.09,0,.09,0,.2,0,.1-.06.12-.27.32-.11.1-.11,0,0,0-.07.11-.11.29,0,.08-.08.09-.15.12-.15.1-.25.12-.15,0-.09,0-.07-.27L1951,99l0-.06,0,0,0,0-.46.11h-.25l-.25.18h-.19l-.09,0,0,0,0-.08V99l0-.09.11-.24.09-.15,0,0,.42-.27.11-.09,0-.09V97.9l0-.12-.07-.3,0-.27v-.13l0-.21.1-.5,0-.25.07-.9,0-.25.06-.24,0-.14.13-.29.11-.12.13-.08h0l0,0,0,.12.18.11.06.11,0,.12,0,.16,0,.07-.08.1,0,0v0l.17.16.13.39Zm6.71,2.73-.07.1-.19,0,0,0v0l0,0,.21,0h.08l0,0v0l-.07.06Zm.89,1.24-.1,0-.12,0-.13-.09-.28-.29.21-.19.34.22.1.15,0,.22Zm-1.1-.16.07.09h.08l0,.07.11.22v.11l0,.09-.06.05-.13.07-.14,0-.07,0-.21-.2-.2-.24-.06-.14,0-.06.09,0,.16,0,.28,0Zm-3.81,1.06,0,.06v.19l0,.11,0,.09-.08.16-.26.26-.09.15-.07.08-.41.39-.06,0h0l-.11-.06h-.12l-.29.16,0,0v-.17l0-.09-.13-.19v-.15l.15-.19.33-.67.08,0,.17.07.08,0h0l.24-.14.23,0,.21-.09h.09l.08,0,0,0Zm10.76.81H1965l-.13,0-.08,0-.06-.1,0-.12-.12-.16-.14-.06-.08-.12h.08l.11,0,.17,0,.15.07.21.14.07.14.07.1,0,.08,0,0,0,0Zm-3.38-.13h0l-.18,0-.23-.1-.12-.08v0l0,0,.06,0,.1.06.26,0,.09,0,0,0v0Zm8.46.11.18,0h.11l0,0,.05.1-.06.14-.06,0h-.1l-.17,0-.06,0,0-.08,0-.05.08,0v0l0,0v0l0,0Zm-13.57.3.07,0,.12.18,0,.09,0,.13,0,.16,0,.15,0,.11-.09.15-.07.17-.06.19-.06.12,0,.07,0,0h0l-.08-.07-.1-.14-.08-.08-.1-.06-.06-.08v-.47l0-.1,0-.09.05-.12.15-.26.08-.1.06,0,.14,0h.06l.05,0Zm13.38,1h0l0,0,0,0v.06l0,0,.06,0v.07l0,0h0l-.22-.12-.06-.13v-.07l0-.06,0,0h0l0,0,0,.09Zm-25.83.07h0l-.09-.1v0l.11,0,.07.09v0l0,.05Zm26,.92,0,0h0l-.07-.1-.09,0,0,0-.28-.21,0-.09V103l.1,0,.18,0h.16l.16,0,0,0,.08.08,0,.11v.13l0,.06-.05,0,0,.09Zm-12.64,1.21-.13,0v0l.06-.08.19-.07.15,0,0,.07-.08,0-.15,0Zm9.5.92h-.08l0,0v-.11l0-.09.1-.17.08-.2,0,0,.1,0,.06.06.07.09,0,.08,0,.11-.07.09-.09.07-.2.12Zm3.53-.24,0,.13-.11,0-.17-.09-.06-.07,0-.07v-.1h.18l.1.13,0,0,.09.12Zm-14.44,1.1h-.1l0-.1,0-.06,0,0h.08l.05,0-.05.08-.1.07Zm-.21.27h0v0l0-.07h0l0-.08,0,0v0l-.06.07Zm10.26,1,0,.13h-.08l0,0h0l0-.13v-.08l0-.08,0,0h.1v.1l0,0h0v0Zm-9.73,2.67,0,0h0v.11h0l0-.07,0-.06v-.07l0-.07,0,0h0v.15Zm16.57-.06.08.05,0,.18h-.14l-.17-.12,0-.09v0h0l0,0,0,0h0l.09,0Zm-16.71,1.32,0,0,0,0v-.09l0-.06h0l0,0v0Zm.32.2,0,0h0l0-.15,0,0v0h0l0,0,0,0V112l0,0Zm.54.65-.08.17-.06.16-.08.3h0l0-.07.12-.36v-.07l0,0,0,.06-.17.4,0,.06,0,0h-.1l-.15.12.25-.47v0l0,0h0l-.2.3-.12.11-.07,0,0,0v0l.19-.3.18-.22.07-.13,0-.13,0-.09v-.14h0v.15l0,.22,0,.11,0,.09v0l.08,0,.06-.11.05-.16,0-.15,0-.23h0v0l0,0,.06,0,0,0,0,.07,0,0,.07,0,0,0,0,.08v.08h0Zm-1,.1h0l-.06,0,0-.13,0-.05.12,0,0,0h.1l.06,0,.07-.09h0l0,.13-.06.1-.26.2Zm1.06.1-.05,0h0v-.06l0-.1,0-.1v-.08l0-.08,0-.06,0,0h0v.3l0,.08,0,.06-.06,0Zm16.45.17v0l-.15,0,0,0V113l0,0,.06,0,0,0,.07,0v0l0,.06Zm-64.18,2.06.08-.1.16-.18.09-.13v.13l-.13.21-.17.11Zm-.32.46h0v-.11l0-.11,0,0,.11,0h0v.06l0,0-.11.1Zm-1.6.56.09.09.2-.06h0l0,0,0,.07,0,.12v.17l0,0-.32.2h0v0l0,0h.07l.25,0,0,0,0-.16,0-.08v-.07l0-.15v-.06h.18l.11,0,.12-.11h0v.18l0,.06-.11.23-.06.19,0,.2v.32l0,.11-.05.07-.31.12h-.16l-.15-.11-.06-.07,0-.09h.13l.08,0h0v0l-.22-.17-.16-.08,0-.08v-.07l0,0-.12-.23,0-.1,0-.13v-.13l0-.22v0h.05l.09,0,.22,0Zm2.23.26,0,.06-.07.09,0,0,0,0h-.06l-.06-.08,0,0h0l0,0v.12h0l0,0,0,0v-.1l0-.06.15-.13,0,0h0l.07.07h0l0,.12Zm.36,1.23h0l-.06,0-.2-.26-.14-.09-.1-.13-.1-.08.06-.14.06,0,.18.11.15.11.08.06.18.3,0,0-.07.08Zm46-.21v0h-.06l0,0,0,0v0l0,0,.07,0,0,.07Zm-45.4.28v0h-.09l0,0,0,0v-.11l.06-.11v-.07l0,.06,0,0Zm.57.28,0,.48v.16l-.07.1,0,.17,0,.07-.05-.1v-.17l0-.13v-.06l0-.25h0l-.06.11h-.06l-.12-.12,0-.1V118l-.08-.11v-.08l.06-.11,0-.08,0-.15,0-.06h.06l.11.08.1.07.1.1.08.27Zm-3-.39.1.14,0,.12,0,.15-.14.06-.08,0h0l-.05.05.06,0,.09.07.08.1h.11l.14.07-.11.12,0,.07.14.19v0h.16v0l-.06.11v0l.06,0h.11l0,.11-.1.1-.18-.13-.08-.13,0-.11-.06-.07-.17-.15-.26-.32-.07,0-.06-.13,0-.06v0l0,0,.08,0v-.06l-.3-.11,0,0,0-.07,0,0,.17,0,.17,0,.11,0,0,0,.08,0h0l.09.06Zm47.06.68-.06,0-.19,0-.08,0-.24-.11-.45-.16-.15-.08,0-.06.08-.13,0-.05,0,0,.48-.06.18,0,.22.26.12.17.05.14v.07l0,.06Zm-44.81-.37h0l0,0,0,0-.07-.11,0,0v-.08h0l0,0,.1.18,0,.1Zm.35.73,0,.07-.12-.17,0,0-.09-.18v-.12l0,0h0l0,0,.18.2.05.09v.14Zm.53.16-.07,0,0-.09v0l0,0v-.29l.07-.13h.11v.07l0,.29,0,.14,0,0,0,0Zm-2.46.66h0l0,0,0-.05v-.21l.08.08,0,.2Zm47.63,0h-.12l-.07,0,0-.05.28-.13.06,0v0l0,.07v0l0,0,0,0Zm22.16.09h0l0-.06,0-.07.07,0,0,.1-.06.06Zm-66.92.62,0,0h0l-.06,0,0-.06,0-.17v0l0,0,.09-.06h0v0l0,.1v.2Zm66.83-.09-.07.14,0,.07,0,0-.09,0-.19,0-.09,0v.15l0,0h0l.08,0h0l0,0,0,0v.2l-.07.18-.08.1-.11.08,0,0v.15l-.06.1-.17.24-.07.06v0l0,.11,0,.09-.14.22,0,.07,0,.06v.12l0,.07,0,.06v0l0,.05v.08l0,.08.06,0,.14-.2.1-.11.07,0,0,0,.05-.12.07-.11.07,0,0,0,0,0v.07l0,.08v0l.08-.07.14,0h0l.1.08h.08l.13,0,0,0,0,.07,0,.06-.13.09-.3.18-.09.12h0l.06,0,.07,0h.1v.13l-.18.18h0l.21-.08.13.11.17,0,.11,0v0l0,0v.08h0l0,0V123h0l0,0,0,0v.1l0,.11,0,.09-.07.14v.06l0,.06h0l.08-.06v-.11l.06-.07.11-.07h0v0h0l.07-.07.06,0h0l.06,0,.07-.08.06-.07.07-.05h0v.09l0,.09v.09h0l.06-.09,0,0h.08l.28,0,.09,0,.1,0,.13.09,0,.08v.18l-.09.09-.08.06,0,.06v0l0,0-.06,0-.23.14h0l.14,0h.09v0l0,0-.07,0v.05l.07,0,.09,0,.08,0v0l-.07.11,0,.07-.08.06-.17.09,0,0h0l.15-.07.08,0h0l.06-.06.08,0,.09,0,.13-.11,0,0,.08,0,0,0,.09-.07.06,0h0v.11l0,.08,0,.05-.07.11,0,0h-.14l-.07.09-.11.08-.07,0,0,0,0,.09,0,0-.12,0v0l0,0-.1,0h.07l.12,0h0l0,.07,0,.06-.16.17v0l0,.08,0,.06,0,0h.09l.06,0,.09-.12.21-.34.18-.1.15-.11,0,0,0,0v0l-.08.09,0,.08-.11.22,0,.11,0,.11v.22l0,0,.06,0,.11-.09.06-.1.06-.14,0-.06h0l0,0v.07l0,.1,0,.1,0,.11v.06l-.21.44,0,.07v.1l-.07.21-.06.13,0,0,0,0h0l0,0,0,0,0,0h-.09l-.14.11h0l0-.06,0-.27v-.1l0-.07,0-.12v0h-.05l0,.06-.08.11-.08.1-.13.13-.07,0h0l0,0,0,0v-.05l0-.07.06-.16.11-.24.1-.17v-.07l0,0,0-.06,0-.19,0-.15,0-.07-.13-.07h0v.11l-.16.29,0,.13,0,0,0,0-.06,0v-.07l.08-.15v0l-.1.13-.07.06-.08,0h-.11l-.21.29v.1l0,.07-.1.14-.06,0H1979l-.07,0h-.05l-.11.05h-.18l0,0-.06-.06v-.06l0-.06.08-.07.06,0,.15,0,.11-.05.08-.08,0,0,.16-.26.2-.09.09-.08.07-.09v0l-.1,0h-.13l0,0H1979l0,0,0,.13,0,.07,0,0h0l-.07,0-.18,0,0,0,0,0-.2,0h0l0,0,.2-.1,0-.26v0l0,0-.1,0h-.06l0,0,0,0-.06.14,0,0h-.06l-.12.05-.25,0,0,0h-.17l-.48-.08h-.17l-.21,0,0,0h-.37v-.08l-.09.07-.07,0-.1,0-.3.06h-.16l-.1,0,0,0-.05-.15,0-.17v0l0-.06.06-.09.29-.23.23-.22.1-.12.09,0,.16-.1h0l-.15,0-.1,0h-.11l-.2,0h-.21v-.05l.1-.09.2-.17h0l-.06.08,0,0,0,0,0,0h.12l0,0,0-.17.09-.21.05-.15.08-.11,0,0,0,0,.12,0,.13.1h.06l0,0,0,0v0l0-.15.06,0v0h-.1l-.09,0,0-.06v-.12l0-.07.07-.09.08-.06,0,0,.1.08.06,0v0l-.09-.13,0-.1v0l.2-.47.1-.24.13-.39,0-.06.07-.11,0,0h.09l0,0-.08-.05,0,0v0l0,0,0,0,.1-.07.07-.1,0-.12v0l0,0v0l0,0,.14-.14,0,0,0-.19.06-.08.06,0,.09,0,.29-.13.17-.12h.11l0,.09.16.05,0-.06,0-.07,0,0,.13,0h0l0,0v0Zm-66.16,1.31.45.18.46.09.34.1.21,0,.07,0,0,0,.05.09.1.21.08.13.15.24.12.16,0,.07,0,0v0l.09.16.17.14.14.07.28.11.18.11,0,.08.08.07,0,0,.06.18.12.18.12.34,0,0,0-.1v0h0l0,0,0,.09.08.21,0,.06h0l-.1,0,0,0,0,.08,0,0,0,0-.3-.07-.18-.07-.24-.11-.29-.11-.17-.08-.13-.08-.1-.07,0-.06v0l.18-.18.08-.1,0-.08,0-.08v-.1h0l0,.09,0,.09,0,.06,0,0-.22,0h-.18l-.09.08h0l0,0-.11-.1-.15-.09v0l.1,0,.06-.06v0h-.07l-.06-.09,0,0-.07,0h0l0-.06,0-.13v0l-.08,0,0,0,0,0,0,0h-.06l-.07,0,0,0v.05l0,0-.11-.1h0l0,.07h0l0,0v-.25l.09,0,.27,0,0,0h-.2l0,0-.06-.06h0l0,0,0,0-.08-.16-.06,0-.09,0,0,0h0l0,.05,0,0h-.13l0,0,0-.06v-.06l0-.08v-.07l0,0,0,0h0v.05l0,0,0,0-.05,0,0-.07,0,0h-.19l-.09.06h-.09v0l0-.08v-.12l0,0-.08,0,0,0,0-.14,0,0h.22l.06,0,.08.09v0l0-.1v-.06l.06-.07-.06,0-.2,0v0l0,.06-.13,0H1912l-.07,0-.12-.13-.08-.13v-.06l0-.08,0,0,.13,0h.17l.19,0,.48.27Zm66.09-.12,0,0h0l0,0v0l0-.06.07,0h.05v0l0,0Zm-64.24.9v.08l-.06-.13-.09-.26v-.06l0-.08h0l.06,0,.05.07,0,0,0,.08V122l0,.09Zm.19.1h0l0-.16,0-.06V122l0,.07,0,0v.09l-.07.06Zm58.27,1.33-.38,0-.31-.09-.23,0-.22-.08-.49-.25,0-.08-.05-.11-.09-.09-.1-.08-.51-.24,0-.09.1,0,.12,0h.1l.34.1.44.08.18.07.22.09.2.12.47.3.08,0,.21.15.07.11,0,.09,0,0-.05,0Zm-59.8-.73h0l-.06,0-.06,0-.12-.11v0l0,0v0l0-.08.09,0,.08,0,0,0,0,.09,0,.1v.1Zm2.29.11,0,0-.21-.11-.09-.07,0,0,0,0-.11-.07v0l0,0,.07,0,.12.05.1.09Zm64.62-.3.07.09,0,0-.23.1h0v-.17h0l0,0,.06-.08Zm-.42.22-.15.08,0,0,0,0,0,0,0-.09v0h.06v0h0l.11-.08h.07Zm-66,.33,0,.13-.11,0,0,0v-.06l0-.06.08,0,0,0Zm54.38,5.67h0l0,0h0l0,0,0,0,0,0,0,0,0,0-.05-.05,0,0v0l0,0v0l0-.06,0,0,0,0v0l0,0,0,0v0l0,0-.05,0h-.1l-.06,0,0,0,0,0h0l0,0v-.3l0,0v-1.51l-.11-.11-.15-.15-.13-.09H1967l0,0-.1,0-.17,0-.15.07h-.1l-.06,0,0,0,0-.09,0-.12-.09,0-.09,0-.06.08-.05.07-.1.15-.15.22-.08.11-.14.21-.13.18,0,.18,0,.17-.11.14-.06.12,0,.13,0,.12v.11l0,.05v0l0,0-.07.08v.09l0,0-.12.08-.1.12v.16l0,0h-.08l0,.05v.08l0,.05h0l0,0,0-.05h0l-.06,0-.07.06h-.06l-.11,0-.09.12-.09.25h-2.94l.13,0,.27-.19.21-.07.26-.2.19,0,0-.05,0-.16v-.06l.09-.17.11-.14.09-.19.15-.13.24-.1.22-.23.12-.07.12,0,0-.09.08,0,.19-.11.21,0,.21-.09.17,0,.1-.08.15,0,.43-.24.12-.11.16-.24.14-.12,0-.12.19-.21.21-.27.1-.2.15-.11.3-.31.15-.13h.07l.18-.12.11-.11.18-.12.32-.15.3-.17.41-.15.48-.23.39-.12.27,0,.33-.06h.12l.51.1.25.12.28.26,0,.06v.1l-.15,0h-.13l.09,0,.16.16v.2l-.09.17-.26.09-.07.07-.05.11,0,0-.13,0-.07.07-.21.12h-.09l-.11,0-.25-.11-.16-.1-.08,0-.07.06-.15,0-.07,0-.11,0-.24.14h.07l.18-.08h.07l.14.1.33.11.08.07.09.22,0,0,.12,0,.12-.11.11,0,.21,0,0,.07h.16l.16.1-.06.07-.08.14-.06.28-.16.18-.21.18.05,0,.07,0,.13,0h.1l.1,0,0,.13,0,.1,0,.09.06.16.09,0,0,.21,0,.12v.09l.08.06v.09l.31,0,.06,0,.21,0,0,0,0,.05-.21.11.17.09.16.13.12,0h.06l.14.08,0,0,0,0h.07l.1,0h.18l.19,0v.07l0,0,.15,0,.09,0,0,0,0,0,.19-.09.24-.18,0,0v.07l0,.11.09.08h.11l.16,0,.06,0,.07.09.07.13v.05l-.09,0-.07.06.32,0,0,0,0,.05,0,.05,0,0-.06,0-.11,0-.1.06-.1,0h-.06l-.08,0-.06,0h-.07l-.22.12-.22.08-.23.12-.23.07-.24.09h-.12l-.14.09h-.14l-.08,0,0,0,0,.1v.08l0,0,0,.05h-.14l0,0-.07-.05,0-.07-.07-.06,0,.08v.05l0,.08-.06-.13-.11.05,0,.13,0,0,0,.1,0,.06,0,0-.08.16-.1.05-.1.16-.13.11,0,.08-.21.18h-.13l-.09.08,0,.15,0,0h0l0,.05h0l-.08,0-.09,0-.07,0-.09-.22,0-.08-.08,0,0,.05,0,0-.08-.09-.06-.34v-.08l.09-.29.21-.26h-.07l-.19.18,0,0,0,0,.06-.08.1-.07.12,0h.09l.06,0,.09-.07,0,0-.08,0-.13,0,0-.06,0,0,.69-.47.14-.08.28-.1,0-.06,0-.05.11,0v.06l0,0v.13l.11,0,.09.11,0-.16.08-.09.32-.12h.26l.09-.06-.23,0-.27,0-.17,0-.23,0-.24,0-.07,0-.06.08-.08,0h0l0,0,.08-.14.25-.19.15-.17,0,0,0-.07h-.08l-.07,0,0-.08-.09-.11v0l0,.13-.17.23-.11,0-.15.1-.21.1-.24.18-.31.14h-.07l-.14-.13,0-.05,0-.08,0,0,0,0-.09,0,.07.1,0,0-.1.05-.09.07-.09,0-.06-.06-.18.08-.16,0,0,0v-.06l0,0-.1,0,0,0Zm-51.88-5h0l-.14-.1-.1-.13,0-.08.19.2.1.07v0Zm0,.18,0,0h0l0,0-.06-.25h0l.08.07,0,0,.06.08v0Zm32.65,0h0l0,0V124l0,0,.05,0h.17l0,0V124l0,0v0H1949l0,0,0,0Zm.38,0h-.12l0,0v0l0,0h0l0,0,0,.05v0Zm21.34,1.1-.1.07,0-.1,0,0h0v.06Zm0,.1,0,.1-.08.08h-.06l0-.05v-.1h.09l0,0Zm-19.51.21-.18,0-.07,0v0l0,0,0,0,.05,0h.06l.11,0,.05,0v0Zm29,.4,0,0h0v0l.06-.08,0-.06v-.06l0,0,0,0,0,.1-.07.18Zm-7.09.21,0,0h.1l-.06.05h-.11l0,0,.08-.26.09-.06.18-.17.07-.05.07,0h.08l-.08.1h-.1l-.09.08-.06.09-.08.06,0,.06,0,.08Zm-1.75,1.1,0,0,0,0,0-.11.13,0,.07.05h.09l.07.06.15,0h.15l.23,0h0l.24,0,.24,0,.08,0,0,0,0,0-.14.09-.14.1-.19.1,0,0v.18h0l0,0,0,0h-.25l-.07,0,0-.09H1972l.11-.07,0-.1H1972l0-.05v-.06l0,0,0,0-.08,0-.05.06-.07,0-.07,0h.11l-.06,0h-.06l-.27-.08-.06,0-.09-.07-.06-.11h0v0H1971l-.09,0V127l0-.05-.09,0h-.14l0-.07,0-.1.07-.09,0-.09.06-.07.15-.15v.2l-.1.19.17.18,0,0,0,0v0l0,0,.07,0,0,0Zm2.49.69h0l.13-.06h.06v0l-.11,0,0,0,.06,0v0l-.08.05,0,.06,0,.06.11-.06h0l.07,0,.06,0,0,0,.21-.23v0l-.23,0,0,0,.14-.14v-.07l.08-.12.07-.07,0,0,.08,0,0,.05v.1h.13l.12,0,.09,0v.06l0,.07,0,.06.1.07v0l-.16.08-.09.08-.09.1-.16.12-.27.08H1974l-.1,0h-.1l-.1,0h-.18l0,0-.08-.09,0-.06-.05-.3,0-.16.06-.14.1-.1.06-.08.24-.47,0-.1.06-.09.1-.09.13-.15,0,0,.07,0h.08l0,.06v0l.09.21v0l0,.16-.09.27,0,.15,0,0,0,.08,0,0-.15.11-.08,0-.08,0-.18.13Zm-9.15-1.23h-.08l0,0,.11-.08.09-.05h0l-.08.1Zm-11.79.94v0l0,0,0,0v0l0,0h0l0,0-.06-.09,0-.08v-.07l0,0h.08l.08,0,.06,0,0,.06,0,.06Zm.44.38,0,0-.06,0,0,0v0l0,0,0,0h0l0,0,0,0v0l-.06.09Zm.48-.13,0,.06v0l0,0,0,0v0h0l0,0h0l0,0h0l0,0,0,0h0l0,0v0h0v0l0,0v0l0,0h0l0,0h0v0l0,0,.07,0,0,0v0l0,0,0,0,0,.07h0l0-.06.05-.05.06,0h0l0,0v.09h0v.13l0,.06h0l0-.1,0-.06,0,0h0V128l0,0h.09v0l-.09.17-.06.09-.07.06h0l0,0h-.06l0-.05h.06l.09-.09v0h-.05l-.19.16h0v0l-.11-.05,0,0-.07,0-.08,0-.09,0-.1-.06-.11,0-.18,0,0,0-.19,0-.05,0v0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0,.05,0,0,0Zm8.53.67-.07,0-.12,0-.14,0h0l.1-.1.15-.06.15-.18h0l0,.21,0,.07Zm-.12-.15-.11,0,0,0,.13-.13.14,0-.12.15Zm11.75.12h0l-.06-.06v0l.06,0h.1l0,.07v0Zm-19.21,0h0v0l.09,0h0l0,0Zm1.49.86v0l0,0,0,0v0h.06v.07Zm12.37.17-.13.06,0-.17,0,0h0v.15Zm.45.5,0,0v0l.06-.11,0,0Zm-9.31.17-.05.05h-.06v0h0l0,0v0l0,0,0,0h.19v0l-.09,0,0,0Zm-.3,0h-.09l0,0v0l0,0,.11,0v0l-.05.06Zm15.59.25-.13,0h-.1l-.07,0v0l.17,0h.07l.12-.07Zm-21.08,2.75h0v-.09l0,0h0v.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CC"
                                    d="M2119.4,186.67h0l0,0v0h0Zm.07,0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CD"
                                    d="M2055.36,170.74l0,.07.05.06.16.11.05.07,0,.06,0,.06.05,0,.07,0,.06,0,0,0,.06.05.1.07h.11l0,0h.06l.09,0,.11-.08.08,0h.19l.11,0,.09.05h.07l.14-.1.08-.1.08,0,.11,0,.1.1.08.14.06,0,.08.09.16.18.21.09.08,0,0,.05v.12l0,0h.11l0,0,0,0v0l0,0,.06,0v.05l0,.06,0,.06,0,.11,0,.11,0,0,0,0v0l0,0v0l-.07.15,0,.14v.07l.1,0h.12l0,0,0,.05,0,0h.05l0,0v0l0,0,0,0,0,0v0l-.09.12-.2.22-.43.4h0l-.14.05-.08.08,0,.12-.13.1-.09,0V175l-.05.07-.06.15,0,.09h0l0,.05,0,.14v.05l-.05.3,0,.09,0,.14v.09l0,.09,0,.08v.38l0,0-.06.05-.06,0h0l-.07.09-.07.09-.05.09v.35l0,0-.11.08-.07,0,0,0v0l0,.1v.07l0,0,.08,0V178l0,0,.08.1.06.09v.08l0,.13V179l.1.17,0,.19,0,.14v0l0,.16,0,.15V180l.08.18.05.13,0,.07,0,.09.05.14v.12l-.1.17V181l0,.13,0,.13,0,.08.11.2.08.07.16.11.13.1.05.05,0,.06.09.16.06.12,0,.11.07.16.07.14.08.17.07.13,0,.08-.16,0-.23,0-.25,0-.27,0-.26,0-.24,0-.23,0-.07,0,0,.1,0,.1,0,.08-.07.1,0,0-.08.07-.06.05-.12.09-.07.06v0l.13.22.06.16,0,.14V185l0,.14v.11l-.08.12,0,.13,0,.16-.06.23,0,.12,0,.08,0,.05,0,.07,0,.11.06.06,0,0,.18.13.07.07.11.13.09.08.11,0,.14,0,.08,0h.06v-.15l0,0,0,0h.13l.05,0h0v1.16l0,.05h-.05l-.06,0v0l0-.07,0,0h-.11l-.09.06-.12,0,0,0h-.08l-.09,0-.07-.06v-.09l-.06-.08-.08-.13,0-.06,0-.06h-.06l-.06,0,0-.09,0-.11,0,0,0-.06-.05,0-.12-.05-.15-.06-.2-.08h-.09l-.1,0-.07,0,0,0-.05-.11-.06-.13-.17-.15,0-.17,0,0h-.06l0,0,0,.05-.05.15,0,.07,0,0,0,0-.06,0h-.21l-.15,0-.09,0-.22,0h-.07l-.09,0-.06,0-.22-.08h-.1l-.05-.05,0,0-.06,0,0-.06,0-.14v-.08l0-.08,0,0h0l-.06,0h-.1l-.18,0-.07,0h-.07l-.06,0-.14.08h0l-.08,0,0,0,0,0v-.06l0-.12,0-.05-.12,0h0l0-.06,0-.06h-.1l0,0,0,.05v0l-.07,0h-.12l-.13,0h-.15l-.22.09h-.32l-.13,0h-.1l-.07,0-.09.07-.07,0h0l0,0,0,0v-.1l0-.11,0-.06.07,0,0-.09,0-.13v-.09l0-.05,0-.13-.08-.21-.1-.16-.13-.13-.08-.12,0-.12v-.28l0-.24,0-.2v-.32l-.09-.22,0-.22,0-.25v-.16l0-.09h-1.1l-.05,0,0-.05V182l.06-.17v0h-.1l-.27,0-.18,0h-.11l-.2,0-.12.1,0,.13v.17l-.06.08,0,.09v0l0,.24-.18,0h-.23l-.22-.06h-.09l-.07,0-.14,0-.13,0-.13.07h0l-.09,0h-.12l-.13,0h0l0,0-.11-.18-.15-.24-.09-.15,0,0,0-.05-.07-.1,0-.09v-.09l0-.11-.1-.15-.07-.14,0-.14v-.12l0-.09,0-.07,0-.05,0-.06,0,0-.05-.06-.09-.06-.11,0h-1.77l-.19,0h-.78l0,0-.11,0h-.11l-.06,0-.13,0-.06,0-.1.08-.16,0h0l0,0-.09-.08-.07-.08,0,0h0l.12,0h.1v0l0-.24v-.26l0,0,0,0v0l0,0,.07,0,0,0,.07-.06.14-.16.11,0,.1,0h0v0h0v0l0,0,0,0,.08.06.07.06h0l.06,0,.07-.05.1,0,0,0,0-.07v-.15h.06l.06,0,0,0h.06l0,0,.07,0,.08,0,.08,0,.09,0h0l0,.07,0,0v0l0,.05,0,.07,0,.09v.14l0,0h.11l.07,0h.07l.06,0,.12-.13.18-.22.15-.14.12-.06.08-.07,0-.07.07-.06.14,0,.11,0,.11-.16.14-.28,0-.24,0-.15,0-.52v-.17l0-.1,0-.06.15-.14.1-.11.07-.13.15-.29.06-.1,0,0,.09-.08.12-.07.16-.06.24-.2.19-.21,0-.25,0-.2.11-.27,0-.27,0-.3v-.24l.1-.27,0-.11v-.44l.13-.36.12-.23.14-.24,0-.15.07-.2v-.16l0-.18,0-.26,0-.15,0-.13,0-.08.1,0,.12-.13.22-.34.23-.16.17-.06h.17l.11,0,.05.05.13.08.21.11.15.13.09.13.06.08.08,0h.14l.15,0,.16.08.09,0,0,0h.07l.18.07.13,0,.21,0,.47.11,0,0h0l0,0,.1-.22.09-.13,0-.05.1-.07.12,0h.11l.1,0,.08,0h.1l.1,0,.14-.07.16,0,.13,0,.22-.08.08,0,.11,0,.3.08.2,0h.08l.17-.05,0,0,.11-.17.11-.06.18,0,.09,0,.33.07.42.08.13,0h.09l.14-.1h.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CF"
                                    d="M2051.17,165.36l.06.12,0,0,.27.27,0,.07.14.2.08.13.09.19v.2l0,.25,0,.08-.11.13v.06l0,.05,0,0,0,0v.12l0,.05.09,0,.22,0h.12l.09,0h.05l0,0,0,.14,0,.08.08.07.07,0h.08l.26.05.1,0,.15.16.17.14,0,.08v.07l-.05.08v0l.09.08.09.09.17.1.3.15.13.1,0,.08.08.08.1.08.07.06,0,.16v.06l0,0,.06.07,0,.08.07.11.07,0,.12,0,.07.05.13.08.13.08.06.05,0,0,0,.05v.17l0,.14.07.09.07.07-.27-.08H2055l-.14.1h-.09l-.13,0-.42-.08-.32-.07-.1,0-.18,0-.11.06-.11.17,0,0-.17.05h-.08l-.2,0-.3-.08-.11,0-.08,0-.22.08-.13,0-.16,0-.14.07-.1,0h-.1l-.08,0-.1,0h-.11l-.12,0-.1.07,0,.05-.09.13-.1.22,0,0h0l0,0-.47-.11-.21,0-.13,0-.18-.07h-.07l0,0-.09,0-.16-.08-.15,0h-.14l-.08,0-.06-.08-.09-.13-.15-.13-.21-.11-.13-.08-.05-.05-.11,0h-.17l-.17.06-.23.16-.22.34-.12.13-.1,0,0,.08,0,.13,0,.15,0,.26,0,.18-.06,0,0-.09h0l-.14,0-.08,0,0,0h0l0-.05h-.22l-.07,0-.24-.07,0,0h0l-.12.06-.07,0-.21,0-.22,0h-.08l-.06,0,0,0,0,.09,0,.15,0,0v.3l-.06.12-.08.15-.06.12-.06.13,0-.09,0-.1V173h0l0-.08,0-.06v-.07l-.05-.06,0,0,0,0,0,0h0l-.07,0-.09-.09-.09-.09-.11-.12-.09-.1-.11-.13-.11-.11-.06-.11,0-.06h.09v0l0-.09,0-.11,0-.07-.12-.1-.12-.08,0,0,0-.06-.05-.37,0-.1,0-.05,0,0v-.17l0-.05V170l0,0h-.07l0-.05,0-.06v0l0,0,0,0,0,0,.13-.05,0,0,0,0v0l.08-.17.11-.18,0,0,0-.12.06-.14,0-.07,0-.06,0-.05.13-.09.09-.15h.1l.1,0h.14l.1,0,.07-.06.14-.05.18,0,0-.08,0,0,.06,0h0v0l0,.08.07.09.11.09h0l.07-.07.17,0,0,0,.12-.1.14-.07h0l0,0,.15-.07h.27l.27,0h.2l.1,0h0l0-.1,0,0,.07,0,.15-.15.1-.13,0,0h0l0-.05,0-.06-.16-.11h0v0l.06-.05.09,0,.09,0h.48l.16,0,.1,0,.11-.06h.25l.21-.14.06,0,0,0v0l.1-.06.11-.11.09-.1,0-.07.23-.25h.08l0,0,.1-.16,0,0h0l.05,0,0-.05,0-.07v-.09l0-.07v0l0,0,0,0,.18-.09,0,0,0,0h.11l0,0,0,0,.12-.06.12,0,.12,0,.1,0,.08,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CG"
                                    d="M2047.25,172.24v.16l-.07.2,0,.15-.14.24-.12.23-.13.36V174l0,.11-.1.27v.24l0,.3,0,.27-.11.27,0,.2,0,.25-.19.21-.24.2-.16.06-.12.07-.09.08,0,0-.06.1-.15.29-.07.13-.1.11-.15.14,0,.06,0,.1v.17l0,.52,0,.15,0,.24-.14.28-.11.16-.11,0-.14,0-.07.06,0,.07-.08.07-.12.06-.15.14-.18.22-.12.13-.06,0h-.07l-.07,0h-.11l0,0v-.14l0-.09,0-.07,0-.05v0l0,0,0-.07h0l-.09,0-.08,0-.08,0-.07,0,0,0h-.06l0,0-.06,0h-.06v.15l0,.07,0,0-.1,0-.07.05-.06,0h0l-.07-.06-.08-.06,0,0,0,0v0h0v0l0,0-.08-.06-.08-.1h-.07l-.08,0-.07.05-.13.06-.11,0v0l0,.06,0,0h-.09l0,.06-.08.1,0,.05,0,0,0,0-.07-.08-.07-.1v0l0,0v-.1l-.1-.13-.25-.21,0-.06-.21-.2.05-.14,0-.07,0,0,.2-.11h0l.14.14,0,0h.11l0,0v0l0,0v0l0,0,0-.06,0-.06v0l0,0-.09-.05-.06,0,0-.05,0,0,0-.05v0l0,0,0-.05,0,0-.1,0,0-.06,0-.09v-.07l0-.19v0l0,0,.06,0,.06,0,.15,0h0l.05,0,.06,0,.35-.08v-.07l0-.07v-.09l0,0v-.1l0,0,.11-.07h0l.08,0,.07.06.07.12,0,.1.07.13.16,0,.18,0h.1l.14-.1.08-.09,0,0,0,0,.06.11,0,0v0l0,.05,0,0,.1,0,.08,0,0-.05.07,0v-.05l0,0v0l0,0,0-.1,0-.07,0,0,.06,0,0,0,0-.16v-.11l0-.06v-.28l0-.11v-.12l0-.16,0-.17v0l0,0-.06,0-.15,0,0-.06,0-.06,0,0-.16,0,0,0,0-.1v-.26l0-.08,0-.07.07-.06,0-.08,0,0,.14,0,0,0,0,0,0-.05,0-.07,0-.06v-.08l0-.09,0-.08,0,0-.06-.18,0-.05-.11,0-.19,0-.12,0-.19.06-.14.05-.09,0h0l0,0,0,0,0,0,0-.08,0-.08,0-.1v-.13l0-.12.08-.16v-.06h1.1l.09,0,.08.06,0,0h0l0,.05h.12v.05h.18l0,0h0l.08,0,0,0h.24l.13,0,.13.09.09.06.07.07h0l0,0h0v-.07l0-.11,0-.09v-.08l0-.06.06,0v-.06h0l.06-.13.06-.12.08-.15.06-.12v-.3l0,0,0-.15,0-.09,0,0,.06,0h.08l.22,0,.21,0,.07,0,.12-.06h0l0,0,.24.07.07,0h.22l0,.05h0l0,0,.08,0,.14,0h0l0,.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CH"
                                    d="M2038.87,125.75h0l.07.06,0,.11-.07.16,0,.13v.15h.12l.12,0,.09,0,0,0v.05l.11.07.13,0,0,0,.16-.16.06,0,0,.09v0l0,.17v.1l0,.06v.09h-.06l-.08,0-.08-.08h0l0,0,0,.07,0,.09v0l0,0,0,.08v.1l0,0,0,0h-.08l-.06-.12,0,0h0l-.09,0-.14.07h-.1l0-.06,0-.11v-.07h0l-.09,0,0,0v.25l0,.09-.12.16,0,.06,0,0v0l0,.08,0,.07,0,0-.06,0,0-.05v-.07l-.1-.1,0-.09v0l-.16,0-.07-.06-.1-.11,0,0v-.22h0l-.07.06-.06.08-.12.09,0,0,0,.09v0l-.11.14,0,0-.13.09-.06,0-.18-.06h0l-.08,0-.11,0-.18,0-.07,0,0,0,0,0,0-.08,0,0,0,0-.05,0,0-.05,0-.14,0-.06,0-.07v0h0l-.16,0H2036l-.1,0-.08.08v0h0l0,.08-.07.08-.11.06h-.1v-.08l.06,0,0-.06,0-.08v0l-.06-.07v0l0-.07,0-.07,0-.06.12-.1.11-.1,0-.1v-.12l0,0,.15-.08,0,0,0,0,.12-.14.12-.15,0,0,0,0v0l0,0h0l0,0,.06-.08.08,0h.07l0,0v0l0,0h.13l.07,0,0-.07,0-.06.12-.06.07,0h.21l.16,0,.09,0h.12l.08,0h0l0,0h.08v0h-.14v0l0-.06.07,0h.06l0,0,.1.09h0v0h0l0,0,0,.06h0l.23,0h0l.15.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CI"
                                    d="M2025,165.82l0,.06.08.05h.11l.08,0,.07,0,0,.11.06.08,0,.1.08.06.06,0,.09.08.08,0h.1l0,0,.07,0h.07l.06-.09.08,0,.2-.07.08,0,.08,0h.19l.18,0,.09,0h.06l.06,0,.06.09,0,0,0,0,0,.07.05.07,0,0,0,.07h0l0,0v.15l0,0V167l0,.1v.06l0,0,0,.06,0,.11,0,0v0l0,.26,0,.26,0,0h-.07v0l0,0v0l-.05,0-.11.09v0l0,.07,0,0,0,.09-.06.21,0,.17v.06l0,0,0,.05-.12.15-.06.13v.1l0,0v.11l0,.08,0,.09.09.24,0,.15,0,.12,0,.08,0,0v0l.13,0,0,0,0,.15v.07l0,0v.13l0,0h-.07l-.05,0h-.06v0h0l-.09,0v-.13h0l0,0-.06.16,0,0-.48-.08-.1-.07-.13,0h-.22l-.18,0-.05,0,.45,0h0l0,0-.58.05-.22,0h-.06l0,0h-.29l0,0h.24l0,0-.46,0-.32.07-.14,0-.45.18-.27.08-.07,0-.13.09-.16.05-.18.1-.11,0,0,0v-.48l0-.09v-.06l.05,0,0,0v-.09l0-.08v-.17l0,0,0-.09,0-.17,0,0h0L2023,170H2023l-.06-.05v-.06l0,0,0-.07,0-.08-.08,0-.08,0h-.13l-.07,0-.06,0-.05-.06,0,0h-.09l0,0v0l.18-.18.07-.09v-.11l0-.06v-.08l-.1-.31,0-.1,0,0h0l.06,0h.07l.11,0,0,0,.09-.16v-.09l0-.11,0,0,0-.05v-.06l0,0h0l0,0-.07,0,0,0v-.19l0,0h.15l.09,0h.11l0,0,0,0h0l0,0v-.14l0-.07-.06-.07-.15-.07v-.08l0-.1,0,0,.12-.06,0,0,0,0-.07,0v-.21h-.13l-.05,0,0-.06v-.45l0,0,.05,0,.06-.06,0,0h0l.07,0,.06-.05.06-.1.08-.08h.1l0,0h0l0,.05,0,0h0l0,.08.17,0,.07,0,.06.05h0l0,0h0v0l0,0v-.05l0,0h.24l0,0,0-.11v-.11l0,0,.09.06.07,0h.07l0-.07v0h.06l.1,0h0v.15l0,.08,0,.07v0l0,0,0,0v0l0,0,.08,0h.07l0,0,0,0,0,0v0l0,0,.14,0h.16Zm2.24,4.9,0,0-.12,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CK"
                                    d="M1882.75,195.36h-.09v0l0,0h0l0,0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CL"
                                    d="M1968.11,196.92l.17.18-.08.24-.12.39-.09.3v0l0,.06-.2.09-.29.12-.15.07-.19.08,0,.07-.06,0,0,0,0,.06,0,0-.05.12v.09l0,.06,0,0,0,.07,0,.06,0,0v0l0,0h-.06l0,.07,0,.19v.07l0,.17,0,.09.08.33v.09l-.1.12-.05.08v.17l.09.16.1.14,0,.07v.1l0,0-.06,0-.12,0,0,.06h-.06l0-.05h-.06l-.07,0,0,.1-.06.16-.06.05,0,.12-.07.18,0,.11,0,.08-.07.05-.08.1-.07.1,0,0h0l0,.09-.12.13,0,.16,0,.08V203l-.07.27v.06l-.07,0-.09.11,0,.07,0,.24,0,.23v.11l0,.16v.06l0,0,.06,0v.05l0,0v.08l0,.08-.13,0,0,0,0,0v.06l0,.06-.07.19,0,.17,0,.07v.06l0,0v0l0,0,0,.06h-.08l0,0v.08l0,.1v.12l0,.16.06.1.06.19.06,0h0l0,0,0,0,0,.08-.06,0v0l0,.1,0,.1.06,0,0,.13,0,0v.17l.05.2.06.06,0,0,0,.09,0,.07v.11l0,.08.06.08h0l.06,0,.08,0V208l0,.08,0,.14v.36l0,.17v.16l0,0-.06,0h0l0,0V209l0,.09,0,.07-.06.1,0,.1,0,.07v0l0,.09,0,.08,0,.25-.07.05,0,0,0,0,0,.07.06,0,0,.06v.08l0,.08v.1l0,.18,0,.13v.2l-.05.08-.1,0,0,.07-.1.09v.12l0,0h-.11l-.06.08-.07,0,0,.06v.08l0,0,0,.09,0,.1,0,.08,0,.16v.07l0,.13,0,.08,0,.11,0,.06,0,.13,0,.08,0,.16.07.17.06.15v.18l0,.14,0,.15.06.07,0,0v.07l0,.09,0,.07-.12,0-.1.06-.09,0-.06.06,0,.05,0,.06,0,.26v.1l0,.13,0,.11,0,0V215h0l-.07,0,0,0,0,0,0,.09,0,.15,0,.06v.16l0,.09h-.06l0,0,0,.06,0,.08.07.07,0,0,0,.06,0,0,0,0,0,.11,0,.11,0,.09v.12l.06.12v.61l0,.21,0,.06v.05l.06.15.07.24,0,.1v.07l-.1,0-.07,0,0,0h0l0,.07,0,.06,0,.06,0,.08,0,.14-.05.06,0,.07,0,.09v.16l0,.26,0,.1.05.05.14,0,.11,0,0,.09,0,.07-.05,0-.08,0v.11l.07.11.08.08v.15l-.05.06.07.13,0,.09,0,.07,0,.11,0,0v.06l0,.11V221l.46,0,.1,0,.06.07v.08l-.06.09,0,.18-.09,0-.09,0h-.1l-.08,0h-.12l-.16,0-.1,0v.06l0,.11.21,0,.2.07.06.11.08.13.08.08v.14l-.13.13,0,.1-.17,0,0,.06,0,.19,0,.15.06.05,0,.1,0,.12-.12.08-.06.08,0,.06.05.1,0,.05,0,.14,0,.2v.1l0,.08-.11.11-.08,0v.35l0,.08v.07l-.06,0-.06,0-.06.13-.16.14-.06.07v.11l-.06.15-.06.14,0,.12v.13l.09.06.07.13,0,.17-.06.19-.13.07-.08.08,0,.06,0,.2v.09l0,.09,0,.07-.08.07-.12.07-.11.05,0,0,0,.12-.05.12v.16l-.3,0,0,.12-.07.09,0,.17.07.17,0,.13,0,.17,0,.17v.14l.11.15.07.19,0,.16,0,.12,0,.08,0,.08,0,.1.07,0,.11-.09.09-.06,0,0,.17,0,.11-.06h0l.06,0,0,.07,0,.16,0,.17,0,.18-.05,0v.16l.06.08v.11l-.06.25,0,.11.07.12.06.1.12.08.1.11.07.09,0,.13,0,0h1.81l.23.1.2.09h.26l.26.11.2.07.11,0,.12,0,0,.1-.52-.15-.12-.07h-.1l-.19.09-.1.23-.06.07-.13.06h-.13l-.45.23H1965l-.11.06-.1.09,0,.18V233l-.12.4,0,.23v.11l0,.19-.05.32-.08.08-.2.09-.13-.07-.23-.06-.17-.12-.21-.09-.06-.05-.19-.25,0-.09v-.1l.09-.15h.21l.13,0,.08.08,0,.17,0,.1,0,0v.05l.09-.06,0-.39.32-.19.1-.12.1-.17,0,0v-.06l-.06-.06-.15-.07-.47.37-.21.09-.14.11-.17.18,0,.06,0,.12,0,.14-.17-.06-.25-.2,0-.07,0-.11.08-.08v-.28l0-.1.05-.08.09-.09,0,0,0,0v.06h.16l.31-.25h.12l.17.06.19,0,0,0,0-.06-.15-.07-.13,0-.38,0-.08,0-.12.13,0,0,0-.07-.13,0H1963l-.06.07v.1l0,.1-.12.11-.09.17V233l0,0-.06,0-.2,0-.11-.13,0-.1-.13-.1.27-.12.1-.08.09-.15.07-.11,0-.07h-.06v.12l-.06.09-.13-.05-.19.14-.11,0-.19,0-.09-.08,0-.09,0-.1,0-.17-.06,0h0l0-.1-.06-.17,0,0,0-.08,0,0,.06,0,.06.05h.08l.19.11.08,0,0,0v-.18h0l.11.11h.07l.12,0h.06l.12,0,.18-.12.09-.13,0,0,.06,0,0,0v.09l0,.08.05.07,0,.08v.08l-.1.11,0,0,0,0,0,0,.06-.06,0-.08v-.17l-.08-.2v-.13l.09-.08,0-.07v-.12l0-.09-.21-.2-.33-.19,0,0,0,0,0,0h.05l.3.17.08.09,0,0,.06.07,0,.09-.3.09-.24.19-.18.12-.12,0-.06-.12-.07-.16-.09-.09h-.1l0-.05-.07,0-.16-.11,0-.05.12-.15.13.06,0-.42,0-.1-.17-.1h-.2l-.07-.05-.09,0-.07,0-.09-.06-.12,0-.16-.26-.06-.14,0-.15h.24l.14,0,0-.07,0-.12-.06-.09.05-.09.07-.07.07,0,.18.16,0,.1.13.32,0,0v0l.27.18h0l0-.15.08-.2.08-.07h0v0l-.08-.09,0-.11h0l-.07.07-.13.35-.08.07-.11-.16-.06-.12,0,0v-.18l.22,0-.08-.06-.25-.1-.06,0,0,0-.08-.13-.11-.1.18-.18.09-.13.29.07.06,0,0-.1-.06,0-.09-.06-.14-.18v-.09l0-.16.06,0,.12,0,.13,0,.06.05,0,0,0-.12-.09,0-.1-.09,0-.09,0-.08,0-.09,0-.12v-.1l0,0,0,0v0h-.08l0,.12,0,.11-.06.09,0,.1,0,.12,0,.13-.08,0,0-.05,0,0v-.07l0-.43v-.35l0-.28.1-.11.05,0,0,0h.07l0,0-.15-.06-.09,0-.06.05-.13,0,0-.14-.07-.12v-.38l.17,0,.14,0h.37l.3.21.13,0v0l-.1-.05-.06-.12,0,0,0-.07v-.09l-.08-.3h0l0,.11-.06.18-.08.08-.14,0-.13,0-.11,0,0-.07v-.09l0,0-.12,0,0,0,0-.08.06-.12,0-.06h.06l.06,0,.07.09.08,0,.08-.07,0-.05,0,0h-.05l-.08,0-.14-.14.07-.14.17-.16.06,0,0-.13,0-.15,0-.12-.1-.13-.13,0,0,0v0l0,0v0h0l-.17,0-.11-.08-.18-.08,0-.06,0-.09.06-.16h0l-.11.12-.18.06-.13,0-.06.05,0,0,0,0h.08l0,.15v.06l0,0h-.06l-.13-.11-.06-.11V224l0-.13.21-.17,0-.07.12-.08.16-.18.14-.1-.07-.08-.07-.12v-.17l.28-.07.12,0h.15l.09,0h.06l.14,0,0-.07,0-.05v-.1l0-.14,0-.05.06,0,.07,0h0l.09.05,0,.07,0,.09-.07.35,0,.08-.06.07,0,.14,0,.1-.26.11h0l0,0h.14l.12,0,.11-.09,0-.14,0-.27.06,0h.08l0,.06v.28l-.09.41-.12.16v.1h.09l.07-.09,0-.11.05-.16v-.18l0-.23,0-.12v-.16l-.06-.06-.08,0,0-.1,0-.19h.17l.15-.13.11-.05h.06l.2.13h0v0l0,0-.09,0-.15-.14-.2,0,0-.17,0-.17.1,0,.16,0,.31-.24.06-.18V221l-.15-.05-.16-.13-.13-.07-.11-.09,0-.13,0-.22.14,0,.07-.3-.1-.22,0-.17.13-.14,0-.1,0-.1h.11v-.17l-.07-.12v-.18l.07-.2h.13l-.08-.12-.06-.14v0l.06-.05.07,0,.08.07.11.22v-.06l0-.22,0-.28-.11,0-.11,0,0,0,0-.06,0-.08,0-.06.08-.07.16,0,.11-.09,0-.19,0,0-.06.16-.11.06h-.05l-.06,0-.13-.14-.07,0h-.06l-.06,0-.15.25-.06,0-.26,0-.09,0-.11,0,0-.06,0-.07.06,0v0h-.08l-.1-.06,0-.09,0-.16-.08-.24v-.18l.05-.12.13-.49,0-.25.06-.22v-.14l.18-.13.06-.08.15-.44,0-.23-.23-.71,0-.13v-.17l.06-.28v-.1l0-.15-.14-.25v-.13l.06-.12-.06-.16,0-.1,0-.08.21,0,.09,0,0,0,0-.13,0-.2,0-.09v-.13l.11,0,0-.12.09-.17.09-.46.08-.12.09-.13,0-.2.06-.09,0-.07,0-.12.06-.11.15-.16,0-.2.11-.34,0-.22,0-.14v-.14l.07-.17.07-.13,0-.08.15-.19,0-.14-.06-.1v-.16l0-.21.1-.08,0-.06.13-.34V207l0-.16-.09-.2v-.43l0-.34-.07-.35v-.19l0-.25v-.14l0-.31.25-.2,0-.22,0-.3v-.22l0-.1-.12-.16,0-.28,0-.08.1-.08.07-.11,0-.17.07-.14,0-.32.07-.26,0-.09.1-.12v0l0-.08v-.33l.08-.25V201l.09-.25v-.18l0-.09v-.11l0-.24-.06-.13v-.08l.07-.24.06-.06.08-.12,0-.12v-.08l-.11-.4v-.14l0-.31,0-.2V198l0-.1.07-.13,0-.09,0,0-.08,0-.07-.12v-.11l0-.08v-.12l.1,0,.06-.07,0-.12.07-.29,0-.36,0-.21,0-.11,0-.22,0-.15v-.23l-.1-.52v-.19l0-.3v-.51l0-.09,0-.12-.06-.21,0-.43v-.23l0-.19,0-.05h.22l.11,0,.13-.07.08-.11,0-.1v-.09l0-.11v-.08l0,0,.11,0,.09-.07.07-.07v.11l.13.15,0,.16,0,0,.17.09v0l0,0,0,0v0l0,.08v.07l0,.08v.11l0,.1,0,.15v.15l0,.06.07.07.09.06.07.08.06,0,.07.05.05,0,0,0v0l0,0-.08.1-.11.16h0l.11.12,0,0v.07l0,.07-.12,0,0,0v0l0,0v.08l0,.08,0,0,0,0v0l0,.05,0,0,.18.12h0l-.07.08V195l0,0,.09,0,.11.17.11.17v.32l.07.13v.1l0,.13.08.07,0,.14v.13l.06.16v.14l0,.1v.09l.06,0,0,0h.2l.2,0,.16,0Zm-38.82,4.37-.14,0v0l0-.05.1,0h0Zm28.11,6.93-.17,0h0v0l0,0,0,0h0l.05,0v0h0Zm4.64,11.41-.07,0h-.06l-.07,0h-.12l-.11-.05-.11-.07,0,0,0-.06.07-.13.08-.25,0-.36,0-.14v-.06l0-.07v-.2l.08-.14,0-.06V218l0-.13v0l0,0,0,0,.28.1.19,0v.11l0,.08,0,.15,0,0v.11l-.09,0v.1l0,.09-.07,0-.08,0,0,0-.06,0-.07.05,0,0,.09.11.1.07,0,.11.07.11,0,.07-.07.1-.1.07-.09,0v.17l0,.06Zm-.83.34-.13,0,0,0v0l0,0,.06,0,0,0,0,0v0Zm.8.27v.07h-.1l0,.05h0l-.15-.05,0,0v-.06h.16l.1,0h0l0,0Zm.06.73,0,.06H1962l-.11.06,0,.06v.06l.08.09,0,.09,0,.15,0,.13v.12l0,.11v.1l0,.09H1962v.08h-.15l-.08,0V222l-.1-.07-.07-.11-.07-.19-.06-.06-.08-.15-.11-.13.13-.08,0-.15.07,0,.11-.05.09,0h.07l0,0v-.14l0-.12.08-.06h.08l0,.06,0,.07.11,0v.06l0,.09Zm.7.5-.23.1-.11,0,0-.08,0-.06,0-.11,0-.06.08-.08,0-.06,0-.06v-.12l0,0,.17.07.17.09.06.07v0l-.07.11-.05.1-.08.09Zm-.6.05,0,0h0l0,0v-.06l-.06-.09,0,0v-.05l0-.07.06,0h0l0,.08v.27Zm-1.3.09,0,0h0l0,0v-.07l0,0h0l0,0,0,.07v0Zm.67,1,0,.06-.09,0-.09,0-.1,0,0-.1,0-.08.09-.1,0-.13v-.18l.05,0,0-.06.1,0,0,.14,0,.24.07.14v.11l-.07,0Zm-.74,2.88-.06,0v-.05l-.06-.07,0-.05.11,0h.07l.08,0v.05l-.13.06,0,0,0,0Zm.51,1,0,0-.11,0-.2,0-.08-.13,0-.2,0,0,0-.11,0-.08,0-.11,0-.13v0l0-.07.2-.07.07-.12.07,0,0,.23,0,.08.07.06V226l0,.13,0,.06v.07l0,0,0,.23Zm-.87.24h-.11l0-.25.12-.35v-.14l0-.1,0-.09v0l.16-.07,0,.07.05.2.11.29v.27l-.06.07-.19.07Zm1,.54v.2l0,.21,0,.26v.05h.05v.17l0,.1,0,.09,0,.1,0,0h-.15l-.05-.11v-.17l0-.13v0l0-.09,0,0v-.12l0,0,.05-.05v0h0l-.2.16v.31l0,.12,0,0h-.22l-.14-.11-.09,0,0-.14,0-.1h.17l0-.19-.06,0-.06-.07,0-.07,0-.06.1-.07h.05l0,0,.12,0v-.12l-.11,0,0-.09.13-.09.09-.09V227l0-.1v0l.06-.08.1,0h0l.09.06h.08l0,0v.06l.05.47Zm-.58-.44V227l-.13.22-.12.12-.11.1h-.07l0-.05.06-.08.08-.07,0-.11,0,0h0l-.06-.05,0-.08,0,0,0,0,0,0,.17-.06.06,0h.11v.09Zm0,2.07-.18.12-.06-.05h-.13l0-.13v-.09l0,0v-.08l0-.15.11,0h.08l.1.05.12,0,0,.13-.12.06-.08.08Zm-.23.56,0,.13h-.07l0,0v-.08l0,0,0-.09,0-.09v-.07h.12l.13,0,0,0,0,.06,0,0-.08,0v.13Zm.69.87v.12l0,0h0l-.07,0h0l-.06.07-.06,0H1961l-.11,0-.09.18,0,.06-.09.09v-.1l.06-.15,0-.11.06-.15.1.06.15-.06.13-.1h.12l0,.05,0,0Zm-.25.52,0,.29,0,0,.09,0,.11.15v0l-.12.25,0,.18h-.14l-.07-.18-.09-.17,0-.2,0-.17.09-.1.09,0V231l.08,0Zm.63.45h0l-.1,0,0,0-.08-.08v-.08l0-.1h0l.09,0,0,0,0,.06.14.09v.06l0,0Zm5.08,1.08v3.43h-.14l0,0-.22.05-.38-.08-.09-.08-.12-.16,0,.05-.12.06-.12.06h-.1l-.09-.06,0,0h0l-.2.09-.22-.1-.17,0-.28,0-.2-.11h-.36l-.06,0,0-.12,0,0,.08,0,0-.06.08,0,.1.08h0l.07-.08.09-.07h0l.18.09h.07l.11,0,0,0v-.06l0,0,.09,0,.1,0v.1l0,.11.12,0h.14l.1,0,0-.07-.16-.18L1965,235l-.09-.06-.11,0-.1-.21v-.35l.21-.1,0-.15.07-.11.08,0,.08.41.06.15-.07,0h-.16l.09.2.14.07.12.15v.11l.06,0h.17l.11,0,.06-.08.06,0,.11.09.19.07,0,.05,0,.08v.13l.06,0,.08-.12,0,0,0,0,0,0v0l-.14-.08-.73-.39-.09-.15-.06-.2v-.2l.06-.06.13-.07.24-.11.27-.16,0,0v-.1l0-.07-.11,0-.12,0h-.11l-.1,0-.2.1h-.12l-.1-.06-.08-.11-.05-.15v-.1l0-.09.05-.09.06,0h.06l.06,0,0,0,0-.05v0l0,0-.09-.07,0-.06-.07-.1,0,0,.13,0,.1.07.09.08h0l.05,0,.11-.1.09-.13.08-.14.07-.09h.08l.23.27h.08l.27-.14h0l.09.08,0,0Zm-5.31.41,0,0h0l0,0,.19,0,.17.07.09.07.12,0,.1.08,0,0h0l.13.16v0l.15.12v0h-.09l-.16-.06h-.09l-.06,0h0l0-.07,0,0-.16-.16-.07,0-.11,0-.14,0-.09,0h0l-.13-.14-.13-.11-.06-.13-.09-.1v0l0,0,.09.06.09.1,0,0,0,.09Zm1.35.86,0,.13v0l.07,0h.11l.19,0h0l.08.14.06.06.1.13-.1.08-.05.13v.06l0,0-.06,0-.08.07h-.11l-.1,0,0,0h0l0,0,0,0v0l.07,0,.09-.13,0-.14-.1,0-.06,0h0l0,0,0,.06,0,.07,0,.09v0l0,0-.08,0-.09-.07v0l0-.13v-.07l0-.09h0l-.1,0-.1-.13-.06-.13-.19,0,.15-.18.22,0,.08.09.24.07v-.14l0,0h0l0,0h0l0,0,0,.06Zm1.42.86.2.12h.14v.22l0,.05,0,0,0,.08,0,0-.15-.1-.16-.13-.08,0-.1,0h-.08l-.06.07-.12,0,0-.15-.11-.14-.11-.11.06-.17.07,0,.07,0,.27.06.14,0Zm.36,1.32.05.1v0l.12,0,0,0h.12l.08,0,.1,0,.13.25,0,.08-.09.08-.07,0-.06,0v-.08l0,0h0l-.07,0h0l-.06,0-.12,0,0,0v-.06l0,0-.12-.09-.08-.07h-.09l0,0-.06,0h0l0,0v0l0-.08h.2l.1,0h.08Zm1.19.08.74.16.23-.1h.18l.06.13-.19.14v0l0,0,.19,0,0,.05,0,0,0,.09v0l0,0,.14.13.06.06,0,.07v.2h0l-.07,0-.07-.06-.06-.13,0,0-.12,0-.11-.06h-.1l-.08,0-.08,0,0,0,0-.09v0l0-.13v0h0l-.09,0h0l-.1-.1,0,0h-.09l-.06.17v.05l.06.11.11.17h-.06l-.16-.05,0,0,0-.09-.09,0,0,0v-.15l0,0-.14,0,0,0v-.05l0,0-.08,0v0l0,0,0-.08,0-.29.16.06Zm2.42.38,0,.06-.06.08-.08.07H1968l0,0,0-.06v0l0,0h-.07l0,0-.1.08,0,0h0l-.28-.06,0,0,0-.06,0-.16-.11-.15.18-.08h.21l.42.06.16,0,.13.13,0,.09v.06Zm.56.12-.07.07h-.06v-.09l0,0,0,0h0l.08,0Zm-.75.89h0l0,0,0,0-.15,0v-.07l0,0,.06,0,.05-.09h0l0,0,0,.13,0,.09v0l0,0Zm-.26.19h0l-.08,0h-.12v0l0,0h.29v0l0,.06,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CM"
                                    d="M2044.36,168.52l-.09.15-.13.09,0,.05,0,.06,0,.07-.06.14,0,.12,0,0-.11.18-.08.17v0l0,0,0,0-.13.05,0,0,0,0,0,0v0l0,.06,0,.05h.07l0,0v.36l0,.05v.17l0,0,0,.05,0,.1.05.37,0,.06,0,0,.12.08.12.1,0,.07,0,.11,0,.09v0H2044l0,.06.06.11.11.11.11.13.09.1.11.12.09.09.09.09.07,0h0l0,0,0,0,0,0,.05.06v.07l0,.06,0,.08h0v.18l0,.1,0,.09h0v0l-.06,0,0,.06v.08l0,.09,0,.11v.07h0l0,0h0l-.07-.07-.09-.06-.13-.09-.13,0h-.24l0,0-.08,0h0l0,0h-.18v-.05h-.12l0-.05h0l0,0-.08-.06-.09,0h-1.1l0-.06,0,0h-.63l-.16,0h-.93v.12h-1.24l-.11,0,0,0v-.05h0l0-.22,0-.18,0-.17.06-.14,0-.15,0-.07-.19-.2.09-.08H2039l0-.08-.06-.09,0,0,0-.05.1,0v0l-.09-.08v0l0,0,0,0-.06.05h0l0,0h0v.06l0,.05,0,0h-.1v0l-.05,0-.12,0-.11,0,0-.13,0-.06,0-.06v-.07l0-.11,0,0h-.12l-.05-.06,0,0,0,.12,0,0H2038l0,0v0l0-.13h0l0-.07,0-.09.07-.11.08-.14,0-.24,0-.16,0-.14.06-.12.06-.09.16-.16.13-.12.06,0,0,0,.08,0,.08-.06.06-.11,0-.1,0,0,0,0,.15-.11.1-.07,0,0,0,0v0h.26l0,0,0-.1h0l.12.07.1.1.1.1,0,0,0,0,0,.18,0,0,0,0h.08l.08,0,.07,0,.07-.06,0-.05,0,0v-.18l.07-.06.12-.09.07-.06v0l0-.06,0-.06,0-.07,0-.05.15-.18v-.12l.12-.2.07-.27v-.05l.08-.12.08-.17.17,0,.06,0,.07-.08,0-.06,0-.07,0-.12,0-.14,0-.12,0-.12.08-.05.14,0,0,0,0-.07v-.29l0-.07.13-.13.06-.2.06-.2.15-.25.17-.25.09-.07.07,0h.08l0,0,.19-.13.08,0,.06,0v-.1l0-.12,0-.1,0-.15v-.15l0-.05v0l-.06-.07-.09,0h-.13l-.07,0,0-.06v-.15l-.09-.44h.17l.2,0,0,0,0,.15.07.09.13.07.07.14,0,.22.07.13v0l.08.19,0,.06v.19l0,.09-.06.16,0,.1v.14l0,.25.06.19.06.15.07.12.11.13.13.12.11.07-.11,0h-.2l-.12,0H2044l-.22,0h-.22l-.2,0h-.12l-.1.07-.08.11-.07.09,0,.09,0,.05.11.12.09.11,0,.08.19.17.18.14,0,0,.06,0,0,0,.1.08.13.14.13.22.09.22.08.21,0,0,.06,0v.12l0,.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CN"
                                    d="M2132.35,156.72l.05.05,0,.06,0,.12v.1l-.09.07-.09,0-.16.26,0,.08,0,0v.07l0,.13,0,.15,0,.06,0,0-.06,0h-.07l-.09.09-.1.06,0,0v0l0,0h0l-.15,0-.05,0,0,.09h0l-.08,0h-.07l-.11-.07h-.05l-.15,0-.14,0-.1-.05-.2-.11,0-.21,0-.11v-.43l0,0,.09-.08.1-.06.15-.13.11-.06.09-.08h-.09l0-.07.05,0,0,0h.19l.06-.07h.06l.24,0,.16,0,.08-.06h0l.12,0,.05.06v-.08h0l.16.08v-.12l0,0h0l.06.08.06,0,.07,0Zm-.46-1.07,0,0,.1,0v.06l0,.05-.08,0h-.13v0l0-.05Zm2.08-.54-.09,0h0l0-.05.08,0Zm.14,0,0,0,0,0v0l0,0,0,0,0,0h.05l0,0,0,0h0v.1Zm.7-1.2V154l-.07-.07h0l0,0,0,0h.06l.05.06,0,0Zm4.27-1.69,0,.06H2139v0h0l0,0v0l.06,0v0Zm1.51-1-.07.05,0,0v-.06l0-.06,0,0,0-.05h.05l0,0,0,0h0v0l0,.06,0,0v0Zm1.32-2.7-.08,0h0v-.07l.07-.08,0,0v.1Zm.85-1.67v0l-.08-.07h0l0,0h.05l.05.08Zm.22-.23v.05h0l0-.08,0,0h0v.06Zm-.1-.07,0,0-.11-.06-.13,0,0-.05v-.08h.13l.16.08,0,0,0,.08Zm-.4-1.64-.08,0-.24-.09-.17-.1-.1-.12,0,0h.12l.12,0,0,.07,0,0,0,0,.22.09,0,0,0,0ZM2144,117h.06l.05,0,.12.06.23.16.15.07h.06l.07,0,.07.11.09.06.16,0,.16.12h.06l0-.07.06,0h.1l.14.06.18.13.11,0h.05l0,0,0,.06V118l0,.06h.05l.08,0,.07.11.06,0,0,0v.07l0,0,0,.05v0l0,0,.11,0,0,0v0l0,.06.07.07,0,0,0,.05,0,0,0,0v.17l.05.07v.14l0,.16.13.21.05.12V120l0,.06.06,0,0,.06v.08l0,.06,0,.05v.09l0,.08,0,.05,0,.08v.11l.09.16.17.23.1.18,0,.12v.11l0,.08v.06l0,0v.12l0,.07.18.13-.07.2,0,.13v.15l0,.1.08.06,0,.06,0,.07.09.07.18.07.21,0,.27,0h.17l.06,0,0,0,0,.07,0,0,.11,0,.08.05,0,.06.05,0,.06,0h.06l.05,0h0l0,0h.11l0,.09,0,0h.08l.11.12.23.31.14.12.15,0h.18l.06.12-.05.13v.11l0,0,.06.13.08.07,0,.06,0,.06v.12l-.07.18,0,.15.1.12.07.12v.11l0,.07,0,0h.11l.18,0h.13l.09.06h.21l.33,0,.22,0,.09,0,.07-.07.07-.17.07-.07h.06l.09,0,.14-.12.11,0h.3l.1,0,.09-.1.16-.09.33-.12.08,0h0l.11,0,.1.05.09.09,0,.06v.08l0,.05,0,0,0,.08,0,.07.05.14.05.1,0,.11,0,0,0,.08-.09.13,0,.06-.05,0H2154l0,0,0,0,0,0-.05.07v0l0,.09v.09l-.06.08-.05.12v0l0,.09v0l0,.19-.06.13-.08.16,0,.09v.08l0,0v0l0,.08,0,0-.08.05-.05.06v.1l0,.08,0,.07,0,.05,0,0,0,0,0,.09v.07l0,.07,0,.07,0,.06-.07,0,0,0h0l-.08.07-.07.22v.25l-.09.07-.07.06,0,0-.05,0-.11,0,0,0-.11,0-.17-.05-.17,0-.1,0-.08,0-.07,0,0-.06-.05,0,0,.09-.08,0,0,.09,0,.07-.09.09,0,0-.17.06,0,0-.14,0,0,0-.05.05v.06l0,.06.05.12,0,.08,0,.17.12.51,0,.09,0,.38V131l0,0,0,0,0,0v.12l0,.1,0,.15,0,.05,0,.05,0,0v.17l-.06,0-.06,0h-.13l-.07,0-.14,0-.07,0,0,0,0,0v0l0,0,.07,0,.05.06v.07l-.05,0,0-.05h0l-.08-.06-.07-.07,0-.07v-.19l-.08,0,0,0,0,0h-.1l0,0h0l0,0v.09l-.06.15V132l0,.12,0,.16,0,0h-.08l0,.06h0l0,0-.06,0h0l-.05,0-.06.07,0,.06v.11l-.06.06,0,0-.11.09,0,0h-.16l-.11,0h-.19l-.11,0-.13,0-.11,0,0,0V133l0,0,0,0,0,.09,0,.08.07.06,0,.06v.05l0,.07,0,.09,0,.06h0l0,0,0,0h-.09l-.21,0-.11,0,0,0h-.09l-.13,0h-.09l0,0v-.06l0,0,0-.05-.05-.07,0,0,0,0-.05,0-.06,0H2147l0,0-.09.07,0,.05,0,.12,0,.13,0,0h0l0,0-.07.11-.07.11-.1.07,0,.07,0,.06-.08.09h-.1l-.08,0H2146l0,0,0,0v0h0l-.05,0-.11.1-.1,0-.12.07-.1.05,0,0,0,0v0h-.1l-.11.09,0,.08-.22.16-.08.09,0,.12h0l-.07.1-.15.1-.32,0-.1-.07,0,.05,0,.07-.08,0h-.13l-.07,0,0,0-.18,0-.07.06-.11,0-.47.28-.1.11-.09.14-.07.07-.06.05-.06,0-.05,0h-.05l-.06,0h-.06l0,.05,0,.08,0,0-.12,0-.18,0-.08,0,0,0,0,0,0-.1,0-.13.08,0h.07l.38-.18,0-.13,0-.06.08-.09.06-.05,0,0-.25,0h-.22l0-.08v-.08l0,0,.13-.09.06,0h0v-.05l0-.09,0-.11.26-.12.07-.12.1-.1.19-.27v0l.06-.12v-.05l-.09-.08,0-.1-.26-.19,0-.16h0l0,.11,0,0h-.12l-.06,0-.34,0-.08.07-.07.12-.08.08-.07,0-.07.07-.27.43-.1,0-.48.26-.24.11-.18.18-.06.1-.06.12,0,.19-.17.22-.06,0-.06,0h-.15l-.12,0-.14.07-.16.06-.14-.15-.1,0-.16,0-.07.07-.16.33-.06.19V137l.09.24.1.13.23.15.49.1.11,0h.12l.13.09.08.17V138l0,0,0,.05-.05,0,0,0,0,.17v.19l.05.06.1.09.16.07.15,0,.29,0,.12-.11v-.11l.25-.17.15-.15,0,0,0,0,0,0h.08l.35-.15.28.12.15.15.16,0,.11.08.12.06h.17l.13,0,0-.06,0,0h.05l.05.08.16,0h.14l.1,0,.06,0-.09.09,0,.16-.07,0-.06.08,0,.06,0,0v.06l0,0-.11.09h-.06l0,0,0,0,0-.06,0,0-.11,0-.11,0-.24.14-.24.11-.24.09-.09.06h-.06l-.1,0h-.06v0l.07.08,0,.06v.05l-.05,0-.06,0-.06.05,0,.09v.19l0,.05-.11,0-.12.06,0,0v-.12l0,0h0l-.08,0-.06.06,0,0,.08.11.07,0,0,0-.06.06-.15.08,0,.07-.05.07-.06,0,0,.06,0,0-.09,0-.1.13-.08.13-.09.06-.07.21-.12.12-.05.18,0,.11h.14l.07,0,.15.15.17.1.18.05.22.14.06.05,0,.12.09.33.07.17v.09l.1.16.11.28.12.24,0,.19,0,.09v.11l.12.1.28.12.05,0,.05.05v.18l0,.06,0,0,.17.08.07.06.07.1,0,.09v.13h-.17l-.3-.16h-.08l-.11,0-.16,0-.17-.18-.12-.05-.13,0-.31.15h-.08l0,0,0,0,.15,0,.14,0,.14-.08.2,0,0,.07,0,.11.14.08.11,0,.13.1.14.15.28.18.12.17,0,.11,0,.15-.1.05h-.08l-.14,0-.1.06-.1.09-.29.15,0,.1,0,.08-.07,0-.18,0h-.16l-.19.11,0,0h.15l.13-.05.13.18.25,0,.23-.15h.09l.08,0,.08.06.23.26.12,0,.13.06h.12l-.16.1-.21.21-.1,0-.06.05.17,0,.12-.09.06,0,.05,0,0,.13,0,.37h-.06l-.06-.1-.06,0-.06,0h-.11l0,.05,0,.06.06,0,.14.11v.06l0,0-.1,0,.12.09,0,.09,0,0-.07,0,0,.08.06.12.06.16v.08l-.1,0-.14.1h-.07l-.06-.13-.06,0,0,0-.06.14-.07.13-.07,0h-.13l0,0,.06,0v0l-.14.15,0,.06v.05l-.07.06,0,.1,0,.07-.06.1-.07.07-.07.1-.1.06-.13.22,0,.11v.11l0,0-.07,0-.08,0V150h0l0-.05v-.11h0l0,.06-.06.05,0,0-.06,0V150l0,0,0,.06h.08l0,.07.05.09v0l0,.05v0l-.08,0-.09.06-.12.11-.09.08h-.14l-.08,0-.08,0,.11.15.07,0h.07l.08-.05h.11l0,.09,0,.1-.06.12v.11l.07.16v.05l0,0-.09,0-.07-.05h-.07l-.08,0-.08,0,0,0,0,.06.07.05,0,.08,0,0h-.24l-.06.08,0,.13-.05.07-.08,0-.1.06-.07,0v0l0,0,0,0-.06.12-.09.05-.13,0-.11,0-.09-.05h-.1l-.07.07v.07h-.15v0l0,0,.13,0,0,.05v.08l-.14.14-.06.1h-.09l-.07.08,0,.1,0,0-.11,0,0,.05,0,0v0l0,.12-.05,0,0,0v-.07h0l-.06.06-.07,0-.06,0-.05,0-.11,0,0,.2-.1.07,0,0h-.08l0,0,0,0,0,.05h-.08l0,0,0,.17,0,.06h-.12l-.09,0,0,0,0,0,0,0h-.09l-.2.08-.08,0-.11,0-.07,0,0,.06,0,0h-.11l-.08-.06-.09,0-.1,0-.07.07-.09,0,0,.05,0,0h-.09l0-.11-.05,0-.06.06,0,0,0,0v.09h-.06l-.07-.06h-.07l-.07.06,0,0h-.1l0,0h-.05l0,0h-.08l-.09-.08L2135,154l-.09-.06,0-.06v-.11l0,0v-.06l0-.05-.1,0-.07,0,0,.06,0,.06-.1,0v0l.08.08,0,.06,0,0,.06.09v.19l0,.06,0,.05,0,.07h0l0,0h0v.05h0l0,0h-.05l0,0-.06,0-.11,0-.06-.13-.07.08,0,.18,0,0-.05,0-.08-.06-.08,0-.06,0,0,0,0,0-.08,0-.07-.06,0-.05v0l0,0h0l0,.06V155l0,0-.05,0-.1,0-.07-.05-.09,0h-.07l0,.07,0,.06h-.09l-.06.06,0,0-.08.05-.19,0-.07,0h-.2l0,0h0l0,.08-.11,0h-.09l-.11.1-.08.07H2132l0,0,0-.09h0v.09l0,.07,0,0-.13.09,0,.09,0,.09.17,0,0,0v0l0,0,0,.05.19.15v.06l0,0,0,.07-.1.06-.2,0-.17,0-.05-.07v-.05l0,0h.05v0l0,0-.08,0-.07-.11,0-.09,0-.07,0,0,0,0,0,0,0-.13,0-.08.07-.1,0-.1.13,0v-.1h-.09l-.07-.07v0h-.05l-.09-.14,0,0h0l0,.15-.1.06-.09,0h-.11l-.07,0h-.06v-.05l0-.06,0,0-.07,0h-.24l0,0-.07-.07,0-.05,0,0,0-.06,0,0h-.11v.07l0,.09,0,.07,0,0-.05,0-.06-.07,0,0h0l0,.07,0,.06h-.09l-.08,0-.08,0-.06-.05-.1-.09h0l-.11,0h-.16l0,0-.08,0-.07-.1h-.09l-.1-.07,0,0,0-.06,0,0h0l0,0-.07,0-.06,0,0,0h0v-.26l0,0,0,0,0,0,0,0v-.1l0-.08h0l.06,0,0-.07,0-.07-.15-.09-.07,0-.09,0-.1,0h-.08l-.06-.09h-.17l0,0h-.11l0-.05-.09-.06-.13,0,0-.05,0-.06-.05-.06-.08-.07-.07,0,0,0,0,0-.18.09-.08,0,0,0,0,0v.19l-.06.05,0,0h-.15l-.15.1h-.06l-.06-.06,0,0h-.07l-.08,0,0,.08,0,.08v0h-.06l-.25-.23h0l0,0-.05.13,0,0h0l-.1-.16h0l0,0-.06.08-.05,0v.05l0,0-.07,0h0l0,0-.06-.06,0-.06-.1-.06-.11-.05-.08,0h-.08l0,0,0,.06-.06.1-.07.08,0,.05-.05,0,0,0-.06,0h-.07l-.1.05-.07-.1h-.05l0,0,0,.06,0,.08,0,0,0,0v0l0,.05v.11l0,.06.09.11,0,0v.29l0,.14v.08l0,0,0,0v0h0l-.05,0h0l0,0h0l0,0,0,0h-.09l-.15.05,0,0,0,0v-.12l0,0,0,0,0-.12-.06,0v0l0-.12v0h0l-.06,0-.17.08-.14.15-.07,0-.07,0-.08,0-.09,0-.12,0-.06,0,0,0,0,0,0-.06v0l-.05,0h-.06l0-.06,0-.06,0-.08v-.09l0,0-.09,0-.21,0-.19,0h-.18l0,0v0l0-.09,0-.09.09-.12v-.19l.05-.14.07-.1,0,0v-.05l0,0,0,0-.08,0h-.11l-.15,0-.18-.06,0-.12v-.07l0-.06,0,0,0,0,0-.11,0-.11,0,0-.05-.06v-.07l0-.06.12-.12v0h-.07l-.16.05,0,0-.06,0h-.27l-.18,0-.16.08-.08.06-.06,0h0l-.06,0v-.08l.11-.14,0-.1,0-.09v-.06l0,0,0,0,0-.05v-.14l0-.14.08,0,.05,0,0,0,0-.1v-.06l0-.13.05-.09h.09l0,0,.05,0,.05,0,0-.07,0-.16,0,0,.11,0,0,0,.06-.09.06-.11.08,0h.06l0,0v-.05l-.06-.09,0-.07v0l.08,0,0-.05v-.11l0-.14,0-.15v-.48l0-.15v-.24l0-.15-.05,0-.09-.05h0l0,0v0l0,.05h-.05l0,0,0-.07-.1-.31v-.09l0-.09,0-.05,0,0-.08-.1,0,0h-.11l0-.05,0-.06,0,0H2120l0,.06,0,0,0,.08-.07.1,0,0,0,0-.13-.11-.07,0-.08,0-.14,0h0l-.12-.08h0l-.16.05,0,0h0l0,0,0,0v0l0,0v-.06l.07-.09.17-.16,0-.07-.07-.14v-.06l0,0-.08,0-.17.12h0v-.17l.05,0,.08,0,.07-.05v0h-.11l0,0-.06-.11,0,0,0,0-.14.06-.16.08-.18.11v.06l0,0,0,0,0,0,0,0h-.1l-.13-.06-.13-.05h0l-.18,0v0l0,0,0-.05-.05,0-.14.1-.16.08-.09.09-.08.09h-.09v.06l0,.05-.06.06-.13.07-.09,0-.28,0-.1,0,0,0-.05.1,0,.1-.08.07-.14.11-.17.08,0,.06v0h0l0,0v0l0,0-.11.07-.06,0-.06,0h-.18l-.06,0h0l-.12.08h-.14l-.1,0h-.08v-.17l0,0-.1,0-.12,0-.06,0,0,0h0l-.07.05-.07,0h0l-.05,0-.05,0-.18-.05h-.35v-.16l-.12,0-.1,0h-.12l-.08,0-.07,0-.06.07-.09,0-.11.05,0,.05-.08.11-.11.13-.1.12-.06.13-.07.07-.07.06,0,.15-.06,0-.06-.07v-.09l.07-.25,0-.11,0,0,0-.1,0,0-.12,0h0l-.05,0,0,0-.05,0-.14.05-.13,0h0v.07h-.23l-.16.07h-.36l-.14,0-.11-.09-.08,0-.08,0-.09,0,0-.05,0,0H2110l-.06,0,0,.12,0,0h-.07l-.08,0-.1-.07,0-.07,0,0-.06,0v.15l-.07,0,0,0,0-.06-.08-.16-.07-.08-.08-.06h-.25l-.18,0-.08,0,0-.06,0-.12,0-.09v0h-.08l-.2.06h-.05l0,0,0,0,0,0,0,0-.17-.1-.05,0-.09-.07-.08-.05,0-.13,0-.12,0-.07-.08,0-.07,0-.14,0-.11,0h-.08l-.12-.13-.09-.14-.11-.12-.07-.06h-.14l-.14-.07-.2-.15-.14-.12-.25-.13,0-.06,0,0,0-.09-.05-.09-.17,0-.2,0-.21.05-.15.26-.07.05h-.06l0-.07,0-.07,0-.07-.1-.06-.12-.08-.06-.05-.06,0-.07,0-.12,0-.13-.06H2104v0l0-.08,0-.08,0,0h-.06l-.14-.12h0l0,0-.07,0h-.12l-.09,0-.07,0-.1-.08h0l0,0-.1-.15-.12-.17-.06,0,0,0,0,.09h-.07l0,0h-.08V145l0,0,0-.09,0-.07,0-.06-.06-.07v-.07l0-.09v-.11l0,0-.17-.21v0l0-.07V144l0-.08,0-.06v0h.22l.07,0,0,0,0,.06v0l.06.06.08.06h.07l.07,0,0-.1,0,0h.05v-.07l0-.15v-.06l0-.05v-.15l-.05-.06,0,0v0l0-.06v-.07l0,0h0l0,0-.05,0-.06-.06,0-.05,0,0-.06-.07v-.34l0-.09,0-.14v0l0,0,.16-.11,0,0v-.08l0,0-.06-.05-.1-.07-.08-.07-.14,0-.18-.06,0,0,0-.13-.07-.2-.08-.21-.06-.13v-.06l0-.16v0h0l-.06,0,0,0,0,0,0,0h-.34l-.14,0-.19-.05-.19-.07-.11-.05,0,0-.09-.06-.06-.05,0-.13h0l-.11.05-.12,0h-.07l0,0,0-.14,0,0h0l-.06,0,0,0v0l0-.05,0,0v-.24l0-.09,0-.07,0-.09,0-.06-.06,0-.1-.05-.09,0-.1,0,0,0,0-.16,0,0-.18-.07h-.09l-.09,0-.06,0,0,0-.07,0-.07,0h-.08l-.06,0h0l0,0-.11-.1v0l.18-.09.1,0,.05,0h0l0,.05.07,0h0l0,0,.08,0,.07-.05,0-.05,0-.08-.1-.09-.06-.05,0,0v-.1l0-.1,0,0,0,0v-.11l0-.13-.05-.07v-.2l.06-.16,0-.06-.06-.06-.22-.11-.21-.07h-.14l-.06.06,0,.08h0l-.09,0-.06-.05-.05-.11,0-.14,0-.05v0l0,0,.06,0v-.07l0-.05,0-.07-.08-.15v-.08l0-.12V136l.08,0,.1,0,0,0,0-.05v0l0-.13,0-.05v0l0,0,0-.06.05-.12.05-.08,0,0,.06,0,.14,0,.16,0,.19-.17.06,0,.08,0h.06v0l0-.1v0l0,0h0l.13.05h.1l.12,0,.25-.17h0l0,0,0,.11,0,.23,0,0h.18l.12-.09.05,0,.09,0,0,0,0,0,.06.1.07,0,.08-.07,0-.07.05-.08,0-.11,0-.09,0,0,0-.05.11-.2.07-.05h.08l.18,0h.09l.27,0,.13,0,.09,0h.13l.15,0,.21-.25v-.11l.08-.06.09-.05.19-.12.37-.2.13-.08h.06l.14-.05.24-.1.07-.12.06,0,.28,0,0,0v-.1l0-.08,0,0,0,0v0l0-.16,0-.15,0-.13v0l0-.09,0-.08.16-.07.1,0v0l-.09,0-.06-.05v-.08l.11-.06.1-.05.13,0,0,0v0l0-.06,0-.09-.06,0v-.06l0-.09-.05-.17-.05-.16-.09-.26-.06-.08,0-.12,0-.06V130l0-.14,0-.15,0-.09v-.07h.05l0,0,0,0-.08,0-.1-.05h-.24l-.06,0-.05-.05v0l.07-.07.1-.08.16,0,.17-.05.08,0,.12,0h.2l.17-.06.28-.1.24-.08.09,0,.06,0,0,.11.07.06.07,0h0l.12,0,.14,0h.05l.07.06.07.05h0l0,0,0-.08,0-.1v-.11l0-.06,0,0-.12,0-.12-.07v-.09l0-.1.08-.19.07-.26,0-.2.13-.3.1-.32.16-.46,0-.09v-.2l.05,0,.1,0,.23.11.18.09.07,0,.11,0,.17,0h.1l.08,0h.12l.18,0h.12l0,.05,0,.1,0,0h.07l.14-.09.09-.07.11-.1.11,0,.12,0,0-.05.05-.12.07-.09V126l0-.08-.05-.13v-.09l0-.26,0-.23,0-.19.05-.21,0-.06,0-.08.06-.11.07,0,.21,0,.19,0,.1,0,.11,0,.06,0,.1-.14,0-.09,0-.23,0-.11,0-.09,0-.06.08-.06h0l.11,0h.16l.09,0h.09l.05,0,0,0,0,0,.09,0,.09,0h0v.18l0,0v.05l0,0-.05,0v.05l.06.07,0,.06.1,0,.08,0,0,0v0l0,0,0,.05v.07l.07,0,.09,0,.14,0,.1.1.09,0,.05.1v.13l.09.07.15.09.07,0,0,.06.07.06.06,0h.08l.12-.06h.14l.07,0,.08.13,0,0,0,0,0,0h0l.08,0,0-.06h.07l0,0v.06l0,.08.08.06.11,0v0l0,.08,0,0,0,.07,0,.13V126l0,.06,0,.1.08.15.07.13.08,0,.06,0,0,.09.07.18V127l0,0v0l-.05.19,0,.08v.07l0,.13.05.09v.09l0,.07-.07.08,0,0-.06,0-.08.17,0,.17v.1l0,.06.05.08v.06l.09.14,0,.09h0l0,0h.09l.08,0,.08.06.08,0h.12l.06,0,.07,0h.41l.13.05.24,0h.14l.19,0,.12,0,.35,0,.2,0,.13.06.09.09.11.14.08.06.22,0,.16.16.12.06.2.16.14.06.17.06.27,0,0,0,0,.08,0,.12v.08l0,0,.11,0,.05,0,0,.08,0,.05.09.24.14.35v.14l.05.09.16.14.08.1.12.11,0,.1V132l0,0,.22,0,.19,0,.35,0,.47.07.49.06.43.06.21,0,.48.06.27-.08.21-.06h.09l.4.07.24,0,.29.05.2,0h.25l.07,0,0,.05.16.21.08.1.17.07.39.08.21.05.25.06.16.08.18.1.25.13.26-.05.28-.07.18,0v.26l.26,0h.07l.12.06.06,0,.06-.06.08-.09.1,0,.19-.11,0,0,.27-.15.42-.18.18-.09.06,0,.11,0,.07,0,.12,0h.17l.19,0,.42-.06h.05l.24,0,.1,0h.35l.13,0h.17l.24,0h.19l.09,0,.14-.07.1-.05.15-.07.18-.07.13-.06.08,0,.11,0,0-.05,0,0,.06-.06.09-.12.08-.1,0,0,.08-.11.07-.08.09-.1.07,0,.09,0,.24-.1.05,0h0l.09-.08.07-.08.05-.05.1,0,.05,0v-.13l-.05-.08,0-.08-.14-.13-.08-.09-.07-.1,0-.11-.06-.06,0-.06v-.07l.07-.12,0-.07,0-.13.07-.2.06-.1.06-.09.14-.12.12,0,.07,0h.28l.08.06.09.12.1,0,.32.1.13,0h.1l.14,0h.05l.07,0,.07,0,.09-.08.11-.09,0,0,.09,0,.05,0,.08-.1.1-.08.13-.12.06-.09,0-.06v-.06l0,0,.08,0h.09l.16.06.23,0h0l.2,0,.1,0,.13,0,.1-.1.13-.12.1-.06.06,0,.08-.07,0-.07v-.12l0-.1.09-.18.08-.08.07-.07,0-.1,0,0,.07,0,.09-.07h.06l.11,0h.33l0,0v-.06l0-.13,0,0,0,0h.1l.06,0,.05,0h.07l.06,0,.09-.11.15-.07h.08l.14-.06.09,0,.16,0h.13l.06-.08h.05l.11,0,.06.06.13.07.15,0h.13l.14,0h.08l0,0,.11-.06,0-.09v-.16l0-.07-.07-.1,0-.06v-.09l0-.08-.1-.1-.07,0-.14-.17,0,0,0,0,0-.06,0,0-.07-.05,0,0,0-.08,0-.05-.06,0-.06,0-.07,0-.11,0-.06-.09-.11-.17-.07,0-.24,0-.08,0-.1,0-.06,0h-.12l-.07,0-.09.11-.11.14-.09.09-.07.09,0,0-.06,0-.08-.1-.12-.09-.1,0,0,0-.13,0h-.1l-.13,0h-.12l-.06,0h-.08l-.14.09-.08.11-.09,0-.08-.07-.09-.08-.09-.1-.05-.1,0-.26.1-.07.14-.09v-.29l0-.16.12-.16.07-.13v-.08l.06-.13.05-.15.08-.18.15-.34.17-.39.09-.2.19.12.12.07.21.09.21,0,.2.1.11,0h.05l.29-.25.25-.22.28-.17.2,0,.16,0,.1-.08.06-.12,0-.18,0-.11-.1,0,0,0,.05,0,0-.08,0-.11.06-.1.09-.1.06-.11V121l.05-.12.1-.12.06-.11v-.11l0-.13.14-.23.1-.26.15-.18.26-.19.15-.19.07-.18v-.16l-.07-.15,0-.14.05-.15,0-.11-.12-.07-.15,0-.18,0-.09,0,0-.13,0-.1.12-.08.18-.2.26-.31.26-.17.39,0,.31-.11.32-.1.23,0,0,0h.13l.21,0,.19,0,.18-.08h.15l.1,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CO"
                                    d="M1964.3,164.48h0l0,0-.13,0-.17.05-.22,0,0,.07-.21.37-.19.08-.06.06,0,.07-.11.13,0,.1-.12.22-.06.28,0,.15,0,.23-.06.11-.07.1-.07.11-.07.11-.06.09v0l0,0,.13,0,.06,0,.07,0,0,0,0,.09h.1l0,0,.07.24,0,.2.13.13.1.1,0,.09,0,.12V168l0,0,0,.08v.4l0,.07,0,0h.09l.08,0,0,.11.07.14.07.06.1,0,.08,0,.18,0h.15l.22,0h.19l.18-.07h.15l.11,0,.06,0,.07,0,.11,0h.13l0,0,.18.22.15.19.13.15.15.18h0l.06,0h.05l0,0,.06,0,.1-.06h.14l.19,0h.24l.3,0,.19,0,.07,0h.13l.14,0,.08.05v.06l0,.09,0,.08-.09.09-.06.12v.14l0,.1-.09.07,0,.09v.31l0,.25v.14l0,.05v.24l0,.1.07.2,0,.09,0,0,0,0,.14.21,0,.05v.06l0,0-.15.13-.29.27,0,0v.06l.09,0,.09,0h0l0,0,0,.07h0l0,0,.09.08.07.08,0,0,0,0,0,0,0,.05.05.12,0,0v.1l0,.05,0,.11,0,.13V174l0,0,0,.1,0,.09v.07l0,.06-.17,0h0V174l0-.08-.08-.13-.11-.17,0,0,0,0h-.05l0,0,0,0,0,0-.1.11-.09.12-.06,0-.06,0h0l0,0,0-.07,0-.08-.06,0,0,0v.06l0,.05,0,.06,0,0h-1.12l-.07,0-.07,0h0l-.07,0h-.08l0,0h0v.6l0,0h0l0,0,.09,0h.14l0,0h0l0,0,.05,0,0,0,0,.05,0,0,0,0v.2h-.12l0,0h-.08l0,0,0,0h0l0,0,0,0h-.11l0,0,0,0h-.23v.66l0,.05.11.11.09.06.07.06.08,0,0,0,0,0v.11l0,0v0l0,0v0l0,0v0l0,0h0l0,0v.09l0,0v.09l0,.16,0,.18,0,.15,0,.22,0,.27-.06.32-.06.32-.06.31,0,.28-.06.31,0,.19,0,0,0-.07-.08-.06-.06,0,0,0,0-.1,0,0,0,0h0l0,0-.06,0h0l-.16-.07h0l.11-.17.19-.29.11-.18.14-.21.06-.1v0l0,0h-.06l-.07,0,0,0-.06,0,0,0-.1,0,0,0h-.07l-.05-.06-.19-.11h0l-.06,0-.08,0-.07.06-.1,0h-.09l0,0h0l-.06-.05-.1,0-.08,0h0l-.06.06-.06.06,0,0h-.06l-.08.05-.07,0h-.17l-.09,0-.08,0,0,0h0l0,0h-.16l0,0,0-.05-.07,0-.08,0v-.12l0-.06,0-.08,0-.11,0,0,0,0,0,0h-.08l-.08,0,0,0,0,0,0-.09,0-.08,0,0,0-.07,0-.07-.06,0H1962l-.06-.07-.06,0-.06-.07-.11,0-.06,0,0,0,0-.07v0l0,0,0-.07,0-.1,0-.06,0,0,0,0-.06,0-.07,0,0,0,0,0,0,0H1961l0,0-.05,0-.08-.07h-.08l0,.06-.17-.07-.14-.09-.15,0-.09-.06-.09-.09,0-.06,0,0-.18-.08h0l-.07,0,0,0v.11l-.06,0h-.1l-.07,0h0v0h-.09l-.08,0-.08,0-.1-.06h-.16l-.1,0,0,0,0-.19v0h0l-.07,0,0,0,0-.06,0-.05h-.12l-.19-.06-.13-.07-.12-.07-.19-.14-.07,0-.09-.05,0-.07-.08-.07h0l0-.07-.12-.09.06-.12.15-.08.2.06,0-.13-.08-.13v-.22l0,0,.05-.06.07,0,0,0,.07,0,0,0,.16,0,0,0,0,0,0,0,0,0,0-.06,0,0h.06v0l0,0,.1-.08v0l0-.08v0h0l.07,0,0-.08,0-.06,0-.1h.06l0-.12.07-.1.16-.3h0l0,0h0l0,0,0-.14h0l-.07.1-.07-.1v-.07l0-.06v-.05l-.1,0v0l.06,0,0-.05.06,0,0-.07,0-.11,0-.12,0-.06,0,0,0-.22v-.23l0-.08-.13-.11.2-.13.07-.1-.09-.19-.12-.17v-.1h.07l0-.21v-.07l-.07-.1h-.08l-.07-.13,0,0,0-.08-.12-.17-.09-.08.07-.2.06,0,0-.05,0-.12v0h0l0,0,0,0,0,.07,0,0,0,0,.17-.13v0l0-.08,0-.07.07,0V168l-.07-.14,0-.07,0-.08,0-.07-.07-.07,0-.06,0-.07h0l0,0,.07.13.13.09.12.13,0,.1.05,0,0,0v0l0,0,0,0,0,0,0,0h.07l0-.07,0-.28,0-.14,0-.05,0-.06,0,0,.08,0,.1,0,.38-.27.13-.26.1-.09.12-.06h.13l.11,0,0-.08,0-.11,0-.07,0-.1,0-.14v-.13l.05-.07v0l-.08.06-.06,0,0-.05.11-.12.06-.19,0-.08.15-.11,0,0,.12-.08.18-.18.07,0,.36.11h.12l0,0h-.06l-.07,0,0,.07.05.07,0,0,0,0,0-.13.07-.14,0-.15,0,0,.08,0,.14,0,.1,0h.11l.34,0,.54-.39.26-.08.15-.08.11-.16,0-.12.08-.05h.08l0,0v0l.19-.1h.2l.22.09.1.16v.11l-.13.12,0,0ZM1958,173.1l0,0,0,0v0l0,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CR"
                                    d="M1952.94,165.36l0,0,0,.06v.07l.12.26.09.14.2.25.09,0,.15.2,0,0,0,.06.16.05,0,0v0l0,0,0,0h0l-.07,0-.08,0,0,0v0l0,0h0v.38h.06l.09.06,0,0v0h0l-.07,0-.06.05,0,.06.05.1v.17l-.13.07,0,0v0l.07.06,0,0,0,.06V168l-.06-.1-.09-.1-.07-.06v-.14l0-.08-.11-.07-.1-.05h-.07l0,.08.11.11v.09h-.08l-.07,0H1953l-.06,0-.12-.12.09-.11,0-.07v-.14l0-.07-.09-.11-.15-.12-.2-.09-.1-.08-.24-.06-.09,0-.07-.07v-.05l0-.08-.06-.11-.29-.2-.16-.07,0,0h0l0,.14.07.08.18.08,0,.05,0,.06-.11.11,0,0,0,.06,0,0,0,0-.14-.17-.29-.09,0-.05-.11-.16,0-.15,0-.1.12-.16,0-.06v-.1l0-.05-.11,0-.07-.05,0,0,.12-.06v-.07h0l0,0h0l0-.06,0,0h0l0,0,.16.06.17.06.25.09.1-.06.09,0h.06l.14.06h.13l.08.07.05.06v0l0,0h.07l.16,0h.1l.09,0,.05-.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CU"
                                    d="M1954.6,153.6l.24,0h.2l.09,0v0l.09.07h0l.13,0h.33l0,0,.06.06.08,0,.09,0h.27l.1.06h0l.09,0,0,.06.16.08.12.17.09.07.09.06.07,0,.09,0h.32l.05,0h.09l.5.25.16.14.09.07.22.1.08,0h0v0l-.07-.06v0l.08,0,.15.11,0,0,.07,0,.07,0,0,.05h-.06l-.11,0,.08.08,0,0h0l.06-.06,0-.05.16.13.08.05,0,0v0l.09,0h0l0,0,0,.06h.18l.18,0,.17.1.16,0h.16l.08.05,0,.06,0,0,0,.05.06.06-.14,0V156l0,0,.07,0,.11,0h.29l.23,0,.08,0,.13.08.07.05.14.13.11,0,.11,0h.07l0,0,0,.06v.06l-.06,0,0,0h-.15l-.21,0-.2.05-.09,0,0,0-.1,0v-.05l0,0,0,0,0,0-.06,0h-.24l-.1,0-.1,0-.36,0h-.09l-.24,0-.24,0h-.11l-.1,0h-.19l-.24,0h-.23l.15-.22.32-.22.05,0,0-.06v0l0,0-.07-.07,0,0,0,0-.11,0-.11,0h-.11l-.25,0h-.13L1958,156l-.18-.16-.08-.05,0,0,0,0,0-.24,0-.12-.06-.1-.08-.08-.09,0-.34.06H1957l-.07,0-.51-.15-.21-.09-.09,0-.07-.06-.08-.1-.08-.09v0l0,0h-.42l-.07,0,0,0,0,0,0-.07,0-.06v.06l0,.06-.06,0H1955l-.07-.08-.35,0h0l-.11-.08-.1-.09.09,0,.2,0,0,0,0,0,0-.05,0,0,0,0h-.87l0,0-.06.06-.14.08-.09.09,0,0,0,0-.09,0-.08.08-.1,0,0,0H1953l0,0h-.23l0,0,0,.06,0,.11,0,0h-.1l-.1,0-.19.11h0v-.15H1952l-.06,0-.09.06h-.05l0,0v0l.31-.14h.15l0,0,0-.18,0-.12.07-.1.15-.14.07,0,.73-.3h.07l.48-.06.07,0,.22-.08.23,0,.24,0Zm2.3.49v0l-.16-.07-.07-.08,0,0h0l.19.13Zm.66.11.13,0,0,0h.09l.06.08h-.24l-.08,0,0,0,0,0,.06,0Zm.56.27,0,0,0,0-.07,0,0-.05,0,0v0h.11l0,0,0,.08,0,0Zm.13.16h0l-.09,0,0,0,0,0v0h0l0,.06.07,0h0l0,.06,0,0Zm.2.17,0,0,0,0h0l0,0-.07,0v-.05h.13l.13,0v.06Zm-4.52.37-.08.06-.18.07h-.1l-.1,0-.07-.07,0-.06v0l.07,0,0,0,0,0,0,0-.1-.19v0l.08-.11.22,0,0,0,0,.07,0,0,.06.15Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CV"
                                    d="M2006.87,159.67l-.09,0h0v-.08l0,0v0l.21-.1.07,0,0,.08,0,0-.14.1Zm.26.12-.08,0h0l-.06,0,0,0,.07,0h0l0,.07v0Zm1.84.15,0,.05,0-.07,0,0v-.1l0,0h0v.17Zm-1.1,0,0,0,0,0h-.06l-.14,0,0,0,0,.08-.07-.12v0h0l.1,0,.17,0Zm1.07.37h.16l.05,0v.05l0,.07-.11.06H2009l-.06-.05,0-.1Zm-.48,1.17-.06.08h-.12l-.06,0-.08-.11v-.08l0-.08v-.08h0v.05l.11.1,0,0,.09.13Zm.24-.13h0l0,0v-.08l0-.06h.07l0,.05v.1l-.06,0Zm-1,.27-.07,0,0,0,0,0,0,0,0-.05.09,0,.06,0,0,.08v.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CW"
                                    d="M1966.67,164.3h-.05l-.17-.09-.15-.15V164h0l0,0,.06.11.17.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CX"
                                    d="M2127.59,185.1l0,.06-.05,0-.06,0v-.05h.07l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CY"
                                    d="M2061.87,140.46l-.48.34,0,.11,0,.07.06.08,0,0,0,.07h-.33l-.17.18-.09.06-.11,0-.11,0h-.06l0,0,0,0v0l0,0h-.06l0-.07-.05,0-.1,0h-.06l-.17-.06,0,0,0-.06-.09-.19,0-.15.09,0,.07-.05.08-.07.09,0h.11l.1,0,0-.11v-.13l.17,0,.17,0h.14l.14,0,.42-.13.12-.08.07,0,.13-.07.13,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="CZ"
                                    d="M2043.74,121.05h.08l.08,0v-.19l.12,0,.12,0,0,.11,0,0,0,.05,0,0h.06l.17.06h.08l.08,0,.07,0h0l0,0,0,0,.06,0,.2,0,.07.05,0,0h0l0,.05v0l0,0-.07,0,0,0,0,0,0,0,.06,0h0v0l.13.14.1.19,0,0h0l0,0,0-.05,0,0,.05,0,.09,0v0l-.07-.13,0-.09v0h.09l.16.06.24.18h0l.08,0,.09,0,.05,0h0l0,.1,0,.05-.11.06v0l0,0,.05,0,.06.06,0,.07,0,0,0,0,.1,0,0,0v0h0l0,0v0l.1,0,.06,0,0,0,0,0,.16,0,0,0,0,.06v0l0,.09.2.2,0,.11v0h0l-.06,0h-.14l0,0-.06.06,0,0,0,0,0,0-.19.12,0,0,0,.06v.09l0,.08,0,0-.1,0,0,0,0,0,0,.06-.07,0-.12.07-.13,0-.18,0-.1,0,0,0-.07.08-.07.15,0,.11,0,0,0-.12h-.11l0,0-.11-.07-.05,0h-.06l-.06,0,0,0H2045l-.15,0-.21-.15h-.12l-.09,0-.18-.1-.09,0,0,0-.05,0h0l0,0-.06,0h-.07l0,0,0,.22,0,.08h-.09l0,0-.07.11,0,.1-.13,0-.06,0h0l-.06.06h-.16l-.13,0-.06-.12-.06,0-.07,0h0l0-.07-.08-.08-.12-.12h-.1l0,0v0l0-.08,0-.05-.06,0-.08-.07-.11-.14-.1-.1h-.09l-.06,0-.06-.07,0-.06-.07-.16-.05-.1,0,0,0,0,0,0,0-.08,0,0,0,0v-.06l0-.09-.07-.06-.1-.06-.06-.08,0-.07v0l0-.06,0-.07v-.07h0l0,0,0,.06,0,.09,0,0,0-.1.09-.11.09-.06h.08l.06,0,0,0h.1l.07,0,0,0,0-.06,0,0,.15,0,0-.1h.06l0,0h0l0,0,0,0,0-.11,0,0h.14l.18-.07.09-.06.09,0,.1,0,.15-.06v0l-.07-.06,0,0,0,0,0,0h0l0,0,.13,0,0,0v.06l0,0h0v.09l0,0,.06,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="DE"
                                    d="M2037.74,115.06l0,0v-.23l.1-.24h.05l-.05.07v0l0,.09v0l.23,0,0,0-.23,0,0,.09Zm1.32-.06v0l.13,0,.06.07.06.1v.15l-.08.11-.07.07.26,0,0,.06,0,.07.14,0,.34.19.21-.09h0l0,.16-.06.15-.18.17,0,.1.06,0,.17,0,.28.11.05,0,.22-.23.09,0,.29,0,0-.09.12-.09.08-.1.18-.19.19,0,.11,0,.12,0,.11.2.27.23.26,0,.09.21,0,.26.08.08.07,0,.2.06h0v.16l0,.11.11.42v.13l0,.14-.07.12-.09.07-.05.08V118l.12.15.24.21.1.17,0,.15v.18l0,0,.06,0,0,.07,0,.08v.06l0,0v0l0,.06,0,.11v.08l-.07.11,0,.09,0,.11,0,.05,0,0,0,.12v0l.17.09,0,0v.08l.06.18,0,.24,0,.12-.09.2v0l0,0h0l-.06,0,0,0V121h0l0,0v-.06l0,0-.13,0,0,0h0l0,0,0,0,0,0,.07.06v0l-.15.06-.1,0-.09,0-.09.06-.18.07h-.13l0,0,0,.11,0,0h0l0,0,0,0,0,0h-.07l0,.1-.15,0,0,0,0,.06,0,0-.07,0h-.09l-.06,0-.06,0h-.08l-.09.07-.09.11,0,.1,0,0-.05-.09,0-.06,0,0h0v.06l0,.08,0,.06v0l0,.07.07.08.1.06.06.06,0,.09v.06l0,0,0,0-.06.08,0,0,0,0,0,0,.05.1.07.16,0,.06.06.07.06,0h.1l.09.1.11.14.08.07.06,0,.05.05,0,.08v0l0,0h.1l.13.12.07.08,0,.07v.25l-.06.07h0l-.18-.08h0l0,.24,0,0-.05,0-.1,0-.07,0,0,0-.17.09-.08.06-.05.08v0l.08.13.1.13v.11l0,.08v0h.08l0,0,0,.06v.1l0,.1v0h0l-.08,0-.06,0,0,0v0l0,0,0,0-.08,0-.08,0-.06,0h0l0,0-.06,0-.09,0-.06,0h0v.09l0,0-.43,0-.13,0-.1.06-.07,0,0,0-.07,0-.08,0,0,0-.05,0-.08,0h-.06l0,0,0-.06,0,0v0H2040l-.08,0h-.21l0,.17,0,.07-.06.07-.06,0h0V126h-.1l0,0v-.07l0,0-.06,0-.12-.06-.09,0,0,0-.06,0h-.11l-.16-.1-.16-.1h0l-.23,0h0l0-.06,0,0h0v0h0l-.1-.09h-.1l-.07,0,0,.06v0h.14v0h-.08l0,0h0l-.08,0h-.11l-.1,0-.16,0h-.21l-.07,0,0,0,0-.09v-.14l0-.18v-.13l0-.08,0-.13.08-.17.06-.18,0-.19,0-.13.08-.08.19-.25v-.14h0l-.08,0-.18,0-.18,0-.08,0-.06-.09h0l-.08,0-.11,0-.07,0h-.05l0,0v0l0-.08,0,0-.06,0h0l0,0,0,0h0l-.12-.18,0,0v0l0-.07-.07-.07-.07,0h0V123l0-.12,0-.06,0-.06,0,0v-.13h0l-.1,0-.07,0,0-.06-.06-.08,0-.09v-.15l0-.14.17-.12,0-.12v-.07l0,0-.09,0,0,0v0l.06-.07-.07-.06,0-.06-.11-.08v0l.05-.23,0-.06,0,0h0l0,0v-.06h.07l0,0,.16-.13v0h0v-.06l.08-.2,0-.08v-.11l0-.09,0-.08v0l0,0-.09-.16v-.06l0,0,.08,0,0,0h0l.12,0,0,0h0l0,0h.08l.21-.09,0,0,0,0v0l-.09-.09v-.06l0,0,0,0,.05,0,.12-.1,0-.09v-.17l0-.06,0,0h-.13l-.07,0,0,0v-.05l0,0v-.1l0,0h.24l0,0v-.14l.07-.22,0-.12v-.49l0-.07-.09-.07,0-.16,0-.12.09-.15.07,0,.32,0h.35l.14.23,0,.12.08,0,0,0,0-.1,0-.11,0,0,.11.09,0,.06v.18l0-.25,0-.18,0-.17,0-.09,0-.06.26.07.28,0,.11.07.24.33.08.06h.11l-.15-.07-.29-.4-.09,0-.13,0-.09,0,0-.07,0,0v-.41l0-.06-.07,0,0,0h-.09v-.1l0-.07.17,0,.11-.07v-.11l-.07-.09-.08-.16-.1-.15v-.18h.21l.26.08.07.06h.08l.14,0,.11,0,0,0h.07Zm-1.06.18,0,0h-.09l-.05,0v0l.05,0h0l.06,0v.05Zm4.73.53,0,.1,0,.06-.1-.09h-.1l-.07.14h0l-.16-.12,0-.07v0l0-.17v-.06l0-.06v-.09l.09-.09h.08l0,.08,0,.06.14.06,0,0v0l-.06.08,0,0,0,.06.1.07Zm-2.24-.06h-.14l-.06-.06,0,0,0-.07,0,0,.14,0,0,.1v0Zm2.7.74v.12h0l-.11,0-.12,0,0-.1,0-.09,0-.06-.05,0v-.11l.2.14Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="DJ"
                                    d="M2070,164.82l-.08.13-.1.16-.12.18h-.13l0,0-.08,0h-.09l-.08,0-.15,0-.13,0-.1,0-.09,0h-.08l-.07,0v-.2l0-.21v-.16l0-.09,0,0,.12-.12,0-.06.15-.2.12-.18.09-.14,0,0,0,0h0l.18.13h0l.06,0,0-.14,0,0h0l.12,0,.1,0v0l.16.19.05.09,0,.16,0,.1,0,.06-.06,0-.21.13-.23.09-.14.16h-.11l0,.07h.1l.13-.05.11,0h.12l.11,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="DK"
                                    d="M2039.06,115H2039l0,0-.11,0-.14,0h-.08l-.07-.06-.26-.08h-.21v-.13l0-.1-.06-.14.09,0,0-.28,0-.14-.25-.15-.2-.15.05-.49,0-.13-.08-.26v-.3l0-.48.06,0h0l.18.08h.07l0,.08.06,0,0-.08,0-.14.14-.18.1-.07.06,0,.07.07,0,.08,0-.18,0-.34-.14,0-.1,0-.11.22-.1.27-.15,0-.13.08-.11-.08-.07-.07v-.17l.13-.22.18-.22h.18l.13-.07h.32l.12,0,.11-.1.24-.42.14-.18.27-.06.26-.2h.07l-.12.16,0,.06v.08l.08.2,0,.12V111l-.08.12-.09.26,0,0v.64l.09.11.1.06h.32l0,0,0,.09,0,.14,0,.1-.09.09-.12.07h-.08l-.1-.13,0,0-.05.07-.09.34,0,.23,0,0,0,0h-.08l-.1.06,0,0,.06.08,0,0-.09,0-.08.09,0,.07-.11.08-.06.11,0,.13v.11l0,.12,0,.1-.13.15,0,.12h.11l.07,0,0,0,0,0,0,.07,0,.16Zm1.21-4,0,0-.13-.05.06-.08.14,0h.08l-.09.08,0,0Zm1.4,2.45v.17l0,0,0,0-.1,0-.08,0-.07.09,0,.11.05.09.1,0,0,.16-.08.08-.22.08,0,.19V115l-.18.07-.11-.23v-.09l0-.11v-.09l0-.15-.16,0h-.07l-.09,0,0,0-.11-.2,0-.22-.05-.11v-.11l0,0,0,0,0-.12.06,0,.16,0h0l0,0,.13-.2v-.11l.15,0,.06.08v.29l.09,0h0l0-.12,0-.06,0,0v-.11l0-.07,0,0,.16-.14.16-.11h.1l.09,0,.09,0,0,0,0,.05-.06.13,0,.06,0,.22Zm-1.81,0v0l-.06,0v-.1l0-.1,0-.08,0-.06.08.13,0,.06,0,.07Zm1.9.31-.08.07h0l0-.09,0-.06,0,0h0l0,.06v.08Zm-1.86,0,0,.08,0,.18.07.21,0,.08,0,.11,0,.11-.15.13h-.17l-.17-.07-.25-.12,0-.07,0,0-.07-.21v-.26l.12,0,.27-.12.06,0,.07.06h.07l.11-.09Zm4.1,1,0,0-.15,0-.19-.11,0-.22,0-.09.34.24v.09l0,.11Zm-4,.43h0l-.06-.13v0l.06-.08,0-.1.1-.14.07-.17h0l0,.15-.14.42,0,.08Zm-.62-.21-.1,0,0,0-.09,0,0-.24v0l.05,0,.15.12.06.12v0Zm2.3-.13,0,0h-.14l-.16.11-.06,0,0-.07,0,0,0,0,0,0v-.07l0,0h.1l0,0,0,0,0,0Zm-1.91.19h-.06l-.07,0-.12-.13v0l.06,0,.07.06.07,0,.08.06,0,0Zm.81-.07.16.1h.11l.08,0,0,.07v.14l-.08,0-.08,0-.12.06-.39-.23v-.27l.19,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="DM"
                                    d="M1973.56,161.29l-.09,0,0-.17-.06-.11v-.11l.13.05,0,.05,0,.15Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="DO"
                                    d="M1963.89,158.62v-.16l0-.07,0-.06-.1-.08-.06-.09-.06-.08h.13l0,0,.07-.08,0-.07v0l-.05-.06,0-.07.06,0,.08-.09v-.06l-.09-.09v0l0-.09v-.06l0-.2,0,0,0,0,0-.05,0-.06,0,0,0,0h.11l.15.05h0l.14,0,.12,0,.11,0,0,0,.09.06,0,0h.19l.12.09.1,0h.06l.11,0h0l.06.08v.11l0,.1.08.07.38,0,.09.06,0,0-.06,0h-.26v.08h.1l.11,0,.1,0,.11,0,.12,0,.12,0,.2.08.22.19.06,0,0,.06,0,.07-.08.11,0,0-.07,0,0,.05,0,.08h-.06l0,0,0-.07-.11-.07h-.12l-.19,0-.11,0H1966l-.11,0h-.12l-.11,0-.12.05,0,0-.07.07,0,0-.27,0-.08,0-.07-.07h-.11l-.15.05-.1,0,0,0v.12l0,.06-.15.21-.08.15,0,.05h0l-.07-.09,0,0-.06,0,0,0v-.13l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="DZ"
                                    d="M2038,138.93l0,.07v.05l-.08.06-.06,0-.07.14-.13.1,0,0v0l.09.05,0,0v.06l0,.2,0,.16,0,.2v.08l0,.09,0,.08v.28l0,.12,0,.1-.07.14,0,.12,0,.16v.11l0,.1-.07.09-.07.06-.09,0-.1.06-.08.17-.18.15,0,0,0,.11v.16l0,.13.09.19.07.2,0,.1,0,0,.11.07.18.09,0,0,.09.14.09.25,0,.17.16.13.16.12.15.11.16.11,0,0,.06.24,0,.24.06.27.06.27.07.31,0,.18,0,.21.06.25-.09.06-.1.07.07.12.15.21.08.17,0,.08.07.2,0,.21,0,.06,0,.16,0,.42,0,.54.06.27-.09.24-.07.23v.11l0,.18,0,.14.06.07v.22l0,.08-.16.12-.17.1,0,.09,0,.1,0,.09.12.18.18.27.21.3v.28l.08.26.1.12,0,.08.06.07.07,0h0l.23-.08.39.12.36.12,0,0,.08.15.13.25.1.2.09.17-.48.31-.48.3-.47.31-.48.3-.48.3-.48.3-.47.3-.48.3-.32.2-.2.18-.25.22-.24.21-.19.18-.24.22-.12.11-.28.24-.08.05-.36.07-.33.07-.3.06-.21,0-.2,0-.29.06-.21,0-.23,0h-.1l-.07,0-.07-.06,0,0v-.05l0-.06,0,0,0,0,0,0,0,0v0l0-.06,0-.09v-.22l-.07-.06-.13-.06-.12,0h0l-.13,0-.18,0-.06,0-.12-.14,0,0-.27,0-.09,0-.07,0-.06,0,0-.08v-.07l0,0-.3-.15-.07-.05,0-.05v-.28l-.14-.1-.3-.21-.3-.21-.3-.21-.31-.21-.3-.21-.3-.22-.3-.21-.3-.21-.31-.22-.3-.21-.3-.21-.3-.22-.3-.21-.31-.22-.3-.21-.3-.22-.26-.18-.28-.19-.21-.15-.2-.14-.23-.15-.14-.09-.18-.11-.17-.12-.17-.11-.18-.11-.17-.12-.17-.11-.18-.11-.17-.12-.17-.11-.18-.11-.17-.12-.17-.11-.18-.11-.17-.12-.17-.11-.18-.11v-1.49l.1-.05.14-.12.06,0,.07-.06.24-.16,0,0,.24-.19.06,0,.13,0,0,0,.07-.07.11-.08.07,0h.06l.22,0,.09,0h.15l0,0,0-.06v-.16h.45l.21,0,.17-.06.14,0,.14-.1.1-.12.11-.17.09-.15.17-.09.15-.06.08,0,.19-.08.16-.11.16-.12h.11l.15,0,0,0,0,0v-.07l0-.05,0,0,0,0h0l0,0v-.12l0-.06V145l0-.08v-.11l0,0,.06,0h.15l.15,0,.39-.14,0,0,0-.1,0-.08,0,0h0l.13,0,.18,0h1.15l0,0v-.06l0-.12,0-.07.07-.07.09-.07,0-.09-.07-.06-.1-.08-.06,0-.09-.09,0-.1,0-.21-.07-.12,0-.15,0-.27-.07-.17v-.16l0-.14v-.21l-.08-.21,0-.07v-.07l-.07-.07,0-.06v0l0-.08v0l-.11-.09-.19-.15-.06-.07,0-.08.19,0h.1l.22-.1.17-.14.14-.07.12-.14.11-.1.15-.1.46-.22h.07l.15.05.13,0,.09-.07.09-.19.15-.11.19-.11.25-.11.17-.1.26-.09.66,0,.34-.05h.23l.24-.16.11,0h.51l.24-.12h.9l.11,0,.11.06.18.15.1,0,.11,0,.28-.14.31-.07.17-.09.08-.12.14-.05.09.1.32.09.2,0,.09,0,0-.14.21,0,.16.07.17.14.11,0,.2-.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="EC"
                                    d="M1960.65,175.53l-.06,0h-.12l-.1,0h0v0l.06,0,.07,0,0,.06,0,.08.09.09.06.05v0l0,.06v.05l0,.22h-.09l0,0h0v0l0,.1-.06.22,0,.2-.06.07-.1.11-.13.15-.19.22-.14.1-.11.09-.13.09-.16.12-.19.06-.26.1-.18.06-.13.05-.15,0-.18.06-.07.06-.12.15-.06.07,0,.06v0h0l0,0v0l0,0h0v0l0,0h-.06v0l0,.15v.08l0,0v.06l0,.06,0,.06,0,0,0,0v0l0,.11,0,.08,0,.07v.06l0,0v0l0,0v0l0,0-.11.07,0,0v.13l0,0,0,0,0,.06,0,0-.1,0H1957l-.06,0-.06-.08,0-.07,0-.09,0-.12,0,0-.06-.05-.07,0h-.08l0,0-.11-.06-.09,0-.07,0h-.06l0,0,0,.06-.09,0h0l-.06,0v0l0-.06.08-.11h-.09l0,0v-.15l.05,0,.08,0h0l0,0,0,0,0,0v0l0-.08v0l0,0v-.09l0,0v-.05l0,0v-.06l0,0,0,0h0l.13-.05,0,0,.07,0,.06-.07,0-.06.09-.29.08-.18v-.09l-.07-.11,0-.18v-.09l0,.07,0,.26-.05.11,0,0,0,0,0-.19,0,0-.07.12-.11.1v0l0,0-.08,0-.07,0-.22-.21-.14,0-.08-.07,0,0v0l.08,0,.09-.06v-.23l-.07-.18,0-.23,0-.09-.08-.18.06-.1.2-.07.06-.05,0-.15.05-.09.08,0h.07l-.09,0-.08-.13v-.07l.15-.18.08-.05.09-.1.08-.15,0-.23,0-.17,0-.17,0-.05.12,0,.1-.06,0-.05h.12l.14-.08.22-.05.3-.09.07-.08,0-.15,0,0,.09.07,0,.07.09,0,.07,0,.18.14.12.07.13.06.2.07h.11l0,.05,0,0,0,0,.07,0h.05l0,.2,0,0,.09,0h.17l.1.06.07,0,.09,0h.08v0h0l.07,0h.1l.06,0v-.11l0,0,.07,0h0l.19.09,0,0,0,.06.08.09.1.05.15,0,.14.09.17.07Zm-3.35-1.25h0l0,0,.06-.05h0Zm-11.4,1.12.06.06,0,.17.18.18,0,.1,0,.05h0l.09.07.06.08-.1.17-.21.07h-.22l0,0,0-.07,0-.05,0-.06.11-.08.18-.08,0-.06-.07-.06,0-.11-.11-.08,0-.24h0l-.08,0,0,0h0l.08-.06,0,0,.12,0,0,0,0,.07Zm.64.33,0,0-.17,0-.06,0,0-.08,0,0,.11,0,.1.08,0,0Zm-.78.12-.09,0-.08,0,0,0v-.1l.18,0,0,.06v.09Zm1,.28h0l-.15-.09V176l.06-.06.19,0,.07.06v.1l-.07.08h-.07Zm.85.13-.11,0,0,0,0,0v0l.06-.05.06,0,.06-.06.09,0h0v0l0,.05,0,0Zm-.93.4h0l-.06,0,0-.07h0l0,0v0l0,0Zm9.5,1.49,0,0h-.09l0,0v0l0-.13,0-.05.07,0,.06,0h.08l.08.05-.1.08h0l0,0,0,.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="EG"
                                    d="M2061.62,145.17l0,0,0,.09.07.23.07.18.08.24,0,.1v.06l.12.27.07.23.05.18.07.26,0,.09-.05.05-.1.17-.11.54-.16.41,0,.27,0,.09-.08.13-.09.13-.16-.07-.26-.22-.15-.22-.17-.14-.15-.19-.05-.13v-.09l-.07-.21,0-.1-.19-.22-.06-.12,0-.05,0-.08-.07-.29-.07-.19-.09.06,0,.07-.08.11,0,.13,0,.1.16.16,0,.06,0,.15v.2l0,.07.12.15,0,.08,0,.08,0,.07.12.13.16.24.16.16.11.08.05.08v.3l.1.19,0,.09.1.07,0,.09,0,.14.06.41.09.1.25.54.22.34.11.25.16.31.31.67.19.21.07.11.14.09.14.13h-.17l0,0,0,.08v.4l0,.17.13.32.09.1,0,.06.06.05.3.11.17.23.38.3,0,.08v0h-5l0-.09,0-.06,0-.05H2059l0,0-.09.18h-5.79V147.4l-.05-.16,0-.21-.05-.25v-.08l-.09-.26v-.08l0-.05.14-.22,0-.11,0-.12v-.11l0-.16,0-.14,0-.15v-.15l.07-.1.09-.09,0-.06,0-.06,0,0,.07.13.14,0,.47-.11.52.11.29,0,.44.1.27.17.08,0h.19l.13.11.5.05.27.11.15.1.09,0h.09l.1,0,.14-.06.15-.09.32-.23.11,0h.16l0-.07.05,0,0,0,0-.06.17,0,.32-.1,0,0-.3.11.13,0,.13,0,.14,0,0-.05,0-.09,0,0,.1,0,.31.14h.07l.22-.07,0,0,.07,0,.16.18h-.06l-.16-.15,0,.08-.1.13.12.05.1,0,.06.07,0,.06.1,0,.06-.08,0-.05,0-.05h0l.06,0,.2.16.06,0h.08l.15,0h0l.21-.06,0,0,0,0,.17,0h.26l.22-.05.25-.13Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="EE"
                                    d="M2055.92,107.08l0,.06.06.09v0l0,0-.06,0v0l0,0h-.07l0,0,0,.15-.09.25-.12.19-.1.11-.05.08,0,.09v.1l.09.53v.09l0,.1,0,.1,0,.08.06.15.07.21,0,.14.05,0,0,0v0l0,0-.2.07,0,.07,0,.06-.09.1,0,.1,0,.1v0h0l-.12,0-.15-.06-.06-.06h-.06l-.07,0-.27.1-.06,0-.15-.09-.08-.11-.17-.21,0,0,0,0-.18,0-.07-.08h-.05l-.08,0-.22-.17,0,0v.09h0l0-.06-.06,0-.18.1-.07,0h-.06l-.29.14-.09.07h0v-.07l.12-.34,0-.27.05,0v0l0-.09-.12-.06h0l-.05.09-.05.07-.11,0-.1-.07-.22-.09-.06-.13v-.13l-.12-.12,0-.15,0-.1.11-.07,0-.06h-.16v0l-.06-.18,0-.07,0-.07-.05-.06,0-.07,0-.07,0-.16.13-.08.13-.06.28,0,0-.14h.11l.19-.18.18,0,.27-.12h.53l.07-.07v-.15l.1,0h.16l.61.15h.16l.21.15.11,0h.33l.52.07.1-.1v0Zm-4.7,1.18-.07.09-.05,0,0,0-.1.2-.11,0-.06,0v-.08l-.06-.19-.09-.06h-.14l-.1-.08.38-.06,0-.09.07-.1h.06l.05,0v.11l.17,0,.07.13,0,.15Zm.39.49-.08,0-.18-.12,0-.09.06,0,.15,0,0,.13v0Zm-.67-.12.07,0h.06l.06,0,.13,0,.3.21,0,.06-.18,0,0,.06,0,0h0l-.09.09-.12.09,0,.06h-.22l-.12,0-.09.1,0,.19-.07.15-.07,0h-.07l0-.06v0l.15-.21,0-.07-.08,0-.07-.07-.14-.09,0-.07h0l0,0,0-.06,0-.07-.12-.19.06,0h.07l.08,0,.08-.06h0l.06,0,.05-.13.14,0,.07,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="EH"
                                    d="M2022.07,149.42v1.32H2019v2.55l0,0-.14,0-.13.06-.17,0-.06,0-.11.08-.14.1-.13.09-.08.11,0,.07v.13l0,.13v1.21h-3.65l0,.19,0,.13,0,.11,0,.09,0-.05.08-.51v-.05l.07-.47.12-.26.1-.11.16-.06.14-.26,0-.24.1-.11,0-.08,0-.07.09-.13.11-.2.05-.12.12-.2,0,0v-.05l0,0-.06.07-.06.06,0-.07.05-.1.11-.11.18-.12.36-.41.14-.07.12-.18.05-.15v-.35l0-.19.08-.14.09-.27.08-.12,0-.24.06-.09.09,0,.13-.12.2-.07.24-.16.11-.1.07-.14.08-.28.14-.3.08-.22h4.14v.39Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ER"
                                    d="M2069.85,163.69l-.1,0-.12,0h0l0,0,0,.14-.06,0h0l-.18-.13h0l0,0,0,0-.09-.1,0-.09-.09-.1-.08,0-.09-.06-.08-.13-.09-.15-.13-.12-.24-.18-.22-.22-.17-.23-.11-.12-.05,0-.22-.07-.16-.11-.12-.09-.08,0h-.22l-.13-.05h-.06l-.08,0-.07,0-.08,0-.16,0h-.07l0-.06,0,0-.06,0h0l0,0-.17.09-.29.06h-.06l-.05,0-.15-.17,0,0h0l-.07,0-.06,0-.05-.07-.06,0-.06.14-.1.24-.06.13-.07.16h-.06l-.14-.2-.09-.08h-.06l-.05,0,0,.06,0,0h-.11l-.12,0h-.12l-.13,0h0l0-.27,0-.19,0-.19,0-.18.08-.11,0-.11.11-.35,0-.07.08-.18v-.06l.09-.23v-.16l0-.15.05-.1,0-.07v-.07l0-.14v0h.05l.1,0,.07,0h.15l0-.05.06-.17,0,0h0l.07,0,.06,0,.06,0h.07l.06,0,0,0,.07,0h.07l0,0h.07l0,0v0l0,0,.06,0,0,0v-.06l0-.05.09-.11.08-.06.28.56.11.32.1.35.08.51.07.26.11.13.08.24h.06l.05.06.08.23.06.09,0-.08v0l0-.07,0-.09,0,0,.1.07.06.06,0,.11,0,.06.11.13.09,0h.12l.11,0,.08,0,.15.14.35.11.28.36.16.25.54.37.1.18.05.17h.11l.19.2.06.14.16.05,0-.08.07.07,0,.11Zm-2.81-3.2,0,.1-.09,0v0l0,0v0Zm.06.37,0,0h0l0,0v0l.15.07v0h-.09l-.1,0h-.09l-.11,0,0-.08.08,0h0l-.05,0h-.07v0h0l0,0,0-.06h.08l0,0,0,0v.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ES"
                                    d="M2028.43,131.15v0l0,.06,0,0,.08,0h.14l.06,0v.11l0,.06,0,0v0l0,0h.06v0l0,0h0v0l0,0,.1,0,.22.09h.16l0,0,.14.14h.17l.06,0h0l0,0,0,0,.06,0,.06.06,0,0,.23,0,0,0h.11l.13,0h.1v-.14l0,0h.09l.22.08.1,0,.09,0h.07l.06,0,.07.11v.17l0,0h.08l0,0,.09-.05h0l.15.06.06,0,0,0,0,0h0l.06,0,.09-.05.16,0,.18.06h.08v-.06l0,0h0l.06,0,.07,0h.07l.08,0,.09,0h0l0,.08,0,0,0,.07-.08,0h0v.12l0,0,0,0V133l-.1.1-.13.11-.64.37-.15.18-.06,0-.47.12-.34.11-.16.05-.2.21-.09.08.08,0,.08.1,0,0-.12.07-.06,0h-.06l-.21.36-.19.25-.11.11-.11.17-.23.43V136l.11.42.07.11.09.09.17.08,0,.08-.06.07-.18.13-.3.18-.13.13,0,.14-.08.06,0,.18,0,.13v0l-.06.09V138l.1.09-.05,0,0,0h-.1l-.36,0-.29.2-.14.17-.14.34-.15.19-.07,0-.11-.09h-.14l-.13,0-.07.06-.11,0-.1,0-.23,0h-.1l-.16.06-.14,0-.23,0-.49.05-.07,0-.06.08-.16.14h-.24l-.22.09,0,.06-.09.16,0,.11h0l0,0h0v.09l-.09,0-.07,0-.16-.07-.14-.11h-.08l-.12-.16-.05-.11,0-.11v-.08l-.1-.05,0-.11.08-.13.06-.06,0,0h-.1l-.07.09-.08-.14-.37-.28,0-.06v0l-.06.08,0,0-.18,0-.22,0,0-.29,0-.11v-.07l.06-.17.06-.07.08-.14.1-.11.1,0,0,0,0-.09,0-.07h0l-.12,0-.22-.33v0l0-.08v-.17l.06-.07.08-.06.08-.1,0-.09v-.08l0-.06-.12,0-.12-.24,0-.15h0l-.07-.07-.08-.13v0l.08,0h.31l.06,0h0l.06-.11.06-.16v-.15l-.11-.1v-.08l.07-.05.08-.06,0,0v0l0,0v0l0-.05v-.16l0,0,0-.15,0-.13-.07-.16,0,0,0,0,.09-.06.08-.13.12-.11.15-.08.1-.1,0-.08,0,0v0l0,0-.06-.05-.08,0h-.14l0,0v-.21l0,0,0,0h-.08l-.07,0h0l0,0h-.15l-.06,0,0,0h0v.1l0,0-.13,0h-.1l-.09,0,0,0h0l-.19,0,0,0-.07,0-.09,0h-.08v0l0-.07v0l.08-.11v0l0,0,0,0v0h0l0,0-.2,0,0,0-.09.06-.08.08-.07,0,0,0v-.19l.1-.13.08-.08,0,0H2022v-.07l0,0,0-.06,0,0,0,0v-.22l-.17.07h0v-.08l.09-.13v0l-.11,0-.07-.07-.05-.06,0-.08v-.07l0-.18.07-.05.07,0,.14-.12.19,0,.12,0,.11-.06.06,0,.1,0V131l0-.06,0,0,.11-.06.12-.09h.14l.14-.07.1,0h.08l.1.05.13.13.18.05.15,0h.26l.13,0,.23,0h.14l.21-.06.17.08.32,0,.19.07.54.11h.19l.28-.06.12-.05.1,0,.16-.05h.07l.1.07.34.1.09-.08.07,0,.25,0,.25.11h.13l.19,0,.15-.07Zm5.61,4.38h0l-.28-.13-.09,0,0,0v-.1l.19,0,.15.05.08.14v0l0,.07Zm-1.06.06.09,0,.09,0h0l0,0v.07l0,.09-.06.08-.05.09,0,.11-.08.07-.07,0-.16-.08-.1,0,0,0,0-.11,0,0-.06,0,0,0-.07.06,0-.06h-.06l0,0v0l.38-.29.11-.06.23-.07h0l0,0v0l0,0v0l0,0Zm-1.57,1,0,.07-.14,0,0,0,0-.08h0v-.06l0-.05.2-.05,0,0v.06l-.12.12,0,0Zm.14.29h-.17v0l0,0,0,0,0,.07h.09v0Zm-14.12,10.8-.06.07-.07,0,0-.15,0-.05.13-.06.11,0,0-.07,0,0,0,0,0,.05,0,.15-.07,0-.15.05Zm-3.8.44h0l0-.08-.11-.2.07-.1h.12l0,.07v.06l0,0V148l0,.05-.07.08Zm3.36.34-.13.12-.12,0,0,0,.12,0,.12-.09.07-.2.11-.22,0-.09,0,0h.09l0,.05v.11l0,.18-.06.16-.25.09Zm-2-.22-.08.24-.07.09,0,0-.1,0-.13-.15-.06-.15,0-.05.06,0h.08l.18,0h0l.18-.16h.18v0l-.19.15Zm-.79.37h0l0,0-.05-.09,0-.06,0,0h0l.08,0,0,.05v0l-.08.06Zm1.65-.13v.08l0,.08v.13l-.05.06-.11.07h-.09l-.05,0-.09-.11v-.11l.08-.07,0-.09h.26Zm-2.3.35-.09.17-.11-.06,0,0,0,0h.11l.11-.09,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ET"
                                    d="M2065.53,162.07h.06l.29-.06.17-.09,0,0h0l.06,0,0,0,0,.06h.07l.16,0,.08,0,.07,0,.08,0h.06l.13.05h.22l.08,0,.12.09.16.11.22.07.05,0,.11.12.17.23.22.22.24.18.13.12.09.15.08.13.09.06.08,0,.09.1.06.09.08.09-.09.14-.12.18-.15.2,0,.06-.12.12,0,0,0,.09v.16l0,.21v.2l.07,0h.08l.09,0,.1,0,.13,0,.15,0,.08,0h.09l.08,0,0,0h.13l0,0,0,.06,0,.05-.05.06-.09.15v0l0,0,0,.07.05.12,0,.1,0,.05.07.06.09.12.05.08.11,0,0,.1.08.15.08.12.09.1.09,0h0l.19.17.15.13,0,0,.26.09.31.1.24.08.3.1.31.1.28.09.4.14.32.11.26.08,0,0h.92l-.23.22-.25.25-.27.26-.18.16-.27.27-.23.22-.24.24-.21.22-.28.31-.18.19-.28.31-.18.19h-.28l-.25,0h-.35l-.09,0h0l-.23.05,0,0-.19.08-.19.1-.11.07-.07.11,0,.08,0,0-.06,0-.4.08H2069l-.19,0-.1.1,0,.05h-.37l-.1,0h-.14l-.07,0-.05,0-.07-.06-.13-.12-.1-.08-.22.09-.2.08-.27.13-.16.09,0,.09-.12.16-.11.1h0l-.25,0-.09,0-.15,0-.2,0-.13,0h-.35l-.13,0-.13-.09-.17-.11-.17-.11-.18-.11-.21-.13-.23-.15h-.76l-.06,0,0,0-.05-.11-.07-.08-.07-.09v-.13l0-.15,0,0v-.11l0-.06-.26-.07h0l0,0-.05,0,0,0,0,0v-.07l0,0-.08-.06-.07-.09-.05-.09,0-.08,0-.17-.05-.11-.06-.13-.08-.24,0-.09-.07-.05-.07-.06-.07-.11-.19-.09-.08-.08-.12-.13,0-.07v-.06l0-.06-.07-.07-.22-.15-.06,0H2061l-.11,0-.15,0-.14-.06-.06,0v-.08l0-.08.09-.2.06-.13.05,0h.46l.16,0,.06,0,.05-.05,0,0v-.87l0-.2,0-.11,0-.07.1-.19,0-.06v0l0-.26.07-.12.08-.12.07-.06.06,0h0l.07.06.09.05h0l.06,0,.05-.05v-.09l0-.18V165l0-.13.05-.19,0-.12,0-.07.12-.13.12-.18.07-.14.13-.22.07-.08.06,0,.08,0,.15,0,.11,0,0,0v-.14l0-.17.05-.17.06-.13,0-.06,0-.05,0-.1.06-.2v-.14l.08-.25h0l.13,0h.12l.12,0h.12l0,0,0-.07.05,0h.06l.09.08.14.2,0,0h0l.07-.16.06-.13.1-.24.06-.14.06,0,.05.07.06,0,.07,0h0l0,0,.15.17Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="FI"
                                    d="M2056.8,86.63l-.07,0-.19.13-.11.08-.14.06,0,.08.24,0,0,0,0,0v.06l0,.11-.25.59V88l.08.34.12.4.35.18.25.14.17.33.28.42.14.16V90l0,.29-.18.29-.16.25-.17.29-.14.25-.14.3,0,.09v.09l0,.1.19.36.07.19.09.19.07.22,0,.19.08.18,0,.1.08.13.09.19,0,.16.14.53v.24l-.06,0-.14,0-.14.06v0l.09.13-.08.21v.3l-.09.16v.07l0,0,.17,0v.22l-.09.06-.09.09,0,.08v.07l0,.12,0,.15.08.09.27.08,0,.07,0,.1v.09l-.12.19v.07l.05.17.06.17.26.18.09.09,0,.08,0,.13v.13l0,.12-.08.15-.19.3-.19.12v0l.06.09.34.39.21.17.3.24.19.19.06.14.08.15.09.12.07.11,0,.07v.07l-.08.22-.06.17-.08.25-.1.17-.23.31-.34.39-.08.12-.16.2-.27.41-.07.08-.23.33-.1.1-.08.09-.22.3-.24.23-.23.21-.07.11-.09.08-.1.07,0,0-.23.28-.33.4h0l-.09.07h-.13l-.06,0-.2-.14h0l-.12,0-.11.1-.21,0-.11,0-.07,0v-.11l0-.14,0-.09V105h0l-.07.14,0,.16-.07.08-.16,0-.16-.13H2054l.05.09,0,.1v.06H2054l-.09.06-.08.09h0l-.06-.12-.1,0-.08.08-.18,0-.1.1-.18.07h-.1l-.23.08-.08.13-.06,0-.1,0-.29.07-.28.08h-.12l-.12,0-.13.11-.13.15-.15,0,0,0,0-.08.1-.08.07-.11v-.09l-.05,0h-.06l-.08-.1-.08-.21h0l0,.06,0,.16,0,0,0,0,0,0,0,0h-.17l0-.08v0l0-.11,0,0,0-.08h.09l0,0v0h-.06v0l.06-.14v0h-.06l-.24,0-.3-.19h-.07l0-.16-.07,0-.1.1-.08-.08-.09,0,0-.07v-.25l0-.15,0-.23,0-.17.07-.13,0-.08,0-.21v-.25l0-.09v-.05h0v0l0,0,0-.06,0,0h.07v0L2050,103v-.07l-.07-.21-.08-.2-.11-.15,0-.24.05-.22v-.1l0-.13-.15-.14,0-.21,0-.21V101l0-.11.05-.1.24-.32,0-.17h.16l-.08-.15v-.19l.24-.07.09.06.2-.07.19-.13v-.08l0-.06,0-.13,0,0,.07,0,0-.06v-.06l.07,0,.12-.18V99l.21-.07.24-.29.11-.09.1-.07.23-.29h.1l.05-.2.19-.26.06,0,.09-.24.23-.28.15-.35.08-.13,0-.13h.09l.09-.1.17-.07.18,0,.08,0h.06v-.12l-.05-.08,0-.07.09-.06V96l0-.07-.08-.1,0-.22v-.24l0-.28-.1-.15-.37-.25h-.07l-.08,0-.09-.19,0-.17v-.06h0l-.05.08-.12.1-.15-.07h-.08l-.1-.41-.05-.16-.08-.2-.14-.1,0-.06,0-.08v-.44l0-.09.06,0,.09-.17,0-.12V92.3l0-.16.05-.08,0-.07,0-.09-.06-.13-.11-.16-.07-.16,0-.14v-.25l0-.08.09-.11,0,0,0-.22-.07,0-.11,0h-.07v-.16l0-.11,0-.07v-.06l0-.19V89.7l0-.19.12-.14v-.05l-.15-.16-.11-.18,0-.1h-.13l-.08-.3-.11-.15-.11-.13-.07-.06-.39-.18-.15,0-.18-.11-.14-.14-.11-.08-.1-.11-.14-.1,0-.09-.15-.16-.07-.1-.25-.2v-.19l-.25-.15.05-.08h.2l.16.08,0,0,0-.07-.07-.27v-.07l.07-.09.11-.07h.33l.18.3.16.29.08.13.21.35.07.2,0,.14h.08l.29.07.24,0,.07.08.16,0,.13-.07.23-.09.06-.11.07-.12.13,0,.15.09.16.13.15,0,.19.09.1.12.12,0,.14-.12.08-.32.07-.14.1-.11.11,0,.09,0,.06-.08.1-.19,0-.22,0-.4,0-.13.07-.22.1-.59.05-.16.06-.11.07-.06.14-.18.2-.35.06,0,.14,0h.18l.16.06h0l.07,0,.13-.12.23-.22.14-.06h.13l.15.24.2.27.13.13.36.25.32.16.17.52-.08.21-.05.07-.15.2-.17.29v.15l.06.15.07.1Zm-3.8,9.53-.14.07-.11,0v-.14l.07-.07.12,0,.17.07,0,0-.1,0Zm-3.35,3.69v0h.05l.08-.07.05,0v.09h0v0l-.05.06v0l-.06,0-.09-.1-.06-.16h.14l0,0v0Zm.22,5.31,0,.09h-.12l-.06-.08,0-.15v0l0,0,0,.08.14.13Zm.5.36h-.07l-.1-.1v0l0,0,0-.08v0l.08.06,0,.07h0l.06.07,0,0Zm.16-.07.12,0,0,0,.05.1-.09.06v.08l0,0v.07h-.09l0-.06,0-.08-.05,0-.06,0,0,0,0-.08,0,0Zm-.31.43-.09.07,0,0v-.11l.05,0h.1l0,.11Zm-.19.06-.08,0,0,0,0,0,0-.05h.06l0,0,0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="FJ"
                                    d="M2193.44,187h-.09v0h.1Zm2.7,3.45h0l0,0h0v0Zm0,.33-.06,0v-.05l.05-.05h0l0,.05v0Zm.9.74,0,0h0l0-.05v0l-.05,0v0h0l0,0,0,0h0v0Zm.65.65h-.05l0,0,0,0h0l0,0Zm-.68,0H2197l0,0v0l0,0,.05,0v0Zm.21.25h0l-.05,0h0l.05,0h0v.05Zm-1,.68v0h0l0,0h0v0h0v-.06l0,0,0,0Zm1.17.22h0l0,0h0v0h0v0h0Zm-.17,1.46h0Zm-1.18-4.35-.14.13-.05.07,0,.07-.11.08-.06.1V191l.12-.11.13-.09,0,0h0v0l0,0,0,.08,0,.08h-.2l-.11,0h-.2l0,0,0-.05h-.11l-.13.1-.05.08h0l-.06,0-.08.06-.09,0,0-.06,0-.06,0,0h-.1V191l0,0,0,0,0,0,.05,0,0,0,.06,0h0l.06-.09.09-.06.12,0,.12,0h.12l.11-.09.07,0,.08,0,.07,0,.07,0h.06l.14-.06Zm0,.36h0v0l0,0Zm.12.14h0l-.09.08h0l-.07.09,0,.08,0,0,.07,0,0,0,.1-.07,0-.09,0-.07Zm-2.67.44-.05,0,0-.08,0,0h0v.05Zm2,.21,0,0v-.13h.05l0,0,0,.06Zm-1,0v0l0,0h0l.07.08.1.07.07.05v0l0,.05,0,.09v.09l0,.14-.07,0h-.1l0,0h-.12l-.08,0-.08.06h-.29l-.07,0-.12,0-.17,0-.07,0,0,0-.06-.11v-.1l0,0,0,0V192h0l0-.06v0l.09-.09.11-.08.18-.07h.12l.17-.06.05,0h.06l0,0Zm.51.34-.05,0,0-.06,0-.06h0l0,.06,0,.05Zm.48.36h0l-.08-.08v-.06l0,0,0,0,0,.07v0Zm-.8.84v0l-.12,0,0,0h0l-.07.06,0,0v0h0l-.13,0-.06,0,0,0,.05,0h0l.05,0,0-.05h.07l0,0,.08,0,.06,0Zm-3.56,2.66h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="FK"
                                    d="M1975.8,230.41l.14.08.18,0,.07,0,0,.07,0,.07h-.1v.09l0,0,.19.1h0v0l0-.06v-.08l0-.06h.05l.21,0,.05,0,.1.17-.1,0,0,.07.09,0,.07,0,0,.07v0l-.16.05-.13,0-.06.09-.11.06-.32.1,0,.09v0l0,.12-.44-.14-.06,0,.12.23-.09,0-.08,0-.08,0,0,.17-.13-.11-.1-.15v-.08l.1-.16,0-.07.24-.22,0-.06.08,0h.08l0,0V231l0-.09v-.14l.19-.2,0-.13Zm-1.16.18h-.13l0-.05v-.12h.09l.1.05v0l0,.08Zm-.16.1.13,0,.12-.11.09,0,.07,0,0,.07h.07l.2-.07,0,0,.07-.07.06,0,.05.07,0,.07-.05,0,0,.07,0,0-.07.05,0,.08-.13.19-.19.24-.07,0-.13,0-.06,0h0l0,.13-.06.1,0,0h-.09l0,0h-.16l-.12-.06-.13-.14.18-.16h.16l.13-.12.1-.05,0-.06,0,0v-.06l0,0h0l0,0-.11,0-.07-.07,0,0h0l.17-.06,0,0-.06-.09-.1-.05-.08-.09,0,0v-.05l0-.1h0l.06.07.15.09Zm-.68.48.07,0h.06l0,.16,0,.07h-.08l-.08-.1,0-.05.08,0Zm2.38.34v.13l-.08,0,0-.07,0,0h0l0,0Zm-1.14.33-.06,0,0,0,0,0v-.11h0l.07.06v.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="FM"
                                    d="M2157.49,166.68l-.07.08v0l0,0,0-.05,0,0h0l0,0,0,0Zm12.67,1.92h0v0h.05Zm-.21.08h0v0h0v0Zm6.15.49-.06,0H2176l0-.07,0,0v0l.05,0,.1,0,0,.06,0,0v0Zm4.3,1.37v.05l-.06,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="FO"
                                    d="M2024.17,101.83l0,.14-.07,0h0l0,0v-.26l.07.13Zm-.2.06,0,.27h0l-.06-.08h0l0,0v0l0,0,.08.18v.08l-.08,0-.19-.23-.14-.38.19-.06.15.1.16.07Zm-.52.18.09.07,0,.06,0,0h-.13l-.11-.06,0-.12h.07l.1,0Zm.52.65,0,.07h0l-.09-.09-.07,0,0,0,0-.07h0l0,0,.12.06,0,.07Zm-.07.7,0,.06h0l-.06-.06-.11-.16,0-.13v-.07h0l0,.06.11,0,0,0v.06l0,.08v.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="FR"
                                    d="M2032.72,121.26l.06,0,.09-.06h.08l0,0,0,0,0,.1,0,.1,0,.09,0,0h.15l.11,0,0,0,0,.19,0,0,0,0,0,0h.18l.09,0,.12.11v0l0,.06v0l0,0,0,.06v0l0,.05v.07l0,0,.18,0,.16,0,.11-.06v-.07l0-.07.06-.06,0,0,0,0-.06.26,0,.06v.1l0,.08h.06l.07,0,0,0,.06,0,.08,0,.06,0,0,0,0,0,.07.09.07.07h0l.07,0h.16l0,0,.08,0h0l0,0h.1l0,0,0,0h.06l0,0,.06,0h0l.07,0,.07.07,0,.07v0l0,0,.11.18h0l0,0,0,0h.1l0,0,0,.08v0l0,0h.05l.07,0,.11,0,.08,0h0l.07.1.08,0,.17,0,.19,0,.07,0h0v.13h0l-.18.25-.08.09,0,.12,0,.19,0,.18-.08.17,0,.13,0,.08,0,.13,0,.19v.13l0,.09,0,0-.12.06,0,.06,0,.07-.08,0h-.12l0,0v0l0,0h-.07l-.08,0-.06.08,0,0h0l0,0v0l0,0,0,0-.12.15-.12.14,0,0,0,0-.15.08,0,0v.12l0,.1-.11.1-.12.1,0,.06,0,.06,0,.08v0l.06.07v0l0,.08,0,.06-.06,0v.08h.11l.1-.07.07-.07,0-.08h0v0l.08-.08.1,0h.14l.17,0h0v0l0,.07,0,.06,0,.14,0,.05.05,0,0,0,.06,0,0,.08,0,0-.08.07-.12.08,0,0v.09l.07.06.07.11,0,.11.1.1,0,0v0l0,.05,0,.14,0,0h0l-.13.11-.05,0h-.09l0,0V129l0,.06,0,.07,0,.06,0,.05.09,0h0l0,0,0,0,0,.14,0,0,0,0,0,.06-.06.09,0,.06,0,.07v0l0,0,0,.07.06.07.17.1.15.08.05,0,.21-.06h0l0,.06v0l0,.07-.06.09-.06.07,0,.05v.13l0,0h0l0,0h0v0l-.11.05-.08.05-.29.28-.13.08,0,.05,0,.09-.08.08-.07,0-.17,0-.18.09-.08,0h-.2l-.13-.11-.24-.06-.08-.15h-.19l0,0v-.1l-.08,0h-.06l0,0,0,0h0v0h-.07l-.08,0-.2-.07,0,0-.14,0-.06,0-.05-.07,0,0h0l-.13,0,0,.06-.07.07-.48.34-.09.14-.1.21v.09l0,.31.1.16v0h0l-.09,0-.08,0h-.07l-.07,0-.06,0h0l0,0v.06h-.08l-.18-.06-.16,0-.09.05-.06,0h0l0,0,0,0-.06,0-.15-.06v0l0,0v0l0,0-.13,0h-.06l0,0,0,0-.07-.12-.06,0h-.07l-.09,0-.1,0-.22-.08h-.07l0,0,0,0V132h-.35l0,0-.23,0,0,0L2030,132l-.06,0-.05,0,0,0h0l-.06,0h-.17l-.14-.14,0,0-.07,0h-.09l-.22-.09-.1,0,0,0v0h0l0,0v0h-.06l0,0v-.06l0-.06v-.11l-.06,0h-.14l-.08,0,0,0,0-.06v0l.15,0,.13-.16.13-.58.09-.7.07-.13.09,0-.07-.1,0,.05v0l0,0,0-.65,0-.23.06-.25.13.1.11.1,0,.08.07.29.06.06.08.06,0-.06,0,0-.09-.39-.05-.11-.08-.09-.27-.19,0,0,0-.08h.09l.08,0v0l0,0,0-.16,0-.37v-.06l0-.08-.08,0h-.07l-.07,0-.37-.22-.12-.23-.13-.17,0-.07v-.08l.07-.15-.06-.1-.06,0,0-.05,0-.08,0-.06h.07l.1,0,.09,0,.07,0-.21-.13-.35,0-.07,0-.07,0,0-.1,0,0,0-.08,0,0-.06,0h-.2l0,0,.06-.09,0,0h-.07l-.09,0-.09,0-.09-.1h-.1l-.06,0h-.11l-.05,0-.37-.12h-.15l-.15,0-.08,0,0-.08,0-.12-.23-.1,0-.06.11,0,.12,0,0-.06-.1-.06-.07,0,0,0,0-.06,0,0h.27l-.06-.06,0,0h-.15l-.06,0h-.12l0-.07v0l0-.13.17-.11.44-.12.18,0,.13,0,.16-.07.07-.07.22,0,.21.07.19.27.1.09.22-.16h.34l.07.09,0-.07.06-.09,0,0,0,0h.35l.06,0-.1-.06-.07-.15,0-.56-.1-.15-.11-.25-.06-.15v-.05l0-.08h.14l.1,0,.21-.06.1,0v.12l0,.14,0,.07,0,.08h.16l.18,0h.23l.33.08.14-.05.13-.1.26-.06,0,0-.14,0-.14-.07,0-.07,0-.06,0-.14.4-.23.28-.07.3-.12.15-.13.1-.17,0,0,0,0,0-.06,0-.64,0-.12.06-.1.09-.07.13-.08.5-.11.07,0v.07l0,.09,0,0,0,.07v0l.07.09.08.09.08.06Zm-3.73,6.66,0,.11-.06-.1-.08-.1,0-.08v0l.1.07.09.13Zm9.83,4,0,.19,0,0,0,0,0,0,0,.49v0l-.11.2,0,.06v.24l0,.06,0,.06-.07.21-.07.09-.16-.11-.1-.05,0-.05,0,0,0,0,0-.05v0l-.11,0-.05,0v0l0-.08,0-.07H2038v0l0-.05,0-.06v-.06l-.06,0,0,0,0-.08,0,0,.06,0,0-.07h0l0,0,0,0,0-.05.07-.16.09-.07.17-.05,0,0,0-.05,0,0h0l.06,0,0,0,0,0,0-.07v-.22l0-.09h0l0,.05v.22Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GA"
                                    d="M2042.34,173.45v.06l-.08.16,0,.12v.13l0,.1,0,.08,0,.08,0,0,0,0,0,0h0l.09,0,.14-.05.19-.06.12,0,.19,0,.11,0,0,.05.06.18,0,0,0,.08,0,.09v.08l0,.06,0,.07,0,.05,0,0,0,0-.14,0,0,0,0,.08-.07.06,0,.07,0,.08v.26l0,.1,0,0,.16,0,0,0,0,.06,0,.06.15,0,.06,0,0,0v0l0,.17,0,.16v.12l0,.11v.28l0,.06V177l0,.16,0,0-.06,0,0,0,0,.07,0,.1,0,0v0l0,0v.05l-.07,0,0,.05-.08,0-.1,0,0,0,0-.05v0l0,0-.06-.11,0,0,0,0-.08.09-.14.1h-.1l-.18,0-.16,0-.07-.13,0-.1-.07-.12-.07-.06-.08,0h0l-.11.07,0,0v.1l0,0v.09l0,.07v.07l-.35.08-.06,0-.05,0h0l-.15,0-.06,0-.06,0,0,0v0l0,.19v.07l0,.09,0,.06.1,0,0,0,0,.05,0,0v0l0,.05,0,0,0,.05.06,0,.09.05,0,0v0l0,.06,0,.06,0,0v0l0,0v0l0,0h-.11l0,0-.14-.14h0l-.2.11,0,0,0,.07-.05.14-.09-.08-.08-.15-.09-.1-.19-.15-.06-.11-.22-.24-.31-.24-.23-.21,0-.05h0l.22.1h0l0,0-.09,0-.09,0-.09,0H2039l0,0,0-.07,0-.06,0-.06-.12-.12,0,0-.06-.07h0l.13.07v-.07l-.13-.06h-.07l0,0V177l-.09-.18-.1-.14v-.06l.26.29h.08l.1,0,0,0,0,0,0,0h-.1v0l.06-.15h0l0,0,0,0h0l-.13-.07-.11-.21,0,0,0-.08,0,0-.13-.29.05,0,.06.09.11,0,.05-.05h.08l0-.05.15-.2,0-.27v-.16l0-.16,0,0,0,0v0l0,0,0,0h.1l.15.06.06,0v-.08l.18-.06-.06,0-.15,0-.21-.09-.07-.06-.07-.12-.07-.06v0l.15-.05h0l0,.06,0,0h0v-.19l0-.19,0,0h0l0,0h.07l0,.05v0h.06l0,0h0l0,0h1.25v-1.19h.93l.16,0h.63l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GB"
                                    d="M2029.1,121.3l-.08,0,0,.05,0,0h-.1l-.2-.11h0l0,0,.12,0,.07-.06.16.06.07.07Zm-2.89-3.94,0,0h.1l0,.06-.1.07-.07.07-.09.06,0-.07h0l-.08-.12v-.2l.1-.05h.13l.11.15Zm-2-3,.13,0h.1l.08.12,0,.19.11.18.14.16v.09l0,0-.1.07v.07l.07,0h.2l0,.07,0,.11,0,.08,0,.09,0,0,0-.08,0,0-.05,0,0,.12v.15h.09l0,.15-.09,0-.11,0,0,0,0,.07-.06.11-.07.06h-.09l-.09,0h-.08l-.06,0,0,0H2024l0,0,0-.13,0,0-.09,0,0,0,0-.08v-.1l-.06-.07-.06,0h0l-.08.08-.06.08,0,0,0,.05,0,0-.11.09,0,0,0,0,0,0h-.13l-.06,0L2023,116l-.16,0,0-.11,0,0-.19-.18,0-.07,0,0,.07-.06.23-.09,0,0v0l-.07,0-.06,0,0,0v0l0,0h.07l0,0,0,0,.07,0,.06,0,0-.09,0-.08v0l0-.16,0,0,.14-.1,0,0,.07,0,.07-.06.07-.16h.12l.11,0,.21-.07Zm1.17-.33h-.16l0,0-.05-.23,0-.08,0,0,0,0,.06,0,.06,0,0,0,0,.16v.2Zm-.94-.79,0,.21,0,.13v0l0,.06-.16.08h0v0l0-.08,0-.1v-.07h0l-.11.11h0v0l0-.09v-.07l0,0,0,0,0,0h0l0,0,.09-.08.08,0Zm.15.19,0,0h0l0,0v-.12l0,0,.12-.08-.06,0v0l0-.07.13-.1,0,0h0l-.07.19-.15.31Zm.17-.87-.37.09h-.12v0l0,0,.11,0,0-.22-.16-.11v0l0,0v0l.1,0h.07l.07.06.08.12.1,0,.07.06,0,.24Zm-.76-.4h-.06v0l.09-.11.06,0h0l0,.07-.07.07Zm-.75-.64-.08,0h0v0l0-.06.06,0,0,0v0l0,0Zm1,0,0,0h0l0,0,0-.08.1-.05,0,0,0,0v0l0,0Zm-.9-.25h-.09l0,0,0-.1v-.33h.1l0,0,0,.42v0Zm1-.67v.17l0,.09v.07l0,0,0,0,.18,0h.16l0,0v0l0,0-.09.09-.11.15,0,0h0l0,0v-.25l-.12,0h-.1l0,0,0-.06-.07-.15-.22-.06-.06-.09v-.08l.05-.06,0,0h0l0,0v0l0-.05v0l.22-.07,0-.11h0l.06,0,.07.11,0,.14Zm-1-.3.1.09-.08.16h-.13l-.18-.11v-.06l0,0h0l0,0,.07,0h0l.07,0Zm.92-1.19-.11.31h0l0,.07-.12.09h.1l0,0v.06l0,0-.15.14-.09.05-.11.15h0l0,.09,0,0h0l0,0-.06-.09.12-.09v0l.08-.05v0l-.13-.07,0-.05v0l.06-.06h0l0,0h0v-.18l0,0,0,0h0l.06,0,.06.06.07,0h.08v0l-.06-.15v0l0,0,.19-.11.22-.18.06,0,0,0,0,.1v.12Zm2.85-.26V109l0,.06-.07.1-.19.14-.33.33-.2.16,0,.08v.1l.12,0,0,0,0,.06-.18.19,0,.17h.13l.11,0,.22-.11.21-.08h.1l.2.06h0l.08,0h.09l.56,0,.16,0,.1,0,.09.11.08.2v0l0,.1-.09.11-.08.16,0,.09v.09l0,.09-.15.4-.16.22-.06.16-.09.13-.08.08-.09,0-.25,0-.07,0-.08.07-.09,0h.1l.1,0,.19,0,.22.13,0,.11-.09.09h-.2l-.18.19-.08,0-.09,0h-.11l-.2-.05-.08,0,.07.09.09,0,.52.11h0l.16-.11h.22l.42.21.12.15.17.23.1.08.06.08,0,.12.08.39.09.37.12.41,0,.11.08.08.36.17.08.06.14.18.14.18.13.14.13.11-.06.06,0,.09,0,.13,0,.12.11.19.1.21,0,0,0,0h-.1l-.09-.06-.09-.08-.17,0h-.19l.16.05h.18l.39.35.13.2.08.27-.05.12-.09.08-.07.09-.08.1.22.15h.05l0,0,0-.05.08-.12,0,0,.13,0h.11l.12,0h.1l.19,0,.11,0,.25.21.05.12,0,.15v.16l0,.15-.05.14,0,.18,0,.06,0,0-.13.14-.09.05,0,0h0v0l0,.07v.09l-.08.06-.08,0-.14,0-.18.12.13.06,0,.06,0,.11-.08,0-.09,0h-.1l-.08,0-.08,0,.1,0,.07,0,0,.09,0,0,.19,0h.12l.22,0h.15v.08l0,.19,0,0-.29.16-.07.11V121h-.18l-.08.07-.14,0-.11,0-.1.06-.09,0-.38-.07h-.22l-.31.07h-.08l-.12-.07-.12,0-.14,0-.12,0,.07.11-.17.1-.07,0h-.08l-.17,0-.15,0,0,.08,0,.07,0,0h0l-.29,0h0l0,.05-.11,0-.1-.07-.11-.06-.11,0h-.09l-.38.12-.07.12,0,.18,0,.15-.09.12h-.11l-.1-.08-.18-.09-.07-.06h0l0,0-.07,0H2026l-.12,0-.2.07-.08,0-.18.14,0,0-.06.14-.1,0-.09-.09-.1,0-.11,0-.06,0,0,0v-.08l.08-.09.21-.07.19-.19.09-.11,0-.06,0,0,.06,0,0-.07.25-.28,0-.06V121l0-.11.21-.07.1-.24,0,0,.29,0h.21l.22,0h.22l.09-.07.14-.23.09-.1.09-.09.09-.11.15-.2-.1.07-.12.11-.07.06-.22.06-.09.07-.16.14h0l-.24,0-.19-.19-.12-.07h0l0,0-.1,0h-.11l0-.09.08,0-.17,0-.05,0,0-.06h-.14l-.06,0-.11.08-.17.08-.21-.11,0-.06v-.1l0-.08,0,0,.07-.11.09-.07.19-.06.29-.17.17-.07.15-.12.06-.07,0-.1,0-.13.06-.1-.06,0,0-.08v-.07l0-.07,0-.09,0-.09V118h-.12l-.12,0-.1.06-.11.07h-.09v-.06l0-.07.11-.1.11-.09,0-.06,0-.08.05-.06.15-.11.28-.13h0l.11,0,.11,0,.09,0h.09l.21.14-.06-.21.09,0,.14.19,0,0,.11,0,0,0h0l-.07,0-.05-.06-.09-.19V117l.06-.12.06-.1-.05,0,0,0v-.11l0-.09.12-.09,0-.13,0-.14,0-.07h-.12l-.06,0,0,0h0L2027,116l-.08-.12-.15-.26,0-.15.11-.33.19-.22.21-.07,0,0h-.33l-.1,0-.1.09-.06,0h-.06l0,0-.06.06,0,0h-.11l0,0,0,0,0-.06h0l-.05,0-.1.07-.1,0-.12,0-.15-.09,0,0,0,.09,0,.13-.11-.11-.1-.16,0-.09v-.11l0,0,.06,0,.08-.26.17-.34.06-.1,0-.13v-.08l0-.07-.15-.17v-.13l0-.15,0-.1h.22l-.08,0-.16-.14v0l0-.13h0l0,.06-.06.14,0,0-.12,0,0,.07,0,0h0l0,.06h0l0-.07v-.12l0-.11,0-.08.17-.2-.08.06-.18.18-.1.12,0,0v.07l0,.2v.1l-.16.62,0,.06,0,0h-.11l0,0V114l.07-.29,0-.09,0-.07.09-.14h0l-.06,0h0l0,0V113l0-.13,0-.19,0-.17,0-.12,0-.15.05-.07,0-.11.06-.11,0-.12h0l-.32.31-.08.06-.12,0-.08,0-.07-.08,0-.14h-.08l-.07,0v0l.09-.08.15,0,.13-.12-.12-.08v0l.11-.07.13-.24,0-.22-.07-.11,0-.07-.13-.07,0-.1,0,0,0-.06.06,0,.1,0-.09,0,0,0,0-.08v0l0-.19,0-.08.06-.1h.24l0,0h0l.12,0,0,0-.2-.24v0l.05-.13v-.12l0,0,.06,0h.19l0,0,0-.06,0-.08v-.07l0-.06v-.18l0-.08,0,0h0l.1,0,0,0,0,.08h0l.14-.08,0,0,0,.1.23-.08.3,0,.18,0,.19,0,.18-.06.19,0v.08l0,.13Zm.17-.4h0l0,0-.06-.12.09,0h0l0,0v.11Zm-.22-.1-.05,0h0l-.08-.1,0-.07v0l0,0,.08,0,0,.09v.08l.05,0Zm.1-.42v0h.07l.1,0h.06l0,0,0,.09,0,0h0l-.12-.09-.16,0h0l0,0V108h0l-.06.05h0l0,0v-.14l0-.12.06,0h.08l.1.07,0,0v0l0,.05Zm.47-.36h-.1l0-.1.06,0h.12l0,0-.11.07Zm-.17.08-.08,0,0,0v-.12l-.09-.05,0,0,0-.06h0l.06,0,.1.11,0,.08.08,0h0v.06Zm1.31-2.48,0,.14,0,0,.07.13h0l.06-.05v.11l-.06.33,0,0v.1l0,0v.2l0,.06,0,.16h0l-.05,0,.05-.24,0-.14v-.07l0-.07h-.08l-.07,0v-.09h-.13l0,0v0l.08,0h.07l.11-.07-.07-.26-.09,0,0,0,0,0,0,0,.08-.13,0,0h.06v.13Zm.25,0,0,0L2029,105l.06-.22h.08l0,0v.06h0v0l0,.1v.15Zm.25-.56v0l0,.16v.06h-.08v-.23h0l0,0,0,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GE"
                                    d="M2072.9,133l0,0-.05.08,0,0h-.05l0,0v.14h0l0,0,.05.11.07.06.12.07.1.07.05.07v.05l0,.11-.09.08-.07,0h0l0,0-.09-.07-.11-.05-.07,0-.05,0-.1,0-.12,0-.07-.05,0,0,0-.06-.28-.11-.13,0-.05,0-.2.16h0l-.15,0h0l0,0h-.27l-.08,0-.23,0h-.07l-.07,0-.15,0-.11,0-.13,0h-.19v-.06l0,0,0,0H2070l-.07,0,0,0v0l0,0,0,0-.09-.06-.14-.14-.07,0,0-.09,0,0h-.15l0,0-.05.11,0,0h-.1l-.07,0h-.33l-.09.07h0l-.07,0-.11,0-.06,0,.17-.23.06-.14v-.19l-.09-.22-.08-.31-.08-.32-.07-.1-.27-.12-.06-.12-.2-.17-.29-.07-.06,0-.25-.21-.2-.14.05-.08.05-.09.06,0,.18,0,.16,0,.12,0,.14.07.13.08.13.06.26.05.09.07.11.07.43,0h.07l.15,0h.12l.14.08h.18l.12,0,.09,0v.06l.08.07.24.12.19.06.06.05.15.08,0,0v0l0,.06v0l0,0,.06,0h.12l.05,0,.09,0,.09,0,.12-.06.16-.06h.06l.07,0,0,0,.07.12.08-.16,0,0,.06,0,.12,0,.08,0,.05,0,.12.15h.2l.09,0,0,0,0,0,0,.14,0,.15v0l.08.06.12.06.05,0,0,0,.09,0,.1,0h0l.05,0,.14.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GD"
                                    d="M1973.16,164.34h-.06l0,0v-.06l0-.07,0-.05h0l0,.16Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GF"
                                    d="M1982.44,171.7l0,0-.07.05,0,0,0,.06,0,0,0,.05,0,0,0,0v.05l-.11.18,0,.08-.06.09,0,0,0,0,0,.06v.06l0,.07,0,.07,0,0-.09.2v.07l0,0-.06.1,0,0-.08,0-.08,0,0,.05-.06,0h0l-.07,0H1981l0,0,0,0,0-.05,0,0-.06,0-.07,0h0l-.11,0,0,0v0l0,0h0l0,0,0,0-.06,0-.14.08,0,0h0l0,0H1980l-.13,0-.08,0,0,0,0,0h0l0-.07.08,0,.13-.23.06-.09v-.06l0-.11,0-.13v0l.12-.16,0-.08v-.08l0-.05,0,0h0l0-.07,0-.06-.08-.06,0-.06-.09-.14v-.08l0,0,0,0v0l0-.09,0-.08v-.06l0-.09v-.1l0-.05v-.15l0,0v0l.11-.16.09-.09.07-.07.07,0,.09-.24.06-.09h.07l.36.2.17,0,.34.11.13.14.28.23.15.07V171l0,.09.1-.08.15.13,0,.07.05.12,0,.08,0,0v0l0-.05,0,0v-.08l0-.1h0l0,.06.08.26,0,.05v.15Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GG"
                                    d="M2027.76,123l0,.09-.08,0v0l.1-.06h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GH"
                                    d="M2030,165.18l.06.06v0l0,.12,0,.08,0,.08v0l0,0,.09.06,0,0,.06.07.06.06.11.07,0,0v.58h0v0l.07,0h0l0,0,0,0v0l0,0v0h0l.07-.05h.07l.08.08v0l0,.12,0,.1v.13l0,.08v0l0,0-.08.05v0l0,.06.07.07.12.09.06.12v0l0,.05,0,0v.06l0,.39-.1.16v.11l0,0h.05l0,0,0,.12,0,.12V169l0,0,0,0v.08l0,0,0,.06.07.13,0,0v.05l0,.06.08.07.08.05h.07l0,0,0,.06,0,0,.05,0h0v.05l-.08,0,0,.06,0,.08,0,.09-.19,0h-.45l-.36.18-.2.06-.13.1-.17.07-.11.08-.25,0-.4.14-.13.05-.13.09-.2.11h-.09l-.16-.1-.12-.05-.3-.08-.22,0-.11,0h0l0,0h.13l.05,0h.07l0,0v-.13l0,0v-.07l0-.15,0,0-.13,0v0l0,0,0-.08,0-.12,0-.15-.09-.24,0-.09,0-.08v-.11l0,0v-.1l.06-.13.12-.15,0-.05,0,0v-.05l0-.18.06-.21,0-.08,0,0,0-.07v0l.11-.09.05,0v0l0,0v0h.07l0,0,0-.26,0-.26v0l0,0,0-.11,0-.06,0,0v-.06l0-.1v-.06l0,0v-.22l-.06-.11v-.08l0-.05v-.11l0-.16V166l0,0v0l0,0v0l0,0v0l0,0,0-.05,0-.08v-.13l.06-.23v0h1.19l.28,0h.49l0,.06h0l0,0,0,0,.05,0,0-.05,0,0h.08l0,0v-.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GI"
                                    d="M2025.16,139.82v0h0v0h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GL"
                                    d="M2002.46,23.67l.88.49.47.56h.1l.63.21.61.27,1,.69.14.23-.11.18-.25.13-1.28.22-2.32.28-1.33.52-.43,0,0,.78.18,0,.29-.1,1-.78.39-.13.72.06.95.3.38-.11.68.08.79-.22.94-.49.26,1.08.34,1.06.28-.11.23.05.08.35.13.14.26-.07.82.29.55.54.22.24.1.35,0,.28-.08.34-.35.6-.44.55-.6.41-.69.26-5.27.86-.18.2-.1.51.07.66.24.1.58-.36,1-.36.74,0,1.75.3.51.78.28,1.17.6-.26.13-.2.1-.35.07-.38.06-.4.06-.28.07-.15.15-.12.35-.15.91-.15.22,0,.16.57,0,.32v.94l0,.61-.08.6-.25,1-.2.55-.22.39-.42.89-.15.24-.46,1-.11.46v.33l.08.07.13-.32,0-.22L2009,42l.68-.63.14-.18.45-.77.28-.28.23-.31.13-.22.68-1.56.36-.48h.37l.07.81.44.12.2,0,.31.19.14.16.23.08.24.19.21-.2.07-.13.2-.58.28-.52L2015,37l.09-.16.13-.14.14-.06.38-.31.1,0,.21.1.91.05.49.16.69.44.48.24.23.21.32.46.26.47.12.13v.15l-.09.21-.65.7-.21.47-.62.87-.3.29-.32.12-.36,0-.24.13,0,.11.16.35.08.25v.22l-.18.33-.07.07-.63.24-.32.41-.42.05-.3-.05-.41.43.16.35.15.15.45.32v.18l-.22.36-.3.42-.35.29-.13.05-.16-.08-.16,0-.33.13-.33,0-.57-.19-.31-.22-.16-.08-.21,0-.08.09-.32.52-.16.36-.1.36,0,.39,0,.42,0,.28.06.16.08.09.13,0,.3,0,.12,0,0,.08.07.26,0,.25,0,.35,0,.4,0,.45v.25l.12,0,.06,0,.07.09.07.17.06.19,0,.2,0,.16-.07.13-.17.14-.43.29,0,.08,0,.17,0,.26,0,.23-.08.21-.07.12-.14,0h-.18l-.2.12-.48.69v.07l.18.22v.19l-.22.81-.06.39,0,.54-.07.45-.11.36-.11.42-.11.47,0,.36.14.24.18-.2.23-.65.25-.28.27.09.23.13.3.25.25.16.21.21.09.18.09.24v.16l-.15.08-.06,0-.39-.4-.19-.1-.26.12-.22.18.2.74.21.33.39.15.2.16.15.2.12.1.16,0,.21-.2h.29l.13.1.1.18,0,.34v.5l0,.37-.06.25-.1.33-.09.06-.12,0-.12-.06-.11-.12-.16-.09-.32-.1-.33-.22-.18-.05-.39,0-.42.14,0,.18-.6.62H2010l-.17-.22-.23-.2h-.14l-.2.26,0,.1v.09l.15.23.06.05.08,0,.27,0,.11.06.11.68.18.42.07.08.07,0,.21,0,.28-.14.09.11.2.14.12,0h.15l.16,0,.22.38-.09.47.14.38.22.39.06.14,0,.25v.17l0,.15,0,.14,0,.26,0,.4v.32l0,.25-.09.18-.14.11-.11,0-.09-.17-.12-.18-.16-.19-.26,0-.39.57-.18,0-.14.06-.15.24-.22.15-.19-.06-.35-.28.13.19.18.22.11.12.08,0,.09,0,.13-.1.29-.25.08,0,.06,0,.06.08.06.21.07.36v.3l-.09.25-.07.16-.06.07v0l.16.07.23-.32.07-.41.11-.47.19-.15.21.15.17.44.24.8.1.08.13.19.06.23,0,.27,0,.2,0,.12,0,.08-.09,0-.17,0-.37-.09h-.19l0,.27-.39.23-.44.08-.41-.17-.35-.28.11-.38.07-.43-.17-.29h0l0,.44,0,.17-.18.2-.14.1v0l.07,0,0,.09,0,.13,0,.14-.07.14,0,.11v.09l.06.12.13.13.13.06.64,0,.25.07.61.31,0,.1-.1.55-.06.52-.11.09-.64,0-.2.09-.3.23-.29.29h-.15l-.59-.25-.23-.16-.48-.48-.37-.72-.17.3-.1.15-.11.07h-.1l-.1,0-.11-.11-.19-.27-.22-.26-.16-.13v0l.09.15.13.18.35.52.12.13v.1l-.22.08-.26.18-.13.13-.2.31-.07,0-.3.08-.09,0-.22-.17-.33-.12-.2-.1-.27-.18.09.2.52.3.06.1-.11.18-.06.07h-.12l-.19,0h-.19l-.19.06-.08.06,0,.09,0,.07.07.07h.06l.14-.21h.11l.3,0,.29-.16.22-.07.16,0,.58-.24.12-.28.19-.11.43-.09.42,0,.22,0,.17.26.24.19.19.21.23.07.13.28.37.31.24.06.15.15v.88l-.06.73-.19.16,0,.38,0,.3-.19-.11-.19-.2-.46-.31-.43-.2-.17-.19-.2-.14-.27-.58-.17-.73-.08-.37-.14,0-.19.1-.16.1-.08.18-.56.24-.2.17h-.12l-.42.25.17.12h.08l.17-.06.1-.09.38-.23.3,0,.11-.1.24-.15.16,0,0,0v.06l.12.89,0,.24-.13.1-.26.16-.07.08.07.14.26-.13.16-.14.09.05.14.22.16.11.41.34.2.18.27.18.31.24.08.09.28.12.06.05.12.42.1.05.28,0,0,.16-.28.36-.14.12,0,.07v.34l.06.39.06-.36,0-.17.07,0h.05l.2-.16.19.08,0,.41,0,.38V81l0,.5v.17l.05.14,0,.6,0,.18-.09.16-.3.07-.11-.08-.29,0v-.14l0-.17v-.11l0-.1v-.59l-.08.15V82l0,.12,0,.63-.08.15-.23,0-.23,0-.12,0-.43-.29-.17-.26-.14-.4-.09-.37,0-.35-.1-.28-.17-.22-.2-.18-.24-.14-.2-.18-.18-.22-.19-.17-.21-.12-.3-.05-.44,0-.3-.14h-.07l-.07.07,0,.21.34.09.26,0h.35l.22,0,.07.11.06.21,0,.3-.07.23-.25.26-.13.12-.39.23-.13.05-.32,0-.25,0-.33-.12-.18,0-.38,0-.09,0,.1.13.16.07.11.08,0,.16,0,.23,0,.16-.07.12-.25.23-.1.07-.47.24,0,0h.11l.29-.09h.09l.48.21h.39l.78-.19h.07l0,0,0,.07.05.12-.06.1-.18.11-.28.1-.12.07-.11.11-.22.25-.06.26.22.1.11-.13.12-.28.1-.16.26-.11.31,0,.24-.06.49-.28.08,0,.73.16.65.31.34.12.46.06.82,0,.07.05,0,.11,0,.09-.14.13-.17.09-.1,0-.09.06-.19.06,0,.05.06.21,0,0h-.17l-.29.14h-.24l0,0,0,0,.05.1,0,.14,0,.1-.11.06-.08,0-.28-.08h0l0,.06,0,.1v.12l-.07.11-.14.08-.27.23-.11.07-.25,0-.05,0,.1.18v.07l-.17.19-.25.12,0,.06,0,.17v.07l-.07.1-.24.18-.17.1-.08.07-.1.13-.13.06h-.16l-.15,0-.25.13-.17,0-.54.22-.25,0-.22.08-.45.22-.22.07-.15.08-.16,0-.26-.06h-.15l-.09,0-.08.07-.13.18h-.11l-.37-.14v.07l.1.15v.11l-.22.11-.12,0-.18,0-.23-.12-.3-.25-.36-.38-.18-.13,0,.12,0,.12.07.12v.09l0,.05,0,0h-.07v0l.11.19.08.19v.17l-.11.17-.08.1-.08,0-.43.41-.12,0-.06.06,0,.07-.13.34,0,.11-.1.13,0,0v.06l0,.08,0,.15-.08.2-.25.55-.2.5-.09.17-.07.07,0,0h-.1l0,.09,0,.16,0,.12,0,.09-.41.35-.1.07-.1,0-.11,0-.23-.19,0-.07-.15-.16V93l0,.05,0,.06,0,.08.12.42-.09.09-.08.1-.21.16-.23.28-.08.07,0-.22V94l-.13-.11v.15l-.09.29,0,0h0l-.1.06-.1,0-.09-.13,0-.07-.16.19h-.08v.16l-.07.14-.1.07h-.14l-.08.08-.19-.09,0-.17.15-.23,0-.1,0-.12,0-.15.28-.49.19-.25v0l-.26-.05-.23-.09-.22,0-.09,0,.15.14.22.14-.11.14-.09.14-.1.38-.06.16-.24-.18-.11-.06.07.2.21.19,0,.06v.22l-.39.2-.42,0-.3.06-.51.07H1993l0,.07.49.34.08.06-.07.12-.1.07-.16.25-.09.09L1993,96l-.38-.13-.2.06-.18,0v.14l.06.11.06.26.12,0,.16-.08.13.19.08.33.14.16.06.13,0,.12-.09.12-.18.17-.21,0v.14l-.08.09-.19,0-.09-.07-.09,0-.37,0,.37.26.14.12.06-.07.13,0,.19.06,0,.43.08.35v.08l-.2.2v.19l-.12.06-.13,0v.21l-.09.13,0,.09,0,.07-.09.13-.07.16-.1.14h-.42l-.17-.18-.06-.06-.08,0,0,.12,0,.07.15.13.27.16v.12l-.07,0-.17.31h-.06l-.08.08-.24,0-.1,0-.29,0-.1,0h-.09l.08.09.17.08.19.08.29,0v.12l-.07.09,0,.14,0,.09,0,.12-.06.27.08.18.08.09v.12l0,.19-.13.17h-.1l-.16,0,0,.07.24.07,0,.13-.06.15-.07.34-.14.57-.07.56-.3.46h-.11l0,0-.15,0-.23-.11-.18,0h-.12l0,.06.1.08.16,0,.12.05.22.06.08.1,0,.1v.13l0,.38-.1.13-.08.11h-.28l0,0-.27-.13,0,.06.19.17.06.08,0,0h-.08l-.1.06-.2,0v-.08l0-.09h-.09l-.1,0-.06,0h0l0,0,0-.17.05-.08.16-.22,0-.12,0-.06-.11.13-.12.2,0,.13-.08,0-.18-.06-.52-.28v-.32l.15,0,.11-.06.1-.08.11-.14.1-.23v0l-.3.3-.18.1h-.09l0,0-.15-.09-.09-.05-.22-.07,0,0-.07,0-.09-.31.12-.37.08-.1,0-.13,0-.16,0-.08-.06,0,0,.06V104l0,.07-.26.14-.26.11-.13.11-.08.09-.06.08h-.1l-.13,0-.1.05-.13,0-.09-.08h-.1l-.12,0H1986v.06l.06.13h-.26l-.09,0-.07-.05-.05-.07,0-.1.28-.17.12-.1-.08,0-.26,0,0,0h-.18V104l0-.07v0l-.07-.07,0,0,0,0-.3-.06,0-.14,0-.15-.06-.18-.14,0-.08-.08.06-.08,0-.11-.07,0,0-.08v0l-.06-.13v-.1l.06-.09.17-.11,0,0,0,0,.2-.08-.17-.05h-.1l-.08,0-.07.11-.06.07-.26,0,0,0,0-.15V102l.11-.16-.12-.08-.11,0-.13-.07-.12-.08-.1-.09-.1-.11,0,0,0-.11,0-.1V101l0-.08.09-.18.12-.19.26-.29-.28.14-.23.3h0l0,0-.09-.19-.06-.06,0-.06-.13-.1,0-.08-.08-.16-.12-.18-.16-.37-.26-.42-.06-.24.08-.31-.09-.21.25-.1.35-.11.18-.09.11,0,.22,0,.08-.09-.13,0h-.08v0l0-.08,0-.1,0,0-.22.17-.32.13-.26.08h0l-.09,0,0,0,0,0-.08-.13,0-.08.16-.23.12-.32.16-.21.11,0h.19l.07,0,0-.12v-.06l.16-.07.17,0,.13,0,.08.14.1.27.14.09V97.2l-.07-.16,0-.26-.09-.11-.07,0-.2,0-.12-.19,0-.07V96.3l-.12-.27,0-.14-.07-.18h0l0,.23.06.16.08.35,0,.14,0,.11-.1.11-.1.06-.21.08.05-.17,0-.17-.11.06-.1.12,0,.17-.06.16-.19.37-.07.21-.08.1-.08,0-.07-.08-.06-.19,0-.15v-.57l0-.25-.11-.57,0-.21-.17-.11v0l0-.11,0-.12,0,0,0,0,.26-.17.19-.2.23-.31.09-.1.34-.07h.15v-.06l0,0h-.23l-.3.13-.05,0-.14.2-.1.1-.29.24h-.19l-.19-.28-.22,0-.14,0,0,0,0-.4.12-.46H1981l0,0-.07-.1,0,0,0-.06.31-.22.47-.44.2-.17.13-.08.09-.09.11-.18,0-.08.07-.07.13-.07.15-.12.24-.25,0-.1-.06,0-.11.09-.22.23-.17.13-.55.58-.23.21-.13.14-.1.13-.1.09-.11.05-.24,0-.12,0-.07,0,0-.27,0-.16,0-.16.06-.23.09-.16,0-.09v-.06l.18-.17.1-.08.07-.17.4-.06h.11l0,0,0-.05,0,0-.12,0h-.32l-.29,0-.14,0-.06,0-.11,0-.12-.09-.18-.36.08-.45v-.22l.23-.19.13-.07.17-.14.24-.25.28-.15.14,0,.12,0,.43.22.23,0,.2,0,.25.07.43.31.09,0,0-.08-.49-.33v-.09l.12,0,.14-.09-.08-.06-.32,0-.1.08-.31,0-.17-.07-.15,0-.22-.14-.18,0-.12.06-.21,0-.07,0-.41.44-.17.09-.12,0,.09-.28,0-.12v-.12l0-.17.2-.33.13-.36.06-.23.1,0,.14,0,.42.15.35.17.25,0h.17l.08,0,0-.1,0-.07,0-.13,0,0,.06-.06.11-.21,0-.15,0-.09h-.08l-.15.06,0,0v.05l-.14.23-.16,0-.36.08h-.17l-.29-.1,0,0,0-.08-.36,0-.11,0h-.08l0-.14.11-.15.16-.5.14-.13.26-.12.28,0,.48.39.15,0,.13,0,.32-.13.06,0,.11-.16.14-.28v-.06l-.21.15-.1,0h-.1l.09-.5,0-.39,0-.1.27,0,.37,0,.09-.09v0l-.15,0-.07-.11-.12,0-.17.08H1983l0-.17.15-.36,0-.16.06-.33V85l.08-.17.24-.11.1-.08v-.07l-.15-.3,0-.08.11-.08,0,0,0,0-.11,0-.16.07-.17,0-.16-.1-.12,0-.08,0-.21.17h-.08l-.09,0-.6-.15-.08,0-.22-.26-.17-.17-.24-.18-.31-.14-.38-.1-.23-.09-.11-.13-.19-.28-.15-.24,0-.12.08-.15.09-.1.16-.09.29,0,.15,0,.17.08.12,0,.26,0,.27.06.16.05.21.12.57.51.24.18.1,0,.43.19h.07l.18-.08v-.06l-.06-.06-.18,0-.23-.21-.13-.16,0-.28,0-.15,0-.07,0-.24-.13-.14-.09,0-.24-.2,0,0,.11,0h.12l.24.11h.12l.1,0v0l-.15-.12-.18-.21-.39,0-.25,0-.15-.07-.17-.13-.11,0-.22.08h-.12l-.1,0-.1-.38,0-.11.08,0,.06-.13,0-.13.13-.12.72-.29.18-.21v0l-.13,0-.15.09-.11,0-.42-.12-.07,0-.17.17-.24.2-.1,0-.15-.11,0-.08v-.1l.16-.13,0-.07.1-.19V79l-.18,0,0-.09v-.15l0-.19,0-.19-.14-.29-.06-.08,0-.11-.11-.4,0-.1.1-.08,0,0-.23.06,0,.07.05.1,0,.14,0,.17,0,.15.08.16.07.09.1.22,0,.25v.13l-.09.13-.13.14,0,.11,0,.12-.11.11-.06,0h0l.06.19,0,.2,0,.19-.12.12h-.07l-.14.1-.34,0-.12,0-.22-.09-.26-.06-.1-.13-.13-.23-.07-.22v-.19l0-.14.08-.08.09-.56.12-.46.32-.48.09-.17,0-.09v-.07l0,0-.39.59-.24.06-.07-.13,0-.23,0-.06.2,0,.07-.13-.12-.2-.13,0,0,0,.13-.15h.31l.07-.11.11-.11.13-.22,0-.18V76.1l0-.13v-.13l0-.13,0-.14-.08-.15-.19-.15-.06.17-.06.07h-.08l-.08-.07-.08,0-.08-.07-.08,0,0,0,0-.15V75l.09-.09.13-.07.08-.13.06-.19v-.21l0-.22-.11-.21-.19.2-.08,0V74l0-.11-.08-.14-.11-.11-.1-.07v-.1l0-.12,0-.14.06-.29.07,0,0,0,0-.24,0-.2-.06-.12v-.11l-.05-.15,0-.1-.1-.31-.06-.11-.09-.06H1978l-.15.08-.28.1-.22,0,0,0,.11-.12.16-.12.21-.08.06-.2,0-.18v-.16l-.06-.18.06-.1.19-.09.09,0,.09-.12L1978,70l-.26-.2-.06-.08-.06-.13,0-.19-.08-.19-.11-.19-.16-.18-.41-.34-.14-.23-.13-.36-.07-.15-.07-.12-.28-.26,0-.12.3-.32,0-.13-.12-.39-.13-.29L1976,66l-.2,0-.19-.13-.17-.2-.16-.15-.26-.14-.42-.37-.64-.4-.29-.23-.17-.09-.23,0-.44-.22-.37-.07-.23,0-.07,0-.17-.23-.26-.13-.14,0-.17.24-.2.24-.11,0-.16-.22-.08-.15-.08,0-.07,0-.15.2-.13.14-.21.17-.16.08-.21,0,0,.06h-.08l-.11-.06-.1-.11-.09-.16-.09-.09-.07,0-.16.09-.21.25-.1.06-.08,0-.1-.07-.2-.2-.11,0-.08.07,0,.16.18.39.17.28-.14,0-1.22-.37-.16-.09-.22-.23-.19-.14-.32-.37-.24-.2-.08-.15,0-.11.07-.15.5-.49.18-.1.39-.12.09-.08,0-.05-.1-.11-.5,0-.45-.08-.39-.2-.07-.06-.06-.13-.07-.17,0-.2.09-.23,0-.15,0-.09-.49.55-.2.2-.16-.06-.11-.09,0-.1V61.4l0-.08,0,0-.26-.23-.11-.18,0-.18.1-.19.09-.14.08-.09.24-.08.88-.14.62.14.21-.47.15-.15.42-.16.65,0,.45.09.22.11.29.24,0-.07-.07-.22v-.18l.12-.32,0-.2,0-.21-.13-.22-.23-.28-.12,0-.14.07-.16.16-.34.39-.16.08-.26,0-.15-.05-.14-.06-.23-.2-.08,0-.1.09-.11.22-.11.15-.11.09-.1,0-.14,0-.58-.34-.13-.15V58.3l-.17-.22-.2,0,0-.08.26-.35.18-.15,0,0h-.27l-.19.19-.1,0h-.25l-.25-.1-.11-.08-.11-.19-.13-.11-.38-.16-.09-.09-.08-.15-.32-.42L1963,56l0-.18.22-.38v-.09l-.09-.17,0-.12,0-.17.19-.38.07-.1.34-.23.35-.33.12-.07.11,0,.45,0,.14-.08.12-.16.2-.16.4-.25.91-.38.06-.05v-.07l-.08-.2,0-.09.19-.18.42-.28.28-.14h.19l.14-.06.21-.18.12,0,.71-.07.31.1h.16l.1-.07.13-.2.24-.51.13-.32.13-.48.15-.77.12-.76.08-.75.06-.47,0-.16.15-.22.15-.16.27-.15,0-.07-.11-.12-.1,0-.1,0-.17.17-.23.12-.22,0-.16,0-.15.15-.24.13-.15,0-.29-.23-.14,0-.37,0-.11-.08-.09-.17-.07-.23-.06-.3v-.32l.13-.57,0-.16.36-.65.22-.31.21-.23.16-.13.15-.06.15-.15.26-.46.27-.41.34-.75.17-.2.57-.34h.16l.13.08.13.17.35.76,0,0-.06-.28-.13-.86,0-.35.2-.39.09-.07.21,0,.34.12.23.13.18.21.2.13h.11l.08-.1.11-.33.14-.56.06-.7,0-.85,0-.63-.06-.39,0-.34.18-.4.16-.3.37-.42.31-.12.18,0,.24.2.34.12.3.39.48.86.32.44.27.19.26.32.39.69.21.29.12.11h.1l0-.19-.19-.41-.29-.45-.63-.82-.34-.58-.32-.68-.23-.41-.41-.4v-.16l.51-.58.92-.51,1-.4.35,0,.61-.16.06-.26.13-.11.57-.36h.16l.25.17.27.33.12.29.17.49.08.69v2.51l0,.15.11-.22.14-.42.12-.3.1-.46.07-.63,0-.48-.17-.53v-.9l.08-.49h.23l.94,1.66.37.35.42.86.49-.09.46.1.2,0,.1-.13-.14-.36-.65-1-.29-.79-.21-1,0-.54.16-.1h.72l1.09.47,1.38,1.6.69.51,1.22,1.77.37.26.15.06.11-.22.07-.23v-.31l-.06-.39,0-.46v-.53l.08-1.05.2-.35.09-.4-.08-.72-.23-.5-.9-1.32V30l.19-.17.26-.1,2.23.31.39.12.16.11.08.16.09.06.48-.18,0-.33-.06-.21-2.58-.57-.48-.2-.25,0-.25.15-.53.08-.24,0-.32-.69.29-.85.24,0,.45.33.27-.47.43-.38.43-.14.92-.84.17-.08.22.05.48.22.18.21.22.44.13.14.15,0,.2.2.3-.65.26-.7.31-.45.43.26.28.34.25.41.35.22.61,1.35h.11l0-.11.06-.25,0-.37.07-.51,0-.19-.5-.57-.1-.22-.1-.37v-.3l.1-.24.09-.11.33.1.11-.08.1-.21.12-.39.1-.1h.22l.33.25.3,0,.1-.11,0-.24,0-.16,0-.07h1.06l.27-.06.2-.18.26,0,.22.12.27.23h.27l.41-.39.38-.18,2.1.05.7.24Zm-13.76,11-.18.12-.4-.71-.61-.73-.55-.48-.51-1.3,0-.47.07-.41.45-.07.36-.19.91.83.45.68.16.56,0,1.1Zm24.17,1.56-.1.21-.24-.08-.31-.59-.21-.49,0-.57.11-.26.17-.05.23.5.23.66.14.67Zm1,11.75-.39.6-.58,0-.34-.27-.1-.42.13-.46L2013,47l.53-.24.47.14.06.47-.19.6Zm-1.28,8.89-.12.16-.08-.47-.08-.63v-.72l.18-.36.1-.09.07.09,0,.32v.64l.07.44Zm1,1.45h-.18l-.06-.11,0-.2.25-.65.08,0,.12.07,0,.33-.08.33-.21.28ZM1964,59.64l-.33,0-.32-.17-.11-.12v-.2l0-.07.18-.06.14,0,.1,0,.23.12.17.12.11,0,0,.17Zm49,5.14-.1.1-.36-1.6v-.6l0-.45.17,0,.13.25.07.94Zm.54,2.37.07.39,0,.35.12.22.24,0,.1.41-.18.16-.71-.06-.29,0-.2-.25v-.45l0-.44.2-.26.17.22.21-.16.21-.13ZM1979.34,76l-.13.21-.11.12-.23.36h0l-.06-.05,0-.09-.09,0,0-.06v0l0,0-.06,0-.1,0-.09,0-.07-.16.13-.11.08-.09.3,0,.08,0h.06l.08,0,.18-.11,0-.05.16.06,0,.1Zm1.37,5.2-.09,0-.25-.15,0,0v-.15l.08-.15.15-.21.11,0,.07.13.06.18V81l0,.09,0,.07,0,.05Zm25.91.33,0,.17v.19l-.05,0,.08.11,0,.08v.05l0,.12-.36.15-.11.07-.12.18-.16.15h-.05l-.06-.16-.25-.12-.46.06-.54.15-.19.07-.1,0,0,0v-.08l.07-.22,0-.06.13-.07.08-.2,0-.22,0-.3.08,0,.21.1.14,0h.24l.33,0,.26-.12.48-.35h.08l.06.13,0,.06.14.1,0,.05Zm-24.2.19h-.12l-.29,0,0,0v-.07l0-.18.13,0,.15.1.16.14,0,.06-.06,0Zm-1,2.5.3.22.33.15,0,.07,0,.1v.11l0,0,0,.06.07.07v.09l-.08.14-.11.16-.61.33-.21.06-.53.22h-.2l-.1-.1-.14-.09-.06-.07-.06-.1,0-.07.1,0h.15l.21-.07-.06-.07,0,0,0-.09-.09,0-.07,0-.13,0-.33,0-.22-.09-.06,0-.06-.09,0-.13.07-.5,0-.13.11,0,.28.11,0-.05-.3-.19-.12-.11,0-.09,0-.13v-.15l0-.08.08-.1.3-.17.34.06.58.21.08,0,.17.17.35.53Zm1.58,1-.14.09,0,0,0-.07-.08-.32,0-.16,0-.19,0-.14.13-.15.11,0,.14,0,.24.16,0,.05,0,.09-.14.11-.06.24v.22l0,.08Zm12.9,9.72h-.15l0-.17v-.19l.16-.06.09.13,0,.19,0,.1Zm-8.52,9.71-.11.23-.1,0,0-.1-.11-.05-.11,0v0l.36-.25.18-.06,0,.1,0,.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GM"
                                    d="M2014.62,163.35v-.08l0-.18.07-.08.08,0,0,0v.08l0,0,.13,0,.13,0h.08v0l0-.06.16,0,.16,0,.18,0h.16l-.12,0-.26,0h-.26l-.2.1h-.08l-.08-.1,0-.12h1l.07-.13.15-.06.15,0h.07l.09,0,.15.11.1,0,.08,0,.06.06.1.05h.11l.08,0,0,0h.16l.11.06,0,.07,0,.07-.15,0-.22.06-.18,0-.21-.08-.13-.05-.05,0-.08,0-.07,0-.06,0-.05,0,0,0,0,.05,0,0,0,0-.18,0-.16,0-.09,0h0l0,.16h-.75l-.06,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GN"
                                    d="M2019.58,164l0,0,0,.05,0,.07,0,0v0l.07.05.1.09h0l0,0,.08-.07.06-.07,0,0h.07l0,.05.06.11.06.1h0l0,0h0l0,0h0l0,0,.12-.14.08,0h0l.06,0,.1,0,.15.05.17.07h.1l.05-.09.07,0,.09,0,.08,0h0l0,0V164l0-.07v0l0,0h.14l.09,0,.07,0,0,.06,0,.11,0,.11.09.17v.24l0,0h0l0,0,0,.1,0,0h0l.09.06.06,0h0v0l0,0,0,0-.06,0,0,.05-.09.13v0l0,0h.07l.09,0,.06,0,.06,0,0,0v.19l0,.12,0,.13,0,0,.21.11,0,0v0l0,.06,0,0-.06.06-.05,0,0,0v.45l0,.06.05,0h.13V167l.07,0,0,0,0,0-.12.06,0,0,0,.09v.09l.15.06.06.07,0,.07v.14l0,0h0l0,0,0,0h-.36l0,0v.19l0,0,.07,0h.09l0,0V168l0,.05,0,0,0,.11v.1l-.09.15,0,0-.11,0h-.07l-.06,0,0,0,0,0v0h-.08l0,0,0,.05v.1l0,0,0,.07,0,.06,0,.06h-.08l-.07,0h-.06v0l0,0,0-.05,0,0-.09,0h-.07l0,0v0l0-.06,0-.06v-.12l0-.09,0-.06V168l0,0,0,0v-.16l0,0,0,0,0,0,0,0h0v0h0l0-.07h0l-.24.09v0l0,0,0,0-.08,0h-.15l-.09.11-.06,0h-.12l0,0v0l0,0,0-.12.11-.12v0l-.05-.07,0-.1v-.18l-.1,0h0v0l0-.06,0-.06v0l-.06-.07-.1-.12-.09-.14-.08-.11-.06,0-.06-.08,0,0-.07,0h-.58l0,.06-.2,0-.12-.05-.14,0-.07,0,0,.07,0,.07,0,0v0l0,0,0,0,0,.07-.06.1-.07.07-.12,0,0,.11,0,0,0,0,0,0h-.09l-.06,0v0l0-.09,0,0-.09-.09v-.05l0-.05-.12-.12h-.12l0-.1v-.12l0-.07v-.07h0l0,.05-.07,0-.12-.07-.06-.08v-.08H2017l-.24-.11-.16-.28v-.07l0-.11v0l-.08.07v-.05l-.06-.11,0-.07,0,0h-.05l0,0,0,.13h0l0,0v-.1l0-.05,0-.07.15-.31,0-.07,0,0h.07l.14,0,.12-.07.05,0h.29l.21-.07v-.26l-.07,0,0,0,0,0,0,0v0l0,0h.12l0,0,0,0,0-.08v-.08l0-.1v-.08h.59l0,0v.11h.07l0,0,0,0h0l.09.07.08,0,.08,0,.08,0h.07l.06,0h.1l.12,0,.1,0h.15l.07,0,.22,0h.17Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GO"
                                    d="M2073.71,186.11h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GP"
                                    d="M1973.52,160.35h-.18l0-.07,0-.06,0-.07,0,0,0,0,.06,0v.05l0,0,.17.1-.14,0Zm-.24.22-.08,0h0l-.05-.09,0-.22,0,0,0,0,.1,0,0,0,0,0,0,.05v.17l0,0Zm.33.11h-.08v0l0,0h0l0,0v0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GQ"
                                    d="M2038.14,172h.16l0,.05v.07l-.14.21,0,.09-.05.07h0l-.16,0,0,0v0l0-.08v0h.1l0-.09,0-.09,0-.06.06,0Zm2.39,1.46v1.07h-1.25l0,0h0l0,0-.05,0v0l0-.05H2039l0,0h0v0l-.08-.05h-.06l0,0,0-.14.06-.13.08-.09,0,0,0,0,.06-.16.09-.13,0-.13,0-.21h0v.05l0,0,.11,0h1.24Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GR"
                                    d="M2054.36,133.25l.08,0,0,0,0,0,0,0h0l0,.11,0,.13,0,.06h-.06l-.19.13v.21l0,0v0l0,.05-.09.08-.05.07-.07.1h-.06l0-.05-.14-.09-.33,0-.16-.07h-.07l-.13-.07-.1,0-.19.14-.11,0-.11-.08h-.07l-.09,0-.14.15-.14.08-.12,0H2052l0,.08,0,.06.1.1-.05.08,0,.08h.16l.16.1.08.1,0,.11-.1-.08-.07-.08-.09,0-.13-.07h-.09l-.08,0V135l.09.09.09.06.05,0,0,.11,0,0,0,0-.11-.07-.15-.24-.22,0,0,0,0,.13,0,.05.19.14,0,0h0l-.21-.08-.06-.12,0-.15-.19-.11-.19-.11,0-.11,0,0,0-.08h-.1l-.06.05-.11.05v.08l0,.08,0,.11,0,.19,0,.1.22.28.08.2.06.08.11.09.12.15,0,.09,0,.13-.1.09h-.06l0,0,0-.09v-.06l-.15-.08-.07,0-.07.05,0,.11,0,.07,0,.09h.1l-.13.11-.12.06h-.19l0,0,.06,0h.05l.08.06.22.06.11.09h.11l.11.16.18,0,.11.16.14,0,.12.06,0,.06,0,.1v.22l0,.16V138l0,0h0l-.09-.12-.13-.12-.14-.15,0,0h0l-.08.05-.21,0-.09.05,0,0v0l0,0,.06.07V138l.05.11.06,0h.08l0,0v.05l0,0,0,0v0l-.22.08-.05,0,0,0-.05,0v-.09l-.07,0-.07-.05h-.08l-.07-.06-.05,0,0,.18.08.12.13.31.06.19v.09l0,.15.07.11,0,.11h-.05l0,0-.07,0-.14-.18,0-.11h-.16l-.11.25v.13l-.06,0-.05,0v-.22l-.13-.2-.06,0,0-.07-.05-.07h-.07l-.05,0v.22l0,.07-.14-.14-.14-.25v-.14l.1-.13v-.09l-.1-.17-.14-.12-.08,0,0-.13-.08-.06-.06,0v0l0,0,.15-.13.08-.2h0l.09,0h.1l.08-.12.07-.06h.12l.27.15.29.09.14.08.08.07,0,0h.07v-.06l0-.05.06,0h.15l0,0,0,0,0-.05,0,0h-.05l0,0-.06,0-.09,0,0,0,0,0-.16-.06-.15-.11,0,.06-.06,0h-.09l-.24-.07-.15.05-.08,0h-.06l-.07,0-.09,0-.08-.1,0-.08,0,0v.08l0,.06-.11,0-.06-.05,0-.14-.06-.17-.11-.15-.09,0v-.15h.1l.17.06h0l0,0v-.07l0-.06h-.08l-.1,0-.13,0-.06,0,0,0-.11-.1-.1-.12-.15-.09-.1-.26-.09-.11-.09-.09h0l0,0,.07,0h.07l0,0,0,0v-.11h.06v-.06l0-.06,0-.07v0h0l0,0,0,0,0,0h.07l.07,0,0,0v0l0-.12,0,0,0-.06,0-.06,0-.07.07,0,.07,0,0-.08,0-.07v-.05l0-.07,0-.07v-.09h.33l.08,0h.05l.1,0,.05,0,.14-.07.14-.19.06,0h.13l.05,0h0l.15,0h.09l.1,0,.11-.05,0-.16,0,0h.34l.08-.08h.18l.09,0h.09l.12,0,.11-.06h.14l0-.08h.31l.09,0h0l0,.11,0,0,.05,0,.11.07,0,0,.05,0,.14,0,.13.06.1.09.12,0,.14-.05h.18l.06,0,.12,0,.14-.05.06,0,0-.06v-.11l0-.11,0,0v-.07l0,0,.09,0,.11,0Zm-1.43,1.35-.12,0-.12-.08v-.05l.07-.1,0,0h.09l0,.07v.14Zm.84.23-.1,0-.12-.1.11,0,.05,0,0,0Zm-.23.53,0,0,0,.07v.1h-.06l0,0v-.08h0v.05l0,0h-.06l-.05,0v-.18h.16l.05.06.06,0,0,0,.07,0v.06Zm-4.94.66,0,.06-.12,0-.08-.06-.07-.14-.15-.17v0l.06,0,.12,0,0,0,0,0v0l-.07.07v0l.05.06v0l0,.11,0,0,.06,0Zm5.84.12,0,.07.13.12,0,.07,0,.07v0l0,0h0v.05l.05,0-.08,0h-.07l-.21-.06-.05-.07.13-.09,0,0h-.09l-.09.12-.16,0,0-.05v0l.06-.1h.11l0,0,.07,0v0h.17l.06.06Zm-2.33.2,0,0,0-.1.08,0,0,.08,0,.05Zm-.1.06,0,0-.06,0-.07-.14Zm-.33.18.05.13.05,0,.1.05h0l.17.09.21,0,0,0,0,.07,0,0v0l0,0,0,.15,0,.14.08.06.09,0h.1l0,0v.12l0,0h-.06l0,0h-.08l0-.05-.1-.06,0,0v-.06l0-.05,0-.09,0,0,0,0v0H2052l-.1-.05,0-.13-.06,0,0,0,0-.05-.09-.1-.1-.07-.1-.06-.11,0-.09,0h-.05v0l.11-.05.15-.1.1,0h0l.1.09Zm1.16.18-.1,0h0l0,0h0l-.1-.07v-.11l.08,0v.07l.09.09Zm-3.68.23h-.09l0,0v-.09l0-.12,0-.06.06,0,0,.06V137l0,0Zm5,.46-.09.07-.1-.1v0l.07,0,0-.06,0-.07-.1-.11V137l.15,0,.09.07h.05l0,.07v.21l-.05,0v.07Zm-4.92-.13h-.05l-.06-.11,0-.08h.05l0,0v.06l0,0Zm-.14-.06v.13l.07,0,.09.12v.06l0,0-.14-.06,0,0h0l0-.07v0l0,0,0,0-.05,0h0v0l.06-.14,0,0,0,0h0l0-.08v-.09l0,.11Zm2.71.53,0,0h-.07l0,0h0l0,0,0,0h0l0,0v0Zm1.33.19,0,.08L2053,138l-.08-.06,0-.06,0,0,0-.07.06,0h0l.06.08h.09v.06l0,.07v0Zm-3.78,0,.09.11-.07,0-.09.07-.1-.09-.07-.09v0l.07-.08.06.09h.07l0,0Zm5.47,0,.11,0h.09V138H2055l-.12.07-.05,0-.06,0h-.13l.05-.07.1,0Zm-2.28.28-.06.05v-.08l0-.09h.06l0,0-.05.09Zm.83,0,0,.07h-.06l-.09-.08,0,0v0h0l0,0,.13,0Zm.72.08H2054l0,0,.08-.08h.12l.1,0h0l-.06.07-.08.06-.16,0Zm-.58.13h-.09v-.09l0,0,.11,0v0Zm-.42-.09v.12h0l0,0v-.12l0,0Zm-.47.18,0,0v-.08l0,0,0,0,0,0,0,0,0,0,0,.08Zm.08.25,0,0-.06,0v-.06l0,0,0,0v.08Zm.94.18-.08,0-.06-.06,0-.1.15-.14h0l0,0v.13l0,.08Zm-.24-.12-.08.09h-.06l0,0,0-.08.09-.05h0v.07Zm1.6.13h-.09l0-.09,0-.07.07,0,.05,0h0v0l0,0Zm-2.12,0h0l0-.05v-.07h0l0,.09Zm1,.15h-.11l0,0,0,0v0l.09,0,0-.06.06,0-.07,0Zm1,.08h0l0-.06.1-.07.14-.07h.05l.08,0-.15.07,0,0H2055l-.07.05Zm-1.45.06h0l-.06-.07,0,0,0,0,.1.09,0,.05Zm-.78-.11v.09l-.19,0v-.08l0,0,.06,0,0,0v0Zm3.07.24,0,0-.05,0v0l.05,0h0v.1Zm-1.29,0-.08,0,0,0-.06,0v0h.06l.05,0,0,0h0l0,.05Zm-.91.22,0,.06-.06,0,0,0v-.09h0l.05,0v.05Zm2.18.52-.07,0h0l0-.06,0-.12,0-.09v0l.06-.05,0-.07.09-.08.23-.09h.06v.07l-.08.19-.07.09,0,.07-.12,0-.11.13Zm-4.42-.29v.05l-.09,0,0-.05v-.11l0,0,0,0,0,.06.09.09,0,.07Zm3.81.82,0,.06,0,0,0-.06,0-.1.08-.15v-.07l.06,0,0,.12,0,.09,0,.08,0,.09,0,0Zm-3.07-.08h.17l.05-.07h.07l0,.07-.07,0v0h0l.05,0h.07v0l0,0,0,0h.2l.08,0h.35l.09.07h.18l.17,0,.08,0,.15,0,0,0,0,.16v0l0,0,0,0,.05,0,.13,0h.13l.11-.1h0l0,.05,0,.12,0,.08v.05l-.08,0h-.11l-.2,0-.2,0-.37.06-.38,0,0,0v-.12l0,0-.11,0-.11-.05-.44-.07-.1,0h-.23l0,0,0,0v-.13l0-.14,0,0v0h.05l0,0v-.06l0-.06,0,0,0,.09,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GS"
                                    d="M1995.86,234.65l.09.08.07,0h.08l0,0h.09l.09.13,0,.11.1,0,.08.09h0l0,0,.06-.05,0,.06.05.12.06,0,0,.12,0,.15,0,0h.06l.06,0,0,.13v.12l.1.08-.06.05-.07.07-.13,0,0,0-.11-.12-.06-.14-.12-.19,0-.06,0,0-.11,0-.1-.05-.08-.1,0-.06,0,0H1996l-.07,0-.07-.07-.31-.18-.13,0,0-.05v-.09l.07-.06-.28,0-.09,0,.06,0h.38l.14,0,0,0,.12.08Zm10,7.25v.1l-.14-.09,0,0,0-.05h.09l0,0,0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GT"
                                    d="M1947.85,158.83v1.84h.31l.05,0h0l.08.06.1,0,.06-.08,0-.05,0,0v0l.34.21,0,0-.09.08-.15.13-.14.11-.14.11-.12.09h0l-.16.07,0,0,0,.13,0,0,0,.07,0,.12v.06l-.11.07,0,.07,0,0h-.05l-.08,0h0l0,0v0l0,.07v0l0,0-.09,0,0,0,0,.06,0,0h-.07l-.06,0-.1.09,0,.07v.09l-.36-.16-.12,0H1946l-.22-.06-.24-.12-.16-.1-.39-.3,0,0,0-.05,0-.06v-.12l0-.08v-.06l0,0,0,0,0-.05-.12-.15v0l0,0,.09-.17.12-.19.13-.22.07-.13h1.19v-.18l0-.08v0l0,0-.1,0,0,0V160l0-.06,0-.07-.1-.08-.15-.08-.12-.1-.11-.13-.08-.08-.07,0,0,0h.39v-.54h1.69Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GU"
                                    d="M2163.58,163.17h0l0,0V163l.13-.09.05-.09h0l0,0,0,0-.15.15Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GW"
                                    d="M2017.42,163.72v.08l0,.1V164l0,.08,0,0,0,0h-.12l0,0v0l0,0,0,0,0,0,.07,0v.26l-.21.07h-.29l-.05,0-.12.07-.14,0h-.07l0,0,0,.07-.15.31,0,.07,0,.05,0-.06,0-.13h0l-.08.1h0v-.12h-.1l-.07-.07V165l0,0h-.1l0,0,0-.08.16-.07h.17l0-.06-.1,0-.08,0,0,0h0l-.09-.1v-.05l0-.06,0,0h.19l.07,0h0l0,0v0h0l-.07,0-.22,0-.08,0-.12.09-.16,0-.11,0,0-.12v0l0,0-.16,0-.13-.06,0-.07v-.08l.06-.06v0H2015l-.12,0-.25-.14h.27l.07,0,.09,0,.09,0,.28,0,.25-.05.18-.09.17-.09h1.35Zm-2.08.74,0,.12-.06,0,0-.06v0h.16Zm.4.33v0l-.06,0,.08-.08h0v.06h0l0,0Zm-.33.06,0,0h0l0,0v-.05l0-.06h0Zm.17.24v0h0l0-.07,0,0h.06v0l0,0,0,0Zm-.36.14-.08,0,0-.05v0h.05l0,0,0,0h0l0,.08,0,0,0,0Zm.2,0v0h-.05v0h0v-.08h0l0,0h0v.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="GY"
                                    d="M1977.33,170.34l0,0v0l0,.07,0,0,0,.08h.07v0l0,0,0,0,0,0v.06l0,0-.07,0h-.28l0,0,0,0h0l0,0,0,.06,0,0,0,.05,0,.06,0,.08,0,.07v0l0,.1-.05.1,0,.06v.07l0,.09.11.13,0,.07,0,.1.11.08.06.06v.12l0,0h.16v0h.11v.2l0,0,0,0v.1l0,0v.1l0,0,0,0h0v0l0,.07,0,0h0v0l0,.07h0l0,.06v0l0,.07.05,0,0,0,0,.1,0,.07.07,0h.06l0,0,0,0h0l0,0h-.11l-.07,0h-.07l-.12,0h0l0,0,0-.06h0l-.07,0-.07,0h0l0,0,0,0-.08.12,0,0,0,0h-.18l-.08,0-.06,0h0v.1l0,0h-.1l0,0h-.1l0,0h0l0,0v0l0,0h-.07l0,0,0,.08v.06H1976l0,0-.05,0h-.07l0-.05,0-.05-.12,0-.12,0-.08-.08,0,0,0,0-.1-.1,0-.06-.06,0-.06,0v-.09l0,0h0v-.37l-.09,0,0,0-.06-.2,0-.1v-.07l0-.2,0-.09.07-.18,0-.06v-.11l0-.11.11-.07,0,0v0l.06-.06,0-.06,0-.05v0l0,0,0,0-.06-.13,0,0,0,0v-.05l0-.06v0l0,0-.08-.06h-.07l0,0h-.14l0,0v0l0,0,0-.06,0-.07v-.31l-.08-.06,0-.05,0,0h0l-.06,0-.09.06h-.06l0,0h-.11l-.07,0-.08,0-.2-.22-.19-.22-.2-.21v0l.08-.1.07-.08.06,0,0,0,0-.15v-.06l0-.06,0-.07,0-.06,0,0h0l.09,0h.07l0,0,0,0h0l.09,0,0,0,.08-.05.18-.08,0-.05,0-.09v0l0,0h-.11l0,0-.06,0,0,0v0l0-.06v0l-.09-.12v0l.06-.05,0,0,0-.11,0,0,.12,0,0,0,.07-.06.09-.07.13-.05,0-.11,0,0,.1-.06,0,0v0l-.17-.22h0l.13.15.08,0h0v0l.07,0,.18.1.25.17.36.31.1.12.07.05.11.14,0,.07V169l-.09.18,0,.14v.18l0,.1.07-.05,0-.17.06-.1.08-.1.11,0,.12,0h.09l.08,0,.18.17.17.14.06.11.18,0,.11.09,0,.07,0,.2,0,.29Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="HK"
                                    d="M2135.47,154.22h0l0,0v0l0,0v0l0,0v.05l0,0-.12-.05-.1,0h-.08l0,0v0l.1-.06v0h0l0,0h0l0,0h.09l0,0Zm-.25.32h-.13v0l0,0,.15-.05,0,.06v.06Zm.22,0,0,0-.07-.07v0h.05l0,0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="HM"
                                    d="M2098.06,233.21l-.11.07h-.11l-.05-.05-.07-.18,0,0,0-.05v0h.05l.08.05.18,0,.13.1.1,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="HN"
                                    d="M1950.88,160.13l-.07.06v0l0,0,0,0h.05v0l0,0Zm-.5.08-.15.08h0l.07-.06.11,0,.09,0h.08l-.15.05Zm3,1.32h-.23l-.12,0,0,.06,0,0h0l-.07,0-.11.06-.1,0h-.11v0h-.07l0,0h0v0h0l0,0,0,0,0,0h-.08l-.1,0-.08,0,0-.08-.07,0-.11.06,0,.06v.08l0,0h-.05l0,0,0,.08v.06l0,0,0,0h-.07l-.08.07-.09.11-.1.07-.09.05,0,0v.06h0l-.18-.12,0-.08,0,0-.06,0-.08.09-.08.12h0l-.22,0h-.11l0,0v.1l0,.22,0,.09,0,0H1950l0,0v.1l0,.06-.05,0h-.3v-.1l-.07,0,0-.08,0-.06v-.07l-.1,0-.1,0h-.06l0,0,.07,0v0l0,0,0,0v-.12l0-.15v0l-.07-.05h-.17l0,0,0-.05-.07,0-.12,0-.12.07,0,0h0v-.11h0l-.07,0h-.07l0,0,0,0-.09-.05,0,0-.12-.09,0,0,0,0,0,0h-.05l-.15,0h0l0-.05,0-.06.11-.07v-.06l0-.12,0-.07,0,0,0-.13,0,0,.15-.07h0l.12-.09.14-.11.14-.11.15-.13.09-.08,0,0,.09,0,.07-.06,0,0,.1-.08h0l.16,0h.08l.07.07.05,0,.1,0h.09l.35.07.14,0h.25l.12,0,.16-.1.1,0,.12,0v-.05l0,0,.18,0,.28.1.3,0,.1-.05.07,0,.3.1.08.08h.07l0,0h0l-.06,0,0,0,.24.05.45.37v0l-.2-.11h-.1l0,0v.08h0l0,0,.08,0,0,0,.06.06,0,.06h0l0,0h.08l0,0h0l0-.07-.11-.06h0l.25.13.07.15.06,0,.06.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="HR"
                                    d="M2045.31,127.13l0,0,.17.09.11.1.06.12.09.08.11.07.08.08.07.11.09.06h.11l.07,0,0,.06.06.05.1,0,.14,0h.3l.06,0,.08,0,.09,0,0,0,.1-.13,0,0,.1,0,.06,0h0V128l0,0,0,.09,0,.15,0,.07,0,.05.1,0v0l0,0,0,.05v.08l.08.08.17.08h.05l0,0,0,0v.08h-.17l-.06,0v.06h-.06l0,.22,0,.06,0,0h-.05v.06h-.06l-.1,0,0,0v-.08l0-.06-.08-.07h-.16l-.06,0-.06,0-.07,0h-.06l-.07,0-.13,0,0,0-.06,0h-.06l-.11-.1h0l-.1.05h0l0,0-.13,0H2046l0,0-.08,0-.19-.14-.11.11-.24,0-.08.07-.08.14-.06.06-.06,0L2045,129l-.12-.15-.06,0h-.07l-.06,0,0,0,0,.22,0,.2v.12l.14.11.15.18,0,0,0,.06,0,.16,0,.18.08.11.07.09.09.07.11.11.09.13,0,0,.18.17.17.17.15.06,0,0v.13l0,0,.1.14.2.2,0,0v0l0,0,0,0,0,0-.19-.19-.18-.13-.21-.22-.28-.09-.19-.11-.12,0-.12,0h-.08l-.06,0,0-.06v-.11l-.11-.1-.15-.1-.15-.12-.28-.34-.06-.11,0,0h.05l0,0h.07l.1,0-.08-.07-.11-.07-.26-.28-.08-.14v-.14l0-.2,0-.14-.21-.19-.07-.09-.15-.06h-.07l0,.08,0,.16-.14.21,0,.09-.07.12h-.1l-.11-.2-.1-.16,0-.07v-.09l-.08-.32,0,0,0,0,.24.07,0,0,0-.05v0h0l.09,0h.26l.06,0,.07-.11,0-.07h.06v.06l0,.05.08.08,0,0h0l0,0h0l.14.07h.13l.09,0,0,0,0,0v-.1l.06,0v0l-.08-.07v0l.16-.09.16-.05,0,0,0,0v-.19l-.07-.08v-.09l0,0,.06,0,.08,0,.06,0,.07,0,.07,0,.06-.09h.15l0,0,0-.13,0,0,0,0,0,0,.1,0,.08,0Zm-1.57,2-.11,0-.06,0v0h-.09l-.06-.06v0l.08-.06,0-.1,0,.06.07.12,0,0,.06.11Zm-.3.41v.05l-.06-.06,0-.11-.07-.19v0l0-.05v0l0-.17,0,0h0V129l0,.06.06.08v.32l0,0v0Zm.32-.12,0,.05-.08-.05-.08,0,0,0v0l0,0h.06v0l.06.09Zm.33.54,0,0-.06-.07-.06,0,0-.06-.07-.06,0-.08-.12-.15v0l0,.06,0,0h0l.1.1.1.12.12.11h-.05Zm0,.53v0h0l0,0h0l-.22-.28,0,0,.08.06.22.25Zm0-.18v.05l-.11-.09,0-.05v0l.15.12Zm.13.12.06.09-.06,0-.06-.06,0-.06Zm1.3.89h-.14l-.13,0-.06,0v0l0-.06h.14l.22,0,.05,0,0,0-.08,0Zm.38.18h-.48l-.11,0-.14-.07,0,0,.13,0,.12,0,0,.05.34,0,.12,0Zm.44.29.06,0h.06l0,.07.07.05.11.08.08.07.16.11,0,0,.08,0v0l0,.05,0,.06-.17-.12-.16-.13-.31-.21-.22,0-.3-.16-.2-.06h.16l.47.22,0-.06Zm-.94-.13.17,0,.12,0,.12,0,.07,0v0h-.09l-.1,0-.12,0-.1,0,0,0,0,0v-.05Zm.88.29.13.08-.37-.11h.08l.16,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="HT"
                                    d="M1963.06,156.68l0,0v0l-.1,0-.09,0h-.05l-.06,0,0,0h.11l.11.05Zm.82.31,0,0,0,.2v.06l0,.09v0l.09.09v.06l-.08.08-.06.06,0,.07.05.06v0l0,.07-.07.08,0,0h-.12l0,.08.06.09.11.08,0,.06,0,.07v.16l-.08-.08-.09-.06,0,0h-.51l0,0h-.26l-.26,0-.11,0-.1,0h-.24l-.1,0-.07.07v.06l0,0-.1-.1-.09-.07-.1,0-.21-.08,0,0,0-.06.08-.17.1,0h0l.12,0,.11,0,.11,0h.16l.09,0,.62.07.12,0h0l0,0,0,0,0,0h.18l0,0,0,0V158l-.1-.06-.17-.15-.15-.17.06-.06,0-.1,0-.1,0-.1-.15-.08-.18-.08-.24,0-.07,0,0-.06,0-.09.08,0,.09,0,.09,0,.23,0,.22,0,.19.09.19.07.25,0,.11,0,.05,0Zm-1,.91V158l-.24-.08-.19-.1v-.06h.1l.09,0,.14.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="HU"
                                    d="M2050.49,124.54l.09,0h0v.07h0l0,0,0,.06,0,0,.07,0,.09,0,.06.1.09,0h.08v0l0,.05,0,0v.1l0,0,0,0-.16.17-.07,0h-.17l-.06,0h-.06l0,0-.06.09-.07.08-.06,0,0,0v.15l0,0,0,.05,0,0-.08.23-.05.07-.06.06v.1l-.06.12-.08.12,0,.05,0,.06-.08.08,0,0h0l0,0,0,.12v.09l-.06,0,0,0,0,.07,0,0-.07,0-.19,0h-.07l0,0v0l0,0,0,0h0l-.09,0-.21.05,0,0,0,0,0,0-.21,0-.09,0h-.11l-.1,0-.08,0-.06.09,0,0,0,0-.06,0-.05,0-.06,0h-.06l0,0h0l0,0,0,0-.08,0h0l-.06,0h-.15l-.1.13,0,0-.08,0-.08,0-.06,0h-.3l-.15,0-.09,0-.06-.05,0-.06-.07,0h-.11l-.09-.06-.07-.11-.08-.08-.11-.07-.09-.08-.06-.12-.11-.1-.17-.09,0,0v0l-.08-.12,0,0v-.09l0,0,0-.08v-.06l0,0h-.18l.15-.15.07,0h.12v0l0-.05v-.11h0l0-.11,0,0,0,0,0-.13v0h.06l.06,0,0,0,0,0,0-.08,0-.1-.19-.06v0l0,0,0,0,0,0h.09l.09.07,0,0,0,0h.22l0-.08v-.15l0,0v-.09l.06,0h.15l.15.14.15.11.11,0h.36l.3,0h.23l0,0,0-.06,0-.06v-.06l0-.09.12-.07.32,0,.19,0,0-.07.07-.07h0l.08,0,.09.06.08,0,.05,0,.17-.1.19-.1.13-.28v0l.14,0h.21l.1,0,.08,0h.12l.17-.06h.07l.05,0,0,0,0,0,0,.07,0,0,0,0,0,.05h0l.31-.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ID"
                                    d="M2143.48,185.48h-.12v-.08l0,0,.2-.06.08-.06.11-.11.07,0h0v.09l0,.05v0l-.1,0-.09.1-.19.06-.05,0Zm-1-.29h0l-.1,0,0,0,.08,0,.07-.06h.12v.08Zm1.42-.27-.08,0v-.07l.06-.08.06,0,0,0v0l-.08,0Zm-3.14-.86,0,0,.15.08,0,0v.06l0,0h.14l0,0,.05,0,.07.08.06.09.08,0,.05.07,0,.07-.1.09-.05,0h-.07l-.12,0,0,0-.13,0-.1,0-.08-.07,0-.08-.07-.06-.1-.05-.2-.13-.12,0h-.1l-.26-.06,0,0,0-.05,0,0,0-.05,0,0,0,0,.15-.06h.22l.17,0,.17,0,0,0,.08,0,0,0,0,.05Zm4.54-.3h0l.11-.06h0l0,0v.07l-.05.06h-.11l0,0V184l0,0,0,.05,0,.12-.06,0,0,.1-.11.08-.12.15-.1.07-.08.09-.08.06-.09,0h-.14l-.19.1-.1.05h-.11l-.09,0,0,0v0l0-.05,0,0,0,0-.1-.06v0l0-.12,0-.13,0-.08.15-.15.1-.08.05,0,0,0,0,0h0l.14,0,0,0,.05-.06,0,0,0-.07v0l.12,0,.06,0,.06,0,.17-.09,0,0v.08l0,0Zm-8.6-.27,0,0-.07-.06,0,0,0,0h0l.05,0Zm6.79-.2,0,.05h0l0-.06,0,0,.07,0h.12l0,0-.12,0-.05,0Zm-3.24.18h0l0,0,0-.08,0-.06,0,0v-.08l0,0,0,0v0h.06v.06l0,0,0,0,0,0v.07Zm3.56-.36,0,0h-.25v-.06l.07-.05,0,0,.07,0,.11,0v.08Zm-6.16.24-.12.19.05,0,0,0-.19,0-.08,0h-.05l-.2,0-.14,0v-.08h.15l0,0v-.12l0-.16.15-.14.08-.05.09,0,.22.07,0,0,0,0,0,0-.09.21Zm7.05-.26-.05,0,0,.1,0,0-.07,0-.05-.1h-.08l0-.09,0,0h.05l0,0h0l.12-.15h0l0,0,0,.1Zm-.33-.06-.13,0-.08.11h-.06l0,.05v.07l0,0-.06,0-.05,0h0l-.07-.05h-.09l.09-.08.12-.08v0h-.07v0h.12l0,0h0l.16-.09.06,0,0,0,0,0Zm13.81.11h-.05l-.23,0,0,0v0l0,0,.05-.06.08,0h0l.1.15v0Zm-19.69,0h0l0,0,0,0,0-.07V183l.06,0h.1v0l-.11.16Zm1.4-.12h0v-.07l0,0h0l0,0h0l0,0Zm5.08-.09,0,.06.07,0h.23l.12,0,.06,0v.11l0,0-.6.08-.06,0,0,0,.06-.09,0,0,0-.07.08,0Zm3,0,.17,0h.09l0,0-.09.08L2148,183l0-.07,0,0Zm-4.65.48-.13,0-.08,0-.07,0h-.35l-.24.11h-.09l-.08,0,0,0,0,0h-.16l-.08.09-.12,0h-.05l0,0h-.1l-.18-.07-.21,0-.22,0-.18,0-.1,0-.1.05,0-.05,0,0,0-.06v-.12l0,0,0-.05v-.05l0,0h0l.13-.05.12-.08.11,0h.07l.06,0h.05l.06,0,.09.07h.17l.11,0,.1,0,.15.05.08.07.07,0h.1l0,0,.07,0h.21l.05,0,0,0,.05,0,.18.12h.05l.1,0,0,0,0-.05,0,0,0,0,0,0,.14,0,.09-.05.06-.07-.15,0,0,0,.05,0h.07l.06,0,0,.17-.05,0,0,0,0,0-.08.06,0,.07,0,0,0,0Zm7.46-.27-.08,0,.05-.08.17-.16.06,0h.09l-.13.08-.12,0Zm-11.64,0,0,0h.05l.08-.06.06,0h.11l.05,0,0,.07,0,0,0-.08.05,0h.12l.06,0,.05.11v.14l0,0,0,0,0,0,0,0-.07,0h0l0,0h-.11l-.07,0v0h.06l0,0v0h0l-.07,0h-.05l-.18,0h-.05l0,0v-.1l0,0-.13.12,0,0H2139l-.19.07h-.12l-.21.08-.11,0h-.16l-.05,0-.09,0-.1,0-.08,0-.07,0,0,0v-.06l0-.08,0-.13,0-.06,0-.07,0,0h.06l.1-.06.09-.07h.06l.12.05h.2l.05,0,0,.07,0,0,0,0,.09.12h.08l.07,0,.12-.08h.09l0-.06-.05-.06-.07-.05h-.11l-.16-.11,0-.06,0-.07,0-.05.1,0h.05l.18,0,0,0,0,.11,0,.05Zm-2.58-.15.09,0,.13.15,0,0,0,0-.1.06-.21.09,0,.05-.05.08v.06l0,0h0l-.05,0,.05-.06v-.06l0-.06,0-.06-.1-.07-.1-.06-.1,0-.11,0,0,0-.06-.08,0,0v-.09h.14l.19,0h.1l0,0,.15-.1h0l.14,0,.1,0Zm13.27-.19,0,.08h-.06l-.12-.12v-.1h0l.15,0,0,.07v.06Zm-2.8-.27v.07h-.11l-.11,0-.05.06,0,.08-.15,0h-.13l-.06,0h-.06l-.08,0-.12.06h0v-.1l0-.06.12-.14.1,0h.12l.13,0,.1-.06.13,0,.11.08Zm.57,0-.06,0,0-.06v-.06l.09,0v.06Zm10.25.6-.22.13-.29,0h-.1l-.17,0,0,0,0-.12.13-.3.17-.27.06-.07.1-.06.1-.06.23,0h.21l0,0,.09.09.06.07,0,.1-.09.17-.1.17-.16.12Zm-6.65-.25H2151v-.07l0-.05.05-.08v-.09h0v0l0-.14,0,0h.05l.05-.08,0,0,0-.06.05,0V182l0,0,.08,0,.05,0,0,0-.08.06,0,.16-.06.18,0,.05-.08,0,0,0-.09.09,0,.07v0l0,0Zm.61-.74v.05l0,0,0-.06h-.1l0,0,.15,0,.06.09ZM2135.6,182v0h-.05l0-.06,0,0h.06Zm13.15.05,0,0-.07-.05v0l0,0h0l0,0,0,0V182Zm-7.28-.06h-.12v-.09l.11,0h0V182Zm-6.39,0,0,0h-.15l-.1.08-.07,0h-.4l-.26-.06,0-.07,0-.06.09-.1h1l.09.08v0l-.18.05Zm1.41-.12-.07,0-.07,0v0l0,0,.1,0h.06l.06,0,0,0,0,0h-.11Zm17.8-.2h0l0,0v0l0-.05,0,0h0v0l-.05.08Zm-27.13-.1-.06,0,0,0v0l.06-.06,0,0h0l0,0,0,.08Zm27.17-.09h0l0-.08h.05l0,0v0Zm.1-.1h0v0l0,0,0,0h0Zm-.26,0,0,.07,0,.07-.08.08-.05.13,0,0-.12.05-.1-.07,0-.06.05-.27h.07v0l-.07,0v-.22h0l.07,0,.07.09.09.06.12.05Zm-25.06-.4.1.11.08,0,.09,0h.2l.12,0,.12,0h0l.06,0h0l0,0,.09.09.09.08,0,0,.06.2.07,0,.09,0h.22l.25.05h.11l.08,0,.08,0,.22.06h.11l.12,0h.12l.06,0,0,0h.1l.09-.05.05-.08,0-.11,0-.11,0-.05,0,0,.05,0h.17l0,0,.14.19,0,0h.18l.09,0h.06l.09.05,0,0,0,0,.23,0,.09.08h.32l.1,0,0,.12,0,.11,0,0,.09,0,0,0v.23l.2.1.22.05h.23l.23,0,.12,0,.15,0h0l.29.13,0,0,0,.1v.1l-.05.24v.13l.06.14,0,0,.1.08v0l0,0-.11,0-.07,0,0-.06-.06,0h-.11l-.2-.05-.23-.08-.4-.18h-.11l-.11,0-.11.05-.12,0h-.17l-.22,0-.21,0h-.56l-.16,0-.26,0-.21,0-.2-.05-.53-.24-.17-.06-.53-.11h-.27l-.12,0h-.11l-.15,0,0,0-.06.05h-.22l-.28-.05-.1,0-.1-.05-.09-.06-.05,0-.24-.07-.2,0-.4,0-.09,0-.07,0,0-.06v-.06l0-.06,0-.06,0-.05-.3-.12-.24-.06-.1,0h-.1l-.11,0h-.12l-.05,0h-.15v0l0,0,.05-.06h0v.08h0l0,0h0l.09-.1,0-.05.05-.13,0,0h0l0,0,.07-.31.07-.09.08-.08,0,0,.09.05.17,0,.1,0h.1l.1,0,.14.05h0l.05,0,.07-.06,0-.09.11,0,.15,0,0,0Zm15.38,0v0l0,0,0,0v-.06l0,0,0,.06Zm-3.24.3,0,.15,0-.05v-.14l0-.07v-.28l0-.09.05.12v.36Zm-7.21-.45,0,0h-.09v0l.06-.06h0l0,0v0Zm18.53,0-.06.09,0,0h0v-.16l0-.12h.06l0,0h0l.06.12v.06Zm1.79-.13v.1l0,.06,0,.06,0,.09v.14l0,.09,0,0h0l0,0-.18,0-.08-.06-.07-.06,0,0-.08-.07,0,0v0h.14v0l0-.13-.11-.08,0,0,0,0,.09,0,.1-.14,0,0,0-.08h.1l0,.05v.08l.05,0,0,.1Zm-1.68.17-.08.08.08-.18v-.1l.07,0,.09-.29h0l0,0,0,.2-.14.15Zm-28.18-.38h-.08l-.14-.11,0,0,0,0h0l.16.07,0,0,0,.07Zm19.6-.2v.1h0l0,0v-.08l.06,0Zm-1.46.16-.06,0-.11-.1,0-.09v-.05l0,0h0v-.05l0,0h.05l0,.06,0,0,0,.06Zm.56-.16,0,.06-.05.05H2143l-.08-.05,0,.05h-.05l0-.06,0-.17.06-.06V180l-.05-.14,0-.07.15-.05.12-.07,0,0,0,.06,0,.23-.13.19,0,.12Zm.49-.66,0,.2v0l-.06-.07,0,0v0h0l0,.08v.07l0,0v.21l0,0h0l.09.06.05.05v0l-.06.06-.08,0,0,0h0l0,0,0,0v0l-.06.11,0,0-.07,0-.05,0h0l-.06-.11v0l.05-.05v0l0,0,.06-.07,0,0v0l0-.12V180l0,0,0-.1v-.2l.09-.16.08,0h0v0l.1.11Zm9.58-.28.05.05-.11,0-.16-.08v-.05l.14.08.09,0Zm-9.52-.12-.09.11h-.06l-.08-.07,0-.08v0l.05,0h.17l0,0v.07Zm4.91-.49-.16,0,0-.09,0,0,.08,0Zm-.27.09,0,0-.06,0h0v0h0l-.06,0-.06.06,0,0v-.06l.08-.07h.1l.13-.07h.06v0l0,0,0,0v0Zm.41-.12v0h-.09l0-.07v0l.07,0h0l0,0Zm-11.34-.08,0,.16-.06-.09.06-.1,0,0v.06Zm10.31-.13,0,0-.09,0,0,0,0,0h0Zm-10.42.5-.19.18,0-.05,0-.17,0-.11v-.08l0-.14,0-.11.11-.07h0v.13l0,.05v.08l0,.17v0l0,.05v0Zm9.74-.71.15.07,0,0,0,.05,0,0,0,0,.06,0,0,.07v.15h-.07l-.07,0-.13.09-.07,0H2147l-.05,0h0l-.13,0-.13-.06-.18-.1,0,0,0-.05-.09-.1,0-.06v-.17l0,0,0,0,.12,0,.08,0,.23,0h.24Zm1-.14-.05.08h-.1l.1-.05Zm-19.47.06v0h-.05l0,0,0,0v0l0,0,.11,0,0,.06Zm.54-.09,0,0,0,0V178h.08Zm20.55,0,.22.11h.36l.18.13,0,.09v.07l0,.08h.09l.07.11v0l-.05.27-.2-.1-.2-.12-.09,0-.23-.1,0,0,0,0-.1-.06h-.31v.1h-.05l-.12,0h-.12l-.09,0-.13,0,0,0,0,0v0h-.09l0,0-.05,0-.07.09,0,0h-.16l-.05,0-.13-.16,0,0,0,0,0,0-.05,0,0,.05v.06l0,0,0,.1-.05,0h0l0-.09v0l0-.05,0-.06.22-.26.08-.06.34,0,.2,0h.12l.07,0h.06l0,.05,0,0h.06l.1,0,.08-.07,0,0h.16l.14.05Zm-27.05.3,0,.13-.11-.09v-.11l-.07-.05-.05-.06,0-.16,0,0h0l.19.2v.1l0,0v0Zm7.18-.17v.09l0,0-.07.05,0,0h-.07v0l0,0-.08,0h0v.06l-.15,0h-.05l0-.08,0-.06v-.11l0,0,0,0V178l0-.06,0-.15.16,0,0,0,.19,0,.13.09.07.12-.08.16Zm-7.38-.24-.07.07h-.1l0,0v-.11l0,0h0l0-.07h0l.18.15Zm31.52-.57,0,0v-.1h0l0,0,0,.06Zm-31.85.21v0l-.15-.08-.07,0-.06-.09,0,0v-.09h0l.06,0,.05.1.07.1,0,.06Zm24.17.09v0l-.06-.05,0-.14,0,0,0-.13v0l0,0h0l0,0v.14l.08.19v.07Zm-2-.45v0h-.05l0-.07v0Zm2-.15.29,0,0,0-.31.05h-.11l-.33,0h0v0l0,0,.05,0h.25Zm-2.64,0-.07.08v-.08l0,0h0Zm6.64-.11V177l0,.05,0,.08h0v0l0,0,0,0h0l-.05,0,0,0-.11,0,0,0-.19,0-.13-.09v0l.24-.1.1,0h.09l.1,0Zm-5,0,.09,0h0l0,0h0l0,0v.06h.06l0,0,0,0v.06h-.17l-.11.05-.16-.05-.18.08-.11,0h-.1l-.08-.14.05-.16,0,0,.06,0h.17l.28.06Zm9.69-.1.36,0h.31l.17.07h.4l.07.05-.17,0-.08,0-.15,0-.12,0-.1,0,0,0-.13,0-.17-.07L2155,177v-.07Zm-24.46,0-.11,0,0-.09.07,0,.07,0Zm-2.68.05,0,.06,0,.06,0,.06.05.29.14.26.42.1-.07,0,0,0,0,0-.06.17v0l0,.06v.06h-.11l0,0,0,0-.05,0-.05,0-.08,0-.12,0-.12,0-.05-.08,0-.09,0-.14,0,0,0,0,0-.1,0-.11-.08-.05-.09,0-.05,0-.19,0h0l0,0-.1,0v-.06l0-.06.11-.05.06,0V177l0,0v0l0,0,0,0,.11,0,.05.07,0,.07,0,0,0-.06,0-.12.08,0h.09l.07,0,0,0,0,.07Zm16.19,0H2144l0,0v-.14l0,0h0v0l0,0,0,0V177Zm4.2,0-.06,0h0l-.13,0h-.16l-.17,0-.09,0-.06,0v-.05l.06-.12.12-.09,0,0,.09,0,.15.08.12.08.1.07v0Zm-4.56-.45,0,.06,0,.05,0,.09.1-.12.09,0,.05,0,0,0,0,0,0,.1-.06.05h-.08l0-.06h0l0,.12v0l-.05,0,0,0v0l.05,0,0-.18,0,0-.11.15-.09.07,0,0,0-.11,0-.14.07-.09h.06l.17,0Zm-12.45,0-.19.09h0l0,0,0-.19,0,0h.13l.08,0,0,0v.1l0,0Zm23.29-.06,0,0-.05,0,0-.07v-.06l.06,0,.05,0v.05h0l0,.07Zm-33,.61h-.08l-.19-.11,0,0v-.06l-.17-.26,0-.05.07-.21.18,0,.06,0,0,.1.1.16,0,.1,0,0v.05l.07.11.06.06v.1l-.1,0Zm29.36-.43,0,0-.11,0-.06-.06,0-.08,0-.06v-.05l0-.06v0l.21-.07,0,0h.08l0,0,0,.2,0,.11Zm-.08-.49,0,.05,0,0-.4.05,0,0v0l0,0h.1l0,0h.16v0ZM2155,176l.19,0h.07l.07,0,.09,0h.05l.16.14.08.09.12.08.08,0-.06.07-.13,0h-.05l-.1,0h-.08l-.07-.06,0-.08-.07-.19-.09.06-.11-.09h0l-.05,0,0-.06v0Zm-7.46.12v0l-.1,0h0l0-.13h0l0,.12v0Zm3.07-.23h0l-.1,0,.06,0h0l0,0h0l0,0,0,0-.05,0Zm-8.08-.11,0,0,0,0h-.14l0,0h0l0,0,.07-.07h.11Zm10.7.29.24,0h.23l0,0,.08.07,0,.05v.1l0,.09.06.09.06.1v.05l0,.1,0,.05-.07.08,0,.1,0,.11v.32l0,.1.15.29.09.19,0-.1v-.12l0-.05,0,0,.06,0v.16l.05.21h.06l.07,0v.19l0,.09,0,0,.11.07,0,0,.14,0h.11l.11,0,.07-.07.06-.07.21-.18.07-.08.06-.13,0,0,.21-.13,0-.05,0-.1.05-.09,0-.05.21,0,.21,0,.21-.08.09-.08v0l0-.09v0l0,0,.19-.11.21-.11.18-.07h.1l.09.07.09,0,.5.16.08.05.07.07.1,0,.11,0,.1.05.09,0,.22.11.28.12h.34l0,0,.05,0h0l.3,0,0,0,0,0,0,.09h.21v3.43l0,.1-.06.15v.12l.05.09,0,.06v2h0l0,0-.13-.11-.12-.11-.07-.11-.09-.1-.35-.3-.09-.1,0,0v0l0,0,.07-.15-.08.09-.09.08H2159l-.13,0-.12,0-.12,0-.06,0,0-.06,0,0v-.06l-.05.09-.1,0-.14.11,0,0,0,0v0l0,0v-.05l0-.12.06-.07,0-.13,0-.05v0l0-.05-.06,0-.05,0,0-.09,0,0-.06,0,0,0,0,0,.06,0h.05l.09,0h0l.1,0h-.11l-.19-.06-.12-.06-.11-.12v0l.08,0,.17,0-.06-.07-.07,0,0-.1-.05-.06-.11-.1-.08-.1-.06-.21-.07-.15,0-.06.06,0h-.09l-.08,0,0-.08.09,0h-.08l-.08,0h-.07l0,0v-.2l-.07,0-.06,0,0,0h-.05l0,0,0-.05-.42-.22,0-.07,0,0,0,0,0,0-.05,0h-.06l-.05,0h-.1l-.22-.07-.21-.11-.17-.05-.1-.06-.11,0-.25,0-.24,0h-.24l-.4-.23-.07-.11v-.06l0-.06h.17l-.12,0h0l-.09,0h-.05l-.08,0-.07,0-.11,0-.06-.06,0-.05,0,0h0l-.06,0h0l0,0,0,0,0,0-.05,0-.07-.06-.05-.09v-.21l.08-.1.05-.08h-.06l-.07,0,0,0v.21l0,.05h-.07l0,.09,0,.09-.09.11v.05l0,0,0,.05-.14.15h-.15l-.11,0,0,0,0-.05,0,0,0-.11,0-.12.11-.14,0-.12-.07-.11-.18-.15-.19-.14-.09,0-.14,0h-.05l0,0,0-.06.09,0,.15-.07h.08l.24,0,.07,0,.06,0,.16-.12.13-.16.08,0h.06l.07,0,.14,0,.1,0h.08l0,.05,0,0v-.07l0-.08.08,0h0l0,0v-.08h-.1l.05-.07,0,0,0,0v0l-.2.08-.2,0H2153l-.24,0h-.09l-.21,0-.12,0-.09,0h-.09l-.09-.06-.08-.07,0-.06-.05,0,0-.05-.05-.2v-.14h-.09l-.09,0-.41-.13,0,0-.06,0H2151l-.06,0v0l0-.09,0,0,.05,0,0-.05.06-.15v-.14l0,0,.15,0,.31-.08.08,0,.07-.07.08,0,0,0,0,0,.25-.1h.21l.21.05.21.09.17.11.19.08Zm-26.74-.36.08.09,0,0-.05,0,0,.06,0,0-.07,0,0,.07,0-.11-.07-.07,0-.07h0l0,0,.1-.07Zm21.3,0,.1.14-.07.13.05.07h.14l0,0,0,0,0,0,0,0-.07,0-.09-.05,0,0,0,0-.12,0h0l0-.06,0-.09-.09,0-.07-.09v0l0-.06v0h0l.07.07,0-.06,0,0Zm-.3.16-.05,0h-.07v-.1l0-.13.06,0,.09,0,0,0,0,.07,0,.09Zm-21.68-.13-.12,0-.14,0,0-.06.07-.06h0l.11,0,0,0,0,0Zm25-.32.16,0h0l.23.11,0,.05,0,0,0,0-.08.07h0l0,0-.08,0-.08,0-.06,0,0-.07-.08,0-.12-.14h-.06l0,.05,0,0,.06.11h.08l0,0v.07l-.14,0,0-.05v-.09l-.08,0,0,0h0l0-.09h-.15l-.09,0,.05-.05v0l.06,0,.07,0,.06,0h0l0,0h.13Zm-29.84.48,0,.05-.09,0,0-.06v-.08l.05-.07,0-.07-.1-.21h0l0,0,.06.14.06.08,0,.12-.06.13Zm5.83-.32h0l0,0,.06.06,0,0,0,0h0l0,0h0l-.19-.1-.13,0-.08,0,0,0,.05-.06,0-.13.09,0,0,0h0l.06,0,.06.07Zm22.84,0h0l0,0-.09-.06-.06-.1.22.17Zm-1.93-.17v0l0,0h0l0-.1h0l0,.06v.07Zm-21-.06v0l0,0h0l0,0-.1-.12h0l.11.11,0,0Zm-1.3-.44h-.13v-.09l0-.05h.05l0,.08v.06Zm22.26-.09h0v0l0-.06h0v0l0,0Zm0-.14,0,0h0l0,0v0l0,0h0l0,0Zm-22.07.12h0l-.07-.11,0-.07,0,0,0,0,0,.05,0,.05-.05,0Zm.35-.13v0l-.09-.05v-.06l.05,0Zm.38,0-.06,0-.07-.08v0h0l0,.05h.05v0Zm-1.12.08v0l0,0-.18,0h-.06l-.15,0,0,0,0,0,0-.05,0,0v-.09l0,0,.08.07.09.06.05,0,.15.06,0,0Zm.37-.27v.05h-.07l0-.06,0,0h0l0,.06,0,0Zm-.24.16,0,0h0l0,0-.06-.06-.08,0-.09,0h-.08l0-.09h.06l.19.09.06.05.09.13Zm.79-.28.06,0,.05,0v.07l-.06.09-.09,0,0,0v-.08h0l0,0Zm.52,0v.07l0,0v.13l0,.09,0,0-.06,0,0,0v-.05l0,0,0,0,0-.05-.14,0h0v-.08l.11-.07.06,0,.06,0,.08,0Zm-2,.21,0,0-.05,0-.05-.07,0-.06,0-.11v-.08l0,0h0l.08,0,.05.07,0,0v.07l0,.08v.07Zm-4.56-.43.2.25.08,0,.11.11,0,0,0,.08,0,.23,0,.06-.12,0v0l-.07-.18-.13-.09h0l0-.1-.06-.12-.2-.22h.15l.07-.05,0,0h0l.12.07Zm4.62,0v.12l-.07,0-.06-.05-.08,0h-.1l-.08,0-.05-.05V174h0l.39.1Zm20.66.43-.18.15-.05.08-.05.08-.07.09-.08.08,0,0-.1,0,0,0h-.11l-.32.07h-.45l-.08-.08-.09-.07h-.94l-.2,0-.11,0-.11,0h-.17l-.38.05h-.09l-.2-.06-.11,0-.11,0-.1.06,0,0-.1.13-.06.1-.05.11,0,.12,0,.1v.1l0,.11,0,.12,0,.08.13.2,0,0,.14.06.09.07.08.2,0,.1h.23l.11,0,.11-.06.06-.12.06-.09.14-.16.08-.08.05,0h.05l0,0,.05,0h.22l.11-.05,0,0,0,0,.1,0h.56v0l0,0v0l0,0,.13,0,.14,0,.11,0,.09.05,0,.06,0,.06,0,.17,0,0-.07,0-.07,0-.06-.09-.1,0-.13,0-.05,0,0,0-.08.09-.06.1-.14.16-.16.14-.07,0-.09,0-.28.09-.07.07-.06.08-.06,0h-.12l-.11,0,0,0v.06l.06,0,.08.07.07.1,0,0,.1,0,0,0,.07.08.12.2,0,.1.06.09.19.14v.09l0,0,.07.09v.05l-.07.07v.1l0,.13v.09l0,0,0,0,.05,0,0,0,.09.1,0,0,0,0v.06l0,0,0,.06.06,0,0,0,0,0h0l0,0,0,.06v.16l0,0h0l-.09,0v.06H2143l-.24.07-.09,0-.06.07v.05l0,.11,0,0h-.11l-.16,0-.09,0-.06,0-.06-.07,0-.09,0-.28,0,0,0,0,0,0v-.06l-.07-.07-.11,0-.1-.06-.37-.33,0,0v-.05l0,0,.12-.19v0l0-.14V178l-.06-.08-.1,0h-.1l-.11,0-.1.06-.19.13-.07.07v.1l.05.09.05.08,0,.1,0,.33v0l0,.1,0,.21,0,.31,0,.18,0,.1-.08.22,0,.12v.05l.1.22,0,.09,0,.1-.11-.05H2141l-.06,0h-.23l0,0-.08.06-.05,0h0l-.15-.08-.09-.08-.08-.09v-.1l0-.1,0-.11.08-.19v-.12l0-.11,0-.1,0-.09v-.39l-.11-.21v-.2l0,0-.05,0h-.16l-.23.06-.06,0-.05-.08,0-.11,0-.11v-.11l0-.1,0-.07,0-.08v0l0,0,0,0h.05l.05,0,.12-.11,0-.09v-.11l0-.11.06-.1.07-.1,0-.09,0-.15,0-.07,0-.08v-.08l.05-.15.14-.31.13-.17,0,0,.07.08.06.09v-.09l0-.07,0-.19-.05-.36v0h0l.05,0,0-.06-.05-.13v0l.1-.19.08-.07,0,0,0-.12,0,0,.05,0,.07-.08,0-.1h0l0,.09,0,0,.09,0,.08,0,0-.05,0,0,0,0,0,0,.05-.1.06-.1,0,0,.05,0,0,0h.06l.11.06h.18l0,0,0,.05,0,0,0,0h0l.25,0,.22,0,.3,0,.11,0,.1,0,.12.07h.09l.07-.07h.29l.52.08h.08l.32-.16.13-.15.11,0,0-.07,0-.08,0,0,.09,0,0,0,.07-.1.08-.08,0,0h.11l.05,0,.06.13v0l-.07.07,0,0-.09.18,0,.09-.07.08Zm-21.38-1,.05.08v.05l0,0v.09l-.11.07-.09,0,0,0-.06-.13v-.11l0-.05h.09l.09-.06.06,0Zm24,1.13.07,0h.07l0,0v-.05l0-.1.08-.06h0l0,0v-.15l.06-.08.19-.1.1,0h.14l0,0,0,.06,0,.09,0,.23,0,0-.14.08-.15.07-.05,0,0,.07v.07l.12.08.2.08,0,0,0,.07v.07l.05,0,.07,0,0,0,0,0-.34-.11-.08-.05h-.21l-.11,0h-.11l0,0,0,.06,0,.07,0,.08v0l0,.09.09.28.1.21.15.23.08.08.08.07-.14,0,0-.08-.17-.07,0-.05-.12-.21,0,0-.1-.08-.05,0v-.36l0-.13,0,0,0,0-.05-.1,0-.11v-.07l0-.05,0-.05v0l-.09-.07-.08-.2v-.1l.11-.2V174l0-.06v-.06l.06-.13.09-.11.15-.16.06,0,.07,0v.08l-.12.16v.1l.06,0,.06.08v.34l0,0-.1.11-.21.14,0,0v0l0,.05,0,0Zm-28-1.12v0l-.1-.1-.11,0,.05,0,.09,0h0l0,.05Zm28.71,0h-.15l0,0,0-.2.1-.16.13-.09.09,0h0l.08.11-.06.23-.07.12-.08,0Zm-2.81-.55v0l0-.11,0,0,0,0v0l0,0V173Zm-26.7.27H2119l0,0-.05-.05-.25-.15h-.07l-.06,0-.06,0-.07-.1,0,0,0,0,0-.05.09,0,.09.1.1,0h0l.05.06.22.13,0,0,0,0v.06Zm11.46-.5-.05,0,0,0,.07-.09h0Zm-2.89,0h0l0,0v-.16l0,0,0,0h.08l0,.07-.05,0Zm.49-.27v.07l-.07,0v-.07l0,0h0v.05Zm10.49-.11v0l-.08-.07,0-.06v0h.08l0,0,0,.12Zm7.38-.14,0,0-.11-.06v-.08l0,0,0,0V172l.07.05,0,.09.05.09,0,0Zm1.1-.31h0l0,0,0,0v0h0l0,0v0Zm-.12-.09v0l-.06-.08,0-.11,0,0,0,.08v0Zm-8.15-.29,0,.09v0l-.17,0-.1-.11,0,0h.09l.13,0Zm-8.83.46-.12,0-.08-.05.08-.06h0v0l-.14,0,0,0,0-.08v-.06l.19-.14,0,0v.06l.12.15v.14l-.07.14Zm7.6-.62,0,0h0l.05,0,.14,0h.23l.17,0,.16.09.08,0h0l-.06,0,0,.05.09.08v0l.07.05.08.08v0l0,0,0,.05-.06,0h-.08l-.06,0-.05-.05v.06l0,0h-.26l-.11,0h.06l0,0,.17.15,0,.05-.06.11,0,.05.06,0,.08.05h.05l0,0v0l0,.05-.06,0,.06,0,.05,0,0,0,0,0,0,0,.07,0,0,0V173l.08.12.14.15,0,.05v0l0,.05-.08,0-.06.07v0l-.08,0,0,0,0,0,.06.1.14.15.07.06.29.2.15.09.2.2.1.05,0,.06-.08.09-.13,0-.2,0-.21,0-.1,0-.1,0-.07-.1-.1-.06,0,.06,0,.06v.07l0,.06-.06,0-.07,0,0,0-.18.36,0,.09,0,.4v.11l.08.22v.19l0,0-.15.06-.11.06-.08.07-.07.1-.06.07-.09,0h-.06l0,0,0-.06,0-.07v.1l0,.05v.06l0,0,0,.05-.1.05-.05,0v.07l0,0,0,0-.13.08,0,0,0,0h.14v.08l0,.05,0,.12-.1.08,0,0,0,0,.11,0,0,.09v.1l0,.09-.08,0h-.09l0,0v0l.06,0v.12l0,.11,0,.07,0,0,0,0-.06,0v0l0,0,.08.09,0,0,0,0v0l-.09.11,0,.07v.09l0,.06-.65.29-.52.24,0,0,0,0,0-.38-.06-.19v-.11l-.07.1h0l-.05,0,0,0v0l0-.12-.05.07,0,0h-.05l0,0,0,0h0l-.11.11-.15.06H2135l-.06,0v-.16l0,0,0,0h0l-.11,0h0l0,0-.29-.29,0,.24-.2.12-.15.07-.14,0-.15-.05-.14.06-.16.13-.05,0h0l0,0v-.43l0,0,0-.06-.06-.05,0,0,0,0h-.12l-.11,0-.1,0-.2.1h-.11l0,0,0-.05,0,0,0,0-.08,0-.07,0,0,0h0l-.09-.1-.18,0,0,0-.05,0,0,0,0,0v-.22l-.09-.42,0-.21,0,0-.1-.08V177l.06-.09v-.11l0-.11,0-.12,0-.08-.06-.08-.08-.08-.1-.06-.21-.07h-.11l0,0,0,0v-.07l0,0h0v0l-.11-.06-.09-.07,0,0v-.16l0-.07v0l0-.13.06,0v0h0l0,0,0,0-.07-.08-.12-.09,0-.16v-.35l0-.2.07-.07.05,0,0,0h-.11l0-.18,0-.06.09-.1.09-.09,0-.1.05-.1.23-.09-.08.12v0l0,0,.06,0,0,.15.07.08.08.08.05,0,.06,0,.05.05,0,0,.07.05.19.17.07.06.06.05,0,0,.1,0,.3-.13h0l.1,0h.17l.18,0h.06l.06,0h.18l.11-.09.14,0,.05-.09,0-.09,0-.09.06,0,.08,0,.13,0h.43l0,0v.08l0,0h.06l.05,0,.21.07.09,0h.06l.1.06,0,0,.07-.05.07-.06.06,0,.09,0h.12l.14,0,.1,0,.12,0,0,0,0,0,.06-.1,0-.06,0-.12v0l.05,0,0,0v0l0,0v0l0,0,0-.11v0l0,0h.05l.12-.08.11-.09.06,0,0,0v0l0,0-.05,0v-.19l0,0,.06-.07,0,0,.06,0h.07l.07,0,0-.09v-.07l0-.13v0l0-.07v-.05l0-.12v-.29l0,0,0-.1,0-.1.1-.05.05-.08h0l.12.05.1-.06h.17l0,0h0l.09-.05Zm9.46.3,0,0H2147v0l.06-.09,0-.09,0,0,0-.06v-.06l0-.12h.05l.05,0,0,.1,0,.07-.07.11,0,.13Zm-28-1.1h.11l.21,0h.12l.1,0,.1,0,.24,0h.05l0,0,0,0,.11.12.18.15.06.1,0,.1,0,0,.21.2,0,.08,0,.12.06.09.2.09.13.07,0,0,0,0,.07.07.08.05.26.11.34.25.2.12.16.18.05.08,0,.1.1.13.17.17,0,.05,0,.07.05.07.07.06.07.05h.07l.13.12.06,0v-.09l0-.08v-.1l0,0,.06,0,.1,0,.16.14.07.08,0,.12.05.12.06.06.1,0h.1l.09,0,.22.17.07.07.05.09,0,.11,0,.11,0,0,.14.14.07.05.09,0,.26,0,.09,0,.08.08,0,.08,0,.07-.21.11-.22.07.22,0,.1,0,.1,0,.1-.06.15-.08.06,0h.07l.06,0,.09.08.09.09.06.11,0,.12-.08.06-.11,0-.14.11,0,.05,0,0,0,.08.09.05v0l-.07.07v0l.09.16,0,0,.13.08.21.09.11,0,.13,0h.14l0,0,0,.16,0,.11,0,.21,0,.09v.12l.05.09.1.06.1.05.05,0v.07l0,.06,0,0-.11.09,0,0,0,.1,0,.05h.05l0,0,.13-.14,0,0,.05,0h.29l.1,0,.09,0,.08.06.29.36.14.21v.1l0,0-.12.13,0,0,0,.15v.11l0,0,0,.05V179l-.08.22v0l0,.35V180l-.06.62,0,0,0,.1h-.06l-.06,0,0,0,0-.05,0,0-.16-.11-.05,0-.16.14,0,0-.06,0-.08,0-.27-.15v.12l0,.16v.07h-.07l-.11-.1-.11-.1-.11-.14-.09-.07-.08-.07-.21-.28-.06,0-.34-.2-.06,0-.09-.08-.09-.08-.21-.11-.35-.29-.15-.17-.17-.27-.06-.07-.28-.21-.16-.12-.06-.07-.15-.24,0-.09-.05-.07-.1-.06-.08-.07-.16-.22,0-.09,0-.1v-.19l-.34-.58-.08-.18-.08-.25,0,0-.19-.23-.06-.07-.08-.07-.07-.07-.12-.26,0-.07-.07-.06-.24-.09-.09-.06-.07-.07-.05-.1,0-.21-.12-.32-.13-.42-.08-.19-.1-.15,0,0-.44-.27-.08,0-.08,0h-.11l-.09-.07,0-.13,0-.16,0-.1,0-.06-.18-.12-.08-.09-.06-.1-.05-.08-.2-.28-.07-.07-.09-.05-.25-.05-.08,0-.12-.16-.07-.08-.23-.17-.38-.37-.07-.09-.06-.09,0-.11-.16-.28v-.06l0-.06v-.14l.05,0,.11,0h.21l.1,0,.1.06.17.15.1,0,.1,0,.23,0Zm-1-.54v0H2118l-.06-.09h.13v.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IE"
                                    d="M2023.42,114.58l-.14.1,0,0,0,.16v0l0,.08,0,.09,0,0-.08,0,0,0-.06,0h-.07l0,0v0l0,0,.06,0,.07,0v0l0,0-.23.09-.07.06,0,0,0,.07.19.18,0,0,0,.11.16,0,.07.06,0,0h.13l0,0,0,0v0l.11-.09,0,0,0-.05,0,0,.06-.08.08-.08h0l.06,0,.06.07v.1l0,.08,0,0,.09,0,0,0v.17h.23l0,0,.06,0h.08l0,0v.06l-.06,0h-.08l0,0v.07l0,.09,0,.07,0,.14,0,.17.05.1v.28l0,0v.1l.06.21,0,.12V118l0,.09,0,.09,0,.1,0,.12v.18l-.12.21,0,.06-.06,0,.13.15-.11.06-.11,0-.13,0h-.07l-.07,0,0,0,0,0,0-.12,0,.13-.07,0h-.12l-.21,0-.08,0,0,.06,0,.06,0,0,0,0-.16,0,0,0-.07.11-.1.06-.08,0-.07-.06,0,0,0,0h-.11l0,0,0,0v.17l-.05,0h-.07l-.1.09-.13,0-.08.07-.44.13h0l-.06,0h-.13l-.19.07H2021l.12-.18.15-.09,0,0h0l-.3.06-.1.06h-.1l0-.08.14-.11.07,0,0,0,0-.06.14-.08-.45.16-.12,0,0,0-.1,0,0-.11.14-.15.07-.07.1,0,.09,0,0-.07,0,0-.27,0h-.13v-.06l0,0,.13-.1.08,0h.06l.07,0,.05,0,.15,0-.06-.06,0-.13,0,0,.06-.06.07,0,.12-.12,0,0,.24,0,.25-.07.25-.09-.13,0-.06-.06-.1.13-.07,0-.2,0-.07,0-.09,0,0,0,0,0-.13.06-.14,0,.16-.12.21-.2,0-.06.07-.12,0-.05,0,0,.15-.23,0,0h.09l.07,0h.06l.07-.07-.1-.05-.1,0-.3,0h0l0,0,0,0v-.08l0,0h-.06l-.07,0h0l0,0,.08-.08-.1,0-.09,0-.08,0v0l0,0,0-.05V117l0,0h.06l.11,0,.15,0-.13,0,0,0v-.11l.14-.08.16,0v-.11l-.16,0-.15,0v-.11l0-.11v-.14l-.07,0v-.1l0-.08-.11,0V116l0-.07,0,0,.06,0h.1l.1,0,.14,0,.23,0,.16.14,0,0,.06-.08h0l.23,0,.15,0h0l0-.1,0-.07.06-.09.08-.06,0,0,.12,0,0,0,0-.12,0-.09-.3,0-.28-.12,0-.08.06,0,.11,0v0l0,0,.09-.09,0-.12,0-.09.06-.06,0-.08,0-.06.13,0,.12-.06h.18l0,0v-.1h.09l0,0,0,.07,0,0v.08l0,.06,0,0,0,0-.06.09.07,0,.09-.08v-.07l0-.09,0-.08,0-.09,0,0,.15,0-.06-.1h0l.06,0,.08.08.09.06.09,0-.09.1-.11.06,0,.08Zm-2.51,1.86v0l-.07-.06,0-.06-.19,0,.08-.06,0,0h.13l0,0v.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IL"
                                    d="M2063.09,143.64H2063l-.11.05,0,0,0,0v0l0,.25h-.06l-.08-.05v0h-.08l-.1,0-.12.08-.05.13v.06l0,.13,0,.08v.24l0,0v0h0l.06,0,.07,0,.06.05v0h-.05l-.11.07-.07.08,0,.07-.06.15v0l0,0,.18,0,.16-.06.12-.07h0l0,.16h0l0,.11h0l0,.09-.05.16-.06.13,0,.06-.06.14-.06.16,0,.11v0l0,.2v.06l-.07.17v.09l0,.11,0,.25-.07.08,0-.09-.07-.26-.05-.18-.07-.23-.12-.27V146l0-.1-.08-.24-.07-.18-.07-.23.09-.09v-.08l.16-.17v0l0-.05h0l.18-.33.11-.33.11-.45.08-.23.06-.16,0-.12h.28l.08,0,0-.15.05,0,0,0,0,0,.1-.07.05,0,0-.05,0,0v.07l0,0V143l0,0,0,.07,0,.06,0,.05v.1l0,.05,0,.1-.05.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IM"
                                    d="M2026,116l-.18.2-.08,0-.06,0h0l0-.07,0-.16.07-.07.1-.17.08,0h0v0l0,.2,0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IN"
                                    d="M2116.68,169.16l-.06.07-.11-.23-.05,0v-.11l0,0,.12-.05,0,0,.06.21Zm-.15-.49-.09.09,0-.06v0l0,0,0,0,0,0Zm-.27-.48h-.07l0,0,0,0,0,0h0l.06.06v.07Zm.09-.17,0,0h0v-.13l0,0h0l0,.05,0,.09Zm-18.88-.19h0l0,0h0Zm18.52,0,0,0H2116l-.05-.05,0,0,0,0,0,.09Zm-.33-.82h0l0,0v0l0,0h0l0,.06Zm-.26-1.32,0,0-.1,0v-.1l0-.09,0,0,.07-.07.05,0,0,.09,0,.09-.06.14Zm-18.19-.6h0V165h0v.05Zm18.36-.17,0,0-.05,0,0,0v-.08l.05,0v.08Zm.3-.61,0,.13-.07-.06,0,0,0,0Zm-.27-.78,0,.06v-.15h0Zm0,1.25,0,0,0,0-.09-.16v-.11l0,0,0-.05,0,0,0-.06v-.09l0-.08v0h.09v-.07l0,0v-.27l0-.05v-.14l0-.05,0-.12,0,0,.05-.18v-.12l.07-.12.09-.06h0V163l-.06.06.05.08v0l0,.06,0,.06-.05,0,0,.08,0,0,.07.08,0,.3-.06.08h-.06v.24l-.06.1v0l0,0,0,0,0,0v0l0,.1v.12l0,.1Zm-12.92-20.23h0l0-.08,0,.09,0,.09v.07l.06.07,0,.06,0,.07,0,.09,0,0v.15h.08l0,.06,0-.06h0l0,0h.07l0-.09,0,0,.06,0,.12.17.1.15,0,0h0l.1.08.06,0,.1,0h.12l.07,0,0,0h0l.14.12h.06l0,0,0,.08,0,.08v0h.07l.13.06.12,0,.07,0,.06,0,.06.05.12.08.1.06,0,.07h-.1l0,0,0,0-.12.13-.07,0-.06.06-.13.18-.08.17-.06.16v.11l0,.13-.06.07,0,0,0,.11,0,.13,0,0,.07.06.07,0,.09.06.09.06h.06v0l0,0,.07,0,.07.05.05,0h0l.13.08.11.06.14.08,0,0,0,0,.06.07.16.12.14.09.12.06.08.05h0l0,0,0,0,0,0,.07,0,.16.12.16.09.16,0h0l0,.08,0,.08.18.06.12,0,.14,0,.07,0,.07,0,0,0,.05,0h.1l.18.06.08,0,.06-.06.12,0,.06,0,.13.07.23.08.12.05,0,0v.17l0,0,.23.11.07.05.07,0h0l0,0,0,.06v0l0,0h.05l.15-.06.1,0h.07l0,.05V150l0,.08.05,0h.05l.14-.05.12,0h.1l.12,0h0l.12.07.14.06h.06l.24-.11h0l0,.11.07,0,.12,0,.11-.07.09,0h.12l.1,0h.09l.14.05h0l0,0,.06-.16,0-.14v-.08l0-.13-.11-.16v-.05l0-.28,0-.17,0-.07,0-.11v-.1l0,0v-.07h0l.13,0,.14-.05.05,0,0,0,.05,0h0l.12,0,0,0,0,.1,0,0,0,.11-.08.25,0,.1.06.07.06,0v0l-.11.09,0,0,0,0,0,0,0,0,0,.11.06,0,.11.07.1.05.17,0,.05,0,.08,0h.07l0,0h0V150h.09l0,0,.17,0,.16,0,.08-.09h0l.1,0,.09,0,.1.06.06,0h.22l.25,0,.15,0,.12-.08h0l.06.06h.14l.08,0,.08,0h.14l.05,0,0,0v-.06l0-.07,0,0v-.07l0-.07.05-.08,0-.08,0-.08h0l-.09,0h-.1l-.08-.05-.06-.07V149l0-.06v0h.18l.08,0h.06l.12-.08h.11l0,0h.16l.06,0,.06,0,.11-.07,0,0v0l0,0h0v0l0-.06.17-.08.14-.1.08-.08,0-.1.05-.1,0,0,.1,0,.28,0,.09,0,.13-.08.06-.06,0-.05v-.06h.09l.08-.09.09-.09.16-.08.14-.1.05,0,0,.05,0,0v0l.18,0h0l.13,0,.13.06h.1l0,0,0,0,0,0,0,0v-.05l.18-.12.16-.08.13-.06,0,0,0,0,.06.12,0,0h.11v0l-.07.05-.08,0-.05,0v.16l0,0,.17-.13.08,0,0,0v.06l.07.14,0,.07-.17.16-.07.09v.06l0,0v0l0,0,0,0h0l0,0,.16-.05h0l.12.08h0l.14,0,.08,0,.07,0,.13.11,0,0v.14l0,0v.1l0,0-.08,0-.06.06-.1.08-.08.06-.06.06,0,0v.16l.19.28v.05l-.06,0-.08,0-.07,0-.07-.12-.06,0h-.06l-.36.06-.08,0-.12.05-.08.09-.06.08-.07,0-.09.06-.25.2-.15.09-.09,0-.07,0,0,.08,0,.05v.29l0,.1,0,0v0l0,.06-.05.05,0,0,0,.15,0,.07-.08.11-.07.07-.1.07-.05.05,0,.09,0,.08v.05l0,0,.05,0,0,0v0l0,.12-.07.17-.09.13-.08.12,0,0-.08.16-.07.21,0,.14,0,.09h-.05l-.06,0-.14,0-.1,0-.06,0h0l-.06,0-.07,0,0,0-.09-.09h0l0,.05.06.25,0,.09v.34l0,.21v0l0,.06h0l-.05,0h0v.12l-.05.1,0,.09v.17l.06.19v.12l0,0h0l0,0,0,0-.06.14h-.05l-.05,0-.07-.09-.05,0h0v0l0,0,0,0-.06,0v-.07l0-.35,0-.12v-.16l0,0,0-.08,0-.08,0,0,0-.14v-.25l0-.17,0-.19h0l0,0h0l-.08,0h-.1v.19l0,0-.12.11,0,.07v.18l0,.06,0,0-.07,0h-.06l0,0,0-.11,0-.06h-.06v.12h0l0,0-.06-.27-.08-.21v-.08l0-.1,0-.16.1-.1v0l0,0h.15l0,0,0,0,.06,0,0,0h0l.07,0,0,0,0-.06,0-.07,0,0h.12l0,0v-.09l.08-.19,0-.09h0v-.1h0l.12,0h.05l0,0v-.07l-.09-.07-.16-.1-.14-.06h-.27l-.26,0h-.07l-.1,0h-.79l-.17,0-.12,0-.11,0-.12,0h0l0,0v0l0-.19,0-.28,0-.11-.1-.23,0,0h-.05l0,0,0,0,0,.06,0,.07-.07,0-.09,0-.08,0-.09-.07-.07-.1v-.11l0-.07-.05,0h-.06l0,0,0,0,0,.05v0H2112l-.06,0h-.08v-.07l0-.07-.1-.09-.09-.06h-.05l0,.06v0h0l.05,0v.07l-.06.06,0,.05-.09.08-.08.1,0,.07,0,.06v.07l0,.05,0,0,.1,0,.1.09.08.13.05,0,.08,0h.16l0,0,0,.09,0,0,.09.05v0l0,0,0,0-.07,0h-.33l-.08.23-.06.08h0l-.08,0h0l-.09.2,0,.05v0l.05.08.06.06.07,0,.06,0,0,0,.05.07.09,0,.14,0,.07,0v.28l-.07.17-.05.15,0,.08,0,0,0,0,.06.06,0,0,0,.15,0,0,.08,0,.08,0,0,0-.07.15v.1l0,.09,0,.16v.05l0,.12.07.24v.18l0,.15h-.07l.07.1,0,.08v.1h-.13l0-.09,0,.09-.08.07,0,0V155l0-.26v0l0,0-.05,0v-.05l-.07.29,0,.11,0,.06-.12,0-.13-.11,0,0v.06l0,.07h-.12l-.06-.06,0-.1.07-.23,0-.11-.11-.08-.08,0,0-.11,0,.12,0,0,.07,0,.07.06,0,.07-.05.05-.09.17-.12.1-.13.07-.44.11-.09,0-.14.14-.09.12v.13l.05.14,0,.22,0,0-.05.08-.08.08-.07.12v.06l0,0-.23.14-.05.08-.06.08-.08-.05h0l.06.07v0l0,0-.06,0-.34.1-.25.09h-.07v0l0,0v-.11l0,0h0l-.19.13-.08.13v0h.05l.13-.07.06,0v0l-.2.11-.42.38,0,.07-.06.08-.07.08-.14.19-.26.28-.07.1-.41.22-.08.06-.17.21-.17.17-.21.14-.35.18-.22.17-.06.12v0l0,0,0,.05v0l0,.08v0l-.06.1-.11.07-.35.15h0l-.29,0-.11,0,0,.07-.1.29-.09.07,0,.07v.05h-.06l-.05,0h0l0-.09-.07,0h-.06l-.24.1-.08.08-.18.37,0,.23,0,.26.06.21v.22l0,.06,0,.07,0,.14.07.19,0,.08v.09l.06.19,0,0,0-.08-.07-.1-.09.1,0,.07.16.09,0,.07-.1.63-.08.23-.1.14-.05.06-.12.23-.08.28v.11l0,.12,0,.07-.05.06.1,0,0,.07,0,.06v.82l-.08,0h-.15l-.06,0-.13,0-.07,0-.05.08v.13l-.24.32-.05.11,0,.11,0,.05.06.06.08,0,.16,0,.07,0,.05.06-.18-.06h-.22l-.51.15-.14.11-.07.09,0,.21v.14l-.06.12-.27.18-.17,0-.06.05-.2-.06-.22-.16-.09-.08-.32-.41-.06,0-.07-.18V167l0,0h0v0l-.07-.2,0-.21,0-.23h0l0,.08,0,.11v.16l0,0,0,0-.1-.36-.09-.09h0l0-.06V166l-.07-.11,0-.07-.16-.36-.08-.26-.11-.28-.07-.1-.11-.22-.1-.1-.1-.14-.07-.06,0,0-.24-.48-.07-.26-.06-.12,0-.1-.08-.4v-.16l-.06-.17-.1-.18,0-.12v0l-.06-.18,0-.09,0-.07,0-.07-.05-.06-.13-.18,0-.05-.08-.12-.06-.22-.08-.08h.12l-.07-.08,0-.06,0,0,.06-.08h-.09l-.05-.05-.07-.15-.12-.18,0-.09-.11-.3-.09-.7-.08-.32V159l-.1-.27,0-.19,0-.15,0-.11,0-.2,0-.06v0l0-.1.07-.14,0-.09,0-.13-.06.14-.06,0,0-.1v-.16l0,0,.16,0-.19-.08,0-.05v0l0-.06-.07-.06,0-.18,0,0v0l0-.24.16-.47v-.26l0-.12v-.17h-.06l0-.05-.07-.19.06-.06.05,0h-.12l.1-.08.09-.07.19-.08.08-.05-.12,0-.13,0H2097l0-.18,0-.06.05,0H2097l0-.19.07,0h.07l.09,0-.09,0H2097l-.12,0-.11,0h-.14l.05,0,.06.05,0,.1,0,.06-.07.05-.06.06,0,.06,0,0,.06,0,.07,0,0,.05.05.07v.12l-.16.31-.06.06-.41.19-.16.1-.34.12-.13,0-.15,0-.22-.1-.33-.25-.08-.08-.27-.32-.19-.17-.14-.16-.18-.15-.17-.2,0-.1,0-.09.06-.05.07,0,.06.08,0,0,0,0,.25-.12h.1l.06-.06h.09l.17-.09h.07l.09,0,.14-.24.1-.15.07,0v-.09H2095l0,0,0,.06,0,0-.08,0h-.06l-.07,0-.24.09-.11.08-.07,0-.39-.09-.39-.2-.16-.14-.1-.17-.11-.21,0-.06.16-.12.14-.1-.13,0-.13.06-.07,0-.07.09-.1,0,0-.13,0-.13.07,0,0,0,.09,0,.1,0h.22v-.32l0,0h0l0,0h0l0,0,.08,0h.06l.06,0h.41l.07.05.07.06h.2l.08,0,0,0,0-.05.18-.07.19-.06h.05l0,0v.06l0,0,.07,0h.14l.07-.09,0,0h.05l.06,0v0l0,0,0,0v-.13l0,0,0,0,0-.07-.07-.14-.07-.17-.07-.15-.09-.13,0-.09v-.25l0,0,0,0-.06,0h-.17l-.05,0-.15-.2,0-.09v-.08l.05-.15v-.29l0-.05-.05,0h-.14l-.16,0-.12-.07-.09-.05,0,0v0l0-.15,0-.18,0-.05.05-.06,0,0,.06-.05.16-.17.14-.23.09-.16,0-.05,0,0,.07-.05.08,0h.08l.07,0,0,.05,0,.11,0,.06,0,.05.06,0h.07l.29-.12.09,0h.24l.16-.05.14,0,0-.09.05-.13.17-.18,0-.08.05-.15.05-.13,0-.06.26-.15.25-.14,0-.06.16-.29.1-.2,0-.06,0-.17.06-.17.08,0,.18-.07.14-.06.07-.08,0-.06v-.06l0-.08v-.09l.1-.09.19-.26.12-.14h0l.11-.07.12-.08v-.08l-.07,0,0-.06,0-.08.05-.22V145l-.07-.21,0-.05,0-.06.07-.08.1-.06.3-.15.07,0,.1,0,.07-.08v-.07l0,0-.07-.06-.12-.05-.1,0h-.19l-.09,0,0,0v-.1l0-.16h0l0,0-.1,0h-.12l0,0,0-.05v-.08l0-.06v0l-.06,0-.09-.06-.07-.07,0-.05,0,0v0l.05-.06.06-.1,0-.07v-.06l0,0,0-.05-.06,0,0,0v-.06l0-.07.08-.06.12,0,0-.07v0l0,0h-.09l-.15,0,0,0,0,0v0l0,0,0-.05V142l0,0-.1-.05,0,0,0-.05,0-.07,0-.05.07-.14.08,0,.11-.05.12-.05.18,0,.09,0,.18,0,.15,0h.22l.07,0,.17.07.14,0h.1l.14-.07.07-.05.1-.07h.12l.26-.1.05,0h.08l.09-.06,0-.07v0l0,0,.1,0,.1-.06,0-.08,0-.05.11-.07.11-.07.12-.08.14-.08.11-.08.1-.06v0l0,0,0,0,0,0,.06,0h0v0l0,.16v.06l.06.13.08.21.07.2,0,.13,0,0,.18.06.14,0,.09.07.09.07.07.05,0,0V142l0,0-.16.11,0,0v0l0,.14,0,.09v.34l.06.07,0,0,0,.05.06.06.05,0,0,0,0,.06v.07l0,.06v0l0,0,.05.07v.15l0,.05v.28h-.05l0,0,0,.09-.07,0h-.07l-.07-.06-.06-.06,0,0,0-.06,0,0-.06,0h-.23v0l0,.06,0,.07v.11l0,.07v0l.17.21,0,0v0l0,.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IO"
                                    d="M2096.94,182.21l0,0,0,0,0-.09-.05-.07h0l.05,0,0,.09,0,0v-.09l0,0h0l0,0v.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IQ"
                                    d="M2071.37,138.7h0l0,.08.08.3,0,0,.05,0,0,.05,0,0v.16l0,.06,0,.05,0,0h.09l0,0,.1.34V140h.11l.07,0,.08.06.07.1.05,0,.15,0,.21,0,.1,0v0l-.08,0-.13,0,0,.08,0,.09v.06l0,.05.09.12v.1l0,0,0,.08-.08,0-.12.06-.22.26,0,0v.16l0,0h-.12v.05l0,.07,0,.07.08.14,0,.08,0,.07-.07.12-.05.08v0l.06,0,.19.26.06.1.07,0h0l0,0v.07l0,.06.1,0,0,.06.11.21v.06l-.06.09v.12l0,0h.17l.07,0,.18.11.21.16.16.13.14.11h.15l0,0,0,0,.05.09.08.2.08.07.11.16.11.16-.07.21-.07.21v.43h.3v.56h0l.08,0,0,.07,0,0h.05l0,0,0,.06,0,0v.08l0,.08,0,0,.07.05-.09,0-.09,0-.2-.09h-.06l-.08,0v0l-.21-.1-.07,0h-.31l-.1,0-.07.05,0,0,0,0-.05.12-.06.16-.07.15-.12.2-.07.09-.15.17-.16,0-.38,0-.41,0-.42,0-.31,0h0l-.3-.25-.25-.19-.3-.24-.3-.25-.31-.25-.23-.19-.28-.24-.25-.21-.19-.17-.26-.15-.19-.12-.29-.17-.23-.14-.2-.12-.3-.18-.11-.05-.31-.06-.3-.05-.31,0-.2,0,.13-.13,0-.11-.1,0-.09,0-.06-.18.07,0-.06-.24-.07-.24-.06-.24-.07-.24.26-.16.2-.11.27-.17.27-.16.25-.15.27-.16.25-.15.23-.06,0,0,.11-.2.09-.18v-.29l0-.29,0-.16.06-.14,0-.1v-.19l0-.15-.05-.15v-.23l0-.12,0-.09.06-.06.22-.06.12,0,.17-.16.11-.1.14-.15.1-.12v0h0l.09,0,.16-.13.1-.13,0,0,.09,0h.06l.15-.05.08,0,.07,0h0l.2.08h.29l.1,0,.07-.05h.09l0,0,0,0,0,.06v.22l0,0h0l0,0,.07-.06.09,0,.06-.06,0,0h.12Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IR"
                                    d="M2071.42,135.76l0,0,.15.25.06.07,0,.06,0,.07,0,.05.06,0,.08.07,0,0,.09.1.09,0,.32.08.17,0h0l.14-.06h.22l.21-.21.06-.07.13,0,.07-.09.11-.1.14-.1.13-.09.1-.05.17-.13.11,0h.1l.14.15.12.13,0,.06-.06.05-.11,0,0,0v.09l0,0,.14.08v.13l0,0-.1,0-.08,0,0,0,0,0v0l0,.05.17.11,0,0,0,0,0,0h.07l0,0,.16.21h0l.19-.05h0v.05l0,.29,0,.15,0,.14.05.14.06.12.08.08.19.09.09,0,.24,0,.23,0,.14,0,0,0,0,.05.12.22.18.16.36.23.18.08.59.15h.4l1.09-.29.36-.07h.14l-.08.06-.14,0,.08,0h.19l0,0v-.12l-.06-.27,0-.18h.25l.1,0,.15-.07.11,0h.06l.05,0,0,0,.1-.25,0-.07.16-.14.14-.09.14-.08.18-.06h.24l.2,0h.2l0,0,0-.11,0,0,.07,0h.31l.12.05h.26l.06.05.05.05,0,0v.12l0,0,.06,0,.09,0,.18,0,.16.05.09,0,.12.06.14.13,0,0,.06,0h.05l.1-.06.09,0h0l.11,0,.11,0,.28.15h.06l0,0,0,0,0,.13.08.09.1.09.11,0,.24.11.11.09.1.16.14.2v0h.72l.05.08v.33l0,.11v.1l0,.05,0,.06v0l.05,0,0,.08v.12l0,.07v0l0,.05,0,.07v0l0,0,0,.06,0,.07v.05l-.05,0,0,0v.07l0,.06,0,.07,0,.05,0,0,0,.09v.07l0,.07-.05,0,0,.05v.06l0,0-.06.05,0,0h-.06v.06l0,0,0,.06.08.11-.23,0-.06.09-.08.14,0,.28,0,.14,0,.09.06,0,.07,0h.14l.1,0v0l-.06.06-.08.1-.05,0-.14.21v.15l.06.22.07.21.1.39v.08l0,.2v.35l0,.18h0l.23,0,.22,0,.29,0,.09.11.05.22v.17l0,.09-.21.25-.21.25-.21.25-.22.26,0,0,.17.2.11.13.16.18,0,0v.07l.16.28.06.14.05.08.12.13.12.13.13,0,.1,0,.2.06.08.06.12.13.14,0h0v.05l0,.2,0,.21,0,.32v.05l0,.09v.1h0l0,0,.1,0,.23,0h0l.05,0,0,.05v0l-.06,0v.08l0,.12v0l0,0,0,.17v0l-.06,0H2088l-.11,0-.18,0-.05,0-.07,0-.05.07v.06h-.12l0,0-.2.08h0l0,.07,0,.17,0,.15,0,0-.06.05v.08l0,.11,0,.3,0,.09h0l0,0-.08.05-.15,0-.13-.05-.41-.09,0-.05,0-.09-.07,0-.1.13-.35-.08-.11,0-.08,0h-.18l-.15-.08-.21.06h-.17l-.23-.14-.24,0h-.31l-.16-.05-.08,0-.13,0-.06-.07L2083,151l-.07-.13,0-.12v-.13l-.09-.21,0-.32,0-.12-.05-.11-.07-.09-.09-.1-.08,0-.34-.08H2082l-.15.05-.16.11-.27.06,0,.05-.07.1-.09.07-.12,0-.13.06-.24.18-.12.05h-.11l-.11-.08-.25-.11-.17,0-.23,0-.1,0-.19-.13,0-.09-.11-.07-.33-.14-.27-.18,0-.08,0-.1-.12-.13-.26-.1-.15-.11-.17,0h-.16l-.08,0-.06,0-.22-.23v-.09l-.14-.23,0-.08,0-.22,0-.06-.14-.09,0-.06,0-.08v-.07l-.08-.05-.11,0,0-.07,0-.14v-.08l-.1-.14-.14-.14-.15-.2-.06-.05,0-.14-.05-.16h-.09l-.39.19-.12-.1-.34-.19,0,0,0,0,0,0h0l.08,0,.06,0,0-.07-.08,0h-.12l0,.06-.11.05,0,.08v.22l0,.06,0,0H2075l-.07.06h0l-.06,0,0,0,0-.07v-.05l0,0,0,0-.05-.06,0,0h-.05l0,0,0-.07-.07,0h-.05v-.56h-.3v-.43l.07-.22.07-.2-.11-.16-.11-.16-.08-.07-.08-.21,0-.09,0,0,0,0h-.15l-.15-.11-.16-.13-.2-.16-.18-.11-.07,0h-.18v0l0-.06v-.06l0-.1v-.06l-.11-.2,0-.06-.1,0,0-.05v-.08h-.05l-.08,0-.06-.09-.19-.26-.05,0h0l.05-.09.08-.12V142l0-.07-.08-.15,0-.06,0-.07v-.05h.13l0-.05v-.2l.23-.26.11-.06.08,0,0-.08v0l0-.06v0l-.09-.12,0-.06v-.05l0-.09,0-.08.13,0,.07,0v0l-.09-.06h-.41l-.08-.11-.07-.05-.07,0H2072l0,0v0l-.1-.34,0,0h-.09l0,0,0,0,0-.07v-.19l0-.05-.05,0,0,0-.08-.3,0-.09h0v-.09l0-.06v0l-.07-.07-.11-.08h0v-.2l0,0v0l0-.06,0,0-.15-.1-.05-.05h-.11v0l0-.07,0-.08.06-.08,0-.05,0-.07v-.05l.06-.08v0l0,0,0,0h-.07V137l0-.07,0-.16,0,0-.06-.08,0-.08v0l0,0v-.1l0-.05,0,0v-.05l0-.06,0,0v0l0,0h.27l.05,0,.06-.29,0-.08.07,0,.13.11,0,0Zm10.48,14-.08.12-.13.11-.06,0h0l-.09,0h-.07l-.12.07-.11,0h-.1l0,0v0h.05l.17-.06.21-.11,0,0,0-.08v0l.13,0,.16-.07.13,0,.06,0-.09,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IS"
                                    d="M2015.75,93.4h.1l.17-.08.08,0,.17-.18.11,0h.24v0l-.1.07-.08,0-.11.11-.11.25-.08.11v.06l.1.09.1,0,.1,0h0l0,.07,0,.07V94l0,.14-.06.15-.08.11,0,0,.06,0,.31-.08h0v.11l0,.06,0,.06v.06l-.14.18.16-.11.12,0,.22.06.09.07,0,.12.07,0h0l0,.07v.07l0,.1v.1l0,0-.07,0,0,0,0,.07,0,.07h.07v.11l0,0,0,0,0,0,.16.11,0,0V96l0,.07,0,0h-.12l-.07,0,0,.07v.1l0,.11-.09.17-.08.09-.09.06-.15,0-.08,0v.15l-.08.09,0,.08,0,0v.1l0,.09-.07.11-.07.06-.15.08-.13.13-.08,0H2016l-.22.09-.31.17-.21.14-.16.15-.22.26-.16.1-.09,0-.18,0-.15.06-.49.13-.17.07,0,.07-.07.09v0l0,0v0l-.06.11-.12.08h-.06l-.07-.07h0v0l0,.09-.07,0-.32.1-.55-.08-.22-.07-.27-.12-.16,0h-.23l-.18-.17-.09-.1v-.1l0,0,0,0h.06v0l0-.08,0,0-.12.12H2011l-.07-.06v-.06l-.14,0-.11-.07-.12-.1,0,0,.06-.06h-.06l-.08,0-.13.13-.06,0-.85,0h-.22l0,0,0-.08,0-.19v-.19l0-.07h0l0,.06,0,.08,0,0,.3-.1.12-.07,0-.06.06-.11.06-.06,0-.05.06-.17,0-.08,0-.06.05,0,.14,0-.09,0h-.08l-.28.18h-.1v0l0,0,.1-.09h-.06l0,0v-.09l0-.13.22-.18.08,0,0,0,0,0-.05,0-.23.19-.17.06h0l-.08-.07,0,0,0-.09v0l.07-.15v0h0l-.15-.13h-.23l-.58-.08-.12,0-.2.11-.12,0,0,0,0-.06,0-.08,0-.1,0-.07.08,0,0,0,.16,0,.19-.07.12,0h0l.07-.07,0,0,0,0,0,.06.19-.08.07,0v0l0,0,.1,0h.08l.09,0,.18,0h.38L2010,96l0-.06,0-.15,0,0-.24.14h0l-.28-.08-.1-.08,0-.06.15-.15.15-.11.23-.13,0,0v-.06l-.15-.1-.28,0-.07-.12-.23-.07-.16,0-.08-.08-.2.1-.45.15-.18.1-.09,0-.11-.09-.19-.09-.21,0,0-.05.12-.17.09,0h.08l.17.12.11,0-.14-.18v-.16l0-.05-.05-.11,0,0h.06l.11,0,.27.19.13,0,.08-.07.1-.06,0,0h-.24l-.12,0-.07,0-.05-.1,0,0,.06,0h.2l-.13-.17-.09-.09v-.15l0,0,.23.1h0l0-.07-.1-.09v0l0,0,0,0v0l.07,0h.07l.07,0,.22.18,0,.06V94l.09,0,.06,0h0l.08-.13.06,0,0,.06v.3l.06-.09h.1l0,0v-.32l-.33-.19-.06,0-.07-.09v0l.07,0,.09,0h.23l0,0,0,0-.11,0,0,0v0l-.13,0h-.14l-.13,0v0l0-.07.11-.1,0,0,.15,0,.15,0,.13,0,.1.1.13.18.19.11,0,0,.1.09.2.26.2.14v0l0,0-.07,0v0l.11,0,.07.1v0l-.06.3,0,.07,0,0-.18-.06,0,.1.13.1,0,.06,0,0,0,0,0,0,0,0V95l0,.08,0,.06v0h.1l.08.09.06.26,0,.08,0-.08,0-.18,0-.1h0l0,0,0,0,0-.21.12-.16.06,0h.06l0,0,.09.16.06,0h0l0-.11,0-.22v-.24l0-.27,0-.2.06-.11.07,0,.1,0,.07.07.14.27.11.14.1.15,0,0,.1,0h0l0,0v-.06l0-.39,0-.12,0-.08.18,0,.09-.06.09-.08.08,0h.06l.06,0,.07.07.1.15.13.24.16.18.09.29,0,0h0l0,0V94.3l-.05-.17-.15-.42v-.08l0-.07h.1l.26,0,.08.07.17.26,0,.07h0l0,0,.06,0,0-.06.07-.14.17-.26h0l0,0,.09.07,0,0,.08,0,.08,0,.12-.09.13-.06,0-.12v-.06l-.1-.39,0-.08.22-.1h.2l0,0,.12.19.09.1,0,.07v.17l.05.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="IT"
                                    d="M2042.72,127.1l0,.08,0,0-.07,0-.08.06-.07.07,0,.07,0,0,0,0,0,0h0l0,0,.08,0v0l0,0-.06,0-.06.07v.07l0,0h.08l0,0,0,.17v0l.07,0,.06,0,.1.1,0,.09,0,0h-.11l0-.06-.14-.19h-.06l-.09.08-.24-.08,0,0,0,.06-.08.08-.12,0-.13.09-.14.06-.1.05h-.06l.09-.1h0l-.12.07-.08.06,0,.1,0,.17.05,0,.1.22.12.09,0,.09,0,.07-.08.06-.06,0h0l0,.14,0,.38.08.27.09.11.19.18.2.09.35.3.2.1,0,.05.12.23.1.26.11.42.08.2.16.23.33.32.3.24.28.15.22,0,.52,0h.08l.1,0,0,.11,0,.06-.11.08-.11.09v.14l.1.09.5.25.51.21.15.1.19.17.44.22.08.11.27.23.12.19,0,.14-.06.14,0,.1,0,.09-.11,0-.13-.1-.2-.42-.36,0-.07,0-.13-.07v-.05l0-.05,0,0-.14,0-.09.07-.12.16-.12.23-.13.33v.13l.07.13.21.08.16.11.11.12v.29l.05.16-.07.1-.13,0-.18.06-.13.11-.06.1,0,.26,0,.1-.24.18-.13.2,0,.07,0,.09h-.31l-.07-.11v-.17l0-.1.11-.05.08-.21,0-.15,0-.07,0,0,.09,0,.12,0v-.22l-.09-.1,0-.13,0-.26-.16-.32-.08-.29-.07-.15-.09-.07h-.18l-.09,0-.32-.21,0,0V135l.05-.08,0-.11,0-.11-.06-.09-.07,0-.14,0,0,0h-.09l-.07,0h0l.11-.16,0,0-.11-.07h-.19l0,0,0,0v-.07l-.18-.31-.11-.13-.06,0-.11,0-.17-.06h-.11l-.06,0-.09,0,0,0,0,0-.16-.14-.2-.07-.39-.42-.12-.16-.25-.17-.15-.26-.13-.09-.19-.08h0l-.06,0h0l0,0,0,0,0,0,0-.1-.21-.25-.12-.08,0,0,0-.07,0,0-.06,0h-.05l-.07,0v-.12l0-.1v-.08l-.07-.21-.12-.18-.07-.43,0-.12-.13-.09-.29-.11-.41-.28h-.09l-.24-.11-.15,0-.2.1-.24.27-.19.28-.07.05-.26.1-.22,0v-.12l0-.06.06-.07.06-.09,0-.06v0l0-.07h0l-.21,0h-.05l-.15-.08-.17-.1-.06-.08,0-.07,0,0v0l0-.06,0-.07.06-.09,0-.06h0l0,0,0-.14,0,0,0,0h0l-.09,0,0,0,0-.07,0-.06,0-.06V129l.06,0h.14l.13-.1h0l0,0,0-.14,0,0v0l0,0-.1-.1,0-.1-.07-.12-.07,0v-.09l0-.05.12-.07.08-.08,0,0,.07,0,.18,0,.12,0,.08-.05h0l.18.07,0,0,.13-.09,0,0,.11-.15v0l0-.09v0l.13-.1.06-.08.06-.06h0v.27l.1.11.07.07.17,0v0l0,.09.1.1,0,.08,0,0,.07,0,0,0,0-.07,0-.07v-.09l0-.07.12-.16,0-.09v-.25l0,0,.09,0h0v.07l0,.11,0,.06h.1l.14-.06.09,0h0l0,0,.06.12h.08l0,0v0l0-.1,0-.07,0,0v0l0-.08,0-.07,0,0h.06l.07.07.08,0h.06V127l0-.06v-.09l0-.18,0,0h.19l.07.07.06,0h.15l0,0,0-.08.06-.1.1-.06h.18l.08,0h.09l.07,0h.07l.18-.07.19-.06h0v0l0,0,0,.06,0,.07.11.13,0,.1.06.08.08,0,.11,0h.1l.09,0,.34.07.17,0h.12l.2,0Zm-1.12,3.42,0-.07v0h0l0,.07,0,.05Zm0,2.51h0Zm-1.88-1.19,0,0v0l0,0V132l-.08-.06-.11,0h-.07l0,0v0h.11l0,0h.07Zm-.71,2.44,0,.07.1.32v.07l0,.07,0,.05-.11.16,0,.13,0,.08v.09l0,.11-.06.68,0,.12,0,.1-.07,0-.09,0-.12-.06h0l0,0,0,0,0,0,0,.23-.05.09-.08.06h-.07l-.08,0h-.06l0-.05,0-.08-.06-.09-.07-.11V136l0-.05,0,0v-.22l0,0h0v-.13l0-.07-.08,0v-.15l0,0V135l-.05-.07,0-.11,0-.07,0-.07-.06-.06,0-.06v-.14l0-.12,0,0h0l.06.06,0,0h.1l.1,0,.11-.05.12-.07.16-.19.1,0,0-.06,0-.06,0,0,.05.06h.06l.1.06,0,.05,0,.07,0,0,0,0h0l0,0,0,.07,0,0,0,.05Zm-1.24-.2,0,.06h0l0,0,0-.08,0,0,0,0,0,.05,0,0Zm5.22.41h-.07v-.07l.09,0v0l0,0Zm-5,2-.05.12-.06-.08v-.1l.07,0,0,0Zm6.55,1-.06.13,0,0-.22.32,0,.08,0,.08,0,.07,0,.07,0,.08v.15l0,0,0,0,0,0-.05,0,.05.08,0,.05v.1l-.1.09,0,.05,0,.06v.17h-.1l-.11,0h-.1l-.15-.06h0l0,0-.13-.2-.1-.08-.1-.07h-.22l-.1,0-.2-.13-.2-.11-.09-.07,0,0,0,0-.12,0-.11-.08h-.21l0,0-.1-.08-.07-.12,0-.06,0-.14.06-.13,0,0,.06,0,0,0,0,0,.1.14,0,0h0l.09-.05v0l.1-.07h.18l0,.06,0,0h.06l.17.12,0,0h0l.14-.05h.1l.22,0,.12,0h.08l.12-.05.09-.07,0,0h.36l0,0,.05,0,.06,0,.15-.09h.06l.06,0,0,.06Zm-3.25,1.69h0l-.06,0V139l.07,0,0,.05v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="JE"
                                    d="M2028.22,123.38v.07l0,0,0,0h-.07l-.06,0v-.13l.13,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="JM"
                                    d="M1958.82,158.21l.11,0,.12,0h.1l.1.08.09,0,.32.1.11.17,0,.06-.08,0h-.21l-.09,0,0,0-.1,0,0,0h-.1l0,.07,0,.05H1959l0-.05,0,0,0,0-.05.12-.06-.06-.08-.05-.09,0h-.19l-.09,0-.08-.1,0,0-.07,0-.08-.12,0,0-.2,0,0-.07v-.06l.07-.08,0,0h.11l.11,0,0,0,0,0,.39.06h.17Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="JO"
                                    d="M2066.19,144.3l-.14.13h0l-.18.05-.36.11-.25.07-.31.09-.26.08-.25.07-.24.07.13.15.21.23.14.14.16.2.15.17.15.18-.11.06-.18.1v0h0l-.07.18-.06.15h0l-.25,0-.25.06-.16,0-.05,0-.1.17-.11.18-.17.15-.2.16h0l-.14,0-.25,0-.24,0-.16,0-.19,0,0-.14v-.07l0-.25,0-.11v-.09l.07-.17v-.06l0-.2v0l0-.11.06-.16.06-.14,0-.06.06-.13.05-.16,0-.09h0l0-.11h0l0-.16v-.09l0-.12.06-.1,0-.24v-.13l0-.14,0-.17,0-.25v0l0,0,0,0,.11-.05h.05l.1,0,0,.05.1.15.15,0,.06,0,.08.08.1,0,.31.05.25-.16.21-.14.24-.15.16-.11.28-.18.18-.11.24-.15.24-.15.07.24.06.24.07.24.06.24-.07,0,.06.18.09,0,.1,0,0,.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="JP"
                                    d="M2162.73,130.24h.17l.09,0,.35.2.1,0h.19l.07-.05.21-.24.22-.22h0V130l0,.07-.1.19-.11.27,0,.13,0,.13.07.11.06.15.06.2.09,0h.05l.08-.06.09-.08h.14l-.1.06-.09.06-.08.13,0,0h-.14l-.11.05-.1.06-.09.07-.1,0h-.1l-.16.06h-.11l-.2,0h-.09l-.21.12-.2.17-.16.18-.14.23-.06.11,0,.13v.17l0,.06,0,0-.12,0-.19-.12-.36-.17-.39-.27-.22-.13-.41,0-.39.25,0,0-.15-.17-.07-.07-.09,0h-.12l-.09.09,0,.07,0,.07v.05l0,0,.08.12.1.08,0,0h.14l.17.17.18.16,0,.06-.07,0-.07,0H2160l-.08,0-.15-.07-.06.06-.09.12-.06.13,0,.06-.11.08-.11,0-.06,0,0,0,0-.05v-.07l0-.15.06-.13,0-.14,0-.19,0,0-.12-.11-.06-.11v-.21l0-.17,0-.08.06,0,.06,0,.09-.06.1-.07.1-.09.09-.11.05-.12-.08-.15,0-.09,0-.08.08-.05.09,0,.18.12h.16l.17,0h.1l.05,0,.07-.1,0-.13,0-.17v-.16l.05-.14.14-.21,0-.13,0-.32.05-.13,0-.15,0-.3-.06-.29-.06-.14-.07-.14v-.13l.06-.12v-.07l.1,0,0,0,.05-.06,0,0,0,0,0,.06.15.15.22.26.27.4.17.19.17.18.2.17.2.16.14.07.09.11.06,0Zm-2.54-1.57,0,.08,0-.12v-.13h0l0,0v.15Zm.21.28h-.06l-.08-.06v-.07l.06-.05.05,0,0,.07,0,0,0,0Zm-1.67,3.86h-.05l0-.09,0-.05.06,0h.06l-.05.18,0,0Zm1.61.87,0,0,.18-.06,0,.19v.64l0,.13.08.1.09.07.14.22.08.27,0,.13,0,.14V136l-.06.25v.13l-.06,0,0,.06,0,0,0,0h0l0,0v.07l0,.06,0,.06,0,.06,0,.15v.16l0,.11-.09,0h-.11l-.13.05,0,0-.11.19,0,.11v.12l0,.15,0,.15,0,.26,0,.41,0,.13-.07.09-.05,0-.05,0,0,.13-.1.26v.14l0,.08,0,.09,0,.1,0,.1.12.24,0,.07.06.07-.22.07,0,0-.12.14-.05.13v.14l0,0,0,.05,0,0-.14.06-.09.07-.09.1,0,.06-.07,0,0,0,0-.06v-.07l0-.18,0-.07.07-.06,0-.08.08-.07.05-.06v-.06l0-.05-.06,0h-.14l0,.05,0,.07v.07l-.11.09,0,.1,0,.06,0,0v0l-.05.09h0l-.07-.11-.08-.06h-.1l-.11,0-.08.08,0,.06,0,.06v.16l0,.13-.06.12,0,0-.08.08h-.06l0,0,0-.05,0-.2v-.11l.09-.06-.07-.08-.1,0-.13,0,0,0,0,.07-.07.08-.08.07-.09.13-.06.15-.19-.05h-.21l-.19,0-.21,0-.23.06v0l.19-.1v0l0-.05h-.05l-.11,0h-.06l0,0,0,0,0,0v.1l0,0,0,0v-.08l0-.12v-.07l0-.07,0,0h0l-.06,0,0,0-.1.22,0,.12.07.1.21.14,0,0v.06l0,.07-.05,0-.23.05-.2.09-.06.09-.18.35-.14.24-.21.08-.22-.07-.05-.08-.05-.11-.08-.09-.07-.1-.05-.12V142l0-.11,0,0,.13-.07,0,0,.07-.09,0-.05v-.08l-.06,0h-.14l-.15,0-.1,0-.13-.1-.05,0h-.14l-.1,0-.1,0h-.11l0,0-.12.12-.1.07-.08,0h-.19l-.09,0-.09,0h0l-.1.06-.12,0-.06,0-.11,0-.23.08h-.11l-.11,0-.1-.08-.1,0-.07.11,0,.22,0,.1v.11l-.05,0-.3-.21h0l-.25,0-.06,0-.08,0-.08,0-.08,0-.07-.05-.07,0-.07,0,0-.32,0,0,0,0,0-.05.12,0,.12,0,.08,0,.07-.07.08-.09.09-.07.11-.06.11-.06.1-.1.1-.1.08-.07.1-.06.14-.15.19-.17.07-.13.05,0,.16-.07.21-.06h.11l.1.11.05,0,.06,0h.45l.21,0,.11,0,.11-.06.4,0,.27-.09h0l0,0v.07l0,.07,0,0,.06,0h.25l.07,0,.11-.06.1-.06.1-.09.07-.09-.06-.12,0-.14.06-.14.08-.12.1-.07.09-.09.18-.24.13-.19.05-.24,0-.29.11-.21.11,0,.22-.09.12,0v.1l-.17.17-.1.08-.06,0-.05,0,0,.07.08.1,0,.08v.14l.1.07.12,0h0l.05,0,.12-.17,0,0,.37-.13.18-.1.1,0,.1,0,.21-.2.08-.09.07-.11.05-.12,0-.13.06-.08.33-.19.11-.1,0-.05,0-.15,0-.15,0-.13.06-.11.07-.11.09-.11,0-.11.08-.27,0-.14,0,0,0-.05,0-.06,0-.06V136l0-.19v-.15l-.06-.13,0,0H2159l-.06,0v0h.07l0,0,0-.05.06-.14,0-.14V135l0-.12,0-.14v-.08l0-.09.05-.08h.11l0,0,.05,0,0,0,0-.13v-.07l0-.19,0-.05,0,0,.05,0h.12l.06,0v.05l0,.32,0,0,.05,0h0l0-.05,0-.06.06,0,.17.07.06-.05,0-.08,0-.14,0-.12,0,0h0l0,0h0l-.24.07v-.14l.05-.21,0-.07,0,0,.11,0,.05,0,.11.11Zm-2.66,4.23h-.11l0,0v0l0-.09v0h-.07v-.1l0-.09.15-.16,0,0v.06l0,.16v.06h.11l-.07.19-.14.09Zm-4.59,1.86,0,0-.08,0,0-.06,0-.07.08,0,.08.1v.05Zm5.61,1.67v.05h-.05l0,0v-.07h.06l0,.06Zm-9.29.41v.06l-.07,0,0,0,.06-.17v-.1l.11-.09,0,0v.15l-.09.13Zm5.12.08-.1.09h-.09l0,0v-.05l.08-.08.07-.12.06-.05.06,0h0l-.09.16,0,.13Zm-.54-.22v0h0l-.06.05v-.05l0,0v0l.13,0,0,0,0,0Zm0,.25.13,0h.13v.27l0,.06,0,.09.06,0-.17.1-.16.13-.07.09-.06.1,0,.1,0,.11-.05-.05-.16-.17-.09-.05-.16,0h-.05l-.32.16,0,.12-.09.19,0,.06h-.05l0,0,0,.15-.1.1h-.06l-.11,0,0,0,.06-.16h-.2v-.1l-.06-.06,0-.07v-.06l0,0V143l-.06,0,0,0v-.1h0l-.09,0-.18.08h-.05l.08-.06.16-.08.07,0,.16-.14.1-.06,0-.11,0-.07,0-.06,0-.09,0,0,.09-.08h0l.05.1.08.08h.05l.1,0h.16l.1-.05,0-.06v-.07l0-.12h.1l.11-.07.11,0h.12l.13,0,.13.07Zm-4.68.15-.06,0,0-.06,0-.2.11,0V142l0,.12Zm3,0,0,0h-.08l0,0,0-.05h0v.05Zm-.29.19,0,0,.1,0h0l0,0,0,0-.09,0H2152v-.08Zm-1,.38.13,0h.1l.07-.05.08,0,.06,0,.05,0,0,.05v.06l-.09.12-.07.13.16,0h.17l0,.08v.07l.06,0,0,.05v0l0,0,.09.06v0l0,0-.22.27-.07.14,0,.15,0,.11,0,.12,0,.12,0,.13v.23l-.12.29h-.08l-.1,0H2151l0,.07.06.13-.18.15-.2.11v-.05l0,0,0,0,0,0,0-.13,0-.12-.06-.15v-.06l0,0h0v-.11h-.12l0,.06-.06.11,0,.11v.06l0,0,.07.1,0,.05,0,0-.25-.09h-.06l0,0-.05-.13.1,0h0v0l0-.12-.05-.11,0,0,0,0,0-.09v-.26l0,0,.09,0,.07-.08.07-.09.09-.17.07-.18h-.07l-.06,0,.06-.08,0-.11-.09-.13-.06-.15-.09-.07,0,0-.06,0,0,0,0,.1v.18h0l.06,0,0,0,0,0v.06l0,.06,0,0h0l-.05,0,0,0-.09,0-.1.05-.09.11-.07.06,0-.09,0-.08,0-.06-.09-.11,0-.06v-.14l.09.08.05.11.07,0h.08l-.06-.15,0,0-.09-.06-.12-.12-.08,0,0-.12.05,0h0l.13,0v-.05l0,0v0l.09-.05.14,0,0,0,0,0,0,0h.1l.09,0,.07-.11v-.06l0,0,.17-.09h.15l.11,0,0,.1.05.12.1.08Zm-1.27-.17-.06,0-.05,0,0-.09,0,0,.05,0Zm-.28.58-.06.05h0l0-.06v0l0-.09.07,0h0l0,.09,0,.06Zm-.38.42h0l0-.09,0,0,0,0,.07-.18v.07l0,.07h0l0,.06h0l0,.1Zm9.93-.23h0l0,0v0h0l.06,0,0,0Zm-10.31.29,0,0h.09l0,0,0,.07v0h-.09l0,.06,0,0,0,0v-.17Zm1.31.61-.08,0v0l0,0,.06,0v0l0,0,0-.13v-.06l.15,0,0,.05v.17l-.1.12Zm.27-.21h-.11l0,0,.12-.07.09,0,0,.06,0,0Zm-.61.83h0l0-.08.07-.07v0Zm1.15,1.35h-.08v-.06l.07-.14v-.11l.06-.13,0,0h0l0,0,0,.15-.06.12,0,.15Zm-.31.14-.11,0-.06,0,0-.13.1-.09.13.08,0,0,0,.11Zm-1.08,2.16-.08.08-.09-.07-.1-.05.05,0,0,0v0l.07,0,.13,0h0l0,0v0l0,0,.08,0,0,.05v0l-.06,0-.06.05-.06.06-.05,0,0,0,0,.05Zm-.12.11v0l-.09,0,0-.09h.06l0,0Zm-.3.4h0l-.05,0,0-.12,0-.06h0l0,.1,0,0V149Zm-.68,1.1-.09,0,0,.06-.08,0-.08.08H2148v.07l0,.05H2148l-.06.06v.05l0,0v0l-.07.06h-.07v-.11l.06-.11v-.13h.06l0,0,.1-.09,0,0-.05,0V150h.09l0,0h0l.05,0,0,0,.09-.09,0-.09.07.07,0,.1,0,.07Zm12.84,0h0l-.06-.11h0l0,0,0,.06,0,0ZM2145.78,152l-.08,0-.08,0v-.14l0,0,0,0,.06,0Zm-1.06.23-.06.16,0,0h0l-.05-.09,0,0,0,0h0l.09-.13,0,0,0,.05Zm-.38.24h-.05l-.07,0h-.07v0l.07,0v0l0,0,.15.06v0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="JU"
                                    d="M2069.52,191.31h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KE"
                                    d="M2068.71,171.78l-.11.16-.14.2-.25.35-.19.19-.14.14,0,0v3.38l.12.16.13.16.16.21.09.11V177l-.14.16-.11.07-.15,0h0l-.06,0,0,0,0,.06h0l0,0,0,.11v.05l0,.07-.07.06v.05l-.15.14h-.22l-.12.07-.05,0,0,.12v.19l-.06.14v.07l-.11.09-.06.08,0,.09,0,0,0,.19-.06.12v.07l-.05.07,0,0,0,0-.14.29-.1.14-.08,0-.06.06v0h0l-.07-.05-.15-.1-.14-.11-.14-.1-.14-.1-.14-.1-.14-.1-.15-.1-.14-.1-.08-.06,0,0,0-.07v0l0,0h0v-.1l0-.09v-.12l0-.1v0l-.1-.05-.19-.11-.2-.11-.19-.11-.2-.11-.2-.11-.19-.11-.2-.11-.2-.11-.19-.11-.2-.1-.2-.11-.19-.11-.2-.11-.2-.11-.19-.11-.2-.11-.07,0-.07,0h-.07v-.15l0-.4v-.35l0-.17.08-.11,0-.08,0-.12.05-.09.1-.07,0,0,.11-.13.06-.16,0-.05.06,0,.05,0,.07,0h.06v0l0-.1,0,0,0-.07.05-.06,0,0,0,0v-.38l0-.16,0-.17,0-.06,0-.1h0l0,0,0-.1,0-.09,0,0-.12-.07-.06-.18-.07,0,0-.18v0l0-.18v0l0,0-.12,0-.09-.07v-.05l-.05,0-.15-.3.19-.19.19-.18.24-.24.22-.21.19-.19.17-.16v.07l0,0h.09l0,0h0l.26.07,0,.06v.11l0,.05,0,.14V171l.08.09.07.08.05.11,0,0,.06,0h.76l.23.14.21.14.17.11.18.11.16.11.13.09.13,0h.36l.13,0,.2,0,.15,0,.09,0,.24,0h0l.11-.1.13-.17,0-.09.16-.08.28-.13.2-.08.22-.09.09.07.14.13.06.06.05,0,.08,0h.14l.1,0h.37Zm-.82,5.63h0v0l.11-.07,0,0h0v0h0l-.11.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KG"
                                    d="M2104.06,132.67l0,.07v.13l-.29,0-.06,0-.07.12-.24.1-.14.05h-.06l-.13.08-.37.2-.19.12-.09.05-.07.06,0,.06v0l-.2.25-.16,0h-.13l-.09,0-.12,0-.28,0h-.09l-.18,0H2101l-.07.05-.11.2,0,.05,0,0,0,.09,0,.1-.05.09,0,.07-.08.07-.07,0-.06-.1,0,0,0,0-.09,0-.05,0-.12.09h-.18l0,0,0-.22,0-.11,0,0h0l-.25.18-.12,0h-.1l-.13-.05h0l0,0v0l0,.11v0H2099l-.08,0-.06,0-.19.17-.15,0-.15,0-.06,0,0,0,0,.08-.05.12,0,.06,0,0v0l0,.06,0,.13v0l0,.06,0,0-.1,0-.08,0h-.15l-.07,0-.05,0-.09.05h-.34l-.21,0H2097l-.07,0-.12,0-.07.08,0,.07h0l-.08-.07,0-.06,0,0h-.05l-.17.09h0l-.05,0V136l0,0h-.12l0,0v-.12l0,0h-.06l-.07,0,0,0-.07,0h-.08l0,0-.06.09-.19,0-.06,0-.05-.07-.07-.11h0l-.06,0H2095l-.13,0,0,0h0l0,0h-.34l-.09,0h-.07l-.12.05H2094l0-.17-.05-.11,0-.08,0-.11,0-.06.06,0,.06,0h0v-.12l0,0,0-.05.22-.07.18-.05.1,0,.19.08.09,0,.07,0,.06.12h0l0,0,0,0,0-.1.08-.06.2-.06v-.07l0,0,.09,0h.26l.08,0,.06,0h.12v0l0,0,.08,0,.07-.06h.05l0,0v0l0-.06.11-.12.06,0h0v0l0,0,.1,0,0,0v-.05l0-.06v-.06h0l.15.06h0l.06,0,.07-.06,0-.05.31-.17,0,0v0l-.13,0-.06,0h-.05l0,0h-.16l0,0-.11-.11-.07,0-.06,0h-.06l-.08,0,0,0v-.18h0l-.05,0-.09,0h-.07l0-.14,0-.06,0-.06,0,0-.05,0v-.1h0l0,0,0,.08,0,.08,0,0,0,0h0l-.08,0V134h0l-.09,0h-.17l-.08,0-.06,0-.09,0-.08-.05,0-.17,0-.06h0l-.16.06-.06,0-.11-.05-.08,0,0,0v0l.25-.18.1-.13.06-.06.09,0,.07,0,0-.12h.06l.11-.05.19-.11v0l0,0-.08-.05-.08,0,0,0,0,0-.05-.06v-.06l.05-.09.05,0,0-.1.06-.06.07-.1.08-.09.15-.06.09,0h.08l.12-.05h.08l.32.08h.1l.25.1.11,0,.08,0,0,0,.06.05.31,0,.08,0,0,.05.09.06h.07l-.06-.23,0-.14.09-.37,0-.06.1,0,.16-.06.06-.08h.18l0,0,0,0,.14.07.24.16.18.1.21.09.29.08.25,0,0,0,.1-.13h.79l.28-.05h.1l.17.07h.52l.2.05h.47l.1,0,.14,0,.09,0h.16l.06,0,0,0,0,.12.09.07.06.08.06.08.06,0h.1l.19,0,.1,0,.14.14.13.14Zm-8.3,2.8v0l0-.09.05-.08h-.09l-.05,0,0-.08h0l0,0v.11l0,0,0,0h0v0l0,.1h.18Zm.52-.07v-.05h-.05l0,0v0l0,0h0Zm-1,.15v0h-.12l-.07,0h0v0l0,.05,0,0h.05l.08,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KH"
                                    d="M2126.39,165.84l-.15-.12-.3-.05,0,0h0l0,.07-.16.07-.07-.05,0,0v-.06l0,0,.09,0,0-.12-.06-.16,0,0-.06,0-.06.06-.05.1-.06.05h-.18l0-.15,0-.13,0-.15v-.08l-.1-.12v-.12l0-.06v.07l0,0-.16-.33,0-.16,0-.12v0l0-.06-.07-.07-.12-.1v-.14l0-.18,0-.06-.06-.11,0-.09v-.23l0,0h.08l.11,0,0,0,0,0,.07,0,.1-.12.08-.12.05-.08,0-.08.11-.11.15-.07.11,0,.11,0,.1,0h.05l.13.05h.29l.16,0,.17,0,.15,0,.19,0,.09,0,.09,0v.07l0,0,0,0h0l.05,0,0-.06h0v0l0,.06,0,.05,0,0,.06.05h0l.12-.05.2.07,0,0,.06.07.07,0h.15l.05-.13,0-.07-.09-.13,0-.07,0,0h.15l0,0,0-.08h.12l.09-.06,0-.06,0,0,0,0,0,0,.06,0,.07,0,0,.05,0,0h.11l.05-.06,0,0h.07l.09-.08.05-.07,0,0,.08,0h0l0-.1.05,0v.06l0,.1,0,.08-.08.08v.06l0,.17v.06l0,0,0,0,.06.17.07.15.06.12V163l-.06.2-.06.18v.1l0,.09,0,.12v.16l0,.1,0,.06-.06.06,0,0-.06-.06h0l-.07,0,0,0-.1.1-.12.09-.15,0-.06.07h-.18l-.08,0v.24h-.07l-.09,0-.13,0h-.09l0,.07,0,0h-.07v.08l0,.06V165l0,.05.19.15.06,0v0l0,.08,0,.12h-.06l-.1,0-.05,0-.06,0h0l0,0-.05-.06h0l-.11,0h-.18l-.07.09h0l-.12,0h-.1l0,0,0,.08,0,.07v0l-.06,0-.08.07,0,.05h-.27l-.05,0,0,0Zm-1.27-.82h0V165l0,0h0Zm.25.53,0,0-.06-.08v0l.09.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KI"
                                    d="M2203.75,178l0,0,0,0v0h0l0,0h0v0l0,0h0Zm.57.34h0Zm-.14,1.22h0Zm-.9,0h0l0,0h0Zm-2.12.15h0l0,0Zm-318-7.89.08.08,0,0h0l0,0,0,0h0v0l0,0v0h0Zm306.49.73-.06,0h0l.07-.05h0Zm-.11.07-.07,0,0,0h0l.05,0h.06v0ZM1885,173.73l.16.1h-.07l-.16-.05-.15-.1,0,0,0,0,.07,0,0-.08h0l-.11-.08h0l.11.05,0,.11Zm304.7,0v0l0-.06,0,0h0l0,0h0Zm0,.11h0v-.08h0v.08Zm0,.35h0l0,0,.1,0h-.09Zm0,.3,0,0v.05l-.07.07h0l.07-.07,0,0,0,0h0v0h0Zm1.36,1.66,0,0v0l0,0,0-.12h0l0,0h0l0,0,0,0,0,.07v.07Zm-4.57.07h0v0Zm4.82.31v.05h0v-.07l0,0h0l0,0Zm-304.12,2.64h0v.05Zm-.83,1.41h0v0h.06Zm3.76,5.39v0h0v-.06h0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KM"
                                    d="M2070.17,186.41h0l-.08,0H2070l-.07-.09,0-.3,0,0h.06l0,0v.19l.06.13,0,.11Zm.93.17.05.13v.1l0,0,0,0-.08-.08-.14-.08h.14l0,0v0l0,0Zm-.63.21.06.06-.18,0,0-.06v0h.07l.08,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KN"
                                    d="M1972.32,159.39h0l0-.06h-.07l-.06,0h0l0,0,0,0,.07.05,0,.06,0,0v0Zm.09.11-.05,0,0,0v-.06h0l0,0v.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KP"
                                    d="M2150.47,132.24l0,.08.06.07,0,.05v.06l0,0,0,0-.06,0h-.11l-.13.11-.07,0,0,.1-.11.07-.05.07-.07.11-.05.11-.11.12-.07.14v.13l.07.12v.11l-.05.22,0,.23,0,.09-.34.16-.08.08-.13.21-.15.07-.1.09-.13.05-.08.14-.09.08-.11,0-.08.07h-.18l-.13,0-.1.12-.27.14,0,.1,0,.16V136l0,.1-.06,0,0,0,0,.09v.1l.09,0,.08,0,.11,0,.08.05.17.22.14.1,0,0,.08.05.07.08,0,.06,0,0-.06.1,0,.13-.05.06-.05,0-.07,0h-.8l-.07,0-.08,0-.06.08-.06.08-.11.15-.08.07v.14l0,0h-.06l-.19-.09-.15.05,0,.08,0,0-.06-.14h-.1l-.16-.13-.07,0,0,.05-.08.12-.13.1h-.08v0l-.05-.11-.2,0-.07-.05h0l.19-.12,0,0,0,0,0,0-.16,0-.08,0-.11,0-.09,0,.17-.12v-.13l.09-.16.08-.09.23-.13h.22l-.06-.05-.06,0h-.11l-.12-.07,0-.08.24-.49v-.05l0-.12v-.11l-.16-.07h-.08l-.21-.13-.09-.07,0,0v.11l0,0-.05,0,0-.12-.05-.09-.14-.09-.05-.05,0-.11h0l0-.12.09-.09.21-.16.06-.08.11-.09h.1v-.07l.05,0,.1-.05.12-.07.09,0,.12-.1.05,0h0l0,0,0,0,0,0h.05l.09,0h.1l.07-.09,0-.06,0-.06.11-.08.06-.1.08-.12,0,0h0l0,0,0-.13,0-.12,0-.05.08-.07,0,0h.06l.05,0,0,0,.05,0,0,0,.05.07,0,.05,0,0v.06l0,0,.08,0,.14,0h.09l0,0,.11,0,.21,0h.09l0,0,.06,0h0l.05-.06,0-.09,0-.07v-.05l0-.06-.07-.06,0-.08-.05-.09,0,0,0,0V133l0,0,.1,0,.14,0,.11,0h.18l.12,0h.16l0,0,.11-.09,0,0,.06-.07v-.11l0-.06.06-.07,0,0h.06l.05,0,0,0h0l0-.06h.09l0,0,0-.16,0-.12v-.09l0-.15,0-.09,0,0h0l0,0h.1l0,0,0,0,.08,0V132l0,.07.06.07.08.06.05,0,0,0Zm-5.19,3.65-.05,0v-.06l0-.05h0l0,.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KR"
                                    d="M2146.88,138l0,0v-.14l.08-.07.11-.15.06-.08.06-.08.08,0,.07,0h.8l.07,0,.05,0,.05-.06,0-.13.06-.1,0,0,.23.53.21.34.19.24.26.47.08.24V139l.05.21,0,.12v.19l0,.1,0,.07v.3l0,0,0,0,.05,0h.06v.11l-.07.3-.06.21-.09.19-.1.17-.13.06-.09,0h-.17l-.14,0-.12,0-.05,0,0,.06,0,.1v.07h-.06l-.1,0h-.11l-.06,0,0-.1h-.05l-.1.06h-.15l0,0,0,0,0,.05.07.07,0,.06-.07,0-.06-.09,0-.08h0l-.07,0,0,.09,0,.06,0,.07-.07.08,0,.06-.06,0-.13-.09,0-.07.06-.06v-.07l0,0-.2.16-.12.19-.06,0,0,0,0,0-.13.12,0,.09h0l0,0v-.09l0-.07-.14-.11-.06-.09,0-.06.12,0h.09l0-.05,0,0,.06,0,.05,0,0,0-.06,0h-.06l0-.12-.06-.13,0-.12.07-.07,0-.11.06-.16,0-.05.08,0,0,0,0,0-.08,0v0l.05,0,.06,0,.11-.06,0-.12,0,0-.07,0,0-.06,0,0v0l-.08-.08-.05-.06,0-.08v-.28l0-.12,0-.13,0,0,0,0-.14,0h-.05l0-.1,0-.11.13-.1h.07l0-.05h.09l.1.07h.09l.05.12,0,0v0l.07-.05,0,0,0,0-.08,0-.08-.15v-.06l0,0,0-.12-.08-.13-.05,0v-.12l-.05-.08,0,0,0-.07,0,0h0v0Zm-.11,0v.15h-.05l0,0v0l0-.14,0-.06.08.05,0,0Zm4.06.3,0,0-.05,0v0l0,0,.06,0,0,0Zm-4.15,1.13,0,.08-.06-.05v-.16l.06,0,0,.09Zm2.14,1.92-.09.07-.11-.1,0-.05.09-.07.07-.09h.05l0,.24Zm-.62,0v.11h-.07l0-.07,0,0h0l0-.09v-.07l.08-.05,0,0,.07,0,0,.08Zm-1.75.08v0h0l0-.07,0-.07,0,0,.06-.05.09.09Zm1.5.13v0l-.05,0,.05-.06Zm-1.44.28h-.06l0,0h0l0-.05.09-.1,0,0,.09,0,0,.05,0,.08-.09.07Zm.48,0v.06h-.07l0,0v-.05h.05Zm-.4,1.24,0,0,0,0h0l0-.06,0,0,0-.07.12-.1.33-.1h.06l.13,0,0,.08,0,.07,0,0-.15.08-.12,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="XK"
                                    d="M2050,132.6h0l-.16,0,0,0,0,.07v0h0l-.05,0-.06-.06h-.08l-.26.13,0,.06v.18l0,0-.11,0h0v-.17l0-.2,0-.06-.08-.07-.05,0-.1,0-.05-.11-.08-.13,0,0v0l0-.09,0-.07,0-.06,0,0h.12l0-.06.11,0,.12,0,0,0,0-.06,0,0,.13-.1,0-.05v-.08l0-.06v0l.07,0,.06,0h0l0,0v0l0,.05,0,0,.07,0,.08,0,.07.06.09.11v.06l.08,0,.07.05v.1l.25.09h.08v0l0,.07-.1.21v0l-.07.05v0l0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KW"
                                    d="M2074.33,146.6v0l0,.12.06.13.06.1V147h-.05l0,0-.08,0-.14.14-.08.07v0l.11,0h.08l.06,0,.05,0,0,.08v.07l.08.24.07.09.08.14,0,.08,0,.06.05.09h-.71l-.08-.1,0-.11,0-.11-.08-.16-.27,0-.15,0-.23,0-.18,0,.15-.17.07-.09.12-.2.07-.15.06-.15.05-.13,0,0,0,0,.07-.05.1,0h.31l.08,0,.2.1Zm.28.37-.06,0h0l0-.06-.05-.14,0,0v0h0l0-.07,0,0,0,0,.11.17v.09l-.06.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KY"
                                    d="M1956.46,157h-.08l.08,0,0,0h0l-.07,0Zm-.14,0h0l-.07,0h0v0h.12Zm-1.29.35,0,0h0v0h.14l0,0h-.11l-.05,0H1955v-.1h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="KZ"
                                    d="M2110.62,123.59l-.09,0h-.16l-.11,0h0l-.08.06,0,0,0,.1,0,.11,0,.23,0,.09-.1.14-.06,0-.11,0-.1,0-.19,0-.21,0-.07,0-.05.1,0,.09,0,.06-.05.21,0,.19,0,.23,0,.26v.09l.05.13,0,.08v.11l-.07.09-.05.12,0,.05-.12,0-.11,0-.11.1-.09.07-.14.09h-.07l0,0,0-.1,0-.05h-.12l-.18,0h-.12l-.08,0-.1,0-.17,0-.11,0-.07,0-.18-.09-.23-.11-.09,0-.06,0v.21l0,.09-.16.46-.1.32-.13.3,0,.2-.07.26-.08.18,0,.11v.09l.12.07.12,0,0,0,0,.06v.11l0,.1,0,.08,0,0h0l-.07-.05-.07-.06H2106l-.14,0-.12,0h0l-.07,0-.07-.06,0-.11-.06,0-.09,0-.24.08-.28.1-.17.05h-.2l-.11,0-.09,0-.17.05-.16,0-.1.09-.07.07v0l.05.05.06,0h.24l.1.05.09,0,0,0,0,0h-.06v.07l0,.09v.59l0,.06,0,.12.06.08.09.26.05.16.05.17,0,.09v.06l.06,0,0,.09,0,.06v0l0,0-.13,0-.1.05-.11.06v.08l.06.05.09,0v0l-.1,0-.16.07,0,.08,0,.09v0l0,.13,0,.15,0,.16v0l0,0,0,0-.13-.14-.14-.14-.11,0-.19,0h-.1l0,0-.06-.08-.06-.08-.09-.07,0-.12,0,0-.06,0h-.16l-.09,0-.14,0-.11,0H2102l-.2-.05h-.52l-.17-.07h-.1l-.28.06H2100l-.1.13,0,0-.25,0-.29-.08-.22-.09-.18-.1-.23-.16-.15-.07,0,0h-.22l-.05.08-.16.06-.1,0,0,.06-.1.37,0,.14.06.23-.07,0-.09,0,0-.05-.09,0-.31,0-.05-.05,0,0-.08,0-.11,0-.25-.1h-.11l-.31-.08h-.08l-.12.05H2096l-.09,0-.15.06-.08.09-.07.1-.07.06,0,.1,0,0-.06.1v.06l.05.06-.08.05h-.08l0,0-.05.07,0,.07,0,0h0l0-.05H2095l-.08.06-.09.1-.12.16-.13.08-.16.07-.11,0-.09.05-.15.11,0,.06-.11,0-.09,0-.08.07,0,.13-.05.07-.13.1-.1.1-.07.1-.08.1,0,.06v.08l0,.06v.06l0,.05-.07,0-.07,0-.12,0-.12-.08,0,0-.06-.07v-.06l0-.12,0-.08-.05,0,0-.05,0,0-.05-.08-.07,0-.05,0-.07,0-.19,0h-.45l-.21,0-.06,0,0,0,0-.11,0-.09,0-.18,0-.14,0-.17,0-.18,0-.13H2091v-.39l0-.19v-.65l-.08.05-.1.05-.09,0-.06-.12-.06-.11-.09-.18-.07-.13-.12-.08-.09-.06-.09-.1-.08-.1-.08-.09-.09-.09-.08,0-.1.05-.1,0-.1.06,0,0H2089l-.16,0-.22,0-.21,0-.15,0-.19,0-.19,0-.16,0-.21,0-.15,0h-.08l-.09-.11-.15-.17-.09-.11-.09-.1-.13-.15-.11-.11-.1-.11-.06-.11,0-.13-.05-.05-.12-.08-.13-.09-.13-.08-.12-.09-.13-.08-.13-.09-.13-.08-.12-.09-.13-.08-.13-.09L2085,129l-.12-.09-.13-.09-.13-.08-.12-.09-.13-.08-.13-.09-.1-.06h-.1l-.15.05-.15,0-.15.05-.27.08-.18,0-.13.05-.15,0-.19.07-.16.05-.19.06-.16,0-.14.05-.15,0-.11,0v4.63h-.13l-.15,0-.12,0h0l-.05,0,0-.06-.07-.08-.06-.06-.08-.12-.06-.1-.14-.21v-.07l0-.06,0-.06-.16-.14-.19-.13-.18-.12-.06,0-.08,0h-.18l-.22,0-.17.05-.24.06-.17.07,0,0-.14.09-.16.14-.18.21,0-.13v-.27l.05-.17.05-.11,0-.13,0-.15,0-.26,0-.06h-.21l-.05,0-.08-.09h-.1l-.05,0,0,0-.06,0,0,0,0-.05,0-.07-.07-.12-.08-.07h-.3v-.07l0-.16v-.16l0-.06,0-.06-.09-.09-.07-.13-.12-.26-.1-.3,0-.05-.09,0-.2,0-.13,0-.05,0,0-.07v-.15l0-.07.1-.06h.42l.17.13.06,0h.06l.13,0h.21l0-.06-.06,0h-.06l-.05,0-.09-.12-.15-.13,0-.06v-.09l0-.07.1-.08.09-.11,0-.14,0-.06.07-.1.12,0,.18-.08.29,0,.35,0h.09l.22.07.13,0h.16l.11,0-.11-.1-.22-.12-.06-.1.1-.27.14-.25.09-.29,0-.3-.05-.08,0-.1.05-.08,0-.08,0-.1-.06-.15,0-.05-.11-.08h-.22l-.18,0-.06,0,0,.06,0,0-.14.07,0,0-.05,0-.07-.08H2078l-.18,0-.09-.12h0l-.3-.1h-.11l-.23.09-.18.12,0,0-.08.07,0,0-.06,0h-.05l-.1.11-.19.13-.09.09-.11,0-.11,0h-.12l0,0h-.14l-.08,0v.05l0,.1-.07,0-.07.07,0,.06h0l-.21-.13-.17-.08-.15-.08,0,0,0,0,0-.06v-.12l0,0h.08l0,0,.08,0h.1l.06,0v-.06l-.12-.24-.11-.2-.1-.22,0-.08-.13-.18-.12-.18-.1-.17-.06,0-.16,0-.31,0-.1,0-.09,0-.09,0-.08-.07-.07-.12,0-.09v-.25l-.05-.15-.06-.07-.13,0-.18-.12,0-.23.09-.32.14-.23.1-.1,0-.08,0-.07v-.07l-.06-.08-.09-.07-.05-.09,0-.19.06-.28.09-.22.13-.12.11-.09,0-.08V122l0-.08.05-.07,0,0,.06-.07h.09l.1,0,.13.14.2.27.11.17,0,.06.1.1.09.05.16-.07.14-.08,0,0,0-.08,0-.12,0-.08,0-.11,0-.18,0-.28,0-.09h0l.07,0h.07l.1-.07.13-.12.24-.18,0-.12.05-.13.06-.09.16,0,.14,0,.1-.09.16-.09.13,0,.06,0,0-.07.15-.2.12-.12.1-.13,0-.08.08,0,.13,0,.13,0,.1.08,0,.08v.06l0,0h.24l.15-.1.22-.18.19,0,.11,0,.08.13.07.12.07,0h.06l.08,0h.09l.07,0h.13l.17,0h0l.09,0,.1,0,.08.07.14.22.08,0,.17.08.07.07.1.11,0,.06.1.12.12.2,0,.15,0,.13,0,.06h0l0,0,0-.06,0-.1,0-.18,0-.14,0,0,0,0,0-.06.07,0,.08,0,.13.08.13.1.17.19.15.11.17.09.13,0,.1,0,.13-.07.11-.09,0-.09,0-.1.17-.13.15-.12.07,0,.05,0,.16-.07.05,0,.15,0,.16,0,.12.13.12.09h.11l.09,0,0-.08.05-.09.06-.07h0l.19,0h.13l.16,0,.17.14.11.15.14.19.06.06.09,0h.08l.1,0,.26,0,0,0,0,0,0,.11,0,0,.21-.07.06-.06.07-.15.06-.16,0-.06,0,0,.05,0,.07.09.1.1.12,0,.08,0h.12l.28,0,.26-.12.15-.12.07-.19,0-.22.07-.13,0-.14-.13-.13,0,0-.32-.08,0-.05h0l-.32-.12-.15,0,0-.08,0-.1-.1-.1-.2-.08,0-.06,0-.07.15-.07.18-.15.07,0h.16l.14-.12.1-.07.06-.09,0-.09-.14-.26,0-.16,0-.11.08-.11.05-.06.06-.11,0-.06.14,0h.18l.12,0h.18l.15,0,.08,0,.06,0,0-.06v-.08l-.06-.08-.23-.1-.1-.09h-.08l-.13,0-.11-.06-.1,0,0-.07,0-.11,0-.06.08,0h.08l.09,0,0,0V117l0,0h-.06l-.07,0-.08,0-.14-.05-.11-.06v-.06l.08-.08,0-.07v-.2l0-.13.08-.08.1,0,.24.09.31.07h.05v0l0,0h.42l.09-.05,0,0,.4-.06.05,0,.06,0h.09l.12,0,.15-.06.11,0h0l.12,0,.14,0,0,0,0,0,.12-.07.24-.06.06,0h.12l.14,0,.11,0,.07,0,.08,0,.07,0,0-.12,0-.12.07,0,.06,0,0,0,0-.05h.21l.19-.12,0,.06.25,0,.3-.07.19,0,.32-.08.14-.06.21,0,.19,0,.13-.12h.23l.07,0,0,0,0-.08,0-.1v-.08l.09,0h.12l.08,0,.17-.16.12-.08.13-.06.25,0,.22,0,.23.08.12.1.1.07.1,0,.09,0,.1,0,.07-.05.05-.06.06,0,.23,0,0,.07.11.22.08.28.12.38.05.18,0,.1v.28l-.09.16,0,.07.22.09.32,0,.19-.07.11,0,.06,0,0-.12.08,0,.07.08.06.14.05.09v.11l0,.14,0,0,.07-.05.06,0v0l0,0v-.1l0,0h.11l.16,0,.19.2.1,0h.14l.11-.06.08-.07,0,0h0l.05,0v.07l0,.11-.11.09-.14.09-.09.16,0,.17,0,.09,0,.06v.08h0l.06,0,.16-.16.08,0,.12,0h.19l.13.06.07.07.06.07,0,0,0-.07v-.08l0-.07.21-.17.14-.11h.05l.09,0h.06l.16-.11.14-.12v-.15l0,0,.2,0h0l.17-.09.24-.14.12-.08.21,0,0,0,.07-.06.13-.08h.08l0,.19-.08.22,0,.06h-.22v.06l0,.09,0,0,0,0,.06.08.22.19.29.23.31.27.22.18.08.1.06.07.16.27.15.25.26.45.22.42.25.47.15.26.29.56.08.17.15.32.13.3.12.26.07,0v-.12l0,0,.09-.08,0,0h.07l.07,0,0-.07,0-.14v-.07l0-.06,0,0,0,0h.05l0-.08.08,0,.07,0h.06l0,.06,0,.08h.15l0,.07,0,.11,0,.08v.07l.05,0,.18,0,.06,0,0,.07,0,0v.07l0,.08,0,0h.16l.11,0h.17l.15.08.1,0,.11,0,.15,0,.11-.06.08-.08,0-.06,0,0h.24l.07-.09.06,0h.18l.21.09.12.07.13.1.08.06.05.15.09.1.07.12,0,.12.06.22.06.07h.07l.09,0,.1,0,.22.16h.07l.06,0v.08l0,.08,0,.08.07.11.06.1.07.12,0,.07,0,0,.08,0,.11,0,.36.07h0l0,.07h.19l.06-.06.05-.06.11-.07.1-.1.08-.09h.06l.05,0v.07l-.06.06-.05.07v.06h.08l.09.1.13.23.05,0,.06,0,.07,0,.08,0,.06.1,0,.09Zm-34.14,5.55,0,0,0-.09,0-.07h.05l0,.11,0,0Zm-.11.15,0,0h0l-.09-.14,0-.14,0,0,.05,0v0l-.06.06v.08l.06.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LA"
                                    d="M2124.27,154.38l.06.09.1.11.13.15.05.06.08.06,0,.05,0,.08V155l0,0,0,0,0,0,0,0,0-.09h0l0,.07,0,0h0l0,0v.11l0,.06,0,.07v.1l0,.07,0,.06.21.3.09,0,.24.06.08,0,.07,0h.08l.07-.1.08,0,.16-.07h0l.09,0,.14.09.11.09.06,0,.05,0v0l0,0,0,0-.06,0,0,0h.12l.11,0,0,.05v0l0,.07,0,0,.1,0,0,0,0,0,0,.09v.06l-.08.07,0,0v.07l0,.08-.15.13h0l-.26-.08H2126l0,0,0,.08v.08l0,.06-.09.05,0,0v0l0,0,.08,0,.09,0,.31.2.07.05.09.07.09.06.26.07.11.05,0,0v0l0,0,0,.08v0l0,0,0,.07.11.1.05,0h.06l.06,0,.05.07.07.09v.06l0,.09.06.09.08.09.12.11.06.08,0,0,.24.19.06.07.09.13,0,0,0,0,0,.08V160l0,.05,0,.06,0,0,0,0h0l0,0,0,0h0l0,.11,0,.05.07,0,.06,0,.14.13.07.05.05,0,0,0,0,.05,0,0,0,0-.16.08,0,0,0,.05,0,.07.05.06,0,.05.11.09.1.07.05.08,0,.05,0,.06,0,.07,0,.06-.05,0,0,0,0,.06,0,.05v.15l-.05,0,0,.1h0l-.08,0,0,0-.05.07-.09.08h-.07l0,0-.05.06h-.11l0,0,0-.05-.07,0-.06,0,0,0,0,0,0,0,0,.06-.09.06h-.12l0,.08,0,0h-.15l0,0,0,.07.08.13,0,.07-.05.13h-.15l-.07,0-.06-.07,0,0-.2-.07-.12.05h0l-.06-.05,0,0,0-.05,0-.06v0l.06,0,.09,0,.07-.06.05-.05,0-.06v-.06l0-.18,0-.08v-.11l0-.08v-.22l0-.05,0-.07,0-.09v-.11l-.06,0-.09,0-.06,0,0-.06v-.05l0,0-.07,0-.17-.06-.09-.06,0-.07-.07-.1-.12-.12-.07-.18v-.41l.05-.21-.07-.16-.07-.08-.11-.06-.1-.08-.1-.12-.12-.16-.13-.22-.1-.1,0,0-.1,0-.15-.06-.13,0h-.19l0,0v0l0,0,0,0-.06,0,0,0-.06.08h0l0,.11-.06,0H2125l-.09,0-.08,0,0,0v0h-.05l0,0v-.05l0,0-.09,0-.1-.06-.11-.1-.08,0h0l-.06,0-.08.09-.07,0-.05,0,0,0,0,.08-.05.06-.12.07h0l-.13.09-.11.09-.12.12-.06,0,0,0-.09,0,0,0,.08-.21.11-.23,0-.1v-.14l0-.07,0-.05v-.07l0-.05.06-.08.05-.17.06-.18v-.11l0-.12,0-.11,0-.15v-.06l0,0-.18,0h0l-.05,0,0,0-.06,0h-.11l-.1,0-.09-.09,0-.11.06-.13.05-.1,0-.09v0l0-.05h0l-.06-.06-.05-.1-.06,0h0l0,0,0,.07,0,0,0,0v-.11l.05-.21.06-.14.07-.06.08,0h.14l.06,0v0h-.06l0,0,0-.06,0-.05.05,0,0-.07,0-.12.05-.06h.06l.1-.05.14-.1.05-.1.06,0,0,.12,0,0,0,0v.12l0,0,0,0,.15-.05h.09l0,0,0,0h0l0,0h0l.05,0h0v0l0,0,0,0v-.08l0-.14v-.29l0,0-.09-.11,0-.06,0-.07v0l0-.05v0l0,0,0,0,0-.08,0-.06,0,0h.05l.07.1.1-.05h.07l.06,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LB"
                                    d="M2063.16,142.87l0,0,0,.05-.05,0-.1.07,0,0,0,0-.05,0,0,.15-.08,0h-.28l0-.09.05-.11,0-.14.08-.13.16-.41.1-.17,0-.24.14-.21.11-.06.05-.06v-.09h.27l0,0,.08,0,0,0,0,.06,0,.06h0l.07,0,.05,0,.07.23,0,.1-.07.08h0l-.06,0-.05.06,0,0v0l.08,0h0v0h-.24l-.07.06,0,0v0l0,.07,0,0,0,0h0l0,0-.05,0,0,0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LC"
                                    d="M1973.92,162.64l-.05.1-.11-.06v-.13l.06-.09,0-.06,0,0,0,.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LI"
                                    d="M2038.92,126.38h-.09v-.15l0-.13v.12l0,0,0,0v.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LK"
                                    d="M2103.85,166.39h.25l.11.14.31.26.17.26,0,.06,0,.05h0l0,0,.17.25,0,0v.1l0,0h.06l0,0,0,.2V168l.21.31v.09l0,0,.06.15,0,0,0,.13V169l0,.11,0,.13,0,.14-.05.09-.07.08-.24.17-.07,0-.31.11-.23.1-.21,0-.21-.06-.16-.13-.08-.19,0-.21-.08-.22-.07-.7,0-.2,0-.25v-.1l0-.11V168l0,0,0,0,0-.24,0-.1.08-.26v-.19l.13-.18,0-.11,0-.1v-.12l0-.12.1,0,0,0,.06,0,.05,0h.05l0-.06-.11-.06-.2,0-.06-.05,0,0v-.07Zm0,.17h-.06l-.05-.06v0h0l0,.06.06,0Zm-.09.54,0,.07-.08,0,0,0,0,0,.11,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LR"
                                    d="M2022.25,168.48h0l0,0,0,.1.1.31V169l0,0v.11l-.07.09-.18.18v0l0,0h.09l0,0,.05.06.06,0,.07,0h.21l.09,0,0,.08,0,.07,0,0v.05l.06.06h.09l.11.06h.06l0,.17,0,.09,0,0v.17l0,.08v.12l-.06,0v.64l0,0-.1,0-.32-.13-.24-.07-.8-.43-.23-.17-.25-.26-.58-.51-.13-.08-.16,0-.1,0-.08,0-.05-.15-.15-.08-.26-.12-.2-.2,0-.05.07-.13.1-.13.09-.07.08-.08.08-.06.11-.07.17-.18,0,0,0-.13,0-.16.05,0,.12,0,0,0,0-.11,0-.14v0h0l.08,0,0,0,0,0v0l.24-.09h0l0,.07h0v0h0l0,0,0,0,0,0,0,0v.16l0,0,0,0v.22l0,.06,0,.09v.12l0,.06,0,.06v0l0,0h.07l.09,0,0,0,0,.05,0,0v0h.06l.07,0h.08l0-.06,0-.06,0-.07,0,0v-.1l0-.05,0,0h.08v0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LS"
                                    d="M2056.59,204.39l-.09,0h-.23l-.07.07-.13.2,0,0v.08l0,.06,0,0h0l-.1,0-.14,0-.08-.06-.07-.09,0-.05,0,0h0l-.06,0,0,0h0l0,0v-.13l0-.06-.07-.09,0-.08-.06-.11,0-.09,0-.1v0l0,0,.1-.05.08,0,.06-.07.07-.1,0-.06,0,0,0,0,.06-.09.06-.11.07-.11.09,0,.12,0,.11-.1.14-.08.22-.09.1,0h.07l0,0,0,.05.09.07,0,0,.09.11.09.08.11.08.08.05h0l0,.08,0,0,0,.06v.05l0,.13-.05.13,0,.06,0,0-.05.05,0,.11,0,.12-.07.05,0,0-.07,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LT"
                                    d="M2054.61,113.64v.08l0,.12,0,.16-.05.12v0l0,0,.17,0,.07,0,0,0,0,0-.06,0,0,0,0,.11h-.29l0,0,0,.06v.06l0,.08-.07.06-.12,0-.1,0-.07.14-.05.18v.25l0,0-.06.12-.05.13,0,.08v0h.06l.08,0,0,.05v.16l-.06,0h-.1l-.06,0v0l0-.06,0-.08,0,0-.08.06h-.08l-.1.06-.06.1-.06,0-.16,0,0,0,0,.19,0,0h-.13l-.13.07-.15.07-.08,0,0,0h-.08l-.09,0-.06,0h-.06l-.13,0-.16,0-.07,0v-.22l0-.1-.08-.09-.08-.06-.1-.06-.08,0h0v-.07l0,0-.07,0h-.07l-.05.06,0-.08,0-.14v-.11l0-.11.11-.33v0l-.08-.09-.1-.07-.06-.14h-.45l-.19-.06-.17-.09-.12-.06-.1-.06-.05-.07-.09,0h0l0-.12,0-.18-.06-.26-.1-.32V113l.25-.19.31-.21.07,0,.29-.12h0l.26,0,.2,0h.17l.1,0,.08,0,.07.09h.07l.07-.06.39.06h.18l.18,0,.11,0,.22,0h.1l0,0,.16-.14.07,0,.06,0,.06,0,0,.12.12.21.13,0,.35.08.07.05.2.18.11.09.08.07.11.14.07.1.11.07.13.06Zm-5.2.63h0l.1-.18,0-.13,0-.17,0,0v.21l-.07.22-.07.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LU"
                                    d="M2035.72,122.12v.12l0,.09.06.08,0,.06.06,0,.11,0h0v.13l0,0,0,.06,0,.06,0,.12v.09l-.06,0,0,0h-.06l0,0,0,0h-.1l0,0h0l-.07,0,0,0,0,0,0,0v0l0,0-.07-.13v0l-.06-.07v0l0,0v-.08l0-.06,0-.08,0-.1.1-.12.08,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LV"
                                    d="M2055.31,110.53h.11l0,0,0,.13.12.11.12.08,0,0v.17l0,.05,0,0,0,.14v.13l-.07.22h0l.14,0,0,0,0,0v.14l0,.06.05.1v.07l.09.09v.06l0,.21,0,.12v.09l0,.11,0,.08h0l-.07,0-.13.09-.19.22,0,0,0,.17v0h-.25l-.24,0-.09,0-.12.17-.05,0-.14,0,0,0h-.05l-.13-.06-.11-.07-.07-.1-.11-.14-.08-.07-.11-.09-.2-.18-.07-.05-.35-.08-.13,0-.11-.21,0-.12-.06,0-.06,0-.07,0-.16.14,0,0h-.09l-.23,0-.11,0-.18-.06h-.18l-.39-.06-.07.06h-.07l-.06-.09-.09,0-.1,0h-.17l-.2,0-.26,0h0l-.29.12-.07,0-.31.21-.25.19,0-.31,0-.63,0-.31.17-.19.08-.14.05-.19,0-.18,0-.15.25-.42.2,0,.27-.12.29-.1.06.13,0,.1.36.34.09.12.14.4.33.2.26-.06.12-.1.21-.18.09-.13,0-.13,0-.55-.06-.24,0-.15h0l.09-.07.29-.14h.06l.07,0,.18-.1.06,0,0,.06h0v-.09l0,0,.22.17.08,0h.05l.07.08.18,0,0,0v0l.17.21.08.11.15.09.06,0,.27-.1.07,0h.06l.06.06.15.06.12,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="LY"
                                    d="M2053.28,144.81l0,0,0,.06,0,.06-.09.09-.07.1v.15l0,.15,0,.14,0,.16v.11l0,.12,0,.11-.14.22,0,.05v.08l.09.26v.08l.06.25,0,.21.05.16v9.31h-.92v.49l-.44-.23-.45-.23-.44-.23-.44-.24-.44-.23-.44-.23-.44-.23-.45-.23-.44-.24-.44-.23-.44-.24-.44-.23-.45-.23L2046,154l-.44-.24-.44-.23-.31-.16-.33.15-.25.13-.34.16h0l-.39.22-.3.16h0l-.31-.27-.25-.22-.1-.06-.46-.11-.46-.11-.48-.12-.09-.17-.1-.2-.13-.25-.08-.15,0,0-.37-.12-.39-.12-.23.08h0l-.07,0-.06-.07,0-.08-.1-.12-.08-.26v-.28l-.21-.3-.18-.27-.12-.18,0-.09,0-.1,0-.09.17-.1.16-.12,0-.08v-.22l-.06-.07,0-.14,0-.18v-.11l.07-.23.09-.24-.06-.27,0-.54,0-.42,0-.16,0-.06,0-.21-.07-.2,0-.08-.08-.17-.15-.21-.07-.12.1-.07.09-.06.11-.05.16-.07.08,0,0,0,.12-.17.06-.09.08-.13,0-.08v-.18l-.07-.24,0-.23,0-.08,0-.05.07-.1,0,0,.15,0,.07-.07,0-.09,0-.05.06,0,.09-.05,0-.06.16-.1.15-.09.18-.1.13-.07,0-.07v0l-.07-.13v-.35l0-.21v0l.14.07.15,0,.43.26.13,0,.3,0,.36-.1.13,0,.24.1.1,0h.17l.3.08.07,0,.17.14.09,0,.61.13.08.09.09.16v.21l0,.14.07.2.1.13.1.11.11.07.27.11.3,0h.31l.52.15.45.16.11.08.22.08.44.39.25.13.17,0,.15,0,.28-.13.11-.08.28-.33.09-.18,0-.12v-.13l0-.11-.07-.12-.06-.15,0-.29,0-.19.06-.12.08-.12.23-.23.23-.16.41-.22h.23l.1,0,.2-.15h.07l.11,0h.32l.15,0,.16.09.22.06.15.06.16.07,0,.19v.13l.17.12.47.06.09,0,.13.1.09,0h.32l.19,0,.18,0,.06,0,.07.07.09.19Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MA"
                                    d="M2028,141l0,.08.06.07.19.15.12.09v0l0,.08v0l0,.06.07.07v.07l0,.07.08.21v.21l0,.14v.16l.07.16,0,.28,0,.15.07.12,0,.21,0,.1.09.09.06,0,.1.08.07.06,0,.09-.09.07-.07.07,0,.07,0,.12v.06l0,0h-1.15l-.18,0-.13,0h0l0,0,0,.08,0,.1,0,0-.39.14-.15,0h-.15l-.06,0,0,0V145l0,.08v.08l0,.06v.12l0,0h0l0,0,0,0,0,.05v.07l0,0,0,0-.15,0h-.11l-.16.12-.16.11-.19.08-.08,0-.15.06-.17.09-.09.15-.11.17-.1.12-.14.1-.14,0-.17.06-.21,0h-.45v.16l0,.06,0,0h-.15l-.09,0-.22,0h-.06l-.07,0-.11.08-.07.07,0,0-.13,0-.06,0-.24.19,0,0-.24.16-.07.06-.06,0-.14.11-.1.06V149h-4.14l.12-.12.09-.15.14-.06.3,0,.45-.13.4-.19.11-.07.12-.15.2-.2.38-.23.17-.14.26-.33.18-.27.14-.18.1-.16.08-.16,0-.26,0-.1-.11-.16-.08-.05,0-.08,0-.13v-.24l0-.38.13-.31.3-.41.06-.17,0-.26v-.1l.38-.38.22-.29.08-.07.19-.13.69-.3.38-.21.23-.15.13-.18.37-.72.37-1,0-.12.16,0h.12l.09,0,.11-.08.11,0,0,.06v.12l.08.15.13.17.25.21.19.08.28,0,.32-.09h.18l.08,0,.1.06h.18l.17,0,.14-.08.08-.11v.11l0,0,0,.13,0,.05h.1l.09,0,.2,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MC"
                                    d="M2036.94,130.71l0,0v0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MD"
                                    d="M2056.1,128.52l0-.09,0-.07,0,0,0,0,0,0,0,0v-.09l0-.1,0,0v-.19l0-.22.07-.28,0-.14,0-.07,0-.18,0-.09-.05-.11-.07-.26-.09-.08-.11-.1-.05-.07,0-.08-.06-.08-.08-.07-.09-.19-.05-.08v0l-.11-.12-.05-.11,0-.09v-.08l-.08-.16-.06-.12-.07-.09,0-.06-.08-.08-.1-.06h-.16l0,0,.19-.13,0,0h.3l.1-.08.07,0,0,0,.08,0h0l.13,0,.1,0,.06.07.07,0,.07,0,0,0v0l.06,0h.12l.06,0,0,.07v0l0,0,0,0V125l0,0,.07-.08h.06l.16,0,.08.17.06.06,0,0,.06,0,0,0h0l.07.12v.2l0,.1,0,.11,0,.07v.05l0,0h0l.13.1,0,.06.07,0h.05l0,0v.12l0,.07v0l0,.06v.11l0,0,.11.07.15.08,0,.06,0,.08v.24l.19.16,0,0,0,0-.18,0,0,0-.08-.12h0l0,0,0,0h-.06l-.06,0,0,0h0l0,0h-.05l0,0-.05.1,0,0h0v-.2h0l-.09,0-.08.05,0,0v.08l0,.1,0,.15,0,.06,0,.11-.09.09-.1.05V128l-.06.07-.1.08-.06.09,0,.07v.13h-.18l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MG"
                                    d="M2075.77,186.91l0,.1.05.09.16.23.06.09.06.09,0,.19.09.29.1.43,0,.45,0,.21.08.19.11.2,0,.23-.07.23-.1.22,0,0-.05.06h0l-.09-.05-.06-.1-.09-.21,0-.11,0,0h-.1l-.07.07,0,0,0,.12,0,.11v.26l0,0,0,0,0,.09v.22l0,.11-.07.1v0l0,.05,0,0-.1,0,0,0-.05.1-.08.2v.1l.05.31v.22l-.11.43-.06.2-.09.24-.13.31-.13.4-.11.41-.08.25-.1.25-.13.43-.1.44-.17.49-.22.54,0,.08-.05.28,0,.24-.06.24-.12.4,0,.12,0,.12-.12.25-.05.1,0,.1,0,.12,0,.13-.09.22-.13.19-.09.07-.19.11-.1,0h-.22l-.21.06-.22.11-.21.13-.08.06-.09,0h-.27l-.09,0-.28-.22-.11,0-.2,0-.06,0-.06,0-.08-.11-.17-.09,0,0,0-.06,0-.07,0-.08,0-.15,0-.1-.16-.18v-.73l.06-.1,0-.11-.05-.12,0-.11,0-.11-.16-.2,0-.09,0-.1-.05-.3v-.34l0-.11,0-.08v-.06l0-.05,0,0,0-.05.06-.29.08-.06.11,0,.09-.07.05-.1,0-.21.14-.21.05-.11.11-.16.1-.23,0-.1,0-.11,0-.25,0-.12v-.12l-.06-.12-.14-.22v-.32l-.05-.12-.07-.11-.06-.21,0-.34V192l0-.11,0-.1,0-.18.41-.66v-.44l0,0h.07l.33,0,0,0,.09-.05.11-.11.05,0h.05l0,.05,0,0,.13,0h.11l0-.05,0-.06,0,0,0,0h.17l.11,0,.14,0h0l.12.16h.08l0,0-.1-.08V190l.05-.1.09-.09.18-.12.19-.15h.06l0,0,0,.17v0h0l0,0,0-.07v-.06l0-.05v-.09l.09-.1.08-.1,0-.11,0-.06.08-.06h0l0,.05v0l0,.05,0,0v.07h.08l.07-.12.07-.12,0-.06,0,0h.09l.09,0-.14-.12,0-.16.17-.29v-.06l0,0v0l-.09-.1v-.12l0-.06,0,0h0l0,0,.1.08h.06l.07-.07.07-.1.09-.06.11,0,.16-.15.1-.31v-.1l0-.11,0-.1-.06-.13v0l.09,0,0,0,.1-.12.16-.22h.05l0,0,0,.06,0,0,.11.1.05.08Zm-1.1.88v0h-.12l0-.12h.06v0h0l0,.1v.06Zm1.47,3.36-.11.17,0-.14.12-.22h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ME"
                                    d="M2047.78,131h0v.05l0,0,.07,0,.11.09.12.16.06.05h0l.11.07.07,0,.08,0,.2.14.1,0,.06,0v.08l-.12,0,0,.06h-.13l0,0,0,.06,0,.07,0,.09v0h0l-.1.06-.07,0h-.07l0,0v-.17l0,0,0,0-.05.08,0,.09-.08.1-.06.09-.06.12-.05.09.05.06,0,.07v.09l0,.1v.06l-.14-.1-.06-.14-.21-.23-.24-.16,0,0,0,0v0h0l0,0h0l0-.06,0-.05v0h0l0-.06v-.06l-.07-.13v-.24l0,0,0,0,.13,0v-.15l0-.06v0l.07-.07.1-.08h.07l0,.07h0v-.08l-.06-.11,0-.07v0l0,0,.05,0,0,0,0,0h.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MF"
                                    d="M1972,158.59h-.11v0l.05,0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MH"
                                    d="M2184,165.14h0Zm1.78,3.57v0h-.09l0,0h.14Zm2.1.16.12,0,.15,0h-.08l0,0H2188l-.1,0-.05-.05h0l0,0Zm.44.08,0,0h.07l.06.05h0l0,0h-.09v0Zm-1.79,1.13,0,0h0l0,0v0l0-.08,0,0,0,0v0l0,0,0,.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MK"
                                    d="M2050.69,132.52l.14.18.08.08.09.05.11,0,0,0,.07.2,0,.07.05,0v.05l-.05.14,0,.31v0h-.13l0,0,0,.16-.11.05-.1,0h-.09l-.15,0h-.05l0,0h-.13l-.06,0-.14.19-.14.07-.05,0-.11,0h0l-.07,0h-.33v0l0,0-.06,0-.12,0,0,0,0-.16,0,0,0-.05-.07-.18v-.15l0-.16,0,0,0,0v-.16l.05-.19v0h0l.11,0,0,0v-.18l0-.06.26-.13h.08l.06.06.05,0h0v0l0-.07,0,0,.16,0h.05l.11,0,.07,0h.15l.07,0,.09,0,.08,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ML"
                                    d="M2034,157.55v2.07l0,0V160l-.06.21-.1.16,0,.15,0,.09,0,0v.06l0,.08,0,.05,0,0-.1,0-.17.16,0,.12-.2,0-.21,0h0l0,0v.06h-1.32l-.25,0-.16.13-.15.14h0l-.21,0-.26,0h-.13l-.06,0v.05l-.19-.07-.23-.07-.15,0h0l0,0-.07,0h-.12l-.09,0-.14.1-.1.09,0,0-.14.05-.27.13-.15.09,0,0-.07,0h-.1l-.09,0-.08.25,0,0-.32-.1-.06,0,0,0-.18.14-.09.12,0,.15v.1l0,0h-.08l-.15,0h0l0,.08V163l0,.11-.09,0-.07,0h-.1l-.25-.17-.09,0-.1,0-.09.08,0,0-.06.06-.06.07,0,.06,0,.08,0,.09v.08l-.23.11,0,0,0,.05V164l0,.05-.06,0,0,.07,0,0-.06,0-.09,0-.16,0-.13,0,0,0-.06,0-.06.06v.14l0,.06,0,0,0,.05,0,.14,0,.16,0,.07-.07,0-.06.05,0,.1v.15l0,.12v.07l0,.08v0h-.16l-.14,0,0,0v0l0,0,0,0,0,0h-.08l-.07,0,0,0v0l0,0,0,0v0l0-.07,0-.08v-.15h0l-.1,0h-.06v0l0,.08h-.07l-.07,0-.09-.06,0,0v.11l0,.11,0,0h-.24l0,0V166l0,0v0h0l0,0h0l-.06-.05-.07,0-.17,0,0-.08h0l0,0,0-.05h0l0,0H2023l-.09.08-.06.1-.06.05-.07,0h0l0-.06v0l0,0-.21-.11,0,0,0-.13,0-.12v-.19l0,0-.06,0-.06,0-.09,0h-.07l0,0v0l.09-.13,0-.05.06,0,0,0,0,0v0h0l-.06,0-.09-.06h0l0,0,0-.1,0,0h0l0,0v-.24l-.09-.17,0-.11,0-.11,0-.06-.07,0-.09,0h-.14l0,0v0l0,.07v.08l0,0h0l-.08,0-.09,0-.07,0-.05.09h-.1l-.17-.07-.15-.05-.1,0-.06,0h0l-.08,0-.12.14,0,0h0l0,0h0l0,0h0l-.06-.1-.06-.11,0-.05h-.07l0,0-.06.07-.08.07,0,0h0l-.1-.09-.07-.05v0l0,0,0-.07,0-.05,0,0v-.07l-.06-.05v-.09l0-.14v-.05l0-.1,0-.05v0l0-.06,0-.08v-.06l0-.05-.05-.07,0,0h-.07l0,0,0,0h0l0-.05,0,0v0l-.06-.07-.09-.11v-.1l.06-.05v-.08l0-.05,0,0v-.21l0-.07,0,0-.06,0,0-.08,0-.11,0-.07-.09-.15.17.06,0,0,0,0,.08-.08.06-.1,0-.13v-.11l0-.09,0-.08.08-.08.08-.06.08-.06h0l.08.08.18.17.15.13,0,.07h0l.08-.12.07-.11,0,0h.26l.14,0,.06,0h.23l.17,0,.17,0,.12,0V161l0,0,0,0h0V161l0,0H2025l0-.28,0-.25,0-.22-.14-.15-.11-.12,0-.23,0-.24,0-.24,0-.24,0-.24,0-.24,0-.23,0-.25,0-.24,0-.24,0-.24,0-.24,0-.24,0-.24,0-.25,0-.24,0-.24,0-.25,0-.24,0-.25,0-.24,0-.25,0-.25,0-.24,0-.25,0-.25,0-.24,0-.25,0-.25,0-.25,0-.25,0-.25,0-.25,0-.23h1.63l.28.19.26.18.3.22.3.21.31.22.3.21.3.22.3.21.3.21.31.22.3.21.3.21.3.22.3.21.31.21.3.21.3.21.3.21.14.1v.28l0,.05.07.05.3.15,0,0v.07l0,.08.06,0,.07,0,.09,0,.27,0,.06,0,.11.14.06,0,.18,0,.13,0h0l.12,0,.13.06.07.06v.22l0,.09,0,.06v0l0,0,0,0,0,0,0,0,0,.06v.05l0,0,.07.06.07,0h.1l.23,0,.21,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MO"
                                    d="M2134.74,154.56v-.05h0l0,0h0l0,0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MM"
                                    d="M2123.36,155.18l-.05.1-.14.1-.1.05H2123l-.05.06,0,.12,0,.07-.05,0,0,0,0,.07,0,0h.07l-.06,0h-.14l-.08,0-.07.06-.06.14-.05.21v.06l-.11-.06,0,0h-.06l-.06,0-.05,0,0,0H2122l-.1,0-.07,0h0l0,.09v.11l0,0,0,0h-.11l-.08,0h-.06l-.05,0,0,0,0,0,0,.17,0,.06,0,0h-.14l-.25.07h-.23l-.12-.07h-.06l0,0,0,.1-.07.05-.09.13,0,.19v.13l-.09.13v.07l0,.3v0h0l-.06,0-.08,0-.06,0h0l-.08,0h0v0l.06.13.07.06h.1v0l0,.08.06.13,0,.1,0,.1v0l0,0,.06.1.12.14.13.15.1.13.07.09.17.16,0,.08v.16l0,.09,0,.06,0,.05.07.18,0,0,.14-.1,0,0,0,0v0l0,.06-.05.05-.21.13v.1l0,.17v.38h-.1l-.11.07h0l-.05,0,0,0v.06l0,.16,0,.15.08.11.07.09.08.13.07.1.14.12.2.18.07.09.07.12.05.1v.13l0,.08v.25l0,.05,0,.07v.07l.05.06v.08l0,.13.07.08.07.06,0,0v.07l0,.07,0,.08,0,.12,0,.09.09.29v0l0,.06-.05,0,0,0,0,.05-.08.16-.15.26-.16.17-.12.13-.1.07,0,.05v.21l0,.07,0,.08V166h0l-.09.14,0-.07,0-.07,0-.16,0-.3,0,0,0,0,.06-.11.07-.12v-.13l.06-.11,0-.08v-.24l0-.07.08,0,0,0,0,0-.1.06-.05,0,0-.06,0-.06v0l0-.05v-.08l0-.07,0-.1h-.06l0,0,0-.05.05,0-.05-.09,0-.09v-.12l0-.1v-.07l0-.13,0-.17-.08-.12-.06-.18-.17-.24v-.19l0,0,0,.32,0-.07v-.17l0-.08,0-.17-.09-.16,0-.12-.06-.18v-.05l.09.05-.08-.11-.06,0,0-.11,0-.31-.05-.12,0-.11-.06-.43-.11-.13,0-.12,0-.11v-.19l0-.06.06-.05-.06,0h-.27l0-.15-.06-.07-.05-.14,0-.16,0,0-.09-.07,0,0-.1-.11-.11-.08,0,.06,0,0-.05.09.05.17,0,.1-.05.14,0,.07-.13.14-.11,0H2119l-.08-.07v-.07l0-.1h0l0,.13V160l.08.12,0,0-.14.07h-.09v.08l-.23.08,0,.09,0,.1-.12.13-.15.11h0l0,0v-.12l.05-.1,0-.11v.06l-.1.15,0,.05h-.1l-.12,0-.05-.16v-.1l0-.05v0l0,.08v.06l0,.06-.13.07v-.16l0-.06v-.11l0-.15v-.1l0,.08,0,.08,0,0,0,0-.08.1,0,.08-.13.09H2117v-.11l.05-.37,0-.05,0-.07,0-.22,0-.08,0-.17,0,0,.06-.14,0-.25,0-.12-.07-.12-.05-.37-.16-.29v-.1l-.07-.12h.07l-.15-.1,0-.05,0-.24v-.14l0,0,0,.08-.06,0,0,.15v0l0,.06-.12-.06-.08-.07-.1-.15-.1-.18,0,0h0l.14.13.09,0,.05,0,.07-.06,0-.11,0,0-.07,0,0,0-.06-.07v0l0-.05-.07,0,0,0,0-.08,0-.06h-.12l-.13-.1,0,0,0,0h-.1l-.09,0,0,.14v0H2116l-.12-.22,0,0,.05-.05h-.07l.05-.19,0,0,0,.06,0,.06-.1.13-.05,0,0,0,.05-.07,0,0,0,0,0-.07-.06-.05,0-.09h0l0,.1v.16l-.11-.17-.21-.24-.05-.08v-.07l0-.06,0-.08v0l0-.05,0-.09v-.09l0-.06.06-.07h0l0,0,.09,0,.06,0,0,.06h0l0,0v-.05l0-.11v-.51l.06,0,0,0,0,0v0h0l.05,0,.07.09.05,0h.05l.06-.14,0,0,0,0h0l0,0v-.12l-.06-.19V154l0-.09.05-.1v-.12h0l0,0h0l0-.06v0l0-.21v-.34l0-.1-.06-.24,0-.05h0l.08.09,0,0,.07,0,.06,0h0l.06,0,.1,0,.14.05.06,0h.05l0-.09,0-.15.07-.21.08-.15,0,0,.08-.12.09-.13.07-.17,0-.12v0l0,0-.05,0,0,0v-.06l0-.07,0-.09.05-.05.1-.07.07-.08.08-.1,0-.07,0-.15,0,0,.05,0,0-.06v0l0,0,0-.1v-.29l0-.05,0-.08.07,0,.09,0,.15-.09.25-.2.09-.06.07,0,.06-.08.08-.09.12-.05.08,0,.36-.06h.06l.06,0,.07.13.07,0,.08,0h.06v-.05l-.19-.28v-.16l0-.06.06,0,.08-.07.1-.08.06-.05.08,0,0,0v-.1l0,0v-.14l0,0,.07-.1,0-.08,0,0,0-.06h.11l0,0,0,.06,0,.05h.11l0,0,.08.11,0,0,0,.05,0,.09v.09l.1.32,0,.06,0,0h.05l0-.05v0l0,0h0l.09.05.05,0,0,.15v.24l0,.15v.48l0,.16,0,.13v.11l0,.05-.09,0v0l0,.07.06.09v.05l0,0H2121l-.08,0-.06.11-.06.1h0l-.11,0,0,0,0,.16,0,.07-.05,0-.05,0,0,0h-.09l-.05.09-.05.13v.06l0,.1,0,0-.05,0-.08,0,0,.14v.14l0,.05,0,0,0,0v.06l0,.09,0,.1-.11.14v.08l.06,0h0l.06,0,.08-.06.16-.08.18,0h.27l.06,0,0,0,.16-.05h.07v0l-.13.12,0,.06v.07l.05.06,0,0,0,.12,0,.1,0,0,0,0,0,.06v.07l0,.12.18.06.15,0h.11l.08,0,0,0,0,0v.05l0,0-.07.1-.05.14v.19l-.09.12,0,.09,0,.09v0l0,0h.18l.19,0,.21,0,.09,0,0,0v.09l0,.08,0,.06,0,.06h.06l.05,0v0l0,.06,0,0,0,0,.06,0,.12,0,.09,0,.08,0,.07,0,.07,0,.14-.15.17-.08.06,0h0v0l0,.12v0Zm-7.5,1.61,0,.09-.05,0-.06-.13v-.09l0,0,0,.12Zm.45,0,0,.14-.06-.05,0-.07v-.07l.07,0Zm.2.33.11.08h0l.07.05v.06l0,0-.08,0-.06,0,0-.08-.06,0,0,0,0-.05Zm0,.84h0l-.1-.08-.07-.1.12,0,.11,0v.05l0,.09Zm3.59,2.34h0l-.05-.06v-.15l0,0h0l0,0v.22Zm-2.86.29-.06.1,0-.14.09-.08.05-.07,0-.05,0,.06,0,.11-.08.07Zm.3.13,0,0,0,0h0l.09-.1v0l0,.07Zm3.24,2.57v.15l0-.07v-.16l0,0,0,0Zm.09.47,0,0h0v.09l-.07.11,0,0h0v-.17l0-.09v-.06l.08,0,0,0Zm-.32.2v0l-.05.07,0,0v0l.05-.05h.07Zm.06.22h-.05l0-.07,0,0h.06v.12Zm.35.23h0v-.18l0,.08.08,0,0,0Zm-.4.2v.05l-.05-.05v-.16l0,.1,0,0v0Zm.44,0,0,.19,0,0h0l0-.11v0l0-.07.14,0,0,.06Zm-.31.25v0h0v-.09l0-.08,0-.1,0,0v.05l0,.12,0,.07,0,0Zm.3.48h-.06l0-.1Zm-.31,0,.08.16v0h0l0-.09-.06-.06h-.07l.06-.07h0l0,0Zm0,.95,0,.06h0l0-.09.07-.06h.07v0l-.05,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MN"
                                    d="M2137.7,122.54l-.09.2-.17.4-.15.33-.07.18-.06.15-.06.13V124l-.06.13-.13.16,0,.17v.28l-.13.09-.11.07,0,.26.06.1.08.1.1.08.08.07.08,0,.08-.11.14-.09h.08l.06,0h.12l.13,0h.1l.13,0,0,0,.11,0,.11.09.08.1.06,0,0,0,.06-.09.09-.09.12-.14.08-.11.07,0h.12l.06,0h.1l.08,0,.24,0,.07,0,.11.17.06.09.12,0,.06,0,.06,0,.06,0,0,.05,0,.08,0,0,.06.05,0,0,0,.05,0,0,0,0,.14.17.07,0,.1.09,0,.08v.09l0,.06.07.1,0,.07v.17l0,.08-.11.06,0,0h-.08l-.14,0h-.13l-.15,0-.13-.07-.06-.06-.11,0-.05,0-.06.07h-.13l-.16,0h-.09l-.14,0H2139l-.15.07-.09.11-.07,0h-.06l-.05,0-.06,0h-.1l0,0,0,0,0,.13v.06l0,0H2138l-.11,0h-.07l-.09.07-.06,0,0,0,0,.1-.07.07-.08.08-.09.18,0,.1v.12l0,.08-.08.06-.06,0-.1.06-.14.12-.1.11-.13,0-.09,0-.2,0h0l-.23,0-.16-.05h-.09l-.08,0,0,0v.06l0,.06-.06.09-.13.12-.1.08-.08.1-.05,0-.09,0,0,0-.11.09-.1.08-.06,0-.07,0h-.05l-.14,0h-.1l-.13,0-.32-.1-.1,0-.09-.12-.08-.06h-.28l-.07,0-.12,0-.14.12-.06.09-.06.1-.07.2,0,.13,0,.08-.07.11v.07l0,.06.06.06,0,.11.07.1.08.09.14.14,0,.07.05.08v.13l-.05,0-.1,0-.05.05-.07.08-.09.08h0l-.05,0-.24.1-.09,0-.08,0-.08.11-.07.07-.08.11,0,0-.08.1-.09.12-.06.06,0,0,0,.05-.1,0-.08,0-.13.06-.19.07-.14.07-.1.05-.14.07-.09,0h-.2l-.23,0h-.18l-.13,0h-.34l-.1,0-.24,0h-.05l-.42.06-.19,0h-.17l-.12,0-.07,0-.11,0-.06,0-.18.09-.42.18-.27.15,0,0-.19.11-.1,0-.08.09-.06.06-.06,0-.12-.06h-.08l-.25,0v-.27l-.18,0-.28.06-.27.05-.24-.13-.18-.1-.16-.08-.25-.06-.21-.05-.39-.08-.17-.07-.08-.1-.16-.21,0-.05-.07,0-.08,0h-.17l-.2,0-.3,0-.23,0-.4-.07h-.09l-.21.06-.27.08-.48-.06-.21,0-.43-.06-.49-.06-.48-.07-.34,0-.19,0-.22,0,0,0v-.13l0-.1-.12-.11-.08-.1-.16-.14-.05-.09v-.13l-.15-.36-.08-.24,0-.05,0-.08-.05,0-.11,0,0,0v-.08l0-.12,0-.08,0,0-.27,0-.17-.06-.15-.06-.2-.15-.12-.06-.15-.17-.22,0-.08-.06-.11-.14-.09-.09-.13,0-.2-.06-.35,0-.12,0-.19,0h-.15l-.23,0L2115,129h-.41l-.07,0-.06,0h-.12l-.08,0-.08-.06-.08,0H2114l0,0h0l0-.09-.09-.14v-.06l-.05-.08,0-.06v-.09l0-.18.08-.16.06,0,0,0,.06-.09,0-.07v-.09l-.05-.09,0-.13v-.07l0-.08.06-.19v0l0,0v-.21l-.07-.18,0-.09-.06,0-.08,0-.07-.13-.08-.15,0-.1,0-.06v-.11l0-.13,0-.07,0,0,0-.08v0l-.12,0-.08-.06,0-.08v-.06l0,0h-.06l0,.06-.08,0h0l0,0,0,0,0,0-.08-.13-.07,0h-.14l-.12.06h-.08l-.06,0-.07-.06,0-.06-.07,0-.15-.09-.09-.07v-.13l-.05-.1-.09,0-.1-.1-.14,0-.09,0-.07,0,0,0v0l0-.05,0,0v0l0,0-.08,0-.1,0,0-.06-.06-.07v-.05l.05,0,0,0,0-.05,0,0,0-.07v-.11h.11l.05,0,0,0,.08-.05,0-.06v-.12l.05-.1.14,0h.27l0,0,.06,0h.08l0,0V123h0l0,0,0,0h0l.1,0,.06,0,0-.09,0-.05.05,0h.09l.07-.07.1,0,.07,0v0l0-.11v-.11l.09-.07h.13l.09,0,0-.12,0,0,0,0,.12,0,.08-.05,0,0,.14-.07h.12l.06,0,0-.07.07,0,.07-.06.1-.08h0l.16,0,.06,0h.1l0-.08.07-.06.07,0,0-.06.06-.07.09,0h.36l.07-.11v0l0-.06.05,0,.07.09.05.06.09,0,0,.06h0l.05,0,0-.1.07,0,.08,0,0,0v0l0,.09.09.07h.11l.05,0h.1l.11,0,.11,0h.42l.16,0,0,.07,0,.15,0,.15V122l0,.06,0,0,0,0,.06.06,0,.1h.06l0,0h.2l.07,0,0,.07.06,0h.26l.05,0h.07l0,0,.13,0,.08-.07h.06l0,0,0,0,.05,0,0,0h0l.05,0,.1,0,.08.07h.06l.08,0h0l0,0,.05,0,0,0,.07,0,.25,0,.06.07,0,0,0,.06.07,0h.14l0,0,.11-.1.05-.09.06,0,.06,0h.12l.08-.07.06,0,.09-.09,0,0,0-.11,0-.07,0-.1,0-.18,0-.09v-.07l-.06,0-.07,0-.06,0-.05-.06,0-.08,0-.1v-.12l0,0-.06-.08,0-.06v-.1l.06-.17v-.17l0-.1,0,0,0-.11.06-.05h.08l0,0,0-.11,0-.08,0-.06,0-.06.27-.13.11-.15,0-.08,0-.17,0-.07.06,0,.07.1h0l.08.06.22.11.11,0h.07l.1,0,.07.06.12.11.1,0h.4l.07,0,.16.08.18.09.16.07.13.06.08.06.07,0,.07,0h.1l.23.07.15,0,.12,0,0,0v.31l0,.08v.11l0,.11,0,.1,0,.06,0,0,0,.07v.08l0,0v.07l0,.06h.12l.07.1.13.1.07,0,.09,0,.17,0h.11l.06,0,.07.09.11,0,.07,0,.12,0,.09,0,.07,0h0l.09,0h.11l.1,0,.07-.07.09-.08.1-.05h.12l.08,0,.27-.06h.11l.08-.06.08,0,.11,0,.14,0,.14,0h.17l.11.05.08,0,.13,0,.14,0h.19l.12,0,.13.09.08.08.09.16.1.07.08.07h.37l.14,0,.12,0,0,0v.33l0,0h0l0,.08.06,0,.11.06.18.18.1.08.09,0,.11,0h.46l.2.05.07,0,.2,0,.23,0,.19,0,.11-.07h.1l.09,0,.1.07h.07l.11,0,.35-.19.12-.07h.08l.08,0,.06,0,.15,0h.09l.09,0h.13l.28-.13.11,0,.18,0,.1,0,.1-.07.13-.06,0-.11.06-.15.15-.11.11-.1.12-.09.15-.08.13,0,.18-.15.14-.08.07,0,.08,0,.15,0h.12l.06,0,.13.07.11.06.09.12.16.15.08.06.06,0h.27l.07,0,.12-.07.19-.08h.08l.12,0,.19.08.07.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MP"
                                    d="M2164.47,157.92l0,0,0,0v-.05h.06Zm.06.66,0,0,.05-.09,0,0,0,0-.06.06Zm-.06,1.67h-.07v0h.06l0,0v0Zm0,1.15v0h-.06l0-.09.07,0h0l0,0v.05l0,0Zm-.08.15,0,0,0-.07v0l0,0h0l0,.08Zm-.37.77,0,.05h0l0,0v0l.07,0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MQ"
                                    d="M1974,162v.06h0l0,0h-.15l0,0v0l.07-.07-.09,0,0,0-.07-.14v0l0,0h0l.1.05.06.07h0v0l0,0,0,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MR"
                                    d="M2025.63,151.76H2024l0,.23,0,.25,0,.25,0,.25,0,.25,0,.25,0,.25,0,.24,0,.25,0,.25,0,.24,0,.25,0,.25,0,.24,0,.25,0,.24,0,.25,0,.24,0,.24,0,.25,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.24,0,.23.11.12.14.15,0,.22,0,.25,0,.28h-3.49l0,0v-.14h0l0,0,0,0v.11l-.12,0-.16,0-.18,0h-.23l-.06,0-.14,0h-.26l0,0-.07.11-.08.12h0l-.06-.07-.15-.13-.18-.17-.08-.08h0l-.08.06-.08.06-.07.08,0,.08,0,.09v.11l0,.13-.06.1-.07.08-.06,0,0,0-.16-.07h0l-.1-.07-.05-.08-.08-.06-.1,0-.07,0,0-.05,0,0,0,0v-.09l-.06-.11-.06-.05H2018l0,0v0l0,0h-.06l0-.08,0-.15,0-.11,0-.08,0,0h0v0h-.05l-.06,0h-.06l0,0h0l-.05,0h-.06l-.06-.05,0,0v-.05l-.1-.11-.2-.15-.21-.07h-.37l0,0h0l0,0h0l0,0,0,0v0l-.09,0h-.15l-.13,0-.09.05-.14,0h-.28l0,0h0l-.06,0-.06.07,0,.14,0,.08,0,0,0,.1,0,.17,0,.08v-.43l.05-.16,0-.14.11-.31.13-.26.11-.34,0-.33,0-.32,0-.29-.06-.19-.06-.27-.09-.15-.15-.13,0-.07,0,0,.09,0,.07-.1-.13,0,.15-.31,0-.2v-.14l0-.09-.11-.18-.09-.23,0,0,0,0v.06l0,0-.06,0-.1-.17-.13-.28,0,0,0,0,0,0-.05.23,0-.09,0-.11,0-.13,0-.19h3.64V154.2l0-.13v-.13l0-.06.09-.12.12-.09.14-.1.11-.08.06,0,.17,0,.14-.06.13,0,.06,0v-2.55h3.08v-1.32l.17.11.17.11.18.12.17.11.17.12.18.11.17.11.17.12.18.11.17.11.17.12.18.11.17.11.17.11.18.12.17.11.15.09.22.15.21.15.2.14ZM2015,157l-.06.1,0,0V157l.06-.09,0,0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MS"
                                    d="M1972.76,159.87v0l-.07,0v0l0-.06h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MT"
                                    d="M2043.28,140l0,0-.06,0v0l.08,0h0l0,0Zm.24.2,0,0h-.08l-.08-.06V140l.09,0,.08.08,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MU"
                                    d="M2083.25,194.61l-.11,0H2083l-.05,0v0l0,0v-.07l0-.11,0,0,.06,0,0-.09,0-.05h.08l.07.11.05.11v.11l0,0,0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MV"
                                    d="M2097.88,171.61h0l0,0v0l0,0h0v.06Zm-.09.86h0v0l0,0h0l0,0v0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MW"
                                    d="M2062.32,186.11h-.27l0,0v.06l-.05.14,0,.05-.05.09-.08.13,0,0v0l.05.18,0,.18v.07l0,.24,0,.18v.1l0,.13,0,.07.05.05.17,0,.06,0,.09.09.22.24.12.15.1.14.19.25.14.19,0,.18,0,0-.05.14,0,.21,0,.15V190l0,.26,0,.1,0,0-.11,0-.22,0,0,0,0,.05,0,.12-.06.13v0h0l0,.06,0,.17v.27l0,0-.06,0h-.1l0,0,0-.05,0,0v-.07l0-.06h-.06l-.08-.06-.16-.19-.14-.12-.07-.11-.08-.05,0,0,0-.05v-.11l0-.05-.08-.09,0,0v-.06l0-.05.07-.07.05-.13,0-.08.1-.18v-.35l0-.18V189l-.13-.16,0,0-.12,0-.1,0-.05,0h-.07l-.19,0-.06,0,0,0h0l-.12-.12-.1-.14-.14-.23,0,0,0-.07,0,0-.05,0,0,0h0v0l0-.08-.05-.07,0,0,0,0,0,0,0,0v0l0,0-.1,0v0l.08,0,.06,0,0,0,0-.09,0-.1,0,0v-.13l0-.09v-.08l0,0,0-.05,0-.1.05-.07.2-.06.14-.07,0,0,.05-.06,0,0,0,0h-.11l0,0-.08-.18,0-.21v-.19l0-.07,0,0,0,0V186l0,0,.08-.14,0-.08,0-.07,0-.1,0-.06v0l0,0,0,0h.12l.17-.18v0l0-.06L2061,185l0,0v-.11l0,0-.1-.07-.08-.08,0-.08v-.08l0,0-.05-.05,0-.07v-.05l0,0h0l0,0h-.07v-.1l0,0,0,0v0h0l.15.1h.08l.1,0,.08.08h.32l.08,0h.1v-.12l0,0,.09,0,.21.18v0l.14.18,0,.07v0l0,.16v.26l0,.1,0,.08v.15l0,.11v.08l0,.05,0,0,0,.06,0,.07,0,0h.07l0,0,0,.06,0,.08v0Zm-.29.41,0,0h0l0,0v0h.07v0Zm.07.09h0l0,0v-.09h.07v.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MX"
                                    d="M1940.48,150.77V151l-.06.17-.18.36-.08.22-.15.63,0,.41,0,.19v0l0,0,0,.42,0,.37v.05l-.06.11,0,.15v.12l.05.22,0,.18.17.29.09.1.11.09,0,.05,0,.13,0,.06,0,.1,0-.08v-.11l0-.06v0l-.06-.05-.13-.14-.15-.26.11.41,0,.07,0,0,.05,0v.08l.14.29.15.29V156l.06.11.39.41.23.31.08.3,0,.09,0,.13.15.14,0,.09.08,0,.07.15.12.09h0l-.11,0v0l.09.07.18.06h0l-.07,0-.06-.05h0l.12.05.35,0,.16.12.2.06.1.16.13.17h.14l.19,0,.29-.11.1-.05.2-.07h.29l.1,0,.22-.05.11,0,0-.05v0l.21-.05h.35l.12,0,.09.08v0l-.06,0,0,0,.1,0,.19,0h.06l.08-.08.16-.08V158l0-.05h0v0l0-.07v0l-.09.06h0v0l0,0,.28-.15.07-.06.09-.05.2-.19,0-.37,0-.06.14-.12v-.63l0-.15,0,0,.08-.25.15-.11.28-.13.06,0,.87-.14.12,0,.15-.09.11,0h.27v0h.15l.22.06h.07l.2.06.21,0h0l0,0,0,0,0,0h0l0,0h0l-.09,0,0,0h.14l.08,0,.09,0,.11.13.08,0v.22l0,.05,0,.14,0,.12,0,.1-.13.15-.14.12-.19.27,0,.13v.1l0,.1v0l0,0h0l-.07,0-.1.14v0l0,0,.06,0h.15v.08l0,.06,0,0h0l-.06,0,0,0v.09h0l.06-.07h0v0l-.09.23,0,.24-.08.14,0,.21,0,.08,0,.09h0l-.07-.16-.07,0,0,0,.05-.2,0-.1h0l0,.06-.07.05V158l-.08.12,0,0h-.15l-.06,0,0,.15-.15.21-.06.1-.05,0h0l0,0-.1-.06-.08,0,0,.06v.09h-1.68v.55h-.39l0,0,.07,0,.08.08.11.13.12.1.15.08.1.08,0,.07,0,.06v.06l0,0,.1,0,0,0v0l0,.08v.18h-1.19l-.08.13-.12.22-.12.19-.09.17,0,0v0l.12.15,0,.05,0,0,0,0v.06l0,.08v.12l0,.06,0,.05,0,0,0,0-.24-.25-.26-.29-.1-.09-.1-.07-.13-.13-.34-.29-.18-.13-.17-.16-.15-.08-.15-.06-.06,0-.06,0h0l0,.06,0,0,.06,0h.05l0,0,.16.08,0,0-.43-.16-.18,0,0,0,.09-.09,0,0h0l-.09.06h0v-.07l-.06-.06h0l0,0-.08.07v0l.16,0,.06,0h-.15l-.17,0-.31.19-.28.08-.41.19h-.18l-.09,0-.28-.08-.34-.17-.53,0-.35-.23-.36-.1-.22-.22h-.13l-.09,0-.32-.08-.32-.05-.3-.2-.2-.06-.18-.07-.38-.13-.14-.08-.14-.11-.22-.11-.09-.1-.11,0-.15-.18-.07-.08-.07,0-.07,0-.2,0-.31-.08-.14,0-.29-.12-.39-.14-.13-.15-.11-.14-.2-.19-.12-.08-.21-.1-.12-.08-.19-.06-.31-.15-.09-.13-.06-.12L1933,157l-.18-.26,0-.1,0-.14,0-.09-.05-.07,0-.05.09-.06h.15l.11-.07v-.09l-.07-.08-.09,0h-.07v0l0,0,.06-.08.08-.1.06-.09v-.26l0-.1-.21-.13,0,0-.07-.15-.11-.17v-.33l-.13-.3-.14-.15-.07,0-.2-.23-.15-.14-.16-.25-.15-.16-.19-.27-.13-.14-.63-.46h0l.19.12h0v-.06l0-.06,0,0-.05,0-.07,0,0,0h-.1l-.12-.08-.06-.08V152l-.18-.19-.07-.11h0l0,0h.15l0,0,0,0-.26-.11-.09-.07-.21-.12,0,0,0-.11h0l0,0-.13,0,0,0v0l.08,0,.09-.11v0l0,0-.07,0-.07,0-.1,0-.06,0,0,0-.08-.1,0-.31.06-.11.08-.1.06-.07,0,.05h0l0-.06-.06,0,0-.05v0l0-.08-.19-.18h-.25l-.07-.06,0-.12,0-.1v-.1l-.31-.09-.09-.07-.09-.09,0-.08,0-.05,0-.1,0-.11,0-.15.05-.07-.21-.06h-.09l-.06,0-.06,0-.13,0-.15-.15-.17-.28-.19-.09-.06-.1-.08-.09-.07-.11v0l0,0-.1-.08-.11-.13,0-.1,0-.16-.07-.06-.08,0v-.12l0-.08-.14-.2-.08-.15,0-.05,0-.08,0-.15-.06-.18-.11-.22-.1-.15,0-.16,0-.15,0-.1v0l0,0,0,0v-.1l0,0-.09,0,0,0-.23,0-.13-.06V145l-.06-.06-.06,0-.17-.07,0,0,0,.07h-.14l-.1-.05-.27-.2,0,0h-.08l0,0-.17-.1,0,.06.05.05,0,.17,0,.11,0,.41,0,.09.08.13,0,.2,0,.16,0,.12v.28l0,.09.07.14.14.14,0,.07.18.1.11.13.22.18.06.08.2.27v.09l0,.1.11,0,0,.08v.06h.06l.05,0,.1.3.06,0,.07,0,.08,0v.14l.07.09v.12l0,.1v.1l0,.08.17.17.21.14,0,.18.09.17.08,0,.09.07v.11l.12.13,0,.17.1.11h0l0,0L1927,150l0-.07v-.11l0,0,.21.18,0,.13.07.08v.1l0,.06v.08l.07.15v.2l0,.14.13.22.1.05,0,.11.11.28.13.15.06.13V152l0,.11v.09l.07.25.1.12.12,0h0v0l0,0,0,0,0-.06,0-.06v-.05l0,0h0l.23.17,0,.07.08.08.08.09,0,.08.06.06,0,.14.16.06.08.12v.08l0,.19,0,0-.12.08-.09.1-.09.06-.09,0h-.08l-.07-.12-.09-.33-.06-.07,0-.11-.07-.08-.24-.14-.13-.14-.12-.09-.13-.14-.35-.22-.15-.12-.1-.11H1927v-.09l0,0-.21-.18,0-.09v-.11l0-.29,0-.16v-.09h0l0,0V151l-.05-.15-.19-.3-.13-.06-.13-.05-.33-.27-.09-.14,0-.08v-.15l0,.09-.06.07h-.14l-.16.08-.1-.08,0-.08-.08-.1h-.14l-.1-.12-.09,0h-.12l-.1-.06,0-.07,0-.1,0,0-.16-.12-.13-.12L1924,149l0-.07v0h.2l.23.05h.11l.07,0,.07,0v.1l.06.06.09.05h.06l-.06,0,0-.11v-.09h-.09v0l.08-.08.08-.22,0-.21-.09-.19-.15-.13-.32-.38-.2-.2-.06-.07,0,0-.16,0-.13-.11-.24-.15-.1-.09-.07-.19,0,0,0-.13,0-.24,0-.06-.12-.05,0-.16v-.15l0-.11-.22-.18v-.16l0-.09-.12-.17-.14-.14,0-.08v-.14l0,0h.06l0,0v-.1l-.21-.16-.06-.22-.11-.12,0,0-.06-.2.27,0,.26,0,.26,0,.27,0,.26,0,.27,0,.26,0,.26,0h.11l-.06.16,0,.06.43.16.44.17.44.16.44.16.43.16.44.16.44.15.44.16h2.6v-.49h1.63l.09.09.08.15.1.1.11.06.2.16.27.28.22.19.17.09.11.08,0,.07.08.14.14.33v.16l.06.14.11.19.09.11.08,0,.09.07.1.1.11.06.13,0,.17.08.22.15.15.07h.09l.07,0,.06-.1.06-.06.06,0,0,0,0-.06,0-.13.09-.22.11-.11.12,0,.09,0,0-.06h.07l.09,0,.16,0,.22,0h.13l0,0h0v0h.1l.06,0,.07.11.24.19h0l0,.06.09.09.15.14.09.12,0,.1.08.16.14.22.06.11v.08l0,.1.06.09.1.08.11.13.1.18.12.15.15.09.08.09,0,.09v.07l0,.06v.06l0,.05v.18h0v0l.13.16.07.12,0,.21h0l.06.12.09.05.13,0,.1,0,.06.06.09,0,.1,0,.1,0,.1.07.18,0,.26,0,.19.06.14.1.06,0h0v0l.06,0,.12,0Zm-16.18-6h0l-.06,0v-.05h0l0,0,0,0Zm1.42,2.83v0l-.09-.07-.22-.22-.07-.11,0,0V147h.07l.09.08,0,.07v.09l.15,0,0,.18,0,.09Zm.88,0-.07.24h-.07l-.15-.08,0,0,.06-.28,0,0,.13,0,0,0v.09l0,.13Zm-5.57.06,0,0-.11-.22v0l0,0h0v.05l0,0,0,.05v.1Zm2.83.91v0l-.16-.07.09-.12,0-.13,0,0,0,0,.05.17,0,.1Zm3.75,2.11v0h0l0,0-.06.15h0l0-.21,0,0h0v.05Zm-.88,1.5h0l-.08-.12V152l0,0-.08,0,.07-.16.06-.34,0,.06-.06.35v0l0,0,0,.07v.08l0,.07v0Zm1.37-.46,0,.11-.05,0-.06-.06,0-.08v0h0l.09.05,0,0Zm-1,.61v0l-.28-.19h.14Zm1.75.25h0l0-.05,0-.13v0l.09.17v0Zm3,2.53,0,.08-.07,0,0-.06v-.08h0l0,0v0Zm18.25.36,0,.05h0l0,0v0h0v0Zm-.2.92-.05,0,0-.11,0-.1.05-.06h.09l.06,0v0l0,.08-.12.16Zm-22.12,1.52,0,0-.08-.06,0-.05,0,0,0,.06,0,.06Zm17.74.06-.1,0,0,0,.21-.1h.05l-.11.05,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MY"
                                    d="M2138.12,168.84l0,0,0-.06v-.07l.08-.07.1,0,0,.06v.06l0,0Zm.4,2.76h0l-.08,0-.16-.09-.17,0h-.23l-.14,0-.05,0h0l0,0h0l-.09.06,0,0,0,0h-.17l-.1.05-.12-.05h0l0,0-.05.07-.1.05,0,.11,0,.09,0,0v.28l0,.12v.05l0,.08v0l0,.12v.07l0,.09-.07,0-.07,0-.06,0,0,0-.06.08,0,.05V173l.05,0,0,0v0l0,0-.06.05-.11.09-.12.07-.05,0,0,0v0l0,.1,0,0v0l0,0v0l0,0h-.05v0l0,.12,0,.07-.06.09,0,0,0,0-.12,0-.1,0-.14,0h-.12l-.09,0-.06,0-.07.07-.07,0,0,0-.1-.07h-.06l-.09,0-.21-.07-.05,0h-.06l0,0V174l0,0h-.43l-.13,0-.08,0-.06,0,0,.09,0,.09-.05.09-.14,0-.11.09H2133l-.06,0h-.06l-.18-.05h-.17l-.1,0h0l-.3.12-.1,0,0,0-.06-.05-.08,0-.18-.18-.07,0,0-.05-.05-.05-.06,0-.05,0-.08-.08-.07-.08,0-.15-.06,0,0,0v-.05l.08-.12.06.13,0,0,.13.08.11.05h.29l.05,0,0,0,.26.14.09,0h.15l.15.11h.11l-.09-.05-.06,0,0-.07,0-.07.06,0,0,0v-.15l0-.08.05-.07v-.07l0-.05v-.17l0-.05.05,0,.05,0h.09V173l.07-.1.1-.06.1,0,.36-.05.57-.15.17-.05.06,0,.05,0,.09-.13.17-.2.11-.16.25-.24.19-.22,0,0,0-.13v-.11l0,0h.05l0,0,.07,0,0,0,0,.06,0,.06v0l0,0h.09l0,.05.06.08.05.06,0,0h0l.06-.06.05-.06,0-.09,0,0,0-.06v0l0,0,0,0v-.09l0-.1v-.05l0,0,.07,0,.07-.05.08,0v.19l0,.1,0,.17.06,0h.14v0l0-.07v-.16l0-.11-.06-.1,0,0,.22,0,.05,0,.08-.07,0,0,0-.09-.1-.06,0-.07v-.08l.13-.14,0,0,0,.05h.16l.07-.07,0-.1.13-.15.05-.11,0-.12.32-.36,0-.05.2-.37h0l.06,0v.16l0,.08,0,.08h0l.09,0,.1-.13,0-.11.05-.05.09,0,0,0v.12l0,.1.08.06.11,0,.1,0,0,0,0,0,0,.07v.07l-.07.07,0,.12v.06l0,.06-.11.05.29-.05.08,0,.1-.07,0,.06.05.11,0,0-.13,0v0l0,.06h.05l.11,0,.09-.06h.1l.09,0,.06,0,0,.05,0,.08.11,0,.23.12h.2l0,0,0,0v.11l0,0,0,0-.08.05-.21.07-.22.06h-.11l-.16,0h-.05l-.06,0-.07.14.13.15.22.15,0,0v0l0,0h-.05l-.12,0h-.13l-.1,0-.1,0h-.1l-.15-.07h0l0,0,0,.1,0,0Zm-14.27-1.9.16,0,.06,0,.18.29.24.2.1.07.07,0,.11.11.09.13.2.38,0,.17v.25l0,.38-.06.19v.09l.08.14,0,.13,0,.11v.3l.05.09,0,.06.26.17,0,.07.12.23.23.49.07.22v.06l0,0-.07,0,0-.05,0,0v0l0,0L2126,174l0,0v.16h-.07l-.09,0-.11,0-.13.11h-.07l-.05-.09,0-.06,0-.05-.43-.22-.15-.06-.17-.17-.37-.19-.24-.19-.1-.11-.24-.1-.1-.12-.05,0,0-.05,0-.11,0-.12,0-.1-.17-.2-.08-.14-.16-.14-.07-.08-.06-.1,0,0,0,0,0-.07-.09-.12,0-.13v-.26l-.13-.36-.11-.5,0-.17,0-.19-.08-.19-.09-.13,0-.11,0,0,0-.14v0h.08l.08.12.2.08.06,0,.08,0,0,0,0,0,0,.09.06.08.1,0,0,0h0l0,.07V170l-.07.1v.07l0,.05,0,0,0,0h0l0,0,0-.06,0,0,.14-.06.14-.05h0l0,0,0,.08,0,0h.1l.08,0,0-.08,0-.06.11-.11v-.08l0-.05Zm-2.08-.21.07.1,0,0v0l0,0,0,0h0l0-.07,0,0v0h.09l.07,0,0,0Zm.41,1.08,0,0-.07,0v-.15l0,0,.06,0,0,0,0,.11Zm16.23,1-.13,0h-.09l0,0v0h.09Zm-15.28,1.1-.05,0v-.06l0,0h0Zm2.68.23h-.07l0,0,0-.08h0l0,.09v0Zm6.61.29,0,0-.05,0v-.27l0,0h0l0,.06v.26Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="MZ"
                                    d="M2060.41,201h-.49l-.14,0h-.08v-.33l0-.07,0-.1v-.07l0-.07v-.2l-.08,0h0l0-.08v-.11l.06-.14v-1.19l0-.08v0l0-.1-.05-.19-.05-.15-.07-.1,0,0,0-.07-.07-.12-.05-.07,0-.06v-.14l-.06-.27,0-.19-.07-.2,0-.14v-.08l.13-.1.13-.14.15-.17.14-.15.12-.13.16-.18.17-.18,0,0,0,0-.07-.16.11-.18v-.23l0-.05,0,0,.13-.1.1-.15.09-.14.11-.22V194l0-.08-.07-.12-.06-.11-.05-.17.05-.14,0-.09v0l0-.05-.06,0,0,0,0-.06V193l0,0,.12-.06,0,0,0,0v-.06l0-.13.05-.13V192l0-.31v-.18l-.08-.2v-.15l.06-.11V191h-.13l-.06,0-.1-.08-.17-.07-.19-.07-.28,0-.23-.2-.18,0-.06,0-.18-.12-.27,0h-.46l0,0v-.32l0-.13,0-.15,0,0-.05-.1,0-.12v-.07l.19-.08.09,0,.12,0,.23-.06.19-.06.19,0,.19-.06.08,0,.1,0,.23-.07.07,0,.13,0,.07,0,.26-.09.29-.1.11,0,.19-.07,0,0,.14.23.1.14.13.12h0l0,0,.06,0,.19,0h.08l0,0,.1,0,.12,0,0,0,.12.16v.13l0,.18v.35l-.1.18,0,.08-.05.13-.07.07,0,.05v.06l0,0,.08.09,0,.05v.11l0,.05,0,0,.08.05.08.1.13.13.16.19.08.06h.06l0,.06,0,.07,0,0,0,.05,0,0h.16l0,0v-.27l0-.17,0-.06h0v0l.06-.13,0-.12,0-.05,0,0,.23,0,.1,0,0,0,0-.1,0-.26v-.25l0-.15,0-.22.05-.13,0,0,0-.18-.14-.19-.19-.25-.1-.14-.12-.15-.21-.24-.1-.09-.05,0-.18,0,0-.05-.05-.07,0-.13v-.11l0-.17,0-.24,0-.07,0-.18-.05-.18v0l0,0,.08-.13.06-.09,0-.05.05-.14v-.06l0,0h.83l.07,0,.06,0,.08-.08h.11l.16.08.09.07v.06l.11,0h.19l.15,0,.09-.07.09,0h.1l.07,0,0,0,.1,0,.14,0,.16,0,.17-.09.09-.09,0-.1,0-.06,0,0h.23l.13,0,.16.09.11-.06.17-.11.18-.06h.17l.14,0,.11-.08.11,0,.12,0,.12,0,.15-.09.17-.12.17-.13.1-.08,0,.09.09.09-.05.05-.07,0,.11.06-.08.09v.07l0,0,0,0-.05.1-.07.09v.06l.05.11,0,.19.06.18,0,.09,0,.06,0,.1v.19l0,.07,0,.09.06,0,0,.1v.18l-.1.07v.08h.12v.22l0,.07,0,.07,0,.09V188l0,.21v.3l0,0,.07,0v.07l-.06.09v.14l.08-.11h0l0,.05v.06l0,0V189l0,.08v.07l-.06.05-.07.08v.13l0,0,0,0,0,.07v.07l-.09.2-.22.28-.1.09-.09.11v.08l-.11.16-.11,0-.07,0,0,.14-.07,0-.13.1-.35.21-.06.05-.09.12-.12,0-.06,0h-.2l0,0-.24.09-.22.07-.05,0,0,0-.2.07-.3.17-.25.17-.17.16-.05,0-.06.06,0,.08v0l-.14.17-.2.21,0,.05-.08.12v.07l-.07,0-.06-.07,0,.14h0l-.06,0-.13.07-.12.08-.18.16-.27.32-.38.31h-.09l-.12-.11H2062l.06.06,0,.05v.27l0,.3v.07l.06.09.1.1.1.14.12.38v.19l.13.26v.11l.05.27v.35l.06.06,0-.05v-.09l0-.13,0-.06h0v.07l0,.06v.12l0,.28v.12l.07.19-.08.22-.11.52v.09l0,0h.06l0-.06h0v0l0,.24-.05.11-.17.26-.09.11-.15.11-.36.17-.71.25-.28.12-.17.08-.36.23-.15.16-.07.17-.06.09-.06.1.05.09.06.07.06,0,0,0,0,0,0-.14,0,0h0l0,.18,0,.59v0Zm1.69-14.38,0,0v-.06h-.07v.09l0,0Zm-.07-.09v0H2062v0l0,0h0l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NA"
                                    d="M2051.65,191.85l.19,0,.19,0,.22,0,.18,0h0l.42,0,.19,0,.06,0,.08.06.16.15h0l-.29,0-.1,0-.24.18-.06,0-.05,0h0l-.11,0-.1.06-.12.07-.1.07,0,0-.15.15-.05,0h-.06l0-.07-.09-.15-.15-.19,0,0h-.14l-.32.06-.27,0-.42.08-.44.07-.28,0h-.23v3.59h-.91v6.55h-.1l-.19.06-.12.07,0,.09-.07.06-.09,0,0,0,0,.08,0,.05-.08,0h-.12l-.17-.06-.22,0-.27,0-.19,0-.12-.06-.12,0h-.13l-.08,0-.16-.05,0-.08v-.06l-.05-.07v0l0,0v-.06l0-.09,0,0H2046l0,0,0-.07,0,0-.09-.06-.11,0,0,.06,0,.1,0,.05,0,.08v.05l0,.06,0,0,0,0,0,0-.13.09,0,0-.1-.08-.31-.32-.1-.08-.16-.2-.35-.6,0-.11-.07-.29-.07-.21v-.13l0-.06,0-.1,0-.08-.11-.11,0-.37-.08-.24,0-.19,0-.18v-.12l0-.21-.07-.25-.13-.24-.11-.35,0-.15v-.41l0-.17v-.19l0-.2v-.12l0-.08,0,0h0l0-.12v-.1l-.06-.25-.13-.26-.32-.42-.08-.15,0-.14-.36-.54-.16-.39-.1-.33-.12-.15-.54-1.07-.12-.17-.21-.21,0-.07-.09-.19-.16-.26,0-.24v-.27l0-.21.15,0,.1-.06h.09l.1,0h.3l.1-.05.12,0,.07,0,.1-.05.12,0h.08l.09,0,.11,0,.07,0,.08.09.12.09.09.06.11.07,0,0,0,0h4.1l0,0h0l.09.13.12.12.1.07.12,0h.39l.24,0,.26,0,.26,0,.18,0,.11.06.1,0,.11,0h.15l.19-.05h.17l.07,0h0l.28,0,.23,0,.33-.07.28,0,.41-.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NC"
                                    d="M2177.61,193.47l0,0v-.15l0-.06,0,.12,0,.07Zm3.92.91.1.06.11,0,.14.09.36.3.12.06.08,0,0,.05.05.07.07.05,0,0v.06l0,0,.13.1.07.08.11,0,0,.06.06,0,.06.05.1,0,.22.16.18.14.09.09.09.08.12.06.11.07.06.17,0,.06-.07,0H2184l0,0-.19-.11,0,0h-.05l0,0,0,0-.12,0-.1-.07,0,0,0-.06,0,0-.15-.05-.1,0-.07-.07-.12-.06-.17-.11-.1,0-.08-.05-.21-.2-.08,0-.06-.08-.19-.21-.08-.08-.1-.08-.08-.09,0-.1-.13-.15,0-.06v-.07l0,0,0,0,0,0v-.09l.14.1Zm2.16.44h-.05l.06-.09v-.05l0-.11v0h0l0,0-.05,0v.1h0l0,.07,0,0Zm.79.46h-.05l-.07-.07-.13,0-.06-.06,0-.08.07,0,.07-.09-.05,0h-.08v0l.13,0,.06,0,0,0V195l.06.05.06.11v0l0,.08Zm.56.26,0,0h.08l0,.16-.11,0h0l0,0-.06,0v-.06l-.06-.13h.1l.06,0v.07l0,0Zm-.43,1.18,0,0h-.06l0,0,0-.08.07,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NE"
                                    d="M2043.9,153.76l.1.58.07.49v.39l0,.06.08.05.29.45-.07.08,0,.14.07.06.24.27,0,0v0l-.17.31,0,.08,0,.4,0,.28,0,.38,0,.46,0,.39,0,.51,0,.47-.24.27-.43.46-.35.38-.17.25-.34.5-.16.31-.12.17-.06.07.06.23.09.41h-.17l-.09,0-.12.09-.13,0-.17.08-.1.07-.1.05-.13.12,0,.1h-.32l-.12-.1-.27-.1-.18,0h-.08l-.42,0-.45,0-.22.05h0l-.12.06-.11.07-.29.3h-.38l-.23,0-.19-.05-.27-.14-.33-.22-.13,0-.12,0h0l-.39.21h-.08l-.09,0-.06.06-.05,0h-.11l-.06,0-.06-.06-.17-.24,0,0-.07-.07-.12-.12-.08-.05h-.1l-.32-.1-.32-.1h-.07l0,0-.11.07h-.39l-.15,0-.09,0-.13.05-.17.14,0,0,0,0-.06.38,0,.11-.09.16-.16.14-.12.09v.52l0,0v.09l0,0v.06l0,0-.06-.09-.08-.06-.08,0-.06,0,0-.06-.1-.12-.25-.23h-.07l-.07,0,0,0h-.07l-.12,0-.1,0v0l0,.17,0,.1,0,0-.13-.18-.1-.13,0,0V164l0,0h.08l0,0v-.1l0-.09,0-.07h-.13l-.11.07,0,0h-.21l0,0-.18-.15-.2-.16-.08,0,0,0v-.3l.08,0h.09l0,0-.07-.05-.1-.06,0-.08,0,0,0,0-.05,0,0,0,0,0h-.06l-.06,0-.09-.13-.08-.12,0-.1,0-.06,0-.1,0,0-.1-.1-.08-.1,0-.15,0-.12v-.17l.06,0h.13l.26,0,.21,0h0l.15-.14.16-.13.25,0h1.32v-.06l0,0h0l.21,0,.2,0,0-.12.17-.16.1,0,0,0,0-.05,0-.08v-.06l0,0,0-.08,0-.15.1-.16.06-.21v-.37l0,0v-2.07l.2,0,.21,0,.3-.06.33-.07.36-.07.08-.05.28-.24.12-.11.24-.22.19-.18.24-.21.25-.22.2-.18.32-.2.48-.3.47-.3.48-.3.48-.3.48-.3.47-.31.48-.3.48-.31.48.12.46.11.46.11.1.06.25.22.31.27h0l.3-.16.39-.22Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NF"
                                    d="M2185,203.24h.05v0h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NG"
                                    d="M2042.63,162.75l.15.2.15.22.12.17.09.44v.15l0,.06.07,0h.13l.09,0,.06.07v0l0,.05v.3l0,.1,0,.13v.09l-.06,0-.08,0-.19.13,0,0h-.08l-.07,0-.09.07-.17.25-.15.25-.06.2-.06.2-.13.13,0,.07v.29l0,.08,0,0-.14,0-.08.05,0,.12,0,.12,0,.14,0,.12,0,.07,0,.06-.07.08-.06,0-.17,0-.08.17-.08.12v.06l-.07.26-.12.2v.12l-.15.18,0,.05,0,.07,0,.06,0,.06v0l-.07.06-.12.09-.07.06v.18l0,0,0,.05-.07.06-.07,0-.08,0h-.08l0,0,0,0,0-.18,0,0,0,0-.1-.1-.1-.1-.13-.07h0l0,0,0,.09,0,0h-.25l0,0,0,0,0,0-.1.07-.15.11,0,0,0,0,0,.1-.06.11-.08.06-.07,0,0,0-.06,0-.13.12-.16.16-.06.09-.06.12,0,.14,0,.16,0,.24-.08.14-.07.11,0,.09,0,.07h0l0,0-.08,0,0-.07h0l-.09-.09v0l.08.23,0,.09h-.24l-.21,0h-.15l-.07,0,0-.09h0v0l0,0h-.16l-.07-.06-.06-.07-.06,0v0l.07.06v.1l-.13.11h-.08l0,0,0-.08v-.11l0-.07h0l0,.06v.17l.06.09-.1,0h-.11v0l0-.08,0,0,0,.13H2036l-.15,0h0v0l0,0v-.06l-.06,0v.08l0,0-.09,0-.1,0-.06,0-.1-.06-.19-.17,0-.08,0-.1,0-.1-.06-.17h0l0,0,0,0-.08,0v-.15l.07,0,.06,0,0,0v0l-.15.07-.14-.07,0-.05v0h.17l.06,0h-.1l0,0v-.05h0l0,.05-.1,0,0,0v-.11l0,0-.16-.21-.21-.18-.19-.12-.28-.06h-.62l0,0,0,0,.19-.1h0l-.2.06h-.06l-.09.12h-.58v-.05l0-.16v-.06l0-.05,0,0,0-.08V169l0,0v-.37l0,0v0l0-.06,0-.07v-.2l0,0,0-.16v-.3l0-.06v-.32l0-.25h.12l.13,0,.06-.1,0-.12v-.12l0,0,.06-.07.09-.09v-.1l0,0,0,0h.07l.07-.05.05-.09,0-.15-.07-.1v0l0-.06,0,0,0,0,.07,0h0v0l0-.16v0l-.07-.11v-.19l0-.1,0,0,0,0,0,0-.14-.2v-.1l.06-.12,0-.06,0,0v-.06l0,0v-.09l0,0v-.52l.11-.09.16-.15.09-.15,0-.11.06-.38,0,0,0,0,.16-.14.13-.05.09,0,.15,0h.39l.11-.07,0,0h.07l.32.1.32.1h.1l.08.05.12.12.07.07,0,0,.17.24.06.06.06,0h.11l.05,0,.06-.06.09,0h.08l.4-.21h0l.12,0,.13,0,.33.22.27.14.19.05.23,0h.38l.29-.3.11-.07.13-.06h0l.22-.05.45,0,.42,0h.08l.18,0,.27.1.12.1h.32l0-.1.13-.12.1-.05.1-.07.17-.08.13,0,.12-.09.1,0Zm-5.82,8.63-.08,0h-.06l.08-.12,0,0h0l0,.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NI"
                                    d="M1953.38,161.53l0,0,0,0-.06.11h0v-.08h0l0,0,0,0,0,.06h.07l.11.39,0,.07-.06.11-.06.09-.06.05-.08.25-.06.39,0,.36,0,.32,0,.08v.1H1953l0-.06v0l0-.06,0-.08,0,0,0,.1,0,0h0l0,0,0,.09,0,.07,0,0,0,.06v.19h0l0,0h0v.12l0,0v0l0,0h.08l0,.09v.08l-.09.07,0,.06,0,.07,0,.07v0l0,.16.06.11,0,.07h.07l0,.08-.05.05-.09,0h-.1l-.16,0h-.07l0,0v0l-.05-.06-.08-.07h-.13l-.14-.06H1952l-.09,0-.1.06-.25-.09-.17-.06-.16-.06,0,0h0l0,0,0,.06h0l0,0h0v0l-.08-.1-.12-.12-.47-.38-.17-.23-.09-.16-.09-.09-.25-.17-.06-.07-.25-.24-.2-.14v-.05l.08-.08h0l0,.05.07.06h0l0,0v0h.3l.05,0,0-.06v-.1l0,0h.13l0,0,0-.09,0-.21v-.11l0,0h.11l.22,0h0l.08-.12.08-.09.06,0,0,0,0,.08.18.12h0v-.05l0,0,.09-.05.1-.07.09-.11.08-.06.07,0,0,0,0,0v-.06l0-.08,0,0h.05l0,0v-.08l0-.06.11-.06.07,0,0,.08.08,0,.1,0h.08l0,0,0,0,0,0h0v0h0l0,0h.07v0h.11l.1,0,.11-.06.07,0h0l0,0,0-.06.12,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NL"
                                    d="M2034.91,117.28l0,0,.21-.06.13,0h0l-.24.08-.08,0Zm.46-.1.18,0h-.25v0l.06,0Zm.55-.11h0l-.11,0h0l.13-.05Zm-1.13.31h-.07l-.11.1v0Zm1.56-.49h0l-.08,0,0,0h.08Zm-2.57,3.37-.12.06-.15,0-.12,0h-.15l-.07,0,0,.13,0,0,0,0h0l0,0,.05,0h.1l.07,0,0,0,0,0h.07l.13-.06.12-.09,0-.06v0l-.11,0-.09-.06Zm2.94-2.84-.13,0-.08,0,0-.07-.09-.1h-.24l-.19,0h-.27l-.17,0-.32.16-.08.09-.08.18-.27.21-.16.08,0,0-.06,0,0,.11,0,.1-.11.55-.07.2-.1.17-.16.21-.07.07,0,0,0,.1,0,.12,0,.06.18.2,0,.06,0,0-.16,0,.07.06.08,0,.06,0,0,.05-.06,0h-.06l-.23-.17-.13,0h-.18l0,0,0,0,.07.08.06.05h.1l.12.06.17,0,.12.06.08,0,.07,0h.07l0,0v-.08l0,0,.06,0,0,0,0,0h0l.11-.1,0,0,0,0v.06h.11l0-.06,0,0,0,0v.07l0,.09.1.1.09,0,.11,0h.07l0,0,.06.06.14,0,0,0,0,0v.06l-.06.14v.06l0,0-.08.1v0l0,.06,0,0h0l.05,0h.23l.05-.23,0-.06,0,0h0l0,0v-.06h.07l0,0,.16-.13v0h0v-.06l.08-.2,0-.08v-.11l0-.09,0-.08v0l0,0-.09-.16v-.06l0,0,.08,0,0,0h0l.12,0,0,0h0l0,0h.08l.21-.09,0,0,0,0v0l-.08-.09v-.06l0,0,0,0,.05,0,.12-.1,0-.09v-.17l0-.06,0,0h-.13l-.07,0,0,0v-.05l0,0v-.1l0,0h.24l0,0,0-.14.06-.22,0-.12v-.49Zm-3.2,2.43.08,0,.13.1.11,0v0l0,0-.09-.09h-.14l-.09,0v0l0,0Zm1-2,.09-.11v-.18l-.14.15,0,.08,0,0,.06,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NO"
                                    d="M2053.68,80.89l.25.11h.08l.12.2.07,0,0,.12-.12.06-.19,0,0,0-.16,0-.1-.16-.15,0v-.06l.1-.12.15-.13Zm4.87,3.75,0,.35v.12l0,.11,0,.06-.06,0h-.16l-.22-.14L2058,85h-.06l0,.13v.1l0,.11,0,.1,0,.08-.08.11-.15.08-.41.16,0,.08-.13.45,0,.06,0,.06-.14.07-.07-.1-.06-.15,0-.15.16-.29.15-.21.05-.07.09-.2-.18-.53-.32-.16-.35-.24-.14-.13-.2-.27-.15-.24h-.13l-.14.06-.23.22-.13.11-.07,0h0l-.16-.06-.18,0-.14,0,0,0-.2.36-.14.18-.08.06-.06.1,0,.17-.11.59-.07.21,0,.14,0,.4,0,.22-.09.18-.07.09h-.09l-.11.05-.1.1-.07.15-.08.32-.13.11-.13,0-.09-.12-.2-.09-.15-.06-.16-.12-.15-.1-.13,0-.07.12-.06.12-.23.09-.13.07-.16,0-.07-.08-.24-.06-.29-.06h-.08l0-.14-.08-.2-.2-.36-.09-.12-.15-.29L2050,86h-.32l-.12.07-.07.08v.07l.07.28,0,.07,0,0-.16-.08h-.2l-.05.08H2049l-.34,0,.15.22.05.09v.13l0,.25-.07.2-.09.17-.16.16.25.16-.17.22-.08.09-.09,0-.17-.07-.4-.18-.19-.07-.17,0h-.09l-.36-.16-.07,0-.13.07v.53l0,.29,0,.16,0,.11-.14.31-.33-.21-.22-.13-.14.18-.36.33-.18.65v0l-.11.16-.14.08-.1,0-.06.19.14.27.07.14.07.23v.15l0,.09-.15.19-.33.48-.3.51-.12.14,0,.42-.1.13-.2.14-.11.05-.11,0-.35.06.07.44,0,.2v.12l0,.11,0,.22-.06.76,0,.08-.07.21-.22.49-.18.32-.25.47.21.14.19.11,0,.16,0,.27v.19l-.07.16,0,.12,0,0-.27,0-.34-.08h-.09l-.2.06-.18.1-.09.09,0,0-.12.2-.21.36-.12.16,0,.21-.19.41.13.42h0l.07.17-.07.1,0,.06v.19l0,.21,0,.12v.14l.17.61V102l-.05.38-.08.5.13.13.18.15.1.07.15.18.11.18v.12l0,.13,0,.09,0,.13,0,.09,0,0h-.2l-.1,0-.06,0,0,.21.12.38.1.27,0,.18,0,.18,0,.09v.12l0,.25-.08.12-.1.13-.11.1-.09,0h-.08l-.05,0,0,.15,0,.16-.14.19V107l.05.22,0,.26,0,.23,0,.25-.07.17-.09.06-.07,0-.07-.23v0l0-.07-.21-.07h0l-.08,0h0l-.11,0-.08-.21-.09-.16v-.39l0-.14v-.16l0,.13,0,.2-.07.08-.09,0v.12l0,0v.12l0,.17-.17.39,0,0,0,0-.09,0-.11.11-.11,0,0-.12-.15-.17h-.07l.06.08.06.11,0,.07,0,0-.06,0-.22.14.08.09-.07.1-.08,0,0,0v.06l-.23.19-.38.47-.19.14-.14.13h-.12l-.14.12-.38.1-.25-.05-.18,0-.09-.08v-.08l0,0h-.1l0,0v.09l0,0-.13,0,0,0,0-.09.08-.08v0l0,0h0l-.11,0-.1,0-.3-.19-.08-.1-.25-.16-.11-.17-.06-.19v-.17l0-.27,0-.07.22.1.23.16h0l.07-.13.14-.1,0,0-.2.11-.08-.06-.12-.13v-.07l.06-.07,0-.09,0-.08v-.12l.09-.13.14-.12.1-.13.1-.07v0l-.12,0-.11.08-.13.14-.16.11-.11,0-.06,0-.09,0-.09.16-.09.07h-.18l0-.11,0-.41.06-.2,0-.14.09,0,.07-.1h0l0,0,.18,0,.08-.13.12,0,.21-.13v0l-.14,0h-.09l-.12,0-.06,0,0-.1.05-.09.19-.22.07-.09,0-.09v-.06l0-.13.19-.22.15-.1.05.08,0,.28v.11l.12-.4.06-.09.06-.07.15,0,0-.06-.17,0-.43.15-.17.14,0,.1-.13.16,0,.1,0,.15-.07.08-.09,0-.13.19-.06.15-.13.12-.08.09,0,0-.05.09h0l0,0v-.3l.06-.14,0-.13,0-.12,0-.08h.06l.1,0h.11l.18-.1,0,0h-.22l-.12-.1-.1-.19,0-.26,0-.07.35-.26.09-.12h0l-.13.14-.19.09-.12-.12-.06-.14,0-.28,0-.15,0-.19.08-.06.09,0h.09l.2,0,.44-.11.29.07h.11l.18-.1h.15l.12.08.06.08v.12l0,.08,0,0,0-.09v-.14l.47-.17.06-.06-.19,0-.05-.15.1-.23v0l-.11.12,0,.17,0,.13,0,.07-.09,0h-.22l-.13,0-.13,0,0,0v-.09l0,0-.05.08,0,.18-.1,0-.28-.07-.4,0-.18.09-.12,0-.2-.15-.08-.12,0-.24,0-.11.15,0h.08l.08-.06-.07,0-.09-.07-.07-.15-.09,0-.06-.13,0-.19,0-.13,0,0,.12,0,.32,0,.3.14.21.08.42,0,.24-.13,0,0-.26.07h-.24l-.43-.14-.18,0-.19,0-.1,0-.06-.13,0-.26.09-.06,0,.07h.06l.06-.11.06-.06,0-.14.17-.14h.08l.1-.06.07,0,0,.06,0,.05h.12l.34-.1,0,0,.06-.09-.21,0-.18.07-.12,0,0-.08,0-.07.06-.08,0-.13.07-.05h.08l.17,0,.11,0,.2,0,.3.05.19.11h.07l.08,0,0,0-.15-.05v-.07l0,0,.25-.1.27,0,0-.08-.59.12-.15-.09h-.12l-.08,0-.23.06,0,0,0-.14.13-.23v-.05l.06-.06.36-.13.16-.16.08,0h.19l.22,0,.1.19.1.06.28.25v-.07l-.25-.33-.09-.08-.08-.16,0-.16.08-.1.28-.05.06-.06v-.11l0-.07h-.11l-.08,0,0-.11,0-.07.16-.14.09,0,.16,0,.27.11,0,.05-.08.14v.08h.07l.15-.23.18,0,.08,0,.08,0,.13.21,0,.07,0,0,0,.18h0l.06-.09.1,0,.14,0,.23.05.1,0h0l0-.15,0,0,0-.14,0,0,.16-.1.15,0,.1-.1.14-.08,0-.07,0-.08h-.09l0-.05.11-.1.15-.12,0,0-.11,0-.09,0-.12.09-.15.14,0,0,.08.11-.1.16-.55.42-.27.12-.12,0,0-.12,0-.08-.06-.17h-.1l-.06,0,0-.06,0-.18.08-.15.15-.11.07-.13.06-.21.21-.21.31-.5.24-.17.09-.18.15-.07.12-.14.1,0,.18-.12.1-.15h-.07l-.15.09-.09,0v-.16l0-.16.13-.16.61-.44.07.07.07.13.19,0,.21-.25.16-.27-.09,0-.09.12-.19.15-.09,0,0,0,0-.11-.07,0-.06,0-.06-.07v-.18l.08-.28.06-.18.07-.14.26-.39,0-.22.12-.11.15,0,0,0,0-.15-.17-.11v-.07l.56-.19h.26l.08-.09.14-.06.11-.12,0,0-.27.1-.17,0h-.08l-.06,0h-.21l0-.46,0-.25h.08v-.24l.1-.14.13,0,.06-.06.09-.12.16,0,.15,0,0-.06-.2-.07,0-.13.07-.08.07,0h.07l.13-.26.08-.11.09,0,.13-.11.12,0,.12-.08.16,0,.59,0,0-.11-.13,0-.44,0h-.22l-.1,0,0,0V90.9l.08-.1,0-.11.16-.27.19-.18.15,0,.15.18.11,0,0,0,.08.24h0v-.23l.1-.19,0,0-.16.07-.12-.07-.1-.14,0-.13.06-.13,0-.06,0-.08-.25.2-.17,0-.07,0,0-.18,0-.14.23-.36.08,0,.13,0,.11.11.1,0,.11,0,0-.1-.23,0,0-.08,0-.08.15-.09.16-.15.18,0,.14-.12,0,0,0,0,0,.43.13.35h.05l-.05-.29,0-.09.06-.06,0-.08-.07,0-.05-.11-.08-.34,0-.09.17-.18.21,0,.23.13h.08l.13,0,.22-.1.13,0h.07l0,0-.07,0,0,0,0,0-.2.06-.57,0-.06-.06v-.11l.06-.15.07-.08.21-.15.23,0,.24-.27.09-.21,0-.31.15-.25.37-.15v-.06l0-.14v-.24l.1-.28.06-.1h0l.08.09.1.2.15.11.2,0,0-.06-.16-.11-.11-.14v-.15l0-.08h.09l.11,0,.1-.1v-.16l0-.1.15-.23.45-.15,0,.06,0,.45-.05.28v.21l.09-.21.11-.57.09-.28.1-.15.07,0,.07-.08.1,0,0,.06,0,.15-.05.51v.16l-.06.21-.21.47v.06l.05,0,.08-.08.27-.45.23.06v0l-.07-.13-.09-.13,0-.15v-.43l.07-.17.2,0,.12,0,.06.07h.12l.08-.31.17,0,.14.2.18.13.14.2,0,0-.08-.46-.08-.17-.18-.08-.19-.21-.05-.09v-.07l.17-.07.22.08.2-.17.05,0,.15-.09.1.13.06,0,0-.17.24-.1.16.1.08.09,0,.19.06.37.12.19.07.1.09,0,0-.1-.08-.12,0-.11,0-.28,0-.11.26-.42.22-.21.13,0,.23-.49.06-.09.06,0V82l-.13-.08v-.15l.16-.18.2-.31.1,0,.06.08.2.14.12.16.08.08.06,0,0-.12.05,0,.12,0,.08.08h.06l0,0v.11l-.11.11-.18.29-.18.33-.06.18-.06.45-.14.29v.2l.06.1.15-.08.2-.27,0-.28.48-.79.22-.44.26-.36.14-.08.07.24-.06.32-.1.2.08.09,0,.24,0,.13,0,.14v.12l.08,0,.29-.24.08-.27.07-.2,0-.18.12-.17h.22v-.06l-.27-.23,0-.11.09-.14.24-.27.13,0,.08.06.3,0,.23.19v.3l-.05.13-.05.07-.3.23-.05.11.1,0,.2-.12,0,.11-.07.25v.38l0,.22v.19l0,.11.09-.42,0-.11.12-.16,0-.33.12-.39.13-.23.07-.06h.25l.11.08.1.19.07.08.22.08.08.1v.06l0,0,.15-.15.1,0,.16.22,0,.17v0h.19l.16.07.31.33,0,.16,0,.19-.44.21-.19.2-.31.07-1-.13,0,.14.73.32,0,.09,0,.18v.25l.06.1.09,0,.18,0,.09,0,.06-.07,0-.26,0,0,.1.07,0,.27,0,0,0-.19h.1l.11,0,.14,0Zm-6.85-2.83,0,.09,0,.09-.07.09-.22.35-.13.06,0,.05-.05,0-.16,0-.05.07,0,.05-.12,0-.07,0-.17-.13-.11-.14-.05-.12h.16l.06,0,.1,0,.07-.12h.14l.26-.08.1,0,.22-.3h.07l.11-.08,0,.07Zm.53.69-.17.11-.11-.09,0-.1v-.21l0-.14L2052,82l.06,0v0l.1,0,.11.13-.06.23Zm-.37,0,0,.13v.11l-.09.15-.2.2v.06l-.07,0-.1,0-.05,0V83l-.08.07-.08-.09v-.09l0-.08.08-.11.12-.08.08,0,.28-.31,0,.06Zm-3.55.92.05,0,0,0,0,0,.07.14.09.06v.07l-.08.07-.1,0-.1,0,0-.08,0-.15-.09-.15v-.13l.08,0,.07.16Zm-.47.41.08.14h.07l0-.06.05,0,.1.07,0,.13-.14.17-.1.24-.12,0-.06,0-.12.14-.09.14-.09.18v.16l-.35.07-.12,0-.14-.06-.06-.11,0-.07.13,0v-.11l0-.07,0,0,0-.14,0,0,.1,0,.06-.1h0l0,.08,0-.12,0-.1,0-.07.12-.19.06-.13.08-.09h.07l0-.13,0-.13V83.6l.07-.21h.07l0,.19v.31Zm1.41-.07-.05.06-.08,0,0,0-.06,0H2049l-.06-.12v-.09l.07-.14.15-.07.12,0,0,0,0,.31Zm8.46.79-.18.08,0-.07,0-.1,0-.2h.07l.07.07.06.1Zm-11.49.53.12.15,0,0,.1,0,.08,0,.06.1h.07l0,.13,0,.16,0,.12-.07,0,0,.15,0,.19-.17.07-.19,0-.07-.09-.15.17-.15.27-.07,0v-.08l-.11-.06h-.13v-.06l0,0,.11-.07,0-.14,0-.24,0-.12v-.08l.08-.1.25,0,0-.1,0,0-.13-.11,0-.06.1-.07h.09l0-.11v-.07Zm-1.6,2.67v0l.12-.24.14-.08v-.08l.06-.08V87.2l0-.11.07,0,0,0,.05,0,.09.09,0,.1.06.22,0,.21-.17.17-.13.07-.14.19-.07.15,0,0,0,0,0,0h-.07l-.08.13-.22.11-.09,0v-.14h-.06l-.08.16-.08.06H2044l-.1-.06-.28.27-.25.05-.09,0v-.16l.17-.21.13-.15.47-.1.3-.44.07-.48.07-.18,0-.1-.08,0v-.15l0-.17.15-.23.09-.09.14-.28.07-.07h.07l.08.08,0,.15-.11.27-.17.22,0,.17.07.13,0,.23v.22l-.13.29Zm-.51-1,.12.26,0,.15,0,.28-.12.14-.18,0h-.13l-.07-.07v-.08l0,0-.12.1h-.09l-.1-.07,0-.13.11-.15,0-.12h.13l0,0,.07,0,0-.14V87l0-.07.15,0v-.27l.06,0h0l0,0,0,.1Zm-1.23,1.71,0,0,.14,0,0,0,0,.07-.06.08-.13,0-.06.12,0,0h-.11l-.07,0-.08.1-.07-.07,0,0v.1l0,0-.12,0,0-.22,0-.09,0-.1h.12l.1-.22.14-.06h.08l.09,0Zm-.84,1-.13.13,0-.24.07-.24.1-.13,0,0,0,.11v.12l0,0-.1.15Zm-.5,4.31-.09,0v-.1l.07-.1,0-.06V93.5l.07-.06.08.08v.12l0,.12-.14.06Zm.08.32h-.07v-.09l0-.09.07,0,.08,0h.1l0,0-.06.06-.19.14Zm-.5.62-.06.07-.12,0v-.06l0-.12.07,0h.09l0,0,0,.12Zm-.68,1.67,0,.06-.11,0-.21,0-.08-.06.07-.11.19-.12h.1l.1.15v.09ZM2037.89,99h-.1l-.07,0,.16-.1.23-.09,0,0h0l0,.07v.09l0,.05Zm-.34.68h-.09l-.1,0-.07-.07V99.5l.12-.07.13-.05,0,.08v.14l0,.06Zm-2.9,4.45-.08,0-.06,0,0-.18,0,0h0l.06.1Zm.12,1.46v.22h-.08l0-.09v-.18l0-.13,0-.07h0l.06.12,0,.15Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NP"
                                    d="M2111.35,148.81l0,0v.1l0,.11,0,.07,0,.17,0,.28v.05l.11.16,0,.13V150l0,.15-.06.16,0,0h0l-.14-.05H2111l-.1,0h-.11l-.1,0-.11.07-.11,0-.08,0,0-.11h0l-.24.11h0l-.15-.06-.12-.06,0,0-.12,0h-.1l-.11,0-.14.05h-.06l-.05,0,0-.07v-.08l0,0H2109l-.1,0-.15.06h-.05l0,0v0l0-.06,0,0h0l-.06,0-.08,0-.23-.12,0,0v-.17l0,0-.12-.05-.23-.08-.13-.07-.06,0-.12,0-.06.06-.08,0-.18-.06h-.09l-.06,0,0,0-.07,0-.07,0-.14-.05-.12,0-.18-.06,0-.08,0-.08h0l-.16,0-.15-.09-.17-.11-.07,0h-.08l0,0h0l-.08,0-.12-.07-.13-.09-.17-.12-.06-.06,0-.06,0,0-.14-.08-.11-.06-.13-.08h0l-.06,0-.07-.05-.07,0,0,0v0h-.06l-.08-.06-.1-.06-.07,0-.07-.06,0,0,0-.13,0-.11,0,0,.06-.07,0-.13v-.11l.06-.16.08-.17.13-.18.06-.06.07,0,.12-.13,0,0,0,0h.1l0,.07,0,.07h.06l.07-.06.15-.26.21-.05.2,0,.17,0,.05.09,0,.09,0,.05,0,0,.25.13.14.12.2.15.15.07h.13l.07.06.11.12.09.14.12.13h.08l.11,0,.14,0,.08,0,.07,0,0,.07,0,.12.05.13.07.05.09.07.05,0,.18.1,0,0,0,0h.05l0,0h.05l.2-.06h.08v0l0,.09,0,.12,0,.06.08,0,.19,0h.24l.08.06.07.08.08.16,0,.06,0,0,.07,0v-.15l.06,0,0,0,0,.07.1.07.08,0h.07l0,0,0-.12.06,0h.07l0,0,0,.05.09,0,.08,0,.08,0,.11.09.14,0h.36l.17-.07h.23Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NR"
                                    d="M2184.07,175.9l0,0h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="NZ"
                                    d="M2199.62,220.13l0,0h-.06l-.1.13v-.09l0,0h-.08l0,0,.06,0h0l-.06.06.06.12h0l.05.1v0l-.11,0-.06.05h-.08l0-.09v0l.07-.06,0-.07,0-.06-.07,0h-.2l.08-.08h.09l.09-.07.36,0Zm0,.75h0v-.08l0,0,.07,0,0,.06-.05.07Zm-9.73-11.23v0l0,0,0-.06.06-.06v.09l0,0,.2.07,0,.06h0l0,0,0,0,.07,0,.17.09V210l0,0h.05l.07-.06h0l0,.09,0,0h0l0,.05,0,0,.07.15v.05l0,0,.07.14h0l-.14,0v0l.08.1.06.14,0,.08.18.26,0,.1v.06l0,0,.06.14,0,0,0,.14,0,0v.05l.07,0,0,0,0,0,0,0,0,0,.09.07.18.07.05,0,0,0,0,.13,0,.06h.15l0,0v-.13l-.06-.21v-.2l0-.07,0,0,0,0v-.07l.06,0,0,.06,0,.06.14.19h.09v.08l.05.08,0,.1.05.28.06.27.11.12,0,0-.07,0,0,0v0l.07.05.07,0h.05l0,0,.3.18.14.06.36.12h.16l.11,0,.1-.07.08-.1.07-.12.08-.06.09,0,0,0,.05,0h.24l.09.06.1,0,.06,0,0,.08-.06.11-.05.13,0,.28,0,.28,0,.13-.08.09-.09.08-.1,0,0,.16,0,.19v.05l0,0v.06l0,.11,0,0,0-.09,0,0-.12,0-.13,0h-.1l-.11,0-.15.09,0,0,0,0-.07.12,0,.15V215l0,0,.13.09-.13.28-.11.3-.07.08-.08.08-.07.18-.12.15-.09.12-.06.12-.06.14-.12.18-.06.12-.07.11-.13.13-.14.11-.22.15-.06.05-.07,0-.08,0,0-.05v-.11l0,0-.11,0-.13.05h0v-.18l0,0,0,0h0v0l0,0-.08,0h-.1v0l0-.05,0,0,.15-.19.16-.26.14-.27,0-.14,0-.27,0-.1,0-.11-.14-.19-.18-.11-.11,0-.11,0-.11-.09-.09-.11-.19-.09-.2-.07-.11-.1,0-.06v-.19l0-.05,0,0,.21-.13.22-.07h.08l.06,0,.1-.1,0-.07,0-.21,0-.21,0-.23.09-.15,0-.09,0-.15,0-.05,0,0,0,0-.08-.13-.08-.21,0-.07v-.06l0-.07h-.05l0-.06-.08-.2,0,0,0,0,.07.14v-.07l.05,0,.06,0h.06l-.14-.16h0l-.06,0-.06,0-.06,0-.06,0,0-.07,0-.13,0,0-.18-.27h.05l.14.14,0,0,0-.06v-.06l0-.06-.05,0v-.06l0-.06v0l-.09-.07h0v0l0,.06h0l-.2-.14-.06-.11-.06-.13v.12l.08.15.12.16,0,0,0,.06,0,0,0,0-.06-.14,0-.07-.49-.72.06-.09.1-.08,0,0,0,0h0l0,0,0,0,0,0,0,.09,0,0-.06-.07,0,0v0l0,0h0l-.06-.1,0-.05.07-.09v-.12l-.07-.12-.08-.12-.16-.19-.14-.2.15,0h.16l-.07.11,0,.07.05.06.11.18v.05l.05.05,0,0Zm2.1,1.52v.06l-.07,0,0-.05-.07,0h0V211l0,0v0h0l0,0,.07.07Zm-2.24,5.89h.1l.1-.09.1-.07.11-.06.16-.14,0,0,.11,0,0,0h0l0,.09-.06,0v0l0,.05-.05.07V217l-.06.1.09,0,0-.07,0,0,0-.07.06,0,0-.05v0h.11l0,0h.06v0h.07l0,.06-.06.07v0l-.09.07-.06,0h.09l.13-.1.08-.08v.1l-.06.1-.06,0-.06,0-.06,0,0,.08v.05l0,0,.06.07-.07.14.08,0,0,0,.06.08,0,.09,0,.05-.15.18-.07.1-.08.06v.1l0,.08-.24.25,0,.05-.18.41-.12.17-.06.06-.07,0-.17.08-.08.1-.08.07-.09,0v0h0l.05,0,0,.06-.06,0h-.06l0,0,.16,0,0,0v.06l0,.06,0,.07.13.05.12,0,0,0,0,.12,0,.06,0,0,0,0h-.09l-.1,0-.06-.07-.18,0h-.07l.1-.07-.05-.05h-.05l0,0,0,0v.07l0,0H2189l-.07-.06-.07-.08-.1-.08,0,0,.07.12,0,.08-.09.06-.09.05-.08,0-.08.05-.09.07,0,0h-.13l-.07,0,0,.09,0,.06H2188l0,0,0,0-.07.28,0,.12v.2l-.05.19h-.13l0,0,.1.05,0,.08-.11.15-.05.08,0,.21-.07.19-.1.22v0l0,.05,0,0v.1h-.05l0,0-.24.06-.08.06-.06.12-.07.11-.25.23-.15.19,0,.06,0,0-.31.09H2186l-.12,0-.12,0h-.06l-.13,0-.05,0-.1,0-.08,0,0,0,0-.06,0-.08,0-.05-.05,0,0,0,0,0-.1,0-.16,0h-.06l-.11-.18,0-.05-.14-.06h0l-.07.1,0,0h-.25l-.25,0-.09,0,0-.09.19-.23-.06,0-.11.09h-.08l.08-.1v-.1l-.1.09h-.11v-.18l0,0,.3,0,.1,0,.05-.05-.18,0v-.07l0-.06.15-.09-.11,0h-.13v-.09l0-.08h.13l0-.06v-.07h0l.13.1.1,0,0-.07v-.05l0,0,.08,0h0l-.08,0-.08-.06v-.12l.09-.1.06.06.07,0,0,0,0-.07,0,0,.19-.18.06.17v-.11l0-.05v0l0,0,.09,0,.11-.13.08-.06.07,0,0,0v0l0,0v-.12l.15-.18.16-.18.16-.18.08-.07.18-.07.11,0h0l.17-.14.07,0,.07.05h0l0-.11,0-.06.14-.1.18-.09.13-.05.1-.06h.06v-.1h.05l0,0-.05,0,.15-.1.08-.11,0,0,0,0,0-.08.06,0h0l0,0,0-.06-.07,0,.07-.05.08,0,.07,0,.07,0-.07-.06v0l.08-.05h0l.06.08v-.06l0-.06.09-.1.12-.17,0,.06v.15l0,0V219l0-.13.15-.25,0,0h.08v0l0,0,0-.12,0-.15,0-.13,0-.13.06-.22.05,0h.13l0,0,.09-.07.11-.15.06-.11.07-.3,0-.31.12-.23.18-.17.16-.12.06,0h.11l.11,0-.2,0,0,.07v.08l0,.07,0,.06.1.06.11,0,0,.13V217l.05.11Zm.73-.5-.12.07v0l0-.11.06-.05h0l.06,0v.08l0,.1Zm-6.39,5.43,0,.15-.09,0,0,0,.06-.08Zm-.22.62v.1h-.08l-.05,0h-.06l0-.07.11,0,0,0Zm1.29,1.6v.06l-.09,0v.06l.07,0,0,0h.08l0,.07,0,.06-.05,0-.16,0-.1.08h-.11l-.1.09-.11,0h0v-.08l.09-.08v-.07l0-.06.08,0v-.08l.05-.07,0-.14,0-.13h.16l.17.23Zm-1.77,5.45,0,.13h0l-.11,0,0-.05h0l0,.06h-.06l0,0,0-.06.14-.13,0-.15v0h.11l0,0v.05l0,0v.12l0,0,0,.05Zm2.73,2.58.05.07-.1,0-.05,0,0,0,0-.05h.05l.05,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="OM"
                                    d="M2082,151.09l0,0h0l-.06,0,0,0v-.16l0-.1v-.1l0,0h0l.08-.15,0,0h0l.07,0,0-.08,0,0h0l0,0v.22l0,.31,0,.06,0,0v.06Zm0,.42,0,0h0v-.06l0,0h0v.06ZM2079,160l-.05-.12-.06-.13-.06-.12,0-.13,0-.09-.07,0,0-.1,0-.09,0-.1,0-.09,0-.1,0-.1,0-.09,0-.1,0-.09,0-.1,0-.1-.05-.09,0-.1,0-.1,0-.09,0-.1,0-.1.13,0,.16-.06.16-.05.16-.06.16,0,.15-.06.16-.06.16-.05.16-.06.16,0,.16-.06.15-.05.16-.06.16-.06.16,0,.16-.06.16-.05.1,0,0-.13,0-.11,0-.1,0-.11,0-.11,0-.11,0-.11,0-.11,0-.11,0-.1,0-.11,0-.11,0-.11,0-.11,0-.11,0-.11,0-.11,0-.1-.06-.1-.08-.13-.08-.13-.08-.13,0-.09-.07-.12v-.32l.07-.16.07-.2.06-.13,0-.11,0-.09,0-.1v-.07l0,0,0,0,.07,0,.14,0h.08l.1,0,.09,0v0l0,0,0-.08h-.11l0,0,0-.11v0l0,0v-.15l0-.06v-.24l0,0,0,0,0,0h0l0,0,0,0v0h0l0,.06.05.07,0,0,0,0,.05,0,.06,0,0-.07,0,0h0l.09.27.14.25.13.13.12.19.2.17.09.06.36.12.19,0,.28,0,.19.1h.06l.1,0h.07l.18.12.05.12.08.06.06.1.05.11.15.16.11.17.1.14.1.08.15,0,.12,0v.2l0,.08-.11.17,0,.1-.12.17-.14.27-.06.07-.22.14-.16.17-.19.3-.14.3-.06.1-.11,0h-.08l-.05,0,0-.08v-.09h-.07l-.06,0-.14.22-.08.1,0,.12,0,.16,0,.14,0,.13v.07l.05.17v.17l0,.11,0,.12-.06,0-.06,0h-.23l-.23,0-.21.07-.12.08-.15.16-.1.4-.15.18-.11,0-.25,0-.35,0-.13,0-.2.25,0,.08,0,.06v.06l0,.06-.09.15-.1.12-.27.07-.1,0-.09,0h-.18l-.28,0-.1.08-.17.06-.15.09-.29,0-.2.07Zm5.2-3.45-.06,0h0v-.12l.13-.16.09-.18.06.16-.1.09-.06.16-.05,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PA"
                                    d="M1958.72,167.47h0l0,.07,0,.06.07.07,0,.07,0,.08,0,.07.07.14v.06l0,0-.06,0-.06.07v.12l-.17.13,0,0,0,0,0-.07,0,0,0,0h0v0l0,.12,0,.05-.06,0-.07.2,0,0-.23-.26-.19-.33,0-.15h.1l0,0,0,0,0-.1.09-.08,0-.05h0l.06.09.09.05.1.07.07,0-.08-.08-.15-.1,0-.06,0-.1-.06,0,0,0,0,0,0,0v0h-.08l0,0h0v0l0,0v0h0l0-.05,0,0,0-.17-.1-.08,0,0h0l-.06-.06-.07,0-.1-.08-.12-.06-.15,0h-.18l-.06,0,0,0,0,0-.11,0,0,.07,0,.06,0,.06.06,0-.35.23-.07,0-.15,0,0,0-.05,0V168l.05.05,0,0,.1.13.17.17,0,.07,0,.09,0,0,0,0H1956l0,0,0,.06-.06.05-.21,0h-.16l0-.06,0-.14-.11-.26,0-.17,0,0-.06,0,0,0,0,.13,0,.05h0l-.1,0-.12,0-.16-.27,0-.05,0-.06-.12,0-.1,0h-.12l0,0-.06,0v-.07l-.12,0H1954l-.13,0h-.1l-.08.06,0,.13,0,0V168l0-.06,0,0-.07-.06v0l0,0,.13-.08v-.11l0-.06-.05-.1,0-.06.06-.05.07,0h0v0l0,0-.09-.06h-.05v-.38h0l0,0v-.06l0,0,.08,0,.07,0h0l0,0,0,0v0l.06,0,.12.09v.09l0,.12h.06l.06,0,0,0v0l0,0v.1l.1,0,.05,0,.17,0h.11l-.05-.08-.07-.06v0l0,0,0,0,.09,0,.15.18.18,0h.14l.13,0,.2-.07.15-.12.12-.06.39-.11.14-.13.06,0h0l.12-.09.07-.08.07,0,.2,0,.13,0h.1l.08,0,0,0,0,0h.22l.18,0,.39.16.23.16.12.16.3.22Zm-4.48-.68v.05l-.07-.08h0Zm3.07,1,0,0,0-.09v-.1l0,0h0l0,.09,0,.05Zm-.15,0,0,0,0,0,0,0h0l0,0Zm-2.34.85h0l-.11,0-.07-.08v-.05l.05-.08,0,0h0l0,.09,0,0v.06l.08,0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PE"
                                    d="M1965.55,179.31v.06l0,0h0l-.07,0h-.1l-.07-.05,0,0,0,0-.12,0h-.25l-.06.06,0,.06-.06,0-.16,0h-.08l-.07,0h-.12l-.07,0H1964l-.16,0-.09,0,0,0-.09.07-.16.09-.09,0-.11.1-.13.1-.08.06-.12,0-.05,0,0,0v0l0,.09,0,.18v.13l-.08.14-.09.13,0,.09,0,.07,0,.05,0,.1,0,.07v.11l0,.06-.06,0h-.08l-.16.1-.18.14-.06.07v.06l0,.1v0l0,0,0,.08v0l0,0H1962l0,0h-.07v.12l0,0,0,0,0,0,0,0,0,0,.06.08h.06l0,0v.09h0v0l0,.05,0,0,0,0,0,.07v0l0,0,0,.05v0l0,0,0,0,0,0,0,0v.08l0,.08.1.06.07.09,0,.06.09.1v.12l-.11.13-.11.14h.36l.2,0,.13,0,.08,0,.05,0,0,.07,0,.06v.08l.08.06v.15h.77l.1,0,.11-.11.07,0,.06-.05.08-.09.07,0,0,0,.08-.05,0,0h0l.06,0,0,0,0,.05v.07l0,.08,0,.06,0,.05v1.11l0,0,.06,0,.07.07.06,0h.09l.07,0,.14-.06.1-.05h.11l.15,0h.09l.11.21.09.14.09.17.08.14.12.21.1.18.11.19.12.21,0,.06,0,0v.08l0,0-.06,0-.06.07,0,.05v.58l0,.09,0,.05,0,0,.05.09,0,.18,0,0,0,.07,0,.08v0l-.08,0,0,0v.1l0,0-.06.05,0,.06,0,0,0,0,0,.07,0,.07-.08,0v.16l0,.07.13.15v0l-.07.09,0,.06-.1.2v0l0,.09.16.4,0,0,0,0h.08l.12,0,.06.05v0h0l-.06,0-.07,0,0,0v.16l0,0-.07,0-.06.06-.06.09-.11.13,0,0v0l-.06,0-.11.09,0,0v0l.06,0,0,.05v.11h0l-.07.06-.09.07-.11,0,0,0V192l0,.11v.09l0,.1-.08.11-.12.07-.12,0h-.22l-.06-.06-.3-.22-.12-.12-.1,0-.26-.19,0,0,0-.2,0,0-.09-.07-.23-.09-.08-.05-.09-.08-.14-.06-.14-.12-.09-.1-.1-.06-.3-.09-.15-.09-.28-.13-.13-.08-.3-.09-.09,0-.3-.23-.2-.08-.17-.12-.51-.28-.08-.08-.08-.14-.11-.08-.12-.18-.19-.11-.18-.15-.07-.13-.12-.16,0-.09-.1-.09v-.17l-.07-.08,0,0,.06,0,.07-.27,0-.14-.19-.24-.07-.12,0-.15-.07-.09-.11-.19-.07-.17-.15-.12,0,0,0-.07-.09,0v-.13l-.06-.24-.08-.12-.3-.23v-.09l0-.16-.07-.17-.33-.54-.08-.16-.08-.26-.08-.15-.08-.26-.12-.2-.08-.17-.08-.21v-.12l-.15-.19-.08-.18-.14-.15-.14-.12-.06-.08-.19-.39,0-.11-.13-.21-.14-.15-.08-.13-.11-.11-.64-.33-.23-.15-.08-.06,0-.11v-.06l.07-.06.09.05.06,0,0-.08v-.11l0-.15-.21-.28,0-.06,0-.07-.08-.14-.08-.11,0-.08,0-.32.05-.08.31-.32.09-.14.13-.09.14-.13.17-.1,0,0,0,0v.06l0,0v.05l0,0v.16l0,.08v0l0,0,0,0,0,0h0l-.08,0-.05,0v.15l0,0h.09l-.08.11,0,.06v0l.05,0h0l.09,0,0-.06,0,0h.06l.07,0,.09,0,.11.06,0,0h.08l.07,0,.06.05,0,0,0,.12,0,.09,0,.07.06.08.06,0h.08l.1,0,0,0,0-.06,0,0,0,0v-.13l0,0,.11-.07,0,0v0l0,0v0l0,0v-.06l0-.07,0-.08,0-.11v0l0,0,0,0,0-.06,0-.06v-.06l0,0v-.08l0-.15v0h.06l0,0v0h0l0,0v0l0,0h0v0l0-.06.06-.07.12-.15.07-.06.19-.06.14,0,.13-.05.18-.06.26-.1.19-.06.17-.12.12-.1.11-.08.14-.1.19-.22.13-.15.1-.11.06-.07,0-.2.06-.22,0-.1v0l0,0,0,0h.09l0-.22V176l0-.06v0l-.06-.05-.09-.09,0-.08,0-.06-.07,0-.06,0v0h0l.1,0h.12l.06,0,0-.06h.08l.08.07,0,0,.06,0h.13l0,0,0,0,.06,0,.07,0,.06,0,0,0,0,0,0,.06,0,.1,0,.07,0,0v0l0,.07,0,0,.06,0,.12,0,.06.06.06,0,.06.06,0,0h.06l.07,0,0,.06,0,.08,0,0,0,.08,0,.09,0,0,.06,0,.08,0h.08l0,0,0,0,0,0,0,.11,0,.08,0,.06v0l0,.07.08,0,.07,0,0,.05,0,0h.16l0,0h0l0,0,.08,0,.1,0h.16l.08,0,.08-.05h.06l0,0,.06-.06.06-.06h0l.08,0,.1,0,.06.05h0l0,0h.09l.1,0,.07-.06.08,0,.06,0h0l.19.11.05.06h.07l0,0,.09,0,0,0,.07,0,0,0,.08,0h.06l0,0v0l-.07.1-.13.21-.12.18-.18.29-.11.17h0l.16.07h0l.06,0,0,0h0l0,0,.06,0,0,.1,0,0,.06,0,.07.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PF"
                                    d="M1900.89,183.62l-.09,0h0l0-.07v0h.17v.07Zm.48,0h-.06v0l0,0h.07l0,0v0Zm-.48.45,0,0,0-.06v0l.06,0,0,0,0,.07Zm1,.25.14.05h0l0,0-.14,0,0,0h0l0-.06Zm0,.22-.07.08v-.08h.07Zm.37.55h0V185l0,0,0,0v0l0,0Zm-5.9,5v0l-.06-.07,0,0h0l.08.09Zm2.34.22v0l0-.08h0Zm-2.74.23h0l0-.05v0l0,0,0,0v-.08l0,.08,0,.06,0,.05,0,0Zm-5.52.31h0l0,0v-.07l0,0,0,0Zm7.28,0h0l-.09,0h0l0,0Zm.12,0,.06,0-.07,0h0Zm-7.35.24h-.06V191l0,0,0,.09Zm1.48.64,0,0,0,0,0,0v-.06h.08l0,0Zm.45.14.13,0,0,.07,0,0h-.07l0,0-.05-.09-.13,0-.09,0,0-.11v-.05l0,0,.1,0,.12,0,0,.06Zm7.85.16v0h0v0l0,0,0,0,0,0,.07,0,0,0h0l-.12.06,0,0,0,0h0Zm0,.32v0l0,0,0,0-.06-.06v0l0,0,0,0Zm3.56.15v0l-.09-.09h0l0,.07Zm-3.42,0v0h0l-.07,0v0Zm4.05.16,0,0v0h0l0,0,0,0h0v0h0l0,0,0,0,0,0Zm-2,2.25,0,0v0l0-.05h0l0,0,0,.05v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PG"
                                    d="M2171.69,186l.15.05.06.06-.06,0-.14,0,0,0-.13,0,0-.06-.06,0,0,0-.08,0,0-.06v0l.1,0,.21.11Zm.69-.1,0,.05,0,0-.1,0h-.05l0,0v0l.08,0v0l.13,0,0,0Zm-3.12-.75,0,.08-.07,0h0v0h.1Zm.16-.5h0l.07-.07.06,0,0,0-.06.22,0,0-.2-.06v-.08l-.06,0,0-.09-.06-.09,0-.06,0,0,0,.06.18.13v0l0,0Zm-.51-.63.13.08.08,0,0,0,.09.08v.07l0,.05v0l0,0v0h-.16l-.09,0h-.13l.05-.06,0,0-.07-.1V184h.08Zm-.16.14,0,0-.05,0-.15-.13,0-.09.07,0,.1,0,0,.08v.05l0,.09Zm2.1-.5h.17l0,0,.05,0,0,0,0,0v0h0v0h0l0,0-.1,0h0v0l-.07-.06-.11,0,.05,0Zm-8.33-.3v0l-.13-.06-.13-.09-.06,0-.05-.07.08.05.14,0,.14.11Zm6.93.09v.07l-.07-.07,0-.08v-.07l-.08,0,0-.07,0,0h0v.1l0,0,0,.15Zm-6.94-.23h0l-.16-.06,0,0h.24v.09Zm4.1-2.45h0l0,0-.08,0-.09-.11v-.12h.05l.19.11,0,0v.11l0,.06Zm7.31.79,0,.08,0,0,0,0-.08,0,0,0,0,0h-.09l-.09,0-.09,0-.07-.06-.08-.09-.05-.09,0-.11,0-.09-.15-.07,0,0-.07-.1-.06,0-.08-.08,0,0,0-.1v-.07l0-.18v-.1h0l0,0,.05,0,.12,0,.09.08.08.14v.05l0,0,.09.06,0,0,.09.16.05,0,.06,0,.05,0,.09.07.08.08,0,.08.05.09,0,.11Zm-8.1-1.16h-.05l-.08-.09,0,0v-.05l.11-.06.07.06v.12l0,0Zm6.89,0h0l0-.12v-.15l0,0,.07-.07,0,0,.05,0v.09l0,.07,0,.15-.05,0Zm-7.95-.65-.07,0,0,0,0-.06,0-.06,0-.05h0l0,0,0,.06Zm5.43-.39,0,0,.14-.1.07.07.1,0,.1,0,0,.14v.06l0,.06v.1l0,.08-.09.12,0,0h-.19l0,.06v.07l.07.09.06.1-.06.1-.1.06-.09,0-.16,0h-.17l0,0v.06l0,0,0,0-.09.09-.09.07-.13.07,0,0h-.12l-.1,0,0,0-.05,0-.11,0-.11.07h-.75l-.05,0-.11-.13-.09,0h-.1l-.14,0h0l-.27-.18-.08-.05-.09,0-.11,0-.1,0-.06-.09v-.11l.08-.07.12,0h.05l0,0h.05l.05,0,.2,0,.12,0,.11,0h.21l.15,0h.18l.12-.07.05-.29,0-.09,0,0h0l0,.05,0,.06,0,.05v.11l0,.11.08.09h.1l.1-.06h.11l.09.05h.1l.05,0,0,0h.06l0,0,.06-.09,0-.11.07-.08.17-.14,0,0h.18l.09-.05v-.23l-.1-.27v0l0-.05,0,0h.2l.05,0Zm1.61-.18v0l-.05,0,0,0h0Zm-.91-.89,0,.08-.06,0,0-.06,0,0,.06,0,0,.08Zm-.53-.17v.05h0l-.07-.09,0,0,0,0,.09.06,0,0Zm-.13-.11h0v-.11l.05,0V178Zm-7.22.91h.11l.12,0h.05l0,0,.05,0,0,.06.07.07.1,0,.1.07.09.08.06.08.08.07.11,0h.11l.4.4,0,.06v.27l-.05.21.1.06.14,0,.19.05.18.06.58.28.08,0h.28l.09,0,0,0,.08.09.07.1,0,0,0,0,0,.05,0,.16v.11l0,0-.09,0-.33,0-.22,0-.15.1v.09l.14.22.08.2.06.08.1.06.08.08.08.08.17.16.09.05.1,0,.18.12,0,.05.05.16,0,.12v.08l.15.11,0,0,.07.23,0,.11.09,0h.1l.28-.07h0l.05,0,0,0,0,.1-.05.11v.1l.06.09.14.06.05,0,.26,0,.1,0,.1,0,0,0,0,0,0,0h-.06l-.09,0v0l.05.06,0,.08,0,0,.05,0,.11,0,.11,0,.07,0,.07,0,.16,0,.12,0h.17l-.14.07-.06,0-.17,0,0,0,.07.08.11.06,0,0,0,0-.13.08h-.15l-.16,0-.12,0,0,0,0,0-.11-.07-.07,0H2168l-.18,0-.38,0-.1,0-.11-.06h0l-.06,0h-.19l-.11-.06-.11,0,0,0h0l-.15,0-.11,0-.09,0-.05-.05-.06,0-.05-.11-.08-.11-.1-.09-.22-.14,0,0-.09-.13v-.09l0-.09-.05,0h0l-.15-.06-.06-.07-.1-.19-.06-.09-.15-.18,0-.1-.06-.09,0,0,0,0,0-.05,0,0-.21-.08,0,0h-.28l-.17-.07-.09,0h-.1l-.1,0-.05,0,0,0,0-.09h-.08l-.09,0-.08,0-.08,0-.05,0,0,.07h0l0,0h0l-.05,0,0,0H2163l-.15-.05-.07,0-.06-.06,0-.06-.05,0-.07,0,.08.08.19.37h-.09l0,.07h-.1l-.11,0h-.13l0,0,0,.07,0,.09-.15,0-.16,0-.17,0h-.18l-.09,0-.09,0-.08,0-.09,0h-.07l0,0,0-.05,0,0h-.07l-.06,0h.11l0,0,0,.06.08.05.09,0h.2l.2.09h.05l0,0,.11.09.07.08.07.1v.13l0,0-.13.07-.14,0-.2.1-.19.12-.11,0-.09-.06,0,0-.09,0-.06,0-.23,0h-.33l-.1,0-.1,0h-.1l-.07,0h-.08l-.15-.09v-2l0-.06-.05-.09v-.12l.06-.15,0-.1v-3.43h.12l.08,0,.46.19.14.08,0,0h.09l.2.11.32.11.32.11.11,0h.1l.23,0,.12,0,.18.13.09,0,.08.08.12.08,0,0Zm8.15.86-.07.07,0-.06-.05-.06-.05-.06,0-.13v-.2l0-.13-.07-.13-.22-.3-.07-.08-.08-.07,0,0h-.11l0,0-.09-.05-.08,0-.2-.17-.1,0-.06-.06-.31-.19-.09,0h-.11l-.09,0,.07,0,0-.06,0-.06.16.1.16.09,0,.08h.08l.15.07.1.05.1.07.1.09.21.07,0,0,.11.12.14.11,0,.05.59.48.1.14v.09l0,0-.06.07v.1l0,.08-.06.08Zm-2.33-1.92h-.25l-.06-.06-.05-.08-.06,0h0l.13-.07.12,0,.18.08,0,0v.14Zm-2.36-.35,0,0h-.05l0,0h0l0,0Zm-.75-.3.31.06h0v0h0v0l0,0H2166l0,0-.09.09-.06,0-.07,0h-.13l-.16,0,0,0h-.06l-.05,0h0v-.07l.07,0v-.08l.05,0h.1l.09,0Zm2.49-.37v0h-.09l-.11-.09v-.06l0-.05h.05l.08.06,0,.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PH"
                                    d="M2142.49,156l0,.08h0v0l.05-.1h0v0Zm.08.41h-.05l0-.1,0,0h0l-.06.1Zm-.41,1v.09h-.05l-.09,0v-.07Zm-.25.27v.06l0,0v-.09l0,0,0,0v.06Zm.62.18-.06.07,0,0,0-.07v0l0-.05.05,0,0,0-.06.06Zm-.76.27.15.05.31.18.11.05.12,0h.09l.09,0,0,0,.07-.11.07,0,0,0,0,.06v.08l0,.08-.06.07,0,.09,0,.3V159l0,.08.06.14,0,0,.09,0,0,0v.07l0,.06.05,0,0,0,0,.06,0,.07,0,.16-.19.37v.08l-.07.16-.15,0-.17.08-.1.06-.08.08,0,.1,0,0,0,.05v.06l0,0-.08.11,0,.09,0,0,0,.05v.05l0,0,.1.2.11.2,0,0v0l-.06.06v.09l0,.1.09.23,0,.06,0,.05,0,0,.05,0,.16.07h.12v0l.06,0v0l-.07-.06v0l0,0,0,0,.1-.07.1-.05h.12l.12,0,.09,0,.07.06.08.11.05.11v.16l0,0h.12l.06-.08v-.1l0,0,0,0,0,0,0,0,.05.06.19.07h.08l.09,0,0,0-.05.07-.18,0-.06.06.06.11.08.09.06.07.05.08v.07l0,.08h.08l.08,0,.1.06h.07v.23l-.07.21-.09,0-.08-.08,0-.11.05-.11,0,0h0l-.06,0h-.16l-.2-.12h-.09l0-.05v-.11l-.09-.13V163l0,0-.24-.14,0,0-.08-.11-.17-.16-.05,0h0l0,0,0,.06v.16l.08.08v.05l.06.11v.14l-.06,0-.08-.06v-.1L2143,163l0,0-.16-.12-.12-.13-.27-.14h-.08l-.05,0-.13.07,0,0v.07l-.09.06h-.13l-.1,0-.08-.07h-.07l-.09-.12-.1,0-.09.1v-.37l0,0,0,0,.22-.2,0-.06v-.08l-.05-.07-.08,0h-.09l-.06,0,0-.06,0,.11,0,.16v.1l0,0h-.11l0,0,0-.1-.07-.08,0-.1h-.11l-.05,0,0-.13v-.12l0-.11,0-.11,0-.09,0-.38v0l0,0-.05,0,0-.06v-.28l0,0,.05,0,0,0,0,0,.05,0,.08.11,0,0h.17l0,0,0-.05v-.06l-.06-.17,0-.12v-.22l.08-.19v-.46l-.05-.1V159l.13-.5.05-.1,0-.1v-.13l.1,0,.1-.06h.1l.12,0Zm.86,3.46,0,0h0l0,.07,0,.12,0,.09h-.07v-.13l0,0,0-.08,0,0,0-.07h.12l.05,0Zm.13.9v0l-.2-.14v0l0,0,.19.17Zm2,.4,0,.06,0,0h0l-.07,0-.11-.07,0-.05.08-.12v-.18l0,0,0,0h0l.08.12,0,0,.07.05,0,.12v.06l-.05,0Zm-3.76-.11v.06l-.16-.09v-.06l0,0,.08,0,.06.07Zm1.51.19h.08l.11.08v0l0,0-.07.09v0l0,0-.12-.07,0-.05,0-.09.05-.13,0,0Zm-1.11.06h0l.15,0,.06,0,0,0,.05,0,0,0,.08,0,.07.05.07.1.08.08.07,0,0,0,0,.07v.17l.06.18,0,.05-.06.08,0,.08v0l0,0v.06H2142l0,0,0,.06-.08,0,0,0v0l0,0,0,0-.08-.08,0-.06v-.06l0-.06,0-.06-.06,0,0,0v-.17l-.07-.15,0,0-.07,0-.06-.05,0,0,0-.08h-.11V163l.05,0h.06l.17,0Zm2.37.59.08.14-.08-.09-.1-.07-.11-.11-.07,0,0,0v-.05h.07l.15.19Zm.46.38V164l0,0-.11-.16,0-.06,0,0,.08.06.06.15Zm-1.55.09-.07.23,0-.08,0,0-.05,0v0l0,0,0-.05v-.15l.1,0h0l0,0v.07l0,.17Zm.2-.16,0,0h0v0l0,0h0l0,.06Zm1.3.22.17.11.12.19,0,.15v.05l-.06-.06-.12-.09-.09,0h0v-.05l0,0h0l0,0-.08-.1-.05,0-.05,0-.12.15-.12.1v0l0-.13,0-.21,0-.06,0-.09v-.09l.1,0,.11,0,.09.05,0,0,.13.11Zm1.4-.22.07.07v.12l0,0h.06l.06,0,.05,0,0,.05v.08l-.05.1v.17l0,.05v.11l0,.05.08.15V165l0,0v0h0l.07.06,0,.09v0l-.06-.07h0l-.18,0-.11,0h-.08l-.07-.11-.06,0,0-.05-.08-.13,0-.08.06-.07,0-.06v-.06h-.05l0,0-.06-.07,0,0,0,0-.07-.08-.1,0,0,0-.07-.07-.06-.09-.05-.15,0-.15.25,0h.25l.29,0,.08.05Zm-2.38.2-.05,0-.1-.09,0,0,0,0,.05,0h.12l.06.06v0l0,.07Zm-2.36.13.05,0h0l0,0,0,.07.07.06,0,.06H2141l-.06,0-.07,0-.08,0-.05-.05-.06-.11,0,0v0l0,0h0v0h0l.05,0,.1.07,0,0Zm-.06.44-.07,0v0l0,0v0l-.07-.16,0,0,0,0,0,0h0l0,0v.08l0,.07Zm2.27.08.11,0,.1,0h.11l.08.06,0,0v0l.19-.1h.05V165l0,.07,0,.08-.05.08-.07,0-.09,0,0,0v.1l0,0-.09,0-.14.1-.3.07-.08,0,0,.06-.06,0,0,0v-.05l0-.14v-.05l0-.06v-.1l0-.1,0-.11V165l0-.29v0l0,0-.11,0-.05,0,0-.06.05,0h.06l0,0,.19.08.1.06.09.08Zm2.18,0,0,.05h0l0,0,0-.07v0l.05,0,0,0,0,0Zm-.23.1h-.12l0,0-.06-.12.07,0h.07l0,0,.05.08v.06Zm0,.14.06,0h.07l.09-.08.1,0,.06.11,0,0,0,.07v.17l0,.16,0,0,0,0,0,0,0,0,0,0v.12l.06.1v0l0,0h-.09V166l0,0-.06-.1,0,0V166l0,.07v.08l-.09-.06-.1,0,0,0v-.15l0-.1,0-.23v-.09l0-.09-.07-.08h0l-.11.06,0,0,0-.21,0-.21,0-.05,0-.06,0,0,0,0,.06.05.07,0,0,0,0,.05Zm-4.35-.17,0,0,0,.07,0,0,0,0-.06,0v0h0l.06,0Zm-2.35,2.87-.09.07v-.09l0-.08.08-.16.07,0,.1-.12.06-.06.14-.12.13-.13h.13l.08-.07.21-.24.18-.18.17-.22.09-.07,0,0,.17-.21,0,0,.06,0,0,0,0,0,.06-.09,0-.11v-.06l0-.09,0-.12,0-.05.12-.25,0,0,0,0v0l0,.1v.05l0,.06,0,.08.08.23.07.15v0l-.09.09-.05,0-.1,0-.05,0-.08.07,0,.09v0l0,0-.22.07-.11,0,0,0,0,0,0,.09-.19.32-.06.08-.06.07-.08.05-.11,0-.09.07-.06.11-.08.09-.09.08-.1.06-.09,0-.1,0,0,0,0,.06,0,0-.05,0-.09,0Zm5.94-2.65.06.13h-.08l0-.09,0,0Zm-.35,1.71,0,0v-.15l.07-.29,0-.07.12-.16.07-.15.11-.16,0-.08.09-.16.09-.22v-.07l0,0v-.1l.06-.08,0,.05,0,.11v.05l0,0v.1l0,.14,0,.17,0,.18,0,.07-.07.06-.08,0-.08.09-.05.1v.09l-.13.31-.11.13Zm-.22.36h-.13l0,0-.08-.2-.09,0-.09,0,0,0-.05,0-.14-.2v-.12l0-.06.05-.07h.22l.13-.09v-.29l0-.1,0-.05.05,0,0-.09v-.18l0,0,.18-.07h0l.24.07,0,.1v0l0,.11,0,.08-.08.11-.06.13,0,.18,0,.06-.07.12,0,.06v.24l.15.24v.07l0,.06-.05.08,0,0,0,0Zm-.45-1.31h0l-.05,0,0-.06,0-.11.08-.08,0,0,0,0h0l0,0v.05l-.05.15,0,0Zm1.54-.12h0l.05-.1,0,0h0v0l-.06,0Zm-4.06.11-.11,0,0-.09.08-.09.09,0,.06,0,0,0-.06.05Zm5.33.53,0,0,0,0-.06-.05,0-.08,0,0,0-.07v-.11l.05-.05h0l0-.06h0l0,0,0,.14.05.16,0,.1v.05Zm-1,.12v0h-.1l-.07.09,0,0-.22,0-.17,0-.06,0,0-.08v-.05l0-.06,0,0,.14-.07,0-.06.08-.07.15,0v0h.05l.08.06.08,0,0,.14,0,0,0,0Zm.63-.18v0l-.11-.12,0-.09h0l0,0,.05.13Zm.72.2h0l0-.07v-.08l.07-.13,0,.11v.07l0,.07,0,0Zm0,.41.07.06.1,0v.18l.09.12,0,.1-.06.1,0,0-.08.06v0l0,0,.1,0,.08,0v.14l.08.12v.05l0,.2v.09l.06.07,0,0,0,0,0,.12v.28l0,.07-.1.15-.14.12h-.07l0,0,0,.11v.24l0,.16,0-.09,0-.08,0-.23,0-.1,0-.09,0-.08-.06-.08-.07-.2h-.05l-.07.06,0,0v.06l0,.05-.09.08-.07.1-.06.11,0,.09.05.08.05,0,.07.07,0,0,.08.22v.23l-.05.1-.14.19-.1.06-.06,0,0-.12v0l0-.11v-.1l0,0h0l0,0-.09.13,0,0h-.1l-.27-.12-.22-.11-.17-.1-.12-.16,0-.12v-.12l0-.18V169l.06-.11.07,0,0,0,0-.05,0-.06v-.06l0,0-.11-.13-.09-.08-.19-.08,0,0-.05,0h-.1l-.06,0v.13l-.07.24-.1-.05-.1-.06,0,0v-.09l0,0,0,.08-.05.06-.07,0h-.07l0,0,0-.15-.07-.05h-.09l-.11.09,0,0,0,.07-.12.2-.06.16-.07.15,0,0,0,0-.06,0-.06,0-.06-.1,0-.12.07-.07.05-.08.06-.27v-.14l.11-.12.08-.08.05,0,.19,0,.07,0h.13l.09,0,.08-.06v-.13l0,0,0,0,0,0,0,0,.14,0,0,0,0-.05,0-.08.06,0,.06,0,.1,0,.1.07.06.1v.06l0,.17,0,0-.09.08h0l.13-.07.06,0,.15,0,0,0,0,0,.05-.1,0-.12,0,0,0,0h0l.16.08.1,0,0-.11,0-.18,0,0,.06-.05.07,0,.09.06.09,0,0-.05,0-.1h0l.12,0,.11,0,0-.11,0-.13-.09-.36.06-.08h0l.11.1.22.13.07.08.05.1Zm0-.25v0l0-.05,0-.11,0,0,0,.07,0,.09Zm-2.09.33V167l-.09,0-.07,0,0-.06v0h0l.08,0h0Zm1,.09,0,0-.1,0,0,0v-.05l0,0h0l0,.05V167Zm-6.87.86-.06,0,0-.06v-.06h.05l0,0v.07Zm-.26.3,0,.07-.06-.08v-.11l0,0,.07,0Zm5.41.44v0l-.09,0h0v-.07l0,0,0,0,0,0,0,0Zm2.62.41v.06L2146,169l0,0,0-.1.06,0V169Zm-3.4.5h-.12l-.08-.1v0l-.05,0,0-.05h.07l.14-.06.21.09,0,0-.07,0,0,.09-.1.05Zm-.86.32.05.07.06,0,.1,0,0,0v0l-.11.06-.07-.07-.12.05-.06,0-.08,0,0-.06,0-.05.12-.08Zm-.84.76,0,0,0,0,0,0,0,0,0,.05h-.08l-.05.07-.07,0h-.06v-.06l.14-.09.09,0,.08-.06h0l0,.05,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PK"
                                    d="M2099.11,138.89l0,0,.06,0,.09,0h.09l.18.07,0,0,.05.16,0,0,.1,0,.09,0,.1.05.06,0,0,.06,0,.09,0,.07,0,.09v.24l0,0,0,.05v0l0,0,.06,0h0l0,0,0,.14,0,0h.07l.12,0,.11-.05h.05v.13l.06.05.09.06,0,0,.11.05.19.07.19.05.14,0h.33l-.1,0-.11.08-.14.08-.12.08-.12.07-.11.07v.05l0,.08-.1.06-.1,0,0,0v0l0,.07-.1.06h-.12l-.26.09h-.13l-.09.07-.07.05-.14.07h-.1l-.14,0-.17-.07-.07,0h-.22l-.15,0-.18,0-.09,0-.18,0-.12.05-.11.05-.08,0-.08.14,0,.05,0,.07,0,.05,0,.06.1,0,0,0V142l0,.06,0,0v0l0,0,0,0h.23l0,0v.05l0,.06-.13,0-.07.06,0,.07v.06l0,0,.06,0,0,.05,0,0v.06l0,.08-.06.09-.05.06v0l0,0,0,.05.07.07.09.07h.05l0,0,0,.07v.07l0,.05,0,0h.12l.09,0,0,0h0v.26l0,0,.1,0h.18l.11,0,.12.05.06.06,0,0v.07l-.06.08-.11,0-.06,0-.31.15-.09.07-.08.07,0,.06,0,.06.07.2V145l-.05.22,0,.08,0,.06.06,0,0,.05v0l-.12.08-.12.07h0l-.11.13-.19.27-.1.09v.08l0,.08v.06l0,.07-.07.07-.14.06-.18.07-.08,0-.06.17,0,.17,0,.06-.09.2-.17.29,0,.06-.26.14-.26.15,0,.06-.06.14,0,.15,0,.08-.17.17-.06.14v.08l-.14,0-.16.05-.24,0-.09,0-.29.12h-.07l-.06,0,0,0,0-.07,0-.11,0-.05-.08,0H2095l-.07,0-.07.05,0,0,0,.05-.09.16-.14.23-.16.17-.06.05,0,0-.05.05,0,.05,0,.18,0,.15v0l0,0,.08.05.13.07.16,0h.14l.05,0,0,.05v.16l0,.14-.05.14v.09l0,.08.16.2.05,0h.17l.06,0,0,0,0,0v.25l.05.1.09.12.07.15.07.17.06.14,0,.07,0,0,0,0v.13l0,0,0,0v0l-.06,0h-.05l0,0-.07.09h-.14l-.07,0,0,0v-.09h-.06l-.18.05-.18.07,0,.05,0,0-.08,0h-.2l-.07-.06-.07,0h-.41l-.06,0-.06,0-.08,0,0,0h0l0,0h0l0,0v.32h-.22l-.1,0-.09,0,0,0-.06,0V153l0,0,0-.07,0,0,0,0h-.05l-.08-.07,0,.07-.14,0,0-.06v0l-.08,0,0-.06,0-.08,0,0,0,0-.06,0-.05-.09v-.08l0-.11L2092,152l-.06,0-.37-.07,0-.07,0-.18v-.12l-.12-.15,0-.11-.1-.09-.1,0h-.09l-.06,0,0,.06h.21l0,0,.05,0h-.05l-.07,0h-.09l-.32.05-.19.06-.25,0-.32.07h-.27l-.1.13-.06,0,0,0-.36-.1,0,0-.06,0-.06.06h0l-.2,0-.15,0-.06.06v.09l-.19,0-.11,0-.14,0-.32,0h-.09l-.12.06-.05,0h-.07l-.06-.06,0,0,0,0-.05.05-.17,0H2087l-.17-.05h0l0-.09,0-.3,0-.11V151l.06-.05,0,0,0-.16,0-.17,0-.07h0l.21-.08,0,0h.11v-.06l.05-.07.07,0,.05,0,.18,0,.11,0h.31l.06,0v0l0-.17,0,0v0l0-.12v-.08l.06,0v0l0-.05-.05,0h0l-.23,0h-.1l0,0h0v-.1l0-.09v-.05l0-.32,0-.21,0-.2v-.05h0l-.15,0-.12-.13-.07-.06-.21-.06-.09,0-.13,0L2087,148l-.12-.13-.05-.08-.06-.14-.16-.28v-.11l-.16-.18-.11-.13-.17-.2.35.11.27.09.45.14.34.11.09,0,1-.09.37.07.12,0,0,0,.05,0,.08-.05.12,0,.12,0h.53l.08,0,.27-.07.18-.06.27-.08.2-.06.05,0,0-.06,0,0-.06-.08v-.07l0-.09,0-.13v-.31l.05-.21.05-.11.09-.06.07,0,0,0,0,0,.1-.16.09-.07.09,0h.09l.08.06.16,0,.15,0,.14,0,.06,0,.07,0v0l-.08,0,0,0,0-.06,0,0h.11l.25-.14.11-.09,0,0h.05l.09.05h.12l.07,0h.07l.07,0,0,.05.06.07h.08l.1,0,.1-.08.09-.11.09-.11,0-.33,0-.2,0-.11.06-.07,0-.1v-.09l0-.07,0-.2.06-.05.13,0,.2,0,.16-.09.15-.1,0-.09-.05-.09-.08-.18-.08-.11-.17-.2,0-.12.1-.05.24.08.06,0h.31l.18,0,.18-.08,0-.08v-.27l-.06-.07-.05-.06v-.05l0,0,.05,0,0-.09.1-.11.07-.1,0-.05.09-.06.06-.09,0-.06,0-.06,0,0,0,0,0,0,0,0v-.05l0,0,0-.05v-.06l0-.09-.05-.06,0-.13-.05-.14,0-.05,0-.07-.11-.07,0,0,0-.09.07-.06.14-.14.08-.1.07-.06h.14l0-.06.09,0,.17-.12.05-.07.09,0h.07l.09,0,.1,0,.08,0h.13l.21,0,.12,0h.6l.13,0,.08,0h0l.14-.08.22-.1.1,0,.06,0h.08l.07,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PL"
                                    d="M2048.16,115.59h0l.26,0,.26,0,.42,0,.44,0,.45,0,.5,0,.52,0h0l.05-.06h.07l.07,0,0,0v.07h0l.08,0,.1.06.09.06.07.09,0,.1v.22l.11.53.17.51.07.24,0,.13,0,.19v.31l-.06.06-.33.17-.07,0-.1.13-.09.14,0,0v0l0,0,.12.07.12.06,0,0,.09,0,0,.05,0,0v.1l0,.14,0,.1,0,.07,0,.08v.13l.06.15.05.1,0,.08,0,.07v.06l0,.07.14.2.07.2,0,.07.1.1v0l0,0h-.06v0l0,0,0,.06,0,.15v.13l0,0-.05.07,0,.07-.24,0-.06.07-.13.14-.09.08-.13.15-.21.24-.08.11-.06.08-.17.23-.05.1V123l.06.18v.16l0,.07v0l.05,0,.08.07v.06l0,0-.1,0-.11-.05h0l-.06,0-.25-.1-.17-.08,0,0,0-.07-.07-.07-.16,0-.07,0-.27,0h-.11l-.08,0h-.06l-.07.11,0,0h-.07l-.07,0-.06,0-.1,0h-.18l0,0h0l-.05,0-.06,0-.07,0,0,.07-.05.12-.13,0,0,0-.07,0,0,0v0l0,0v-.15l0,0h-.06l0,0v0l0,0-.05-.08,0-.11,0,0-.05,0-.08.06,0,0-.1.15h-.16v-.07l0-.08h-.1v0l0-.11-.2-.2,0-.09v-.09l0,0-.16,0,0,0,0,0-.06,0-.1,0v0l0,0h0v0l0,0-.1,0,0,0,0,0,0-.07-.06-.06-.05,0,0,0v0l.11-.06,0-.05,0-.1h0l-.05,0-.09,0-.08,0h0l-.24-.18-.16-.06h-.09v0l0,.1.07.12v0l-.09,0-.05,0,0,0,0,.05,0,0h0l0,0-.1-.19-.13-.13v0h0l-.06,0,0,0,0,0,0,0,.07,0,0,0v0l0-.05h0l0,0-.07-.05-.2,0-.06,0,0,0,0,0h0l-.07,0-.08,0h-.08l-.17-.06h-.06l0,0,0-.05,0,0,0-.11-.12,0-.12,0V121l-.08,0h-.08v0l.1-.2,0-.12,0-.24-.06-.18v-.08l0,0-.17-.09v0l0-.12v0l0-.05,0-.11,0-.09.07-.11v-.08l0-.11,0-.06v0l0,0v-.14l0-.07-.06,0,0,0,0-.07,0-.11,0-.15-.09-.18-.24-.2-.12-.15V118l.05-.08.09-.07.07-.12,0-.14v-.13l-.11-.42,0-.11v-.16l.21.09.09.05v-.06l0,0v-.18l-.19,0-.13,0v-.12l0,0,.13,0,.3-.15.53-.19.57-.18.13,0,.13,0,0-.07,0,0,.07-.12.17-.18.3-.07.12-.09.23-.12.54-.14.22,0h.22l.2.11.2.14,0,.08-.11,0-.16-.12h-.07l.14.37.08.13.15.1.13,0,.4-.06.14-.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PM"
                                    d="M1978.19,126.67l-.08.06,0,0v0l.05-.09v0l0-.18v0l0,0,.07,0v0l0,.11,0,.07,0,0v0Zm.1.11h0l-.06,0,0,0,0,0h0v.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PN"
                                    d="M1911.76,198.5h0l0,0v0l0,0h0v.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PR"
                                    d="M1969.09,158.23l0,0h0l0,0h0l.18,0,.11,0,.12,0v.13l-.09.06-.06.05-.05.07-.12.08-.16,0h-.25l-.09,0h-.24l-.06,0h-.28l-.06,0,0-.15v-.07l0-.06,0,0,0,0,0,0,0,0v-.07h.09l.23,0,.57,0h0l0,0Zm.65.32h-.12l0,0,.09,0h.1l.06,0h0Zm-2.26,0h0l0,0h0v0h.07v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PS"
                                    d="M2061.76,145.2l-.09.09,0-.09,0,0,.18-.18.08-.11,0,.05v0l-.16.17Zm1.09-.75,0,.24-.06.1,0,.12V145h0l-.12.07-.16.06-.18,0,0,0v0l.06-.15,0-.07.07-.08.11-.07h.05v0l-.06-.05-.07,0-.06,0h0v0l0,0v-.32l0-.13v-.06l.05-.13.12-.08.1,0h.08v0l.08.05h.06l0,.17,0,.15v.12Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PT"
                                    d="M2014.23,143.49l.12.06.12,0,.14.07.08,0-.07,0-.07.07h-.16l-.15-.07,0-.05v0l0-.07Zm-7.23-4.58v0h-.11l0-.06,0,0h.08l0,0,0,0Zm-.58-1h.06l.3,0h.08V138l-.06,0-.17,0-.27-.06-.09-.07,0-.06v0l.06,0,.12.08Zm-2.3-.71.08,0h-.12l0,0-.09,0h-.11l-.07-.07,0-.06,0,0h.1l.23.12Zm-.45-.09h-.1l-.09-.09.13,0,0,0,0,0,0,0Zm.79,0,0,0-.25-.09-.09,0-.11-.11.32.13.17.09Zm.65-.1h0l-.19,0-.06,0,0-.08,0,0,.08,0,.12,0,.08.06v.07l0,0Zm-3.75-.9,0,.06-.07,0,0,0,0-.12.06,0,0,.05v.09Zm21.18-2.92h.08l.09,0,.07,0,0,0,.19,0,0,0,0,0,.09,0h.1l.13,0,0,0v-.09h0l0,0,.07,0h.15l0,0h0l.07,0h.08l0,0v.26l0,0h.14l.07,0,.06.05,0,0v0l0,0,0,.08-.1.09-.15.09-.12.11-.08.13-.1.06,0,0v0l.07.16,0,.12v.36l0,.05v0l0,0v0l0,0-.09.06-.06.05v.08l.1.1,0,0v.1l-.06.17-.06.1h0l-.06,0h-.31l-.08,0v0l.08.13.07.07,0,0,0,.15.13.24.12,0,0,.06v.09l0,.09-.07.09-.09.07-.05.07v.07l0,.1,0,.08v0l.22.32h.14l0,.08,0,.09,0,0-.1,0-.1.11-.08.14-.06.07-.06.16v.08l0,.11,0,.28-.08,0-.31.18h-.1l-.18-.08-.32,0-.11,0-.13.05h-.1l-.08.07-.06,0,.07-.15.1-.31v-.18l0-.17,0-.16,0-.1.07-.26v-.14l-.07-.17.2,0-.06-.07-.06,0h-.11l-.17.07-.08,0h0v-.11l0-.14.07,0h.08l.06-.06,0-.07,0-.12.06-.11.13-.09h-.07l-.08.06-.12.21,0,.11-.11,0h-.15l-.06,0v-.15l0-.12,0-.18.06-.16v-.11l0-.06.06,0,.09-.13.14-.34.15-.35v0l0,0V135l.09-.42,0-.06,0-.12v-.2l0-.14V134l0-.08-.06-.16-.06-.33v-.12l0-.05h-.09l0-.08v-.08l.1-.13.08-.09.09,0,0,0,.2-.06,0,0h0v0l0,.06,0,0v0l-.07.11v0l0,.07v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PW"
                                    d="M2154.22,168.65l-.06,0,0-.07v-.09l0-.06,0,0h0l0-.08v0l0,.15,0,.05v.06Zm-3.16,4h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="PY"
                                    d="M1976.44,194.3l0,.07v.06l0,0,0,.05,0,0,0,0v.13l0,.06v0h.05l0,.06,0,0V195l0,0,0,.08v.13l0,.07,0,.06v.09l0,.06,0,.07V196l0,.06,0,0v.08l0,.06.07,0h0l0,0h0l.08,0,.06.05h.17l0,0,.09,0,.09,0,.1,0,.09,0h.15l.06,0h.07l.05-.06,0,0,0,0,.07,0,0,0,0,.08.07.05,0,0h.23l.08,0h0l0,0,0,.06v.1l0,.08,0,0,0,.05v.07l0,.07V197l0,.07v.07l0,.07,0,.06v.17l0,0v0l0,.05v.12l0,0,0,.06,0,.11V198l0,.09,0,0h.16l.1,0,.09,0,.05,0,.1-.06.09,0,.05,0,0,0,.09,0,.08.05.06.07.12.07,0,0,0,.07v.07l0,.1,0,.23-.09.34,0,.2v.06l0,.1-.13.21v.15l0,.44,0,.31-.07.23-.06.12h-.06l0,0,0,.06-.05,0-.07,0,0,0v.05l-.07,0H1979l-.08,0,0,.06,0,0-.07,0,0,.06v.08l0,.07-.07.06h-.07l-.07-.06-.08,0-.11,0-.09,0-.07,0-.06.08-.06.1-.06,0-.07-.07-.08,0-.11,0h-.08l-.06-.05h-.1l-.12,0-.26,0-.39-.12-.33,0-.4,0,0-.12,0-.07.06-.05,0,0,0-.07,0,0,.07,0,0,0v-.06l0,0,0,0v-.08l0,0v-.26l0-.07,0-.05h0l0,0v0l0-.05.13-.08,0-.05v0l0-.05.08-.13,0-.06v0l0,0,.09-.07,0-.06v-.06l0-.07,0-.08-.17-.2-.13-.09-.16-.07-.11,0,0,0,0,0,0-.06-.09-.05-.19-.06-.43-.23-.17-.11-.06-.06-.16-.12-.26-.18-.2-.08h-.14l-.22-.05L1974,198l-.18-.1,0-.1-.11-.1-.18-.1-.1-.06v0l-.06,0-.1-.06-.11-.08-.12-.12-.12-.19-.14-.26-.15-.17-.15-.09-.08-.06v0l0,0,0-.05.06-.2.08-.28.08-.29.1-.34v-.49l.15-.21.1-.15.09-.14.08-.24.06-.16.23,0,.38-.09.19,0,.41-.09.41-.08h.84l.32.2.25.16.27.16,0,0,0,.14Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="QA"
                                    d="M2077.37,152.15l-.09,0-.07,0h-.12l0,0-.06-.08,0-.12,0-.06v0l-.07-.29,0-.22v0l0-.05.06-.12,0-.11.09-.27.1-.1.14-.07.12.14.14.11,0,.13,0,.1,0,.16,0,.07v.07l0,.1,0,.14v.1l0,.09,0,.07-.1.23,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="RE"
                                    d="M2081.54,195.45l-.13,0h-.09l-.18-.08,0-.06-.07-.15,0-.06.06-.1.12,0h.14l.06,0,.07.11.09.11v.14Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="RO"
                                    d="M2056.1,128.52l.1.13.12.07.29.08h0v0h0v0l0,0h0l.06,0,.12,0,.18-.11.17,0,.15.06.08.07.05.07,0,.09v.06l0,.22,0,.08,0,.1-.47.11,0-.06v-.09l0-.07.05-.06-.11,0,0,0,0,.06,0,.14-.05.08,0,0v.1l0,.05v0l.07,0,0,.09-.14.17-.05.1v.4l-.06.24v.07h-.2l-.14,0-.16-.06-.09-.12-.06-.09-.14,0h0l0-.05-.1,0h-.12l-.29-.17,0,0-.22,0-.33.08-.25.1-.26.18-.11.13-.12.07-.17.05-.31,0-.33-.06-.35-.08-.18,0-.26,0-.38-.08-.29,0-.28,0,0,0v-.1l0-.05.07,0,0,0v0l-.08-.06-.15-.09-.07,0V130l0,0-.06,0,0-.05,0-.08v-.07l0-.06.06,0h.08l0,0v0l-.08-.05-.13-.08-.13,0-.14.15-.1,0-.06-.1-.11-.06-.16,0-.09,0,0-.06-.07,0-.15,0v-.05h.15v0l-.06,0-.05,0,0,0,0,0v0h.06V129l0,0,0,0v0l0,0,0,0h0l-.14-.05-.07-.07h-.05l-.07,0-.07-.05-.07-.08-.07-.06,0,0v-.07l0-.08,0-.08v-.12h0l0,0h0l0-.06-.07-.12,0,0-.09,0-.07-.05-.05-.1-.06-.07,0,0,.21-.05.09,0h0l0,0,0,0v0l0,0h.07l.19,0,.07,0,0,0,0-.07,0,0,.06,0v-.09l0-.12,0,0h0l0,0,.08-.08,0-.06,0-.05.08-.12.06-.12v-.1l.06-.06.05-.07.08-.23,0,0,0-.05,0,0v-.15l0,0,.07,0,.06-.08.06-.09,0,0h.06l.06,0h.17l.07,0,.16-.17,0,0,0,0,.13,0,0-.06,0-.06h.06l.19.13h.28l.27.06h.05l.11,0h.1l.09,0h.09l.09,0,.07.07.17.16.05.06h.08l.09,0,.09-.1.27-.12.2,0,.21,0,.23,0,.07-.09,0-.07,0-.13.13,0,.12,0h.2l.1.06.08.08,0,.06.07.09.06.12.08.16v.08l0,.09.05.11.11.12v0l.05.08.09.19.08.07.06.08,0,.08.05.07.11.1.09.08.07.26.05.11,0,.09,0,.18,0,.07,0,.14-.07.28,0,.22V128l0,0,0,.1v.09l0,0,0,0,0,0,0,0,0,.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="RS"
                                    d="M2048.27,127.59h.11l.09,0,.21,0,0,0,0,0,.06.07.05.1.07.05.09,0,0,0,.07.12,0,.06h0l0,0h0v.12l0,.08,0,.08v.07l0,0,.07.06.07.08.07.05.07,0h.05l.07.07.14.05h0l0,0,0,0v0l0,0,0,0v.05h-.06v0l0,0,0,0,.05,0,.06,0v0h-.15v.05l.15,0,.07,0,0,.06.09,0,.16,0,.11.06.06.1.1,0,.14-.15.13,0,.13.08.08.05v0l0,0h-.08l-.06,0,0,.06v.07l0,.08,0,.05.06,0,0,0v.07l0,0,0,0,0,.06v.1l-.12.07h0l0,.05,0,.14v.1l0,.05v.05l0,0,0,.08,0,.1.05.09.13.08.07,0,.05.07,0,.06.11.08v.06l0,.06,0,0-.06.08,0,0-.09.12h-.17l0,0,0,.06,0,.05V132l0,.1,0,.11.05.05v.08l-.07.1,0,0-.07,0h0l0,0h0l-.08,0-.09,0-.07,0h-.15l-.07,0-.11,0H2050l0,0,0-.06v0l.07-.05v0l.1-.21,0-.07v0h-.08l-.25-.09v-.1l-.07-.05-.08,0v-.06l-.09-.11-.07-.06-.08,0-.07,0,0,0,0-.05v0l0,0h0l-.06,0-.07,0v0l0,.06v.08l0,.05-.13.1,0,0,0,.06,0,0-.11,0v-.08l-.06,0-.1,0-.2-.14-.08,0-.07,0-.11-.07h0l-.06-.05-.12-.16-.11-.09-.07,0,0,0V131h0l.06-.07h.1l0,0h0l0,0v-.14l-.12-.18-.1-.13v0l0,0h.26l0,0v0l0,0-.11-.11-.08-.09-.1-.07-.07,0,0,0v-.26l.07-.1.06-.11,0-.11,0-.1v0l0,0-.07,0-.09,0-.09,0h0v-.06h.05l0,0,0-.06,0-.22h.06v-.06l.07,0h.16v-.08l0,0,0,0h-.05l-.17-.08-.08-.08v-.09l0,0,0,0v0l-.1,0,0-.05,0-.07,0-.15,0-.09,0,0v-.09h0l.08,0,0,0,0,0h0l0,0h.06l.06,0,.05,0,.06,0,0,0,0,0,.06-.09.08,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="RU"
                                    d="M2080.14,44.75l-.43-.3,0-.16,0-.06v-.16l0-.11v-.24l.28.18,0,.07.18.12,0,.23,0,.14-.13.29Zm-2.48,33.42-.1.28,0,.13,0,.33v.14l.07.38.07.22.1.14.11.09.11.05.23,0,.22-.14.24.09.21,0,.42-.13,0,0-.07.15v.23l.08.17h.1l.1,0,0,.11.27.28.25.21-.06,0-.16-.09-.08,0,0,.16-.17,0-.07.09v.15l0,.14v.1l-.13,0-.08.08.31.17.44.13.12.06.17.14.08,0V82.1l0-.08.21.18.17,0h.17l.41-.07,0,0v.1l.08.07.11,0,0-.06.13.08,0-.07,0,0,.27.27h.06l.06-.08-.13-.2-.08,0-.07-.11.12,0h.11l.06.09,0,.12,0,0,.46.16.09,0,0-.09.17-.07.16-.19-.06-.1-.07-.07-.38-.24-.16-.14-.41-.51-.38-.68-.2-.47-.19-.54-.07-.27-.06-.25-.16-.2.07-.24,0-.27.09-.23,0-.12-.11-.28v-.19l0-.1V77l.06-.11,0-.15,0-.08.16-.07.08-.22v-.3l.09-.07h.24l0,0,0-.13,0-.18,0-.25,0-.15L2082,75l.06-.08,0-.2-.07-.08-.2-.09-.32,0-.43-.13-.19-.16-.16-.08-.13,0-.12.06-.32.23-.12.06h-.1l-.21-.07-.1,0-.11.1-.11.07-.14,0-.1.13,0,.11V75l0,.29v.12l.12.18-.11,0-.11,0h-.1l-.1,0-.1.07-.21.26,0,.08,0,.09.07.11.07.06.22,0-.07.16,0,.08,0,.13-.11.21,0,.14v.14l0,.16,0,.11,0,0-.11.1,0,.17-.07.13-.07.07h-.17l-.17-.06-.08,0-.14.13-.06.08Zm.89-32.22,0,.06,0,.07.2,0,.61-.07.13-.2.11,0,.07-.22-.34-.3-.13-.24v-.2l-.14-.05-.3.05-.13.31,0,.16-.1.12-.28.11-.05.07.12.27.19.06Zm2.92-5.63.44-.21.16.27.13,0,.15-.14.14-.24.31.36.27.26.29-.21.13-.16.1-.35-.1-.29,0-.4.48-.12.17-.19-.11-.28-.39-.13-.14-.14,0-.25-.09-.11-.24.13-.08,0-.25,0-.11.2-.24.54-.29.22-.23.52-.34-.16-.29.11.1.5.13.24Zm-1.24,2.36.15,0,.08.1,0,.15.42-.07.39.27.15.38.16.05.4,0,.46-.17.71-.52.1-.22-.11-.15-.61-.55-.4-.5-.28-.18-.65.06-.69-.57h-.08l-.2.75-.05.49h-.11l-.18.17,0,.34Zm3.31-5.5.31-.13,1-.28v-.14l0-.29-.13-.19-1,.18-.14.2,0,.31,0,.17v.07Zm-8.18,7-.43.05-.15-.28-.06-.06-.09,0-.09.1-.28.08-.23.16-.23.31-.7.8.09.23.1.11.13.3h.24l.09,0,.09-.22.18-.08.23,0,.08.14-.23.34-.09.21.1.16.19,0,.08-.06.06-.12.07-.05.2.19.07-.07.06-.26,0-.14,0-.06.2.18.09,0,.07,0,0-.25v-.19l0-.12,0-.06-.21-.08v0l.12-.3.08-.08.64,0,.19-.27,0-.26.09-.15.4-.16.62-.08.17-.35.52-.48-.11-.3-.12,0-.5-.85-.1-.13h-.34l-.15-.09-.14,0-.57.34-.24.25-.09.63,0,.32V44l-.09.24Zm1.22-3.28.09.23.09,0,.13,0,0-.14.15-.22-.06-.25-.15-.12h-.12l-.06.06,0,.09,0,.1-.09,0v.11l0,.11Zm-1.35,44.42-.1,0-.2.15-.2.24-.08.2,0,.22,0,.23v.29l0,.1.12.36.21.18.22,0,.25-.09.41-.2.2-.3.07-.2.16-.19,0,.07,0,.16.05,0,.06-.1,0-.25-.09-.19-.16-.13-.71-.53ZM2071.94,44l.24.14.3-.19.05.16,0,.32.08.21.22-.06.12-.1.1-.37.05-.11h.31l.12-.26.05,0,.1,0,.1-.39.09-.08.08-.31.1-.13.07,0,.24.5.54.23.05,0v-.48l-.13-.35-.1-.16-.09-.07-.09,0-.32.07-.42-.24h-.09l-.3.23-.21.34-.43.11-1.11.48-.2.23.22.07Zm5.25,3.43.33.06V47.4l0-.07-.08-.15-.08-.1v-.3l-.29-.25-.24.25-.19.07-.35.29.34.29.57,0Zm-1-.76,0-.19.23-.34V46l-.05-.18-.34-.06-.3.38,0,.13.35.4Zm12.05-5-.27.43-.21.23-.07.18.23.34.22.29.17.09.17,0,1.08-.31.42-.37.4-.65-.06-.22V41.4l0-.29-.06-.24-.13-.28-.13-.15-.21-.17h-.21l-.24.14-.05.19,0,.22,0,.42-.06.22-.22.1h-.23l-.46.08Zm-6.81,4.84.08.09.36.06.72,0,.09-.12v-.24l0-.29v-.67l0-.19-.13-.08h-.22l0,.18-.59-.06,0,.12,0,.63-.06.22-.2.32Zm-.49-.66.26-.26,0-.15-.08-.09-.1,0-.14.16-.1.22.06.15Zm3.6-6.13.2-.08.05-.12-.08-.25-.19-.19-.18,0-.23.2,0,.14.1.14Zm-.84,1.19-.08-.11-.05,0-.36.52-.23-.09-.18.17.18.6.31.15.18.56.32.16.33,0,.2-.06.06-.3,0-.39-.08-.21,0-.33-.13-.3-.11-.12Zm1,2.77,0,.25,0,.29,0,.09.28.42.23-.09.35-.27.41.34.3.09.21-.48.29-.17.08-.29.08-.08.28-.09,0-.38.07-.27,0-.37,0-.23-.06-.19-.23-.11-.24,0-.26.18-.45.21-.32.13h-.18l0-.21-.13-.06-.35.07-.12.12,0,.18-.05.1-.1.31-.07.54Zm.3,41.15.09,0,.08,0h.1l.09,0,.18.08.1-.07.11,0,0-.18v-.25l0-.13-.06-.07-.2-.17-.2-.23-.3-.24-.09-.14-.1-.17-.11-.14-.2-.21,0-.06h0l-.19.09-.11.2-.06,0-.09.09,0,.14.09.3,0,.08,0,.11,0,.1.25.42.05,0,.07-.08.06,0,.12.07.1,0,.11.06.07.2v.14l0,0Zm5.13-21.8h-.11l-.12.05-.22.23-.22.19-.87.27-.51.28-.18,0-.28,0-.22,0-.41-.19-.2,0-.34.06,0,0-.12.16v.43l0,.12-.05.07h-.13l-.07-.14-.11,0-.3,0-.15.12-.08.31-.23.15-.4.14-.22.13h-.11l-.1.06-.21.29L2084,66l-.33.21v.16l0,.1-.28.32-.07.19-.08.36,0,0-.28-.11-.2,0-.09,0-.13.09,0,.08,0,.19,0,.12-.28.52h-.08l-.09-.15L2082,68l-.12-.08-.12,0-.1.09-.1.16v.12l0,.11.13.2.31,0,.09.14.06.06-.26.21-.28.36-.23.48-.07.1,0,.13.05.12.08,0h.18l.18.16-.06,0-.61.16-.07.05-.29.8-.09.19-.09.11-.09.21-.08.25,0,0-.21.05-.19.16-.2.22-.1.07-.08.11.07.23.34.51-.07.19.15.42.25-.21.19-.1.22,0,.25.2.25.11.44,0,.18.1.19.06.19,0,.3-.2.16-.44.3-.35.07-.15-.07-.29-.16-.23,0-.08.13,0,.14.16.05,0h.09l.08-.12,0-.15,0-.15-.07-.26V72l.62-.39.17-.33,0-.21,0-.13-.08-.32-.05-.15,0-.12.36.13.11-.08.05-.08,0-.15V70l0-.19,0-.09.33.27.07,0,.07-.1,0-.09,0-.11v-.18h.21l.09,0,.14-.15.07-.14.13-.13.05-.11,0-.14-.2-.09,0-.13.18-.17,0,0,.11,0,.06-.05.11-.15.09-.19.2-.21.09-.22.1-.12.12,0,.12,0,.42-.39.9-.55.25-.1.32-.24h.11l.44-.18.45-.26.42-.19.38-.25.62-.3.34-.24.22-.09.21-.14.22-.21.37-.29.37-.19.05-.11.31-.53.32-.49,0-.15,0-.19.05-.2,0-.21,0-.11-.16-.33-.19-.26-.43-.23-.34-.09-.11,0-.25.18-.4.16-.45.42-.26.3-.09.23-.09.3-.1.14h-.11l-.1,0-.2.2-.11.07Zm-7.49-18.65-.06.14.07.13.09.27,0,.15v.22l.06.74.05.19.05.1.38.19.14-.1.2-.4.08,0,0-.25v-.27l.1-.11.79-.14-.13-.25-.13-.15-.45-.27-.89-.06-.41-.1Zm3.46-2.49.29-.12.31-.36.09-.23-.11-.32-.8.09-.4.43-.07.1,0,.08.25.17Zm1.57-4.37,0,.08.29.16.59.08.12-.08.12-.26,0-.09,0-.15L2088,37l-.47.08-.17.17.38.13Zm-3.33,9.63.17.11.06.08,0,.08.12,0,.33-.17.21-.2-.1-.48-.24-.19-.5.35-.05.06,0,.31ZM2051,115.31l.11-.33v0l-.08-.09-.1-.07-.06-.14h-.45l-.18-.06-.18-.09-.12-.06-.1-.06-.05-.07-.09,0h0l0,.25,0,.28-.17,0h-.1l-.11-.06-.09,0-.07,0,.24-.32.09-.16h0l-.05.09-.16.21-.14.17-.12.07h-.26l-.13.06,0,.15v.12l-.07.19-.1.14-.14.14,0,0,.26,0,.26,0,.42,0,.44,0,.45,0,.5,0,.52,0h0l0-.08,0-.14v-.11l0-.11Zm28.12-34.47v-.16l0-.08-.06,0-.07-.16-.09-.21-.11-.1h0v.14l-.1-.08h-.1l-.2.08,0,.1v.11l0,0,.12.09.12,0,.17.2.05.19,0,.08.11.09,0,.12v.12l.1,0,0,0,0-.08,0-.1.12-.27Zm40.94-34.71-.43.09-.65.26-.13,0-.11.07-.28-.07-.33,0-.1.18,0,.16-.05.06-.27-.35,0,0-.12.29-.09.13-.34.36-.09.59-.2.39-.17.28-.41.36-.31.69.19.19.19,0,.25.06.43.25.09.47.15.44.13.13v.25l0,.07.13.2.21.16.1,0,.28-.24h.09l.16.42.09.05.5-.07.08.06.35.09.06.1.05.15.29.31.29.2h.12l.2.08.14,0,.21.12.12,0,.37-.14.57-.08.1-.09.36-.52,0-.21-.08-.44-.06-.05-.21-.11-.19-.48-.25-.33.06-.06h.05l.21.15h.14l.13-.23,0-.31,0-.39v-.14l0-.12,0-.27V49l0-.12,0-.09.07-.35.14-.2-.11-.38-.12-.26-.08-.11-.18-.11-.05-.16-.1-.08-.07-.16-.39-.16-.25,0-.06,0-.06.19,0,.29-.14.37-.07.05-.19-.14-.18.25-.14.37-.06.11-.06-.07,0-.4.13-.24,0-.31.09-.26.1-.1-.1-.38-.21-.34-.08-.06Zm-.92,18,0-.16-.08-.06-.24-.11-.11.13-.33-.08-.18.17-.2-.15-.05.1v.19l.34.08.15.13.24,0,.18.12,0-.21v-.13l.12-.09Zm.26-.52,0,0v.08l-.08.26v.2l0,0,0,0,0,0,.11-.15.07-.25v-.05l-.05-.11Zm2.83-14.82,0,.36.21-.06.15-.29-.15-.07-.06-.09-.11.06Zm-2.43,13.5,0,.24.08.15.1,0,.05-.06-.19-.43Zm9.49-2.63-.1-.07h-.11l-.09.24,0,.2h.1l.24-.11v-.13l0-.09Zm-6.77-5.77v.27l0,.18-.05.15,0,.15-.07.41,0,.19-.32.48-.12.25-.1.42-.14.21.1.16.1.11.32.09.22-.08.42-.32.46-.43.15-.22h.45l.45,0,.41-.09.05.11,0,.05h.06l.19-.31h.66l.54-.35.2-.06.21,0,.08-.06.44-.68,0-.43,0-.34-.05-.32,0-.22-.05-.18-.12-.12-.13-.05-.22.09-.17-.21,0-.21,0-.2-.05-.06-.28-.17-.09-.24-.07-.3-.11-.13h-.12l-.22.12-.22.26-.11.08H2125l-.09.2-.09.31-.15.38-.16.17,0-.2.27-1.11,0-.34.09-.38.05-.09.11-.05,0-.09-.05-.16-.24-.3-.35-.21-.11,0-.06.09,0,.19v.31l.07.28-.12,0-.11-.06-.09-.24-.08-.29h0l-.11,0,0,.06,0,.19,0,.29-.21.1-.11.14,0,.24-.09.16,0,.13,0,.36-.06.08-.06.13,0,.26v.13l0,.41.05.11-.07,0-.24-.07-.09,0-.1.16-.12.35,0,.22Zm5.54,1.95.19-.17,0-.08h.2v-.13l0-.11,0-.08-.17,0-.1.3-.27,0,0,.2.11.1ZM2116.41,48l.19-.46-.3-.19-.82-.3-.39-.26-.39,0h-.3l-.18.1-.14.26.05.41.23.36.28.24.43.54.27,0,.22,0,.23-.1.21-.17.21-.24.2-.17ZM2110,69.16l.21.06.08-.11.11-.27-.07-.15,0,0-.24.11-.08-.07,0,0-.1.1-.16.09-.06.16.12.15Zm53.49,54.73-.08-.09-.16-.16-.08-.19-.07-.18,0-.17,0-.17-.06-.16-.08-.33-.22-.56-.07-.32-.19-1.08,0,0v-.29l0-.07-.09-.09,0-.08v-.16l0-.16,0-.14,0-.21,0-.4,0-.14.05,0,0-.08,0-.13v-.53l0-.26,0-.13,0-.12-.12-.3-.16-.47v0l0-.1v-.12l0-.12,0-.09v-.08l-.2-.4-.06,0,0,.1,0,.08-.06,0h-.2l.12.21.19.28,0,.11,0,.13,0,.12h0v.09l-.12,0,0,.1.07.08-.05.14-.1,0-.05,0h0l-.12-.12,0,0-.16.06-.11.11,0,.07v.31l0,.15v.38l-.05.36,0,.15-.06.15,0,.13v.5l.05.13.08.09,0,.06-.05,0,.05.07.09.09.12.16.08.13.11.31v.33l0,.15-.05.17,0,.21v.17l.07.29v1.06l0,.19,0,.18,0,.33,0,.14-.1.32v.06l0,.07.13.24.09.26,0,.39,0,.15-.07.13-.06.14,0,.16v.06l0,.26,0,.14,0,.14,0,.15-.13.46,0,.32.08.37v.11l0,.1,0,.07.06.06.07-.11,0-.12.09-.36,0-.13.05-.13.07-.12.09-.07.06,0h.05l0,.06,0,.06,0,0,.21,0,.21,0,.07.11v.15l.05.19v.25l0,0,0-.06v-.08l0-.08.07-.17v-.06l0-.23,0-.23,0-.06h-.11l-.1,0,0-.07-.09-.21-.07-.3-.06-.13,0-.06,0,0-.06,0-.05,0-.07-.11-.09-.2,0-.08v-.2l0-.26.07-.24.3-.93.05-.26.07-.13.12-.09.13,0,.33,0h.08l.13,0,.08,0,.07,0,.15.2.11.11.12.13.08.11,0,.19,0,.06V124l0-.07Zm-55.32-53.17,0-.2.11-.2h-.18l-.13.08-.14.12,0,.09Zm-1.2,1.22,0,0h0l0-.08.06-.06-.09-.11-.34-.09-.23.07-.08.13.32,0,.23.12Zm7.59-26.36.23.12.19.14.1.23.74.42.6.49h.2l.42-.35.22-.27.09,0,.27-.15.83-.14,1.22-.35.11-.17.11-.28-.12-.1,0-.12-.13-.74,0-.13,0-.09.08-.44.1-.22.41-.14.07-.12h.1l0-.37,0-.2-.12-.16-.26-.09-.61-.68-.06-.21-.12-.21,0-.27-.05-.14-.27-.51-.1-.05-.08-.12-.08-.3-.09-.12-.59.06-.09.5-.21.3-.21.14-.22.05-.21.1-.23.19-.24.12h-.13l-.12,0-.27.25-.12.37-.16.19,0,.12-.09.36,0,.17.17.07.45-.13-.26.51-.14.48-.23.48-.31.19-.32.12-.19.33-.16.33.11.48Zm13.63,10.52.54.2h.32l.12.18.12-.11.08-.22-.11-.24-.06,0-.86.1Zm-9.9,4.8.08.13.08.06.22-.11.11,0,0-.06,0-.08.12-.18.13-.24v-.11l0-.21-.62.45-.4.17-.14.15.09,0,.29,0Zm-5.26-20.13,1.15.3.31-.47-.08-.25-.34-.09-1-.09-.15.26v.13l.06.21Zm42.4,26.38.06-.11-.05-.18,0-.13.17-.31,0-.07-.2-.26,0-.13-.06-.26-.08-.17-.08.29,0,.22,0,.27,0,.22-.06.3,0,.12,0,.27.27,0,.19-.1Zm1,.63.2.4.21.25.11,0,.11.11.21.49.08.16.08.1.72.34.1.09.11.06h.11l.1-.09.1-.22.07-.31,0-.24.05-.14.07-.07h.07l.23.25.24.17.18,0,.18-.09.6-.14.21-.09.2-.12.22,0,.1.15.08.18.09.18.09.07.08,0,.15-.06.14-.11.32-.36-.18-.33-.22-.14-.07-.11-.33-.77-.06-.17,0-.24-.06-.75.2-.12.23-.11.36,0,0,.2v.1l-.11.23-.12.1,0,.35,0,.41.08.25.1.18.23.37.21.12h.21l.36.14.18,0,.18-.15.44-.6-.07-.2-.08-.15.07-.19.21-.27.31-.15-.05-.12,0-.08-1.45-1h-.11l-.23.14-.12,0-.24-.05-.23-.14-.2-.15-.42-.54-.24-.24-.24-.11-.17.28-.24.28,0,.1,0,.14,0,.23v.62l-.05.18-.06.08h-.15l0,0-.05-.07-.05-.1-.1-.4-.1-.1-.12,0-.09-.07-.28-.47-.2-.23-.29-.26-.1-.1-.08-.2-.09-.14-.1,0-.35.27-.21.06-.1.13-.06.13,0,.07-.19,0-.14.1-.06.13,0,.17.08.33.11.24-.32-.08-.09.12,0,.72.07.76h-.11l-.17-.06,0,.14v.2l0,.13Zm21.81,14.06.06,0-.07-.17-.07-.11-.11,0v.23l.07.09.13,0ZM2167.69,62.3l.06-.28.13-.14-.63.14-.25.28-.05.11.69,0,.05-.07Zm-2.1,6.1.2.23.11.05.34.09.1.1.22.26.11.11.19.09.69.1h.5l.23-.08.45-.25.23-.19.06-.09.17-.76-.07,0-.06,0-.07.12-.07.08-.11-.13-.12-.1-.17-.2-.42-.09-.52-.07-.18.13-.27,0-.11-.13v-.14l0-.1v-.18l-.07-.1-.86-.1h0l-.35.27-.25,0,0-.21v-.3l-.2-.27-.09.09-.09.28-.07.32-.07.36,0,.35.52.31.2.18Zm5.5-3.93,0-.16,0-.08,0,0-.15.08-.07.12.21.22.09-.14ZM2195,81.79h.07l.26-.15.46,0,.22-.22.11,0,.24.06.21.14h.09l.23-.06.58-.21.43-.08.23-.07.27-.28,0-.15,0-.13,0-.05-.21-.17-.15-.14-.07-.14-.07-.08-.08,0-.12-.14-.08,0-.41-.1-.11,0h-.1l-.14.07-.13,0-.13,0h-.14l-.14.08-.14,0-.11,0-.16.17-.15.05-.29.36-.32.26-.05.16-.14.2-.05.17,0,.13.13.5Zm-16.29,4.39v.22l0,.08.17.09.09.13v.07l0,.17h0l0-.07v-.1l0-.12-.09-.24,0-.22v-.26l0-.2,0-.12.15-.06.06-.17v-.24l-.09-.11h0l-.09.11-.08.15-.2.19,0,.16.07.19,0,.36Zm6.33-1.52.14.16.19.13.52.25.27,0,0,0v-.07l0-.28,0-.1.08,0v-.21l0-.07-.94-.36-.15,0-.13.09-.18.2,0,.08,0,.09,0,.05Zm-51.5-21.85.13,0,.09.21.13.14h0v-.12l0-.07,0,0,0-.17-.14-.27-.08-.09-.1.1-.25-.06,0,0,0,.09.14.22ZM2155,71.47l.17.2.07.21.31.43.07.15.07-.1.05-.24-.2-.35-.38-.44-.22-.11v.18Zm-10.12,1.11h.06l.1-.12,0,0-.08-.11-.11,0-.08,0v.06l0,.12Zm14,1.38.1.23h.13l.09,0,.34-.24.25-.05.08,0,.39.18.39.25.49.1.19.09h.23l.23,0,.33.08.24,0,0,0,0-.68-.05-.21-.06-.15-.65-.77-.19-.16-.23-.15-.23-.06-.23,0-.35.11h-.11l-.1,0-.09.12-.09.17-.17.49-.1.21-.19.27-.21.08-.22,0-.22.07Zm-18.14,1.22L2141,75l0-.06-.15-.15-.1,0-.19,0-.11.1.14.25Zm18.81-2.84h.09l.47-.27,0-.17,0-.4,0-.14,0-.11-.09-.08-.08,0-.41,0-.1,0-.1.07-.08.18.07.6Zm-53.43-.52.13.07.09-.12,0-.07-.08-.12-.08,0-.13,0,0,.07,0,.1.09.08Zm51,7.78-.49,0-.11.06h0l0,0v.11l.17.14.07,0,.06,0,.05,0,0,0,.09.12.09,0,.23-.24,0-.11-.07-.11,0,0Zm-44.75-19.37.2,0,.14-.27v-.11l-.06-.13-.3,0-.08.12,0,.19,0,.07.11.11Zm71.19,54.57-.07-.09-.15-.25v-.13l0-.11-.06,0-.26,0-.09.07-.08,0,.23.17.07.09v.09l0,.08.11.15.08.11.06,0,.07,0,0,.1.12.11V115l-.06-.11-.09-.07Zm-11,8.37v.12l.1,0,.08-.06,0,0,0-.17.07-.14,0-.09-.07,0-.2.38Zm-1.44,2.2-.06.1,0,0h0l.05-.08,0-.06Zm2.72-4.17-.11.1-.1.3-.08.11-.23.05-.1.11h-.1l0,0,0,.08v.17l0,0,.1,0,0,0,.07-.1.08,0,.17,0,.12-.14.11-.22.05-.15,0-.17,0-.14-.09,0Zm.35-.15-.15.11,0,.08,0,0,.12.09h0l0,0,.08-.13v-.14l0,0Zm-69-53.62.07.16,0,0,.15-.14,0,.2.07.06.07-.34h.12l0,0v-.13l0-.12v-.35h-.13l-.1.06v.32h-.08l-.12-.16-.19.31,0,.1,0,0Zm68.23,53.69.08,0V121l-.07,0-.09,0V121l0,0,0,0Zm-3.13,5.19-.11.13-.16.19-.14,0v0l0,0h.06l.17-.15.27-.33h-.05l-.07,0Zm1.81-2.47,0,.1-.09.09v0l0,0,0-.07.11-.09,0,0,0,0Zm-7.45,7.27,0,0v0h.05v0h0l0,0Zm.27-.27h0v0Zm-.12-1.09h-.09l-.16.29,0,0,0,.07-.07.09,0,.07-.08.09-.19.17,0,.07v.1l.11.09,0-.23.16-.12.11-.14,0-.07.18-.18.06,0,.11,0,.13-.12h.07l.05-.08-.19,0-.14-.1Zm-.26,1.33h0v0h.05v0Zm2.67-2.57v-.07l0,0h-.07l-.08.05-.27.27-.18,0h-.07l-.08-.15h0l-.05.11,0,.1-.11,0-.1.13-.1,0-.11.15-.17.12-.09.12v.13l-.15.13,0,.06,0,.14.19-.16.1,0,.1-.16.23-.2,0-.07v-.08l0,0,.11,0,.12,0,.09-.11.23-.19.14,0,.18-.09h.17l0-.05,0-.07,0-.05Zm1.37-1-.32.23-.15.19-.12,0-.2.33h.08l.14-.07.18-.18.06-.05.1,0,.13-.11,0-.11.3-.26h-.19l0,0Zm-3.21,3-.19.06v.09l.07,0,0,0,.17-.08,0,0Zm3.54-22.9-.07.11-.11.08v0l0,0,.07,0,.13-.14,0,0,0-.07Zm12.83-.11h0l-.29.23-.41.15V108l0,.08,0,.23-.14.28-.14.11v.1l0,0,.15-.17.3-.25.3-.17.31-.08,0-.15,0-.26-.05-.19Zm-81.55-58.33.28.17h.16l0,.26.14,0,.72-.06,0-.12-.18-.16-.82-.44-.09.14-.11-.18-.1-.07-.09.1,0,.1.08.24Zm0,24.32-.06.1.14.15.39.12.09,0-.46-.36Zm-.29.3.07-.07.13-.22v0l-.1,0-.33.11-.18.21,0,.14.15-.08Zm-1.29,1.76.14.08.05.06,0,0,0-.11,0-.07v-.12l.09-.2.2-.1L2099,75l-.11,0-.18,0-.19.07-.06.11,0,.16.08.15.23.21Zm4.3-33.07.86-.21.29-.11,0-.09.05-.26-.14-.13-.43-.15-.55.09-.1.21-.12.44,0,.08.08.13Zm-8.28,32.6.17,0h.07l.27-.15.2-.08.43-.13.25,0v-.16l0-.19-.13-.19-.09-.09-.11-.25-.09-.1-.1-.08-.08,0-.54.11-.19.11-.14.28,0,.43,0,.18-.05.13v.13l.11.15.07-.06Zm8.08,1,.51.13.07,0,0-.15v-.46l-.12-.21-.05-.17-.17-.18-.47.64,0,.13,0,.15.17.16Zm82.09,39.12-.16-.13-.11,0-.07-.1h-.07l0,.1.17.16.37.29,0-.08-.14-.2Zm-83.47-38.54-.11.24-.1.14-.23.23,0,.14,0,.06.22.05.45,0,.14-.05.21-.26.13-.07.2-.2v-.07l-.07-.15-.49-.24h-.16l-.18.21Zm55,37.89-.18.14-.08.08,0,0,.13,0,.06.06h.08l.11-.28h0l-.07,0Zm1,.07-.09-.07,0,0-.31-.14,0,0-.1.24-.05,0-.1.18,0,.16h0l.17-.13.06.07.13.28,0,0,.07-.05.07-.08.08-.07,0,0,0-.13.08-.14.1-.07,0,0Zm48.13-21-.1,0h-.33l0-.08,0-.08,0-.08-.05,0H2205l-.12.05-.11.06.06-.09.06-.07,0,0,0,0-.35-.39-.2-.15-.2-.19-.19-.34-.21-.26-.22-.1-.22,0-.16-.06-.16-.08-.36-.09v.07l.39.13,0,.06,0,0-.09,0-.29,0-.09,0-.08-.1h-.05l0,.06v.14l0,.11-.08,0-.08,0v-.24l.1-.19.05,0v0l-.31-.09-.09-.07-.09,0-.18.09h-.52l-.1,0v.07l0,0,.08,0h.08l.06.09.12.05.06.09,0,.16,0,.11v.12l0,.2-.07.09-.08,0,0,.12.09.09.16,0,.07.08.07.13-.06.15-.06.13,0,.06,0,.09,0,0h0l0-.35-.06-.21-.11,0-.05,0-.1.18h0l0-.06,0-.13,0-.15,0-.1-.11-.11,0,0-.18,0,0,0,0-.24.09-.14V91.8l0-.1-.06-.09,0-.22v-.26l.06-.16,0-.19-.07-.14-.07-.07-.06.06-.06.08,0,0-.2,0,.13-.21v-.18l0-.11,0-.09,0-.18L2199,88.91l-.25-.14-.11-.12-.1-.06-.11,0-.06,0-.05-.05.05-.1.06,0-.15-.17-.52-.45-.11-.06.08.12.39.35.06.1-.12.13-.12.05,0-.14,0-.16-.05-.09-.14-.11-.21-.09-.2-.11,0-.12v-.17l.12.15.07,0-.14-.23-.17-.2-.37-.18-.07-.07-.11-.15h0l-.07,0-.19-.09-.18-.11-.13-.08-.54-.64-.3-.09,0-.08,0-.09-.06-.07-.37-.17-.47-.11-.5-.31-.43-.09-.47-.33-.28-.24-.18-.1-.15,0-.42.12h-.47l-.43-.07-.35,0-.19,0-.28-.15-.07.06-.07.27-.21-.11-.17-.15-.29-.13-.54-.09-.67-.2-.35,0-.35,0,0,.46,0,.22-.13.28-.15.18,0,.15.39.12.12.51.16.33.1.33v.23l-.42.56-.44.07-.42,0-.18-.34-.09-.41-.34-.21-.33-.17-.15,0-.11-.08-.07-.46-.07-.35-.1-.12-.09-.2-.08-.08-.21,0-.52.49-.17.15h-.06l-.77-.12-.21-.11-1.15-.06-.32-.29-.2,0-.22.09-.19,0-.28-.06-.23.08-.53.09-.19.1-.21.18-.37.43-.05.21v.26l.07.35v.41l-.06.14-.12.07-.12.43-.12.23-.23.06.13-.17.12-.12.2-.64,0-.2-.16-.14-.09-.16-.05-.61,0-.32,0-.39-.16-.13-.57-.2-.26-.15-.1-.23.1-.32v-.24l.05-.21.09-.17,0-.25,0-.31,0-.22-.1-.28-.07-.12-.35-.4-.6-.4-.61-.3-.54-.1-.71,0h-.72l-.28.17h-.52l-.57.17-.57.26h-.31l-.61.12h-.27l-.69-.42.22,0,.09-.06-.31-.56-.16-.19-.41-.25-.16,0-.13.05-.54.27-.13.12.26-.32.13-.14.13-.2,0-.13,0-.06-.5,0,0,0-.1-.17,0-.06-.34-.19-.24-.07h-.24l-.05-.07,0-.08v-.06l.08-.1.21-.08.56,0,.12-.16v-.16l0-.13-.18-.29-.24-.22-.5-.27-.52-.18-.89-.09-.16,0-.12.11-.22.29-.48.82-.27.34-.25.18-.57.15-.1,0-.08-.13,0-.12.05-.11v-.07l0-.14v-.07h.06l.14.09.12,0,.32-.16v-.23l-.08-.14,0-.33v-.09l.05-.06h0l.23.24h.08l.09,0-.21.57h.1l.27-.27.18-.26.19-.34,0-.18-.21,0-1.44.13-.52.26-.16-.06-.12-.2.18,0,.2-.12.18-.23.11,0,.29,0,.24.09.7,0,0-.29-.16-.08-.34-.08-.21-.14-.26-.09-.58-.12-.25-.1-.57-.1-.15-.07-1.35-.07-.5-.21-.19-.22-.46-.1h-.09l0,.06,0,.09.29.39v.27l.09.13-.35.21-.23.08h-.78l-.12.09-.31.42v.19l0,.31h.24l.07-.13.1-.06.48.05.05.06-.16.08-.16,0-.19.45-.26.14.18.08.16.12,0,.55.23.41,0,.2h-.33l-.28.13h-.11l-.18-.32-.21-.21-.1,0-.14.21-.19-.12-.07,0-.11.09-.07.12,0,.18-.07.1v.13l.1.06h.07l.2.1-.21,0-.05.06,0,.07-.15.1.05.09.07.08v.07l0,0-.13-.09-.13-.13-.22-.26-.09-.17-.19-.16-.65-.45-.29-.15-.19,0-.3.06-.19.19-.31.09-.19.15-.1.22-.55,0-.39-.16-.24-.16-.27-.34-.27-.44,0,0,0-.09,0-.22-.06-.16-.09.09-.21.5-.09.24-.12.47-.09.38v.17l0,.14-.12.12-.13.29-.19.56-.12.21-.15.17-.1.07h-.13l-.11-.16-.06-.37-.07-.08-.08.21h-.12l-.24-.16-.24-.33-.24-.15-.34-.82-.15-.3-.09-.25-.19,0-.08-.19.1-.12.26-.11h.21l-.15-.33-.08-.19-.08-.11,0,.22,0,.16-.07.13-.12.07-.51-1-.31-.49-.17-.18-.11-.32.07-.06.37.38.25.19.43.5.32,0,.12-.22v-.45l-.12-.37-.15-.15-.53,0-.12-.12.09,0h.11l.17-.11.28-.28.12-.08,0-.22-.2-.31-.31,0-.07,0,.12-.15.11-.09.19-.23,0-.21H2149l0-.09,0-.16-.15-.14-.13-.09-.31,0v-.1l0-.1-.13-.07-.11-.12,0-.11,0-.07-.2-.12-.66-.21-.07.06-.1.31-.27.32-.2-.18h0l0-.09,0-.14,0-.14,0-.09,0,0-.14.1-.2.06-.09.1-.18.07,0-.24-.76-.63-.23-.13h-.14l-.34.14-.08.08-.13.2-.28-.13-.07.1-.1.34V74l0,.09,0,.18.11.27.11.22,0,.05,0,0-.06.09,0,.18-.1.27-.13.15-.15,0-.35-.2-.08,0,0,.15.21.12,0,.08-.06,0-.14,0h-.26l-.21,0-.13-.2-.13,0H2142l-.33.1-.37-.14-.62,0-.16,0-.3-.27-.43-.17-.49-.41,0-.39.08-.31h.27l.17,0,0-.13,0-.06-.39-.17-1,0-.75-.25-1.07-.09-.48.31-.7.08-.19.17-.32.09,0,.23.16.18.08,0,.08.07,0,.06-.06,0-.12.14-.07.14,0,.28,0,.28-.11.39-.1.17-.09.22.08.21.08.09.22.1.08.07,0,.06-.33-.07-.12-.22,0-.12,0-.2.11-.2.11-.14.1-.34v-1l-.2-.15-.11-.22.19-.4.05-.21-.09-.19-.13-.43-.14-.26-.09-.1-.09-.06.1.42-.08.22-.06.08-.36.11h-.23l-.32-.12-.37-.27-.09-.19-.07-.28.21-.12L2133,72l-.2-.06-.19,0-.07.38-.13,0-.6-.23-.17.07-.19.22-.09.16-.1.27,0,.19,0,.07.31,0,.27-.06.31-.17.07.06.07.1-.09.14-.32.19-.53.51-.2.06-.28-.11-.15.29-.07.07-.48.19-.2,0-.07.14-.12,0-.14.08-.23.19-.35,0-.24,0-.58.12-.15.11-.1.14-.05.19-.08.16-.33.36-.28.14-.24,0,.23-.2.26-.37.47-1.11.45-.07.11-.15.34-.69.1-.1h.45l.41-.23.8-1.12.4-.19.28-.27,0-.14,0-.17,0-.11,0-.1.35-.19.14-.3.48-.29.37-.38.53-.29.3-.39.67-.58.64-1,.1-.57-.15-.19-.19-.12-.1-.29-.08,0-.19.18-.21-.62-.25-.34v0l0,0,.12.06.46.51.24.08.08.08,0,.12,0,.22.08,0,.05-.09.11-.41.12-.57,0-.25-.27.11-.12-.84-.06-.25-.09-.29-.17,0-.09.07.07.1.08.15-.05.16,0,.08-.21.21-.15,0,.06-.09.07-.2,0-.22-.06-.13-.06-.64-.19-.1-.1-.1-.15,0-.18.17.07-.15.07-.24-.15-.29-.14-.2-.17-.07-.19-.26-.26-.15L2132,62l-.45.19L2131,62l-.67.11H2130l-.15-.08-.14.08-.08.23,0,.36-.17.19-.09.05-.43-.05-.3.17-.14-.14h-.24l0-.3h.15l.08.05.28-.63.23-.37.22-.42L2129,61l-.31-.18h-.14l-.07.07-.34-.14H2128l-.3.2-.1,0-.06-.41-.3,0-1,0,.11-.13.54-.17.44-.26.32-.48.3-.17-.07-.24-.08-.17-.17-.16-.37-.1-.32-.19-.14-.25-.58-.34H2126l-.42.43-.21,0-.18.06-.48.5-1,1.31-.21.4-.1.3-.18.16-.07.36v.32l.08.17.08.31-.08.35-.07.24.06.1.2,0,.43.2-.08.18-.26-.16h-.23l-.2-.19-.48.18-.36,0-.33.07-.65-.15-.06.12.15.19.11.19.34.42.15.14.19.4,0,.79-.1.18-.12.26-.06,0-.09,0,.14-.18.08-.39.08-.28-.1-.19h0l-.05-.11-.35-.26-.19-.12-.19-.06-.1-.07-.3.24-.13,0-.17.13-.09.17-.23,0,0,.19L2120,65l-.13-.21-.14.06-.3.33-.35.15,0-.11.06-.26-.09-.06-.53.3-.17.21-.09-.08.31-.45.08-.27-.14-.12-.32-.1h-.2l-.3.1-.42-.15-.07.17-.11,0-.26-.08-.24.08-.18.18-.26-.17h-.1l-.14.28-.12-.19-.11.37,0,.26.09,0,.08,0,0-.12.06-.05.21.22.06-.12.09-.09.11.13.43-.14-.07.17-.49.22-.87.29-.18.11-.52.09-.34.28H2114l-.75.22-.55.49-.26,0-.53.37-.21.29-.77.58-.46-.22-.15.07-.08.21v.16l.19,0,.14.08.16.14,0,.25-.35.58-.17.21-.19.12-.42-.47-.07.21-.06.1-.16,0-.09.33.3.06.29.15.25.22.18.25.2.16.11.13-.3.13-.22-.3-.12-.1-.13,0-.19.09-.17.37.16.12.36.12.12.17.47,1.06.12.11.15,0,.07.07-.19.18-.07.17-.16.3-.69.15-.2.11-.06,0-.08.11-.06.09,0,.22,0,.14.14.13.55.57,0,.06-.15-.1-.19-.18-.19-.24-.26-.18v-.42l0-.11.25-.28.25-.14.3-.32.31-.35-.06-.12-.07-.09-.27,0-.57.12-.34.12-.15.29-.23,0h-.11l-.31-.15-.3.14-.69.11-.11.07-1.6,0-.32.06-.82.24,0,.17,0,.14-.13.19-.06.19,0,.21v.19l0,.24.05.22.11.12.11.07.08.24-.06.28-.09.32,0,.14.06.2.07.39,0,.1.25.3.17.1.28,0,.19.08.28.18.08.08,0,.08.07.32,0,.1.3.44.1.07.41.08.13.14.18.42v.1l0,.16,0,.15,0,.09-.06.13-.18.56-.11.49.17.33.23.62.06.26.08.35,0,.22,0,.14-.15.2-.19.06-.2.12,0,.16,0,.17,0,.13,0,0-.11,0-.1,0-.08-.13-.08-.17.06-.19.16-.33.1-.48,0-.32v-.34l0-.22-.13-.17-.12,0-.13.14-.13.56-.18.41,0,.17V83l0-.32,0-.24.1-.3.06-.28,0-.21-.07-.33,0-.16,0-.11,0-.48.16-.09.39-.37.05-.09.12-.32.06-.12.06-.19-.12-.15-.11-.09-.21,0h-.19l-.44.16-.38,0-.14-.09-.6-.66,0-.25,0-.11-.06,0-.21-.17-.48-.21-.49-.48-.86,0-.24,0-.24.15-.21.3-.1.08-.15,0,0,.11,0,.15.07.1.27-.12.22.06.11.15.09.27,0,.14-.37.2h-.21l-.45-.48-.18-.09-.41.08-.28.24-.08,0,.06.24.11.43.08.25.12.13.4.31.22.1.34.29.21,0,.19-.07.28.17.16.51.09.17.09.09.13,0h.07l.08-.07h.18l-.06.15-.07,0-.38.06-.19-.05-.24-.16-.44-.51-.54,0-.07.15-.17-.21-.58,0-.35-.13-.37-.22,0-.11,0-.15.13-.18.05-.12,0-.35-.24-.47,0-.43.11-.07.14-.56.09-.19.05-.06,0-.13-.05-.16,0-.1,0-.23v-.38l-.12-.32-.09-.35-.2-.17h-.2l-.07,0-.07.08.1.32.1.28,0,.22,0,.39v.48l0,.19-.05.16-.18.21-.29.24-.16.11-.34.13-.25.21-.54,1.17.06.17.2.19.13.16.06.14.15.42.53,1.17,0,.2-.13.37-.24.48-.1.26-.24,1v.26l.09.24.16.3.05.22-.1.58,0,.14.13.07.36-.07.41.13.22-.06.34-.32.13,0,.41,0,.59.31.63.4.13.14h.17l.12.69.12.37,0,.27,0,.29-.12.06-.1,0-.09.08-.11.45,0,.24.06.39.53.18.37.09.26,0,0,.05,0,0-.3,0-.56,0-.2,0-.09,0-.09-.13-.16-.13-.07-.09-.14-.1.07-.4v-.93l0-.38-.12-.32-.34-.46-.12-.31-.14-.21-.13,0-.19,0-.48.19-.43.1-.5.29-.09.23-.09.6.12.29.11.21.1.36,0,.22v.22l0,.32L2099,90l-.56.68-.08.2-.09.58-.09.21-.25.32-.16.13-.86.57,0,.12-.05.41-.24.18h-.14l-.32-.2-.19-.06h-.2l-.74,0-.33-.13-.26-.2-.27-.06-.2-.15-.05-.15,0-.19,0-.1,0,0,.07-.07.12,0,.49,0,.12-.08.07,0,.13.18.18.16.14,0,.13-.13h.05l.05,0-.11.1-.12.08,0,0,0,.1.16.13.15.06.2-.06.12-.13.25-.19h.18l0-.18-.1-.27-.08-.2.28,0,.17-.16.69-1.38.32-.26.11-.18.08-.24,0-.26,0-.29v-.22l.12-.29.18-.34L2098,88l0-.13,0-.11-.33-.33-.35-.28-.12-.15-.1-.24,0-.29v-.19l0-.58.06-.28,0-.82-.06-1-.06-.28.09-.19.08-.16,0-.15,0-1,0-.39-.11-.53-.47-.45-.19-.43v-.16l0-.11.2-.18.14-.25.09-.37.18-.57.05-.2.11-.79,0-.43,0-.64-.17-.17-.17-.14-.32-.12-.15,0-.29-.26-.11,0-.78.07-.45,0-.26.06h-.14l-.08,0v-.11l.05-.08,0-.07h-.07l-.21.08-.32.9-.19.85-.21,1.14-.13.48-.18.5-.29.39-.38.4-.25.18-.33.19-.14.41-.11.16,0,.12.14-.07-.08.29-.09.18v.1l0,.13.12.06.29-.12.06.11.07.17,0,.66-.09.57v.2l0,.13,0,.17L2092,84l-.07.07-.13,0-.09.46,0,.27V85l0,.13.05.15,0-.12,0-.15.09-.1.51.29.14.14.22.13.06.16,0,.48.22.43.17.26.11.1.09,0,.15-.1.2,0-.1.33-.18.64-.3.55-.13.08-.2-.22-.26-.18-.13-.09-.08-.17-.45-.44-.14-.31-.23,0-.31-.15-.05,0-.26-.19-.25-.11-.07-.14-.19-.11-.19-.07-.27-.18-.12.06,0-.2-.31-.29-.37-.26-.77-.37-.67-.19-.8,0-.69-.23h-.1l-.09.07-.23.34-.26.1-.1.17.15.35.3.9.18-.09.07.41-.11.24-.16.27-.14.15-.3.08-.24,0,0,.26.07.23,0,.1,0,.13,0,.06,0,0-.09.07h-.11l-.27-.12-.2-.11v-.43l.1-.19.07,0,.07-.07-.14-.29-.1-.12,0-.19v-.09h-.13l-.52.22-.1.21-.06-.14-.68.63-.29.22-.2,0-.27-.13H2082l-.22-.07-.11,0-.23.16-.23,0L2081,88l-.21.27-.06.43-.13,0-.14-.22-.08,0-.08,0-.15,0H2080l-.12.08h-.05l-.37-.07h-.1l-.13,0,0-.11,0-.08.21-.06.11-.09.13,0,.09-.13v-.25l-.14-.25.07-.19.05-.23,0,0,0-.08-.05-.07-.11,0v-.06l.07-.05.47-.1.1-.07-.28,0-.35,0-.36.21-.68.47-.31.31h.08l.11,0,.09.22.07,0-.05.15-.18.11-.07.07-.07,0-.06,0-.07,0,0-.11.06-.11-.15-.18-.07,0H2078l-.35.16-.26.19-.24.09-.22,0-.13.08-.26.24-.17.11-.28.27-.71.48-.19,0-.1,0-.08-.06-.05.05.06.12.1.23,0,.12-.16,0-.35.11-.37.16v.16l0,.15-.06.24-.07.19,0,.55-.05.16-.15.11-.74.24-.13,0-.06,0,0,0-.14-.06h-.19l-.09,0-.1-.09-.12-.23-.18-.47-.39-.23-.18-.16,0-.15,0-.15.4-.52.14-.16.6-.15h.23l.24-.07v-.29l-.24-.37-.25-.43-.24-.47-.35-.17-.4-.08-.83.1-.12,0-.53-.33h-.06l-.07,0,0,.1,0,.07.71.7,0,.19,0,.24v.11l0,.1v.18l-.17.8-.17.56-.05.26,0,.18.07.16.2,0,.2.16.11.22,0,.16v.33l0,.29-.15.44-.09.17-.12.4.05.28v.11l0,.12-.08-.09-.07-.11-.09-.1-.1,0-.1,0-.08,0v-.11l.09-.18,0-.09-.05-.07L2070,93h-.21l-.19,0-.19,0-.14-.14-.12-.07-.1,0-.11.13-.28.47-.28.31-.37.24-.28.07-.08.06-.16.27-.17.2-.47.35,0,.14,0,.19.05.22.09.21.23.42.12.14.09.22.06.25,0,.06-.19-.07-.13,0-.2.18v.07l-.07.17h-.17l-.48-.3-.4-.16h-.07l-.09-.08,0-.06h-.27l-.1,0-.44-.5-.36-.19h-.09l-.15,0-.09.4-.12.12h-.11v.2l.05.12,0,.09.14.14.25.42.13.17.1.06h.12l.29,0,.1.07.1.1,0,.24.08.24v.14l-.1.16-.31.12-.17.16h-.07l-.36-.2-.25-.07-.32-.12-.06-.07-.14-.32-.32-.32-.14-.09-.2.07-.13,0-.23-.17-.16-.25v-.32l.05-.07,0,0-.11-.09v-.25l0-.16-.12-.39-.12-.24-.12-.26.12-.14L2062,95l.09-.34,0-.12,0-.11v-.22l-.09-.2-.27-.4-.26-.22-.51-.22h-.14l-.05,0,.11,0,.11-.08,0-.14-.12-.07-.11,0-.17-.1,0-.1,0-.07,0-.18-.24,0-.06,0v-.06l-.16-.2-.21-.2,0-.21-.15-.15-.13-.11-.2,0-.08-.07.47,0,.48.16,0,.06,0,.09.14.27.14.15.3.18h0l.07,0,.15.08.12.1h.24l.28.12,0,0,0,0,.08.14.11,0,.2-.12.5.42.14.08.79.21.37,0,.19,0,.29.11.31.22.25.07.46.08h.23l.59-.15.75-.38.39-.34.61-.88.08-.21.07-.49v-.21l-.09,0L2068,91v-.29l-.07-.14-.08-.65-.19-.07-.1-.07-.12,0-.13-.1-.16-.27-.16-.18-.13-.25-.08-.09-.06,0,0,.13,0,.13-.23,0-.68-.63-.12-.05,0,.06-.21-.09-.07-.15-.58-.7-1-.79-.71-.49-.52-.21-.05,0,0,.09-.16,0-.13,0-.47-.2-.12,0h-.5l-.05,0-.18.41-.09.09-.18.07,0-.12.12-.09.08-.3v-.13l0-.16v-.13l-.07,0-.11,0-.26.16,0,0,.07-.16,0-.06-.11,0-.23-.07-.23,0,0-.19-.15-.12-.07-.09.08-.11.53.18h.15l.07-.06,0-.12V84.8l-.06-.08-.35-.14-.16-.17-.38-.23v.11l.06.21,0,.07-.11-.06-.09,0-.11.25-.11.07-.09,0-.37-.21-.17,0,0,.35v.12l0,.12,0,.06-.07,0h-.16l-.22-.13L2058,85h0l0,0,0,.13v.1l0,.1,0,.1,0,.08-.08.11-.15.08-.41.17,0,.07-.14.45,0,.06,0,.06-.14.07-.06,0-.19.13-.12.08-.14.06,0,.09h.23l0,0,0,0v.07l0,.1-.25.6V88l.08.34.12.4.35.18.26.14.16.33.28.43.14.15V90l0,.3-.18.29-.16.24-.17.29-.14.25-.14.3,0,.1v.09l0,.1.18.35.07.19.09.19.07.22.05.19.07.18,0,.1.08.13.09.2,0,.15.14.53,0,.14v.1l-.06,0-.14,0-.14.06v0l.1.12-.09.21v.3l-.09.16v.07l0,0,.17,0v.21l-.09.06-.09.09,0,.08v.07l0,.13.06.14.07.09.27.08,0,.07,0,.1v.09l-.12.19v.07l.05.18.06.16.26.18.09.1,0,.07v.26l0,.12-.09.15-.18.31-.19.11,0,0,.06.09.34.39.22.18.29.24.19.18.06.14.08.15.1.12.06.11,0,.07v.07l-.09.22,0,.17-.09.25-.09.17-.23.32-.35.38-.08.12-.16.2-.27.41-.07.09-.22.32-.11.1-.08.09-.22.3-.24.23-.23.21-.07.11-.09.08-.1.08,0,0-.23.29-.33.39.35-.07.31-.2.06.05.07.08v.13l0,.09-.12-.09,0,.11.11.2.16.08.23.26.28,0,.19,0h.14l.13.14.1.18.08,0,.1.08v.1l0,.06-.42-.15-.48-.09-.07.08-.06.11,0,.08,0,0-.07,0h-.11l-.14,0-.07-.06-.06.07,0,.14-.08.08-.12-.06-.07-.11H2056l0,.1,0,.14,0,.17,0,.13,0,0,.06.09,0,.06,0,0-.07,0v0l0,0h-.07l0,0,0,.15-.09.26-.12.19-.1.1-.05.08,0,.1v.09l.09.53v.1l0,.09,0,.1,0,.09.06.14.07.22,0,.13,0,0,0,0v0l0,0-.19.07,0,.06,0,.07-.09.1,0,.09,0,.11v0h.11l0,0,0,.13.13.11.11.09,0,0v.21l0,.06,0,.13v.13l-.06.23h0l.14,0,0,0,0,0v.14l0,.06.05.1v.08l.09.09v.06l0,.2,0,.12v.09l0,.12,0,.08.13.14h0l.07-.06h.16l.06,0,.05.1.05.08,0,0,.14-.1.08,0h0l.18.08.09,0v.1l0,.07v.09l.05.09.06.07.14-.11.05,0h.06l.07,0,0-.06.05,0h.28l.2.09,0,0,.1.11,0,.06,0,0,.06,0,.07,0,.05,0,0,0,0,0v.28l0,.06,0,0v.09l.06.09.08.14v.14l-.1.17,0,0,0,.09v.12l.17.14.13.08,0,0v0l-.07.15v0l.1.06.06.1,0,.15.1.15.2.14.15.08,0,0,0,0,0,.1,0,.13,0,.07.06,0h.16l.19,0,.23.14v.06l0,.06V117l0,0,.2.15,0,0v.13h0l-.06,0-.1.06,0,.1-.16.12-.1.06h-.08l-.19,0-.07-.07,0,0-.07,0h-.23l0,0,0,.07-.06.12,0,.06,0,0,.05.09.08.11.09.1,0,.06v0l0,0v.1l.08.13,0,0v.33l0,0,0,0,0,.06.06.14v0h0l.09,0,.09,0h.14l.09,0,.06,0,.07-.24,0,0,0,0h.06l.13,0,.15,0h.09l.22-.13.13,0,.15,0h.15l.12,0,.07.05.1.09.08.15.09.26.27.3v0l0,0-.13,0-.11,0v.05l0,0,.05.08v.2l0,.08,0,0v0l0,0v0l0,0h.23l.12,0,.09,0h0l.1,0,.11,0h.07l0,0,0,.09,0,.09,0,0h.1l0,0,0,.05v0l0,.07,0,.15,0,0,0,0v.07l0,.06,0,0,0,.11.07.11.06,0,0,.1.07,0,.12-.09.08,0,.11,0,.1,0,.07.05.05.09.06,0,.06,0,.12,0,.05.07.06,0,.07,0,.06-.07.21-.07h.13l0,0,.07,0,.08,0h.08l.07.1.07.07,0,.11.09.16.22.2.09.07h.06l0,0v-.12l0,0h0l.18.12.09,0h.09l.12.1.13.08h.1l.08,0,.05,0,0,0,0,.07,0,.06.06,0h.09l.15.11.14.11h.09l.08,0h.06l.05,0v0l0,.07v.09l.06.09v.16l0,.08-.09.1-.08.09-.12,0-.06,0v.07l.05.06.1,0,.12,0v0l0,0-.07,0-.11,0,0,0-.05.06,0,.11,0,.1.11,0,.06,0,0,.08,0,.09v.08l0,0v0l0,0h.05l0,0v0l-.07.1-.07.18,0,.1v.1l0,.06h-.53l-.1,0H2066l-.07,0-.1.17-.07.06-.12.06-.13,0-.08.07,0,.11v.09l0,0,0,0,0,0v0l0,0h0v0l0,0,0,0,0,0v.11l.25-.11.08-.09.17,0,0,0-.09,0-.08.08h.11l.24,0,.08-.13h.16l.05.1,0,.12v0l0,0-.13,0-.3.16-.16,0-.18.08,0,.11v.09l-.14,0-.11,0h-.06l-.18.1-.09,0h-.1l0,.13.1.17.06,0h.09l.22.2.16.2-.08,0-.08,0h-.12l-.05.12-.05.09v-.11l-.06,0-.07.06-.09.27-.16.19-.05.12v.08l0,0h0v.07l0,.07-.35.09,0,.05-.1,0-.11-.11-.11,0-.06,0-.07.05,0,0h0l.12.07-.06.05-.23.08v0l0,0,.27.07.24.13.07.09.06.15.06.07.07.05.08,0h.12l.13,0,.31.36.12,0,.3.08.07,0,.57.5.17.22.33.32.09.07.05-.08.05-.09.06,0,.18,0,.16,0,.12,0,.14.07.13.07.13.06.26.05.09.07.11.07.43,0h.07l.15,0h.12l.14.08h.18l.12,0,.09.06v0l.08.07.24.12.19.07.07,0,.14.08,0,0v0l0,.06v0l0,0,.06,0h.12l.05,0,.09,0,.09,0,.12-.06.16-.05h.13l0,0,.07.12.08-.16h0l.06,0,.12,0,.08,0,.05,0,.12.15h.2l.09,0,0,0,0,0,0,.14,0,.16v0l.09.06.11.06.05,0,0,0,.08,0,.11,0h0l.05,0,.14.06v0l.1,0,0,.07h.06l.06,0,.06,0,.07.08.1.09.05.06,0,0,0,.05.07,0,.06.08.05.17,0,0,.19.06.07,0,.18,0,.06,0,.1-.14.08-.16.08,0,.15-.07.08-.07,0-.08.08-.14.05-.08-.09-.08,0,0,0,0-.08-.15-.07-.13-.13-.21-.24-.33-.05,0,0,0,0-.16-.07-.12-.09-.08,0,0,0,0,0-.24v-.06l0-.14,0-.16,0-.23.06-.15,0-.1-.08.06-.09.36,0-.29-.07-.27-.05-.14-.07-.11-.1-.09-.09-.11-.1,0-.15-.05,0,0v-.14l0-.12.08-.08.11-.08,0-.06v-.06l0,0,0,0,0-.11,0-.09.05-.07.07-.16.05-.09,0-.1,0-.16,0,0,0,0,0,0,0-.05v-.09l0-.1h0l.06.06.05.06,0-.09,0,0,.05,0h.07l.2-.08.1,0,.09,0,.21-.21h.1l0,0,0,0h0v0l0-.08v-.14l.06,0h.06l.25-.12,0-.05v-.07h.11v-.06l0,0-.2-.12-.17-.09-.16-.08h0l0,0,0-.06v-.12l0,0h.08l0,0,.08,0h.1l.06,0v-.07l-.12-.24-.11-.2-.1-.22,0-.08-.13-.18-.12-.18-.1-.16-.06,0-.16,0-.31,0h-.11l-.08,0-.09,0-.08-.07-.07-.11,0-.1v-.25l-.05-.14-.06-.08-.14,0-.17-.12,0-.23.09-.32.13-.23.11-.1,0-.08,0-.07v-.07l-.06-.08-.1-.07,0-.09,0-.19.06-.28.09-.22.13-.12.11-.09,0-.08V122l0-.08.05-.06,0-.06.06-.07h.09l.1,0,.13.14.2.27.11.18,0,0,.1.11.09,0,.15-.07.15-.07,0-.05,0-.08,0-.12,0-.08,0-.1,0-.19,0-.28,0-.09h0l.07,0h.07l.09-.07.14-.11.24-.19,0-.12.05-.13.06-.09.16,0,.14,0,.1-.09.16-.09.13,0,.06,0,0-.07.15-.2.12-.12.1-.13,0-.08.08,0,.12,0,.14,0,.1.08,0,.08v.06l0,0h.24l.15-.1.22-.17.19-.06.11,0,.08.13.07.12.07,0h.06l.08,0h.09l.07,0h.13l.17,0h0l.09,0,.1,0,.08.07.14.22.08,0,.17.08.07.07.09.11,0,.06.1.12.11.2,0,.15,0,.13,0,.06h0l0,0,0-.06,0-.1,0-.17,0-.15,0,0,0,0,0-.07.07,0,.08,0,.13.08.13.11.17.18.15.11.17.1.13,0,.1,0,.12-.08.12-.09,0-.09,0-.1.17-.13.15-.12.07,0,.05,0,.16-.07.05,0,.15,0,.16,0,.12.13.12.09h.11l.09,0,0-.09.05-.09.06-.06h0l.19,0h.13l.16,0,.17.14.11.15.14.19.06.06.09,0h.08l.09,0,.26,0,0,0,0,0,0,.11,0,0,.21-.07.06-.05.07-.16.06-.16,0-.06h0l.05,0,.07.09.09.1.13,0,.08,0h.12l.28,0,.26-.11.15-.13.07-.19,0-.21.07-.14,0-.14-.13-.13,0,0-.33-.08,0-.05h0l-.32-.12-.15,0,0-.08,0-.1-.1-.09-.2-.09,0-.06,0-.07.1,0,.05,0,.18-.15.07,0h.16l.14-.12.1-.07.06-.09,0-.08-.14-.27,0-.16,0-.1.08-.12.05-.06.06-.11,0-.06.15,0h.18l.12,0h.17l.16,0,.08,0,.06,0,0-.06v-.08l-.06-.08-.23-.1-.1-.08h-.08l-.13,0-.11-.06h-.11l0-.08,0-.11,0-.06.08,0,.08,0,.09,0,0,0V117l0,0h-.06l-.07,0-.08,0-.14-.05-.11-.06v-.06l.08-.08,0-.07v-.2l0-.12.08-.09.1,0,.24.09.31.07h.05v0l0,0h.42l.08-.05,0,0,.4-.06.05,0,.06,0h.09l.12,0,.15-.06.11,0h0l.12,0,.14,0,0,0,0,0,.13-.07.24-.06.06,0,.12,0,.14,0,.11,0,.06,0,.09,0,.06,0,0-.13,0-.11.07-.06.06,0,0,0,0,0h.21l.19-.12,0,.06h.25l.3-.08.19,0,.31-.08.15-.06.21,0,.19,0,.13-.12h.22l.08,0,0,0,0-.08,0-.1v-.07l.08,0h.13l.08,0,.17-.16.12-.08.13-.05.25,0,.22,0,.23.08.12.1.1.07.1,0,.09,0,.1,0,.07-.05,0-.06.07,0,.23,0,0,.07.11.22.07.28.13.38.05.18,0,.1v.28l-.09.16,0,.08.22.08.32,0,.19-.07.11,0,.06,0,0-.13.08,0,.07.08.06.14.05.1v.1l0,.14,0,0,.07-.05.05,0,0,0,0,0v-.1l0,0h.11l.16,0,.19.2.1,0h.14l.11-.06.08-.07,0,0h0l0,0v.08l0,.1-.11.1-.15.08-.08.17,0,.17,0,.08,0,.06v.08h0l.06,0,.16-.17.08,0,.12,0,.19,0,.13,0,.06.08.07.06,0,0,0-.07v-.08l0-.07.21-.17.14-.11h.05l.09,0h.06l.15-.1.15-.12v-.16l0,0,.21,0h0l.17-.08.24-.15.12-.08.21,0,0,0,.07-.06.13-.08h.08l0,.19-.08.22,0,.06h-.22v.06l0,.09,0,0,0,0,0,.08.23.19.29.23.31.27.22.18.08.1.06.07.16.27.15.25.26.45.22.42.25.47.15.27.29.55.08.17.15.32.13.3.12.27.07,0v-.12l0,0,.09-.08h.11l.07,0,0-.07,0-.14v-.06l0-.07,0,0,.06,0h.05l0-.08.08,0h.13l0,.06,0,.08h.15v.06l0,.11,0,.08v.07l.05,0,.18,0h.06l0,.07,0,0v.07l0,.08,0,0h.16l.11,0h.17l.15.08h.1l.11,0,.15,0,.11-.06.08-.08,0-.06,0,0h.24l.06-.1.07,0h.18l.2.09.13.07.13.1.08.06.05.15.09.1.07.12,0,.12.06.22.06.07h.07l.09,0,.1,0,.21.16h.08l.06,0v.08l0,.08,0,.08.07.11.06.1.07.12,0,.07,0,0,.08,0,.11,0,.35.07h0l0,.07h.19l.06-.06,0-.06.12-.07.1-.1.08-.09h.06l.05,0v.08l-.06,0-.05.07v.06h.08l.09.1.13.23.05,0,.06,0,.07,0,.08,0,.06.1,0,.09h.09l.06,0,0,0,.06,0,.08,0,.09,0h.16l.05,0,0,0,.08-.05v-.18l.06-.1.13,0h.27l0,0,.06,0h.08l0,0V123h0l0,0,0,0h0l.09,0,.07,0,0-.09,0-.05.05,0h.09l.07-.07.1-.06.06,0,0,0,0-.11v-.11l.1-.06h.12l.09,0,0-.12,0,0,0,0,.11,0,.08,0,.05,0,.14-.06.13,0,0,0,0-.07.08,0,.07-.06.1-.08h0l.16,0h.17l0-.08.07-.06.07,0,0,0,.07-.08.09,0h.36l.06-.11,0,0v-.06l.06,0,.06.09.06.06.08.06.05,0h0l.05,0,0-.1.07,0,.08,0,0,0v0l0,.09.09.07h.11l0,0h.11l.1,0,.12,0h.41l.16,0,0,.06,0,.16,0,.15V122l0,.06.06,0,0,0,.06.06.05.1h.06l0,0h.2l.08,0,0,.07.06,0h.25l0,0h.08l0,0,.13,0,.07-.07h.06l0,0,0,0,.05,0,0,0h0l0,0,.11,0,.08.07h.06l.08,0h0l0,0,.05,0,0,0,.06,0,.26,0,0,.07.05,0,0,.06.06.05.14,0,.06,0,.11-.1,0-.1.06,0,.06,0h.13l.07-.07.07,0,.09-.09v0l0-.11,0-.06,0-.11,0-.18v-.16l0,0-.07,0-.07,0,0-.06,0-.08,0-.1v-.12l0,0-.06-.08,0-.06v-.1l.07-.17v-.17l0-.1,0,0,.05-.1.06,0h.07l0,0,0-.1,0-.09,0-.06.05-.06.26-.13.11-.15,0-.08,0-.17.05-.07.06,0,.07.1h0l.08.05.21.11.12,0h.07l.1,0,.06.07.12.1.11,0h.4l.06,0,.16.07.18.09.17.07.12.06.08.06.07,0,.08,0h.1l.23.07.14.06.12,0,0,.06v.07l0,.07v.16l0,.08v.11l0,.11v.1l0,.06,0,0,0,.08v.07l0,0v.07l0,.06h.07l0,0,.07.09.13.11.08,0,.08,0,.17,0h.11l.07,0,.06.09.11,0,.07,0,.13,0,.08,0,.07,0h.05l.1,0h.11l.09,0,.08-.07.08-.08.11-.05h.12l.08,0,.27-.06h.11l.08-.06.07,0,.11,0,.15,0,.14,0h.17l.11.05.08,0,.12,0,.14,0,.19,0,.13,0,.13.1.08.07.09.16.09.08.09.06h.36l.15,0,.12,0,0,0,0,.11v.22l0,.06h0l0,.07.06,0,.1,0,.18.18.11.08.08,0h.58l.2.05.06,0,.21,0,.22,0,.19,0,.12-.06h.09l.1,0,.09.07h.07l.11,0,.35-.2.12-.07.09,0,.07,0,.06,0,.15,0h.09l.09,0h.14l.27-.13.11,0,.19,0,.1,0,.1-.06.13-.07,0-.11.07-.15.14-.11.12-.09.12-.1.14-.08.14,0,.17-.15.14-.08.07,0,.08,0,.16,0h.11l.06,0,.13.07.11.06.09.12.16.16.09,0,.06,0h.26l.07,0,.13-.07.19-.08h.07l.13,0,.18.09.08.06,0,.07.19.13.13.06.2.1.22,0,.2.1.11,0h.05l.29-.25.24-.22.29-.17.2,0,.16,0,.1-.07.06-.13,0-.18,0-.11-.1,0,0,0,.05,0,0-.07,0-.12.06-.1.09-.1.05-.11V121l.06-.12.1-.12.06-.11v-.11l0-.13.14-.23.09-.26.16-.18.25-.19.16-.18.06-.19v-.16l-.07-.14,0-.15.05-.15,0-.11-.13-.07-.15,0-.17,0-.1,0,0-.13.05-.1.11-.08.19-.2.26-.31.26-.17.39,0,.31-.1.32-.11.23,0,0,0h.12l.21,0,.2,0,.18-.07.15,0,.1,0h.13l0,0,.12.06.24.16.14.07h.07l.06,0,.07.11.09.06.16,0,.16.12h.07l0-.07.06,0h.09l.14.06.18.13.12,0h0l.05,0,0,.06v.07l0,0,.05.06h.05l.08,0,.06.11.06,0,0,0v.1l0,.05v0l0,0,.1,0,0,0v.06l0,.06.07.06,0,.06v.05l0,0,0,0v.17l.06.07v.14l0,.16.13.21,0,.12V120l0,.06.06,0,0,.06v.08l0,.06,0,.05v.17l0,.05,0,.08v.11l.09.16.16.23.1.18,0,.12v.11l0,.08v.06l0,0v.12l.05.07.18.13-.07.2,0,.13v.15l0,.1.08.06,0,.06v.07l.1.07.17.07.22,0,.27,0h.16l.06,0,0,0,0,.07,0,0,.11,0,.07,0,0,.07,0,0,.06,0h.06l.06,0,0,0,0,0h.1l0,.09,0,0h.07l.12.11.22.32.15.12.14,0h.19l.06.12-.05.13v.11l0,0,0,.12.09.08v.06l0,.06,0,.12-.07.18,0,.15.11.12.06.12,0,.11,0,.07,0,0h.11l.18,0h.14l.08.06h.21l.34,0,.21,0,.09,0,.08-.07.07-.17.06-.08h.06l.1,0,.13-.12.12,0h.3l.09,0,.09-.1.16-.09.34-.12.08,0h0l.11,0,.1.05.09.09v.14l0,.05,0,0,0,.08,0,.07.06.13,0,.1.05.12,0,0,0,.09-.09.13,0,.06-.06,0H2154l-.05,0,0,0,0,0,0,.06v.06l0,.09v.09l-.06.08,0,.12,0,0,0,.09v.23l-.06.13-.09.16,0,.09,0,.08,0,0v.12l0,0-.07.05-.05.06v.1l0,.08,0,.07,0,0-.05,0,0,0,0,.09v.07l0,.07v.07l0,.06-.08,0,0,0h0l-.07.06-.07.23,0,.13,0,.12-.09.07-.07.06-.05,0,0,0-.11,0,0,0-.11,0-.17-.05-.17,0-.11,0-.08,0-.06,0,0-.07-.06,0-.05.08-.08.05,0,.09,0,.07-.08.09,0,0-.16.06,0,0-.13,0-.05,0,0,.06v.06l0,.06.06.12,0,.08,0,.17.12.51,0,.09,0,.38V131l0,0,0,0v.11l0,0,0,.1,0,.15,0,.05,0,.05,0,0v.1l0,.07-.05,0-.06,0h-.13l-.08,0-.13,0-.08,0,0,0,0,0v.05h.08l.05.07v.07l-.06,0,0,.07.06.08,0,.05v.06l0,0,0,0,.1-.25-.12-.16,0,0,.17,0h.07l.13,0,.08-.08,0-.1.09-.06.12-.22.19-.26.06-.07.14-.05h0l0,0-.1.14,0,.1h.07l.08,0,.19-.16.07-.09,0,.1,0,.44.17,0,.08,0h.13l.14.11.05,0h.07l.06.1.09,0,.16-.09.24-.08h.11l.28-.15.13-.12.5-.31.2-.17.2-.13.12-.2.21-.19v-.08l0-.09.32-.52.1-.08.14-.07.07-.09,0-.14.2-.2.13-.2.12-.13.06-.12.32-.29.26-.33.24-.23.07-.15.31-.42.1-.29.12-.1,0-.27.1-.2,0-.11.05-.11.38-.44.15-.35.19-.34.14-.12.14-.16.08-.13.22-.19.11-.14.05-.14,0-.35.14-.26,0-.05,0-.08v-.09l0-.06,0-.08,0-.1,0-.06.08-.38v-.23l0-.09v-.12l.11-.18,0,0v0l-.06,0,0,0-.05-.6,0-.37.12-.27,0-.09,0-.27.13-.26.09-.31.18-.16.12-.2.1-.09,0-.2.09-.18-.07-.09-.07-.05-.15-.15,0-.1.1-.17,0-.16v-.28l-.16-.09-.19-.22,0-.07h0l.27.12.14-.13.06-.13,0-.17-.15-.06-.18-.18v-.07l-.29-.15-.32-.34-.1-.29-.05-.08-.3-.25-.06-.08-.08,0-.36.13-.19,0-.38-.16,0,0,.06.12v.28l0,.27,0,.19-.14.28-.06,0-.12,0h-.06l0-.11.1-.13.15-.22v-.2l0,0h0l-.1.08-.12.28-.28.19-.2.07-.37,0h-.07l0-.05.08-.08.19-.12.12-.24.13-.06,0-.07-.19,0-.14-.09-.12-.11.06,0h0l.06,0,.14-.2h-.27l-.22.16,0,.08.07.12.08,0-.09.31-.13,0-.12,0-.08.09-.08,0,0-.2,0-.2,0-.46.05-.16v-.17l0-.09h-.08l-.12,0h-.32l-.36,0-.38-.18-.1,0-.06,0,0-.17,0-.1,0-.07.26-.27.19-.08.39-.31.17-.25.1-.11.3-.19.21-.17.16-.16.18-.13.17-.23.11,0,.35-.49.07-.11,0-.15,0-.07.41-.56.28-.21.2-.29.24-.12.06-.05.1-.17.17-.1.05-.06.13-.23.41-.22,0-.09.17-.6.1-.16.18-.2.33-.2.24-.21.14-.17.25-.46.28-.27.23-.16.57-.23.3,0,.32-.13h.23l.34.06,1-.07.19.07.07.08.09.24.11.05.21-.09.15-.38.09-.05.25.15.21,0,.44.17.16,0,.17-.17.36-.05.21.27h.22l.17,0,0-.16-.07-.06-.13,0,0-.13.08-.16.12.11h.19l.07,0,0-.07,0,0-.06-.13.21-.18.12-.06.2,0,.52.22.11,0,.13.09.19.06-.12.06-.05,0,.12,0,.11.07.08,0,0,0,0-.09.07-.09.05,0h.12l.17,0,.12.07.29.36.14.07h.14l.07,0,.08.09-.25.12-.24,0-.21,0-.35.15.19.37h.35l.35-.08.07-.15.14-.06h.08l.16.13.22,0,.06,0,.18-.25.11,0h.07l.08-.22.31,0,.18.2.11.07.22-.06.12-.14.08-.05.22.13.11-.08.18,0h.13v-.3l-.18-.16-.36-.17-.21.11h-.08l-.05,0-.06-.08.06-.13.05-.1v-.13l0-.19.09-.08.05,0,.13-.38.36-.53.42-.32.27-.25.12-.18.19-.41.27-.3.12-.1.14-.13.05-.4.1-.09.09-.07.18-.22.26-.13.09-.11h.31l.25.08.07,0,.17-.12.2,0,.25-.08.24-.14h.1l.1,0,.12.21.06,0,.05.12.16-.08.43-.28h0l.06,0v.2l-.06.28-.08.21-.22.41,0,.06,0,.11,0,.21-.1.21-.05.11.09,0,.11-.12.17-.08h.09l.09,0-.14.37,0,.19,0,.08V105l.1,0,.08-.08.1-.06.26,0,.14-.27.11-.13,1.07-1.1.18-.24.11,0,.09,0h.09v-.08l0,0h.09l.06.21.07.1.05,0,0,0,.05-.08.06-.07.05-.1,0-.07-.19-.11v-.2l.1-.31V102l0-.21.05-.11,0,0,0-.08-.05-.16,0-.11,0-.08.85-.29.15,0,.14.06.21.21.23.11.32,0,0,.1-.12,0-.06,0v.08l0,.06-.08-.07-.21,0-.21-.09h-.06l-.29.25-.07.11-.13.48v.34l-.05.32-.12.13,0,.16,0,.19.15.08,0,.06v.08l-.1.2-.25.25,0,0,0,.11.15.21-.12.07-.11.06-.1.09-.35,0-.24.23-.41.23-.19.14-.06.08-.14.35-.09.15-.28.23-.21.34-.33.39-.14.05-.15.1-.18.28-.46.48-.24.58-.13.19-.13.15-.09.16-.16.17-.32.25-.22.2-.12.14,0,.13-.06,0-.22.07-.29-.06-.19.39-.22,0-.21-.09-.11,0,0,0,0,.05.1.13,0,.1,0,.1v.16l-.12.3-.11.23-.18.23-.43.4,0,0,0,.09-.24,1-.07.46-.08.72v.24l.05.54.08.55.18.93,0,.29.14,1.14v.21l0,.18.07.18.12.18,0,.22.1.68v.65l0,.14,0,.1.12.12,0,.15v.12l0,.11.09,0,.33-.31.26-.29,0-.1.09-.08.18-.11.26-.3.21-.42.12-.32,0-.12v-.37l0-.09.07-.28,0-.08-.12,0,0-.11.08,0,.07,0,0,.12.06,0,.19-.21.17-.1.42-.19h.17l.16.16h.07l0-.23-.1-.16v-.1l.06-.16,0-.11,0-.08,0-.17.08-.35.08-.2.06-.09.19-.15.21-.23.24-.17.15-.06.18,0,.15.12h.31l.09,0,.22-.25.13-.1,0-.21-.08-.18-.16-.23,0-.11-.05-.24v-.23l.05-.26.13-.3.15-.41.06-.06.17-.1.12-.08.06,0,0-.23.1-.09.07-.06.19,0,.06,0,.09,0-.06.12-.07.09-.17.11-.08.16.2.28.12.05.07,0,.13-.15.07-.06.06-.1,0-.35-.05-.2V112l-.08-.07-.11,0-.12,0-.06-.06-.05-.09v-.11l0-.25v-.13l0-.24v-.2l.17-.2.14-.15.07-.13,0-.08v-.18l-.07-.08-.4-.19h-.05l-.13.07,0,.24-.07.09v0l0-.06-.2-.09-.09-.08,0-.07,0-.11,0-.17.08-.34.08-.3.29-.47.18-.16.18-.25.08,0,0,0,0-.06-.06-.17,0,0,0,0,.07,0,.18-.31V107l.05-.34,0-.14,0-.1.08-.09.07,0,.11-.12,0-.09,0,0h.13l.09,0,.11.06,0,.16.13-.14.12-.16,0,0,.08,0,.13.12.11.22.07.06h.09l.06,0,0-.16V106l.1,0,.08,0,.12-.13.16-.06.33-.22.22-.23h.16l0,.13,0,.13-.06.31,0,.17,0,.2v.1l0,.14.08,0,.06,0,.11-.13.47-.67.24-.18.37-.12.11-.07.36-.13.3,0,.19,0h.11l.41-.06,0,.08.32.22.18.32,0,0,0,.06v.13l0,.08,0,.07.16.15.18,0,0-.08,0-.07.08-.39.07-.15v-.1l0-.08.18-.11.14,0,.49-.38.23-.22h.09l.08,0,.07-.07.07,0,.13-.16.17-.12,0-.1,0-.1.09,0h.08l.11-.11v-.09l0,0h.05l.08,0,0,0-.06-.13,0-.11.05-.07.18.12h.07l.24-.29.21-.31.19.08.29-.23.13,0h.21l.09-.09.1-.16.08,0,.36-.19.07-.13.09,0h.07l.16-.11.66-.32.1-.13.24-.19.19-.06.23,0,0-.06-.17-.07,0-.07V101l0,0,0-.12.06,0,.08.08h.08l0-.07h0l0,.09,0,.1,0,.08v.09l.05,0h.29l.33.07.87.38.07.06h.07v-.15l0-.15.11-.08.17-.21.09-.14v-.18l-.06-.18-.12,0-.07-.11,0-.14.06-.1.07,0v-.14l-.05-.09-.28-.19-.1-.13v-.11l-.12-.29,0,.06v.14l0,.1-.06,0v-.08l0-.16-.05-.08-.17,0,0-.07.18-.09h.05l0,0,0-.37,0-.26-.11,0-.07-.07,0-.17V98l-.09-.28-.06-.11-.08-.11-.06.12,0,.15-.08,0h-.08l-.25-.17-.23-.3,0-.28.06-.35,0-.06,0,0-.31.12-.19.18-.1,0-.21-.12-.34.21.08-.12.06,0,.06-.09-.05-.17,0-.13-.07-.09-.1,0-.11.08-.08.09-.16.09-.32.08h-.22l-.37.14h-.13l.5-.2h.28l.35-.13.26-.25.34.22.12,0,.25,0,.22.13.07,0,.07-.12-.09-.18-.08-.12-.09,0-.27,0-.18,0-.1,0,.07-.06.19.08.24-.1.27.15.07.13.08.05.22.33.16.13.49.1.22.15.16-.06.42-.33.28-.08.18-.22.16-.24.16-.08.28-.26.06-.12.11-.32.06-.13.09-.16v-.13l0-.14-.08-.11-.18-.16-.08-.1-.05-.22v-.26l0-.2.06-.18.06.13.18,0,.08,0v-.13l0-.16.05,0h.09v-.1l0,0,0,.07v.26l.07.07.1.05,0,0,0,0,.06-.08.13-.27.08-.11v.2l0,.27,0,.07-.07.1,0,.19v.06l-.1-.06h-.08l.06.22.08.16.1.16.11.09h0l0,0v.1l0,.23,0,.13.09.09.09,0h.57l.19,0,.29-.22.11,0,.12,0,.35.12.42.18.15.26.07.26,0,.28,0,.11v.1l.13.14.18.17,0,0,0,.07,0,0,.13,0,.1,0h.1l.19.08.24.12.24.18.1.12.19.28.09.08.16.1.06,0,0,0,.12-.14.08-.1.06-.13,0,.11v.09l-.07.07v.12l.1.14.11,0,.13,0,.05-.06,0-.09,0-.29,0,0,.1,0,0,.09v.1h.31l0,0v-.09l0-.09-.05-.06-.12-.08-.12,0h-.1l0,0v-.08l0-.09,0,0,.08-.07V96.6l-.08-.08-.1,0-.08,0,0-.07.06-.06.09,0,.1,0,.19-.06.17-.12.09-.08.09-.1v-.18l-.06-.17-.09,0H2203l-.09,0-.08,0,.33-.06,0-.06.06-.27,0-.07-.07,0h-.1l0-.05,0,0-.19-.26-.21-.15.06,0h.1l.16,0,.11.12,0,.08.05,0h.09l.16.06V95l0,0,.11,0,.29,0h.1l.13.06h0l.06,0,0-.09-.07-.17-.16-.16-.09-.12,0-.1,0,0h0l.13.15.1.1.11.06.1,0,.21,0,.1-.08,0-.12,0-.25,0-.1.13-.14.22-.18.14-.06h.05l.06.06h0l.1-.13-.05-.2Zm-72.06-23.38-.07.07,0,.11v.14l0,.23-.06.08-.23,0-.06,0-.06,0,.13.27.25.19.18.19.08,0,.54.18,0,0,.15-.32.2-.14.06-.11,0-.16.05-.12,0-.16-.09-.14-.31-.13-.8-.24Zm-42.1,11.72,0,0,0,.08v.31l0,.15.06.13.05,0v-.11l-.09-.44v-.2Zm3.35,10.39-.14,0-.11,0h-.17l-.11,0,0,.08.17.35.18.18.16,0,0,0,0-.12,0-.07v-.23Zm-2.59-6.78.07-.23V85.2h-.1l-.18.24,0,0,0,0,.15,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="RW"
                                    d="M2058.22,176.41h0v0l0,.08.11.14.08,0,0,0,.05.1V177l0,.14,0,.11,0,.07v.09l0,.11,0,.07,0,0h-.13l-.06,0h-.1l-.07-.06-.13,0h0l0,0,0,0h0l-.11-.07h0l0,.19,0,.11,0,0-.08,0-.08,0h-.32l-.05-.11-.09,0-.09,0h0l0,.06v0l-.08,0,0,0v-.07l0-.1v0l0,0,.07,0,.11-.08,0,0v-.35l.05-.09.07-.09.07-.09h0l.06,0,.06-.05,0,0h0l.2,0,0,0,0,.09h.05l0,0,.1-.07,0,0,.05-.06.07-.07,0-.06,0,0h.14Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SA"
                                    d="M2073,147.53l.18,0,.23,0,.15,0,.27,0,.08.16,0,.11,0,.11.08.1h.71l0,.1,0,.1.1.23.14.18,0,.06,0,.1,0,0v0l.1.1.16.08.07,0,.07,0,0,.06.09.13.12.13.12,0,.17.21.24.13.15.17h0l0,0-.06,0,0,0v.16l.08.07.07,0,0,.1,0,.21h-.11l0,.16.05.11,0,.1.05.13,0,.06.16.14.05.12,0,.23.1.12.06.1.07.08,0,.11.06.08,0,0h.12l.07,0,.09,0,.06,0h.07v0l-.05.05-.06.14.08,0h.08l.05,0h0v.16l0,.05,0,0,.05.06.05.07,0,.06.05.07,0,.06.05.07.05.07,0,.06.06.07.05.06.05.07,0,.06.05.07,0,.06.05.07.05.06,0,.06h.17l.11,0h.14l.17,0,.19,0,.19,0,.21,0,.2,0,.2,0,.19,0,.17,0,.14,0,.1,0h.19l.06-.08.07.11,0,.09.08.13.08.14.08.13.06.09,0,.1,0,.11,0,.11,0,.11,0,.11,0,.11,0,.11,0,.11,0,.11,0,.1,0,.11,0,.11,0,.11,0,.11,0,.11,0,.11,0,.1,0,.13-.1,0-.15.05-.16.06-.16.06-.16,0-.16.06-.16.05-.15.06-.16,0-.16.06-.16.06-.16.05-.16.06-.16,0-.15.06-.16.05-.16.06-.13,0-.22,0-.21,0-.24,0-.28,0-.22,0-.33,0-.29,0-.27,0-.28,0-.23,0-.14,0-.16.08-.25.13-.26.13-.13.07-.14.17-.07.09-.13.16-.09.12-.12.14-.05.13-.08.19-.06.05-.11.07-.1,0h-.16l-.08-.12-.1-.12,0-.06h0l-.15,0-.19,0-.22,0-.25,0-.24,0-.12,0-.16-.08,0,0h-.41l-.19,0H2071l-.19,0-.06,0h-.07l-.05,0h0l0,0h-.06l-.08,0-.06-.06-.05,0-.05,0-.06,0h-.06l-.06,0,0,0-.11.09v0l.05.05,0,0-.06,0,0,.09v.17l0,.09,0,0v0l0,.08-.06,0,0,.08,0,0,0,0-.18.13v-.08l-.05-.11V160l0-.08-.05-.06-.08-.06v-.09l-.07-.09-.08-.07-.05-.13,0-.17-.23-.22-.27-.21-.09-.12-.14-.24-.07-.19-.18-.22v-.08l0-.1,0-.12,0-.09-.19-.39-.06-.07-.05-.09V157l0,0-.13-.07-.12-.16-.37-.27-.19,0-.14-.09-.1-.13-.12-.21-.2-.23-.16-.34.05-.12v-.08l-.06-.14-.05-.11,0-.11,0-.15v-.17l0-.09,0-.09,0-.2-.06-.11V154l-.07,0,0-.08h.06l-.1-.11,0-.06,0-.14,0-.11-.15-.26-.07-.15-.17-.2-.17-.15-.11-.06-.06-.07H2065l-.1-.08h-.15l-.11-.17-.08-.16-.15-.2,0-.06,0-.09,0-.11,0-.08-.07-.14-.21-.36-.05,0L2064,151l-.06-.15,0-.14-.15-.07-.25-.5-.14-.18-.06-.12-.16-.19-.09-.2-.16-.17-.15-.32-.22-.31-.1,0-.23,0-.1,0-.09.07v-.09l.06-.12.09-.25,0-.22.14-.67.19,0,.16,0,.24.05.24,0,.15,0h0l.19-.16.18-.15.11-.18.1-.17.05,0,.16,0,.25-.06.25,0h0l.06-.15.07-.17,0,0v0l.18-.1.11-.06-.15-.18-.15-.17-.16-.2-.14-.14-.21-.23-.13-.14.23-.07.26-.08.26-.08.31-.09.24-.07.37-.11.17-.05h0l.13-.13.21,0,.31,0,.3.05.31.06.1.05.31.18.19.12.24.14.28.17.2.12.25.15.2.17.25.21.28.24.22.19.31.25.31.25.3.24.24.19.31.25h0l.31,0,.41,0,.42,0,.37,0,.17,0Zm-9.17,3.5h0l0,0v-.08l0-.05V151Zm.29.33h0l-.06-.07,0,0,0,0-.18-.07,0,0,0,0,0,0,0,0,.14.06.17.14h0l0,0Zm4.69,8.53h.07l0,0h0l0,0,.11.09V160l0,0,0,0v0l0,0-.1,0-.06,0-.09-.09,0-.07h0l0,0,0-.05,0-.06h0l0,.06v.18l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SB"
                                    d="M2175.33,182.16l0,0-.07.06-.09,0,0,0v0h-.06l-.13,0-.18-.14-.2-.25-.18-.13,0,0v-.07l0,0,.12,0,.15.11.24.12.07.06,0,.14,0,0,.13.12.07,0h.07Zm-1.52-.21-.09,0-.06,0,0-.07,0,0,.12.07,0,0Zm3.73,1.33v0l-.12-.08-.1-.09-.27-.11L2177,183H2177l-.14-.08-.13-.06-.09-.08,0,0h-.05l-.08-.09-.08-.05,0-.1-.08-.07,0,0,.25.06.12.1.1.07,0,0,.09.06h.08l.08.06.08,0,.06,0,.38.27-.05.08.05.05,0,.07Zm-2.94-.57h0l0-.05h0v-.06l-.1-.09v-.06l.06-.06.07,0,.07.08.09,0,0,.05-.08.09v0Zm.44.17,0,0h-.1l-.08-.1v-.07l.06-.06h.07l0,0,0,.06,0,.07v.06l0,0Zm-.52.06v0l-.05-.11v-.1h0l0,.13v.07Zm1.07.07.06.07.06.17v.06h0v0l-.07-.08-.08,0-.06-.05,0-.1V183h-.05l-.14,0-.05.05-.06,0,0,0v0l.09,0,0-.06.08-.1.06,0,.1,0v.14l0,0,.11,0Zm2.75.06.23.28v.05l0,0v.09l0,0h.06l.11.1,0,.12v0l0,.06V184l.1.16v.11l0,0-.12-.18-.14-.08v0l-.14-.11-.1-.18-.1-.31,0-.08-.11-.15v0h.08l0,0Zm-1,.18h0l-.07,0,0,0,0,0,0,0,0,0v0l0,.05Zm-2.12.19v0l0,0-.11-.13,0,0,.1-.08h0l0,.05,0,.08h0v.07l0,.06Zm.67,0-.1.07-.06,0-.06-.06,0-.07v0h.06l0,0,.1,0,0,0-.06,0,0,0v.06Zm.08.12h0l0,0,.05-.1,0,.08,0,0Zm-.51-.06v0h-.06l-.11,0v0h.12l0,0,0,0Zm1.42.34h-.11l0,0,0-.05,0,0h0l0,0h.05v0Zm.91-.12.05,0h0l.06,0,.09.08,0,0-.06,0h0l0,0-.07,0h-.06v0l.07,0Zm-.39.26.2.15h.36l.15.11.1,0,.05.1.06,0,0,0,0,.09h0l-.08,0h-.06l-.16,0-.14-.07h-.3l-.14,0,0,0,0,0-.07-.08,0-.1V184l.06,0Zm1.66.33v.13l-.07-.07,0,0,0,0v-.15l0-.07,0-.08h0l.13.24Zm.15.71.12.05h.07l.1,0,.07,0,0,.05.12.19v.06l.08,0h-.07l-.09,0-.07,0-.08,0-.12,0-.11,0-.23-.15v-.07l0,0V185l-.08,0h-.1v-.11h.08l.08,0,.17.1,0,0v0Zm4.08.34-.08,0h-.08l-.05.07H2183l0,0v0h0l0-.06,0,0h.11l.09,0h0l0,.05Zm-5.13,1-.06,0-.06,0,0,0,0-.08-.08,0-.11,0-.05,0v0h-.08l0,0V186l.07,0,.34.19.09.06,0,0Zm5.86-.12-.08,0h0l-.06-.08,0,0h.06l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SC"
                                    d="M2081.31,179.73v.09l0,0v-.06l-.06,0,0,0,.07,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SD"
                                    d="M2059.1,154.67l0,.09h5V155l0,.18.14.26.12.14,0,.07v.07l0,0-.06,0v.2l0,.16.05.17,0,.16v.27l.07.32v.2l.1.48.1.26.06.07.06,0,.12,0,.18.13.14.14.05.07.06.09.05,0,0,0,.05.06.22.15,0,.06-.08.06-.09.12,0,0,0,0v0l0,0,0,0h0l0,0,0,0h-.06l-.05,0h-.07l-.07,0,0,0-.06,0h-.07l0,0-.07,0-.07,0h0l0,0-.06.17,0,.05h-.15l-.08,0-.1,0h-.05v0l0,.14v.07l0,.07-.05.1,0,.15v.16l-.08.24,0,.05-.08.18,0,.07-.1.35,0,.11-.09.11,0,.18,0,.19,0,.19,0,.27-.08.25v.14l-.06.2,0,.1,0,.05,0,.06-.06.13-.05.17,0,.17v.14l0,0-.11,0-.15,0-.08,0-.06,0-.07.08-.13.22-.07.14-.12.18-.12.13,0,.07,0,.12-.05.19,0,.13v.11l0,.18v.09l-.05.05-.06,0h0l-.09-.05-.07-.06h0l-.06,0-.07.06-.08.12-.07.12,0,.26v0l0,.06-.1.19,0,.07,0,.11,0,.2v.05h-.18v-.13l0-.09.06-.12h0v-.19l-.05-.1v0l-.4-.32-.07-.09h0l-.2-.08h0l0,0v0h0l-.1-.7h0v0h0v0h0v-.23l.06-.18v-.08h-.44v0h0v.08h0v0h-.61l.24.27h0v0h0v.1l0,.15v.16l.07.12v0l-.44.37v0l-.06.15-.06.09,0,0-.1.12-.4.4-.06,0h-.39l-.24-.22-.44-.28,0,0-.24.12-.06,0,0,0v.13l0,.07-.08.07-.21,0-.11,0-.11.06,0,0h0l0,0-.09.08v.13H2056l0,0-.1-.21h-.08l-.67,0-.09,0-.2.08-.09,0-.1,0-.35-.41-.08-.05,0,0-.05-.08-.07,0,0,0v-.13l0-.06h0l-.48.09h-.07l-.1,0,0,0,0,.05v.17l0,.06-.14.14,0,.06v.23l0,0-.06.06,0,0V167l-.07.12,0,0v.11l-.22.07-.08,0,0,.07v0h0l-.09,0h-.12l-.22,0-.09,0,0-.05v-.12l0,0,0,0,0-.05V167l.11-.13,0-.08,0-.25v-.2l-.09-.19-.08-.13-.14-.2,0-.07-.27-.27,0,0-.06-.12,0-.1,0-.15V165l0-.07-.07-.06h-.06l0,0-.06,0-.05,0,0-.06,0-.09,0-.3,0,0h-.07v-.08l0-.17,0-.14,0-.08-.05-.11-.11,0h-.11l-.11,0h-.06l0,0,0,0,0,0,0-.07.06-.13.07-.1.16-.1,0-.05,0-.06V163l0-.06,0-.09,0-.09v-.07l0,0,0-.05.08-.07h0l.06,0,0,0,.11-.07,0,0v0l0,0,0-.05v0l0-.1,0-.06,0,0,0,0,0,0,.06,0,.09,0,0,0v-.12l0,0,0-.09,0-.05.06,0,.06-.06,0-.07v-.07l0-.21.07-.09.09-.07h.33l.13,0h.1l.22,0h0v-4.12h.92v-2h5.79l.09-.18,0,0h.06l0,.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SE"
                                    d="M2052.36,94.36l-.24,0-.19-.1-.09,0h-.16l-.18,0-.06.08-.05,0-.17-.12-.16-.19-.12.15-.07,0-.07-.13-.06,0,0,0,0,.12,0,.09v.34l-.16,0v.07l0,0,0,0-.06,0h-.15l0,0,0,.09,0,.07,0,0-.18.05H2050l0,0v.06l0,.07.05,0v.12h0l-.11-.14h0l0,.07.07.08,0,.09,0,.1v.08l-.14.24-.12.16-.09.14-.05.15.06.07.07.11.05.2,0,.19.12.17,0,.1,0,.08-.19.17-.22.26-.24.65-.08.09-.2.11-.08.1-.15.13-.27.1-.12.15-.06.16h-.06l-.06-.06-.08,0v.18l-.13-.11-.06.1,0,.17-.18.22-.2,0,0,0,.06,0v0l0,0h-.06l-.08,0h-.06l0,.11,0,.13-.11,0H2047l0,.07.18,0,0,.06v.06l0,.07-.2.09,0,.08,0,0h-.09v0l0,0h-.13l0-.1,0,0,0,.09,0,.09,0,.13,0,.08,0,0,0,0,.07,0,0,.05-.09,0-.1.15h-.11l-.06.1h-.07l-.06-.06-.09,0,0,.09v.07l.06.18.09.14.09.06-.06,0,0,.1-.06.28,0,.11,0,.19,0,.17,0,.08,0,.11-.12,0-.13-.06,0,.13-.08.16,0,.14v.09l0,.14,0,0,0,.09,0,.06,0,.06V104l0,.31v.06l.07.27,0,.09v.12l.1.11h.18l0,0,0,.07,0,.1h.07l.12-.07.08,0,0,.14.14.2.08.08.14,0,.15.15,0,.19.07.06.17.08.06.1,0,.08,0,.07,0,.21v.13l-.07,0-.17.14-.07.1-.06.07-.16.13-.06,0,0,.07-.06,0-.05,0-.18.13-.13,0,0-.07,0-.25,0-.08,0,0-.08,0v.1h-.14l-.13-.09,0,.16-.28-.13-.08,0-.13-.07-.08.08-.1,0-.06-.1-.1.17-.2,0-.19,0,.09.05h.43l.12,0,.16,0,.14.14.1,0,.12.15.06,0h.1l.09,0h.28l.09-.1.14,0,.08,0,0-.06.06,0h.06l0-.05.05,0,0,0,0,.12-.11.06h-.08l0,.2,0,.08,0,0-.17.09-.11.1-.14.09-.06,0-.08.09-.2.1-.1.14-.23.12-.11.1h-.31l-.3,0-.1,0,.1,0,.07,0,.08,0,.19,0,.09,0,.13.17-.09.06-.16,0,.06.23,0,.16-.07.09v.42h-.09l0,.17,0,.09v.21l0,.13,0,.11,0,.12-.15.28v.14l0,.07,0,.13-.06.24,0,.2,0,.16-.12.2-.07.15-.14.46-.07.09-.08.07-.1-.06-.09,0h-.11l-.17,0-.25,0h-.25l-.06,0,0,.17-.09,0-.09,0-.08.06-.07.06-.13.15,0,.09v.16l.07.16.06.17-.16.22h-.08l-.26-.06-.44.14-.41-.11,0-.11v-.09l0-.12v-.23l0-.09-.1-.13-.23-.42-.06-.17-.05-.08h0l.19.09h0l.05,0-.06-.14,0-.06,0-.1.11,0h.08l0-.1,0-.17-.08-.06-.07,0-.14-.27-.13-.14-.25-.54-.09-.38-.09,0,0-.16,0-.16v-.12l-.13-.06v-.08l0-.36-.14,0-.09-.21,0-.38-.09-.07-.08,0v-.19l0-.36v-.33l0-.1,0-.12,0-.1,0-.06.1,0,.08.09.08.23.07,0,.09-.06.06-.17,0-.24,0-.24,0-.26-.05-.22v-.07l.14-.19,0-.16,0-.15.06,0h.07l.09,0,.12-.1.1-.13.07-.12,0-.25v-.12l0-.09,0-.18,0-.18-.1-.27-.12-.38,0-.21,0,0,.11,0h.2l0,0,0-.09,0-.13.05-.09,0-.13,0-.12-.12-.18-.15-.18-.1-.07-.18-.15-.12-.13.07-.5.05-.38v-.23l-.18-.61v-.66l0-.06.07-.1-.07-.17h0l-.13-.42.2-.41,0-.21.11-.16.22-.36.12-.2,0,0,.1-.09.18-.1.19-.05h.09l.35.07.26,0,0,0,.06-.12.07-.16v-.19l0-.27,0-.16-.19-.11-.2-.14.25-.46.18-.33.21-.49.07-.2,0-.09.07-.76,0-.22,0-.11v-.12l0-.19-.06-.45.35-.06.11,0,.1-.05.21-.14.1-.13-.06-.42.13-.14.3-.51.32-.48.16-.19v-.24l-.06-.23-.08-.14-.14-.27.06-.19.11,0,.14-.08.1-.16v0l.19-.65.35-.33.15-.18.22.13.32.21.15-.3,0-.12,0-.16,0-.29V88l0-.15.13-.07.07,0,.36.16h.09l.17,0,.19.07.4.18.16.07.09,0,.08-.09.17-.21-.25-.17.17-.16.08-.17.08-.2,0-.24V87l0-.09-.15-.23.35,0h.12l.25.15v.19l.24.2.07.1.15.16,0,.09.14.1.1.11.12.08.13.14.19.1.15,0,.39.18.06.06.12.13.11.14.08.31h.12l0,.1.11.18.15.15v.06l-.12.14v.43l0,.2v.06l0,.07,0,.11v.16h.06l.12,0,.07,0,0,.23v0l-.09.11,0,.08v.11l0,.13,0,.15.08.15.1.17.07.13,0,.09v.07l0,.08,0,.16v.18l0,.12-.09.16-.06.06,0,.09v.14l0,.18v.12l0,.08,0,.06.15.09.08.2.05.16.1.42Zm-5.13,12.75,0,.06,0-.07v0l0-.07,0,0,.07,0v0l-.07.06,0,0Zm-.16.79,0,0h0l0-.09,0,0,.06,0h0l-.06.13Zm.68,1.95,0,.11h0l0-.08.09-.12h.13l.05,0-.16.07Zm-.07.15-.08,0,0,.12-.06,0-.06,0,0,.38.11.14-.06,0,0,0,0,.06,0,.14-.15.08-.06.06-.08.12,0,.19-.09.08-.09,0,0-.16.08-.12-.07-.08-.05-.14,0-.1,0-.11,0-.19v-.19l.06-.09.07-.08.12-.17.12-.13.17-.06.08.06,0-.12,0,0,0,0Zm-2.35,2.62,0,.08h0l0-.11v-.29l0-.14.2-.52.09,0,.13-.32,0-.15,0-.12,0-.12,0,0,.06,0,0,0-.06.06v.13l-.16.37,0,.25,0,.06-.23.86Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SG"
                                    d="M2126,174.21l-.13.06-.16-.06.05-.09.1,0,.09,0,0,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SH"
                                    d="M2016.83,182.76h0v-.06l0,0h0l0,0,0,0v0l-.05,0Zm8,7.52h-.08v0l.06-.05h0v.06l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SI"
                                    d="M2045.31,127.13l-.08,0h-.1v0l0,0,0,0v.12l0,0-.11,0,0,0-.06.09-.06,0-.08,0-.06,0-.07,0-.07,0,0,0,0,0v0l.06.08V128l0,0-.16.05-.16.08v0l.07.08v0l-.07,0v.1l0,0v0l-.09,0-.12,0-.15-.06h0l0,0h0l0,0-.08-.08,0-.05v-.06h0l0,0,0,.07-.07.11-.06,0h-.26l-.08,0h0v0l0,.05,0,0-.24-.06,0,0,.06,0,.08-.06h.11l0,0,0-.09-.1-.1-.06,0-.07,0v0l0-.17,0,0h-.08l0,0v-.07l.06-.07.06,0,0,0v0l-.08,0,0,0h-.06l0,0,0,0,0-.07.07-.07.08-.06.07,0,0,0,0-.08h.12l.09,0,.08,0,.08,0,.15,0h.14l0,0h0l0,0,0,0v0l.08,0,.07-.05,0-.06,0,0,0,0h0l.05,0,.2,0h.2l.1,0,.08-.06.12,0h0l.18,0v0h0v-.13l0-.06.05,0h.18l0,0v.06l0,.08,0,0v.09l0,0,.08.12Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SJ"
                                    d="M2021.82,81.75h-.08l0-.06.12-.17.41-.32.17-.32.31-.1,0,.17,0,.22-.28.17-.3.11-.3.29Zm26-11-.11.13-.17-.2-.11-.25.06-.1.29,0,.08.14v.08l0,.22ZM2050,54l.13.11.27,0,.15.78.09.82.14,0,.26-.11.23,0,.12.06.22.23.09.17-.08.13-.2.15,0,.42.2.15.33.37.18,0,.33-.14.3.28.31.34-.71.42-.07.12-.09.31-.11.26-.1.15-.21.26-.11.09-.26,0-.1.1-.09.21-.09.15-.23,0-.11-.21,0-.06v-.13l0-.29.22-.3.05-.17,0-.06-.06,0-.16-.09h-.05l-.13.18-.18.12-.19,0-.74.22-.12-.08-.05-.45.31-.23,0-.4.08-.26.09-.18.16-.45,0,0-.41-.37-.16-.24-.17-.47-.06-.39-.23-.34,0-.43-.17,0-.13-.3.12-.18.63-.19.38-.19Zm4.86-.25h-.14l-.25-.35,0-.3,0-.12h.12l.19.42.2.12Zm-14.41.18v.32l.15,0,.18.34.19.18,0,.12,0,.16.12.31.06.34-.14,0-.2-.47-.15-.27-.2-.23-.16,0-.07-.1-.26-.84,0-.2-.15-.31-.06-.4v-.31l.2.07.17.2.15.44,0,.13-.07.19.07.21.09.14Zm16.41-1.43.28,0,.27-.07,0,.08-.36.25-.39-.13-.36,0-.42.28-.14-.11.22-.27.23-.09,0-.16.09,0,.31,0,.18.28Zm-11.31-5h0l.05-.06,0-.14,0-.09.23.1.33.29.1.15.14.3.11.49-.09.36-.11.33,0,.19,0,.26,0,.26,0,.22.17-.26.38-.82.06-.06.06,0,.17.17.15.43,0,.14,0,.17,0,.21v.4l-.08.11,0,.1h.09l.09.12.1.28.1.1.37-.09.24.14.13.45.2-.1v-.24l0-.1.27.08.14.11.15.23-.25.38.2.36.34.26.21.27,0,.11,0,.15-.13.19-.14.11-.34,0-.32.14-.57.09-.08.06,0,.06,0,.16-.22.39-.22.46-.08.27-.07.39,0,.23,0,.23v.22l-.16.18h-.1l-.13,0-.12.11V57l0,.65,0,.49-.06.44-.07.24-.08.07-.27,0-.2.42-.17.73-.09.28-.18.45,0,.15.06.17-.1.31-.15.34v.13l0,.23,0,.25-.12.21-.21.11-.22-.12-.11-.15-.1-.22-.11-.15-.11-.09-.42-.51-.39-.81-.35-.32-.24-.15-.11-.15-.11-.2-.09-.22-.09-.29,0-.18v-.27l0-.15,0-.08.28-.07.1,0,.1.14.1,0,.2-.7,1.19-.41.38-.07h.38l-.06-.2,0-.24,0-.06-.29.14-.45.14h-.21l-.22-.1-.23.06-.22.21-.23.13-.23,0-.47,0-.12-.11-.16-.25,0-.13,0-.16,0-.48,0-.13,0-.08,0,0h.11l.1.08.24.27-.06-.29.69-.36.32-.31.17-.06.16,0,0-.17v-.16l.12-.12.08-.06.26-.06h.58l.2-.09.16-.22-.17.08h-.16l-.08,0-.18-.19-.08-.25.23-.51.08-.24-.23,0-.08.09-.27.46-.19.21-.25.1h-.24l0-.07-.08-.31,0-.16V54l.08-.26,0-.27v-.24l-.06,0-.09.24-.08.32-.11.16-.11,0,0-.12,0-.19,0-.07h0l-.1.07-.1.14,0,.21v.24l0,.18,0,.23.11.14.08.21-.13.11-.12.15-.12.22-.11.18-.19,0-.23.1-.47,0-.22-.29,0-.13,0-.1-.15-.15-.21-.45-.16-.52-.11-.05-.17-.17-.09-.15-.08-.2,0-.23V53l.1-.09-.23-.25-.23-.32.09-.11.08,0,.67.38,0-.05.07-.18,0-.07-.11,0h-.15l0,0-.06-.2-.05-.26,0-.16v-.2l.11-.3.07-.27-.1-.12h-.28l-.09,0,0,.39-.09.26-.17.21-.12-.1-.09-.51-.13-.35,0-.23,0-.33,0-.24-.09-.29v-.31l.07-.3,0-.25-.06-.23V48.3l.06-.15.06-.06h0l.17.19.1.23,0,0,.06-.33.08-.08.33-.11.37.43.1.1.07,0,0-.19,0-.25.06-.1.29.23.14,0,.33-.29.54-.15.2.23,0,.12v.22l-.12.19-.68.15-.45.59.61-.09.11.07,0,.47,0,.05.16.07.1.14.11.27.11.18.07,0,0-.2,0-.23,0-.26v-.29l0-.24.13-.17.18-.55.2-.38.22.17.2.47.19.67.18.7.19.85.1.3.09.07.4.87.05,0-.09-.66-.21-1.13-.14-.89,0-.34,0-.49v-.14l0-.13.1-.53.13-.25,0-.37,0-.28.14-.23h.13l.13.17.24.6Zm14.52-1.13-.87.2-.09-.14,1.41-.59.08-.06.26-.08.23.14-.07.1-1,.43Zm-12.71-1-.2.31-.34-.24,0-.24.08-.14.21,0Zm2,.28.09.06.51,0,.09.13,0,.32.08.11.11,0,.27.39.09.05.08-.21.06-.54v-.65l0-.31,0-.2.09-.08.11,0,.11-.11.1-.2.1,0,.23.15.06.12-.06.24,0,.35-.1.71.22,0,.31-.15.08-.21.16-.33.18.06.08-.05.05-.14v-.17l.1,0,.13.33.06,0,.12-.09h0l.11.14.52.23.18.13.08.12.08.07h.55l.4.08.14.18.12.36.05.81-.11.22-.79,1-.2.31-.1.29-.16.61-.08.19-.37.29-.09,0-.28-.15-.08,0-.34.31-.12.19-.11.24-.17.1-.18,0-.78-.13-.11-.16-.09-.32.16-.42-.88.16-1-.09-.05-.06,0-.16-.33-.11-.25-.13-.22-.22-.2-.3.06-.13.07-.08.18,0,.16,0h.28l.07-.3.11-.08.09-.21-.3-.14-.31,0-.21.18-.24.08H2048l-.42,0-.2-.13-.27-.33-.1-.18,0-.15,0-.22.31-.2.12-.15.12-.22-.47-.12-.2-.18-.19-.27.15-.15.64-.12.17.1.17.19.18.12.18-.25-.17-.12-.15-.42,0-.21,0-.16.08,0,.06.07.22.4.17.13,0-.37v-.18l0-.14-.08-.27-.07-.34.11-.08.11,0,.23.23.24.16.11.16.2.41.19.26Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SK"
                                    d="M2050.87,123.61v0l0,.07-.05.07,0,.08-.05.18,0,.09-.14.16v.23h0l-.31.08h0l0-.05,0,0,0,0,0-.07,0,0,0,0-.05,0h-.07l-.17.06h-.12l-.08,0-.1,0h-.21l-.14,0v0l-.13.28-.19.1-.17.1-.05,0-.08,0-.09-.06-.08,0h0l-.07.07,0,.07-.19,0-.32,0-.12.07,0,.09v.06l0,.06,0,.06,0,0h-.23l-.3,0h-.36l-.11,0-.15-.11-.15-.14h-.15l-.06,0,0-.06-.08-.16-.1-.26v-.07l0-.09,0-.07v0h0l0-.11.07-.15.07-.08,0,0,.1,0,.18,0,.13,0,.12-.07.07,0,0-.06,0,0,0,0,.1,0,0,0,0-.08v-.09l0-.06,0,0,.19-.12,0,0,0,0,0,0,.06-.06,0,0h.14l.06,0h.12l0,.08v.07h.16l.1-.15,0,0,.08-.06.05,0,0,0,0,.11.05.08,0,0v0l0,0h.06l0,0v.15l0,0v0l0,0,.07,0,0,0,.13,0,.05-.12,0-.07.07,0,.06,0,.05,0h0l0,0h.18l.1,0,.06,0,.07,0h.07l0,0,.07-.11h.06l.08,0h.11l.27,0,.07,0,.16,0,.07.07,0,.07,0,0,.17.08.25.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SL"
                                    d="M2020.6,167.63v0l0,.14,0,.11,0,0-.12,0-.05,0,0,.16,0,.13,0,0-.17.18-.11.07-.08.06-.08.08-.09.07-.1.13-.07.13,0,0,0,0-.17-.13-.18-.09-.39-.15-.12,0v0l0-.09-.07-.12,0-.08h0l0,0h-.12l-.08-.07-.06,0,0,0,0-.19,0-.08-.06-.05H2018l0-.12-.07-.08v-.06h.06l0,0,.06,0,.09-.09.07-.05,0,0v0l0,0H2018l0,0h0l0-.11v-.07l0-.07h.13v0l-.09,0-.11-.08,0-.06.06,0h.09l0,0,0,0,0,0,0-.11.12,0,.07-.07.06-.1,0-.08,0,0,0,0v0l0,0,0-.08,0-.07.07,0,.14,0,.12.05.21,0v-.07h.58l.07,0,0,0,.06.07.06,0,.08.12.09.14.1.12.06.06v.05l0,.07,0,.06v0h0l.1,0v.18l0,.09.05.08v0l-.11.12,0,.12,0,0v0h.14l.06,0,.1-.11,0,0,.07,0Zm-2.07,1,0,0-.06-.06-.31-.09.09-.05h.22l.06,0,0,0v0l0,.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SM"
                                    d="M2041.6,130.52h-.06l0-.05,0-.07h0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SN"
                                    d="M2018.75,161.71l.09.15,0,.07,0,.11,0,.08.06,0,0,0,0,.07v.21l0,0,0,.05v.08l-.06.05v.1l.09.11.06.07v0l0,0,0,.05h0l0,0,0,0h.07l0,0,.05.07,0,.05v.06l0,.08,0,.06v0l0,.05,0,.1v.05l0,.14v.09l.06.05V164h-.17l-.22,0-.07,0H2019l-.1,0-.12,0h-.1l-.06,0h-.07l-.08,0-.08,0-.08,0-.09-.07h0l0,0,0,0H2018v-.11l0,0h-1.94l-.17.09-.18.09-.25.05-.28,0-.09,0-.09,0-.07,0-.1,0-.12,0h0l0,0,0-.07,0,0,.08,0,.11-.05.06,0h0v0h0l-.08,0,0,0,0,0,0,.06,0,0h0l0,0v-.41l.05,0,.06,0h.75l0-.16h0l.09,0,.16,0,.18,0,0,0,0,0,0-.05,0,0,.05,0,.06,0,.07,0,.08,0,.05,0,.13.05.21.08.18,0,.22-.06.15,0,0-.07,0-.07-.11-.06H2017l0,0-.08,0h-.12l-.09-.05-.06-.06-.08,0-.1,0-.15-.11-.09,0h-.07l-.15,0-.15.06-.07.13h-1l0-.1,0-.07-.09-.07,0-.06,0-.05.08,0,0,0h0l-.07,0h-.05v-.09l-.08-.11-.08-.18-.1-.08-.08-.15-.09-.05-.08,0H2014l0,.06-.08-.09.11,0,.25-.12.28-.35.25-.42,0-.1,0-.08,0-.17,0-.1,0,0,0-.08.06-.14,0-.07.07,0h0l0,0h.28l.13,0,.1-.05.13,0h.15l.08,0v0h.09l0,0h0l0,0h.37l.21.07.2.15.1.11v.05l0,0,.06.05h0l.05,0h0l0,0h.06l.06,0h0v0h0l0,0,.06.08,0,.11,0,.15.05.08h.06l0,0v0l0,0h.08l.05.05.07.11v.08h0l0,0,0,0,0,.05.06,0,.11,0,.08.06.05.08.09.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SO"
                                    d="M2068.39,177v-.11l-.09-.11-.16-.21-.13-.16-.12-.16v-3.38l0,0,.14-.14.19-.19.25-.35.14-.2.11-.16,0-.05.1-.1.19,0h.12l.4-.08.06,0,0,0,0-.08.07-.11.11-.07.19-.1.19-.08h0l.23-.06h0l.09,0h.35l.25,0h.28l.18-.19.28-.31.18-.19.28-.31.21-.22.24-.24.23-.22.27-.27.18-.16.27-.26.25-.25.23-.22h-.92l0,0-.26-.08-.32-.11-.4-.14-.28-.09-.31-.1-.3-.1-.24-.08-.31-.1-.26-.09,0,0-.15-.13-.19-.17h0l-.09,0-.09-.1-.08-.12-.08-.15,0-.1-.11,0-.05-.08-.09-.12-.07-.06,0-.05,0-.1-.05-.12,0-.07,0,0v0l.09-.15.05-.06,0-.05,0-.06,0,0,.12-.18.1-.16.08-.13.18.14.17.29.21.24.28.22.11.07.1,0h.51l.37-.2.33-.14.11,0,.19,0h.21l.19,0,.1,0,.38-.16.23-.17.16-.07h.07l.22.06.28,0,.39-.14.12,0h.09l.21.06h0l.11,0,.3-.06.24-.1.43-.08.33-.18,0-.09.1-.12.15,0,.37.13h0l0,.08v.08l-.08.15,0,.15,0,.25,0,.39v0l0,.06v0l0,0,0,0h0l.11,0v-.07l.09.05.07,0,0,.05v0l-.1,0-.06,0-.16,0-.1,0,0,.07,0,.31,0,.2v.26l-.13.17,0,.13-.19.24-.1.21,0,.1-.17.29-.23.22-.08.28-.09.18-.09.15-.2.29-.11.19-.13.35,0,.21-.37.63-.38.49-.24.42-.43.49-.58.63-.77.74-.2.15-.84.46-.54.38-.28.26-.29.23-.23.22-.7.73-.07.07-.06.06-.09.13-.06.05-.17.2-.1.11-.12.11-.05.08,0,.08,0,.05-.11.21-.09.13Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SR"
                                    d="M1980.13,170.51l-.07.07-.09.09-.11.16v0l0,0v.15l0,.05v.1l0,.09v.06l0,.08,0,.09v0l0,0,0,0v.08l.09.14,0,.06.08.06,0,.06,0,.07h0l0,0,0,.05v.08l0,.08-.12.16v0l0,.13,0,.11v.06l-.06.09-.13.23-.08,0,0,.07h-.11l0,0v0l0,0h-.14l0,0,0,0v0h0l-.06,0h-.11l-.09,0h0l0,0-.25,0h-.07l-.15-.07,0,0h0v0l0,.1,0,0,0,0,0,0v0l0,0,.05.07.06.06,0,.05v.14l0,0h-.06l-.19,0-.14,0H1978l0,0,0,0h-.06l-.07,0,0-.07,0-.1,0,0-.05,0,0-.07v0l0-.06h0l0-.07v0h0l0,0,0-.07v0h0l0,0,0,0v-.1l0,0v-.1l0,0,0,0v-.2h-.11v0H1977l0,0v-.12l-.06-.06-.11-.08,0-.1,0-.07-.11-.13,0-.09v-.07l0-.06.05-.1,0-.1v0l0-.07,0-.08,0-.06,0-.05,0,0,0-.06,0,0h0l0,0,0,0h.28l.07,0,0,0v-.06l0,0,0,0,0,0v0h-.07l0-.08,0,0,0-.07v0l0,0h0l0-.1v-.09l0-.08,0-.1.08,0,.46,0,.21.05.28.08,0,.09V170l.07-.06.17,0,.24,0,.22,0h.29l.44.07.2.05.08,0v.18l0,.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SS"
                                    d="M2061.4,166.36l-.06.12,0,.09v.13h.18v.82l0,0-.05.05-.06,0-.16,0h-.46l-.05,0-.06.13-.09.2,0,.08v.08l.06,0,.14.06.15,0,.11,0h.08l.06,0,.22.15.07.07,0,.06v.06l0,.07.12.13.08.08.19.09.07.11.07.06.07.05,0,.09.08.24.06.13.05.11,0,.17,0,.08.05.09.07.09.08.06,0,0-.17.16-.19.19-.22.22-.24.23-.19.19-.18.18-.22.21-.16.16,0,0,0,0h-.15l-.16,0-.15-.1-.14.08-.1,0h-.18l-.19,0-.08.05,0,0,0,.07h0l-.05,0-.1,0-.05-.09,0-.06,0,0-.16.09-.07,0h-.06L2059,172l-.12,0h-.07l-.09,0-.11.09-.06.08,0,0,0,0v0l0,0,0,0h-.11l0,0V172l0-.05-.08,0-.21-.09-.16-.18-.08-.09-.06,0-.08-.14-.1-.1-.11,0-.08,0-.08.1-.14.1H2057l-.09-.05-.11,0h-.19l-.08,0-.11.08-.09,0h-.06l0,0h-.11l-.1-.07-.06-.05,0,0-.06,0-.07,0-.05,0,0-.06,0-.06-.05-.07-.16-.11-.05-.06,0-.07-.07-.07-.07-.09,0-.14v-.17l0-.05,0,0-.06-.05-.13-.08-.13-.08-.07-.05h-.12l-.07,0-.07-.11,0-.08-.06-.07,0,0v-.06l0-.16-.07-.06-.1-.08-.08-.08,0-.08-.13-.1-.3-.15-.17-.1-.09-.09-.09-.08v0l.05-.08v-.07l0-.08-.17-.14L2053,168l-.1,0-.26-.05h-.08l-.07,0-.08-.08,0-.08,0-.14,0,0h-.05v0l0-.07.08,0,.22-.07v-.11l0,0,.07-.12v-.19l0,0,.06-.06,0,0v-.23l0-.06.14-.14,0-.06V166l0-.05,0,0,.1,0h.07l.47-.09h.06l0,.06V166l0,0,.07,0,.05.08,0,0,.08.05.35.41.1,0,.09,0,.2-.08.09,0,.67,0h.08l.1.21,0,0h.73v-.13l.09-.08,0,0h0l0,0,.11-.06.11,0,.21,0,.08-.07,0-.07v-.13l0,0,.06,0,.24-.12,0,0,.44.28.24.22h.39l.06,0,.4-.4.1-.12,0,0,.06-.09.06-.15v0l.44-.37v0l-.07-.12v-.16l0-.15v-.1h0v0h0l-.24-.27h.61v0h0v-.08h0v0h.44v.08l-.06.18v.23h0v0h0v0h0l.1.7h0v0l0,0h0l.2.08h0l.07.09.4.32v0l.05.1v.19h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ST"
                                    d="M2036.93,174l0,0,0,0v0l.06-.07,0,0,0,0v0Zm-.71,1.33-.09.06h0l0-.05,0-.1v-.05l0,0,.09-.06h.06l.06.07v.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SV"
                                    d="M1947.66,162.08h0l.16,0h0l.06,0,0,0,0,0,.12.09,0,0,.09.05,0,0,0,0h.08l.07,0h0v.11h0l0,0,.12-.06.12-.05.06,0,0,.05,0,0h.17l.07.05v0l0,.15v.12l0,0,0,0v0l-.07,0h0v.09l0,.06,0,0h-.23l-.22,0-.16-.06h-.08l0,0h.07l.09,0h0l-.33-.09-.38-.19-.23,0-.26,0-.15-.12-.11-.05v-.09l0-.07.1-.09.06,0h.07l0,0,0-.06,0,0,.09,0,0,0v0l0-.07v0l0,0h0l.08,0h.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SX"
                                    d="M1971.86,158.59h.11v0l-.06,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SY"
                                    d="M2069.15,138.74h0v0l-.1.12-.14.15-.11.1-.17.16-.12,0-.22.06-.06.06,0,.09,0,.12v.23l.05.15,0,.15v.19l0,.1-.06.14,0,.16,0,.29v.29l-.09.18-.11.2,0,0-.23.06-.25.15-.27.16-.25.15-.27.16-.27.17-.2.11-.26.16-.24.15-.24.15-.18.11-.28.18-.16.11-.24.15-.21.14-.25.16-.31-.05-.1,0-.08-.08-.06,0-.15,0-.1-.15,0-.05-.1,0v0l.05-.09,0-.1,0-.05v-.1l0-.05,0-.06,0-.07,0,0V143l0,0v-.07l.05,0v0l0,0,.05,0,0,0h0l0,0,0,0,0-.07v0l0,0,.07-.06h.24v0h0l-.08,0v0l0,0,.05-.06.06,0h0l.07-.08,0-.1-.07-.23-.05,0-.07,0h0l0-.06,0-.06,0,0-.08,0,0,0h-.27l-.07-.25v-.24l.05-.18,0-.08v-.06l0-.08-.12-.17.07-.31.05-.08h.06l.15.09h0l0-.11,0,0,.09,0,0-.19,0,0,0,0h.15v0l-.1-.23v0l0-.23,0-.08,0,0h.11l.15,0,0,.06.08.06h.34l.08,0,.18-.07.09,0,.08,0,.27-.12h.1l.07,0,.06,0,.12.08.1.09.08,0h.12l.19,0h.23l.13,0,.17,0,.31-.1.4-.21.23-.1h.24l.13,0,.15,0h.07l.16,0,.21,0,.13,0,.16-.06.1-.09h0l.05,0h0l0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="SZ"
                                    d="M2059.55,200.08h0l.08,0v.2l0,.07v.07l0,.1,0,.07V201h0l-.05,0h0l0,.15,0,.21,0,.14h-.2l-.25,0-.18-.06-.2-.13-.11-.2-.06-.13h-.07v-.39l.13-.2.08-.12.05-.12.11-.14.12-.09h.08l.2.13.22.11h.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TC"
                                    d="M1963.79,154.91h0l0,0v0h0l0,0v0h.07l0,.09,0,0Zm.2.07v0l0,0h-.1v-.05h0l.13,0,0,0,0,0Zm-.62-.08.1,0h-.1v-.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TD"
                                    d="M2052.2,157.21v3.63h0l-.22,0h-.1l-.13,0h-.33l-.09.07-.07.09,0,.21v.07l0,.07-.06.06-.06,0,0,.05,0,.09,0,0v.12l0,0-.09,0-.06,0,0,0,0,0,0,0,0,.06,0,.1v0l0,.05,0,0v0l0,0-.11.07-.05,0,0,0h0l-.08.07,0,.05,0,0v.07l0,.09,0,.09,0,.06v.13l0,.06,0,.05-.16.1-.07.1-.06.13,0,.07,0,0,0,0,0,0h.06l.11,0h.11l.11,0,.05.11,0,.08,0,.14,0,.17v.08h.07l0,0,0,.3,0,.09,0,.06.05,0,.06,0,0,0h.06l.07.06,0,.07v.07l0,.15,0,.1h0l-.08,0-.1,0-.12,0-.12,0-.12.06,0,0,0,0h-.11l0,0,0,0-.18.09,0,0,0,0v0l0,.07v.09l0,.07,0,.05-.05,0h0l0,0-.1.16,0,0h-.08l-.23.25,0,.07-.08.1-.11.11-.1.06v0l0,0-.06,0-.21.14h-.25l-.11.06-.1,0-.16,0h-.48l-.09,0-.09,0-.06.05v0h0l.16.11,0,.06,0,.05h0l0,0-.09.13-.15.15-.07,0,0,0,0,.1h0l-.1,0h-.2l-.27,0h-.27l-.15.07,0,0h0l-.14.07-.12.1,0,0-.17,0-.07.07h0l-.11-.09-.07-.09,0-.08v0h0l-.06,0,0,0,0,.08-.18,0-.14.05-.07.06-.11,0h-.13l-.1,0h-.1l.05-.08,0-.05v-.12l-.06,0,0,0-.08-.21-.09-.22-.13-.22-.13-.14-.1-.08,0,0-.06,0,0,0-.18-.14-.19-.17,0-.08-.09-.11-.11-.12,0-.05,0-.09.07-.09.08-.11.1-.07h.12l.2,0h.22l.22,0h.11l.12,0h.2l.11,0-.11-.07-.13-.12-.11-.13-.07-.12-.06-.15-.06-.19,0-.25V165l0-.1.06-.16,0-.09v-.19l0-.06-.08-.19v0l-.07-.13,0-.22-.07-.14-.13-.07-.07-.09,0-.15,0,0-.2,0h-.17l-.12-.17-.15-.22-.15-.2-.09-.41-.06-.23.06-.07.12-.17.16-.31.34-.5.17-.25.35-.38.43-.46.24-.27,0-.47,0-.51,0-.39,0-.46,0-.38,0-.28,0-.4,0-.08.17-.31v0l0,0-.24-.27-.07-.06,0-.14.07-.08-.29-.45-.08-.05,0-.06v-.39l-.07-.49-.1-.58.34-.16.25-.13.33-.15.31.16.44.23.44.24.44.24.45.23.44.23.44.24.44.23.44.24.44.23.45.23.44.23.44.23.44.24.44.23.45.23Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TF"
                                    d="M2077.89,223.65h-.07l-.06,0,0-.07.07-.06,0,0,0,.05,0,.06Zm16,3.65h.12l.2-.19h.06v.14l0,.06-.06,0h-.13l0,.08.13.11h.11l.1,0,.08,0,.12-.09.07,0h.13l.08-.08,0,0h.08l.07,0,0,.07,0,.09v.09l0,.09-.09,0,0,.07,0,0h-.08l-.06-.08-.06,0h-.24v.06l0,0,0,0h0v0l0,.06.07.08.12.05h.07v-.1h.09l.07,0,.06.07,0,0,0,0v.05l-.07,0h-.05l-.14,0-.09-.06,0,0-.05,0-.06.06h-.06l-.13,0-.11-.08-.08,0h-.11l-.06.17-.09.08h-.16l0-.07V228l0-.07,0-.08,0-.07v-.08l0,0,0-.1,0-.07,0-.06.06,0,0,0h0l0,0,0-.06,0-.1,0-.09v-.11l.07-.1,0-.12,0,0h.05l0,0v.06l0,0,0,0V227l0,.06v.05l-.06.11,0,.09.12,0Zm.09-.07h-.06v-.1l0,0,0-.05v0h.1l.09,0,0,.08-.06.12Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TG"
                                    d="M2030.91,165.29l0,.1-.05.13,0,0,0,.3v0h0l.16.1.2.14.14.09v.4l0,.1v.09l0,.07.14.14,0,.08v.46l0,.26V169h-.09l0,.1v.13l0,0,0,.07,0,0,.1.14,0,.12-.15,0v0l-.29.07-.11.05v-.05h0l-.05,0,0,0,0-.06,0,0h-.07l-.08-.05-.08-.07,0-.06v-.05l0,0-.07-.13,0-.06,0,0v-.08l0,0,0,0v-.09l0-.12,0-.12,0,0h-.05l0,0v-.11l.1-.16,0-.39v-.06l0,0,0-.05v0l-.06-.12-.12-.09-.07-.07,0-.06v0l.08-.05,0,0v0l0-.08V167l0-.1,0-.12v0l-.08-.08h-.07l-.07.05h0v0l0,0v0l0,0,0,0h0l-.07,0v0h0V166l0,0-.11-.07-.06-.06-.06-.07,0,0-.09-.06,0,0v0l0-.08,0-.08,0-.12v0l-.06-.06.21,0,.3.07v0h0l.08,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TH"
                                    d="M2122.42,156.41v.05l0,0,0,0,0-.07,0,0h.05l0,0,.05.1.06.06h0l0,.05v0l0,.09-.05.1-.06.13,0,.11.09.09.1,0h.11l.06,0,0,0,.05,0h0l.18,0,0,0v.06l0,.15,0,.11,0,.12v.11l-.06.18-.05.17-.06.08,0,.05v.07l0,.05,0,.07v.14l0,.1-.11.23-.08.21,0,0,.09,0,0,0,.06,0,.12-.12.11-.09.13-.09h0l.12-.07.05-.06,0-.08,0,0,.05,0,.07,0,.08-.09.06,0h0l.08,0,.11.1.1.06.09,0,0,0v.05l0,0h.05v0l0,0,.08,0,.09,0h.08l.06,0,0-.11.06-.08,0,0,.06,0,0,0,0,0v0l0,0h.18l.13,0,.15.06.1,0,.05,0,.09.1.13.22.12.16.1.11.1.09.11.06.07.08.07.16-.05.21V160l.07.18.12.12.07.09,0,.08.09.06.17.06.07,0,0,0v.05l0,0,.06.05.09,0,.06,0,0,0V161l0,.09,0,.07,0,.05v.22l0,.08v.11l0,.08,0,.17v.07l0,.06-.05.05-.07.06-.09,0-.06,0h0l0,0-.05.05h0l0,0,0,0v-.08l-.09,0-.09,0-.19,0-.15,0-.17,0-.16,0h-.29l-.13-.05h-.05l-.1,0-.11,0h-.11l-.15.08-.11.11,0,.08-.05.07-.08.13-.1.12-.07,0,0,0,0,0-.11,0h-.08l0,0v.24l0,.09.06.11,0,.06,0,.17v.15l.12.1.07.07,0,.06v0l0,.12,0,.16.16.33,0,0h0l0-.07-.08-.11,0-.11-.1-.13-.06-.05v0l0,.05-.09-.07-.09-.07-.07-.13v0l0,0-.09-.11-.09-.08-.08,0-.06,0-.05,0-.1-.05-.26.07-.32-.05-.13.05-.05,0,0-.06,0-.1v-.2l0-.14v-.11l0-.06V163l0,0-.23-.06-.05,0-.06.05-.28,0-.1,0-.1.08,0,.1.06.07,0,.12-.1.26,0,.07,0,.32,0,.17-.05.12-.09.1,0,.18-.07.08-.09.18-.06.23,0,.11,0,.2-.19.3,0,.17-.07.06,0,.05v.08l0,.23v.19l0,.09.09.2,0,.06v.08l.08,0h.05l.31-.09.1,0,0,.09,0,.07.06.41,0,.08.06.07.07.08,0,0v-.06l.06.08.05.14.16.77.05.1,0,.1-.1,0,0-.17,0-.07h-.09v0l0-.06v-.06l-.06-.06-.09,0v.12l0,.09.16.21,0,.08.06,0,.09,0,.11.09.08.08.21.13.13,0,.13,0h.09l.09,0,.11.1.17.26.28.22,0,.05v.08l-.11.11,0,.06,0,.08-.08,0h-.13l0-.08,0,0h0l-.14.06-.14.05,0,0,0,.06,0,0h0l0,0,0-.05,0,0v-.07l.07-.1v-.19l0-.07h-.16l0-.08,0-.08,0,0,0,0-.08,0-.06,0-.2-.08-.08-.12h-.07l0,0,0,.14,0,0-.23-.28-.16-.12,0-.21,0,0H2122l0-.06,0-.12-.06,0h-.09l-.07,0,0-.17,0,0-.07-.1h-.1l0,0v-.11l-.07-.07-.1-.06-.07,0-.08-.19-.06,0-.06,0-.07,0,0,.06,0,.07h-.06l-.05,0-.06-.18v-.32l.08-.18,0-.3.07-.19,0-.06.07-.26.13-.33V166l0-.08,0-.07v-.22l0,0,.09-.08.13-.12.15-.17.15-.27.08-.15,0-.06h0l.05-.06,0,0v0l-.09-.29,0-.1,0-.11V164l0-.07v-.07l0-.05-.06,0-.08-.08,0-.14v-.07l0-.07,0-.07,0-.06,0-.06v-.25l0-.07v-.13l-.05-.1-.07-.12-.07-.1-.2-.17-.14-.12-.07-.11-.08-.12-.07-.09-.07-.11,0-.15,0-.17v0l0,0,.05,0h0l.12-.08h.07l0,0v-.38l0-.16v-.11l.21-.12.05-.05,0-.06v0l0,0,0,0-.14.11,0,0-.06-.18,0-.05,0-.07,0-.09v-.15l0-.08-.17-.17-.07-.08-.1-.13-.13-.16-.12-.14-.06-.09,0,0v0l0-.09,0-.1-.06-.13,0-.08v0h-.1l-.07-.06-.06-.13v0h0l.08,0h0l.06,0,.09,0h.06v0l0-.3v-.06l.09-.13v-.13l0-.19.09-.13.07-.06,0-.09,0,0h.06l.12.07h.23l.25-.06h.14l0,0,0-.05,0-.18,0,0,0,0,.05,0h.06l.08,0h0l.06,0,0,0,0,0v-.11l0-.09h0l.07,0,.1,0h.12l.05,0,.06,0h.06l.05,0,.1.07Zm2.13,8v0l0,0h-.08l0-.13v0h0l.06.06,0,.05,0,0Zm.17.3,0,.09,0,0v-.05l0,0Zm-2.34,1.84v0l0,0,0,0v0h0l0,0Zm0,.1v.06l0,.06-.08,0,0,0v-.1h.11Zm-1.63.5h-.05V167h0l0,0Zm.09,1.07v.06h0l0,.05h0l0-.14,0-.19v0l0,.05.08,0,0,.11v.06Zm.17,0h0l0-.18.06.05v.12Zm.45.31,0,.11,0,0,0,0v-.07h0l0,0Zm.54,1h0l0-.08,0-.11.05.14,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TJ"
                                    d="M2095.53,135.05v.07l-.2.06-.08.06,0,.1,0,0,0,0h0l-.06-.12-.07,0-.09,0-.19-.08-.1,0-.18.05-.22.07,0,.05,0,0v.12h0l-.06,0-.06,0,0,.06,0,.11,0,.08.05.11,0,.17h.15l.12-.05h.07l.09,0h.34l0,0h0l0,0,.13,0h.11l.06,0h0l.07.11.05.07.06,0,.19,0,.06-.09,0,0h.15l0,0,.07,0h.06l0,0V136l0,0h.12l0,0v.14l.05,0h0l.17-.09h.05l0,0,0,.06.08.07h0l0-.07.07-.08.12,0,.07,0h.07l.21,0h.34l.09-.05.05,0,.07,0h.15v.06l0,.12v.08l.08.15,0,.07,0,.05v.07l-.06,0,0,0v0l0,.05,0,.14,0,.1.06.06.09,0h.06l0-.08.06-.06h.14l.22.07.21.11.06.06,0,.06-.06.15v.2l.05.08,0,.13v.11l0,0,0,0,0,.1v.1l0,0,.06.05.1.09,0,.08,0,.05-.07.05-.08,0,0,0v0l0-.05-.09-.08-.07,0h-.2l-.09,0h-.08l-.05.05,0,0-.09,0-.12,0-.18.06H2098l0,0,0,0,.06-.05,0,0,0-.05-.05,0H2098l-.12,0h-.09l-.16.06-.29.16-.12.11-.1.17-.27,0-.19.1-.2.15-.13.08h-.12l-.06,0-.07-.13-.05-.2,0-.13,0-.16,0-.19,0-.19,0-.23,0-.08v-.05l0,0H2096l-.09,0h-.06l0,0v-.11l0-.19-.07-.15-.19-.13-.16-.05-.13,0-.11.1-.09.17-.09.14-.1.1-.07.05,0,0v.05l.05.14v.11l-.06.1-.07,0h-.07l0,0,0,0h-.11l-.18,0-.12,0-.07.08,0,.1,0,.13,0,.09,0,.07-.05,0h0l-.08-.06-.12-.13-.09-.06h-.06l0,0h0v0h-.14l0,0-.09.05-.14,0-.08.06,0,.06,0,0H2093l-.13.08-.1,0-.11-.1-.07-.09v0l0-.08,0-.28,0-.1.14-.17.07-.13.08-.11.06,0,.05-.08,0-.1,0-.06v-.08l-.08-.07-.1-.1,0-.11,0-.14v-.09l.1-.26,0,0,0,0,0,0h-.32l0,0v-.12l0,0,0,0-.2,0,0,0v0l.07-.26,0,0,0,0,.05,0,.16-.08.18,0,.15,0,.16,0h.2l0,0,.07-.08,0-.13,0-.12h0l.05,0,0,0v-.06h0l0,0h0v0l0,0,0-.07v0l.1,0h0l0,0v0l0,0h-.27l0,0v0l0,0,.28-.05.14,0,.11,0h.05l-.05-.11h.06v0l-.09-.29.05,0,.05-.06v-.1l0-.06,0,0,.08,0,.12.11,0,0h0l.06,0,.21-.1.12-.06.14-.09,0,0,0-.13h.06l.13.14.07.09v0l0,0v0l.11,0v0l0,0v0h0l-.14.12-.15.13v.09l0,0h.07l.06,0,0,.07,0,.06.05,0,.22,0Zm-.29-.84h0l0-.06,0,0h0l0,0,0,.05v0Zm.05,1.34-.08,0h-.05l0,0,0-.05v0h0l.07,0h.12v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TK"
                                    d="M2203,183.32Zm1.2.72h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TL"
                                    d="M2146,182.91l-.07.16-.06,0,.07-.09,0,0Zm-.54,1.27,0-.12,0-.05,0,0v-.07l0,0h.11l.05-.06v-.07l0,0h0l-.11.06h0l0,0v-.09l.09-.07.09-.14.05-.06.14,0,0,0,.39-.07h.75l.11,0,.1,0,.06,0,0,0,.09,0,.14,0,0,0,0,0-.17.15-.18.12-.12,0-.11,0-.09.05-.08.08-.1,0h-.1l-.1,0-.08.05-.12.07h-.1l-.09,0-.3.1-.19.12Zm-.95-.15.15-.08.23-.07v.05l0,.07,0,0-.05.06,0,0-.14,0h0l0,0,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TM"
                                    d="M2091.44,138.46h-.05l-.11,0-.23-.06-.19-.1-.12-.07h0l-.06,0,0,.06,0,.12-.05.13h-.43l-.12,0-.13.07,0,.08,0,.11-.07.25-.07.22,0,.15-.05.1-.14.13-.16.09-.09,0,0,.05v0H2089l-.15,0-.17.06-.2.07h-.15l0,0,0,.06,0,0v.06l0,0,0,.07,0,.14-.07,0-.12.07-.12.09,0,0-.07,0h-.14l-.07,0-.07.07,0,0v-.07l0,0-.11-.1-.1-.08h0l-.09,0h-.21l-.07,0-.11-.1,0-.05,0-.05-.08,0,0-.05v0l0-.07v-.12l0-.08-.05,0v0l0-.06,0-.05v-.1l0-.11v-.33l-.05-.08h-.72l0,0-.13-.2-.1-.15-.11-.1-.24-.11-.12,0-.09-.09-.09-.09,0-.13v0l0,0h-.05l-.28-.15-.11,0-.11,0h0l-.09,0-.1.06h-.11l-.06,0-.14-.13-.11-.06-.09,0-.16-.05-.18,0-.09,0-.06,0,0,0v-.12l0,0-.05-.05-.06-.05h-.26l-.13-.05h-.3l-.07,0,0,0,0,.12h-.22l-.2,0h-.24l-.18.06-.15.08-.13.09-.16.14,0,.07-.1.25,0,0-.06,0h0l-.11,0-.15.07-.1,0h-.25l0-.08-.05-.3,0-.3v-.14l0-.28V137l0-.14v-.15l0-.1-.05-.08-.08-.1v-.13h-.08l-.07-.07-.06,0-.13,0h-.06l-.06,0,0,.06,0-.1V136l.1-.21.06.06.08,0h.1l.1,0,0-.07-.05,0,0,0,0-.1v-.1l0-.09,0,0-.05,0h-.1l-.14,0H2079l0,.11.07.14-.06-.07-.06-.09-.09-.17-.05-.2v-.22l0-.18.06-.16,0-.22,0-.21.05.09.06.09.07.08h0l.13,0h.08l.09,0h.09l.07.09.07.1.09,0,.21-.07.09,0,.08,0h.09l0-.09v-.09l.05,0,.16.05.1,0,0,0,0,0v-.15l0-.07,0-.06-.07-.09-.28-.21-.1-.08-.08-.11,0-.15,0-.16,0-.12-.1-.28,0,0h-.16l-.12,0-.2.05-.11,0-.05,0-.13.12-.06.1-.08.22.06.08v0l0,.34,0,.16h0l0,0-.07-.16-.13-.2-.11-.31.19-.2.16-.15.13-.08,0,0,.18-.07.23-.06.17-.05.23,0h.18l.08,0,.05,0,.19.12.19.13.16.14,0,.06,0,.06,0,.07.14.21.06.1.08.12.06.07.06.07.05.06,0,0h.06l.12,0,.15,0h.37l.22,0h.27l.08,0h.15l0-.05,0,0,0,0v0l0,0,0-.08,0-.27,0-.23.06-.07.07,0,.11-.16.06-.05.08,0h.28l.12,0,0,0,.06-.13,0-.1,0,0,0,0h0l.08,0,.07,0,0,0,0,0,0,.07v0l0,0h.07v-.06l-.05-.08-.12-.15-.08-.06,0,0v0l.05,0,0,0,.09,0h.11l0,0,.06-.12.13.13.13.14,0,0h.21l0,0,.07.15.07,0,.09,0h.38l.07.07,0,0,0,0v0l0,0v.14l0,0v0l0,0,.14.06,0,.06,0,0v0l0,0h-.06l0,0v.08l0,.06v.07l0,.06,0,.08v.06l0,0,.1.06.24.15h0l.22,0h.11l.06,0,.17,0,.06,0h.13l.06-.07,0,0h.08l.13,0,.15.09.09.09,0,.08.06.16.07.26.09.17.1.09.07.16.06.36,0,.07,0,0,.11.1.24.17.14.1.21.16.2.15.2.22,0,0,.17.12.2.13.13,0,.21.19.08.07,0,0,.14.08.24.16.3.22.2.13h.1l.06,0,.06,0,.11,0,.11.05.07,0,.09.06.06.05,0,0,.17,0,0,0,0,0v0l-.09.17,0,.21v.17l0,.12Zm-12.38-1.7v.06l0-.17,0-.18,0-.05h0l0,.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TN"
                                    d="M2040.69,143.15v0l0,.2v.36l.07.13v0l0,.07-.13.07-.18.1-.15.09-.16.1,0,.06-.09.05-.06,0,0,.05,0,.09-.06.07-.15,0,0,0-.08.1,0,.05,0,.08,0,.23.07.24v.18l0,.08-.08.13-.06.09-.12.17,0,0-.08,0-.16.07-.11.05-.06-.25,0-.21,0-.18-.07-.31-.06-.27-.06-.27-.06-.24,0-.24,0,0-.16-.11-.15-.11-.16-.12-.16-.14,0-.16-.09-.25-.09-.14,0,0-.19-.09-.1-.07,0,0,0-.1-.08-.21-.08-.18,0-.13v-.16l0-.11,0,0,.18-.15.08-.17.1-.07.09,0,.07-.06.07-.09,0-.1v-.11l0-.17,0-.11.07-.14,0-.11,0-.11v-.29l0-.07,0-.09v-.08l0-.2,0-.16,0-.21v-.05l0-.05-.09,0v0l0,0,.13-.1.07-.14.05,0,.09-.06V139l0-.06.23-.07.21-.18.08,0,.5-.17h.07l.07,0,0,.06,0,.05,0,.09.07-.06,0,0v-.05h.19l.1.05v.2l.13.2,0,.09.11.06.1-.07,0-.1.18-.06.17-.15h.09l0,.12,0,.11-.06,0-.09.12-.15.28-.15.09-.1.11,0,.07v.09l0,.17.08.16.09.1.08,0,.21.16v.09l0,.11v.13l.07.11-.15.23-.08.17-.16.23-.15.15-.3.22-.08.07-.05.08,0,.08v.09l.1.23.13.13.14.08.24,0v.09l0,.1h.1l.06,0,.06-.1.11.07.06.21.1.07v0l0,0,0,0,0,0,.1,0,0,0,.1.05Zm-.21-1.74-.14.08,0-.07.09-.09,0,0Zm-.29,1.14h0l0,0h0l-.06,0h0l0,0v-.17h.16l.09.08,0,0v0l0,.05,0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TO"
                                    d="M2201.67,192.82l0,.05h0l0,0v0l.06-.07h0l0,0v0l0,0Zm-1.11,2.47h0l0,0h0v0l-.07.1,0,0-.12-.07,0-.05,0,0v0h.09l.06,0h0l0,0Zm.23.12v.15l0-.07v0l.05,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TR"
                                    d="M2055.92,132.94l0,.14.06.16.14.21.14.11.55.27.1,0,0,.11,0,.1,0,.06-.16,0-.45-.12h-.12l-.08,0-.14.08-.17,0-.23,0-.06.17-.16.18-.26.15-.19.08-.28.29-.12.16-.06,0-.06,0,0-.08,0-.07V135l.09-.09.08-.07.26-.12.06-.1h-.2l-.2,0-.12,0h-.11l0-.08,0-.06h0l0,0,.07-.09.05-.07.09-.08,0-.06v0l0,0v-.21l.19-.13h.06l0-.06,0-.14,0-.1h0l0,0,0,0,0,0-.08,0v-.07l0,0,.14,0,0,0,0-.06,0-.06,0,0h.17l.08,0,.07,0,0,0,.17,0,.05,0,.05,0,.06.06.1.1.06,0h0l.07,0h.13l0,0h0l.13,0Zm12.45.56.06,0,.11,0,.07,0h0l.09-.07h.33l.07,0h.1l0,0,.05-.11,0,0h.15l0,0,0,.09.07,0,.14.14.09.06,0,0,0,0v0l0,0,.07,0h.07l0,0,0,0v.11l.06.08.07,0,0,.05.06.16,0,.09v.09l0,.09-.09.11,0,.05,0,.06v0l.07.14,0,.09,0,0v0l.11.07.14.05h.06l.16,0h.1l.1.06.15.13.16.16,0,.06,0,0,0,0h0l-.05,0-.13-.1-.06,0-.06.08-.06.29-.05,0h-.19l-.08,0h0v0l0,0v.11l0,0,.06,0v.18l0,.07.06.08,0,0v.15l0,.08,0,.09v.2l0,0h.05l0,0,0,0v0l-.07.08v.05l0,.07v.05l-.06.08,0,.08v.11h.1l.06.05.15.1,0,0,0,.06v0l0,0v.2h0l.1.08.08.08v0l0,.06v.09l0,0h-.12l0,0-.07.06-.09.06-.07,0,0,0h0l0,0v-.22l0-.06,0,0,0,0h-.09l-.07.05-.1.06h-.29l-.2-.08h0l-.07,0-.08,0-.15.05h-.06l-.09,0,0,0-.1.13-.16.13-.09,0,0-.14,0-.06h0l0,0h0l-.1.1-.16.05-.13,0-.21,0-.16,0h-.07l-.15,0-.13,0h-.24l-.23.1-.4.21-.31.1-.17,0-.13,0h-.23l-.18,0h-.13l-.08,0-.1-.09-.12-.08-.06,0h-.17l-.27.12-.08,0-.09,0-.18.07-.08,0h-.34l-.08-.06,0-.06-.15,0h-.11l0,0,0,.09,0,.22v0l.1.23v0h-.15l0,0,0,0,0,.19-.1,0,0,0,0,.11h0l-.15-.09h-.06l.06-.09-.07-.19-.07-.17.07-.11.13-.13.15-.16v-.17l0-.05-.08-.06-.13.07-.1.08H2063l-.07.05,0,.08-.08.07-.13,0-.21-.07-.21-.1-.12-.09-.1,0-.1,0-.27.21-.26.3-.06,0-.24.13-.16,0h-.07l-.32.06h-.16l-.12.07-.24-.08-.15-.09-.08-.1-.14-.21-.1-.09-.23-.09-.39-.22-.1,0-.27,0-.28,0-.06.08,0,.31-.05.08,0,.16,0,0,0,0-.09,0-.06,0-.13.06-.27.09-.1,0-.31-.12-.11-.07-.08-.09,0-.14-.05-.08v-.05l0-.06-.06,0-.07.05h-.07l-.09,0-.22-.12h-.16l-.1.14-.08.05h-.09v0l.06-.09-.25,0-.14.07h-.11l-.08,0v0h.09l.07,0,.28,0,.06,0,.07-.1.13-.09,0,0h-.1l-.43,0-.29,0,0,0h0l0-.12.05-.05h.06l.16,0,0-.1-.11-.07,0,0h-.08l-.06,0,0-.12-.05-.13-.07-.07v0l.13,0,0-.19,0-.11h-.07l-.2-.09h-.06l-.06-.1-.12-.07-.06,0,0,0h0l-.09-.06-.09,0,0,0,.05-.11h.07v-.09l-.06-.14V137l.06,0h.07l.06.08,0,.09v.08l0,.07,0,0,0-.08h0l0,0,.09,0,.22-.05,0,0H2055l-.06,0-.06-.09,0-.08v0l0-.05,0,0,.11,0,.1-.13,0,0-.05,0h0l-.05,0v-.06l0-.05v-.07l-.12-.18,0,0,0-.06.09-.09.09-.12v0h-.07l-.31,0-.12,0-.22,0,0-.06v-.06l.05-.11v-.25l0-.15.12,0,.15-.2.24-.25h.26l.1-.07h.15l0,.05v0l.13.07h.24l.05,0,.06,0-.11-.12,0,0h.1l.11,0v0l0,0,0,.07h0l.3,0,.32,0,.1,0h.25l0,0-.07-.05-.08,0-.05,0,0,0,.16-.12.09,0,.42-.07.31,0v0h0l-.4-.06-.1-.05-.13-.11,0,0,0-.06,0-.11,0-.09,0-.06h.16l.55.09.39-.06.43.14.41,0,.08-.06.11-.2.58-.33.2-.17.22-.09.37-.11.31-.14h.09l.75.06h.51l.24-.13.14,0,0,0,0,0V133l.08.12.08.08.24.12.33-.1h.06l.06,0,.12.31.09.11.12.08h.1l.07-.07.05,0h.12l.2.11.07.11.34.09.3,0,.14.09.43.1.16,0,.28-.1.53-.1.35.15.09,0,.09,0,.11,0,.13,0,.39-.18.12-.1.13,0,.12-.06.3-.2.09-.12ZM2054,135.18l-.21,0-.06,0,.06-.08.13,0h0l.05.08v.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TT"
                                    d="M1974.05,165.12h0v0l.09-.06.13,0h0l0,.06Zm-.24,1-.15.06h-.39l-.16,0H1973l.23-.11,0,0h.12l0-.25v-.06l0,0,0,0-.09,0v0l.06,0h.11l.09,0h.18l.09,0h.15l-.08.11,0,0v.18l0,.09,0,.06,0,.06v.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TV"
                                    d="M2193.6,181Zm-.91.16h0v0Zm2.21,1.1h0Zm.48,1h0v-.09l0,0h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TW"
                                    d="M2141.69,154.14l-.06.11,0,.13,0,.11v.12l0,.11,0,.11-.09,0-.05-.08v-.13l-.06-.15,0,0-.09-.09-.08,0-.07-.06h0l0-.09,0-.09-.07-.25,0-.07,0-.05v-.12l0-.09,0-.1,0-.13v-.12l0-.06.43-.77.12-.17.07-.08.06-.09.06-.11.07-.11.05,0,.25-.1.08-.09.06,0h.07l0,.05.05,0,0,0,.11.05.05,0,0,.09-.07.08,0,.07v.29l-.08.25-.09.16,0,.08,0,.19,0,.19-.05.25-.07.25,0,.1-.06.1-.12.19-.14.16Zm-2.4-1.91,0,.07,0,0-.12,0v0h.05l.06-.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="TZ"
                                    d="M2066.71,182.76h-.07l0,0,0,0,.05-.06.12-.1,0-.06h0v.07l-.07.16h-.06l0,.06Zm-.2-1.66.07.19v0l-.05,0h0l0,0,0-.06h0l-.06-.08h-.06l-.06-.1,0-.08v-.14l.07-.07,0-.12,0,.08v.13l.06.15.05.05Zm.34-1.17v.32l-.05.13-.05,0h0l0,0,0,0,0-.23,0-.17h.1l.08,0Zm-8.34-3.59h2.91l.07,0,.07,0,.2.11.19.11.2.11.2.11.19.11.2.11.2.11.19.1.2.11.2.11.19.11.2.11.2.11.19.11.2.11.2.11.09.05,0,0v.22l-.06.09v.1h0l0,0,0,0,0,.07,0,0,.09.06.14.1.14.1.14.1.14.1.14.1.15.11.14.1.14.1.07.05h0l0,.08-.07.19v.08l0,.09,0,.06-.08.26-.06.1-.08.23,0,.18.05.13,0,.11.1.12.07,0,.06,0,.09.12.06.12.17.06.07.13,0,.09-.08.08-.07.12-.06.17v.25l0,0,.09.06v.18l-.09.22,0,.1v.08l.07.26.1.13v0l0,0,.17.24v.2l.06.15,0,.14.05.11v.07l-.05.08.13,0,.07.06,0,.07h.09l0,.05.07,0,.16.11.05.05v0l-.11.08-.16.13-.17.12-.15.09-.12,0-.12,0-.11,0-.11.08-.14,0H2066l-.18.05-.17.11-.11.07-.16-.1-.13,0h-.23l0,0,0,0,0,.1-.09.09-.17.09-.16,0-.14,0-.1,0,0,0-.07,0h-.1l-.09,0-.09.07-.15,0h-.19l-.11,0v-.06l-.09-.07-.16-.08h-.11l-.08.08-.07,0-.06,0h-.55v0l0-.08,0-.06,0,0h-.07l0,0,0-.07,0-.06,0,0,0-.05v-.08l0-.11,0-.07v-.08l0-.08-.05-.09v-.27l0-.16v0l0-.07-.14-.18v0l-.22-.18-.08,0,0,0,0,0v.09h-.09l-.08,0-.07,0h-.25l-.09-.08-.09,0h-.09l-.15-.1h0l-.05,0-.1-.05-.13,0-.11-.05-.05-.06-.11,0h-.09l-.08,0h-.18l0,0v-.08h0l-.06,0h-.13l-.06,0,0-.05,0-.09-.08-.05-.09,0h-.29l-.06-.05-.08-.07-.05-.08-.05-.11,0-.07,0-.08-.06-.13-.09-.17-.07-.14-.07-.16,0-.11-.06-.12-.09-.16,0-.06-.05-.05-.13-.1-.15-.11-.09-.07-.11-.2,0-.08,0-.13,0-.13v-.06l.1-.17v-.12l-.05-.13,0-.1,0-.07-.05-.13-.07-.18,0-.08v-.06l0-.15,0-.16v0h.29l.05,0,.16-.1.19-.2,0-.09.08-.13.07-.07,0,0,0-.07,0-.06.1-.09.09-.07v-.06l.05,0,.1,0,0-.07v-.07l0,0v-.05l0,0h-.06l-.1,0-.08,0-.06,0,0,0v0l0-.05v0l0,0,0,0v0l0,0,.08-.17,0,0h0l.06,0h.13l0,0,0-.06,0-.12v-.09l0-.07v-.1l0-.15,0-.12-.05-.09,0-.06-.08,0-.11-.14,0-.07v-.05h.11l.07,0,.07,0h.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UA"
                                    d="M2065.33,126.33l0,0-.32,0-.26,0-.19.21h-.11l-.16.05-.11.07-.12.15-.1-.07h-.12l-.12,0-.14.09-.08,0-.15,0-.19.06-.39.32-.13.24,0,0-.07.05-.07,0h0l.18-.17.06-.06v-.12l-.06-.09-.15.23-.09,0-.11.07v.27l.05.14.1.24.22.33.11.12.07.05h.1l.17-.11h.08l.17,0,.06-.07.08,0h.11l.13,0,.13.05,0,.12-.06.09,0,.1,0,.12-.15,0h-.17l-.17,0-.06,0,0,0-.07,0-.1,0-.09,0-.11.16-.19.11-.06.12-.18,0-.16,0-.23.11-.17.24-.19.15-.15,0h-.15l-.09,0-.19-.16v-.05l0,0,0-.08.07-.3v-.09l0-.15-.15-.12-.12,0-.07,0-.25-.2-.13,0-.15.05-.06,0,0-.07.3-.25.29-.21.13,0,.17-.09.18-.15,0-.11,0-.09-.08,0-.07,0-.15-.09-.06-.06-.24.07h-.13l-.3.06-.13-.06-.27-.17-.1,0h-.09l-.05-.06.06,0h.07l.07,0,0,0v-.06l-.14,0-.13,0-.08,0-.07-.06h.15l.15,0h.24l.21,0,.05-.06.12-.1,0,0-.21.07-.21,0-.07-.06-.07-.09,0-.1,0-.1,0-.17-.07-.15,0-.09-.08-.07.07.17,0,.11,0,.11v.27l0,.1-.09,0h-.11l-.12,0,0-.15-.06,0-.09.15-.07,0-.17,0-.32.1,0,.1-.05.15,0,.08,0,0-.13.21,0,0-.25.3,0,0-.16.07-.1.06-.08,0-.12,0-.05,0,0,.05v.11l.07.08.05.26,0,.11-.05-.08-.08-.07-.15-.06-.17,0-.18.11-.12,0-.07,0h0l0,0v0l0,0h0l-.29-.08-.12-.07-.1-.13.05-.05,0,0h.18v-.13l0-.07.06-.09.1-.08.06-.07v-.11l.1-.06.09-.09,0-.11,0-.06-.06-.15v-.18l0,0,.08-.05.09,0h0v.19h0l0,0,.05-.1,0,0h.05l0,0h0l0,0,.06,0h0l.05,0,0,0h0l.08.12,0,0,.18,0,0,0,0,0-.19-.15v-.25l0-.08,0-.06-.15-.08-.11-.07,0,0v-.12l0-.06v0l0-.07v-.12l0,0h-.05l-.07,0,0-.06-.12-.1h0l0,0v-.05l0-.07,0-.11,0-.1v-.2l-.07-.12h0l0,0-.06,0,0,0-.06-.06-.08-.17-.16,0h-.07l-.06.08,0,0,0-.06,0,0,0,0v-.1l0,0h-.12l-.06,0v0l0,0h-.07l-.07,0-.06-.07-.1,0-.13,0h0l-.09,0-.05,0-.06,0-.1.08h-.3l0,0-.19.13,0,0h0l-.12,0-.13,0,0,.12,0,.07-.07.1-.24,0-.2,0-.21,0-.27.12-.09.1-.08,0H2053l-.05-.06-.18-.16-.06-.07-.09,0h-.09l-.1,0h-.09l-.11,0h-.05l-.27-.06h-.28l-.19-.13h-.06l0,.06,0,.06-.13,0,0,0,0,0v-.1l0,0,0-.05v0H2051l-.08,0-.06-.1-.09,0-.07,0,0,0,0-.06,0,0h0l0-.07h0l-.09,0v-.23l.14-.16,0-.09.05-.18,0-.08.05-.07,0-.07,0-.06h0l.11.05.1,0,0,0,0,0v0l-.08-.07-.05,0v0l0-.07v-.08l0-.08L2051,123V123l.05-.1.17-.23.06-.08.08-.11.21-.24.13-.15.09-.08.13-.14.06-.07.24,0,0-.07,0-.07,0,0v-.13l0-.15,0-.06,0,0v0h.06l0,0v0l-.1-.1,0-.07-.07-.2-.14-.2,0-.07v-.06l0-.07,0-.07-.05-.11h0V120l0,0,.06,0h.07l.07,0,.08,0h0l.13-.1.14-.17,0-.09,0,0,.12,0h.34l.1,0,.09,0h.18l.29,0h.19l.13,0,.32.08.11,0,.06,0,.1,0,.19,0,.17,0h.11l.06,0,.12.2,0,0h0l.1,0h.14l.08,0v.12l0,0h0l0-.07,0-.07,0,0,.14,0h.07l.06-.05h0l.1,0,.13,0h.1l.06,0,0,.12,0,0h0l.06-.12.05,0,.07,0,0,0,0,0,0,0h0l0,0,0,0,.05.12.06.13.05,0,.11,0,.08,0h.14l.19,0,.14,0h.09l0,0,.08.08,0,.11.1.07h.09l0-.07,0-.06,0-.07v-.1l0-.09,0-.09.05-.14.05-.12,0-.07.08-.12.08-.08.12-.14.1,0,.08,0,0,0,.12-.08h.4l.09,0,.09,0h.14l.08-.05.06,0,.08-.23,0,0,0,0h.06l.13,0,.15,0h.08l.23-.13.13,0,.15,0h.15l.11,0,.08,0,.1.1.08.14.09.27.27.29v.06l0,0-.13,0-.11,0v0l0,.06,0,.08v.2l0,.08,0,0v0l0,0v0h.24l.12.05.09,0h0l.1,0,.11,0h.07l0,0,0,.09,0,.08,0,0h.11l0,0,0,0v.06l0,.06,0,.16,0,0,0,.06v.07l0,0,0,0,0,.1.07.12.05,0,0,.1.07,0,.12-.09.08,0,.11,0,.1,0,.07.06.05.08.06,0,0,0,.12,0,.06.06.06,0,.07-.06.05-.06.22-.07.13,0h0l.08,0,.08,0h.08l.07.1.07.07,0,.11.1.15.22.21.09.06h.06l0,0,0,0v-.1l0,0h0l.17.13h.19l.12.1.13.09h.1l.08,0,.05,0,0,0,0,.07,0,.06h.15l.15.11.14.11h.09l.08,0h.06l.05,0v0l0,.06v.1l.06.08v.09l0,.08,0,.07-.09.1-.08.09-.12,0-.07,0,0,.07.05.06.1.05.11,0,0,0,0,0-.07,0-.11,0,0,0-.05.06,0,.11,0,.09.11,0,.06,0,0,.08,0,.09v.08l0,0v0l0,0h.05l0,0v0l-.07.1-.07.18,0,.1v.11l0,.06h-.53l-.1,0H2066l-.07,0-.1.17-.07.06-.12.06-.13,0-.08.07,0,.11v.09l0,0,0,0,0,0v0h.07v0l0,0,0,0,0,0v.11Zm-5.72,1.19.12.07-.13,0-.28-.06-.13-.06,0-.07,0-.08.07.09.05,0,.35.09Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UG"
                                    d="M2061.35,176.35h-2.92l-.06,0-.07,0h-.22l0,0,0,.06-.07.07-.05.06,0,0-.1.07,0,0h-.05l0-.09,0,0-.2,0h0v-.38l0-.08,0-.09v-.09l0-.14,0-.09.05-.3v-.05l0-.14,0-.05h0l0-.09.06-.15.05-.07v-.29l.09,0,.13-.1,0-.12.08-.08.14-.05h0l.43-.4.2-.22.09-.12v0l0,0,0,0,0,0v0l0,0h-.05l0,0,0-.05,0,0h-.12l-.1,0v-.07l0-.14.07-.15v0l0,0v0l0,0,0,0,0-.11,0-.11,0-.06,0-.06v-.05l-.06,0,0,0,.06-.08.11-.09.09,0h.07l.12,0,.12.05h.06l.07,0,.16-.09,0,0,0,.06.05.09.1,0,.05,0h0l0-.07,0,0,.08-.05.19,0h.18l.1,0,.14-.08.15.1.16,0h.15l.05,0,0,0,.16-.16.22-.21.14.3.05,0v.05l.1.08.11,0,0,0v0l0,.18v0l0,.18.07,0,.06.18.13.07v0l0,.08,0,.1,0,0h0l0,.11,0,.05,0,.17,0,.16v.38l0,0,0,0-.05.06,0,.07,0,0,0,.1v0h0l-.06,0-.07,0-.05,0-.06,0,0,.05-.06.16-.11.13,0,0-.1.07-.05.1,0,.11,0,.08-.08.11,0,.17v.35l0,.4Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UM-DQ"
                                    d="M1882.49,175.79Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UM-FQ"
                                    d="M2199.36,175.22h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UM-HQ"
                                    d="M2199.2,174.7Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UM-MQ"
                                    d="M2198.51,148.48h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UM-WQ"
                                    d="M2183.79,157.41h0l0,0h0v0h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="US"
                                    d="M1900,85v20.6l.22.07.22.08.07-.15.24.11.2.1.13-.13.15-.14h.55v.12l-.06.19,0,.17.13.16.16.09.15.08.07.23.16.17.13.13.12.13.17.18.12.12.16.17.1.1,0,.19.06.23,0,.14.08,0,.15-.15.14-.1.17-.11.12-.08h.21l.11-.23v-.32h.11l.06,0,0-.09-.07-.13.21-.07.15,0,.21-.12.21-.12.1.09.1.09.19.21,0,0,0,.1,0,.1.12.28,0,0,.1,0,.12.09.05.08.16.12,0,0,0,.09,0,.07,0,0,0,.08.07.08.14.1.09.07.14.09.13.19.12.17.13.16,0,.13.14.2.14.25.11.23.08.12.09.18.12.22.13.25.1.16.13.22.06.14,0,.09-.06.11.17,0,.12,0,0,.12,0,.16.13.07.09,0,0,.09,0,.09v.16h.23l.09.07.13.09.12.09.11.07.14,0,.18.07.08.12.16.06.06.18.18.06.11,0,0,.07,0,.09v.2l-.05.09,0,.09,0,.1v.22l0,.1.06.18v.18l-.13.26,0,.13v.05l-.09.13-.16.18-.08.1,0,0-.21,0-.08-.23,0-.17-.06-.16v0l0-.11.22-.08v0l-.08,0,0,0,0-.17v-.25l0-.2,0-.12-.14-.24v-.07l.06-.07,0-.08-.24.13-.32.13-.13.09,0,0v0l0,.09v0l0,0,0,.15-.07.15,0,0-.12-.06,0,0-.06-.2,0-.06,0,0,.06-.1.08-.15.15-.37h.1l.17-.07-.27,0,0,0,0,0,0-.08,0-.1-.11,0,0,0-.07-.11,0-.05,0-.06v-.08l0,0h-.07l0,0v-.19l-.14,0-.06,0-.09-.12,0-.06v0l0-.14v0h-.09l-.51-.21,0-.28-.09-.37-.1-.15,0-.06,0,0h0l.2.11.18.13,0,0-.3-.28-.07-.08,0-.1V110l0,0,.28,0v0l-.28-.08h0l-.06.12,0,0h-.06l0,0-.07-.14-.07-.1-.13-.14,0-.09v-.15l0-.14.1-.31,0-.05v0h0l0,0-.08.14-.09.24-.07.08,0,0-.07-.09-.14-.12-.16,0-.11-.12-.15-.34,0-.17,0,0-.08-.05,0-.08-.08-.42-.11-.29,0-.16v-.15l0,0,0,.12v.06l-.07,0,.06.12,0,.06h-.1l.11.21,0,.32.07.23.05.19,0,.15,0,.13.08.3v.11l0,.06,0,0-.15,0-.06-.07-.08-.14L1905,109l-.28,0h0v-.11l0-.2,0-.08-.15-.3v-.06l.2-.13h-.1l-.08.05,0,0,0-.19,0-.07v.16l0,.1v.13l0,0,0,0h0l-.07,0-.07-.07-.07,0,0,0,0-.08-.05-.06-.24-.07-.15-.09v0l0,.1v0l0,0-.06.09h0l.07,0h.08l.12,0,.12.08,0,0,0,.06v0l.12.07v0l-.07.11.15,0,.09,0,.11.17,0,.1v.12l0,0,0,0-.31,0-.11.14h0l-.09,0-.15-.11-.19-.11-.44-.33v-.08l0,0-.06,0-.08-.08-.1-.14-.07-.11,0-.08-.06-.09-.2-.19-.1-.07-.1,0h-.07l0,0,0,0v0l-.18,0-.16-.09-.43-.25-.21-.16-.13-.07,0,0,0,0,0,0,.09,0,0,0,.1-.16v-.06l-.05-.11,0-.11v-.06l0-.06v0l0,0,0,0h0l.1.15,0,0v.2l0,.23h0v-.3l0-.07,0,0,.12,0,.05,0-.23-.1-.15-.2,0,0h-.08l-.08.08-.22.26-.06,0-.28.14-.19,0-.21,0-.18-.05-.45-.23-.07-.05.1-.14v-.05l0-.14,0,0,0,0v.14l0,0-.07,0-.13,0-.4-.12-.41-.1-.37,0-.52.08-.27.08h-.16l-.16,0v0l.07,0v0l-.09-.13-.14-.07-.18,0-.1,0,0,0-.06,0-.11,0,0-.08,0-.23,0-.14,0-.09.09-.16h0l-.13.12-.11.12-.1.15-.06.07-.08.07-.13,0-.16-.09-.15-.06h-.16l.08-.09.05-.07.06-.11v-.06l-.43,0,0-.06v-.08l-.07,0-.09,0-.14.07-.06-.06,0,0,0,0,.09-.1-.13,0-.06-.06,0,0v-.18l0-.12.29-.11-.09,0-.18,0-.13.09-.14.14-.1,0,0,0h-.15l0,0,0,.06,0,0,0,0h0l0-.06-.08,0,0,0,0,0,0,.09,0,0-.14,0h-.08l-.09-.11v0l0-.09.2-.39h0l-.07.06-.13.15-.06,0h-.1l0,0-.06,0-.07,0,0,0,0,0h0l.1-.06h.06l0,0-.08.17,0,.16,0,0h-.07l-.08,0v.05l.14.13h0l.07,0v0l0,.12,0,0,0,0h-.16l-.08.08,0,.06h0l.07,0,.1,0h.14l.09,0,.07-.06.06,0,.06.08,0,.07,0,.06,0,0-.08,0,0,0,0,.06v.18l0,.18,0,0h-.07l0,0-.09.24,0,0,0,0h0l0,0-.06,0-.1,0h-.09l-.15,0-.06,0,0-.06-.13.07,0,0-.09-.17h0v.18l0,.06-.08.14,0,.22h0v0l0-.2,0,0-.08.12v0l0,.15,0,0-.15-.08h0l0,.12v0l-.22.23h0l0,0h0l-.13.08h0l0,0h0l0,0v.1l-.05.1-.16.15,0,.07,0,.1h0l-.1-.06-.11,0v0l0,.06v0l-.05,0h-.06l-.07,0-.11,0-.13.08h-.11l-.15-.13h0l0,0,0-.1,0-.08,0,0,.14-.11.17,0,.1-.06.13-.13.07-.09.13-.25v0h0l-.29.23,0,0h-.06l-.23-.09,0,0,0-.11.06-.25.05-.13.11-.19.15-.2,0-.14.08-.35v-.17l0-.2v-.11l0,0,.34-.19.16-.14.31-.2h.08l.07.07.07.06.08,0h.11l.13,0,.2,0,.43.14h.09v0l-.06-.1-.3,0-.12-.06-.34-.24-.08-.09,0,0,.08,0,0,0v-.06l.05-.09.09-.1.13-.11.24-.15h-.09l-.18,0-.06,0-.12.11-.05.08-.06.15,0,0-.13,0-.33,0-.06-.08h-.07l-.31.19-.11.1-.08.12-.12.08-.16,0-.12.07-.13.13-.05.1v0l0,.14,0,0H1890l-.12.1-.25.29,0,.11v0l0,.08,0,.06-.07.08-.16.13-.1,0h-.07l-.07,0-.11-.08H1889v0l.13.09.13.11.08.1,0,.08v.08l0,.08-.09.14-.09,0-.23,0-.07,0,0,0,.16.06,0,0,0,.12,0,0-.13.07-.12,0h0l0-.09v0l0,0-.07,0-.15.14,0,0,.06,0,0,0-.08.09,0,.07,0,.06-.26.2,0,0-.06.17,0,.16,0,.06.21.08h.1l.12.06.22.14.08.09v.09l0,.06-.07.12-.16.18-.08.05-.11,0,0,0-.14.16,0,.09V109l0,.06-.19.11v0h.06l0,.1v.13l0,0h-.11l-.15.05v.11l-.39.07-.09.18,0,0-.16.13-.09,0-.11,0-.05.05v0l0,0-.09.08,0,.1,0,0-.17,0,0,0,0,.14h0l-.06,0-.08,0-.18.15,0,.05v0l0,0,0,.09v.06l-.07.17,0,0-.09,0,0,.09h-.08l-.06,0,0,.06,0,0h-.05l-.06,0-.07.09-.07,0-.06,0h-.17l-.05,0,0,.06,0,.14,0,.07h-.08l-.09,0h-.09l-.15.09,0,.06.1,0,0,0v0h-.13l0,0-.06,0-.15,0-.06,0-.11.16v0h0l.06,0,.08,0,0,0,0,.05,0,.08h0l-.14.14,0,.06,0,0,0,0v-.16l0,0h0l0,0-.07.19-.08.09-.59.24-.09,0v.1l0,.09,0,.07,0,0v-.32l-.06,0h-.06l-.06.06h-.08l-.08,0-.18.17-.12,0,0,0-.05.09,0,0h0l-.06,0-.06,0,0,.07,0,0-.12,0,0,0-.06.08-.07.06-.07,0-.19,0-.08,0V114l0-.07,0,0,0,0h0l.1,0v0l0,0-.09-.06-.09,0h-.06l-.07,0,0,0,0,.06,0,.18v0l-.22.31-.09.1h-.09l0,0-.06.08-.05,0h-.09l0,0v0l0,0,0-.06-.06-.1,0-.06h-.09v0l0,.24v0l-.06.07-.13.07h0l-.12-.15-.12,0v0l0,.1,0,.09-.08.08-.06,0h0v-.06l0-.11v-.1l0-.08v-.06l0,0,.15-.12h.06l0,0h0l0,0,0,0,0-.05.06-.07.12-.09.13-.16.15-.24.18-.2.2-.17.23-.14.44-.19,0,0,0,.06,0,0h0l.17,0,.06,0,0,0,0,0-.1,0v.05l.15.18,0,0h0v-.16l0,0h.16l0,.05.06,0,.08,0h0l0,0,0-.05-.16-.11,0,0v-.07l0-.09,0-.13.07-.17.07-.12.14-.14.1-.06.24-.21.46-.21.12-.14.15-.15.07,0v.06l0,0,.1,0h.1v-.34l0-.07.07-.13.1-.15.14-.16.09-.08.08,0,.08-.07.14-.18,0,0,.1,0h0l0,0,0,0,.1,0,.07,0v0h0l0,0,0-.1-.07-.07,0-.07,0-.11,0-.26v-.27l.06-.16.1,0,.23,0-.14-.07h0l-.08,0,0-.17V109l.06-.14.22-.25.23-.16,0,0,0,0,.11-.34.1-.3-.14.26-.16.19-.49.23-.32.2-.16,0-.1,0-.08-.18,0-.07-.06-.12,0-.15,0-.11.11,0,.11,0h.1l-.13-.11-.18-.09-.09,0-.06.15-.09.1-.08,0,0,0,0,.13-.06.19,0,.14.08.35V109l-.15.06-.12-.11-.26-.45-.09-.13-.19-.21-.07,0-.08.11-.09,0-.21-.16-.1-.11-.09-.15-.15.08-.12.1-.15.14h-.1l-.27.13h0l0,.07,0,0,0,.13-.37.11-.36-.06.13-.07.14-.06.12-.14-.05-.18v-.21l.13-.17h-.13l-.09.06-.09-.13,0-.24.1-.15,0-.11,0-.16v-.14l-.07-.22-.21-.49-.1-.37-.16-.19.12-.33.14-.29.18-.13,0,0h-.1l-.06,0-.06.09-.06.08-.19.37-.12.18-.07,0,.12.07,0,.06,0,.14,0,.16,0,.09H1880l-.13.13-.32.15-.42.08h-.21l-.22-.17v-.18l-.31-.28-.18-.29h-.13l-.11-.07-.13-.12v-.1l0-.07-.08,0h-.11l-.12,0,.32-.38.1-.25.09,0,.11,0,.16.09.13,0,0,0,0,.08,0,.15,0,.1.06,0,.16-.16.12-.14h.06l0,0,.07.15.08.15.19-.14.1-.18-.09-.08-.1,0-.26-.06.06,0h.17l.06,0-.06-.07-.09-.06-.22.2h-.41l-.29-.12-.29,0,0,0-.06-.06.16-.15.12-.08v0H1878l-.13,0-.06-.06v-.12h0l0,.06-.07,0-.06-.06,0,0,.07-.08h-.09l0,.11v.2l-.09,0h-.08l-.06-.12-.06-.26-.16-.07,0-.13.1-.17-.05-.09-.11,0-.12.09-.05-.08V103h0l0,0,.24-.06,0,0-.2-.1,0-.1.08-.07h.14l.21-.06-.09-.12,0-.06,0-.1,0-.18.24-.4.23-.34.07-.07.11,0,.1,0,.1.07,0,0,0,0,0-.14.15-.06.08-.15v0l-.09.07-.1.1,0-.1,0-.25,0-.24,0-.11.08-.1.23,0,0,0v0l-.14-.15.06-.12,0-.06.27-.1.16,0,.19.11.11.14,0,.07,0,0-.05,0,0,0v0l.08-.08.13-.1.08,0,.06.08h.06l.21-.07.1-.07.13-.19.17-.12.25-.38.07-.16.08,0h.07l.06.13.07,0,.43,0,.23-.06.15-.13.16-.21.09-.14,0-.19-.06-.24-.06-.21-.08-.46-.21-.31-.15-.09h-.1l.07-.2.2,0,.14,0,.1-.1,0-.07,0-.15,0-.16,0-.09-.08-.09-.09-.14-.06,0h0l-.26.28H1881l-.12,0-.1.16-.28.14-.15.14-.28.35-.07.15h-.09l-.06-.31-.3-.29-.09.1,0,.09.07.07.11,0,0,.09,0,.11-.11-.11-.2-.16-.21-.08h-.55l-.35.16,0,0h0l-.06,0,0,.06,0,0-.07,0-.15,0-.28-.1-.64-.15-.17-.09-.15-.22v-.15l.06-.06V96.3l-.13-.06-.25-.31-.1-.13,0,0,0,0,.09,0,.21,0,.07-.2.16-.06.15,0,0-.06,0,0-.38-.1-.05,0-.69-.19-.53-.32-.05-.06,0-.14.08-.14.07-.06v.15l.31-.18.16-.22.31,0,.07-.07.09-.12.14-.21.19-.11.13-.1.17-.06.15.1h0l.26,0,.09,0,0,0,0,0-.26-.18,0-.1,0-.07.3-.21.23-.07h.12l.36-.27.2-.08.37,0h.31l.08.09-.17,0-.07,0,0,0,.06.07,0,.09-.1.27v.21l-.06.06-.07.1.32.3.48,0,.26-.06.15.09.13,0,.34,0,.26.06.11,0,.24-.45.09-.07.1.08.14.06.08,0,.07.12,0-.24,0-.09-.39-.17-.26.08-.08-.09,0-.19-.28-.46-.11-.1h-.14l-.07-.16-.06-.21.12-.09.11,0,.1.07.11.27.1.05,0,.27.13.25.3.23.23-.09h.17l.1,0,.24.2.12,0,.39-.11v-.2l0-.15-.09-.1-.26,0-.2-.15-.18,0-.32.24-.16-.1-.1-.12-.16-.13,0-.24.14-.28.1-.13-.09-.1-.23-.07-.39.07,0-.09v-.11l-.16.2-.16,0-.22,0-.49-.17-.18-.22L1879,91l-.13-.5-.17-.31-1.16-1.07-.53-.27-.26-.31-.16-.07-.15,0-.19-.1.13-.12.09,0-.1.12.07,0,.12-.08.06-.09.09-.37.09-.57,0-.22.64,0,.43,0,.14,0,.55-.09.14-.06.26-.2.3-.34.27-.46,0-.12v0l0,0,0-.18,0-.41.13-.39.56-.9.25-.36.09-.17.09-.12.06.12,0,0,0,0-.05,0-.09.12-.12.08,0,0h.07l.21-.09.12-.1.6-.19.32-.32v-.07l.48-.4h.06l.08,0-.13.27.09.06-.08.32h.17l0,.15v-.48l0-.12.12,0,.27-.13h-.33l-.2-.29h-.11l.37-.43.34-.26h.07l0,0v.08l-.07,0-.08.09,0,.08h0l.16-.07.07-.08h.35l.1-.06,0-.06h.45l.08,0,.28-.23.26-.28.12-.15.21-.39.17-.26.29-.25.07,0-.09,0-.07.11.09.14.61.3h.15l.06.18,0,.17-.16.18-.31.2.1.07.06.17.09,0,.15-.07.12-.1.25-.34.07-.19.06,0,.21,0,.11.09.14.18,0,.17-.06.09.18.13.19,0,.18.1.25-.21.2,0h.19l.25-.12.41.16.1,0,.17,0,.18.09.06.11-.19.21,0,.22.06.1h.12l0,.13.07,0h.38l0,.07,0,.07-.12.16.67.09.09-.09.13,0,.3-.13.11.06.13.13.12,0,.11,0,.26-.19h.3l.12,0,.13,0,.39.21.15,0,.19.27h.1l.11-.12h.1l.1.11.15,0,.08.17.07.07.6.12.29,0h.43l.2.08h.22l.35.3.19,0,0,.07.53.07.19-.15.32,0,.3-.13h.16l.19,0h.08l0-.06.47.22.27.26.11.18.55.27.16.15.11.16.07,0,0,0h.19l.07,0Zm-23.15,8.41,0,0v0l.11-.09.19-.12v0l-.11.09Zm16.76,11.2-.11,0-.06,0v0l0-.1v0l.06,0,.06,0,0,.05Zm-3.77.87h0l.06-.09,0-.18,0,0v0l-.09.19,0,0Zm4-.16v0l0,0,0,.09,0,.15,0,.09,0,.06,0,0h0v0l0-.06h-.06l0-.13,0,0,0-.06v0l0-.16h0v0h0l0,0,0-.07h0l0,.08Zm1.17,0,0,0h.23l0,0,0,0-.07,0-.2.08-.16.1h0l0-.12,0,0,0-.06v0l0,0,.06-.07,0,0,.15.06Zm1.18.21,0,0h-.08l-.05,0,.15-.12,0,0Zm-19.39-.09.09.09h0l.14,0,.06,0,0,0,0,.06v.11l0,.09V106l.08.08,0,.1v.11l-.16,0H1877l-.14.08,0,0,0,.08,0,0h0l-.07-.08-.08,0-.26-.06-.33-.22-.14,0-.15-.17-.13-.2.09,0,.08,0,.39,0,0-.15,0,0,.13,0,.11-.08h0l.05,0,.11,0h.06l0,0Zm17,1-.1,0,0-.05,0-.14,0-.08h0l.11-.16.13-.11.12-.16.12-.23,0-.09h.05l.09.06.06.08,0,.06-.3.33,0,0,0,.11,0,0h0l0,.05,0,.08,0,0h0l0,0,0,0-.07,0Zm-.26-.46,0,.06-.18,0,0-.11.14-.07.15.11-.1,0Zm3.19.46h0l.07-.12.09-.14.08-.08.11,0v.06l-.14.12Zm-15.09,2.23-.06,0-.07,0-.06-.17h0l.09-.12.2-.09h0Zm7.78.16h0l-.07,0,0-.06,0,0,.13-.1h.07l0,0v.07l0,0Zm.07.22h0l0-.1h0l.11.09.07,0,0,.11h.09v.11l-.08.12,0,0,0,0h0l0-.06,0-.06h0l-.06.07v0l0,.06v0l-.07,0h-.07l-.08.05v0l0-.09h0l0,.11,0,.07-.07,0,0,0h-.06l-.08,0h0l-.29-.11-.07,0,.24-.27.13-.1h.07l.08,0h0v-.12l-.07-.08v0l.16-.06h.06l.06,0,.06,0,.06.07Zm16.35.35.24,0h.17l.16.26.09.21.06.14,0,.14.05.14v0l-.09-.09-.06-.19,0-.07,0,0,0-.07-.07-.18v0l0,0,0,0h0v.14l0,.14.16.3.12.17,0,0v.15l0,.07.06.15v0l-.16.06-.15.26-.16.16-.07,0,0,0,0,0,0-.08v-.1l0-.06.08-.32v-.11l-.1-.15-.06-.12,0-.16,0-.45,0-.15,0-.12,0-.09,0-.11,0-.12v0l.08.06.1.17,0,.11Zm.34-.12v0h-.13l-.13-.07-.06-.08v0l.12,0,.11.08Zm-1.3,0,.13.17v0l0,.12-.07,0,0,0,0,0,0,0,.14-.16,0,0h0l.17,0,.15.08,0,.06,0,.11,0,.23-.13,0h0l-.06,0-.1.08.08.06h.25l.07.14,0,.1-.06.18-.14,0-.12-.11-.26-.15h-.06l0,0v.29l-.07.11-.2,0-.08-.15-.07-.24-.28-.29-.08,0-.1-.17,0-.14v-.08l.06,0,.08-.06,0-.13.07.1.09.11v-.1l0-.08h.09l0,0,.07-.07.08,0,.06,0Zm-15.84.73v.1h0l.14-.1.07,0h.1l.07,0,0,0v0l-.06.09v0l.07.1.16,0,0,0v0l-.11.16,0,0h0l-.2,0-.19,0h-.1l0,0,0,0h.16l.06.07,0,.06v.06l0,0-.07,0h-.08l-.1.06-.06.08-.2,0-.16.1-.06,0,0,.06,0,0-.14,0,.08,0v.12l-.11.17-.2.14H1888l0,0v0l.26-.28v0h-.07l-.11-.07-.08.05h0l0-.06,0-.08v0l0,0h-.17l-.07,0,0,0v0h.11l0,0,0,0,0,.05v0l0,.07,0,.09-.08,0-.14-.19-.07-.29-.13-.22v0l0-.14.13-.19.14-.06.1-.08.09,0h.06l.08,0,0,.07,0,0v0l0,0,.06.15.07.14,0,.06.06,0-.06-.1,0-.13,0-.26,0-.07,0,0h.1v0l-.11-.09-.06-.07,0-.06v0l.06-.08,0,0h0l.07,0,0,0,.08.17,0,.05h0l0,0,0-.06,0,0h0l.1,0h0V110l0,0v-.06l0-.08.06,0,.2.06.09.07,0,.12Zm-.31,0,0,0,0,0-.06-.05-.1-.09,0-.05v0l0,0,.13.06,0,.06,0,.09Zm16.85.85.08.19,0,.15,0,.17.09.36,0,.13v.31l0,0v0l0,.15v.22l0,.12,0,0-.06,0,0-.07,0-.07-.09-.22,0-.1v-.13l0,0,0-.1h0l0,0h-.09l-.07-.07-.06,0v-.16l-.11,0,0,0v-.12l0-.06.11-.17,0,0h0l-.07-.06,0-.18-.07-.1h0l-.1.29,0,.06-.14,0,0-.08v-.07l0-.22V111l0-.07.1,0,0,0,0-.06v-.06l.08-.16,0,0h.09l.2.18.06,0,.09.11Zm-16.64.39-.12,0h0l-.07.11,0,.05-.08-.09,0-.13.07-.09.32,0,0,0v0l0,0Zm18.12.21.06,0,0-.06h.06l.12,0,.07.08,0,.08V112l0,0h0l-.09-.11-.1-.18-.08-.06v0l0,.05.06.1,0,.06,0,.08,0,.06v.19l0,0,0,0-.16,0-.09,0-.11,0,0,0v-.19l0-.19v-.15l-.07-.13-.06-.08-.09-.07-.06-.08,0,0,.09,0,.14,0,.32.1Zm-.58.26.06.12h.09l0,.09,0,.13,0,.08,0,0,0,0,0,.16v.33l0,.16v.11l0,0h0l0,0,0,0,0,.09h-.06l0-.21,0-.35.1-.07-.06-.09-.13-.11,0-.07-.1-.17v-.05l0-.15.09-.13.12,0,.08.06,0,.05v0Zm1.15.54v0h-.12l0,0,0-.07v-.07l0,0,0-.1,0-.16.17.18,0,.08,0,.1-.06,0-.07,0Zm-19.8,0h0l-.07,0v-.06l.1-.06h.09v.1l0,0Zm-.43.13-.07,0,0,0v-.08l0,0,.1-.1.1-.07h0l0,0-.07.08-.15.15Zm20.81.54,0,.27h-.07l-.07,0H1908l0,0v-.12l0,0-.14,0,0,0,0-.09v-.11l0,0,.08,0,0-.14,0,0,.12-.27.06,0,.1.17.13.24,0,.22Zm-.61-.23h0l-.06,0-.13-.13v0l0,0,.07-.08,0,0h.19l0,0,0,0v0l0,0v.08l0,0-.1.07Zm-.73-.15.18,0h.16l0,.07,0,.07,0,.07v.11l0,0v0l.31.16.15.16,0,.09,0,.07.06.18.13.21.07.07,0,.06h0l-.1,0-.19-.14h0l0,.08,0,.06,0,0h0l.16,0,.14.14.05,0,0,.09v0l0,.07,0,0v0h0l.15,0,0,0,0,.28,0,.1v0l0,.06V115l0,.12,0,0h-.07l0,0-.07-.11-.07-.17,0,0-.09,0,0,0h-.06l0-.07v-.09l0-.09v0l0,0,0,0,0,.1,0,.07-.07,0-.12-.23-.14-.18,0,0v-.06l.07,0h0v0l-.11-.18v0l0-.09-.05,0-.14,0,0,0,0-.07,0-.06h-.17l-.08-.1,0-.06v0l.08,0h0l.08.06h0l.08-.08v-.06l.06-.06v-.06l0-.1-.08,0-.15.06-.14.09,0,0v-.06l.14-.15.06-.09v0l0-.07v-.16Zm2.39,1.39,0,.18-.07.18-.09.1-.07,0,0-.08h0l-.05,0,0-.07,0-.08,0-.07,0,.06,0,0-.11.07-.08.13,0,.09,0-.1,0-.22v-.09l.08-.14.1-.13,0-.41.33-.2h0l.11.15.11.21,0,.1v.29Zm-22.68-.54,0,0h-.07l0,0,0,0,.11-.14,0,0h0v.16Zm20.53.46,0,0v0l-.13.11v0l0,.07,0,0,0,.07-.09.08v-.23l-.09-.14.09-.07.06,0h.11l.1-.06,0,0Zm-25.25.37h0l.06-.1h0v0l0,.09,0,.12,0,.06v0l-.11,0-.09,0h0l0,0,0,0,0-.22v0l0-.07.06,0h0l0,0v0l0,.08Zm.33,0v.13l-.13-.08,0,0,0,0h.12Zm25.33.71,0,0h0l0-.06h.07l0,0,0,0,0,.08v.13l0,0,0,.07-.1,0-.07-.09-.11-.14-.06-.11v0l0,0-.07-.18,0-.15h-.06l-.09-.05,0-.08,0-.07.12,0,.19.18,0,.08.07.09v.12l0,0,.08.17Zm-24.91-.37-.06,0v0l0,0,0,0-.12.17-.06,0,.06-.14v-.08l0-.1h0l0,0,.06-.1h0l.06-.12h0v0l0,.07.05.06v.06l0,0Zm26.32.08.09.2v.08l-.08,0h-.08l0,0v0l0-.11,0-.06,0,0,0,0v-.1l0-.08,0-.1v-.1h0l.1.08.06.22Zm-26-.12v.15l0,0-.06,0,0,0v-.08h0v-.09l0-.06h0l0,.12Zm.14.29h0l0,0,0-.09v0l.06,0,0,.06v0Zm-3.79,0,.09.27,0,0,.06,0,.08,0,0,0,0,.06v0l-.26-.1-.15.15,0,0h-.45l-.1,0-.05,0-.11.14,0,0,0,0-.12,0h-.14l-.08,0,0-.07,0-.13v-.1l.13-.09,0,0,.16-.31.05,0h0l.14,0,.12-.08.25-.14h.24l.06,0,0,0,0,0Zm1.08.22h0l-.06,0,0,0v-.06l.13-.08h0l0,0v0l0,.11Zm-.23.71-.08,0-.09,0-.07-.07v-.08l.16,0,0,0,.05.07Zm-2.78.41,0,0V116l0-.11.06,0h0l0,0,0,.08,0,0,0,0,0,0-.09.06Zm-.26.11,0,0h-.16l0-.09v0l0,0,0,0,.07,0h.07l.12.09,0,.05v0l0,0-.1,0Zm-.71.26,0,.08.07-.05,0-.06,0-.09,0,0,0,0,.1.06-.09.1-.15.13-.06.1v0l.15,0h.05l0,0,0,0-.08,0-.07.07-.17.11-.06.09-.08,0h-.1l-.18.06-.1.06,0,0h-.08l0,0-.05,0,0,0h-.06l0,0h0l-.1-.06,0,0,.09-.07.07,0h.1l.1-.07.2-.09.06,0,0-.17,0,0,0-.07h.11l0,.08h0v-.06l0,0,0,0-.1,0-.08,0h0l0,0,0-.05,0,0v0l0-.05,0-.06.06,0,.11,0,.11,0h.06l0,0v.14Zm.37.28h0l0,0v-.06l0-.06,0,0h0v0l0,.07,0,0Zm-1.61.59-.29.16-.09.12-.07.12,0,.06h0l-.05,0-.09.08h0l-.3.19h0v0l.1-.07.06-.06.06-.1,0,0v-.2l.07-.08,0-.05h.19l0,0,0,0,0,0v-.13l0-.08.07-.06.09,0,.11,0h.08l.14.07,0,0,0,.08,0,.07-.09.07Zm68.79,6.91h.35l.15.06.09,0,.14.09.08,0,0,.1,0,.12h.06l0-.07h.12l.15.05.14.14.19.13.12.06h.12l.16-.06.16-.12.12,0h.07l0,.09.05,0h.12l.27,0,.21,0,0,.06,0,.08.09,0,.11,0,.18,0,0,0h0l0,0-.05,0-.1.06-.16.08-.18.08-.37.13-.23.14-.1.09-.39.42-.24.22-.39.31,0,0v0l0,0,.08,0h.14l.31-.09.13-.06.13-.1h.08l.17-.11.06,0h0l0,0,0,0,0,0,0,.08,0,.07v0l0,.06-.06.08,0,0,.14-.06,0,0h0v0h0l.12.08.07,0,.06,0,.12,0,.17-.07.15-.09.12-.1.15-.06.19,0,.13,0,.08,0,.1-.1.06,0h.08l0,0,0-.07.07-.07.11-.08.06,0v.09l0,0,.06,0,0,0v.08l0,0v.06l0,.11v.11h0l0,0v0l.15-.1h0l0,0,.23,0,.09,0,.1.06,0,0,.12.19.06.08,0,0,0,0v.06l0,0,.17,0h.08l0,0,0,0,.06.06.06,0,0,0h.06l.05,0,0,0h0l.09-.1.12-.08.16-.09.09,0h0l.14,0h.13l.18,0,.16,0,.15-.06.13,0h.15l0,0,0,.07V127l0,0v.05h.11l.06,0h.07l.07,0h.06l0,0h.06l.06,0,0,0,0,0h0l0,0v0l0,.08,0,.06v.15l0,0v0l0,0h.11l0,0,0,0,0,0v0l0,0,.08.05,0,0v0l0,0h0l-.34,0h-.09l0,0h-.07v0l0,0h0l0,0,0,.1v.1h0v0h-.07l-.16-.15-.12-.08-.14,0-.12,0h-.09l-.07,0-.05.08-.09,0h-.11l-.07,0v0h0l-.07,0h-.08l-.08,0-.06,0-.06.09V128l0,0-.12.06v0l-.06.07,0,0v0h0l0,0v-.06l0-.08,0,0h0l0,0V128l0,0h0l0,0h-.08l0,0,0,.08,0,.06,0,0,0,0,0-.09V128l0-.08v0l0,0,0,.07,0,.15,0,0,0,0-.06.09-.08.16-.09.16-.09.15-.06.08h0V129l0,.06,0,.05-.13.07,0,0v0l-.09.15,0,.09,0,.1v.06l0,0h0l0-.05,0,0,.06,0,0-.06.06-.12.07-.08h0l.07,0h.06l0,.05,0,0v0l0,.07,0,.07,0,.08,0,.12,0,.16V130l0,.08,0,.07-.06.06,0,.09,0,.1,0,.09v.13l0,.07v0l-.07.15,0,.08V131l0,.06,0,.12,0,.07v.36l0,0v.12l0,.06,0,.05V132l0,.09v.42l0,.17,0,.07,0,.05,0,0,0,.11,0,.17,0,.12,0,.05,0,0,0,0h0v0l0,0h.19l.08,0,.25-.14.1-.08,0-.07.06-.1,0-.11.1-.18,0-.11,0-.13,0-.14,0-.15v-.31l0-.17,0-.16,0-.08v0l-.09-.21-.09-.29v0l.09-.17v-.17l0-.07,0-.1v0l.09-.12.06-.1,0-.11,0-.13v-.34l0,0,.1,0,0-.06v-.1l0-.06h0l0,0,0,0h0l.05,0,.06-.07.09-.15.07-.09h.06l0,.05v.15l0,.07v0l0,.12v.06l0,0h0l0-.08v0h0v0l0-.06,0,0h0v.09l0,.15v0h0l.06-.09,0-.14,0-.11V129l0-.15v-.11l.05,0,.09-.06.09,0h.09l.06,0,0,0v0l-.06,0,0,0,0-.06v-.12l0-.07.07-.07,0-.05,0,0h.16l0,0h0l.06,0,.12.08.11.05.11,0,.08,0,0,.05,0,.05,0,0,0,0h.08l.06,0,0,0,.25.1.11,0,.06.06,0,0v.07l0,.07h0V129l0,0h0l-.08,0h0l0,0v.05l0,0,.1.12,0,.11v.52l0,.06-.09.09v0h0l0,.07,0,.13,0,.07h0l0,0v0l0,0h-.08l0,0,0,.12v.05l0,.06v.06l0,.05.06,0,.1.05h.06l0,0,0-.08,0,0h0l0,0,.09-.15v0l0,0h0l0,0,0,0,0,0,.13,0,.07,0h0l.06,0,.09,0,.06.08,0,.11.06.28.08.45,0,.25,0,.06v0l-.07.35,0,.14-.09.09-.09.08-.12.13-.12.07-.07,0v0h0l0,.07,0,.1v.12l0,0,0,.05v0h0l0,0,0,.05-.08.14v.05h.09l0,0,0,0,.16.07,0,0,0,0h0l0,0v0h0l0,0,.09,0h0l-.25.06,0,0,.06,0h.06l.06,0h.17l.11.07h.08l0,0,.09,0,.15-.05h.37l.08,0,.17-.15.2-.13.34-.15.49-.18.08,0,.07,0,0,0,0,0,.34-.19.18-.11.09-.09.09-.07.1-.05.07-.07.06-.09.07-.06.07,0,0,0v0l0-.06,0-.08v-.06l0,0v0l0,0-.14,0v-.22h0l.34-.09.21,0h.26l.31,0,.12,0,.08.05.09,0,.1,0h.41v0h0v0l.05,0,.13-.05h0l0,0,0-.06.07-.06.1-.07.09,0h.08l0,0,0,0v-.08h0v-.13l0-.06,0,0,0,0v0l0,0v0h0l.06-.07v0l0,0,0,0h-.11l0,0v0h0l-.07.05h0v0l0-.06.11-.1.37-.27,0,0v-.07h0l.36-.36.2-.16.17-.09.13-.05h3.08l.09-.25.09-.12.11,0h.06l.07-.07.06,0h0l0,.06,0,0,0,0,0-.05v-.07l0,0h.08l0,0v-.16l.1-.12.12-.09,0,0v-.08l.07-.09,0,0v0l0-.06v-.1l0-.12,0-.14.06-.12.11-.13,0-.17,0-.19.13-.18.14-.2.08-.12.15-.21.1-.15.05-.07.06-.09.09,0,.09,0,0,.12,0,.09,0,0,.06,0h.1l.15-.07.17-.05.1,0,0,0h.11l.13.1.15.14.11.12v1.51l0,0v.3l0,0h0l0,0,0,0,.06,0h.1l.05,0,0,.05v0l0,0,0,0v0l0,0,0,0,0,.06v0l0,0v0l0,0,.05.05,0,0,0,0,0,0,0,0,0,0h.07l0,0v0l0,.06,0,.13,0,.06v.08l.08,0,0,0v0l-.19.2-.16,0-.09.05-.09,0,0,.09,0,0h-.06l-.06,0h0l-.06.16,0,0,0,.06,0,0,0,0,0-.07,0-.06,0,0h-.11l0,0,0,0,0,0,0-.05,0,.08,0,.08v.1l0,.06,0,0,0-.05-.1,0h-.09l0-.05.08-.08h-.08l0-.08v-.07l0,0-.05.09-.1.06V130l-.1.23v.09l-.06.08-.09.07-.11,0-.08,0,0,.07h0l0-.08v0l0,.12h0l0-.09v-.05l0,.05,0,.13h0v-.05l0,0v.18l0,0,0,0-.05,0h0v-.09l-.09,0-.11.09-.08.12,0,0,0,0-.14.19-.15.17-.11.27,0,0,0,.05,0,.16,0,.14,0,.07,0,.06,0,.07h0l0,0h0l0,0v0h0l-.08,0-.08,0,0,.07-.06.08-.11.12,0,0,.16,0,.08,0,.11.23,0,0v.05l.1.06,0,.16.09.06.12,0,.14-.05.13-.07v-.06l-.07-.13,0-.07-.06,0,0,0,0-.05v0h.07l.05,0,.12.14,0,.19v.16h-.11l-.31.06-.07.06-.17.06v-.22h0l-.25.21h-.1l-.08.06,0,0v-.16l0-.12h0l-.08.08,0-.05,0,0,0,0,0,0,0,.12-.06.08v.22l-.07.1-.23,0h-.15l-.13,0-.18,0-.1,0-.1,0h-.34l-.07,0-.09.08-.15,0-.37.19-.08.07-.1.11-.06.05-.06,0,0,0,0,0,0-.11,0-.08,0-.18v-.14l0-.06,0,0,.05.14v.27l-.09.19,0,0,0,0,0,0,0,0,0,0,0,.1,0,.09.17,0,0,0,0,.06v.19l0,.09,0,.12,0,.18,0,.16v0l0-.2,0,0,0,0,0,.25-.08.14-.07.09h-.07l0,.07,0,0,0,.08,0,0h0l0,0,0,0v.05l0,0-.13.25-.12.07h0l0-.12,0-.12-.07-.05-.07,0h-.08l-.09-.09-.11-.07-.16-.17v-.14l0-.13,0-.09.06,0,.19-.05,0-.07,0-.06-.09.1-.14,0-.07,0-.06.06,0,.08-.07.09V136l0,.09.1.14,0,.23.07.15.12.17.09.05v.06l0,.11-.06.05h.07l0,0,0,.09v.14l0,0v-.05l0,0,0,0,0,0v.1l0,0-.06,0-.06.13-.06.07-.22.51v.08l0,0-.06,0-.06,0,0,.06,0,.15-.08.16,0-.07v-.06l0-.15.08-.26.09-.16.06-.07.06-.16-.07,0h-.11l0-.07,0-.06-.05-.06h0l0,0,0,0,0-.05v-.12h0l0,0,0,0v-.05h0v0h0l-.06,0-.09-.05,0-.09,0-.07,0-.12.06,0,.08,0h.1v0h0l-.11-.1,0-.06h-.06l0,.05,0,0,0-.13h0l.07,0,0-.07,0,0-.08.05v-.06l0-.06h.06l0,0,0-.11v-.05l-.08.07v-.15l.07-.15.08-.06h.18l-.06,0-.06,0,0-.06h0l0,0H1960v-.1l0,0h0l0,0V136l0,0,0,0-.06,0V136l0,0v.1l0,0,0-.1,0,0v0l0,0,0,0v.09l-.14-.05v0l.07.11.06,0v.06l0,.05-.07,0h0l0,.08,0,.06,0,.06v.18l0,.25,0,.07,0,.06,0,.06h0l-.07,0,0,0-.07-.12V137l0,0v.08l0,.1.22.22,0,.08,0,.07v.06l-.06,0,0-.06-.13-.06-.17,0-.09-.15v.06l0,.05-.05-.06,0-.06v-.06H1959l-.07.05h-.07v-.11l0,0,.08-.13.07-.06,0-.09v0l0,.07-.07,0-.09.09,0,.08,0,.16,0,.05h0l.11,0h.06l.13.19.24.08.09,0,.07.1.11.05.08.09v0l0,.06V138l0,.05h-.14l-.28-.3,0,0-.1-.16-.12-.08h0l.17.15.07.11.12.15.09.07.07.1.06,0,.16.07-.06,0,.1,0v.16l-.13,0v.1l0,0-.08,0-.2-.22v.06l.12.15.11.08.08,0,.07.08,0,0v.07l0,0-.06,0,0,0,0,0-.09-.09,0-.09h-.06l-.28-.12h-.23l0,0,0,0,.18,0,.07.05.15,0h.08l0,.14.12.1V139h.08l.15-.08.09,0,.13,0,0,.06,0,.11,0,.12.13.49.18.4,0,.07,0-.06-.14-.27-.07-.19-.08-.33,0-.08,0,0,0,0v.08l0,.11v.05l0,.06.06.13,0,.17-.06-.07-.06,0-.1,0-.08-.05v.16l-.07,0,0,0,0,.08-.08,0h-.06l0,.07,0,0h-.07l-.11-.06,0-.09v0l0,.11v.09h.43l0,0,.13,0v.11l0,.1v.11h0l0,0,0-.2.12-.07h0l0,.06,0,.07v.09l0,.13-.17.16-.13.14-.07,0-.09,0-.11,0h-.09l0,0,0-.08,0,0h0l0,.09-.1,0-.13,0-.14-.08.06.08.35.15,0,0,0,0,0,.07,0,.07v.09l-.14.09-.08,0L1959,141l.09.15.07.06.14,0,.26,0,.09.06-.07.1-.07.08h-.09l-.09,0,0,.05H1959l-.08,0-.11.11h0l-.06,0,0-.08,0,0v.19l0,0-.12.08-.13.1,0,0-.05.05-.1.16,0,.11,0,.12v-.15l0-.11v.2l0,.09h-.36l-.16,0-.25.17-.07.07-.2.28,0,.17,0-.07v-.1l0,.09,0,.14,0,.06-.13.1-.07,0-.08,0,0,.1-.11.09-.06,0-.12,0,0,.08,0,.07-.07,0-.1,0h0l-.05,0,0,0-.09,0-.09,0h-.1l-.06,0,.1,0,0,.06v.08l0,0-.06,0h0l0,0,0-.07h0v0h0l-.08-.12V144l0,.07,0,0,0,0v0l-.06.08,0,0h-.06l0,.05v0l0,.09-.11.05h0l0,0,0,0,0,0v0l0,0h-.06l0,0v0l0,0v0l-.07,0,0,0h.08l0,.07,0,0,0,.07H1955v0l0,0,0,0-.07.1h0l0,0,0,.08v0l0,.08,0,.11,0,0v.15l0,.1.07.39,0,.14.08.37.14.35.19.43.31.52,0,.07,0,.06v.26l0,.11.07.18,0,0-.11-.26v-.15l0-.21h0l0,.07v.08l0,0,0-.12v-.06l0-.07v0l-.06,0v-.11l0,0h0l0,.13,0,.07,0,.19.05.11,0,.1.39,1,.09.13,0,.09,0,.19v.25l-.07.44v.31h0v0h0l-.06.14-.07.12,0,.2,0,.1-.11.1h-.07l-.16.07-.12,0-.14.05h-.09l0-.09v0l0,0h0l.13.1,0-.05,0,0-.07,0,0,0-.11-.22-.1-.15,0-.1-.19-.06-.14-.1-.08-.16-.06-.3-.06,0,0,0,.06-.11.06-.1,0,0,0,0,0,.08h-.06l0-.15v-.2l0-.07h-.08l-.07,0v.1h-.06l0,0,0-.06-.08-.13-.17-.35,0-.05-.06-.05,0,0h0l.1-.16.09-.1,0-.06v0l0,0,0,0h0l0-.08-.05,0h0l0,.07,0,0v.1l0,0,0,0,0,0,0,0,0,0,0,0,0-.07.09-.41.08-.26v-.42l-.11-.17-.48-.42-.37-.5-.32-.19-.25,0,0,0,0,0,0,.05,0,0h-.06l-.09,0-.23.13h-.08l-.08,0,0,0-.15,0-.12,0-.05,0,0-.08v-.08l0,.06.05,0,0,0v0l0-.08-.14-.11-.16-.15h0v0l0,0,0,0,0-.06h-.07l-.06,0v.08h0l-.06-.05-.3-.13-.26-.07.2,0,.11,0v0l0,0-.08,0-.11,0-.07,0-.07,0-.08,0-.06,0-.27,0-.21,0,0,0,0,0,.12,0,0-.08,0-.07,0,0,0,.06,0-.05h0v.09l-.06.07,0,.06-.18,0h0l0-.06v0l-.06,0-.1.11-.36,0,0,0h.08l.1,0,0-.06,0-.07h0l0,0V146l0-.07-.06-.07h0l0,.13,0,.16,0,.05h-.19l-.32,0-.12,0-.05,0h0l-.13.05-.16,0h-.09l-.11.13-.14.06-.33-.11-.09-.09H1947l-.09,0-.1.11-.08.15.12.08.1,0,.17,0,.09-.07h.08l0,0,0,0,.06,0v0l0,0-.06,0,0,0,.07.08.1,0h0l0-.1.06,0h.09l0,0,0,0,0,.06v.11l-.09,0h-.07l-.06.05,0,0-.06,0h-.05v0l0,0,0,.08.09.06.06.07.25.09h.06l.06.09,0,0,0,0v.06l-.09.05,0,.05,0,0,0,0,0,0-.09.08,0,0,0-.09,0,0-.05-.09-.08-.06,0,0,0,0h-.09l-.07,0v-.05l0,0,0,0-.26-.08v0l0,0h0l0,0v.2l0,.06,0,.05-.07,0,0,0-.06-.13-.07,0h-.11l-.08,0-.08.12-.07,0-.23-.06-.27-.1v0h0l.08,0v0l-.08-.11,0-.05V147h0l0,.05-.17,0,0-.06-.1-.14h-.14l-.06-.09-.12,0-.06,0-.05.06,0,0,.05,0,0,0-.16,0-.38-.05-.11,0-.15-.08-.21-.07h-.47l-.07,0-.06,0,0,0,0-.05h0l0,0,0-.06v0l0,0h0l-.1.17.06.1v0l-.2,0-.43.2-.18.11v0l.21-.14-.07,0-.12,0,0,0,0-.11,0-.1h-.08l-.06.08h0l0,0h0l0,.18,0,.08,0,.09-.12.12-.12.09v.1l-.11.12-.11.07-.24.16-.07,0-.12.08-.15.05-.15.09,0,0,.1-.08.11-.07h-.1l-.14,0h-.09v0l-.07,0-.07-.06,0,0v0h0l0,0,.11.23h0l.05,0-.06.05-.07,0-.1,0-.09-.08,0,.1v.11l0,0,0,0,0,0v0l0,0-.05,0h-.13v.09l.1,0,0,.11-.09.11-.07,0-.12,0h0l0,0,.13.18-.08.26-.06.09h-.08l-.14-.09-.08-.06.07.17.19.06v.12l0,.07,0,.08,0,.07,0,.15,0,.07,0,.21,0,.09.17.34h.06v.1l-.12,0,0,0v0h0l-.06,0-.13-.1-.2-.06-.26,0-.18,0-.09-.07-.1-.05h-.11l-.08,0-.07-.06-.1,0h-.13l-.09-.05-.06-.12h0l0-.21-.07-.12-.13-.16v0h0v0l0-.1,0-.06,0-.06v0l0-.06v-.07l0-.09-.09-.09-.14-.09-.13-.15-.1-.18-.1-.13-.1-.08-.07-.09,0-.1v-.06l0,0-.07-.12-.14-.21-.08-.16,0-.1-.08-.12-.16-.14-.09-.09,0-.06h0l-.24-.19-.07-.11-.06,0h-.09v0h0l0,0h-.13l-.22,0-.16,0-.1,0h-.07l0,.06-.08,0-.13,0-.11.11-.09.21,0,.14v.06l0,0-.06,0-.06.06-.06.1-.07,0h-.08l-.15-.07-.23-.15-.17-.08-.13,0-.11-.07-.1-.09-.08-.07-.09,0-.09-.11-.11-.19-.06-.14v-.16l-.14-.33-.07-.14-.06-.07-.11-.08-.16-.09-.22-.19-.28-.28-.19-.17-.12-.05-.1-.1-.08-.15-.08-.09h-1.64v.49h-2.6l-.44-.15-.44-.16-.44-.16-.43-.16-.44-.16-.44-.16-.44-.17-.43-.16,0-.06.06-.16h-.11l-.26,0-.26,0-.27,0-.26,0-.27,0-.26,0-.26,0-.27,0h0v-.12l0,0,0,0,0-.15,0-.07v-.08l0-.17-.14-.22-.3-.26-.15-.09-.11-.12-.08,0H1921l0,.05-.11,0,0-.13-.11-.17-.08,0h-.22l-.29-.1-.08-.06,0-.1-.13-.09-.18-.09-.1,0h-.13l-.18-.06h-.11l-.21,0-.08,0-.07-.08-.08,0,0-.1v-.16l0-.15,0-.14,0-.05,0,0-.14-.06,0-.08,0-.1,0-.07-.11-.06-.11-.14-.13-.08-.06-.13-.08-.08,0-.07-.18-.26-.2-.2,0-.12v-.16l.08-.1,0-.08V139l-.07-.1-.26-.06-.22-.25v-.19l-.08-.19V138l.06,0h.06V138l0,.09.07.08.06,0,.06.07,0,0h0l0-.05,0,0,0-.09-.06-.12-.06-.07,0-.13,0,0,0-.05.07-.05.09,0h.46l.07,0h.11l-.09,0h-.24l-.05,0,0,0h0l-.11.07h-.05l-.12-.07,0,0-.09.05v.18l0,.13-.05,0-.06-.06-.09,0-.07,0-.11-.1,0,0-.06.08v0l0-.09v-.15l.09.12,0-.08-.07-.1-.06,0-.06-.17-.16-.1-.12-.17-.26-.27,0-.24-.09-.31,0-.17v-.12l0-.19,0-.1-.21-.28-.19-.19,0-.15,0-.14.05-.13,0-.14,0,0h0v0h0v-.06l0,0h0v0l0,0,.06-.18v-.23l.06-.28v-.09l0-.2,0-.12-.07-.08,0-.13v-.12l-.13-.17-.05-.22v-.35l0-.11-.09-.18,0-.15,0-.1.1-.41,0,0h0l.07-.08h0l0,0,0-.16,0-.14,0-.06,0-.46,0-.36.05-.11v-.46l.1-.81v-.1l0-.13,0-.35v-.39l0-.06v0h0l0,.06h.22l.14,0h0l.06.08h.16l0,0h-.05l-.1-.06,0-.07H1916l0,0-.19,0-.06,0-.1,0,0-.12V127l0,.11.07.12,0-.14,0-.17-.07-.06-.1,0,0-.16.25-.14-.13,0,0-.06h-.07v0l0,.07,0-.09v-.09l0-.17-.1-.26-.06-.35-.08-.17-.15-.16,0-.1,0-.24,0-.19,0-.13h.07l.19.1.23.08.07.06.12,0,.63.07h0l.08,0h0l.09.09h.11l0,0,.07-.06V125l0,.09,0,.11,0,.07-.11.19h0v-.07h0l-.21.33-.07.15V126h.1l.1-.07h0l-.09,0h0v-.1l.06-.11.07-.07.09-.07,0-.06,0-.08.1-.1,0,0v-.1h0l0,.15v.06l-.09.08v.13h0l.08.12,0,.09v.08l0,.15,0,0h0l0,0h0l0,.12h0l0-.14h0l-.09.06,0,.06,0,.1,0,0h.11l.09,0,.08,0h0l.07,0,0,0,.06-.15,0,0h0l0,0,.06-.08v0l0-.18v-.14l0,0v0l0-.06v0l0,0v0l0-.11,0,0,.07-.11,0,0,0-.06,0,0,0-.07,0,0h0l0,.12h0l-.09-.07,0,0v-.09l.05,0,.06,0v0l-.07-.11,0,0,0,0h0l0,0v-.06h.11l0,0v-.05l0,0v-.16l0-.13,0,0h0v0h0l0-.05,0-.08-.06-.19h25.48v-.53l.2,0,.06.05,0,0v.06l0,.2,0,.16.09.2h0V124l0,0,0,0,.19.05.33.06.19.07,0,.08.08,0,.14,0,.09,0,.08-.08Zm-27.12-.08v0l0,0h0l0,0h0v.09l-.09,0,0,0,0,0,0,0h0l.11,0Zm-.21.24,0,0-.1,0,0,0v0l0-.09v0h0l.09.1v.05Zm.17.1h0l0,0,0,0v0l0-.08,0,0h0v.06l0,.07Zm.23.38,0,.18,0-.08.12.13v.09h0l0,0,0,0,0,0-.06,0,0,0v-.16h0l0,0,0-.08h0l0-.06,0-.1,0,0h0l0,0,0,.05v0l-.14.07v0l.06,0,0,0,0,.06Zm31,.32v0h0l0,0-.1,0h-.1v0l0,0v0h0v0l0,0,.36-.21.16-.07.08,0v0l-.09.07V125l0,0-.26.14,0,0Zm-30.94.45v0l0,0,0,0v-.11h0l0,0h0v.12Zm.1.27v0l0,0h0v0h0l0,0v-.09l0-.09h0l0,.06,0,.07Zm31.51.25v.07l-.11.12,0,.07h0l0,0v0l0,0,0,0v-.08l0,0h0v0l-.13,0,0,0v-.06l0-.07.15-.16.07,0,.2-.07.1,0h.11l.08,0,.05.05-.05,0-.21,0h0l0,0v0l0,0-.19.15Zm-31.94,0v0h0l0,0v0l0,0,0,.08v0Zm29.91.24,0,0h0v-.06h0v0Zm-.26.13h0l0,0v0h0l0,0v0Zm.15,0h-.1v0l.07,0h0v0Zm-.15.19-.05,0h0v0l0,0,.12-.08h0v0l-.06,0,0,0v0l0,0Zm6.06.56v0h0l0,0,0,0,0-.08,0-.06.06-.06h0l0,0v0l0,.06v.07l0,.06Zm0,.16h0l0,0v-.06h0l0,0,0,0v.06Zm.57.3v0l0,0-.06,0h-.13l-.09,0,0,0v0h.09l0,0,0,0v0l0,0h.09l0,0,0,.07Zm-1,.26.12,0h0l0,0v.06h0l0,0-.07-.07Zm-.91.29h-.06v-.06l0-.11,0,0,0,0h0v.17l0,0Zm-1.21.32,0,0h0l0,0,0-.07h.07v.07Zm-.12.15,0,0,0,0v.12h0l0,0v0l0,0,0,0h0l0,0,0,.07,0,0h0v0l-.09.12h0l0,0,0,0,0-.05v-.07l.07-.1,0-.06,0-.08,0,0,0,0,0-.05,0-.07,0,0h0v.07Zm.93.18v0h0l0,0,0-.06h0l0,0v0Zm16.41,1,0,0h-.06v.09l-.06,0,0,0v-.09l0-.08,0,0,.05,0,0,.09V130Zm-7.31.07h0v0h0l0,0h0l0,0Zm6.91.1,0,0h0v-.09h0l0,0Zm-7,.26h0v0l0,0h0Zm-2.46,1.23,0,0h0v-.07h.09v0l0,0Zm7.09,1.9,0,0h0l0-.05v-.06l0-.08v0l0,0Zm-.11,0,0,0v-.13h0v.11Zm.79.13-.25.06,0,0h.07l.08-.1h0l.08.06Zm.49.14-.07,0-.17-.05.14,0h0l0,0v0l0,.12v0Zm-2.34.34-.06.08h.06l0,0,0,0,.11-.07.1,0h0l0,0,.09,0,.09,0-.4.2-.08,0-.12.06-.11,0H1963l-.4.15h0l0,0-.33.08h-.13l-.13,0,.09-.06v0l0,0h0l0,.06-.08,0,0-.07,0,0,0-.05.08-.08.11-.06.06,0,0,0v-.05l0,0,0,0h.13l0,0h0l.09,0h.08l.07,0h.26l.19,0,.07,0,.16-.12.09,0-.14.14-.08.06Zm-1.54.56h-.05l.05-.12.08,0h0v.07l-.06.06,0,0Zm0,1-.11.18v0l.13-.23Zm-1.11,2.11,0,0,.14-.23.08-.2,0-.06,0,.13-.06.13-.12.21Zm-.28,2.34v0l-.06-.12.06,0v.06Zm.09.69-.13,0h0l.14-.06,0-.23v-.1l0-.19v0l0,.06,0,.17v.13l0,.19,0,0Zm-.22.06-.17.08h0l.11-.05.08,0Zm-.67.61h0l.08-.13.17-.18,0,0-.13.15-.14.18Zm0,0h0l0,0,0,0h.05l.07.05Zm-40,.64.19.06.1,0,0,0v0l-.23,0-.07,0v0l0,0Zm-.39.06H1919l0,0h.06l0,0Zm.24.12h-.11l-.08-.11h.17l.07,0v0l-.06.06Zm1.57.58,0,.09h-.13l0,0,0-.07h-.07v0l0,0,.15.07Zm-1,.19h-.1l0-.06h.09l0,0v0Zm1,.43h-.06l-.06,0,0-.1-.06-.08,0,0,0,.08.12.12Zm34.06,2,0,.26,0-.09v-.09l0-.05,0,0Zm-6.14.77-.08,0h-.1l.15,0,0,0Zm-.45,0h0l-.08,0,0,0v0l.14,0v0Zm-.61.14v0l0,0h-.07l0,0h0v0l.09-.06,0,0Zm.36.29,0,0,0-.16,0-.13,0,.06v.07l0,.13Zm-.05.1,0,.06v0l0-.06,0,0v0Zm3.67.08-.09,0-.1,0h.1l.12-.05.06,0,.07,0-.16.1Zm-6.35.14,0,0-.16-.09v0l.08,0h0l.08,0,0,0,0,0v0l0,0Zm-3,.38h0l.2-.16,0-.06h.06l-.09.09-.16.11Zm-1.6,1h0l0-.05.07,0,.15-.11h.06l0,0h0v0l-.12.07-.21.13Zm-.23.26h0l.05-.08v0l.07-.11h0l0,0-.08.08-.09.12Zm15.52.64,0,.08-.09-.18-.1-.27-.06-.22,0,.06,0,.12.15.41Zm-15.83,0,0,.06v-.09l.08-.2.15-.26.06,0-.17.29-.1.25Zm.17,1.17v.05l-.08-.22-.12-.51v-.28l0-.1,0,.4.14.52,0,.14Zm13.91-.4v.06l0-.1,0-.11,0,0Zm.05.1,0,0-.06,0,0,0v-.07l0,.08h.1Zm1.52,1.34-.18.19,0-.05.07-.1,0-.05,0,0,0,0v-.07l.07,0h0l-.12.21Zm-.23.24h0l0,0h0Zm-.18.1h0l0,0h0Zm-.2.09,0,0,0,0,0,0,.14,0-.06,0Zm-.26.06,0,0h0v0l0-.07v0l.09.07v0Zm-.22.06h-.06l0,0,0-.06,0,0v0l0,0Zm-.2.05h0l0,0h0v0Zm-71.56,2.61-.08.05,0,0h-.09l0,0-.1,0,0,0,0-.1.14-.08h.21l0,.06v.05l0,0v.08l0,0Zm-.74.09,0,0h0v0l0-.06,0,0,.06-.07h0l0,0v.05l-.07,0,0,0Zm2.19.38h.07l0,.08,0,0v0l0,0h-.1l0,0,0,0-.06,0v0h-.05l0,.05h-.12l0,0-.09-.11v0l0-.05h.14l.1-.09h.05l.1.14v0l0,0Zm.54.24.2,0h0l0,0,.16,0h0l0,0-.1,0-.15,0H1885v0l0,0v-.05l0,0Zm.67.27,0,0,.09,0h.08l.11.06,0,0,.07.05,0,0,0,0-.09.07H1886l-.06,0h-.12V156l0-.1h-.06l-.07,0-.06-.08v0l0-.08h.06l0,0,0,.06Zm-.33.16-.06,0h-.06v-.07l-.06-.09h.1l.06,0,0,0,0,0Zm1.17,1.72,0,0h0l-.19-.1,0-.05v-.25l-.07-.2-.07-.16,0-.08.08-.06.08-.12-.07-.15,0-.09h0l.19.11.39.16.1.12,0,.12.07,0,0,.08.1.08,0,0,0,.07-.19.13-.23.06-.21.14,0,.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UY"
                                    d="M1980.86,208.32l0,.05,0,.07,0,.19-.2.26,0,.14-.2.15-.15.18H1980l-.09.07-.5.23-.17,0h-.14l-.12-.1-.28,0-.17,0-.24.11h-.12l-.13,0-.06-.1-.37-.11-.29-.25H1977l-.26,0,0,0,0-.07-.06-.09-.22-.22-.18-.22,0-.21,0-.23,0-.28v-.08l.07-.05h.06l.07-.07,0-.11v-.08l0-.15,0-.2,0-.11.07-.16v-.08l0-.07,0-.07,0-.07v-.07l0-.07,0-.06.07,0,0-.07,0-.09,0-.07v0l0,0,0,0,0-.09.07-.13.06-.11,0-.09v-.08l0-.06v0l0,0,0-.07V205l0-.13,0-.11.11-.11.06-.1v-.07l0,0,0,.08.16,0h.15l0,0,.06-.13.08,0h.18l.11.09.29.27.21.2.06.09.06.07,0,.06,0,.17v.09h.12l.06,0,.05,0,0,0,0,0v0l0,0h0l0,0,.1.1.08.08,0,.05,0,.06,0,0,0,.05.07,0,.08,0,0,0,.13.12.28.1.06.07,0,.08.1.13.13.12.11.05.11,0,.06,0,0,0,.07.05,0,0v.05l0,.09,0,.12,0,.12.11.11.11.08.13,0,.06.06,0,.06-.08.09-.09.12-.08.09-.08.06,0,0,0,.07v.55l0,0,.06,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="UZ"
                                    d="M2095.52,132.6l0,0,0,0,.09,0,.07.05,0,0v0l-.19.11-.11.05h-.06l0,.12-.07,0-.09,0-.06.05-.1.13-.25.19v0l0,0,.08,0,.11.06.06,0,.16-.06h0l0,.06,0,.17.08.05.09,0h.06l.08,0h.17l.09,0h0v-.26l.08,0h0l0,0v0l0-.08,0-.08,0,0h0v.1l.05,0,0,0,0,.06,0,.06,0,.14h.07l.09,0,.05,0,0,0,0,.07v.11h0l.08,0h.06l.06,0,.08,0,.1.12,0,0h.15l0,0h.05l.06,0,.13,0v0l0,0-.31.17,0,.05-.06.06-.07,0h0l-.15-.07,0,0v.06l0,.06v.05l0,0-.1,0,0,0v0h0l-.06,0-.11.12,0,.06v0l0,0h-.05l-.07.05-.08,0,0,0v0H2096l-.05,0-.08,0h-.26l-.09,0,0,0h-.06l-.23,0,0,0,0-.06,0-.07-.05,0-.07,0,0,0v-.09l.15-.13.14-.12h0v0l0,0v0l-.1,0v0l0,0v0l-.07-.09-.13-.14H2095l0,.13,0,0-.14.09-.12.06-.22.11,0,0h0l0,0-.12-.1-.08,0,0,0,0,.06v.11l-.05,0-.05,0,.09.29v0h-.07l0,.11,0,0-.11,0-.14,0-.28.05,0,0v0l0,0h.26l0,0v.05h0l-.1,0v0l0,.07,0,0v0l0,0h0l0,0h0v0l0,0-.05,0h0l0,.12,0,.13-.07.08,0,0H2093l-.15,0-.16,0-.17,0-.16.08-.05,0,0,0,0,0-.07.26v0l0,0,.2,0,0,0,0,0v.12l0,0h.32l0,0,0,0v0l-.09.26v.1l0,.13,0,.11.1.1.07.07,0,0v.11l0,.1-.06.08-.05,0-.08.11-.07.13-.14.17,0,.1,0,.28,0,.08v0l-.05,0h-.09l0,0,0,0h-.07l-.11.06-.12,0-.11-.11-.22,0-.29,0v-.29l0-.22.09-.17v0l0,0,0,0-.17-.05,0,0-.06-.05-.09-.06-.07,0-.11-.05-.11,0-.06,0-.06,0h0l-.06,0-.19-.12-.3-.23-.24-.15-.14-.08,0,0-.08-.07-.21-.19-.13,0-.2-.12-.17-.12,0,0-.2-.23-.2-.14-.21-.16-.14-.1-.24-.17-.11-.1,0,0,0-.07-.06-.36-.07-.16-.1-.09-.09-.17-.07-.26-.06-.17,0-.07-.09-.09-.15-.09-.13-.05h-.1l-.06.07h-.14l-.05,0-.17,0-.06,0h-.11l-.22,0h0l-.24-.16-.1-.06,0,0v-.06l0-.09,0-.06v-.06l0-.07v-.07l0,0h.06l0,0v0l0,0,0-.06-.13-.06,0,0v0l0,0v-.14l0,0v0l0,0,0,0-.07-.07h-.38l-.09,0-.07,0-.07-.15,0,0,0,0h-.08l-.1,0,0,0-.13-.15-.14-.13-.05.13,0,0h-.11l-.09,0,0,0-.05.05v0l0,0,.08.06.12.15.05.08v.05h-.07l0,0v-.05l0-.06,0,0,0,0-.07,0-.08,0h0l0,0,0,0,0,.11-.06.13,0,0-.12,0H2083l-.08,0-.06.05-.11.16-.07,0-.06.07,0,.23,0,.27,0,.07,0,0v0l0,0,0,0,0,.05h-.05l-.1,0h-.08l-.27,0h-.46v-4.63l.12,0,.15,0,.13,0,.17,0,.19-.06.16-.06.19-.06.14,0,.14-.05.17,0,.28-.08.15-.05.15,0,.15-.05h.09l.11.06.13.08.12.09.13.09.13.08.13.09.12.08.13.09.13.09.13.08.12.09.13.08.13.09.13.08.12.09.13.08.13.09.12.07.05.06,0,.13.06.1.1.11.1.12.14.15.09.1.09.11.15.17.09.11h.08l.15,0,.21,0,.16,0,.19,0,.19,0,.14,0,.22,0,.22,0h.16l.15,0h.4l0,0,.1-.06.1,0,.1-.05.08,0,.09.09.08.09.08.1.09.1.09.06.12.08.07.13.09.18.06.11.06.12.09-.05.1,0,.08,0v.65l0,.19v.39h.45l0,.13,0,.18,0,.17,0,.14,0,.18,0,.09,0,.11,0,0,.06,0,.21,0h.64l.07,0,.05,0,.07,0,.05.08,0,0,0,.05.05,0,0,.08,0,.12v.06l.06.07,0,0,.12.08.12,0,.07,0,.07,0,0-.05v-.06l0-.06v-.08l0-.06.08-.1.07-.1.1-.1.13-.1.05-.07,0-.13.08-.07.09,0,.11,0,0-.06.15-.11.09-.05.11,0,.16-.07.13-.08.12-.16.09-.1.08-.06h.07l0,0h0l0,0,0-.07.05-.07,0,0h.08l.09-.05Zm-.28,1.61v0l0-.05,0,0h0l0,0,0,.06Zm.52,1.26h-.18l0-.1v0h0l0,0,0,0v-.11l0,0h0l0,.08.05,0h.09l-.05.08,0,.09v0Zm.52-.07,0,0h0l0,0v0l0,0h.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VA"
                                    d="M2041.55,133Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VC"
                                    d="M1973.66,163.26l0,0-.07-.06v-.08l0,0,0,0h0l0,.06v.08l0,0Zm-.05.16h0l0,0h0l0,0Zm-.1.28h0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VE"
                                    d="M1974.73,167.57l.17.22v0l0,0-.11.05,0,0,0,.1-.13.05-.09.07-.07.06,0,0-.12,0,0,0,0,.11,0,0-.06.05v0l.09.12v0l0,.06v0l0,0,.06,0,0,0h.11l0,0v0l0,.09,0,.05-.18.08-.08.05,0,0-.09,0h0l0,0,0,0h-.07l-.09,0h0l0,0,0,.06,0,.07,0,.06v.06l0,.15,0,0-.06,0-.07.08-.08.1v0l.2.21.19.22.2.22h0l0,0,0,.08,0,.08v0l0,.05,0,.06-.06.05-.09,0-.06,0-.06.1,0,0h0l-.07,0h-.16l-.08.07-.1,0-.07.11-.25.08-.24.06-.06,0-.24,0h-.06l-.07.05-.06,0h0l0,0,0,.07,0,.25-.08.07H1972l-.07-.08-.08-.07-.15-.15,0,0h0l-.13.05-.07,0-.05,0H1971l0,0,0-.08,0,0,0,0h-.35l0,0,0-.07,0,0h-.07l0,0,.1.13,0,.07.09.1.27.22,0,.07v.35l.07.18.1.19,0,.12v.09l0,0v0l0,0,.09,0,.2,0h.11l.18,0,0,.06,0,.11,0,.06,0,0h-.1l-.11.07-.14.07h-.09l0,0,0,0,0,0,0,.12,0,.14-.09.09-.09.06h-.17l0,0-.06,0-.07.07-.06,0h-.08l-.09,0-.1.06-.08,0-.06.08-.08.08-.09.06,0,.07-.06.09h-.07v-.06l0-.09,0-.07-.08,0h-.06l-.09,0-.11.07-.06,0-.06,0-.12,0h-.1l0,0-.08-.05-.17-.15-.24-.21,0-.07v-.06l0-.09,0-.1,0,0v-.07l0-.13,0-.11,0-.06,0,0,0-.05,0,0,0-.12v-.1l0,0,0,0-.08-.08-.09-.08,0,0h0l0-.07,0,0h0l-.09,0-.09,0v-.06l0,0,.3-.27.15-.12v0l0,0v0l0-.05-.14-.21,0,0,0,0-.06-.09-.06-.2,0-.1v-.17l0-.07,0-.05v-.14l0-.25v-.18l0-.13,0-.1.08-.06,0-.1v-.14l0-.12.1-.09,0-.08,0-.09v-.06l-.08-.05-.15,0h-.12l-.07,0-.19,0-.3,0h-.25l-.18,0h-.14l-.1.06-.07,0,0,0h0l-.07,0h0l-.14-.18-.13-.16-.16-.19-.17-.21,0,0h-.13l-.11,0-.08,0-.06,0-.11,0h-.07l-.07,0-.19.07h-.19l-.22,0H1964l-.17,0-.08,0-.1,0-.08-.06-.06-.14,0-.11-.08,0-.09,0,0,0,0-.07v-.41l0-.07,0,0v-.06l0-.12,0-.09-.1-.1-.13-.13-.06-.2-.06-.24-.06,0h-.09l0-.1h0l-.07,0,0,0-.13,0,0,0v0l.06-.09.06-.12.08-.1.07-.1,0-.12,0-.22,0-.15.07-.28.12-.22,0-.1.11-.13,0-.07.07-.06.18-.08.22-.38,0-.06.22,0,.17-.05.12,0,0,0h0l0,0-.06.06-.07,0-.35.09,0,0,0,0v.15l.1.21,0,0,.14.11,0,0h0l0,.15.08.1v.07l-.07.19-.12.12-.08.14-.07.06-.14.27.11.16v.08l.1.12.06,0,0,.05,0,.08,0,.1,0,.06.06,0h.08l.22-.07,0,0,0-.06.11-.12v-.15l0-.18,0-.12-.12-.17-.05-.12-.11-.11-.07-.19,0-.06,0-.08,0-.15.08-.05v-.12l.19,0,.41-.2.25-.05.29-.1.07-.05.06-.09h0l.15.08.08,0,0-.06,0-.12h-.08l-.26,0,0,0v-.05l-.06-.14,0-.11,0-.09.07,0,.11,0,.08.06.05.06,0,.06,0,.14,0,.15,0,.11.08.08h.09l.27,0,.17.06.21,0,.19.12.2.14,0,.1,0,.09,0,.07,0,.07,0,.11.05.11.09.07.25,0,.27-.05.41,0,.13,0,.69,0,.13.05v.1l.22.2.18,0,.16.06.15,0,.18.05h.1l.07,0h.09l.61-.34h.32l0,0,0,0-.12-.05-.28,0-.08,0,0-.08h.09l.31,0,.34,0,.29-.06h.22l.23,0,.42,0,.34,0,0,.05-.11,0h-.18l-.14.08-.29,0-.2,0,.07,0v.08l0,0h0l.07.06,0,0,0,.08,0,.1,0,0,.08,0,0,0V166h.05l0,0,.1.24.08.13h0l0,0,0-.06,0,0,0,0h0v0l0-.07v0h.07l.06,0,.1.08.06.08v.05l0,0,0,0,0,0v-.06l0-.05v-.06h.13l0-.07.07,0,.19.2.07,0,.2,0,.13.1.08.08,0,.09-.12,0,0,.05,0,.06v.06l0,.06v0l0,.09,0,.11-.06.12h-.34l.08,0,.08,0,.13.09.1-.07h.14l.16-.08h.06l.3,0,.07-.06.06,0h.15l.15.07Zm-3.54-2.4,0,.12v0l-.08.08H1971l0,0,0,0h-.06l-.13,0,0,0,0-.06.09,0h0l0,0,.07,0h.08l0-.07.1-.09,0,0Zm-1.25.2,0,0-.1,0,0,0,0,0h.07l.07,0Zm4,1.65-.12,0v0l0-.05h.15l0,0,0,0Zm-.17.25,0,0v-.12l.1-.07,0,0,0,0v0l0,0v0l0,0-.08,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VG"
                                    d="M1970.79,157.94v0h0l0,0h0Zm-.1.27h0l0,0h.09Zm-.18.06h-.1l0,0h.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VI"
                                    d="M1970.27,158.34h-.06l-.1,0,.07,0h0l0,.05Zm.17,0-.06,0h-.05l0,0Zm-.09.54.07.05h.1l-.1,0h-.19v-.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VN"
                                    d="M2129.67,155.24h-.16l-.09.09-.06,0-.11,0-.1.05,0,.09v.06l0,.07-.17.11h-.05l0,0h-.05l0,0h0l-.05,0h-.06l0,0h-.07v0l.06.15V156l-.19.2,0,.13,0,.1-.11.09-.21.2h-.1l-.07.05-.16.34v.12l0,.08v.08l-.07.17-.07.06v.09l.1.18v0l.06.1,0,.07,0,.07.17.18.07.06.09,0,.16.16.08.11,0,.07,0,.15-.12-.05,0,0,.13.08.2.28.18.14.18.16,0,.15.17.1.17.15v0l.05,0,.12.08.07.08,0,.07,0,0,.05,0h.09l.05.08.08.08,0,.07h.06v.09l.1.11,0,.11.12.17.09.09.07.06.07,0,.07.19,0,.17.07.19.06.08V162l0,.16.05.1v.11l0,.06,0,0,0,.19v.08l0-.08v.25l0,.13,0,.16,0,.06.06.18,0,.06v.23l0,.11-.06-.07,0-.07-.05,0-.06.06.08.24-.09,0v.32l0,.08v.08l0-.05v0h0v0l0,.05v.07l0,.06v.05l0,.06,0,.06h-.08l0,.12,0,.12-.15,0-.11.11-.14,0-.12.11-.14.1h-.09l-.07,0-.09.17-.14,0-.26.13-.09.07-.08,0-.11.06,0,0,0-.05-.1,0,0-.06v-.07l0,0,0,0v.17l0,0h0l-.08,0-.08-.1-.12.07h.09l0,0,0,.06v0l0,0h-.27l.13.06.12,0,.05,0v0l-.07,0-.05.07v.08l-.06,0h0l-.1-.06L2128,166l0,.08.3.3.06.09v.07l0,0-.05,0h-.1l-.16-.11-.25-.26-.09,0,.26.3,0,.08.05.08,0,0,0,.05-.61.28-.1.12-.07.15-.12.09-.07.07-.21,0-.11,0,.12-.14-.07,0V167l0-.39,0-.2.08,0,.1,0v-.09l-.05-.06-.06,0-.08,0-.07-.08h0l-.08,0,0,0,0-.06-.07-.07-.09-.06h0l0,0,.05,0h.27l0-.05.08-.07.06,0v0l0-.07,0-.08,0,0h.1l.12,0h0l.07-.09h.18l.11,0h0l.05.06,0,.06h0l.06,0,.05,0,.1,0h.06l0-.12,0-.08v0l-.06,0-.19-.15,0-.05v-.18l0-.06v-.08h.07l0,0,0-.07h.09l.13,0,.09,0h.07v-.24h.26l.06-.07.15,0,.12-.09.1-.1,0,0,.07,0h0l.06.06,0,0,.06-.06,0-.06v-.26l0-.12,0-.09v-.09l.06-.19.06-.2v-.08l-.06-.12-.07-.15-.06-.17,0,0,0,0v-.06l0-.17v-.06l.08-.07,0-.09,0-.1v-.21l0-.05,0-.06,0,0,.05,0,0-.06,0-.07,0-.06,0-.05-.05-.08-.1-.07-.11-.09,0-.05-.05-.06,0-.07,0-.05,0,0,.16-.08,0,0,0,0,0-.05,0,0-.05,0-.07-.05-.14-.13-.06,0-.07,0,0-.05,0-.11h0l0,0,0,0h0l0,0,0,0,0-.06,0-.05v-.21l0-.08,0,0,0,0-.09-.13-.06-.07-.24-.19,0,0-.06-.08-.12-.11-.08-.09-.06-.09,0-.09v-.06l-.07-.09-.05-.07-.06,0h-.06l-.05,0-.11-.1,0-.07,0,0v0l0-.08,0,0v0l0,0-.11-.05-.26-.07-.09-.06-.09-.07-.07-.05-.31-.2-.09,0-.08,0,0,0v0l0,0,.09-.05,0-.06v-.08l0-.08,0,0h.21l.27.08h0l.15-.13,0-.08v-.07l0,0,.08-.07v-.06l0-.09,0,0,0,0-.1,0,0,0,0-.07v0l0-.05-.11,0h-.12l0,0,.06,0,0,0,0,0v0l-.05,0-.06,0-.1-.09-.15-.09-.08,0h0l-.16.07-.08,0-.07.1h-.07l-.08,0-.08,0-.24-.06-.09,0-.21-.3,0-.06,0-.07,0-.11,0-.06,0-.06v-.11l0,0h0l0,0,0-.07h0l0,.09,0,0,0,0,0,0,0,0V155l0-.08,0-.05-.08-.06,0-.07-.14-.15-.1-.1-.06-.09.05,0,.06-.05.06-.08.06-.1,0-.06,0,0h.08l.08,0,.11.05.1.06,0,.06.06.06,0,0h0l.06,0,.06,0v-.05l.05,0,.07-.08,0,0h0l.1.16h0l0,0,.05-.13,0,0h0l.25.23h.06v0l0-.08,0-.08.08,0h.07l0,0,.06.06h.07l.14-.1h.15l.05,0,0-.05v-.19l0,0,0,0,.08,0,.18-.08,0,0,0,0,.07,0,.08.07.05.06,0,.06,0,.05.13,0,.09.06,0,.05h.11l0,0h.17l.06.09h.08l.1,0,.09,0,.07,0,.15.09,0,.07,0,.07-.06,0h0l0,.08v.1l0,0,0,0,0,0,0,0v.26h0l0,0,.06,0,.07,0,0,0h0l0,0v.06l0,0,.1.07h.09l.07.1.08,0,0,0h.16l.11,0h0l.1.09.06.05Zm-.35.28-.13.13h-.05l.05-.14,0,0,.08.05Zm-.07.29-.05,0h-.06l.07-.05,0-.05,0,0v.06l0,.05Zm-.61.11v0l0-.05,0,0,0-.06.05.07v0Zm.16.07h0l-.07-.08,0,0,.08,0,0,0h0l0,0v0Zm.12,9.86-.07.06v0l.07,0,0,0h0Zm-2.86,0,0,0V166l0,.11v0l0,0-.06-.2-.08-.08,0,0h0l.08-.06h0l0,0Zm2.36,1.58h-.05l.08-.07v.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="VU"
                                    d="M2184.56,188.3h0l-.05-.11v0l.07,0,.06.06v.1h0v0Zm.09.33,0,.05-.11,0h0v-.08l0,0,.06,0,.09,0v.07Zm-.78.54.06.31h.07l0,0,0-.07v-.11l0,0h0l0,0v.09l0,0h0l0,.24,0,.05v0l-.1.09h-.14l-.1.06h-.07v-.06l-.05-.05-.06-.1v-.19l-.11-.34v-.09l0-.11h0l.06.09.07.09Zm1.33.47v.06l0-.07,0-.28v0h0l0,.2v.12Zm-.25.11-.07,0h-.11l0,0,.14-.13.16,0-.08.15Zm.28.5h0l0,0-.05-.23,0-.21,0,0,.08.37,0,.06Zm-.92-.23,0,0-.1-.06,0-.06.1,0V190Zm.18.35,0,0h0l0,0,.13.09h0l0,.05.06,0,0,0,0,.05-.07.07-.14,0-.08.07-.07,0v0h0l0-.1,0-.14,0-.09,0,0-.07,0h0l-.06-.07,0-.15,0,0h.05l.08,0,.07.17Zm.81.23h-.1l-.15,0-.06,0,0,0,.05,0h.08l.09-.1,0,0,0,.1,0,0,0,0v0Zm.14.43h0l0,0-.12,0h-.13l0,0,0-.08v-.05l0,0h0l0,0,0,0,0,0,.07.07.07,0Zm0,.73.09.14h0l-.06.1h-.11l-.14,0,0,0,0,0h0l0,0h0l0-.06.08-.09h.16Zm.82,1.35,0,0h0l-.24-.11v-.16l0-.06.06,0h0l0,.09.07,0-.05,0,.08.07,0,.07Zm.14.58,0,.11-.09,0-.08-.07,0-.07,0-.13,0,0h0l0,.12.12.08Zm.38.63,0,.06h-.05l-.07,0v-.05h.1l0,0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="WF"
                                    d="M2199.64,187.76h0v0l0-.06,0,0,0,0Zm-1.74.93h-.11l0-.05,0,0h0l0,0,.06,0v0Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="WS"
                                    d="M2203.17,187.88l.1.09,0,.12,0,.11-.1,0-.14,0H2203l-.11-.14-.08-.06,0-.06h.1l.14,0,.17,0Zm.81.55h-.25l-.13,0h0l-.11-.09,0-.05.06,0,.12,0,.23.07,0,.06h0l0,0v.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="YE"
                                    d="M2079,160l-.46.17-.13.08-.11.09-.08.12-.06.2.05.19v.1l-.12.07-.11.05-.12.07-.08,0-.06,0-.07,0-.26.11-.29.08-.45.1-.17.1-.16.08-.24,0-.33.1-.18.08-.23.13,0,0,0,.1-.07.08-.14.13-.1.07h-.07l-.13,0h-.16l-.27,0-.06,0-.06,0-.21.1-.2.18-.16.05-.24.06-.17.08-.12,0h-.42l-.27,0-.24.05-.11.1-.13.16-.21.07,0,.05-.07.12-.14,0-.12,0-.13,0-.24.13-.09,0h-.13l-.1,0h-.07l-.09-.05-.18-.07-.14,0v-.13l-.23-.41.05-.35v-.05l0-.16-.14-.14v-.18l0-.13,0-.14V162l-.07-.21,0,0v0l0,0v0l0-.06,0-.12-.18-.1,0-.09,0,0,.05,0v-.1l-.08-.27.11-.36,0-.32.17-.13,0,0,0,0,0-.07,0,0,0-.08v0l0,0,0-.09v-.16l0-.09.06,0v0l-.05-.05v0l.1-.09,0,0,.07,0h0l.06,0,.05,0,.05,0,.06.06.08,0h.06l.05,0,0,0,0,0h.07l.07,0,.18,0h.18l.18,0h.41l0,0,.16.08.12,0,.24,0,.25,0,.22,0,.19,0,.16,0h0l.05,0,.09.13.09.12h.15l.1,0,.11-.06.07-.05.07-.2.05-.12.12-.15.1-.12.12-.15.07-.09.14-.18.13-.06.26-.13.25-.13.16-.09.14,0,.24,0,.27,0,.27,0,.3,0,.32,0,.22,0,.29,0,.23,0,.21,0,.22,0,0,.1,0,.1,0,.09,0,.1.05.1,0,.09,0,.1,0,.1,0,.09,0,.1,0,.09,0,.1,0,.1,0,.09,0,.1,0,.09,0,.1.07,0,0,.09.06.12,0,.13.06.13.05.12Zm-9.68,1.29,0,0v0l0-.08,0,0,0,.07v0Zm.18,1.26v0h0l-.06,0,.06-.05,0,.05v0Zm0,.25-.07,0,.05-.08h.05l0,.06Zm10.15,1,0,0,.09,0h.25l.3.1-.06,0,0,0-.13,0-.13.08-.38,0-.11,0-.1-.08-.16-.1.06-.06,0,0,0,0,.1,0h.09l.12.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="YT"
                                    d="M2071.75,187.42h-.06l0,0,0-.06,0-.05v0l-.05-.08.05,0,0,0h0l.06,0,0,.07v0l0,.07Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ZA"
                                    d="M2058.94,196.5v.08l0,.14.07.2,0,.19.06.26v.15l0,.06.05.07.07.12,0,.07,0,0,.07.1.05.15.05.19,0,.1v0l0,.09v1.19l-.06.14V200l0,.08h-.07l-.22-.11-.2-.13H2059l-.12.09-.11.14-.05.12-.08.12-.13.2v.38h.08l0,.13.11.2.2.13.18.06.25,0h.2v-.14l0-.21,0-.15h0l.05,0h.11l.14,0h.49l0,.24-.13.37-.05.17-.11.62-.15.31-.08.13-.24.23-.07,0-.05,0-.11,0-.41.46-.15.23-.13.32-.14.18-.2.39-.17.3-.17.27-.3.38-.13.11-.08,0-.24.22-.32.35-.25.32-.38.36-.22.16-.32.31-.09,0-.37.29-.27.18-.42.21-.17.05-.41-.05-.17,0-.14.12v.18l-.06,0h-.09l-.28-.07h-.16l-.09.1-.07.12h-.21l-.38-.12-.45-.08h-.11l-.21.1h-.08l-.31,0-.18-.06h-.17l-.13,0-.15,0-.42.33H2050l-.19,0h-.09l-.17-.05h-.07l-.1,0-.1.06-.22,0-.09,0-.38.31h-.09l-.07,0h-.2l-.22-.17h-.09l0,0v-.08l-.05-.07,0,0h-.09l0-.07h-.14l0,0h-.06v-.28l0,0h-.2l0,0,0,.07V209l0-.05,0-.12,0-.13,0-.15.1,0v-.11l0-.08-.11-.23,0-.1-.09-.07-.08-.16-.07-.06,0-.12-.07-.09,0-.15,0-.08.06-.05.07.07.08,0,.11-.1.07-.16v-.26l0-.16-.09-.41-.05-.09-.2-.29-.24-.4-.31-.61-.14-.37-.22-.73-.2-.42-.24-.38,0,0,0,0,.13-.09,0,0,0,0,0,0,0-.06v-.05l0-.08,0-.05,0-.1,0-.06.11,0,.09.06,0,0v.07l0,0h.06l0,0,0,.09v.06l0,0v0l.05.07,0,.06,0,.08.16.05.08,0h.13l.12,0,.12.06h.19l.27,0,.22,0,.17.06h.13l.07,0,0-.06V203l0-.05.09,0,.07,0,0-.09.13-.08.19,0h.09v-3.77l0,0,.3.22.08.12,0,.08.13.27.09.25.08.18v.26l-.05.1-.06.08-.06.1v.14l0,.17,0,.08.05,0,.12,0h.08l.11,0,.35,0h0l.14,0,0,0,0,0,0-.1,0,0,.07,0,.09,0,.08-.06.11-.19.24-.18.07,0,0,0,0-.07.09-.21.06-.19,0-.08,0-.14.07-.09.07,0h0l.08,0,.11,0,.12,0,.12,0,.13.09.15.12.06.05.07,0h.21l.12.11h.07l.14,0,.18,0h.11l.12-.06h.32l.09,0,.07-.05.06-.06.07-.17,0-.14.06-.16.08-.21,0-.15,0,0,.11,0,.09,0,.25-.06.05,0,0-.07.11-.12.13-.1.07,0,.13-.48v-.06l.09-.13.06,0h0l.06,0,.06-.06.08,0,.09,0,.06,0,0-.07,0,0h.07l0,0v0l0,0,.08,0,0,0v0l.08-.11.17-.18.16-.1.15,0,.14,0,.13,0,.1-.09.06-.11.11-.07h.23l.26,0,.22,0,.27.1.25,0,.23,0h.19l.14,0,.12,0,.08.05Zm-2.35,7.89.15-.07.07,0,0,0,.07-.05,0-.12,0-.11.05-.05,0,0,0-.06.05-.13,0-.13v-.05l0-.06,0,0,0-.08h0l-.08-.05-.11-.08-.09-.08-.09-.11,0,0-.09-.07,0-.05,0,0h-.07l-.1,0-.22.09-.14.08-.11.1-.12,0-.09,0-.07.11-.06.11-.06.09,0,.05,0,0,0,.06-.07.1,0,.07-.09,0-.1.05,0,0v0l0,.1,0,.09.06.11,0,.08.07.09,0,.06v.13l0,0h0l0,0,.06,0h0l0,0,0,.06.07.08.08.06.14,0,.1,0h0l0,0,0-.06v-.08l0,0,.13-.2.07-.07h.23l.09,0Zm8.41,19.94,0,0-.19,0,0-.05.06-.08,0,0,.09,0,.08.07v0l0,.06Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ZM"
                                    d="M2060.44,184.09v0l0,0,0,0v.1h.07l0,0h0l0,0v.05l0,.07.05.05,0,0v.08l0,.08.08.08.1.07,0,0v.1l0,0,.06.09,0,.06v0l-.18.18h-.11l-.05,0,0,0v0l0,.06,0,.1,0,.07,0,.08-.08.15h0v.11l0,0,0,0,0,.07v.19l0,.21.08.18,0,0h.11l0,0,0,0-.05.06,0,0-.14.07-.2.07-.05.06,0,.1,0,.06,0,0v.08l0,.09v.13l0,0,0,.09,0,.09,0,0-.06,0-.08,0v0l.1,0,0,0v0l0,0,0,0,0,0,0,0,.05.07,0,.08v0h0l0,0,.05,0,0,0,0,.07-.19.07-.11,0-.29.1-.26.09-.07,0-.13,0-.07,0-.24.07-.09,0-.08,0-.19.06-.19,0-.2.06-.22.06-.12.05-.09,0-.2.08v.08l0,.11.05.1,0,0,0,.15,0,.13h-.62l-.22.05-.19.08-.22.12-.07.05-.05,0,0,0v.26l0,.11-.06.1h0l-.34.13-.21.1-.22.12-.16.16-.11.19-.18.24-.19.21-.2.22-.22.08-.19,0-.22-.09h-.18l-.13,0-.12,0-.12-.09-.09,0-.08,0h-.09l-.18-.05-.16-.15-.08-.06-.06,0-.19,0-.42,0h0l-.18,0-.22,0-.19,0-.19,0-.19-.16-.21-.18-.21-.2-.16-.16-.08-.09-.15-.12-.1-.06,0,0-.1-.32-.06-.29v-2.8h1.83v0l-.08-.15v-.05l0-.1,0-.09,0-.11v-.07l0-.22v-.49l0-.07V186l0,0v-.21l0-.17,0-.12h.1l0,.06,0,.06h0l.12,0,0,.05,0,.12v.06l0,0,0,0,.08,0h0l.14-.08.06,0h.07l.07,0,.18,0h.1l.06,0h0l0,0,0,.08V186l0,.14,0,.06.06,0,0,0,.05.05h.1l.22.08.06,0,.1,0h.06l.22,0,.09,0,.15,0h.21l.06,0,0,0,0,0,0-.07.05-.15,0-.05,0,0h.06l0,0,0,.17.17.15.06.13.05.11,0,0,.07,0,.1,0h.09l.2.08.15.06.12.05.05,0,0,.06,0,0,0,.11,0,.09.06,0h.06l0,.06,0,.06.08.13.06.08v.09l.07.06.09,0h.08l0,0,.12,0,.09-.06h.11l0,0,0,.07v0l.06,0h.05l0-.05v-1.16h0l-.05,0h-.13l0,0,0,0v.15h-.06l-.08,0-.14,0-.11,0-.09-.08-.11-.13-.07-.07-.18-.13,0,0-.06-.06,0-.11,0-.07,0-.05,0-.08,0-.12.06-.23,0-.16,0-.13.08-.12v-.11l0-.14v-.53l0-.14-.06-.16-.13-.22v0l.07,0,.12-.09.06-.06.08-.07,0,0,.07-.1,0-.08,0-.1,0-.1.07,0,.23,0,.24,0,.26,0,.27,0,.25,0,.23,0,.16,0,0,.07.05.11.05.08.07.07.06,0,0,0h.26l.09,0,.08.05,0,.09,0,.05.05,0h.14l.06,0h0v.08l0,0h.17l.09,0h.09l.1,0,.05.06.12.05.13,0,.1.05Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    id="ZW"
                                    d="M2058.94,196.5l-.09-.05-.11,0-.14,0h-.19l-.24,0-.24,0-.27-.1-.22,0-.26,0h0l0,0-.07-.08h-.12l0,0,0,0,0,0V196l0-.12v0h0l-.07,0-.15-.05-.2-.06-.33-.06-.12,0,0,0,0,0-.06-.15-.06-.09-.14-.15,0,0v-.52l0,0-.05,0h-.32v-.1l0-.14,0-.09,0,0-.08-.05-.16-.06-.22-.09-.19-.15-.22-.17-.06,0-.08-.16-.12-.28v-.14l-.12-.14,0-.07,0-.07-.19-.2-.06-.09-.05-.11-.05-.09,0,0,0-.06,0-.07v-.12l0-.05.18.05h.09l.08,0,.09,0,.12.09.12,0,.13,0h.18l.22.09.19,0,.22-.08.2-.22.19-.21.18-.24.11-.19.16-.16.22-.12.21-.1.34-.13h0l.06-.1,0-.11v-.26l0,0,.05,0,.07-.05.22-.12.19-.08.22-.05h.62v.32l0,0h.47l.27,0,.18.12,0,0,.19,0,.23.2.28,0,.19.07.17.07.1.08.06,0h.13V191l-.06.11v.15l.08.2v.18l0,.31v.42l0,.07v.09l-.05.13,0,.13v.06l0,0,0,0-.12.06,0,0v.07l0,.06,0,0,.06,0,0,.05v0l0,.09-.05.14.05.17.06.11.07.12,0,.08v.1l-.11.23-.08.14-.1.15-.14.1,0,0v.29l-.11.18.07.16v0l0,0-.17.18-.16.18-.12.13-.14.15-.15.17-.13.14Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#212f44"
                                    stroke="#4c52a8"
                                    strokeMiterlimit={10}
                                />
                            </g>
                            <g id="Radar">
                                <g id="Signal">
                                    <path
                                        d="M2126.93,183.33c0-17.53-14-31.77-31.15-31.77v5.8c14.08,0,25.46,11.67,25.46,26Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient)"
                                    />
                                    <path
                                        d="M2095.78,163.1v5.81a14.29,14.29,0,0,1,14.14,14.42h5.69A20.09,20.09,0,0,0,2095.78,163.1Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-2)"
                                    />
                                </g>
                                <g id="Radar_Element">
                                    <path
                                        id="signal-2"
                                        data-name="signal"
                                        d="M2041.64,245.07v5.8h39.65v-5.8h-6.39l-4.46-15.2a14.89,14.89,0,0,0,3.46-4.24,30.78,30.78,0,0,0,32.26-7.54l2-2-20-20.4,3.64-3.71a8.35,8.35,0,0,0,3.64.84,8.68,8.68,0,1,0-8.51-8.68,8.87,8.87,0,0,0,.82,3.71l-3.63,3.71-20-20.4-2,2a32.22,32.22,0,0,0-7.39,32.9,14.59,14.59,0,0,0-2.17,23.87l-4.46,15.2h-6.45Zm53.79-63.9a2.88,2.88,0,1,1-2.82,2.87A2.89,2.89,0,0,1,2095.43,181.17Zm-31.21-1.79,35.84,36.55a24.85,24.85,0,0,1-24.46,4.19,10.54,10.54,0,0,0,.06-1.37,14.29,14.29,0,0,0-14.14-14.42,10.17,10.17,0,0,0-1.35.06A26.1,26.1,0,0,1,2064.22,179.38Zm-2.76,30.69a8.68,8.68,0,1,1-8.5,8.68A8.6,8.6,0,0,1,2061.46,210.07Zm-3.87,22.56a14.39,14.39,0,0,0,7.74,0l3.7,12.5h-15Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-3)"
                                    />
                                    <path
                                        d="M2058.65,214.8h5.69v5.8h-5.69Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-4)"
                                    />
                                </g>
                                <path
                                    id="Path_Line_9"
                                    data-name="Path Line 9"
                                    d="M2041.93,247.88l-21.41.48a4.78,4.78,0,0,0-4.58,4.61l-.35,11.25a4.66,4.66,0,0,1-4.63,4.6h-31.8"
                                    transform="translate(-0.5 -1)"
                                    fill="none"
                                    strokeMiterlimit={10}
                                    strokeWidth={3}
                                    stroke="url(#linear-gradient-5)"
                                />
                                <path
                                    id="Path_Line_8"
                                    data-name="Path Line 8"
                                    d="M1963.79,268.94h-25.22a6.28,6.28,0,0,1-6.22-6.34v-6.7a6.75,6.75,0,0,0-6.69-6.82h-50.33"
                                    transform="translate(-0.5 -1)"
                                    fill="none"
                                    strokeMiterlimit={10}
                                    strokeWidth={3}
                                    stroke="url(#linear-gradient-6)"
                                />
                                <rect
                                    id="Strock_Box"
                                    data-name="Strock Box"
                                    x={1963.02}
                                    y={260.44}
                                    width={15.25}
                                    height={15.56}
                                    rx={6.25}
                                    fill="none"
                                    strokeMiterlimit={10}
                                    strokeWidth={2}
                                    stroke="url(#linear-gradient-7)"
                                />
                                <rect
                                    id="Ripple_Box"
                                    data-name="Ripple Box"
                                    x={1965.56}
                                    y={263.24}
                                    width={9.78}
                                    height={9.97}
                                    fill="url(#linear-gradient-8)"
                                />
                            </g>
                        </g>
                        <g id="StepThree" className={stepThree[this.props.tutorialStep]}>
                            <path
                                id="Path_Line_10"
                                data-name="Path Line 10"
                                d="M1432.35,198l79.47,49.64a9.19,9.19,0,0,0,9.49.15l32.39-18.87a3.6,3.6,0,0,0,.07-6.19l-78.12-47.81a7.19,7.19,0,0,0-7-.31l-36.06,17.79A3.2,3.2,0,0,0,1432.35,198Z"
                                transform="translate(-0.5 -1)"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-9)"
                            />
                            <g id="Server">
                                <g>
                                    <path
                                        d="M1546.37,124.8h-32.51l-36.23-21.56c-4.67-2.76-12.79-2.44-18.21.75l12.35-7.39h-32.52v97h0c-.12,1.88.89,3.7,3.15,5l65.6,39c4.66,2.76,12.79,2.45,18.21-.75l15.75-9.34c2.77-1.69,4.29-3.76,4.41-5.82h0Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-10)"
                                    />
                                    <path
                                        d="M1545.43,124.8v98.05h0a5.74,5.74,0,0,1-1.14,3,6.52,6.52,0,0,0,2.08-4h0v-97Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                    <path
                                        d="M1508,140.71l-65.6-39c-4.66-2.76-4.09-7.65,1.33-10.84l15.75-9.34c5.36-3.2,13.55-3.57,18.21-.75l65.59,39c4.67,2.76,4.1,7.65-1.32,10.84L1526.21,140C1520.79,143.15,1512.66,143.47,1508,140.71Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-11)"
                                    />
                                    <path
                                        d="M1509.32,140.71l-65.59-39c-4.67-2.76-4.1-7.65,1.32-10.84l15.75-9.34a20.84,20.84,0,0,1,9.64-2.63,20.2,20.2,0,0,0-10.9,2.63l-15.75,9.34c-5.36,3.19-6,8.08-1.32,10.84l65.59,39a16.22,16.22,0,0,0,8.57,1.88A15.53,15.53,0,0,1,1509.32,140.71Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#f88b93"
                                    />
                                    <path
                                        d="M1543.22,119.78l-65.59-39a16.44,16.44,0,0,0-8.63-1.88,14.76,14.76,0,0,1,7.24,1.88l65.6,39c4.66,2.76,4.09,7.65-1.33,10.84L1524.76,140a20.77,20.77,0,0,1-9.58,2.63,20.18,20.18,0,0,0,10.9-2.63l15.76-9.34C1547.32,127.43,1547.88,122.54,1543.22,119.78Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                    <path
                                        d="M1510.14,129.43l-48.83-29.07c-3.47-2.07-3-5.7.94-8.08l-.38.25c4-2.38,10.09-2.63,13.55-.57L1524.26,121c3.46,2.06,3,5.7-1,8.08l.38-.25C1519.72,131.25,1513.61,131.5,1510.14,129.43Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-12)"
                                    />
                                    <g>
                                        <path
                                            id="SVGID"
                                            d="M1511.91,120.41l-35.35-21c-2.52-1.51-2.21-4.14.69-5.83l-13.3,8c2.9-1.76,7.31-1.95,9.83-.44l35.35,21c2.52,1.51,2.21,4.14-.69,5.83l13.3-8C1518.77,121.73,1514.43,121.91,1511.91,120.41Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#6de0f6"
                                        />
                                        <g clipPath="url(#clip-path)">
                                            <path
                                                d="M1477.19,96.35l-13.24,8c2.9-1.76,7.31-2,9.83-.44l35.42,21a4.52,4.52,0,0,1,1.26,1.13c.82-1.44.5-3-1.26-4L1473.78,101c-2.52-1.51-6.93-1.32-9.83.43l13.24-8c-2.27,1.31-3,3.19-2,4.7A6.7,6.7,0,0,1,1477.19,96.35Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#267fe5"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path)">
                                            <path
                                                d="M1477.19,99.8l-13.24,8c2.9-1.75,7.31-1.94,9.83-.44l35.42,21.06a3.47,3.47,0,0,1,1,.87c1.14-1.5.82-3.19-1-4.32l-35.42-21c-2.52-1.51-6.93-1.32-9.83.44l13.24-8c-2.4,1.44-3,3.45-1.77,5A6.91,6.91,0,0,1,1477.19,99.8Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#25bfec"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path)">
                                            <path
                                                d="M1475.8,105.12a6.76,6.76,0,0,1,1.39-1.13L1464,112c2.9-1.75,7.31-1.94,9.83-.44l35.42,21.06a5.59,5.59,0,0,1,.69.5c1.51-1.63,1.32-3.51-.69-4.7l-35.42-21.06c-2.52-1.5-6.93-1.31-9.83.44l13.24-8C1474.6,101.36,1474.1,103.62,1475.8,105.12Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#18d0f7"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path
                                        d="M1546.37,108.69h-32.51l-36.23-21.55c-4.67-2.76-12.79-2.44-18.21.75l12.35-7.39h-32.52v7h0c-.12,1.88.89,3.7,3.15,5l65.6,39c4.66,2.76,12.79,2.44,18.21-.75l15.75-9.34c2.77-1.69,4.29-3.76,4.41-5.82h0Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-13)"
                                    />
                                    <path
                                        d="M1545.43,108.69v8h0a5.74,5.74,0,0,1-1.14,3,6.54,6.54,0,0,0,2.08-4h0v-7Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                    <path
                                        d="M1508,124.61l-65.6-39c-4.66-2.75-4.09-7.64,1.33-10.84l15.75-9.33c5.36-3.2,13.55-3.57,18.21-.76l65.59,39c4.67,2.76,4.1,7.64-1.32,10.84l-15.75,9.34C1520.79,127.05,1512.66,127.36,1508,124.61Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-14)"
                                    />
                                    <path
                                        d="M1509.32,124.61l-65.59-39c-4.67-2.75-4.1-7.64,1.32-10.84l15.75-9.33a20.84,20.84,0,0,1,9.64-2.63,20.2,20.2,0,0,0-10.9,2.63l-15.75,9.33c-5.36,3.2-6,8.09-1.32,10.84l65.59,39a16.22,16.22,0,0,0,8.57,1.88A15.65,15.65,0,0,1,1509.32,124.61Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#f88b93"
                                    />
                                    <path
                                        d="M1543.22,103.68l-65.59-39a16.44,16.44,0,0,0-8.63-1.87,14.75,14.75,0,0,1,7.24,1.87l65.6,39c4.66,2.76,4.09,7.64-1.33,10.84l-15.75,9.34a20.89,20.89,0,0,1-9.58,2.63,20.27,20.27,0,0,0,10.9-2.63l15.76-9.34C1547.32,111.32,1547.88,106.44,1543.22,103.68Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                    <path
                                        d="M1510.14,113.33l-48.83-29.07c-3.47-2.07-3-5.71.94-8.09l-.38.25c4-2.38,10.09-2.63,13.55-.56l48.84,29.07c3.46,2.07,3,5.71-1,8.09l.38-.25C1519.72,115.15,1513.61,115.4,1510.14,113.33Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-15)"
                                    />
                                    <g>
                                        <path
                                            id="SVGID-2"
                                            data-name="SVGID"
                                            d="M1511.91,104.31l-35.35-21.06c-2.52-1.5-2.21-4.13.69-5.82L1464,85.38c2.9-1.75,7.31-1.94,9.83-.43l35.35,21c2.52,1.5,2.21,4.13-.69,5.83l13.3-8C1518.77,105.62,1514.43,105.81,1511.91,104.31Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#6de0f6"
                                        />
                                        <g clipPath="url(#clip-path-4)">
                                            <path
                                                d="M1477.19,80.25l-13.24,8c2.9-1.75,7.31-1.94,9.83-.43l35.42,21a4.52,4.52,0,0,1,1.26,1.13c.82-1.45.5-3-1.26-4l-35.42-21.06c-2.52-1.5-6.93-1.31-9.83.44l13.24-8c-2.27,1.32-3,3.2-2,4.7A6.81,6.81,0,0,1,1477.19,80.25Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#267fe5"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-4)">
                                            <path
                                                d="M1477.19,83.69l-13.24,8c2.9-1.75,7.31-1.94,9.83-.44l35.42,21.05a3.49,3.49,0,0,1,1,.88c1.14-1.5.82-3.19-1-4.32l-35.42-21c-2.52-1.51-6.93-1.32-9.83.43l13.24-8c-2.4,1.44-3,3.44-1.77,5A7.14,7.14,0,0,1,1477.19,83.69Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#25bfec"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-4)">
                                            <path
                                                d="M1475.8,89a6.16,6.16,0,0,1,1.39-1.13l-13.24,8c2.9-1.76,7.31-1.94,9.83-.44l35.42,21c.25.19.5.32.69.5,1.51-1.63,1.32-3.51-.69-4.7l-35.42-21.05c-2.52-1.5-6.93-1.31-9.83.44l13.24-8C1474.6,85.26,1474.1,87.51,1475.8,89Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#18d0f7"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path
                                        d="M1546.37,95h-32.51l-36.23-21.55c-4.67-2.76-12.79-2.45-18.21.75l12.35-7.39h-32.52v7h0c-.12,1.88.89,3.7,3.15,5l65.6,39c4.66,2.76,12.79,2.44,18.21-.75l15.75-9.34c2.77-1.69,4.29-3.76,4.41-5.83h0Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-16)"
                                    />
                                    <path
                                        d="M1545.43,95v8h0a5.8,5.8,0,0,1-1.14,3,6.57,6.57,0,0,0,2.08-4h0V95Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                    <path
                                        d="M1508,110.89l-65.6-39c-4.66-2.76-4.09-7.64,1.33-10.84l15.75-9.34c5.36-3.19,13.55-3.57,18.21-.75l65.59,39c4.67,2.76,4.1,7.64-1.32,10.84l-15.75,9.33C1520.79,113.33,1512.66,113.64,1508,110.89Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-17)"
                                    />
                                    <path
                                        d="M1510.83,104.18l-57.59-34.27c-2.77-1.69-2.46-4.58.76-6.46l9.45-5.57c3.21-1.94,8.13-2.13,10.9-.44l57.59,34.27c2.78,1.69,2.46,4.58-.75,6.46l-9.45,5.57C1518.52,105.62,1513.61,105.87,1510.83,104.18Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                    <path
                                        d="M1454.06,64.46l9.45-5.58c3.22-1.94,8.13-2.13,10.9-.44L1532,92.72a3.59,3.59,0,0,1,1.82,2.25c.26-1.25-.37-2.44-1.82-3.32l-57.66-34.27c-2.77-1.7-7.69-1.44-10.9.44L1454,63.39c-2,1.19-2.9,2.76-2.58,4.2A5,5,0,0,1,1454.06,64.46Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#267fe5"
                                    />
                                    <path
                                        d="M1509.32,110.89l-65.59-39c-4.67-2.76-4.1-7.64,1.32-10.84l15.75-9.34a21.09,21.09,0,0,1,9.64-2.63,20.29,20.29,0,0,0-10.9,2.63L1443.79,61c-5.36,3.2-6,8.08-1.32,10.84l65.59,39a16.31,16.31,0,0,0,8.57,1.88A15.65,15.65,0,0,1,1509.32,110.89Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#f88b93"
                                    />
                                    <path
                                        d="M1543.22,90l-65.59-39A16.44,16.44,0,0,0,1469,49a14.87,14.87,0,0,1,7.24,1.88l65.6,39c4.66,2.76,4.09,7.64-1.33,10.84l-15.75,9.33a20.9,20.9,0,0,1-9.58,2.64,20.28,20.28,0,0,0,10.9-2.64l15.76-9.33C1547.32,97.6,1547.88,92.72,1543.22,90Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#6ee8fc"
                                    />
                                </g>
                                <path
                                    d="M1503.21,223.11,1450,191.4a6.45,6.45,0,0,1-2.59-5.14V118.84c0-1.94,1.14-2.88,2.59-2l53.24,31.7a6.46,6.46,0,0,1,2.58,5.14V221.1C1505.79,223,1504.66,224,1503.21,223.11Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#6de0f6"
                                />
                                <path
                                    d="M1504.16,222.67,1450.91,191a6.44,6.44,0,0,1-2.58-5.14V118.4a2.76,2.76,0,0,1,.63-1.94c-1,0-1.58.88-1.58,2.32V186.2a6.56,6.56,0,0,0,2.59,5.14l53.24,31.7a1.42,1.42,0,0,0,2-.12A1.28,1.28,0,0,1,1504.16,222.67Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#267fe5"
                                />
                                <g>
                                    <path
                                        d="M1451.86,158l3.59-2h0c.06,0,.12-.06.19,0L1501,181.25a.63.63,0,0,1,.26.5V190c0,.06,0,.19-.07.19h0l-3.65,2v-4l-41.9-23.31a.67.67,0,0,1-.26-.5v-2.82Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-18)"
                                    />
                                    <path
                                        d="M1452,167l45.37,25.26c.13.06.25,0,.25-.19v-8.27a.63.63,0,0,0-.25-.5L1452,158c-.12-.06-.25,0-.25.19v8.27A.66.66,0,0,0,1452,167Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-19)"
                                    />
                                    <path
                                        d="M1453.31,164.46l42.78,23.81c.13.06.19,0,.19-.13v-2.07a.34.34,0,0,0-.19-.31L1453.31,162c-.13-.06-.19,0-.19.13v2.06A.34.34,0,0,0,1453.31,164.46Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#242993"
                                    />
                                    <path
                                        d="M1453.31,162l.88.5v1.13a.33.33,0,0,0,.19.31l41.9,23.38v.94c0,.12-.06.18-.19.12l-42.78-23.81a.34.34,0,0,1-.19-.31v-2.07C1453.12,162,1453.18,161.89,1453.31,162Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#4553c7"
                                    />
                                </g>
                                <path
                                    d="M1457.15,164.08l35.6,19.8c-.31.19-.57.31-.82.5h0l-35.6-19.8A3.9,3.9,0,0,1,1457.15,164.08Z"
                                    transform="translate(-0.5 -1)"
                                    fill="#4553c7"
                                    opacity={0.8}
                                    style={{ isolation: "isolate" }}
                                />
                                <text
                                    transform="matrix(1.03, 0.6, 0, 1, 1451.86, 143.8)"
                                    fontSize={10.28}
                                    fill="#991fe8"
                                    fontFamily="Montserrat-Bold, Montserrat"
                                    fontWeight={700}
                                >
                                    <tspan letterSpacing="-0.01em">{"P"}</tspan>
                                    <tspan x={7.41} y={0}>
                                        {"o"}
                                    </tspan>
                                    <tspan x={14.14} y={0} letterSpacing="0.01em">
                                        {"r"}
                                    </tspan>
                                    <tspan x={18.72} y={0}>
                                        {"t"}
                                    </tspan>
                                    <tspan x={23.19} y={0} letterSpacing="-0.01em">
                                        {"f"}
                                    </tspan>
                                    <tspan x={27.1} y={0}>
                                        {"olio"}
                                    </tspan>
                                </text>
                            </g>
                            <g id="Ripple_Path_3" data-name="Ripple Path 3">
                                <path
                                    d="M1387.44,240.07a9.09,9.09,0,0,0-8.19-.07c-2.28,1.29-2.29,3.41,0,4.73a9.08,9.08,0,0,0,8.2.07C1389.68,243.51,1389.7,241.4,1387.44,240.07Zm-1.91,3.63a4.9,4.9,0,0,1-4.43,0,1.35,1.35,0,0,1,0-2.56,4.94,4.94,0,0,1,4.43,0A1.35,1.35,0,0,1,1385.53,243.7Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2)"
                                />
                                <path
                                    d="M1383.29,247.39a11.76,11.76,0,0,1-5.8-1.43,3.84,3.84,0,0,1,.06-7.22,12.87,12.87,0,0,1,11.61.1,3.84,3.84,0,0,1-.05,7.22h0A11.87,11.87,0,0,1,1383.29,247.39Zm.07-9.1a11,11,0,0,0-5.37,1.24,3,3,0,0,0,0,5.66,11.91,11.91,0,0,0,10.71.09h0a3.52,3.52,0,0,0,2.11-2.82,3.48,3.48,0,0,0-2.07-2.84A10.92,10.92,0,0,0,1383.36,238.29Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2-2)"
                                />
                            </g>
                            <path
                                id="Path_Line_9-2"
                                data-name="Path Line 9"
                                d="M1430.56,197l-9.5-.16a4.44,4.44,0,0,0-4.5,4.39l-.25,38a4.14,4.14,0,0,1-4.19,4.09l-21.11-.21"
                                transform="translate(-0.5 -1)"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2-3)"
                            />
                            <path
                                id="Path_Line_8-2"
                                data-name="Path Line 8"
                                d="M1374.87,242.42l-17.2-.25c-3.51-.06-6.29-2.6-6.17-5.66l.4-10.59c.11-2.9-2.54-5.31-5.86-5.33l-17.11-.13"
                                transform="translate(-0.5 -1)"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_2-4)"
                            />
                            <g id="Paper">
                                <path
                                    d="M1425.25,207.66l3.92-2.26a27.82,27.82,0,0,0,14.47-22.52c.48-7.91,6.69-15.69,11.5-18.38h0l40.06,22.31h0c-4.74,2.64-10,10-10.56,17.81a28.17,28.17,0,0,1-14.44,22.55l-4.89,3.76Z"
                                    transform="translate(-0.5 -1)"
                                    opacity={0.96}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_38)"
                                />
                            </g>
                            <g id="Paper-2" data-name="Paper">
                                <g>
                                    <path
                                        d="M1476.83,202.79c1.27-1.46.64-3.28-1.42-4.25-.62-.29-1.24-.6-1.86-.88-.24-.11-.33-.21-.26-.43.17-.61.31-1.24.47-1.86a3.71,3.71,0,0,0-2.34-4c-3.36-1.54-6.62-3-9.82-4.41a5.47,5.47,0,0,0-5,.45c-.53.39-1.07.75-1.58,1.15a.55.55,0,0,1-.65.06,12.61,12.61,0,0,0-1.95-.89,3.1,3.1,0,0,0-3.66,1.28l-6,9.56a3.81,3.81,0,0,0-.23.45,2.65,2.65,0,0,0,1.37,3.27c3,1.62,6,3.36,9.17,5.12l10.16,5.69a5.81,5.81,0,0,0,.61.31,4.24,4.24,0,0,0,4.51-.84l2.4-2.77C1472.71,207.52,1474.74,205.19,1476.83,202.79Zm-12.58,3.51a8.29,8.29,0,0,1-6.76.79,13,13,0,0,1-5.94-3.28,5.23,5.23,0,0,1-1.7-5.28,6.86,6.86,0,0,1,3.23-4.43,10.22,10.22,0,0,1,8.71-.69c4,1.32,7.45,5.19,5.66,9.46a11.6,11.6,0,0,1-.79,1.37A12,12,0,0,1,1464.25,206.3Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#242993"
                                    />
                                    <path
                                        d="M1461.79,193.41a10.22,10.22,0,0,0-8.71.69,6.85,6.85,0,0,0-3.23,4.43,5.23,5.23,0,0,0,1.7,5.28,13.19,13.19,0,0,0,5.94,3.28,8.53,8.53,0,0,0,6.76-.79,12.21,12.21,0,0,0,2.4-2c.26-.45.57-.91.78-1.37C1469.24,198.6,1465.84,194.73,1461.79,193.41Zm-6.7,11.25c-3.19-1.74-4.34-5.07-2.62-7.6s6-3.46,9.53-1.75,4.85,5.41,2.74,8.08S1458.38,206.45,1455.09,204.66Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M1462,195.32c-3.5-1.7-7.76-.86-9.53,1.75s-.54,5.87,2.62,7.6,7.6,1.29,9.62-1.27S1465.61,197.07,1462,195.32Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#242993"
                                    />
                                </g>
                            </g>
                        </g>
                        <g id="StepTwo" className={stepTwo[this.props.tutorialStep]}>
                            <line
                                id="Path_Line_7"
                                data-name="Path Line 7"
                                x1={856.69}
                                y1={254.9}
                                x2={892.54}
                                y2={235.77}
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-20)"
                            />
                            <line
                                id="Path_Line_6"
                                data-name="Path Line 6"
                                x1={784.97}
                                y1={241.39}
                                x2={823.52}
                                y2={258.07}
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-21)"
                            />
                            <line
                                id="Path_Line_5"
                                data-name="Path Line 5"
                                x1={814.76}
                                y1={153}
                                x2={781.49}
                                y2={181.2}
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-22)"
                            />
                            <polyline
                                id="Path_Line_4"
                                data-name="Path Line 4"
                                points="742.94 127.1 775.28 112.46 822.93 131.84"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-23)"
                            />
                            <line
                                id="Path_Line_3"
                                data-name="Path Line 3"
                                x1={688.84}
                                y1={158.11}
                                x2={715.84}
                                y2={143.58}
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-24)"
                            />
                            <g id="Certificate_Icon_6" data-name="Certificate Icon 6">
                                <g>
                                    <path
                                        d="M925.31,262.3a7.71,7.71,0,0,1-4.13-1.74l-49.53-40.43a2.51,2.51,0,0,1-.86-2.14,2.37,2.37,0,0,1,1.15-1.94l98.82-54.38,53.55,43.71a2.48,2.48,0,0,1,.86,2.13,2.37,2.37,0,0,1-1.16,1.94L929.62,261.4A7.34,7.34,0,0,1,925.31,262.3Zm45.3-98.49-98,53.92a.52.52,0,0,0-.25.42.54.54,0,0,0,.18.46L922.09,259a6.06,6.06,0,0,0,6.86.68l94.39-51.94a.55.55,0,0,0,.06-.88Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6)"
                                    />
                                    <g opacity={0.5}>
                                        <path
                                            d="M970.61,163.81l-97,53.18a1.39,1.39,0,0,0-.14,2.26l47.34,41.12c2.18,1.67,4.84,1,7.21-.27L1022.79,208c.81-.43-.18-1.6-.93-2.17Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#242993"
                                        />
                                    </g>
                                </g>
                                <polygon
                                    points="924.4 243.68 915.56 242.78 918.66 245.31 917.27 248.21 924.4 246.22 924.4 243.68"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-2)"
                                />
                                <polygon
                                    points="924.65 246.75 918.27 253.95 921.95 252.87 922.91 256 926.29 248.41 924.65 246.75"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-3)"
                                />
                                <ellipse
                                    cx={927.62}
                                    cy={244.54}
                                    rx={4.71}
                                    ry={5.39}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-4)"
                                />
                            </g>
                            <g id="Certificate_Icon_5" data-name="Certificate Icon 5">
                                <g>
                                    <path
                                        d="M926.24,256.87a7.65,7.65,0,0,1-4.12-1.74L872.58,214.7a2.51,2.51,0,0,1-.86-2.14,2.37,2.37,0,0,1,1.15-1.94l98.82-54.38L1025.24,200a2.48,2.48,0,0,1,.86,2.13,2.39,2.39,0,0,1-1.16,1.94L930.55,256A7.34,7.34,0,0,1,926.24,256.87Zm45.3-98.49-98,53.92a.52.52,0,0,0-.25.42.54.54,0,0,0,.18.46L923,253.61a6.06,6.06,0,0,0,6.86.68l94.39-51.94a.52.52,0,0,0,.25-.42.55.55,0,0,0-.19-.46Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-5)"
                                    />
                                    <g opacity={0.5}>
                                        <path
                                            d="M971.54,158.38l-97,53.18a1.39,1.39,0,0,0-.14,2.26l47.34,41.12c2.18,1.67,4.84,1,7.21-.27l94.75-52.07c.81-.43-.18-1.6-.93-2.17Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#242993"
                                        />
                                    </g>
                                </g>
                                <polygon
                                    points="925.33 238.25 916.49 237.35 919.59 239.88 918.2 242.78 925.33 240.79 925.33 238.25"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-6)"
                                />
                                <polygon
                                    points="925.58 241.31 919.21 248.52 922.88 247.44 923.84 250.57 927.22 242.97 925.58 241.31"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-7)"
                                />
                                <ellipse
                                    cx={928.55}
                                    cy={239.11}
                                    rx={4.71}
                                    ry={5.39}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-8)"
                                />
                            </g>
                            <g id="Certificate_Icon_4" data-name="Certificate Icon 4">
                                <g>
                                    <path
                                        d="M927.63,251.08a7.79,7.79,0,0,1-4.12-1.74L874,208.91a2.51,2.51,0,0,1-.86-2.14,2.35,2.35,0,0,1,1.15-1.94l98.82-54.38,53.55,43.7a2.53,2.53,0,0,1,.85,2.14,2.35,2.35,0,0,1-1.15,1.94l-94.39,52A7.46,7.46,0,0,1,927.63,251.08Zm45.3-98.5-98,53.93a.49.49,0,0,0-.24.42.55.55,0,0,0,.18.46l49.54,40.43a6.06,6.06,0,0,0,6.86.68l94.39-51.95a.49.49,0,0,0,.24-.42.5.5,0,0,0-.18-.45Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-9)"
                                    />
                                    <g opacity={0.5}>
                                        <path
                                            d="M972.93,152.58l-97,53.19a1.39,1.39,0,0,0-.15,2.26l47.35,41.12c2.18,1.67,4.84,1,7.21-.27l94.75-52.07c.81-.44-.19-1.6-.94-2.18Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#242993"
                                        />
                                    </g>
                                </g>
                                <polygon
                                    points="926.73 232.46 917.89 231.56 920.99 234.09 919.59 236.99 926.73 235 926.73 232.46"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-10)"
                                />
                                <polygon
                                    points="926.98 235.52 920.6 242.73 924.27 241.65 925.24 244.78 928.62 237.18 926.98 235.52"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-11)"
                                />
                                <ellipse
                                    cx={929.95}
                                    cy={233.32}
                                    rx={4.71}
                                    ry={5.39}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-12)"
                                />
                            </g>
                            <g id="Certificate_Icon_3" data-name="Certificate Icon 3">
                                <g>
                                    <path
                                        d="M926.7,245.65a7.79,7.79,0,0,1-4.12-1.74L873,203.48a2.53,2.53,0,0,1-.85-2.14,2.35,2.35,0,0,1,1.15-1.94L972.16,145l53.54,43.7a2.51,2.51,0,0,1,.86,2.14,2.35,2.35,0,0,1-1.15,1.94L931,244.75A7.46,7.46,0,0,1,926.7,245.65Zm45.3-98.5-98,53.93a.49.49,0,0,0-.24.42.5.5,0,0,0,.18.45l49.54,40.44a6.06,6.06,0,0,0,6.86.68l94.39-51.95a.49.49,0,0,0,.24-.42.53.53,0,0,0-.18-.45Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-13)"
                                    />
                                    <g opacity={0.5}>
                                        <path
                                            d="M972,147.15l-97,53.19a1.38,1.38,0,0,0-.15,2.26l47.35,41.12c2.18,1.67,4.84,1,7.21-.27l94.74-52.07c.82-.44-.18-1.6-.93-2.18Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#242993"
                                        />
                                    </g>
                                </g>
                                <polygon
                                    points="925.8 227.03 916.96 226.13 920.06 228.66 918.66 231.56 925.8 229.56 925.8 227.03"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-14)"
                                />
                                <polygon
                                    points="926.05 230.09 919.67 237.3 923.34 236.22 924.3 239.35 927.69 231.75 926.05 230.09"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-15)"
                                />
                                <ellipse
                                    cx={929.02}
                                    cy={227.89}
                                    rx={4.71}
                                    ry={5.39}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-16)"
                                />
                            </g>
                            <g id="Certificate_Icon_2" data-name="Certificate Icon 2">
                                <g>
                                    <path
                                        d="M926.7,239.13a7.71,7.71,0,0,1-4.12-1.74L873,197a2.52,2.52,0,0,1-.85-2.14,2.37,2.37,0,0,1,1.15-1.94l98.82-54.38,53.54,43.71a2.5,2.5,0,0,1,.86,2.14,2.34,2.34,0,0,1-1.15,1.93L931,238.23A7.38,7.38,0,0,1,926.7,239.13ZM972,140.64l-98,53.92a.57.57,0,0,0-.06.88l49.54,40.43a6.06,6.06,0,0,0,6.86.68l94.39-51.94a.5.5,0,0,0,.24-.42.54.54,0,0,0-.18-.46Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-17)"
                                    />
                                    <g opacity={0.5}>
                                        <path
                                            d="M972,140.64l-97,53.18a1.38,1.38,0,0,0-.15,2.26l47.35,41.13c2.18,1.66,4.84,1,7.21-.28l94.74-52.07c.82-.43-.18-1.6-.93-2.17Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#242993"
                                        />
                                    </g>
                                </g>
                                <polygon
                                    points="925.8 220.51 916.96 219.61 920.06 222.14 918.66 225.04 925.8 223.05 925.8 220.51"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-18)"
                                />
                                <polygon
                                    points="926.05 223.58 919.67 230.78 923.34 229.7 924.3 232.83 927.69 225.24 926.05 223.58"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-19)"
                                />
                                <ellipse
                                    cx={929.02}
                                    cy={221.37}
                                    rx={4.71}
                                    ry={5.39}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-20)"
                                />
                            </g>
                            <g id="Certificate_Icon_1" data-name="Certificate Icon 1">
                                <g>
                                    <path
                                        d="M926.7,231.53a7.71,7.71,0,0,1-4.12-1.74L873,189.36a2.53,2.53,0,0,1-.85-2.14,2.37,2.37,0,0,1,1.15-1.94l98.82-54.38,53.54,43.71a2.48,2.48,0,0,1,.86,2.13,2.35,2.35,0,0,1-1.15,1.94L931,230.63A7.38,7.38,0,0,1,926.7,231.53ZM972,133,874,187a.49.49,0,0,0-.24.42.51.51,0,0,0,.18.46l49.54,40.43a6.06,6.06,0,0,0,6.86.68L1024.74,177a.49.49,0,0,0,.24-.41.54.54,0,0,0-.18-.46Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-21)"
                                    />
                                    <g opacity={0.5}>
                                        <path
                                            d="M972,133l-97,53.18a1.38,1.38,0,0,0-.15,2.26l47.35,41.12c2.18,1.67,4.84,1,7.21-.27l94.74-52.07c.82-.44-.18-1.6-.93-2.17Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#242993"
                                        />
                                    </g>
                                </g>
                                <polygon
                                    points="925.8 212.91 916.96 212.01 920.06 214.54 918.66 217.44 925.8 215.45 925.8 212.91"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-22)"
                                />
                                <polygon
                                    points="926.05 215.97 919.67 223.18 923.34 222.1 924.3 225.23 927.69 217.63 926.05 215.97"
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-23)"
                                />
                                <ellipse
                                    cx={929.02}
                                    cy={213.77}
                                    rx={4.71}
                                    ry={5.39}
                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_6-24)"
                                />
                            </g>
                            <g id="Icon_Block_4" data-name="Icon Block 4">
                                <g>
                                    <g>
                                        <g>
                                            <polygon
                                                points="841.99 323.81 816.87 306.89 841.99 289.96 867.12 306.89 841.99 323.81"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="841.99 318.94 816.87 302.02 841.99 285.09 867.12 302.02 841.99 318.94"
                                                fill="#312a91"
                                            />
                                            <g opacity={0.9}>
                                                <polygon
                                                    points="841.99 288.88 822.6 275.81 841.99 262.74 861.39 275.81 841.99 288.88"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87)"
                                                />
                                                <polygon
                                                    points="861.39 275.81 861.39 302.02 841.99 315.08 841.99 288.88 861.39 275.81"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-2)"
                                                />
                                                <polygon
                                                    points="822.6 275.81 822.6 302.02 841.99 315.08 841.99 288.88 822.6 275.81"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-3)"
                                                />
                                            </g>
                                            <polygon
                                                points="841.99 315.08 822.6 302.02 841.99 288.95 861.39 302.02 841.99 315.08"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-4)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="867.12 302.02 867.12 306.89 841.99 323.81 841.99 318.94 867.12 302.02"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59)"
                                            />
                                            <polygon
                                                points="816.87 302.02 816.87 306.89 841.99 323.81 841.99 318.94 816.87 302.02"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="816.87 302.02 816.87 306.89 841.99 323.81 841.99 318.94 816.87 302.02"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="841.99 283.11 816.87 266.19 841.99 249.26 867.12 266.19 841.99 283.11"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="841.99 278.24 816.87 261.32 841.99 244.39 867.12 261.32 841.99 278.24"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="841.99 278.24 816.87 261.32 841.99 244.39 867.12 261.32 841.99 278.24"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-5)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="841.99 267.58 832.69 261.32 841.99 255.05 851.29 261.32 841.99 267.58"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="841.99 259.3 848.14 263.44 851.29 261.32 841.99 255.05 832.69 261.32 835.85 263.44 841.99 259.3"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="841.99 259.3 848.14 263.44 851.29 261.32 841.99 255.05 832.69 261.32 835.85 263.44 841.99 259.3"
                                                fill="#42e8e0"
                                            />
                                            <polygon
                                                points="867.12 261.32 867.12 266.19 841.99 283.11 841.99 278.24 867.12 261.32"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-2)"
                                            />
                                            <polygon
                                                points="816.87 261.32 816.87 266.19 841.99 283.11 841.99 278.24 816.87 261.32"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="816.87 261.32 816.87 266.19 841.99 283.11 841.99 278.24 816.87 261.32"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-2)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="841.99 283.11 841.99 318.94 816.87 302.02 816.87 266.19 841.99 283.11"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <g>
                                                <polygon
                                                    points="822.6 270.04 822.6 302.02 841.99 315.08 861.39 302.02 861.39 270.04 841.99 283.11 822.6 270.04"
                                                    fill="#42e8e0"
                                                    opacity={0.3}
                                                />
                                                <polygon
                                                    points="841.99 283.11 841.99 315.08 822.6 302.02 822.6 270.04 841.99 283.11"
                                                    fill="#42e8e0"
                                                    opacity={0.3}
                                                />
                                            </g>
                                            <polygon
                                                points="816.87 266.19 816.87 302.02 841.99 318.94 867.12 302.02 867.12 266.19 841.99 283.11 816.87 266.19"
                                                fill="#ff5cf1"
                                                opacity={0.5}
                                            />
                                            <polygon
                                                points="817.47 261.32 842.29 244.59 841.99 244.39 816.87 261.32 841.99 278.24 842.29 278.04 817.47 261.32"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-6)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                        </g>
                                        <polygon
                                            points="816.87 266.19 816.87 302.02 817.22 302.25 817.22 266.42 816.87 266.19"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="867.12 266.19 867.12 302.02 866.77 302.25 866.77 266.42 867.12 266.19"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="841.99 283.11 841.99 283.11 841.4 282.71 841.4 318.55 841.99 318.94 841.99 318.94 841.99 318.94 841.99 318.94 841.99 318.94 842.59 318.55 842.59 282.71 841.99 283.11"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                    </g>
                                    <polygon
                                        points="851.29 261.32 851.29 202.63 832.74 202.63 832.69 261.32 841.99 267.58 851.29 261.32"
                                        opacity={0.7}
                                        fill="url(#linear-gradient-25)"
                                        style={{ mixBlendMode: "lighten" }}
                                    />
                                </g>
                            </g>
                            <g id="Block_4_Particles" data-name="Block 4 Particles">
                                <g>
                                    <g>
                                        <path
                                            d="M844.46,253.76a.75.75,0,0,1-.69.8.81.81,0,0,1,0-1.6A.75.75,0,0,1,844.46,253.76Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={834.65}
                                            cy={246.43}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={837.6}
                                            cy={240.85}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={850.22}
                                            cy={239.03}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.29,238.37a.62.62,0,0,1-.57.66.67.67,0,1,1,.57-.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M837.2,240.85a.28.28,0,1,1-.27-.32A.3.3,0,0,1,837.2,240.85Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={835.94}
                                            cy={255.44}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M839.82,250.86a.43.43,0,1,1-.43-.5A.46.46,0,0,1,839.82,250.86Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M838.5,249.86a.31.31,0,0,1-.28.32.3.3,0,0,1-.27-.32.31.31,0,0,1,.27-.33A.31.31,0,0,1,838.5,249.86Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M842.21,245.81a.61.61,0,0,0,.74.51.72.72,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.73.73,0,0,0,842.21,245.81Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M848.66,238.09a.39.39,0,0,0,.46.32.46.46,0,0,0,.27-.54.37.37,0,0,0-.46-.31A.45.45,0,0,0,848.66,238.09Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M845.07,234.05a.38.38,0,0,0,.47.32.46.46,0,0,0,.27-.54.38.38,0,0,0-.46-.32A.45.45,0,0,0,845.07,234.05Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834,235.67a.25.25,0,0,0,.29.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.2A.28.28,0,0,0,834,235.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.29,234.06a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.5.5,0,0,0-.61-.42A.6.6,0,0,0,834.29,234.06Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M846,232.84a.24.24,0,0,0,.3.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.2A.29.29,0,0,0,846,232.84Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849,256.74a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.25.25,0,0,1,.39,0A.35.35,0,0,1,849,256.74Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849.59,255.05a.52.52,0,0,1-.8-.08.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.08A.75.75,0,0,1,849.59,255.05Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M848.72,253.42a.49.49,0,0,0,.09.61.34.34,0,0,0,.52-.11.49.49,0,0,0-.09-.61A.34.34,0,0,0,848.72,253.42Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M849,247.6a.49.49,0,0,0,.09.63.35.35,0,0,0,.53-.11.5.5,0,0,0-.09-.62A.35.35,0,0,0,849,247.6Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.44,247.67a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,850.44,247.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M840.56,261.84a.62.62,0,0,0,.74.52.74.74,0,0,0,.44-.87A.62.62,0,0,0,841,261,.73.73,0,0,0,840.56,261.84Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M842.32,258a.42.42,0,0,0,.52.36.5.5,0,0,0,.31-.6.44.44,0,0,0-.52-.37A.52.52,0,0,0,842.32,258Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M844.46,244.69a.75.75,0,0,1-.69.8.75.75,0,0,1-.68-.8.74.74,0,0,1,.68-.79A.74.74,0,0,1,844.46,244.69Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={834.65}
                                            cy={237.37}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={837.6}
                                            cy={231.79}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={850.22}
                                            cy={229.96}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.29,229.3a.62.62,0,0,1-.57.67.63.63,0,0,1-.57-.67.62.62,0,0,1,.57-.66A.61.61,0,0,1,850.29,229.3Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M837.2,231.78a.28.28,0,1,1-.27-.32A.3.3,0,0,1,837.2,231.78Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={835.94}
                                            cy={246.37}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M839.82,241.8a.44.44,0,1,1-.43-.51A.47.47,0,0,1,839.82,241.8Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M838.5,240.79a.3.3,0,0,1-.28.32.32.32,0,0,1,0-.64A.3.3,0,0,1,838.5,240.79Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M842.21,236.75a.62.62,0,0,0,.74.51.73.73,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.73.73,0,0,0,842.21,236.75Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M848.66,229a.38.38,0,0,0,.46.32.45.45,0,0,0,.27-.53.37.37,0,0,0-.46-.32A.45.45,0,0,0,848.66,229Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M845.07,225a.39.39,0,0,0,.47.33.47.47,0,0,0,.27-.55.38.38,0,0,0-.46-.32A.45.45,0,0,0,845.07,225Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834,226.61a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.34.26.26,0,0,0-.3-.21A.29.29,0,0,0,834,226.61Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.29,225a.51.51,0,0,0,.62.43.61.61,0,0,0,.36-.72.5.5,0,0,0-.61-.43A.61.61,0,0,0,834.29,225Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M846,223.78a.26.26,0,0,0,.3.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.21A.3.3,0,0,0,846,223.78Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849,247.68a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.26.26,0,0,1,.39,0A.36.36,0,0,1,849,247.68Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849.59,246a.51.51,0,0,1-.8-.08.74.74,0,0,1,.06-.94.53.53,0,0,1,.81.08A.75.75,0,0,1,849.59,246Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M848.72,244.35a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,848.72,244.35Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M849,238.54a.47.47,0,0,0,.09.62.35.35,0,0,0,.53-.1.51.51,0,0,0-.09-.63A.35.35,0,0,0,849,238.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.44,238.61a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,850.44,238.61Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M840.56,252.78a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,840.56,252.78Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M842.32,249a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,842.32,249Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={843.27}
                                            cy={234.63}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={834.65}
                                            cy={228.3}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M838.53,223.72a.43.43,0,1,1-.43-.5A.47.47,0,0,1,838.53,223.72Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={850.22}
                                            cy={220.89}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.29,220.24a.62.62,0,0,1-.57.66.67.67,0,1,1,.57-.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M837.2,222.72a.28.28,0,1,1-.27-.32A.3.3,0,0,1,837.2,222.72Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={835.94}
                                            cy={237.31}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M839.82,232.73a.43.43,0,1,1-.43-.5A.46.46,0,0,1,839.82,232.73Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M838.5,231.73a.31.31,0,0,1-.28.32.3.3,0,0,1-.27-.32.31.31,0,0,1,.27-.33A.31.31,0,0,1,838.5,231.73Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M842.21,227.68a.61.61,0,0,0,.74.51.72.72,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.73.73,0,0,0,842.21,227.68Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M848.66,220a.38.38,0,0,0,.46.31.44.44,0,0,0,.27-.53.37.37,0,0,0-.46-.31A.44.44,0,0,0,848.66,220Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M845.07,215.92a.38.38,0,0,0,.47.32.46.46,0,0,0,.27-.54.37.37,0,0,0-.46-.32A.45.45,0,0,0,845.07,215.92Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834,217.54a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.34.25.25,0,0,0-.3-.2A.28.28,0,0,0,834,217.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.29,215.93a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.49.49,0,0,0-.61-.42A.6.6,0,0,0,834.29,215.93Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M846,214.71a.24.24,0,0,0,.3.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.2A.29.29,0,0,0,846,214.71Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849,238.61a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.25.25,0,0,1,.39,0A.35.35,0,0,1,849,238.61Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849.59,236.91a.51.51,0,0,1-.8-.07.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.08A.74.74,0,0,1,849.59,236.91Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M848.72,235.29a.49.49,0,0,0,.09.61.34.34,0,0,0,.52-.11.49.49,0,0,0-.09-.61A.34.34,0,0,0,848.72,235.29Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M849,229.47a.49.49,0,0,0,.09.63.35.35,0,0,0,.53-.11.5.5,0,0,0-.09-.62A.35.35,0,0,0,849,229.47Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.44,229.54a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,850.44,229.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M840.56,243.71a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.62.62,0,0,0-.74-.51A.72.72,0,0,0,840.56,243.71Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M842.32,239.88a.42.42,0,0,0,.52.36.5.5,0,0,0,.31-.6.44.44,0,0,0-.52-.37A.52.52,0,0,0,842.32,239.88Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={843.27}
                                            cy={215.54}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={834.65}
                                            cy={209.21}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M838.53,204.63a.43.43,0,1,1-.43-.5A.47.47,0,0,1,838.53,204.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={850.22}
                                            cy={201.81}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.29,201.15a.62.62,0,0,1-.57.66.67.67,0,1,1,.57-.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M837.2,203.63a.28.28,0,1,1-.27-.32A.3.3,0,0,1,837.2,203.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={835.94}
                                            cy={218.22}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M839.82,213.64a.43.43,0,1,1-.43-.5A.46.46,0,0,1,839.82,213.64Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M838.5,212.64a.31.31,0,0,1-.28.32.3.3,0,0,1-.27-.32.31.31,0,0,1,.27-.33A.31.31,0,0,1,838.5,212.64Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M842.21,208.59a.61.61,0,0,0,.74.51.72.72,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.73.73,0,0,0,842.21,208.59Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M848.66,200.87a.39.39,0,0,0,.46.32.46.46,0,0,0,.27-.54.37.37,0,0,0-.46-.31A.45.45,0,0,0,848.66,200.87Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M845.07,196.83a.38.38,0,0,0,.47.32.46.46,0,0,0,.27-.54.38.38,0,0,0-.46-.32A.45.45,0,0,0,845.07,196.83Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834,198.45a.25.25,0,0,0,.29.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.2A.28.28,0,0,0,834,198.45Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.29,196.84a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.5.5,0,0,0-.61-.42A.6.6,0,0,0,834.29,196.84Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M846,195.62a.24.24,0,0,0,.3.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.2A.29.29,0,0,0,846,195.62Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849,219.52a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.25.25,0,0,1,.39,0A.35.35,0,0,1,849,219.52Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M849.59,217.83a.52.52,0,0,1-.8-.08.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.08A.75.75,0,0,1,849.59,217.83Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M848.72,216.2a.49.49,0,0,0,.09.61.34.34,0,0,0,.52-.11.49.49,0,0,0-.09-.61A.34.34,0,0,0,848.72,216.2Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M849,210.38a.49.49,0,0,0,.09.63.35.35,0,0,0,.53-.11.5.5,0,0,0-.09-.62A.35.35,0,0,0,849,210.38Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M850.44,210.45a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,850.44,210.45Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M840.56,224.62a.62.62,0,0,0,.74.52.74.74,0,0,0,.44-.87.62.62,0,0,0-.74-.51A.73.73,0,0,0,840.56,224.62Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M842.32,220.79a.42.42,0,0,0,.52.36.5.5,0,0,0,.31-.6.44.44,0,0,0-.52-.37A.52.52,0,0,0,842.32,220.79Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="Icon_Block_3" data-name="Icon Block 3">
                                <g>
                                    <g>
                                        <g>
                                            <polygon
                                                points="772.82 253.84 747.7 236.91 772.82 219.99 797.94 236.91 772.82 253.84"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="772.82 248.97 747.7 232.04 772.82 215.12 797.94 232.05 772.82 248.97"
                                                fill="#312a91"
                                            />
                                            <g opacity={0.9}>
                                                <polygon
                                                    points="772.82 218.9 753.42 205.84 772.82 192.77 792.22 205.84 772.82 218.9"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-7)"
                                                />
                                                <polygon
                                                    points="792.22 205.84 792.22 232.04 772.82 245.11 772.82 218.9 792.22 205.84"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-8)"
                                                />
                                                <polygon
                                                    points="753.42 205.84 753.42 232.04 772.82 245.11 772.82 218.9 753.42 205.84"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-9)"
                                                />
                                            </g>
                                            <polygon
                                                points="772.82 245.11 753.42 232.04 772.82 218.98 792.22 232.04 772.82 245.11"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-10)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="797.94 232.05 797.94 236.91 772.82 253.84 772.82 248.97 797.94 232.05"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-3)"
                                            />
                                            <polygon
                                                points="747.7 232.04 747.7 236.91 772.82 253.84 772.82 248.97 747.7 232.04"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="747.7 232.04 747.7 236.91 772.82 253.84 772.82 248.97 747.7 232.04"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-3)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="772.82 213.14 747.7 196.21 772.82 179.29 797.94 196.21 772.82 213.14"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="772.82 208.27 747.7 191.34 772.82 174.42 797.94 191.34 772.82 208.27"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="772.82 208.27 747.7 191.34 772.82 174.42 797.94 191.34 772.82 208.27"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-11)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="772.82 197.61 763.52 191.34 772.82 185.08 782.12 191.34 772.82 197.61"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="772.82 189.33 778.97 193.47 782.12 191.34 772.82 185.08 763.52 191.34 766.68 193.47 772.82 189.33"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="772.82 189.33 778.97 193.47 782.12 191.34 772.82 185.08 763.52 191.34 766.68 193.47 772.82 189.33"
                                                fill="#42e8e0"
                                            />
                                            <polygon
                                                points="797.94 191.34 797.94 196.21 772.82 213.14 772.82 208.27 797.94 191.34"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-4)"
                                            />
                                            <polygon
                                                points="747.7 191.34 747.7 196.21 772.82 213.14 772.82 208.27 747.7 191.34"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="747.7 191.34 747.7 196.21 772.82 213.14 772.82 208.27 747.7 191.34"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-4)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="772.82 213.14 772.82 248.97 747.7 232.04 747.7 196.21 772.82 213.14"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <g>
                                                <polygon
                                                    points="753.42 200.07 753.42 232.04 772.82 245.11 792.22 232.04 792.22 200.07 772.82 213.14 753.42 200.07"
                                                    fill="#42e8e0"
                                                    opacity={0.3}
                                                />
                                                <polygon
                                                    points="772.82 213.14 772.82 245.11 753.42 232.04 753.42 200.07 772.82 213.14"
                                                    fill="#42e8e0"
                                                    opacity={0.3}
                                                />
                                            </g>
                                            <polygon
                                                points="747.7 196.21 747.7 232.04 772.82 248.97 797.94 232.05 797.94 196.21 772.82 213.14 747.7 196.21"
                                                fill="#ff5cf1"
                                                opacity={0.5}
                                            />
                                            <polygon
                                                points="748.29 191.34 773.12 174.62 772.82 174.42 747.7 191.34 772.82 208.27 773.12 208.07 748.29 191.34"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-12)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                        </g>
                                        <polygon
                                            points="747.7 196.21 747.7 232.04 748.04 232.28 748.04 196.45 747.7 196.21"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="797.94 196.21 797.94 232.04 797.6 232.28 797.6 196.45 797.94 196.21"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="772.82 213.14 772.82 213.14 772.23 212.74 772.23 248.57 772.82 248.97 772.82 248.97 772.82 248.97 772.82 248.97 772.82 248.97 773.41 248.57 773.41 212.74 772.82 213.14"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                    </g>
                                    <polygon
                                        points="782.12 191.34 782.12 132.66 763.57 132.66 763.52 191.34 772.82 197.61 782.12 191.34"
                                        opacity={0.7}
                                        fill="url(#linear-gradient-26)"
                                        style={{ mixBlendMode: "lighten" }}
                                    />
                                </g>
                            </g>
                            <g id="Bloack_3_Particles" data-name="Bloack 3 Particles">
                                <g>
                                    <g>
                                        <path
                                            d="M775.28,183.79a.69.69,0,1,1-1.36,0,.69.69,0,1,1,1.36,0Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={765.48}
                                            cy={176.46}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={768.43}
                                            cy={170.88}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={781.05}
                                            cy={169.05}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.12,168.39a.63.63,0,0,1-.57.67.67.67,0,1,1,.57-.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M768,170.88a.28.28,0,1,1-.28-.32A.3.3,0,0,1,768,170.88Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={766.77}
                                            cy={185.47}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M770.65,180.89a.43.43,0,1,1-.43-.5A.46.46,0,0,1,770.65,180.89Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M769.32,179.88a.31.31,0,0,1-.27.33.33.33,0,0,1,0-.65A.3.3,0,0,1,769.32,179.88Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M773,175.84a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,773,175.84Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M779.49,168.12a.38.38,0,0,0,.46.31.44.44,0,0,0,.27-.53.38.38,0,0,0-.46-.31A.44.44,0,0,0,779.49,168.12Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M775.9,164.08a.38.38,0,0,0,.46.32.46.46,0,0,0,.28-.54.39.39,0,0,0-.47-.33A.47.47,0,0,0,775.9,164.08Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M764.83,165.7a.23.23,0,0,0,.29.2.27.27,0,0,0,.17-.34.23.23,0,0,0-.29-.2A.28.28,0,0,0,764.83,165.7Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M765.12,164.09a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.51.51,0,0,0-.62-.43A.61.61,0,0,0,765.12,164.09Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M776.85,162.87a.24.24,0,0,0,.3.21.29.29,0,0,0,.17-.35.25.25,0,0,0-.29-.21A.29.29,0,0,0,776.85,162.87Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.79,186.77a.24.24,0,0,1-.38,0,.35.35,0,0,1,0-.45.24.24,0,0,1,.38,0A.35.35,0,0,1,779.79,186.77Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M780.42,185.07a.51.51,0,0,1-.8-.07.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.07A.75.75,0,0,1,780.42,185.07Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.55,183.44a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,779.55,183.44Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M779.86,177.63a.5.5,0,0,0,.09.62.35.35,0,0,0,.54-.1.5.5,0,0,0-.09-.62A.35.35,0,0,0,779.86,177.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.27,177.7a.32.32,0,0,0,.05.4.23.23,0,0,0,.35-.07.33.33,0,0,0-.06-.4A.22.22,0,0,0,781.27,177.7Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M771.39,191.87a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,771.39,191.87Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M773.14,188a.43.43,0,0,0,.53.36.52.52,0,0,0,.31-.61.44.44,0,0,0-.53-.36A.52.52,0,0,0,773.14,188Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M775.28,174.72a.69.69,0,1,1-.68-.8A.75.75,0,0,1,775.28,174.72Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={765.48}
                                            cy={167.39}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={768.43}
                                            cy={161.82}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={781.05}
                                            cy={159.99}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.12,159.33a.63.63,0,0,1-.57.67.68.68,0,0,1,0-1.34A.63.63,0,0,1,781.12,159.33Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M768,161.81a.28.28,0,1,1-.28-.32A.3.3,0,0,1,768,161.81Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={766.77}
                                            cy={176.4}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M770.65,171.82a.43.43,0,1,1-.43-.5A.47.47,0,0,1,770.65,171.82Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M769.32,170.82a.3.3,0,0,1-.27.32.32.32,0,0,1,0-.64A.3.3,0,0,1,769.32,170.82Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M773,166.77a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.62.62,0,0,0-.74-.51A.73.73,0,0,0,773,166.77Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M779.49,159.05a.38.38,0,0,0,.46.32.45.45,0,0,0,.27-.53.38.38,0,0,0-.46-.32A.45.45,0,0,0,779.49,159.05Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M775.9,155a.38.38,0,0,0,.46.32.45.45,0,0,0,.28-.54.38.38,0,0,0-.47-.32A.46.46,0,0,0,775.9,155Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M764.83,156.63a.23.23,0,0,0,.29.21.28.28,0,0,0,.17-.34.23.23,0,0,0-.29-.21A.28.28,0,0,0,764.83,156.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M765.12,155a.51.51,0,0,0,.62.42.6.6,0,0,0,.36-.72.51.51,0,0,0-.62-.42A.6.6,0,0,0,765.12,155Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M776.85,153.81a.24.24,0,0,0,.3.2.28.28,0,0,0,.17-.34.23.23,0,0,0-.29-.21A.29.29,0,0,0,776.85,153.81Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.79,177.71a.25.25,0,0,1-.38,0,.35.35,0,0,1,0-.45.25.25,0,0,1,.38,0A.35.35,0,0,1,779.79,177.71Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M780.42,176a.51.51,0,0,1-.8-.08.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.08A.75.75,0,0,1,780.42,176Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.55,174.38a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,779.55,174.38Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M779.86,168.57a.5.5,0,0,0,.09.62.36.36,0,0,0,.54-.11.5.5,0,0,0-.09-.62A.36.36,0,0,0,779.86,168.57Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.27,168.63a.32.32,0,0,0,.05.4.24.24,0,0,0,.35-.06.33.33,0,0,0-.06-.4A.23.23,0,0,0,781.27,168.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M771.39,182.81a.61.61,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,771.39,182.81Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M773.14,179a.44.44,0,0,0,.53.36.52.52,0,0,0,.31-.61.43.43,0,0,0-.53-.36A.52.52,0,0,0,773.14,179Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={774.1}
                                            cy={164.66}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={765.48}
                                            cy={158.33}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M769.36,153.75a.44.44,0,1,1-.43-.5A.47.47,0,0,1,769.36,153.75Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={781.05}
                                            cy={150.92}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.12,150.26a.63.63,0,0,1-.57.67.67.67,0,1,1,.57-.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M768,152.75a.28.28,0,1,1-.28-.33A.31.31,0,0,1,768,152.75Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={766.77}
                                            cy={167.34}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M770.65,162.76a.43.43,0,1,1-.43-.5A.46.46,0,0,1,770.65,162.76Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M769.32,161.75a.31.31,0,0,1-.27.33.33.33,0,0,1,0-.65A.3.3,0,0,1,769.32,161.75Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M773,157.71a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,773,157.71Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M779.49,150a.38.38,0,0,0,.46.31.45.45,0,0,0,.27-.53.38.38,0,0,0-.46-.32A.46.46,0,0,0,779.49,150Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M775.9,146a.38.38,0,0,0,.46.32.46.46,0,0,0,.28-.55.39.39,0,0,0-.47-.32A.47.47,0,0,0,775.9,146Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M764.83,147.57a.23.23,0,0,0,.29.2.28.28,0,0,0,.17-.34.23.23,0,0,0-.29-.2A.27.27,0,0,0,764.83,147.57Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M765.12,146a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.51.51,0,0,0-.62-.43A.61.61,0,0,0,765.12,146Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M776.85,144.74a.25.25,0,0,0,.3.21.29.29,0,0,0,.17-.35.24.24,0,0,0-.29-.21A.29.29,0,0,0,776.85,144.74Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.79,168.64a.24.24,0,0,1-.38,0,.35.35,0,0,1,0-.45.24.24,0,0,1,.38,0A.35.35,0,0,1,779.79,168.64Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M780.42,166.94a.51.51,0,0,1-.8-.07.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.07A.75.75,0,0,1,780.42,166.94Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.55,165.31a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,779.55,165.31Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M779.86,159.5a.5.5,0,0,0,.09.62.35.35,0,0,0,.54-.1.5.5,0,0,0-.09-.62A.35.35,0,0,0,779.86,159.5Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.27,159.57a.32.32,0,0,0,.05.4.23.23,0,0,0,.35-.07.33.33,0,0,0-.06-.4A.22.22,0,0,0,781.27,159.57Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M771.39,173.74a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,771.39,173.74Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M773.14,169.91a.43.43,0,0,0,.53.36.52.52,0,0,0,.31-.61.44.44,0,0,0-.53-.36A.52.52,0,0,0,773.14,169.91Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={774.1}
                                            cy={145.57}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={765.48}
                                            cy={139.24}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M769.36,134.66a.44.44,0,1,1-.43-.5A.47.47,0,0,1,769.36,134.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={781.05}
                                            cy={131.83}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.12,131.17a.63.63,0,0,1-.57.67.67.67,0,1,1,.57-.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M768,133.66a.28.28,0,1,1-.28-.32A.3.3,0,0,1,768,133.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={766.77}
                                            cy={148.25}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M770.65,143.67a.43.43,0,1,1-.43-.5A.46.46,0,0,1,770.65,143.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M769.32,142.66a.31.31,0,0,1-.27.33.33.33,0,0,1,0-.65A.3.3,0,0,1,769.32,142.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M773,138.62a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,773,138.62Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M779.49,130.9a.38.38,0,0,0,.46.31.44.44,0,0,0,.27-.53.38.38,0,0,0-.46-.31A.44.44,0,0,0,779.49,130.9Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M775.9,126.86a.38.38,0,0,0,.46.32.46.46,0,0,0,.28-.54.39.39,0,0,0-.47-.33A.47.47,0,0,0,775.9,126.86Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M764.83,128.48a.23.23,0,0,0,.29.2.27.27,0,0,0,.17-.34.23.23,0,0,0-.29-.2A.28.28,0,0,0,764.83,128.48Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M765.12,126.87a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.51.51,0,0,0-.62-.43A.61.61,0,0,0,765.12,126.87Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M776.85,125.65a.24.24,0,0,0,.3.21.29.29,0,0,0,.17-.35.25.25,0,0,0-.29-.21A.29.29,0,0,0,776.85,125.65Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.79,149.55a.24.24,0,0,1-.38,0,.35.35,0,0,1,0-.45.24.24,0,0,1,.38,0A.35.35,0,0,1,779.79,149.55Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M780.42,147.85a.51.51,0,0,1-.8-.07.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.08A.74.74,0,0,1,780.42,147.85Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M779.55,146.22a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,779.55,146.22Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M779.86,140.41a.5.5,0,0,0,.09.62.35.35,0,0,0,.54-.1.5.5,0,0,0-.09-.62A.35.35,0,0,0,779.86,140.41Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M781.27,140.48a.32.32,0,0,0,.05.4.23.23,0,0,0,.35-.07.33.33,0,0,0-.06-.4A.22.22,0,0,0,781.27,140.48Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M771.39,154.65a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,771.39,154.65Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M773.14,150.82a.43.43,0,0,0,.53.36.52.52,0,0,0,.31-.61.44.44,0,0,0-.53-.36A.52.52,0,0,0,773.14,150.82Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="Icon_Block_2" data-name="Icon Block 2">
                                <g>
                                    <g>
                                        <g>
                                            <polygon
                                                points="827.8 162.5 802.68 145.58 827.8 128.66 852.92 145.58 827.8 162.5"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="827.8 157.64 802.68 140.71 827.8 123.79 852.92 140.71 827.8 157.64"
                                                fill="#312a91"
                                            />
                                            <g opacity={0.9}>
                                                <polygon
                                                    points="827.8 127.57 808.41 114.5 827.8 101.44 847.2 114.5 827.8 127.57"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-13)"
                                                />
                                                <polygon
                                                    points="847.2 114.5 847.2 140.71 827.8 153.78 827.8 127.57 847.2 114.5"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-14)"
                                                />
                                                <polygon
                                                    points="808.41 114.5 808.41 140.71 827.8 153.78 827.8 127.57 808.41 114.5"
                                                    fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-15)"
                                                />
                                            </g>
                                            <polygon
                                                points="827.8 153.78 808.41 140.71 827.8 127.64 847.2 140.71 827.8 153.78"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-16)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="852.92 140.71 852.92 145.58 827.8 162.5 827.8 157.64 852.92 140.71"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-5)"
                                            />
                                            <polygon
                                                points="802.68 140.71 802.68 145.58 827.8 162.5 827.8 157.64 802.68 140.71"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="802.68 140.71 802.68 145.58 827.8 162.5 827.8 157.64 802.68 140.71"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-5)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="827.8 121.8 802.68 104.88 827.8 87.95 852.92 104.88 827.8 121.8"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="827.8 116.94 802.68 100.01 827.8 83.09 852.92 100.01 827.8 116.94"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="827.8 116.94 802.68 100.01 827.8 83.09 852.92 100.01 827.8 116.94"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-17)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="827.8 106.28 818.5 100.01 827.8 93.75 837.1 100.01 827.8 106.28"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="827.8 98 833.95 102.14 837.1 100.01 827.8 93.75 818.5 100.01 821.66 102.14 827.8 98"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="827.8 98 833.95 102.14 837.1 100.01 827.8 93.75 818.5 100.01 821.66 102.14 827.8 98"
                                                fill="#42e8e0"
                                            />
                                            <polygon
                                                points="852.92 100.01 852.92 104.88 827.8 121.8 827.8 116.94 852.92 100.01"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-6)"
                                            />
                                            <polygon
                                                points="802.68 100.01 802.68 104.88 827.8 121.8 827.8 116.94 802.68 100.01"
                                                fill="#312a91"
                                            />
                                            <polygon
                                                points="802.68 100.01 802.68 104.88 827.8 121.8 827.8 116.94 802.68 100.01"
                                                opacity={0.7}
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-6)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                            <polygon
                                                points="827.8 121.8 827.8 157.64 802.68 140.71 802.68 104.88 827.8 121.8"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <g>
                                                <polygon
                                                    points="808.41 108.74 808.41 140.71 827.8 153.78 847.2 140.71 847.2 108.74 827.8 121.8 808.41 108.74"
                                                    fill="#42e8e0"
                                                    opacity={0.3}
                                                />
                                                <polygon
                                                    points="827.8 121.8 827.8 153.78 808.41 140.71 808.41 108.74 827.8 121.8"
                                                    fill="#42e8e0"
                                                    opacity={0.3}
                                                />
                                            </g>
                                            <polygon
                                                points="802.68 104.88 802.68 140.71 827.8 157.64 852.92 140.71 852.92 104.88 827.8 121.8 802.68 104.88"
                                                fill="#ff5cf1"
                                                opacity={0.5}
                                            />
                                            <polygon
                                                points="803.27 100.01 828.1 83.29 827.8 83.09 802.68 100.01 827.8 116.94 828.1 116.74 803.27 100.01"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-18)"
                                                style={{ mixBlendMode: "lighten" }}
                                            />
                                        </g>
                                        <polygon
                                            points="802.68 104.88 802.68 140.71 803.03 140.94 803.03 105.11 802.68 104.88"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="852.92 104.88 852.92 140.71 852.58 140.94 852.58 105.11 852.92 104.88"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="827.8 121.8 827.8 121.8 827.21 121.41 827.21 157.24 827.8 157.64 827.8 157.64 827.8 157.64 827.8 157.64 827.8 157.64 828.4 157.24 828.4 121.41 827.8 121.8"
                                            fill="#42e8e0"
                                            opacity={0.5}
                                        />
                                    </g>
                                    <polygon
                                        points="837.1 100.01 837.1 41.32 818.55 41.32 818.5 100.01 827.8 106.28 837.1 100.01"
                                        opacity={0.7}
                                        fill="url(#linear-gradient-27)"
                                        style={{ mixBlendMode: "lighten" }}
                                    />
                                </g>
                            </g>
                            <g id="Block_2_Particles" data-name="Block 2 Particles">
                                <g>
                                    <g>
                                        <path
                                            d="M830.26,92.45a.69.69,0,1,1-1.36,0,.69.69,0,1,1,1.36,0Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={820.46}
                                            cy={85.13}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={823.41}
                                            cy={79.55}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={836.03}
                                            cy={77.72}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.1,77.06a.62.62,0,0,1-.57.67.63.63,0,0,1-.57-.67.62.62,0,0,1,.57-.66A.61.61,0,0,1,836.1,77.06Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M823,79.54a.28.28,0,1,1-.27-.32A.3.3,0,0,1,823,79.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={821.75}
                                            cy={94.13}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M825.63,89.56a.44.44,0,1,1-.43-.51A.47.47,0,0,1,825.63,89.56Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M824.31,88.55a.28.28,0,1,1-.28-.32A.3.3,0,0,1,824.31,88.55Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M828,84.51a.61.61,0,0,0,.74.51.74.74,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.73.73,0,0,0,828,84.51Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M834.47,76.78a.38.38,0,0,0,.46.32.45.45,0,0,0,.27-.53.38.38,0,0,0-.46-.32A.45.45,0,0,0,834.47,76.78Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M830.88,72.74a.38.38,0,0,0,.46.33.47.47,0,0,0,.28-.55.38.38,0,0,0-.46-.32A.45.45,0,0,0,830.88,72.74Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M819.81,74.37a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.34A.26.26,0,0,0,820,74,.29.29,0,0,0,819.81,74.37Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M820.1,72.76a.51.51,0,0,0,.62.43.61.61,0,0,0,.36-.72.5.5,0,0,0-.61-.43A.6.6,0,0,0,820.1,72.76Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M831.83,71.54a.26.26,0,0,0,.3.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.21A.3.3,0,0,0,831.83,71.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.77,95.44a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.25.25,0,0,1,.38,0A.35.35,0,0,1,834.77,95.44Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M835.4,93.74a.51.51,0,0,1-.8-.08.74.74,0,0,1,.06-.94.53.53,0,0,1,.81.08A.75.75,0,0,1,835.4,93.74Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.53,92.11a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,834.53,92.11Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M834.85,86.3a.47.47,0,0,0,.09.62.35.35,0,0,0,.53-.1.51.51,0,0,0-.09-.63A.35.35,0,0,0,834.85,86.3Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.25,86.37a.31.31,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,836.25,86.37Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M826.37,100.54a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,826.37,100.54Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M828.13,96.71a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,828.13,96.71Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M830.26,83.39a.69.69,0,1,1-.68-.8A.75.75,0,0,1,830.26,83.39Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={820.46}
                                            cy={76.06}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={823.41}
                                            cy={70.48}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={836.03}
                                            cy={68.65}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.1,68a.62.62,0,0,1-.57.66.67.67,0,1,1,.57-.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M823,70.48a.28.28,0,1,1-.27-.32A.3.3,0,0,1,823,70.48Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={821.75}
                                            cy={85.07}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M825.63,80.49a.43.43,0,1,1-.43-.5A.46.46,0,0,1,825.63,80.49Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M824.31,79.49a.28.28,0,1,1-.28-.33A.31.31,0,0,1,824.31,79.49Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M828,75.44a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.73.73,0,0,0,828,75.44Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M834.47,67.72a.38.38,0,0,0,.46.31.44.44,0,0,0,.27-.53.38.38,0,0,0-.46-.31A.44.44,0,0,0,834.47,67.72Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M830.88,63.68a.38.38,0,0,0,.46.32.45.45,0,0,0,.28-.54.37.37,0,0,0-.46-.32A.45.45,0,0,0,830.88,63.68Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M819.81,65.3a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.34.25.25,0,0,0-.3-.2A.28.28,0,0,0,819.81,65.3Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M820.1,63.69a.51.51,0,0,0,.62.43.6.6,0,0,0,.36-.72.49.49,0,0,0-.61-.42A.59.59,0,0,0,820.1,63.69Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M831.83,62.47a.24.24,0,0,0,.3.21.3.3,0,0,0,.18-.35.25.25,0,0,0-.3-.2A.29.29,0,0,0,831.83,62.47Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.77,86.37a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.24.24,0,0,1,.38,0A.33.33,0,0,1,834.77,86.37Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M835.4,84.67a.51.51,0,0,1-.8-.07.74.74,0,0,1,.06-.94.52.52,0,0,1,.81.08A.74.74,0,0,1,835.4,84.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.53,83.05a.49.49,0,0,0,.09.61.34.34,0,0,0,.52-.11.49.49,0,0,0-.09-.61A.34.34,0,0,0,834.53,83.05Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M834.85,77.23a.49.49,0,0,0,.09.63.35.35,0,0,0,.53-.11.5.5,0,0,0-.09-.62A.35.35,0,0,0,834.85,77.23Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.25,77.3a.31.31,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,836.25,77.3Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M826.37,91.47a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.62.62,0,0,0-.74-.51A.72.72,0,0,0,826.37,91.47Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M828.13,87.64a.42.42,0,0,0,.52.36.5.5,0,0,0,.31-.6.44.44,0,0,0-.52-.37A.52.52,0,0,0,828.13,87.64Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={829.08}
                                            cy={73.32}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={820.46}
                                            cy={67}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M824.34,62.42a.47.47,0,0,1-.43.5.51.51,0,0,1,0-1A.47.47,0,0,1,824.34,62.42Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={836.03}
                                            cy={59.59}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.1,58.93a.62.62,0,0,1-.57.67.63.63,0,0,1-.57-.67.62.62,0,0,1,.57-.66A.61.61,0,0,1,836.1,58.93Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M823,61.41a.28.28,0,1,1-.27-.32A.3.3,0,0,1,823,61.41Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={821.75}
                                            cy={76}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M825.63,71.42a.43.43,0,1,1-.43-.5A.47.47,0,0,1,825.63,71.42Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M824.31,70.42a.28.28,0,1,1-.28-.32A.3.3,0,0,1,824.31,70.42Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M828,66.38a.62.62,0,0,0,.74.51.74.74,0,0,0,.44-.87.62.62,0,0,0-.74-.51A.74.74,0,0,0,828,66.38Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M834.47,58.65a.38.38,0,0,0,.46.32.45.45,0,0,0,.27-.53.38.38,0,0,0-.46-.32A.45.45,0,0,0,834.47,58.65Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M830.88,54.61a.37.37,0,0,0,.46.32.45.45,0,0,0,.28-.54.38.38,0,0,0-.46-.32A.45.45,0,0,0,830.88,54.61Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M819.81,56.24a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.34.25.25,0,0,0-.3-.21A.29.29,0,0,0,819.81,56.24Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M820.1,54.63a.51.51,0,0,0,.62.43.61.61,0,0,0,.36-.72.5.5,0,0,0-.61-.43A.6.6,0,0,0,820.1,54.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M831.83,53.41a.24.24,0,0,0,.3.2.29.29,0,0,0,.18-.34.25.25,0,0,0-.3-.21A.3.3,0,0,0,831.83,53.41Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.77,77.31a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.25.25,0,0,1,.38,0A.35.35,0,0,1,834.77,77.31Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M835.4,75.61a.51.51,0,0,1-.8-.08.74.74,0,0,1,.06-.94.53.53,0,0,1,.81.08A.75.75,0,0,1,835.4,75.61Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.53,74a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,834.53,74Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M834.85,68.17a.47.47,0,0,0,.09.62.35.35,0,0,0,.53-.1.51.51,0,0,0-.09-.63A.35.35,0,0,0,834.85,68.17Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.25,68.24a.29.29,0,0,0,.06.39.21.21,0,0,0,.34-.06.32.32,0,0,0-.06-.4A.22.22,0,0,0,836.25,68.24Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M826.37,82.41a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,826.37,82.41Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M828.13,78.58a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,828.13,78.58Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={829.08}
                                            cy={54.23}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={820.46}
                                            cy={47.91}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M824.34,43.33a.47.47,0,0,1-.43.5.51.51,0,0,1,0-1A.47.47,0,0,1,824.34,43.33Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={836.03}
                                            cy={40.5}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.1,39.84a.62.62,0,0,1-.57.67.63.63,0,0,1-.57-.67.62.62,0,0,1,.57-.66A.61.61,0,0,1,836.1,39.84Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M823,42.32a.28.28,0,1,1-.27-.32A.3.3,0,0,1,823,42.32Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={821.75}
                                            cy={56.91}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M825.63,52.34a.44.44,0,1,1-.43-.51A.47.47,0,0,1,825.63,52.34Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M824.31,51.33A.28.28,0,1,1,824,51,.3.3,0,0,1,824.31,51.33Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M828,47.29a.61.61,0,0,0,.74.51.74.74,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.73.73,0,0,0,828,47.29Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M834.47,39.56a.38.38,0,0,0,.46.32.45.45,0,0,0,.27-.53.38.38,0,0,0-.46-.32A.45.45,0,0,0,834.47,39.56Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M830.88,35.52a.38.38,0,0,0,.46.33.47.47,0,0,0,.28-.55.38.38,0,0,0-.46-.32A.45.45,0,0,0,830.88,35.52Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M819.81,37.15a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.34.26.26,0,0,0-.3-.21A.29.29,0,0,0,819.81,37.15Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M820.1,35.54a.51.51,0,0,0,.62.43.61.61,0,0,0,.36-.72.5.5,0,0,0-.61-.43A.6.6,0,0,0,820.1,35.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M831.83,34.32a.26.26,0,0,0,.3.21.3.3,0,0,0,.18-.35A.25.25,0,0,0,832,34,.3.3,0,0,0,831.83,34.32Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.77,58.22a.24.24,0,0,1-.38,0,.36.36,0,0,1,0-.45.25.25,0,0,1,.38,0A.35.35,0,0,1,834.77,58.22Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M835.4,56.52a.51.51,0,0,1-.8-.08.74.74,0,0,1,.06-.94.53.53,0,0,1,.81.08A.75.75,0,0,1,835.4,56.52Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M834.53,54.89a.48.48,0,0,0,.09.61.34.34,0,0,0,.52-.1.48.48,0,0,0-.09-.61A.34.34,0,0,0,834.53,54.89Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M834.85,49.08a.47.47,0,0,0,.09.62.35.35,0,0,0,.53-.1.51.51,0,0,0-.09-.63A.35.35,0,0,0,834.85,49.08Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M836.25,49.15a.31.31,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,836.25,49.15Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M826.37,63.32a.6.6,0,0,0,.74.51.73.73,0,0,0,.44-.86.61.61,0,0,0-.74-.51A.72.72,0,0,0,826.37,63.32Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M828.13,59.49a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,828.13,59.49Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="Icon_Block_1" data-name="Icon Block 1">
                                <g>
                                    <g>
                                        <polygon
                                            points="728.55 153.42 703.43 136.49 728.55 119.57 753.67 136.49 728.55 153.42"
                                            fill="#312a91"
                                        />
                                        <polygon
                                            points="728.55 148.55 703.43 131.62 728.55 114.7 753.67 131.62 728.55 148.55"
                                            fill="#312a91"
                                        />
                                        <g opacity={0.9}>
                                            <polygon
                                                points="728.55 118.48 709.15 105.42 728.55 92.35 747.95 105.42 728.55 118.48"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-19)"
                                            />
                                            <polygon
                                                points="747.95 105.42 747.95 131.62 728.55 144.69 728.55 118.48 747.95 105.42"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-20)"
                                            />
                                            <polygon
                                                points="709.15 105.42 709.15 131.62 728.55 144.69 728.55 118.48 709.15 105.42"
                                                fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-21)"
                                            />
                                        </g>
                                        <polygon
                                            points="728.55 144.69 709.15 131.62 728.55 118.56 747.95 131.62 728.55 144.69"
                                            opacity={0.7}
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-22)"
                                            style={{ mixBlendMode: "lighten" }}
                                        />
                                        <polygon
                                            points="753.67 131.62 753.67 136.49 728.55 153.42 728.55 148.55 753.67 131.62"
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-7)"
                                        />
                                        <polygon
                                            points="703.43 131.62 703.43 136.49 728.55 153.42 728.55 148.55 703.43 131.62"
                                            fill="#312a91"
                                        />
                                        <polygon
                                            points="703.43 131.62 703.43 136.49 728.55 153.42 728.55 148.55 703.43 131.62"
                                            opacity={0.7}
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-7)"
                                            style={{ mixBlendMode: "lighten" }}
                                        />
                                        <polygon
                                            points="728.55 112.72 703.43 95.79 728.55 78.87 753.67 95.79 728.55 112.72"
                                            fill="#312a91"
                                        />
                                        <polygon
                                            points="728.55 107.85 703.43 90.92 728.55 74 753.67 90.92 728.55 107.85"
                                            fill="#312a91"
                                        />
                                        <polygon
                                            points="728.55 107.85 703.43 90.92 728.55 74 753.67 90.92 728.55 107.85"
                                            opacity={0.7}
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-23)"
                                            style={{ mixBlendMode: "lighten" }}
                                        />
                                        <polygon
                                            points="728.55 97.19 719.25 90.92 728.55 84.66 737.85 90.92 728.55 97.19"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <polygon
                                            points="728.55 88.91 734.69 93.05 737.85 90.92 728.55 84.66 719.25 90.92 722.4 93.05 728.55 88.91"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <polygon
                                            points="728.55 88.91 734.69 93.05 737.85 90.92 728.55 84.66 719.25 90.92 722.4 93.05 728.55 88.91"
                                            fill="#42e8e0"
                                        />
                                        <polygon
                                            points="753.67 90.92 753.67 95.79 728.55 112.72 728.55 107.85 753.67 90.92"
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_59-8)"
                                        />
                                        <polygon
                                            points="703.43 90.92 703.43 95.79 728.55 112.72 728.55 107.85 703.43 90.92"
                                            fill="#312a91"
                                        />
                                        <polygon
                                            points="703.43 90.92 703.43 95.79 728.55 112.72 728.55 107.85 703.43 90.92"
                                            opacity={0.7}
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_122-8)"
                                            style={{ mixBlendMode: "lighten" }}
                                        />
                                        <polygon
                                            points="728.55 112.72 728.55 148.55 703.43 131.62 703.43 95.79 728.55 112.72"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <g>
                                            <polygon
                                                points="709.15 99.65 709.15 131.62 728.55 144.69 747.95 131.62 747.95 99.65 728.55 112.72 709.15 99.65"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                            <polygon
                                                points="728.55 112.72 728.55 144.69 709.15 131.62 709.15 99.65 728.55 112.72"
                                                fill="#42e8e0"
                                                opacity={0.3}
                                            />
                                        </g>
                                        <polygon
                                            points="703.43 95.79 703.43 131.62 728.55 148.55 753.67 131.62 753.67 95.79 728.55 112.72 703.43 95.79"
                                            fill="#ff5cf1"
                                            opacity={0.5}
                                        />
                                        <polygon
                                            points="704.02 90.92 728.85 74.2 728.55 74 703.43 90.92 728.55 107.85 728.85 107.65 704.02 90.92"
                                            fill="url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_87-24)"
                                            style={{ mixBlendMode: "lighten" }}
                                        />
                                    </g>
                                    <polygon
                                        points="703.43 95.79 703.43 131.62 703.77 131.86 703.77 96.02 703.43 95.79"
                                        fill="#42e8e0"
                                        opacity={0.5}
                                    />
                                    <polygon
                                        points="753.67 95.79 753.67 131.62 753.33 131.86 753.33 96.02 753.67 95.79"
                                        fill="#42e8e0"
                                        opacity={0.5}
                                    />
                                    <polygon
                                        points="728.55 112.72 728.55 112.72 727.96 112.32 727.96 148.15 728.55 148.55 728.55 148.55 728.55 148.55 728.55 148.55 728.55 148.55 729.14 148.15 729.14 112.32 728.55 112.72"
                                        fill="#42e8e0"
                                        opacity={0.5}
                                    />
                                </g>
                                <polygon
                                    points="737.85 90.92 737.85 32.24 719.3 32.24 719.25 90.92 728.55 97.19 737.85 90.92"
                                    opacity={0.7}
                                    fill="url(#linear-gradient-28)"
                                    style={{ mixBlendMode: "lighten" }}
                                />
                            </g>
                            <g id="Block_1_Particles" data-name="Block 1 Particles">
                                <g>
                                    <g>
                                        <path
                                            d="M731,83.37a.69.69,0,1,1-1.37,0,.69.69,0,1,1,1.37,0Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={721.2}
                                            cy={76.04}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={724.15}
                                            cy={70.46}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={736.78}
                                            cy={68.63}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.85,68a.63.63,0,0,1-.57.67.67.67,0,1,1,.57-.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M723.76,70.46a.31.31,0,0,1-.28.32.3.3,0,0,1-.27-.32.31.31,0,0,1,.27-.33A.31.31,0,0,1,723.76,70.46Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={722.5}
                                            cy={85.05}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M726.38,80.47a.48.48,0,0,1-.43.5.47.47,0,0,1-.43-.5A.46.46,0,0,1,726,80,.47.47,0,0,1,726.38,80.47Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M725.05,79.46a.28.28,0,1,1-.27-.32A.3.3,0,0,1,725.05,79.46Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M728.77,75.42a.6.6,0,0,0,.74.51.72.72,0,0,0,.43-.86.6.6,0,0,0-.73-.51A.71.71,0,0,0,728.77,75.42Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M735.22,67.7a.37.37,0,0,0,.45.31.44.44,0,0,0,.28-.53.39.39,0,0,0-.46-.32A.46.46,0,0,0,735.22,67.7Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M731.62,63.66a.4.4,0,0,0,.47.32.47.47,0,0,0,.28-.55.39.39,0,0,0-.47-.32A.47.47,0,0,0,731.62,63.66Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.55,65.28a.25.25,0,0,0,.3.2.29.29,0,0,0,.17-.34.23.23,0,0,0-.29-.2A.29.29,0,0,0,720.55,65.28Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.85,63.67a.5.5,0,0,0,.61.43.61.61,0,0,0,.37-.72.51.51,0,0,0-.62-.43A.61.61,0,0,0,720.85,63.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M732.58,62.45a.24.24,0,0,0,.29.21.29.29,0,0,0,.18-.35.25.25,0,0,0-.3-.21A.29.29,0,0,0,732.58,62.45Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.52,86.35a.25.25,0,0,1-.39,0,.35.35,0,0,1,0-.44.24.24,0,0,1,.38,0A.36.36,0,0,1,735.52,86.35Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.15,84.65a.52.52,0,0,1-.81-.08.74.74,0,0,1,.07-.93.51.51,0,0,1,.8.07A.74.74,0,0,1,736.15,84.65Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.27,83a.48.48,0,0,0,.09.61.35.35,0,0,0,.53-.1.48.48,0,0,0-.09-.61A.35.35,0,0,0,735.27,83Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M735.59,77.21a.5.5,0,0,0,.09.62.34.34,0,0,0,.53-.1.47.47,0,0,0-.09-.62A.34.34,0,0,0,735.59,77.21Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M737,77.28a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,737,77.28Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M727.12,91.45a.6.6,0,0,0,.73.51.71.71,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.72.72,0,0,0,727.12,91.45Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M728.87,87.62a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,728.87,87.62Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M731,74.3a.69.69,0,1,1-.68-.8A.75.75,0,0,1,731,74.3Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={721.2}
                                            cy={66.97}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <ellipse
                                            cx={724.15}
                                            cy={61.4}
                                            rx={0.43}
                                            ry={0.5}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={736.78}
                                            cy={59.57}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.85,58.91a.62.62,0,0,1-.57.66.61.61,0,0,1-.57-.66.62.62,0,0,1,.57-.67A.63.63,0,0,1,736.85,58.91Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M723.76,61.39a.3.3,0,0,1-.28.32.32.32,0,0,1,0-.64A.3.3,0,0,1,723.76,61.39Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={722.5}
                                            cy={75.98}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M726.38,71.4a.47.47,0,0,1-.43.5.51.51,0,0,1,0-1A.47.47,0,0,1,726.38,71.4Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M725.05,70.4a.28.28,0,1,1-.27-.32A.3.3,0,0,1,725.05,70.4Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M728.77,66.35a.6.6,0,0,0,.74.51.71.71,0,0,0,.43-.86.6.6,0,0,0-.73-.51A.71.71,0,0,0,728.77,66.35Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M735.22,58.63a.37.37,0,0,0,.45.32.45.45,0,0,0,.28-.54.38.38,0,0,0-.46-.31A.45.45,0,0,0,735.22,58.63Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M731.62,54.59a.39.39,0,0,0,.47.32.46.46,0,0,0,.28-.54.39.39,0,0,0-.47-.32A.46.46,0,0,0,731.62,54.59Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.55,56.21a.25.25,0,0,0,.3.21.3.3,0,0,0,.17-.35.23.23,0,0,0-.29-.2A.29.29,0,0,0,720.55,56.21Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.85,54.61a.5.5,0,0,0,.61.42.61.61,0,0,0,.37-.72.51.51,0,0,0-.62-.42A.6.6,0,0,0,720.85,54.61Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M732.58,53.39a.23.23,0,0,0,.29.2.29.29,0,0,0,.18-.35.24.24,0,0,0-.3-.2A.28.28,0,0,0,732.58,53.39Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.52,77.29a.26.26,0,0,1-.39,0,.36.36,0,0,1,0-.45.24.24,0,0,1,.38,0A.36.36,0,0,1,735.52,77.29Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.15,75.59a.53.53,0,0,1-.81-.08.75.75,0,0,1,.07-.94.51.51,0,0,1,.8.08A.74.74,0,0,1,736.15,75.59Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.27,74a.48.48,0,0,0,.09.61.35.35,0,0,0,.53-.11.49.49,0,0,0-.09-.61A.35.35,0,0,0,735.27,74Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M735.59,68.15a.5.5,0,0,0,.09.62.35.35,0,0,0,.53-.11.47.47,0,0,0-.09-.62A.35.35,0,0,0,735.59,68.15Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M737,68.21a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.31.31,0,0,0-.06-.39A.21.21,0,0,0,737,68.21Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M727.12,82.39a.61.61,0,0,0,.73.51.72.72,0,0,0,.44-.86.61.61,0,0,0-.74-.52A.73.73,0,0,0,727.12,82.39Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M728.87,78.55a.44.44,0,0,0,.52.37.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.5.5,0,0,0,728.87,78.55Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={729.83}
                                            cy={64.24}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={721.2}
                                            cy={57.91}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M725.08,53.33a.43.43,0,1,1-.43-.5A.46.46,0,0,1,725.08,53.33Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={736.78}
                                            cy={50.5}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.85,49.84a.63.63,0,0,1-.57.67.67.67,0,1,1,.57-.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M723.76,52.33a.31.31,0,0,1-.28.32.3.3,0,0,1-.27-.32.31.31,0,0,1,.27-.33A.31.31,0,0,1,723.76,52.33Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={722.5}
                                            cy={66.91}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M726.38,62.34a.48.48,0,0,1-.43.5.51.51,0,0,1,0-1A.48.48,0,0,1,726.38,62.34Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M725.05,61.33a.28.28,0,1,1-.27-.32A.3.3,0,0,1,725.05,61.33Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M728.77,57.29a.61.61,0,0,0,.74.51.72.72,0,0,0,.43-.86.6.6,0,0,0-.73-.51A.71.71,0,0,0,728.77,57.29Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M735.22,49.57a.37.37,0,0,0,.45.31.44.44,0,0,0,.28-.53.38.38,0,0,0-.46-.32A.46.46,0,0,0,735.22,49.57Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M731.62,45.52a.4.4,0,0,0,.47.33.47.47,0,0,0,.28-.55.39.39,0,0,0-.47-.32A.47.47,0,0,0,731.62,45.52Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.55,47.15a.25.25,0,0,0,.3.2A.29.29,0,0,0,721,47a.25.25,0,0,0-.29-.21A.3.3,0,0,0,720.55,47.15Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.85,45.54a.5.5,0,0,0,.61.43.61.61,0,0,0,.37-.72.51.51,0,0,0-.62-.43A.6.6,0,0,0,720.85,45.54Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M732.58,44.32a.24.24,0,0,0,.29.21.29.29,0,0,0,.18-.35.25.25,0,0,0-.3-.21A.29.29,0,0,0,732.58,44.32Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.52,68.22a.25.25,0,0,1-.39,0,.35.35,0,0,1,0-.44.24.24,0,0,1,.38,0A.36.36,0,0,1,735.52,68.22Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.15,66.52a.52.52,0,0,1-.81-.08.74.74,0,0,1,.07-.93.51.51,0,0,1,.8.07A.74.74,0,0,1,736.15,66.52Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.27,64.89a.48.48,0,0,0,.09.61.35.35,0,0,0,.53-.1.48.48,0,0,0-.09-.61A.35.35,0,0,0,735.27,64.89Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M735.59,59.08a.5.5,0,0,0,.09.62.34.34,0,0,0,.53-.1.47.47,0,0,0-.09-.62A.34.34,0,0,0,735.59,59.08Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M737,59.15a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,737,59.15Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M727.12,73.32a.6.6,0,0,0,.73.51.71.71,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.72.72,0,0,0,727.12,73.32Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M728.87,69.49a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,728.87,69.49Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <ellipse
                                            cx={729.83}
                                            cy={45.15}
                                            rx={0.68}
                                            ry={0.8}
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <ellipse
                                            cx={721.2}
                                            cy={38.82}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M725.08,34.24a.43.43,0,1,1-.43-.5A.46.46,0,0,1,725.08,34.24Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={736.78}
                                            cy={31.41}
                                            rx={0.27}
                                            ry={0.32}
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.85,30.75a.63.63,0,0,1-.57.67.67.67,0,1,1,.57-.67Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M723.76,33.24a.31.31,0,0,1-.28.32.3.3,0,0,1-.27-.32.31.31,0,0,1,.27-.33A.31.31,0,0,1,723.76,33.24Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <ellipse
                                            cx={722.5}
                                            cy={47.83}
                                            rx={0.42}
                                            ry={0.49}
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M726.38,43.25a.48.48,0,0,1-.43.5.47.47,0,0,1-.43-.5.46.46,0,0,1,.43-.5A.47.47,0,0,1,726.38,43.25Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M725.05,42.24a.28.28,0,1,1-.27-.32A.3.3,0,0,1,725.05,42.24Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M728.77,38.2a.6.6,0,0,0,.74.51.72.72,0,0,0,.43-.86.6.6,0,0,0-.73-.51A.71.71,0,0,0,728.77,38.2Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.9}
                                        />
                                        <path
                                            d="M735.22,30.48a.37.37,0,0,0,.45.31.44.44,0,0,0,.28-.53.39.39,0,0,0-.46-.32A.46.46,0,0,0,735.22,30.48Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M731.62,26.44a.4.4,0,0,0,.47.32.47.47,0,0,0,.28-.55.39.39,0,0,0-.47-.32A.47.47,0,0,0,731.62,26.44Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.55,28.06a.25.25,0,0,0,.3.2.29.29,0,0,0,.17-.34.23.23,0,0,0-.29-.2A.29.29,0,0,0,720.55,28.06Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M720.85,26.45a.5.5,0,0,0,.61.43.61.61,0,0,0,.37-.72.51.51,0,0,0-.62-.43A.61.61,0,0,0,720.85,26.45Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M732.58,25.23a.24.24,0,0,0,.29.21.29.29,0,0,0,.18-.35.25.25,0,0,0-.3-.21A.29.29,0,0,0,732.58,25.23Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.52,49.13a.25.25,0,0,1-.39,0,.35.35,0,0,1,0-.44.24.24,0,0,1,.38,0A.36.36,0,0,1,735.52,49.13Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M736.15,47.43a.52.52,0,0,1-.81-.08.74.74,0,0,1,.07-.93.51.51,0,0,1,.8.07A.74.74,0,0,1,736.15,47.43Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M735.27,45.8a.48.48,0,0,0,.09.61.35.35,0,0,0,.53-.1.48.48,0,0,0-.09-.61A.35.35,0,0,0,735.27,45.8Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.3}
                                        />
                                        <path
                                            d="M735.59,40a.5.5,0,0,0,.09.62.34.34,0,0,0,.53-.1.47.47,0,0,0-.09-.62A.34.34,0,0,0,735.59,40Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <path
                                            d="M737,40.06a.32.32,0,0,0,.06.4.22.22,0,0,0,.34-.07.32.32,0,0,0-.06-.4A.22.22,0,0,0,737,40.06Z"
                                            transform="translate(-0.5 -1)"
                                            fill="#42e8e0"
                                            opacity={0.2}
                                        />
                                        <g opacity={0.9}>
                                            <path
                                                d="M727.12,54.23a.6.6,0,0,0,.73.51.71.71,0,0,0,.44-.86.6.6,0,0,0-.74-.51A.72.72,0,0,0,727.12,54.23Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                            <path
                                                d="M728.87,50.4a.42.42,0,0,0,.52.36.51.51,0,0,0,.31-.61.42.42,0,0,0-.52-.36A.51.51,0,0,0,728.87,50.4Z"
                                                transform="translate(-0.5 -1)"
                                                fill="#42e8e0"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="StepOne" className={stepOne[this.props.tutorialStep]}>
                            <g id="Ripple_Path_1" data-name="Ripple Path 1">
                                <path
                                    id="Ripple_Path_In"
                                    data-name="Ripple Path In"
                                    d="M325.06,234.66a12.56,12.56,0,0,0-11.46,0c-3.16,1.81-3.16,4.77,0,6.63a12.59,12.59,0,0,0,11.46.06C328.17,239.48,328.17,236.52,325.06,234.66Zm-2.7,5.08a7,7,0,0,1-6.22,0c-1.71-1-1.71-2.59,0-3.58a7,7,0,0,1,6.22,0C324.12,237.15,324.07,238.75,322.36,239.74Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-29)"
                                />
                                <path
                                    id="Ripple_Path_Out"
                                    data-name="Ripple Path Out"
                                    d="M319.3,244.92a15.84,15.84,0,0,1-8.08-2c-2.28-1.35-3.53-3.16-3.53-5.08s1.3-3.73,3.58-5.08c4.46-2.59,11.77-2.54,16.22,0,2.28,1.35,3.53,3.16,3.53,5.08s-1.3,3.74-3.58,5.08h0A15.67,15.67,0,0,1,319.3,244.92Zm.05-12.7a14.63,14.63,0,0,0-7.46,1.76c-1.87,1.09-2.95,2.49-2.95,4s1,2.9,2.9,4a16.58,16.58,0,0,0,15,.05h0c1.87-1.09,2.95-2.49,2.95-4s-1-2.91-2.9-4A14.51,14.51,0,0,0,319.35,232.22Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-30)"
                                />
                            </g>
                            <g id="Path_Circle_2_2" data-name="Path Circle 2 2">
                                <g>
                                    <path
                                        d="M86.8,163a11.55,11.55,0,0,1-5.6-1.86A4.56,4.56,0,0,1,78.87,157a4.61,4.61,0,0,1,3-3.68,12.46,12.46,0,0,1,11.45,1,4.22,4.22,0,0,1-.67,7.83h0A12,12,0,0,1,86.8,163Zm.73-8.6a9.74,9.74,0,0,0-4.82.72,3,3,0,0,0-1.87,2,2.87,2.87,0,0,0,1.5,2.33,10.77,10.77,0,0,0,9.49.83h0a3,3,0,0,0,1.87-2A2.87,2.87,0,0,0,92.19,156,9.71,9.71,0,0,0,87.53,154.44Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-31)"
                                    />
                                    <path
                                        d="M73.64,171.55a6.58,6.58,0,0,1-3.22-1.09A3,3,0,0,1,69,167.87a3,3,0,0,1,1.87-2.34,7.14,7.14,0,0,1,6.53.57,3.06,3.06,0,0,1,1.45,2.6A3,3,0,0,1,77,171,6.39,6.39,0,0,1,73.64,171.55ZM74,167a4.64,4.64,0,0,0-2.28.36,1.34,1.34,0,0,0-.73.67,1.2,1.2,0,0,0,.57.78,5,5,0,0,0,4.51.37,1.31,1.31,0,0,0,.73-.68,1.2,1.2,0,0,0-.57-.78A4.4,4.4,0,0,0,74,167Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-32)"
                                    />
                                </g>
                            </g>
                            <ellipse
                                id="Path_Circle_1"
                                data-name="Path Circle 1"
                                cx={165.72}
                                cy={218.15}
                                rx={101.19}
                                ry={61.4}
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-33)"
                            />
                            <path
                                id="Path_Line_2"
                                data-name="Path Line 2"
                                d="M328.7,240.49,357,258.35a6.6,6.6,0,0,0,6.34.41l23.56-10.94"
                                transform="translate(-0.5 -1)"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-34)"
                            />
                            <path
                                id="Path_Line_1"
                                data-name="Path Line 1"
                                d="M258.13,246.12l26.32,11.06a5.76,5.76,0,0,0,5.36-.4l21.33-13.9"
                                transform="translate(-0.5 -1)"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-35)"
                            />
                            <path
                                id="Element_Circle_S1_3"
                                data-name="Element Circle S1 3"
                                d="M213.6,183a6.92,6.92,0,0,0-3.11,5.39c0,2,1.35,2.85,3.11,1.81a6.85,6.85,0,0,0,3.11-5.44C216.76,182.91,215.42,182,213.6,183Z"
                                transform="translate(-0.5 -1)"
                                opacity={0.52}
                                fill="url(#linear-gradient-36)"
                                style={{ isolation: "isolate" }}
                            />
                            <path
                                id="Element_Circle_S1_2"
                                data-name="Element Circle S1 2"
                                d="M234.8,238a9.5,9.5,0,0,0-4.3,7.46c0,2.75,1.87,3.94,4.3,2.49a9.5,9.5,0,0,0,4.3-7.47C239.16,237.86,237.29,236.56,234.8,238Z"
                                transform="translate(-0.5 -1)"
                                opacity={0.41}
                                fill="url(#linear-gradient-37)"
                                style={{ isolation: "isolate" }}
                            />
                            <path
                                id="Element_Circle_S1_1"
                                data-name="Element Circle S1 1"
                                d="M138.44,204.22a9.47,9.47,0,0,0-4.26,7.36c0,2.7,1.87,3.89,4.26,2.49a9.42,9.42,0,0,0,4.25-7.36C142.69,204.06,140.87,202.82,138.44,204.22Z"
                                transform="translate(-0.5 -1)"
                                opacity={0.41}
                                fill="url(#linear-gradient-38)"
                                style={{ isolation: "isolate" }}
                            />
                            <g id="Element_Circle_S2_2" data-name="Element Circle S2 2">
                                <path
                                    d="M142,132.24c-4.25,2.44-7.57,8.35-7.57,13.12,0,2.28.78,4.1,2.23,4.93s3.37,2,3.37,2,9.49-11.2,9.43-15.71a4.93,4.93,0,0,1,1.14-2.86s-2.9-1.71-3.37-2C145.94,131,144.07,131.05,142,132.24Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-39)"
                                />
                                <path
                                    d="M145.32,134.21a16.61,16.61,0,0,0-7.52,13c0,4.77,3.27,6.84,7.52,4.35a16.49,16.49,0,0,0,7.46-13C152.83,134,149.62,131.72,145.32,134.21Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-40)"
                                />
                            </g>
                            <g id="Element_Crcle_S2_1" data-name="Element Crcle S2 1">
                                <path
                                    d="M127.85,122.1a10.32,10.32,0,0,0-4.66,8,3.15,3.15,0,0,0,1.39,3c.78.47,2.08,1.2,2.08,1.2s5.8-6.85,5.75-9.65a3.09,3.09,0,0,1,.73-1.76s-1.76-1-2.08-1.19A3.33,3.33,0,0,0,127.85,122.1Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-41)"
                                />
                                <path
                                    d="M129.87,123.29a10.19,10.19,0,0,0-4.61,8c0,2.9,2,4.2,4.61,2.69a10.25,10.25,0,0,0,4.62-8C134.49,123.14,132.52,121.79,129.87,123.29Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-42)"
                                />
                            </g>
                            <g id="Element_Box_S1_1" data-name="Element Box S1 1">
                                <path
                                    d="M181,250.47c-.06-1.09,2.79-2.49,2.79-2.49s-3.36-2-3.83-2.23a1.36,1.36,0,0,0-1.25.06c-2.74,1.4-5.54,2.9-8.29,4.56-1,.57-2,1.24-2.95,1.87-.42.26-.89.57-1.3.88a4.18,4.18,0,0,0-1.4,1.61,7.7,7.7,0,0,0-.93,3.21c-.06.73-.06,1.5-.11,2.23v2.33a2.68,2.68,0,0,0,.05.63c.06.72.06,1.5.16,2.17a2.14,2.14,0,0,0,1,1.72l3.78,2.17s2.7-5,5.24-6.53c1.14-.67,2.33-1.45,3.47-2.13.41-.26.83-.52,1.24-.83a5.19,5.19,0,0,0,1.51-2,8.36,8.36,0,0,0,.78-3C180.94,253.27,181.05,251.82,181,250.47Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-43)"
                                />
                                <path
                                    d="M184.57,249.49a1.94,1.94,0,0,0-.88-1.61,1.34,1.34,0,0,0-1.24.05c-2.75,1.4-5.55,2.91-8.3,4.57-1,.57-2,1.24-3,1.86-.42.26-.88.57-1.3.88a4.33,4.33,0,0,0-1.4,1.61,7.79,7.79,0,0,0-.93,3.22c0,.72,0,1.5-.1,2.23v2.33a2.6,2.6,0,0,0,.05.62c0,.73,0,1.51.15,2.18a2.13,2.13,0,0,0,1,1.71,1.2,1.2,0,0,0,1.3-.1c2.59-1.3,5.13-2.75,7.72-4.25,1.14-.68,2.33-1.46,3.47-2.13.42-.26.83-.52,1.25-.83a5.25,5.25,0,0,0,1.5-2,8,8,0,0,0,.78-3c.05-1.45.15-2.9.1-4.25C184.73,251.56,184.68,250.53,184.57,249.49Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-44)"
                                />
                            </g>
                            <g id="Icon_File" data-name="Icon File">
                                <path
                                    d="M145.1,218l-.26-.13a1.93,1.93,0,0,0-1.68.17,2.3,2.3,0,0,0-.4.22c-3.57,2.08-7.14,4.15-10.75,6.22-1.06-.62-1.94-1.15-2.12-1.23a1.36,1.36,0,0,0-.62-.22,2.51,2.51,0,0,0-1.59.44c-1.63,1-3.3,1.89-4.93,2.86a6.41,6.41,0,0,0-2.82,3.71,6.08,6.08,0,0,0-.27,1.23v20.51a4.84,4.84,0,0,0,.09.49,1.79,1.79,0,0,0,.84,1.23c.44.22,6.26,3.62,6.26,3.62s9.34-11.69,16.09-15.61a6.76,6.76,0,0,0,2.95-4.64,3.3,3.3,0,0,0,.05-.7c0-5.43,5.55-14.56,5.55-14.56S145.63,218.38,145.1,218Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-45)"
                                />
                                <g>
                                    <path
                                        d="M126,255.56V235.05a4.52,4.52,0,0,1,.26-1.23,6.46,6.46,0,0,1,2.83-3.71c1.63-1,3.3-1.94,4.93-2.86a3,3,0,0,1,1.59-.45,1.64,1.64,0,0,1,1.41,1.5c.05.22.05.45.09.67,0,0,0-.05.09-.05q6-3.43,11.86-6.88c.13-.09.26-.13.39-.22a2.13,2.13,0,0,1,1.68-.18,2.06,2.06,0,0,1,1.06,2.12V240a3.49,3.49,0,0,1,0,.7,6.79,6.79,0,0,1-3,4.63c-6.75,3.93-13.49,7.81-20.24,11.73a3.29,3.29,0,0,1-.57.27,1.65,1.65,0,0,1-2.38-1.24A2.64,2.64,0,0,0,126,255.56Zm13.14-6.75c3.35-1.94,6.7-3.88,10.09-5.86.09,0,.18-.09.22-.18a2.23,2.23,0,0,0,.8-1.63V224.6c-.09-.53-.53-.66-1-.35L129.1,235.93a2.31,2.31,0,0,0-1.06,1.81V254.1c0,.71.44.93,1.06.62C132.4,252.74,135.75,250.8,139.15,248.81Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-46)"
                                    />
                                    <path
                                        d="M139.15,248.81c-3.35,1.94-6.7,3.88-10.1,5.87-.57.35-1.06.09-1.06-.62V237.7a2.18,2.18,0,0,1,1.06-1.81L149.2,224.2c.53-.31.93-.17,1,.36v16.53a2.22,2.22,0,0,1-.79,1.64.84.84,0,0,0-.22.17C145.85,244.93,142.5,246.87,139.15,248.81Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#fff"
                                    />
                                    <polygon
                                        points="129.48 236.74 139.66 230.79 147.78 226.07 147.78 240.18 137.63 246.14 129.48 250.85 129.48 236.74"
                                        opacity={0.33}
                                        fill="url(#linear-gradient-47)"
                                        style={{ isolation: "isolate" }}
                                    />
                                </g>
                            </g>
                            <g id="Icon_Video" data-name="Icon Video">
                                <path
                                    d="M231.64,208.31c0-1.76,4.62-4.14,4.62-4.14s-5.55-3.22-6.33-3.69a2,2,0,0,0-2,.11c-4.56,2.28-9.12,4.82-13.74,7.57-1.66,1-3.26,2-4.92,3.06-.73.47-1.45.93-2.13,1.4a7.39,7.39,0,0,0-2.33,2.7,11.85,11.85,0,0,0-1.56,5.34c0,1.24-.1,2.49-.2,3.73a.48.48,0,0,1-.05.26v3.58c0,.31.05.67.05,1,.1,1.2.1,2.44.26,3.58a3.44,3.44,0,0,0,1.66,2.8c.62.31,6.22,3.58,6.22,3.58s4.4-8.19,8.65-10.74c1.92-1.14,3.84-2.33,5.76-3.52.67-.42,1.35-.88,2.07-1.35a8.3,8.3,0,0,0,2.49-3.27,13.45,13.45,0,0,0,1.3-4.87A66,66,0,0,0,231.64,208.31Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-48)"
                                />
                                <g>
                                    <path
                                        d="M209.2,231.75v-3.57c0-.11.05-.16.05-.26.05-1.25.1-2.49.21-3.74a12.78,12.78,0,0,1,1.55-5.34,7,7,0,0,1,2.33-2.69c.73-.47,1.45-1,2.13-1.41,1.66-1,3.26-2.07,4.92-3.05,4.57-2.75,9.18-5.29,13.74-7.58a2,2,0,0,1,2-.1,3.11,3.11,0,0,1,1.4,2.59c.16,1.71.26,3.43.31,5.19.11,2.28-.1,4.67-.2,7.05a13.77,13.77,0,0,1-1.3,4.88,8.34,8.34,0,0,1-2.49,3.26c-.67.47-1.35.94-2.07,1.35-1.92,1.19-3.84,2.39-5.76,3.53-4.25,2.54-8.5,4.87-12.7,7a2.36,2.36,0,0,1-2.17.15,3.31,3.31,0,0,1-1.66-2.8c-.16-1.14-.21-2.38-.26-3.57A6.36,6.36,0,0,0,209.2,231.75ZM220,229.68c3-3.73,6-7.42,9-11.15l-9-.78Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-49)"
                                    />
                                    <path
                                        d="M220,229.68V217.75l9,.78C225.94,222.26,223,226,220,229.68Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#fff"
                                    />
                                </g>
                            </g>
                            <g id="Icon_Image" data-name="Icon Image">
                                <path
                                    d="M192.14,155a2.59,2.59,0,0,0-2.69.31c-.06,0-.16,0-.16.1-1.81-1-3.89-2.28-4.15-2.39a3.27,3.27,0,0,0-3.26.21l-11,6.38a11.15,11.15,0,0,0-4.35,6.07c-.26,1-.52,2-.78,2.9a1.11,1.11,0,0,1-.57.83,22.91,22.91,0,0,0-2.43,1.45,7.71,7.71,0,0,0-2.86,5.81v18.46a3.64,3.64,0,0,0,.06.83,2.56,2.56,0,0,0,1.14,2c.67.42,6.79,3.94,6.79,3.94s4.35-9.23,8.6-11.66,8.66-5,13-7.58c.2-.15.46-.25.72-.46a9.14,9.14,0,0,0,3.06-6.38V170.3c0-4.3,5.86-11.35,5.86-11.35S192.81,155.37,192.14,155Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-50)"
                                />
                                <g>
                                    <path
                                        d="M200,161.44c0-2.54-1.61-3.48-3.78-2.23-.68.41-1.35.78-2,1.14-.26.15-.42.15-.47-.11-.26-.72-.52-1.34-.78-2.07-.67-1.66-2.49-2.13-4.35-1l-11,6.38a11.17,11.17,0,0,0-4.36,6.07c-.26,1-.52,2-.78,2.9a1.11,1.11,0,0,1-.57.83,22.91,22.91,0,0,0-2.43,1.45,7.72,7.72,0,0,0-2.85,5.81V199a4.36,4.36,0,0,0,.05.83c.21,1.66,1.6,3,3.78,1.66,4.3-2.59,8.56-5,12.86-7.47l13-7.57c.21-.15.47-.26.73-.46a9.13,9.13,0,0,0,3.05-6.38v-5.45C200,170.05,200,165.74,200,161.44Zm-7.57,17.21a18.48,18.48,0,0,1-5.34,9.29,16.2,16.2,0,0,1-7.83,4.51c-2.69.52-4.45-.57-5.28-3.32a14.56,14.56,0,0,1,.26-8.77,22.05,22.05,0,0,1,7.62-11c4.35-3.27,9.59-3.47,10.93,2.38.16.68.16,1.46.26,2.18A21.84,21.84,0,0,1,192.45,178.65Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-51)"
                                    />
                                    <path
                                        d="M181.88,169.27a21.71,21.71,0,0,0-7.62,11,14.56,14.56,0,0,0-.26,8.77c.77,2.74,2.59,3.83,5.28,3.32a15.39,15.39,0,0,0,7.83-4.52,18.62,18.62,0,0,0,5.34-9.28,21.84,21.84,0,0,0,.62-4.77c-.1-.78-.15-1.5-.26-2.18C191.52,165.79,186.23,166,181.88,169.27Zm1.4,19.29c-4.2,2.44-7.62.46-7.62-4.41s3.47-10.84,7.67-13.27,7.62-.47,7.62,4.45S187.48,186.07,183.28,188.56Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M183.33,170.82a16.92,16.92,0,0,0-7.67,13.28c0,4.87,3.42,6.84,7.62,4.41A16.83,16.83,0,0,0,191,175.28C191,170.36,187.58,168.39,183.33,170.82Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-52)"
                                    />
                                </g>
                            </g>
                            <g id="Icon_Audio" data-name="Icon Audio">
                                <path
                                    d="M120.55,162.32c-9,5.13-16.07,17.68-16,27.74,0,4.88,1.66,8.71,4.77,10.42,2.75,1.56,7.1,4.15,7.1,4.15s20.07-23.69,20-33.24a10,10,0,0,1,2.44-6l-7.16-4.15C128.84,159.62,125,159.83,120.55,162.32Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-53)"
                                />
                                <g>
                                    <path
                                        d="M135.79,177.56v-8a9.4,9.4,0,0,0,0-1.19c0-.26-.1-.32-.31-.16a2.85,2.85,0,0,0-.52.31c-1.4.93-2.8,1.82-4.15,2.85a53.1,53.1,0,0,0-7.25,6.23c-.63.67-.68.57-.68,1.55v13.64c0,.73,0,.73-.62.93a7,7,0,0,0-3.06,2.34,7.39,7.39,0,0,0-1.61,3.47c-.2,1.3.26,2.28,1.09,2.28,1.4,0,2.8-.72,4.2-2.43a6.88,6.88,0,0,0,1.71-3.74,6.77,6.77,0,0,0,0-1V184.15c0-.78,0-.78.68-1.4,1.5-1.35,3.06-2.7,4.61-3.84,1.19-.88,2.39-1.76,3.63-2.59.52-.36.57-.31.57.31v7.05c0,.68-.05.73-.57.88a7.34,7.34,0,0,0-3.58,3.06,5.42,5.42,0,0,0-1.09,3.53,1.4,1.4,0,0,0,1.61,1.45,4.88,4.88,0,0,0,3-1.55,7.84,7.84,0,0,0,2.54-5.5C135.79,182.85,135.79,180.21,135.79,177.56Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M127.7,166.47c-9,5.13-16.07,17.68-16,27.74-.11,9.18,6.16,14.78,15.76,9.28s16.17-18.41,16.07-28C143.36,165.74,136.57,161.39,127.7,166.47ZM133.3,191a4.61,4.61,0,0,1-3,1.55,1.4,1.4,0,0,1-1.61-1.45,6,6,0,0,1,1.09-3.53,7.13,7.13,0,0,1,3.58-3.06c.57-.2.57-.26.57-.88v-7c0-.62,0-.67-.57-.31-1.2.83-2.44,1.71-3.63,2.59-1.56,1.19-3.06,2.49-4.62,3.84-.67.57-.67.62-.67,1.4v10.52a6.5,6.5,0,0,1,0,1,6.89,6.89,0,0,1-1.71,3.73c-1.4,1.72-2.8,2.49-4.2,2.44-.83-.05-1.3-1-1.09-2.28a7.81,7.81,0,0,1,1.61-3.47,6.58,6.58,0,0,1,3.06-2.34c.57-.21.62-.21.62-.93V179.12c0-1,0-.88.67-1.56a57.63,57.63,0,0,1,7.26-6.22c1.4-1,2.8-1.92,4.15-2.85l.51-.31c.21-.11.32-.05.32.15,0,.42.05.78.05,1.2v8c0,2.65-.05,5.29,0,7.94A7.08,7.08,0,0,1,133.3,191Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-54)"
                                    />
                                </g>
                            </g>
                            <g id="Path_Circle_2_1" data-name="Path Circle 2 1">
                                <path
                                    d="M234.13,302.9a15.21,15.21,0,0,1-7.41-2.49c-2.13-1.5-3.22-3.37-3-5.29s1.56-3.63,3.89-4.72a16.37,16.37,0,0,1,15.14,1.3c2.12,1.5,3.21,3.37,3,5.29s-1.55,3.63-3.89,4.72A15.33,15.33,0,0,1,234.13,302.9Zm1-11.56a13.29,13.29,0,0,0-6.64,1c-1.61.78-2.54,1.82-2.64,3s.67,2.33,2.12,3.37a14.3,14.3,0,0,0,13,1.09h0c1.61-.78,2.54-1.82,2.65-3s-.68-2.33-2.13-3.37A14.16,14.16,0,0,0,235.12,291.34Z"
                                    transform="translate(-0.5 -1)"
                                    fill="url(#linear-gradient-55)"
                                />
                            </g>
                        </g>
                        <g id="Laptop_Element" className={laptopClassNames[this.props.tutorialStep]}>
                            <path
                                id="Laptop_Shadow_Path"
                                data-name="Laptop Shadow Path"
                                d="M370.83,236.16l-16.38-12.4a3.27,3.27,0,0,1,.73-5.49L472.85,164a3.33,3.33,0,0,1,3.32.31l59.3,43A3.3,3.3,0,0,1,535,213L418.83,268.62a3.3,3.3,0,0,1-3.31-.26l-44.43-31.94A1,1,0,0,0,370.83,236.16Z"
                                transform="translate(-0.5 -1)"
                                fill="none"
                                strokeMiterlimit={10}
                                strokeWidth={3}
                                stroke="url(#linear-gradient-56)"
                            />
                            <path
                                id="Laptop_Shadow_Path-2"
                                data-name="Laptop Shadow Path"
                                d="M381.52,232.22l-14-10.13a2.62,2.62,0,0,1,.62-4.49l100.64-44.35a3,3,0,0,1,2.84.26l50.72,35.15a2.64,2.64,0,0,1-.44,4.62l-99.31,45.45a2.93,2.93,0,0,1-2.84-.21l-38-26.09A.79.79,0,0,0,381.52,232.22Z"
                                transform="translate(-0.5 -1)"
                                fill="#242993"
                                stroke="#1a1e49"
                                strokeMiterlimit={10}
                                opacity={0.5}
                            />
                            <g id="Laptop">
                                <g id="Laptop_Screen" data-name="Laptop Screen">
                                    <path
                                        d="M477.45,131.63l-7-85.48,1.16-.37L470,44.67h0a1.25,1.25,0,0,0-1.34,0L350.15,100.54a3.2,3.2,0,0,0-1.71,2.78l7.07,86.17a1.19,1.19,0,0,0,.51.93h0l1.57,1.11L358,190h-.09l117.82-55.6A3.24,3.24,0,0,0,477.45,131.63Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-57)"
                                    />
                                    <path
                                        d="M350.57,102.9l-1.81-1a2.79,2.79,0,0,0-.37,1.39l7.08,86.17a1.16,1.16,0,0,0,.51.93h0l1.57,1.11L358,190h-.09l6-2.82Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-58)"
                                    />
                                    <path
                                        d="M477.45,135.56,358.94,191.48c-.93.42-1.62.09-1.72-.83l-7.07-86.18a3.24,3.24,0,0,1,1.71-2.77L470.38,45.78c.92-.42,1.61-.1,1.71.83l7.07,86.17A3.27,3.27,0,0,1,477.45,135.56Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#242993"
                                    />
                                    <polygon
                                        points="467.93 50.1 353.67 103.98 360.42 185.16 474.59 131.27 467.93 50.1"
                                        fill="#4553c7"
                                    />
                                </g>
                                <g id="Laptop_Base" data-name="Laptop Base">
                                    <path
                                        d="M545.05,181.81l-6.42,2.73-58.82-41.12a4.45,4.45,0,0,0-4.07-.18L363.88,196c-1-.64-5.45-3.28-5.45-3.28l1.75,6.1h0a1.26,1.26,0,0,0,.56.74l61.91,43.35a4.48,4.48,0,0,0,4.07.18l114.45-54a2.2,2.2,0,0,0,1-.87h0Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-59)"
                                    />
                                    <path
                                        d="M544,182.78,426.72,238.15a4.68,4.68,0,0,1-4.16-.18l-63.49-44.41c-1-.69-.78-1.76.51-2.36L476.9,135.84a4.65,4.65,0,0,1,4.16.18l63.49,44.41C545.52,181.12,545.29,182.18,544,182.78Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-60)"
                                    />
                                    <path
                                        d="M394.17,221.22l.09-1.25c0-.14.1-.18.19-.09l4.11,2.87c.1,0,.14.18.14.32l-.09,1.25c0,.14-.09.19-.19.09l-4.11-2.86A.55.55,0,0,1,394.17,221.22Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#2859cb"
                                    />
                                    <path
                                        d="M400.32,225.52l.09-1.24c0-.14.1-.19.19-.1l4.11,2.87a.35.35,0,0,1,.14.32l-.09,1.25c0,.14-.09.19-.19.1l-4.11-2.87A.51.51,0,0,1,400.32,225.52Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#2859cb"
                                    />
                                    <path
                                        d="M376.78,191.39l97.48-46a1.93,1.93,0,0,1,2,.19l31.49,22.06a.72.72,0,0,1-.09,1.25l-97.43,46a1.92,1.92,0,0,1-2-.19l-31.54-22A.76.76,0,0,1,376.78,191.39Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#adc8ff"
                                    />
                                    <path
                                        d="M376.69,192.64l.33.23L474.17,147a2,2,0,0,1,2,.18l31.16,21.84.37-.19a.72.72,0,0,0,.09-1.25l-31.49-22.06a2,2,0,0,0-2-.19l-97.48,46A.75.75,0,0,0,376.69,192.64Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#91afff"
                                    />
                                    <g>
                                        <polygon
                                            points="477.88 149.64 393.21 189.6 389.79 187.2 474.45 147.28 477.88 149.64"
                                            fill="#242993"
                                        />
                                        <polygon
                                            points="486.24 155.51 406.8 192.98 403.38 190.57 482.82 153.11 486.24 155.51"
                                            fill="#242993"
                                        />
                                        <polygon
                                            points="491.7 159.3 398.16 203.43 394.73 201.07 488.28 156.94 491.7 159.3"
                                            fill="#242993"
                                        />
                                        <polygon
                                            points="497.16 163.14 403.61 207.27 400.19 204.87 493.74 160.74 497.16 163.14"
                                            fill="#242993"
                                        />
                                        <polygon
                                            points="502.57 166.94 409.07 211.06 405.65 208.66 499.19 164.58 502.57 166.94"
                                            fill="#242993"
                                        />
                                        <polygon
                                            points="388.08 192.01 384.28 193.81 380.91 191.41 384.65 189.65 388.08 192.01"
                                            fill="#242993"
                                        />
                                        <polygon
                                            points="400.47 195.94 392.65 199.64 389.28 197.28 397.09 193.58 400.47 195.94"
                                            fill="#242993"
                                        />
                                    </g>
                                    <path
                                        d="M472.22,212.66l26.27-12.39a1.08,1.08,0,0,0,.18-2L482.4,186.81a4,4,0,0,0-3.56-.33l-26.27,12.4a1.08,1.08,0,0,0-.18,2l16.27,11.42A4,4,0,0,0,472.22,212.66Z"
                                        transform="translate(-0.5 -1)"
                                        fill="url(#linear-gradient-61)"
                                    />
                                    <path
                                        d="M452.48,199.76l26.26-12.4a3.9,3.9,0,0,1,3.57.33l16.27,11.42a1.53,1.53,0,0,1,.56.65c.32-.46.14-1.06-.51-1.48l-16.28-11.43a4.05,4.05,0,0,0-3.56-.32l-26.26,12.4c-.7.32-1,.88-.74,1.38A1.45,1.45,0,0,1,452.48,199.76Z"
                                        transform="translate(-0.5 -1)"
                                        fill="#91afff"
                                    />
                                </g>
                                <g
                                    id="Screen_Shadow"
                                    data-name="Screen Shadow"
                                    opacity={0.11}
                                    style={{ isolation: "isolate" }}
                                >
                                    <g>
                                        <g clipPath="url(#clip-path-7)">
                                            <g>
                                                <path
                                                    d="M477,135.7,359.72,191a4.65,4.65,0,0,1-4.16-.19l-63.49-44.4c-1-.7-.78-1.76.51-2.36L409.89,88.7a4.65,4.65,0,0,1,4.16.19l63.49,44.4C478.51,134,478.28,135.1,477,135.7Z"
                                                    transform="translate(-0.5 -1)"
                                                    fill="url(#linear-gradient-62)"
                                                />
                                                <path
                                                    d="M363.88,137.73l26.27-12.39a1.08,1.08,0,0,0,.18-2l-16.27-11.42a4,4,0,0,0-3.56-.33L344.23,124a1.07,1.07,0,0,0-.18,2l16.27,11.43A3.77,3.77,0,0,0,363.88,137.73Z"
                                                    transform="translate(-0.5 -1)"
                                                    fill="url(#linear-gradient-63)"
                                                />
                                                <path
                                                    d="M344.14,124.83l26.26-12.4a3.91,3.91,0,0,1,3.56.32l16.28,11.38a1.53,1.53,0,0,1,.56.65c.32-.46.13-1.06-.51-1.48L374,111.88a4,4,0,0,0-3.56-.33L344.18,124c-.69.32-1,.88-.74,1.39A2.22,2.22,0,0,1,344.14,124.83Z"
                                                    transform="translate(-0.5 -1)"
                                                    fill="#91afff"
                                                />
                                                <g>
                                                    <path
                                                        d="M330.27,157.76l97.47-46a1.93,1.93,0,0,1,2,.19L461.22,134a.72.72,0,0,1-.09,1.25l-97.43,46a1.92,1.92,0,0,1-2-.19l-31.54-22A.76.76,0,0,1,330.27,157.76Z"
                                                        transform="translate(-0.5 -1)"
                                                        fill="#adc8ff"
                                                    />
                                                    <path
                                                        d="M330.17,159l.33.23,97.15-45.84a1.93,1.93,0,0,1,2,.19l31.16,21.83.37-.19a.71.71,0,0,0,.1-1.24l-31.49-22.07a2.06,2.06,0,0,0-2-.18l-97.48,46A.75.75,0,0,0,330.17,159Z"
                                                        transform="translate(-0.5 -1)"
                                                        fill="#91afff"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="452.17 130.95 367.22 171.01 370.27 173.18 455.22 133.08 452.17 130.95"
                                                fill="#242993"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="444.07 125.31 363.34 163.38 366.39 165.5 447.08 127.43 444.07 125.31"
                                                fill="#242993"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="357.28 166.2 349.74 169.76 352.79 171.89 360.33 168.32 357.28 166.2"
                                                fill="#242993"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="363.11 172.95 357.88 175.45 360.93 177.57 366.16 175.12 363.11 172.95"
                                                fill="#242993"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="438.99 121.75 344.7 166.2 347.71 168.32 442.04 123.87 438.99 121.75"
                                                fill="#242993"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="433.9 118.18 339.62 162.63 342.67 164.81 436.95 120.31 433.9 118.18"
                                                fill="#242993"
                                            />
                                        </g>
                                        <g clipPath="url(#clip-path-7)">
                                            <polygon
                                                points="428.81 114.62 334.53 159.12 337.58 161.25 431.87 116.75 428.81 114.62"
                                                fill="#242993"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}
export default TutorialAnimation;

