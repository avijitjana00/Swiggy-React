import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link} from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
const Header = ()=>{
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useInternetStatus();
    return(
        <div className = "header">
            <div className = "image-container">
                <img className = "logo" src = {LOGO_URL}></img>
            </div>
            <div className = "nav-items">
                <ul>
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