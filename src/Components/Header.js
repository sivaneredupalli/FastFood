import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header =()=>{
    const [btnLogin,setBtnLogin] = useState("Login")
    return(
        <div className="nav-bar">
        <div className="logo-container">
            <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-list">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button className="btn" onClick={()=>{
                  btnLogin =="Login" ?setBtnLogin("Logout") : setBtnLogin("Login")
                }}>{btnLogin}</button>
            </ul>
        </div>
    </div>
    );};
export default Header;