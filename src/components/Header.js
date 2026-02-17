import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link} from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
const Header = ()=>{
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useInternetStatus();
    return(
        <div className = "flex justify-between bg-amber-200 shadow-lg">
            <div className = "flex items-center">
                <img className = "logo w-32 h-30" src = {LOGO_URL}></img>
            </div>
            <div className = "flex items-center px-5">
                <ul className="flex space-x-4">
                    <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login-btn" onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}>
                            {loginBtn}
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header;