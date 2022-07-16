import { Line } from "react-chartjs-2";
import React from "react";
import { Spin } from "antd";
import { Chart as Chartjs, registerables } from 'chart.js';
import UtilityServices from "./../../../Services/UtilityServices";


Chartjs.register(...registerables);
const Chart = ({ chartData, loading }) => {
    if (!chartData) return;

    return (
        <div className="main-chart-top-container">
            {loading ? (
                <Spin />
            ) : (
                    <Line
                        data={chartData}
                        options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
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
                                    display: true,
                                    labels: {
                                        usePointStyle: true,
                                        boxWidth: 6
                                    }
                                }
                            },
                            backgroundColor: "#FFFFFF"
                        }}
                    />
            )}

        </div>
    );
};

export default Chart;
