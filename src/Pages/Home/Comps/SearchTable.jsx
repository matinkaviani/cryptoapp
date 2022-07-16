import React from "react";
import { Input, Space } from 'antd';
import MainTable from "./MainTable";
import { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai"
import TokenImage from "../../../Assets/Images/btcimg.svg";
import LineChart from './LineChart';
import { Tabs } from 'antd';
import UtilityService from '../../../Services/UtilityServices';


const { TabPane } = Tabs;
const { Search } = Input;
const SearchTable = () => {
    const coinData =
    {
        "last_update": "1990-06-20 08:00:00",
        "tokens": [
            {
                "rank": 1,
                "name": "Bitcoin",
                "symbol": "BTC",
                "price": 69242.23,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 35.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 2,
                "name": "Ethereum",
                "symbol": "ETH",
                "price": 69242.23,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 45.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 3,
                "name": "Cardano",
                "symbol": "ADA",
                "price": 69242.23,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 45.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 4,
                "name": "BNB",
                "symbol": "BNB",
                "price": 382.03,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 45.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 5,
                "name": "Tether",
                "symbol": "USTD",
                "price": 1.00,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 35.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 6,
                "name": "XRP",
                "symbol": "XRP",
                "price": 0.7555,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 35.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 7,
                "name": "Terra",
                "symbol": "LUNA",
                "price": 86.40,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 35.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            {
                "rank": 8,
                "name": "Solana",
                "symbol": "SOL",
                "price": 90.13,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 35.34,
                "market_cap": 232312313131,
                "volume": 12313231214,
                "var": 23.23,
                "flip_ratio": 32.34,
                "lastdays": {
                    data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
            },
            
        ]
    }
    const coinData2 =
    {
        "last_update": "1990-06-20 08:00:00",
        "tokens": [
            {
                "rank": 1,
                "name": "Ethereum",
                "symbol": "ETH",
                "price": 3024.23,
                "change": 1423.23,
                "prc_change": 12.32,
                "dominance": 45.34,
                "market_cap": 23231231,
                "volume": 123231214,
                "var": 23.221,
                "flip_ratio": 82.34,
                "lastdays": {
                    data: [22, 1, 3, 0, 2, 10, 8, 5, 9, 2, 22, 0],
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                }
            },
        ]
    }
    //const rawData = [
    //    {
    //        Rank: "1",
    //        TokenName: {
    //            TokenTitle: "BTC",
    //            TokenFullTitle: "Bitcoin",
    //            TokenImg: TokenImage,
    //        },
    //        Price: "$69,234.23",
    //        Dominance: "48.01%",
    //        MarketCap: "$856,201,999,090",
    //        Volume: "$28,463,373,951",
    //        ValueAtRisk: "48.01%",
    //        FlipRatio: "48.01%",
    //        LastDays:
    //        {
    //            data: [12, 19, 3, 13, 2, 20, 8, 5, 9, 2, 22, 20],
    //            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    //        }
    //    },
    //    {
    //        Rank: "2",
    //        TokenName: {
    //            TokenTitle: "ETH",
    //            TokenFullTitle: "Ethereum",
    //            TokenImg: TokenImage,
    //        },
    //        Price: "$69,234.23",
    //        Dominance: "23.21%",
    //        MarketCap: "$856,201,999,090",
    //        Volume: "$22,473,567,951",
    //        ValueAtRisk: "23.21%",
    //        FlipRatio: "23.21%",
    //        LastDays:
    //        {
    //            data: [15, 9, 3, 13, 2, 0],
    //            labels: ["1", "2", "3", "4", "5", "6"]
    //        }
    //    },
    //];
    //const rawData2 = [
    //    {
    //        Rank: "1",
    //        TokenName: {
    //            TokenTitle: "BTC2",
    //            TokenFullTitle: "Bitcoin",
    //            TokenImg: TokenImage,
    //        },
    //        Price: "$69,234.23",
    //        Dominance: "48.01%",
    //        MarketCap: "$856,201,999,090",
    //        Volume: "$28,463,373,951",
    //        ValueAtRisk: "48.01%",
    //        FlipRatio: "48.01%",
    //        LastDays:
    //        {
    //            data: [4, 7, 3, 23, 17, 28, 18, 5, 9, 12, 2, 10],
    //            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    //        }
    //    },
    //    {
    //        Rank: "2",
    //        TokenName: {
    //            TokenTitle: "ETH2",
    //            TokenFullTitle: "Ethereum",
    //            TokenImg: TokenImage,
    //        },
    //        Price: "$69,234.23",
    //        Dominance: "23.21%",
    //        MarketCap: "$856,201,999,090",
    //        Volume: "$22,473,567,951",
    //        ValueAtRisk: "23.21%",
    //        FlipRatio: "23.21%",
    //        LastDays:
    //        {
    //            data: [15, 9, 3, 13, 2, 0],
    //            labels: ["1", "2", "3", "4", "5", "6"]
    //        }
    //    },
    //];
    const baseColumns = [
        {
            title: "Rank",
            dataIndex: "rank",
            sorter: (a, b) => a.rank.toString().localeCompare(b.rank.toString()),
            key: "rank",
            render: text => <a>{text}</a>
        },
        {
            title: "Token Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.toString().localeCompare(b.name.toString()),
            key: "name",
            render: (text, record) => (
                <div style={{ display: "flex", alignItems: "center" }}><img style={{ maxWidth: "32px", height: "100%", marginRight: "10px" }} src={TokenImage} /> <div><div className="main-token-symbol">{record.symbol}</div><div className="main-token-name"> {record.name}</div></div></div>
            )
        },
        {
            title: "Price",
            dataIndex: "price",
            sorter: (a, b) => a.price.toString().localeCompare(b.price.toString()),
            key: "price",
            render: (text, record) => (
                <div><div>${UtilityService.commaThousondSeperator(record.price)}</div><div className="font-12 red"><AiFillCaretDown size={8} /> {UtilityService.commaThousondSeperator(record.change.toFixed())} ({record.prc_change}%)</div></div>
            )
        },
        {
            title: "Dominance",
            dataIndex: "dominance",
            sorter: (a, b) => a.dominance.toString().localeCompare(b.dominance.toString()),
            key: "dominance",
            render: (text, record) => (
                <span>{record.dominance}%</span>
            )
        },
        {
            title: "Market Cap",
            dataIndex: "market_cap",
            sorter: (a, b) => a.market_cap.toString().localeCompare(b.market_cap.toString()),
            key: "market_cap",
            render: (text, record) => (
                <span>${UtilityService.commaThousondSeperator(record.market_cap)}</span>
            )
        },
        {
            title: "24h Volume",
            dataIndex: "volume",
            sorter: (a, b) => a.volume.toString().localeCompare(b.volume.toString()),
            key: "volume",
            render: (text, record) => (
                <span>${UtilityService.commaThousondSeperator(record.volume)}</span>
            )
        },
        {
            title: "Value At Risk",
            dataIndex: "var",
            sorter: (a, b) => a.var.toString().localeCompare(b.var.toString()),
            key: "var",
            render: (text, record) => (
                <span>{record.var}%</span>
            )
        },
        {
            title: "Flip Ratio",
            dataIndex: "flip_ratio",
            sorter: (a, b) => a.flip_ratio.toString().localeCompare(b.flip_ratio.toString()),
            key: "flip_ratio",
            render: (text, record) => (
                <span>{record.flip_ratio}%</span>
            )
        },
        {
            title: "Last 30 Days",
            render: (record) => {
                const data = {
                    labels: record.labels,
                    datasets: [
                        {
                            label: "# of Votes",
                            data: record.data,
                            fill: false,
                            backgroundColor: "none",
                            borderColor: record.data[record.data.length - 1] - record.data[0] > 0 ? "#389E0D" : "#CF1322",
                            borderWidth: 1
                        }
                    ]
                }

                return <LineChart data={data} />;
            },
            dataIndex: "lastdays",
            key: "lastdays"
        }
    ];
    const [searchState, setSearchState] = useState({
        loading: true,
        activeTab: "1",
        filterTable: null,
        columns: {},
        baseData: coinData.tokens,
    });
    useEffect(() => {
        setSearchState((s) => ({ ...s, columns: baseColumns, loading: false }));
    }, []);

    //Alternate Search Method
    //const filterTable = searchState.baseData.filter(o =>
    //    Object.keys(o).some(k =>
    //        String(o[k])
    //            .toLowerCase()
    //            .includes(value.toLowerCase())
    //    )
    //);

    const search = (value) => {
        //console.log("PASS", { value });
        const filterTable = searchState.baseData.map((item) => {
            let result = "";
            let tokenTitles = item.name.toLowerCase();
            let tokenSubTitles = item.symbol.toLowerCase();
            if (tokenTitles.includes(value) || tokenSubTitles.includes(value)) {
                result = item;
            }
            return result;
        })
        const filteredItems = filterTable.filter((el) => {
            return el != "";
        });
        setSearchState((s) => ({ ...s, filterTable: filteredItems }));
    };

    const changeTab = (activeKey) => {
        console.log(activeKey);
        if (activeKey == 1) {
            setSearchState((s) => ({ ...s, baseData: coinData.tokens, filterTable: null }));
        } else if (activeKey == 2) {
            setSearchState((s) => ({ ...s, baseData: coinData2.tokens, filterTable: null }));
        }
        setSearchState((s) => ({ ...s, activeTab: activeKey }));
    };

    return (
        <Space direction="vertical" size={30}>
                <Search className="main-search" placeholder="Search the token name" onSearch={search} enterButton />
                <Tabs activeKey={searchState.activeTab} className="main-tabs" onChange={changeTab}>
                    <TabPane tab="All Projects" key="1">
                        <div className="text-right main-last-update">LAST UPDATE: {coinData.last_update}</div>
                        <MainTable loading={searchState.loading} columns={searchState.columns} data={searchState.filterTable == null ? searchState.baseData : searchState.filterTable} />
                    </TabPane>
                    <TabPane tab="PoW" key="2">
                        <div className="text-right main-last-update">LAST UPDATE: {coinData2.last_update}</div>
                        <MainTable loading={searchState.loading} columns={searchState.columns} data={searchState.filterTable == null ? searchState.baseData : searchState.filterTable} />
                    </TabPane>
                    <TabPane tab="PoS" key="3">
                    </TabPane>
                    <TabPane tab="PoST" key="4">
                    </TabPane>
                    <TabPane tab="CEX" key="5">
                    </TabPane>
                    <TabPane tab="DEX" key="6">
                    </TabPane>
                    <TabPane tab="Games" key="7">
                    </TabPane>
                    <TabPane tab="Oracle" key="8">
                    </TabPane>
                </Tabs>
        </Space>
    );
}


export default SearchTable;