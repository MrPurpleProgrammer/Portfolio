import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class UploadChart extends Component {
    render() {
        const options = {
            chart: {
                backgroundColor: '#09183C',
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
                text: "Upload Activity",
                style: { "color": '#ffffff', "font-size": "12px", "border-bottom": "1px solid #ffffff"},
                useHtml: true,
                y: 0,
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
                        position: 'center'
                    },
                    borderRadius: 3,
                    fillColor: '#ffffff',
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
                color: '#FFF',
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
            <div id="uploadChart">
                <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ className: 'uploadChart' }} />
            </div>
        )
    }
}
export default UploadChart