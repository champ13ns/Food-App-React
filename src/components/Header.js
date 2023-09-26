import React , {useState} from "react";
import Logo from './../constants/Logo.png'
const Header=()=>{
    const[btnName,setbtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="auth-btn" onClick={(e) => {
                        if(btnName === 'Login') setbtnName("Logout") 
                        else setbtnName("Login")
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>

    )
}

export default Header;