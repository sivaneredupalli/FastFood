import { LOGO_URL } from "../../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
const Header =()=>{
    const [btnLogin,setBtnLogin] = useState("Login")
    const onlineStatus = useOnlineStatus();
     const {loggedInUser}=useContext(UserContext)
     const cartItems = useSelector((store)=>store.cart.items)
    //  console.log(cartItems)

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-24">
            <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex item-center">
            <ul className="flex p-4 m-4">
            <li className="px-4 text-xl font-bold">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-4 text-xl font-bold"><Link to="/">Home</Link></li>
                <li className="px-4 text-xl font-bold"><Link to="/about">About</Link></li>
                <li className="px-4 text-xl font-bold"><Link to="/contact">Contact</Link></li>
                <li className="px-4 text-xl font-bold"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                <li className="px-4 text-xl font-bold"><Link to="/grocery">Grocery</Link></li>
              <button className="btn px-4 text-xl font-bold" onClick={()=>{
                  btnLogin =="Login" ?setBtnLogin("Logout") : setBtnLogin("Login")
                }}>{btnLogin}</button>
                <li className="px-4 text-xl font-bold">{loggedInUser}</li>
                
            </ul>
        </div>
    </div>
    );};
export default Header;