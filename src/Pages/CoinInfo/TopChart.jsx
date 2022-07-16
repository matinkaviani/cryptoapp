import { Line } from "react-chartjs-2";
import React from "react";
import { Spin } from "antd";
import { Chart as Chartjs, registerables } from 'chart.js';
import UtilityServices from "./../../Services/UtilityServices";


Chartjs.register(...registerables);
const TopChart = () => {
    const chartDataMock = {
        "last_update": "2022-06-20 08:00:00",
        "values": [
            {
                "time": "2013",
                "composite": 2000,
                "weighted": 17200
            },
            {
                "time": "2014",
                "composite": 20000,
                "weighted": 10000
            },
            {
                "time": "2015",
                "composite": 35000,
                "weighted": 17500
            },
        ]
    }
    const chartData = {
        labels: chartDataMock.values.map((item) => {
            return item.time
        }),
        datasets: [
            {
                label: 'Composite',
                fill: false,
                lineTension: 0,
                backgroundColor: '#1890FF',
                borderColor: '#1890FF',
                borderWidth: 2,
                /*  data: [0, 100, 87, 150, 155, 175]*/
                data: chartDataMock.values.map((item) => {
                    return item.composite
                })
            },
            {
                type: "bar",
                label: 'Weighted',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderColor: 'rgba(0, 0, 0, 0.04)',
                borderWidth: 2,
                /*data: [0, 110, 55, 140, 325, 350]*/
                data: chartDataMock.values.map((item) => {
                    return item.weighted
                })
            }
        ]
    }
    return (
        <div style={{ backgroundColor: "#FFFF", margin: "0 12px", height: "306px" }}>

                <Line
                    data={chartData}
                options={{
                    maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                }
                            },
                            y: {
                                ticks: {
                                    callback: ((value, index, ticks) => {
                                        return UtilityServices.formatNumber(value);
                                    })
                                },
                                grid: {
                                    borderDash: [8, 4],
                                    borderWidth: 1,
                                    color: "#F5F5F5"
                                }
                            }

                        },
                        elements: {
                            point: {
                                radius: 0
                            }
                        },
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },
                        backgroundColor: "#FFFFFF"
                    }}
                />
            

        </div>
    );
};

export default TopChart;
