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
import { setAuth, setUser } from "../../auth/authslice";

export default function Signup() {
  let cardPosion = [0, 1, 2, 3, 4, 5, 6];
  let images = document.getElementsByClassName("item");
  const dispatch = useDispatch();
  const history = useHistory();
  function next() {
    let length = cardPosion.length;
    let temp = cardPosion[length - 1];
    for (let i = length - 1; i > 0; i--) {
      cardPosion[i] = cardPosion[i - 1];
    }
    cardPosion[0] = temp;
    images[cardPosion[0]].classList.remove("point6");
    images[cardPosion[0]].classList.add("active");
    images[cardPosion[1]].classList.remove("active");
    images[cardPosion[1]].classList.add("point1");
    images[cardPosion[2]].classList.remove("point1");
    images[cardPosion[2]].classList.add("point2");
    images[cardPosion[3]].classList.remove("point2");
    images[cardPosion[3]].classList.add("point3");
    images[cardPosion[4]].classList.remove("point3");
    images[cardPosion[4]].classList.add("point4");
    images[cardPosion[5]].classList.remove("point4");
    images[cardPosion[5]].classList.add("point5");
    images[cardPosion[6]].classList.remove("point5");
    images[cardPosion[6]].classList.add("point6");
  }

  // setInterval(()=>{
  // next()
  // },2500);

  const initialState = {
    email: "Email",
    fName: "First Name",
    lName: "Last Name",
    standard: "Standard",
    password: "Password",
    confirmPassword: "Confirm Password",
  };

  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    // console.log(details)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, fName, lName, standard, password, confirmPassword };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        dispatch(setAuth({ isAuthenticated: true }));
        dispatch(setUser({ username: details.fName + " " + details.lName }));
        history.push("/Welcome");
      } else {
        console.log(parseRes);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const { email, fName, lName, standard, password, confirmPassword } = details;

  return (
    <div>
      <Navbar />
      <div className="signup__container">
        <div className="circular__carosel">
          <div className="car-wrapper">
            <ul className="carousel">
              <li className="item active">
                <img src={card1} />
              </li>
              <li className="item point1">
                <img src={card2} />
              </li>
              <li className="item point2">
                <img src={card3} />
              </li>
              <li className="item point3">
                <img src={card4} />
              </li>
              <li className="item point4">
                <img src={card5} />
              </li>
              <li className="item point5">
                <img src={card6} />
              </li>
              <li className="item point6">
                <img src={card4} />
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
                placeholder={details.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="fName"
                placeholder={details.fName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lName"
                placeholder={details.lName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="standard"
                placeholder={details.standard}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder={details.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder={details.confirmPassword}
                onChange={handleChange}
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
