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
        <div className="flex justify-between items-center bg-[#0a192f] shadow-lg px-6 py-3">
  {/* Logo */}
  <div className="w-24">
    <img src={LOGO_URL} alt="Logo" className="w-full h-auto object-contain" />
  </div>

  {/* Navigation + User Info */}
  <div className="flex items-center text-white">
    <ul className="flex items-center space-x-6 text-xl">
      <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/cart">Cart - {cartItems.length}</Link></li>
      <li><Link to="/grocery">Grocery</Link></li>
      <li>{loggedInUser}</li>
      <li>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition-all"
          onClick={() => setBtnLogin(btnLogin === "Login" ? "Logout" : "Login")}
        >
          {btnLogin}
        </button>
      </li>
    </ul>
  </div>
</div>

    );};
export default Header;