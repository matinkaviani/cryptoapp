import { Line } from "react-chartjs-2";
import React from "react";
import { Spin } from "antd";
import { Chart as Chartjs, registerables } from 'chart.js';
import UtilityServices from "./../../Services/UtilityServices";


Chartjs.register(...registerables);
const MainChart = () => {
    const chartDataMock = {
        "last_update": "2022-06-20 08:00:00",
        "values": [
            {
                "time": "2021-06-20 00:00:00",
                "composite": 2000,
                "weighted": 17200
            },
            {
                "time": "2021-06-21 00:00:00",
                "composite": 20000,
                "weighted": 10000
            },
            {
                "time": "2021-06-22 00:00:00",
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
            }
        ]
    }
    return (
        <div style={{ backgroundColor: "#FFFF", margin: "auto", height: "346px", maxWidth: "1216px" }}>

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
                                padding: 10,
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

export default MainChart;
