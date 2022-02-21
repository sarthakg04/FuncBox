import React from "react";
import { useState, useEffect } from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import bg from "./assets/loginBg.svg";
import card1 from "./assets/marvelCard.svg";
import card2 from "./assets/card2.svg";
import card3 from "./assets/card3.svg";
import card4 from "./assets/card4.svg";
import card5 from "./assets/card5.svg";
import card6 from "./assets/card6.svg";
import { parse } from "qs";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setToken, setUser, setProfile } from "../../auth/authslice";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const apiurl = process.env.REACT_APP_API_URL;

  const initialState = {
    email: "",
    fName: "",
    lName: "",
    standard: "",
    password: "",
    confirmPassword: "",
  };

  const [details, setDetails] = useState(initialState);
  const [rToken, setRToken] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    // console.log(details)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rToken) {
      toast.error("Please Fill the Captcha");
      return;
    }
    const body = {
      email,
      fName,
      lName,
      standard,
      password,
      confirmPassword,
      rtoken: rToken,
    };
    const response = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? apiurl
          : "https://server.funcbox.in"
      }/auth/register`,
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const parseRes = await response.json();
    if (parseRes.token) {
      dispatch(setAuth({ isAuthenticated: true }));
      dispatch(
        setUser({
          username: details.fName + " " + details.lName,
          userid: parseRes.userid,
        })
      );
      dispatch(setToken({ token: "Bearer " + parseRes.token }));
      toast.success("You are ready to go");
      history.push("/Welcome");
    } else {
      toast.error(parseRes);
    }
  };

  const { email, fName, lName, standard, password, confirmPassword } = details;

  return (
    <div>
      <Navbar />
      <div className="signup__container">
        <div className="circular__carosel">
          <div className="car-wrapper">
            <ul className="carousel">
              <li className="item active">
                <LazyLoadImage src={card1} />
              </li>
              <li className="item point1">
                <LazyLoadImage src={card2} />
              </li>
              <li className="item point2">
                <LazyLoadImage src={card3} />
              </li>
              <li className="item point3">
                <LazyLoadImage src={card4} />
              </li>
              <li className="item point4">
                <LazyLoadImage src={card5} />
              </li>
              <li className="item point5">
                <LazyLoadImage src={card6} />
              </li>
              <li className="item point6">
                <LazyLoadImage src={card4} />
              </li>
            </ul>
          </div>
        </div>
        <div className="login__signup">
          <div className="title">
            <h1 className>
              <Link to="/Login">Login</Link>
            </h1>
            <h1 className="active">
              <span className="Login_Signup_link">Signup</span>
            </h1>
          </div>
          <div className="content active">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                onChange={handleChange}
              />

              <input
                type="number"
                name="standard"
                placeholder="Standard"
                defaultValue={1}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    if (e.target.value <= 8) handleChange();
                    else e.target.value = 8;
                  } else e.target.value = 1;
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />

              <ReCAPTCHA
                sitekey="6LdB4hYeAAAAAN9RXvC4FoUTJwOO2ckpwI4vLd5l"
                onChange={(rtoken) => setRToken(rtoken)}
                onExpired={(e) => setRToken("")}
              />
              <button type="submit" name="button" className="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
