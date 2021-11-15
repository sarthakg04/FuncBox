import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import bg from "./assets/loginBg.svg";
import card1 from "./assets/marvelCard.svg";
import card2 from "./assets/card2.svg";
import card3 from "./assets/card3.svg";
import card4 from "./assets/card4.svg";
import card5 from "./assets/card5.svg";
import card6 from "./assets/card6.svg";
import useAuth from "../../hooks/useAuth";
import {
  setAuth,
  setUser,
  setToken,
  // setUser
} from "../../auth/authslice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
  const history = useHistory();
  let cardPosion = [0, 1, 2, 3, 4, 5, 6];
  let images = document.getElementsByClassName("item");
  const { isAuthenticated, token } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Authenticated");
      toast.success("You are logged in");
      history.push("/Welcome");
    } else {
      console.log("Not authenticated");
    }
  }, [isAuthenticated]);

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

  const [details, setDetails] = useState({
    username: "Email",
    password: "Password",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    // console.log(details)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(setUser({ username: details.username, parseRes.token }));
    try {
      const body = { email: details.username, password: details.password };
      const response = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:5000"
            : "https://server.funcbox.in"
        }/auth/login`,
        {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          data: "all",
        }
      );

      const parseRes = await response.json();

      if (parseRes.token) {
        dispatch(setToken({ token: "Bearer " + parseRes.token }));
        const data = await fetch(
          `${
            process.env.NODE_ENV === "development"
              ? "http://localhost:5000"
              : "https://server.funcbox.in"
          }/auth/verify`,
          {
            credentials: "include",
            method: "GET",
            headers: { token: token, data: "all" },
          }
        );
        const verifyres = await data.json();

        console.log(verifyres);
        dispatch(setToken({ token: "Bearer " + parseRes.token }));

        dispatch(setAuth({ isAuthenticated: true }));
        dispatch(
          setUser({
            userid: verifyres.userDetails[0].id,
            username:
              verifyres.userDetails[0].fname +
              " " +
              verifyres.userDetails[0].lname,
          })
        );

        // history.goBack();
      } else {
        toast.error(parseRes);
        //   resetInputValue();
      }
    } catch (err) {
      console.log("Error : " + err);
      setAuth({ isAuthenticated: false });
      setUser({ username: "" });
      setToken({ token: "" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
            <h1 className="active">
              <span className="Login_Signup_link">Login</span>
            </h1>
            <h1 className>
              <Link to="/Signup">Signup</Link>
            </h1>
          </div>
          <div className="content active">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder={details.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder={details.password}
                onChange={handleChange}
              />
              <button type="submit" name="button" className="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
