import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/logo.svg";

const Header = () => {

    return (
        <div className="top-head-container">
            <Link to={"/cryptoapp"}> <img className="main-logo" src={Logo} /></Link>
            <div>
                <Link to={`#`}>Login</Link>
                <Link className="main-btn" to={`#`}>Register</Link>
            </div>
        </div>
    );
}

export default Header;