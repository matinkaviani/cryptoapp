import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CoinDataContext from "../Home/Comps/CoinDataContext";
import { Row, Col, Layout, Tabs } from "antd";
import TokenImage from "../../Assets/Images/btcimg.svg";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons";
import discordimg from "../../Assets/Images/discordimg.svg";
import globeimg from "../../Assets/Images/globeimg.svg";
import mimg from "../../Assets/Images/mimg.svg";
import lizardimg from "../../Assets/Images/lizardimg.svg";
import TopChart from "./TopChart";
import MainChart from "./MainChart";
import { ChartRange, ChartDesciption } from "../../Config/enums";

const { TabPane } = Tabs;
const { Content } = Layout;
const CoinInfo = () => {
    const ctx = useContext(CoinDataContext);
    console.log(ctx)
    const [state, setState] = useState({
        range: ChartRange.OneMonth,
        activeTab: "1",
    });
    const changeTab = (activeKey) => {
        console.log(activeKey);
        setState((s) => ({ ...s, activeTab: activeKey }));
    };
    return (
        <div id="CoinInfo">
            <Content className="coin-info-top">
                <Row gutter={16}>
                    <Col xs={24} sm={8}>
                        <Row gutter={35}>
                            <Col xs={12} sm={14}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img style={{ maxWidth: "60px", height: "100%", marginRight: "24px" }} src={TokenImage} />
                                    <div>
                                        <div className="main-token-symbol">
                                            Bitcoin
                                        </div>
                                        <div className="main-token-name">
                                            BTC
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={10}>
                                <div className="coin-price">
                                    $69,234.23
                                </div>
                                <div className="coin-sub-price">
                                    1,542 (%2.45)
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Row className="coin-info-details" gutter={[16, 15]} style={{ marginTop: "20px", padding: "10px" }}>
                                <Col className="d-title" xs={12} sm={12}>
                                    Project:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    Proof of Work
                                </Col>
                                <Col className="d-title" xs={12} sm={12}>
                                    Rank:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    #1
                                </Col>
                                <Col className="d-title" xs={12} sm={12}>
                                    Market Capital:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    $856,201,999,090
                                </Col>
                                <Col className="d-title" xs={12} sm={12}>
                                    Volume:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    $28,463,373,951
                                </Col>
                                <Col className="d-title" xs={12} sm={12}>
                                    Dominance:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    %48.01
                                </Col>
                                <Col className="d-title" xs={12} sm={12}>
                                    Value at Risk:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    %48.01
                                </Col>
                                <Col className="d-title" xs={12} sm={12}>
                                    Flip Ratio:
                                </Col>
                                <Col className="d-sub" xs={12} sm={12}>
                                    %48.01
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col xs={24} sm={16}>
                        <Row style={{ padding: "0 20px" }}>
                            <Col sm={12} xs={24}>
                                <Link to={"#"}>
                                    <span className="social-container"> <TwitterOutlined /></span>
                                </Link>
                                <Link to={"#"}>
                                    <span className="social-container"> <GithubOutlined /></span>
                                </Link>
                                <Link to={"#"}>
                                    <span className="social-container">
                                        <img src={discordimg} />
                                    </span>
                                </Link>
                                <Link to={"#"}>
                                    <span className="social-container">
                                        <img src={globeimg} />
                                    </span>
                                </Link>
                                <Link to={"#"}>
                                    <span className="social-container">
                                        <img src={mimg} />
                                    </span>
                                </Link>
                                <Link to={"#"}>
                                    <span className="social-container">
                                        <img src={lizardimg} />
                                    </span>
                                </Link>
                            </Col>
                            <Col className="coin-info-last-update" sm={12} xs={24}>
                                    LAST UPDATE: 12-10-2022, 13:00:00
                            </Col>
                            <Col className="coin-info-title" sm={12} xs={24}>
                                Price and Volume
                            </Col>
                            <Col style={{ textAlign: "right", padding: "0 20px" }} sm={12} xs={24}>
                                <div className="btns">
                                    {Object.values(ChartRange).map((x, idx) => (
                                        <button
                                            className={`btn-range ${state.range === x ? "active" : ""}`}
                                            key={idx}
                                            onClick={() => setState((s) => ({ ...s, range: x }))}
                                        >
                                            {ChartDesciption[x]}
                                        </button>
                                    ))}
                                </div>
                                </Col>
                            <Col span={24}>
                                <TopChart />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
            <Row className="coin-info-mainchart" justify={"center"}>
                <div style={{ width: "100%", padding: "24px 0" }}>
                    <Tabs activeKey={state.activeTab} className="main-tabs" onChange={changeTab}>
                        <TabPane tab="Volume" key="1">
                            <MainChart />
                        </TabPane>
                        <TabPane tab="Rank" key="2">
                        </TabPane>
                        <TabPane tab="Market Cap" key="3">
                        </TabPane>
                        <TabPane tab="Dominance" key="4">
                        </TabPane>
                        <TabPane tab="Value at Risk" key="5">
                        </TabPane>
                        <TabPane tab="Flip Ratio" key="6">
                        </TabPane>
                    </Tabs>
                </div>
            </Row>
        </div>
    );
}
export default CoinInfo;