import React from 'react'
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import './Navbar.css'

import about from './assets/about.svg'
import about_current from './assets/about_current.png'
import home from './assets/home.svg'
import home_current from './assets/home_current.png'
import logo from './assets/logo.svg'
import login from './assets/login.svg'
import shop from './assets/shop.svg'
import shop_current from './assets/shop_current.png'

export default function Navbar(props) {
    console.log(props)
    const {
        home_check,
        about_check,
        shop_check,
    } = props
    function toggleNav(){
        document.getElementById('mobile__links').classList.toggle('active');
    }
    return (
        <div>
            <div className="navigation">
                <div className="logo__container">
                <Link to="/">
                <img src={logo} alt="logo" className="logo" />
                </Link>
                </div>
                <div className="link">

                <Link to="/">
                <a href="#">
                    <img src={home_check ? home_current : home} alt="home" />
                    <p>Home</p>
                </a>
                </Link>
                <Link to="/AboutPage">
                <a  href="#">
                    <img src={about_check ? about_current : about } alt="about" />
                    <p>About</p>
                </a>
                </Link>
                <Link to="/SalesPage">
                    <img src={shop_check ? shop_current : shop} alt="shop" />
                    <p>Shop</p>
                </Link>
                {/*<Link to="/Login">
                <a href="#">
                    <img src={login} alt="login"/>
                    <p>Login</p>
                </a>
              </Link>*/}
                </div>
                <div className="bars">
                  <i className="fas fa-bars" onClick={toggleNav}></i>
                </div>
            </div>
            <div className="mobile__links" id="mobile__links">
              <Link to="/">
              <a href="#">
                  <img src={home_check ? home_current : home} alt="home" />
                  <p>Home</p>
              </a>
              </Link>
              <Link to="/AboutPage">
              <a href="#">
                  <img src={about_check ? about_current : about } alt="about" />
                  <p>About</p>
              </a>
              </Link>

              <Link to="/SalesPage">
                  <img src={shop_check ? shop_current : shop} alt="shop" />
                  <p>Shop</p>
              </Link>
              {/*<Link to="/Login">
              <a href="#">
                  <img src={login} alt="login"/>
                  <p>Login</p>
              </a>
            </Link>*/}
            </div>
        </div>
    )
}
