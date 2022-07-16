import React from "react";
import Chart from "./../Home/Comps/Chart";
import SearchTable from "./../Home/Comps/SearchTable";
import { useEffect, useState } from "react";
import MainChartService from "../../Services/MainChartsService";


const Home = () => {
    const chartDataMock = {
        "last_update": "2022-06-20 08:00:00",
        "values": [
            {
                "time": "2021",
                "composite": 3423242223,
                "weighted": 3321423422
            },
            {
                "time": "2022",
                "composite": 2826239203,
                "weighted": 2460823422
            },
            {
                "time": "2023",
                "composite": 3423232223,
                "weighted": 2321423422
            },
        ]
    }
    const [state, setState] = useState({
        loading: true,
        data: [],
    });
    // const getData = async () => {
    //     setState((s) => ({ ...s, loading: true }));
    //     const call = await MainChartService.getLinechart();

    //     if (!call.isSuccess) {
    //         setState((s) => ({ ...s, loading: true }));
    //         return;
    //     }
    //     setState((s) => ({ ...s, data: call.data, loading: false }));
    //     console.log(call.data)
    // };
    // useEffect(() => {
    //     getData();
    // }, [])
    const cstate = {
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
                label: 'Weighted',
                fill: false,
                lineTension: 0,
                backgroundColor: '#722ED1',
                borderColor: '#722ED1',
                borderWidth: 2,
                /*data: [0, 110, 55, 140, 325, 350]*/
                data: chartDataMock.values.map((item) => {
                    return item.weighted
                })
            }
        ]
    }
    const state2 = {
        labels: ['2013', '2014', '2015',
            '2016', '2017', '2018', '2019'],
        datasets: [
            {
                label: 'Total Market Capital',
                fill: false,
                lineTension: 0,
                backgroundColor: '#1890FF',
                borderColor: '#1890FF',
                borderWidth: 2,
                data: [0, 100, 87, 150, 155, 175]
            },
            {
                label: 'Alt-coin Market Capital',
                fill: false,
                lineTension: 0,
                backgroundColor: '#722ED1',
                borderColor: '#722ED1',
                borderWidth: 2,
                data: [0, 110, 55, 140, 325, 350]
            }
        ]
    }

    return (
        <div>
            <div className="main-chart-container">
                <Chart chartData={cstate} />
                <Chart chartData={state2} />
            </div>
            <div className="main-content">
                <SearchTable />
            </div>
        </div>
    );
}

export default Home;