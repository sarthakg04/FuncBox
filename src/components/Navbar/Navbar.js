import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import "./Navbar.css";

import about from "./assets/about.png";
import about_current from "./assets/about_current.png";
import home from "./assets/home.png";
import home_current from "./assets/home_current.png";
// import logo from './assets/logo.png'
import login from "./assets/login.png";
import logo from "./assets/logo.png";
import funcbox from "./assets/FuncBox.png";
import shop from "./assets/shop.png";
import shop_current from "./assets/shop_current.png";
import login_current from "./assets/login_current.png";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setToken, setUser, setProfile } from "../../auth/authslice";
import { toast } from "react-toastify";

export default function Navbar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const apiurl = process.env.REACT_APP_API_URL;
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const username = useSelector((state) => state.auth.username);
  const { isAuthenticated, username, avatar } = useAuth();

  // const about = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/about_Kyi50psMa.png?updatedAt=1633368974643'
  // const about_current = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/about_current_ZVYrXtG6O.png?updatedAt=1633351778318'
  // const home = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/home_TNxeUkAI2oj.png?updatedAt=1633369073852'
  // const home_current = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/home_current_7g2zrFN17.png?updatedAt=1633351779952'
  // const logo = "./assets/logo.png";
  // const login = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/login_OS_KcRsPy.png?updatedAt=1633368915926'
  // const shop = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/shop_evdV8iuaBL0.png?updatedAt=1633369146900'
  // const shop_current = 'https://ik.imagekit.io/funcboxImages/Navbar_assets/shop_current_zUZ1xbFqsMTZ.png?updatedAt=1633351783276'

  //   console.log(props);
  const { home_check, about_check, shop_check, login_check } = props;
  function toggleNav() {
    document.getElementById("mobile__links").classList.toggle("active");
  }
  const handleLogout = async () => {
    dispatch(setAuth({ isAuthenticated: false }));
    dispatch(setUser({ username: "", userid: "" }));
    dispatch(setProfile({ avatar: "" }));
    dispatch(setToken({ token: "" }));
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? apiurl
          : "https://server.funcbox.in"
      }/logout`,
      {
        credentials: "include",
        method: "GET",
      }
    );
    toast.success("You are logged out");
    history.push("/");
  };

  const shortName = (name) => {
    return name.substring(0, name.indexOf(" "));
  };

  return (
    <div>
      <div className="navigation">
        <div className="logo__container">
          <Link to="/">
            <img src={funcbox} alt="logo" className="logo" />
          </Link>
          {/* <Link to="/">
            <h1 className="text">FuncBox</h1>
          </Link> */}
        </div>
        <div className="link">
          <Link to="/">
            <img
              className="home_image"
              src={home_check ? home_current : home}
              alt="home"
            />
            <p>Home</p>
          </Link>
          <Link to="/AboutPage">
            <img src={about_check ? about_current : about} alt="about" />
            <p>About</p>
          </Link>
          <Link to="/SalesPage">
            <img src={shop_check ? shop_current : shop} alt="shop" />
            <p>Shop</p>
          </Link>
          {isAuthenticated ? (
            <div className="dropdown">
              <button className="dropbtn">
                <img
                  id="dropbtn_avatar"
                  src={avatar || "avatars/Tiger.png"}
                  alt="Avatar"
                />
                <span>{shortName(username)}</span>
              </button>
              <div className="dropdown-content">
                <Link to="/welcome">Dashboard</Link>
                <Link to="/editprofile">Edit Profile</Link>
                <Link to="/subscriptions">Purchases</Link>
                <Link to="#">Change password</Link>
                <Link to="#" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/Login">
              <img src={login_check ? login_current : login} alt="login" />
              <p>Login</p>
            </Link>
          )}
        </div>
        <div className="bars">
          <i className="fas fa-bars" onClick={toggleNav}></i>
        </div>
      </div>
      <div className="mobile__links" id="mobile__links">
        <Link to="/">
          <img src={home_check ? home_current : home} alt="home" />
          <p>Home</p>
        </Link>
        <Link to="/AboutPage">
          <img src={about_check ? about_current : about} alt="about" />
          <p>About</p>
        </Link>

        <Link to="/SalesPage">
          <img src={shop_check ? shop_current : shop} alt="shop" />
          <p>Shop</p>
        </Link>
        {isAuthenticated ? (
          <div className="dropdown">
            <button className="dropbtn">
              <img
                id="dropbtn_avatar"
                src={avatar || "avatars/Tiger.png"}
                alt="Avatar"
              />
              <span>{shortName(username)}</span>
            </button>
            <div class="dropdown-content">
              <Link to="/welcome">Dashboard</Link>
              <Link to="/editprofile">Edit Profile</Link>
              <Link to="/subscriptions">Purchase</Link>
              <Link to="#">Change password</Link>
              <Link to="#" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/Login">
            <img src={login_check ? login_current : login} alt="login" />
            <p>Login</p>
          </Link>
        )}
        {/*<Link to="/Login">
              <a href="#">
                  <img src={login} alt="login"/>
                  <p>Login</p>
              </a>
            </Link>*/}
      </div>
    </div>
  );
}
