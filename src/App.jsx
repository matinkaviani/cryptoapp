import React from "react";
import './Assets/Styles/App.css';
import 'antd/dist/antd.min.css';
import Home from "./Pages/Home/index";
import CoinInfo from "./Pages/CoinInfo/index";
import Pages from "./Pages/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Pages />}>
                    <Route path={'/CoinInfo/Bitcoin'} element={<CoinInfo />} />
                    <Route index path={'/'} element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
