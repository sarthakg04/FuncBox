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

import about from './assets/about.png'
import about_current from './assets/about_current.png'
import home from './assets/home.png'
import home_current from './assets/home_current.png'
// import logo from './assets/logo.png'
import login from './assets/login.png'
import shop from './assets/shop.png'
import shop_current from './assets/shop_current.png'

export default function Navbar(props) {



    
    // const about = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/about_Kyi50psMa.png?updatedAt=1633368974643'
    // const about_current = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/about_current_ZVYrXtG6O.png?updatedAt=1633351778318'
    // const home = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/home_TNxeUkAI2oj.png?updatedAt=1633369073852'
    // const home_current = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/home_current_7g2zrFN17.png?updatedAt=1633351779952'
    const logo = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/logo_fABtRefL6.png?updatedAt=1633358637425'
    // const login = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/login_OS_KcRsPy.png?updatedAt=1633368915926'
    // const shop = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/shop_evdV8iuaBL0.png?updatedAt=1633369146900'
    // const shop_current = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/shop_current_zUZ1xbFqsMTZ.png?updatedAt=1633351783276'



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
                    <img className='home_image' src={home_check ? home_current : home} alt="home" />
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
