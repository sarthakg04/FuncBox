import React from 'react'
import {
  Link,
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './Navbar.css'

import about from './assets/about.svg'
import home from './assets/home.svg'
import logo from './assets/logo.svg'
import login from './assets/login.svg'
import shop from './assets/shop.svg'

export default function Navbar() {
    return (
        <div>
            <div className="navigation">
                <div className="logo__container">
                <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="link">
                <a href="#">
                    <img src={home} alt="home" />
                    <p>Home</p>
                </a>
                <a href="#">
                    <img src={about} alt="about" />
                    <p>About</p>
                </a>
                <a href="#">
                    <img src={shop} alt="shop" />
                    <p>Shop</p>
                </a>
                <Link to="/Login">
                <a href="#">
                    <img src={login} alt="login"/>
                    <p>Login</p>
                </a>
                </Link>
                </div>
            </div>
        </div>
    )
}
