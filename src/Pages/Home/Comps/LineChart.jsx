
import React from "react";
import { Line } from "react-chartjs-2";

const options = {
    elements: {
        point: {
            radius: 0
        }
    },
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            ticks: {
                display: false //this will remove only the label
            },
            grid: {
                display: false,
                drawBorder: false,
            }
        },
        y: {
            ticks: {
                display: false //this will remove only the label
            },
            grid: {
                display: false,
                drawBorder: false,
            }
        },
  }
};

const LineChart = ({ data }) => (
    <div style={{ maxHeight: "40px", width: "121px" }}>
        <Line data={data} options={options} />
  </div>
);

export default LineChart;
