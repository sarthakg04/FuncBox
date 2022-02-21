import React from "react";
import { useState } from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./UserNavbar.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';


import {
  setAuth,
  // setUser
} from "../../auth/authslice";
import { useDispatch } from "react-redux";

export default function UserNavbar(props) {
  const logo =
    "https://ik.imagekit.io/funcboxImages/Navbar_assets/logo_fABtRefL6.png?updatedAt=1633358637425";
  const login =
    "https://ik.imagekit.io/funcboxImages/Navbar_assets/login_OS_KcRsPy.png?updatedAt=1633368915926";

  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const [ isAuthenticated, setAuth ] = useState())
  const [drop, setDrop] = useState(false);

  const dropDown = () => {
    setDrop(!drop);
  };

  const handleLogout = () => {
    dispatch(setAuth({ isAuthenticated: false }));
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <div className="userNavbar">
        <LazyLoadImage src={logo} alt="logo" className="logo" />
        <div className="optionBox">
          <div
            style={{ display: isAuthenticated ? "block" : "none" }}
            className="dropDownOption"
          >
            {/* <button onClick={dropDown} ><div className="username">{Username}</div></button> */}
            <div className="dropdown">
              <button class="dropbtn">🔽</button>
              <div class="dropdown-content">
                <Link href="#">Edit Profile</Link>
                <Link href="#">Purchase</Link>
                <Link href="#">Change password</Link>
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            </div>
          </div>
          <div
            style={{ display: isAuthenticated ? "none" : "block" }}
            className="loginOption"
          >
            <LazyLoadImage src={login} alt="logout" />
          </div>
        </div>
      </div>
    </div>
  );
}
