import React from 'react'
import { useState } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import './UserNavbar.css'

export default function UserNavbar(props) {

    const logo = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/logo_fABtRefL6.png?updatedAt=1633358637425'
    const login = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/login_OS_KcRsPy.png?updatedAt=1633368915926'
    const Username = 'John Doe'

    const [ isAuthenticated, setAuth ] = useState(true)
    const [drop, setDrop] = useState(false)
    
    const dropDown = () => {
        setDrop(!drop)
    }

    return (
        <div>
            <div className="userNavbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="optionBox">
                    <div style={{ display: isAuthenticated ? 'block' : 'none'}} className="dropDownOption">
                        <button onClick={dropDown} ><div className="username">{Username}</div></button>
                    </div>
                    <div style={{ display: isAuthenticated ? 'none' : 'block'}} className="loginOption">
                        <img src={login} alt="logout" />
                    </div>
                </div>
            </div>
        </div>
    )
}
