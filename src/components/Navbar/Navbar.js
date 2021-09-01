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
            <section>
                <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="options">
                    <div className="option">
                    <a href="#">
                        <img src={home} alt="home" />
                        <p>Home</p>
                    </a>
                    </div>
                    <div className="option">
                    <a href="#">
                        <img src={about} alt="about" />
                        <p>About</p>
                    </a>
                    </div>
                    <div className="option">
                    <a href="#">
                        <img src={shop} alt="shop" />
                        <p>Shop</p>
                    </a>
                    </div>
                    <div className="option active">
                    <a href="#">
                        <img src={login} alt="login" /><br />
                        <Link to="/Login">Login / Signup</Link>
                    </a>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
