import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "./Comps/Footer";
import Header from "./Home/Comps/Header";

const Pages = () => {

    const styles = {
        active: {
            visibility: "visible",
            position: "sticky",
            top: "0",
            transition: "all 0.5s",
            transform: "translateY(0)"

        },
        hidden: {
            position: "relative",
            transition: "all 0.5s",
        }
    }
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > 354);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className="home-page">
            <Helmet>
                <title>Okay Tokens</title>
            </Helmet>
            <Layout>
                <Layout.Header className="top-head">
                    <Header />
                </Layout.Header>
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
                <Footer />
            </Layout>
        </div>
    );

}

export default Pages;