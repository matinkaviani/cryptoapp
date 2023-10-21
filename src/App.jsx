import 'antd/dist/antd.min.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Assets/Styles/App.css';
import CoinInfo from "./Pages/CoinInfo/index";
import Home from "./Pages/Home/index";
import Pages from "./Pages/index";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/cryptoapp'} element={<Pages />}>
                    <Route path={'/cryptoapp/CoinInfo/Bitcoin'} element={<CoinInfo />} />
                    <Route index path={'/cryptoapp'} element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
