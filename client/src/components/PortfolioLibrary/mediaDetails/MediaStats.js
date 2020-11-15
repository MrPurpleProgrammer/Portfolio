import React, { useState, Component } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function MediaStats(props) {
    let options = {
        chart: {
            border: "#122e75",
            borderWidth: 2,
            backgroundColor: '#0c1e48',
            height: '300px',
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false,
        },
        annotations: {
            labels: {
                format: "{value}",
            },
        },
        title: {
            text: "Average Likes vs Shares",
            style: { "color": '#ffffff', "font-size": "12px", "border-bottom": "1px solid #ffffff" },
            useHtml: true,
            y: 10,
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
            lineWidth: 1,
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
            lineWidth: 1,
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
                        fontWeight: 'normal',
                    },
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 10
                    },
                    position: 'center',
                    y: -10,
                    x: -5
                },
                borderRadius: 3,
                fillColor: '#122e75',
                borderColor: '#122e75',
                fillOpacity: 1,
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
            color: '#122e75',
            type: 'column',
            data: [
                0, 2, 5, 16, 0, 6, 15, 17, 0, 0, 21, 8, 11, 0, 2, 10, 4, 0, 2, 8, 2, 12, 4, 2, 2, 4, 13, 4, 0, 10, 12, 0, 2, 0, 5, 9, 12, 4, 0, 0
            ],
            dataLabels: {
                color: 'white',
                font: '8px Montserrat, sans-serif',
                fontWeight: 'normal',
            }
        }],
        legend: {
            enabled: false
        },
    };
    return (
        <div id="divMediaCharts">
            <div id='divMediaStatInputs' className="statInputParent">
                <div id='divAnalyticsSelector' className="statInputSelect none">
                    <select id="analyticsType" name="analyticsType">
                        <option value="001">Like vs Share</option>
                        <option value="002">Performance Over Time</option>
                        <option value="003">License Propogation</option>
                        <option value="004">Average View Duration</option>
                    </select>
                </div>
                <div id='divAnalyticsParam' className="statInputParam none">
                    <input type="text" id="analyticsParam_1" name="param1" />
                    <input type="text" id="analyticsParam_2" name="param1" />
                </div>
            </div>
            <div id='mediaStatsChart'>
                <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ className: 'mediaStatsChart' }} />
            </div>
            <div id='mediaStatsChart'>
                <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ className: 'mediaStatsChart' }} />
            </div>
            <div id='mediaStatsChart'>
                <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ className: 'mediaStatsChart' }} />
            </div>
        </div>
    )
}
export default MediaStats