import React from "react";
import { Layout, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Search } = Input;
const onSearch = value => console.log(value);

const Footer = () => {
    return (
        <Layout.Footer>
            <Content>
                <Row gutter={[30, 10]}>
                    <Col xs={24} sm={12}>
                        <h1 style={{ fontSize: "30px" }}>Newsletter</h1>
                        <p style={{ maxWidth: "648px", fontSize: "16px", fontWeight: "500" }}>
                            Subscribe today to our newsletter and stay up to date with all events coming straight in your mailbox:
                        </p>
                        <Search
                            placeholder="Enter your mail"
                            allowClear
                            enterButton="Submit"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col xs={24} offset={4} sm={8}>
                        <Row>
                            <Col sm={8} xs={24}>
                                <div className="footer-links">
                                    <span>Company</span>
                                    <Link to={"#"}>About Us</Link>
                                    <Link to={"#"}>Terms of use</Link>
                                    <Link to={"#"}>Privacy policy</Link>
                                    <Link to={"#"}>Disclaimer</Link>
                                    <Link to={"#"}>Methodology</Link>
                                </div>
                            </Col>
                            <Col sm={8} xs={24}>
                                <div className="footer-links">
                                    <span>Socials</span>
                                    <Link to={"#"}>Facebook</Link>
                                    <Link to={"#"}>Twitter</Link>
                                    <Link to={"#"}>Telegram</Link>
                                    <Link to={"#"}>Instagram</Link>
                                    <Link to={"#"}>Discord</Link>
                                </div>
                            </Col>
                            <Col sm={8} xs={24}>
                                <div className="footer-links">
                                    <span>Support</span>
                                    <Link to={"#"}>Contact us</Link>
                                    <Link to={"#"}>FAQ</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ marginTop: "20px" }}> 2022 OkayTokens. All rights reserved</div>
            </Content>
        </Layout.Footer>
    );
};
export default Footer;
