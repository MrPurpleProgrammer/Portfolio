import React, { useState, Component } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function WebDetectionStats(props) {
    let pieChartOptions = {
        chart: {
            border: "#122e75",
            borderWidth: 2,
            backgroundColor: '#0c1e48',
            height: 200,
            width: 300,
        },
        credits: {
            enabled: false,
        },
        title: {
            text: '',
            align: 'center',
            verticalAlign: 'top',
            style: {color: '#ffffff', fontSize: "15px"}
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                colors: ["#122e75", "#234aad", "#476dce", "#7a9bef"],
                dataLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
            }
        },
        series: [{
            type: 'pie',
            name: 'Detection share',
            data: [
                ['Complete', props.webReport.webDetection.fullMatchingImages.length],
                ['Partial', props.webReport.webDetection.partialMatchingImages.length],
                ['Pages', props.webReport.webDetection.pagesWithMatchingImages.length],
                ['Similar', props.webReport.webDetection.visuallySimilarImages.length],
            ]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500,
                    minWidth: 200,
                },
            }]
        }
    };
    let lineChartOptions = {
        chart: {
            border: "#122e75",
            borderWidth: 2,
            backgroundColor: '#0c1e48',
            height: 200,
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
            visible: true,
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
            visible: true,
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
            line: {
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
            type: 'line',
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
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800,
                    minWidth: 400,
                },
            }]
        }
    };
    return (
        <div id="divDetectionReportCharts" className="webDetectionReports">
            <div id='mediaReportPieChart' className="detectionPieChart">
                <HighchartsReact highcharts={Highcharts} options={pieChartOptions} containerProps={{ className: 'mediaStatsChart' }} />
            </div>
            <div id='mediaReportLineChart' className="detectionLineChart">
                <HighchartsReact highcharts={Highcharts} options={lineChartOptions} containerProps={{ className: 'mediaStatsChart' }} />
            </div>
        </div>
    )
}
export default WebDetectionStats