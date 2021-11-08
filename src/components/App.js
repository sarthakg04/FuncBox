import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUser, setToken } from "../auth/authslice";
import AngryBirds from "../components/Games/AngryBirds/AngryBirds";
import MissionMars from "../components/Games/MissionMars/MissionMars";
import AvengersGame from "./Games/AvengersGame/AvengersGame";
import MonkeyMultiplier from "./Games/MonkeyMultiplier/MonkeyMultiplier";
import Login from "../components/LoginAndSignup/Login";
import Signup from "../components/LoginAndSignup/Signup";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import FuncBoxx from "./FuncBoxx/FuncBoxx";
import BowlingGame from "../components/Games/BowlingGame/BowlingGame";
import ClockGame from "../components/Games/ClockGame/ClockGame";
import AlienGame from "../components/Games/AlienGame/AlienGame";
import CardGame from "../components/Games/CardGame/cardGame";
import TemperatureConversions from "../components/Games/TemperatureConversions/TemperatureConversions";
import PollutoFree from "../components/Games/PollutoFree/PollutoFree";
import LandingPage from "./LandingPage/LandingPage";
import AboutPage from "./AboutPage/AboutPage";
import SalesPage from "./SalesPage/SalesPage";
import MoleGame from "./Games/WhackAMole/WhackAMole";
import IncrediblesGame from "./Games/IncrediblesGame/IncrediblesGame";
import TeamsPage from "./TeamsPage/TeamsPage";
import ColorFun from "./Games/ColorFun/ColorFun";
import MySolarSystem from "./Games/MySolarSystem/MySolarSystem";
import LetsMakeItRain from "./Games/LetsMakeItRain/LetsMakeItRain";
import MotuPatlu from "./Games/MotuPatlu/MotuPatlu";
import StatesThatMatter from "./Games/StatesThatMatter/StatesThatMatter";
import WelcomePage from "./WelcomePage/WelcomePage";
import Calculator from "./Games/Calculator/Calculator";
import UserNavbar from "./UserNavbar/UserNavbar";
import EditProfile from "./Profile/EditProfile";
import ForgotPass from "./ForgotPass/Forgot";
import Preview from "./Preview/Preview";
import HitIt from "./Games/HitIt/HitIt";
import TrashGame from "./Games/TrashGame/TrashGame";
import CashierGame from "./Games/CashierGame/CashierGame";
import Photosynthesis from "./Games/PhotosynthesisGame/Photosynthesis";
import RecycleIt from "./Games/RecycleIt/RecycleIt";
import useAuth from "../hooks/useAuth";
import FlippableCard from "./FlippableCard/FlippableCard";
import Container from "./FlippableCard/Container";

function App() {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/verify", {
        credentials: "include",
        method: "GET",
        headers: { token: token, data: "all" },
      });

      const parseRes = await response.json();

      console.log(parseRes);
      if (parseRes.isAuthorized === true) {
        console.log("Authenticated from verify");
        dispatch(setAuth({ isAuthenticated: true }));
        dispatch(
          setUser({
            username:
              parseRes.userDetails[0].fname +
              " " +
              parseRes.userDetails[0].lname,
            userid: parseRes.userDetails[0].id,
          })
        );
        dispatch(setToken({ token: "Bearer " + parseRes.token }));
      } else {
        dispatch(setAuth({ isAuthenticated: false }));
        dispatch(setToken({ token: " " }));
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    isAuth();
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/AngryBirds" component={AngryBirds} />
          <Route exact path="/MissionMars" component={MissionMars} />
          <Route exact path="/MonkeyMultiplier" component={MonkeyMultiplier} />
          <Route exact path="/LetsMakeItRain" component={LetsMakeItRain} />
          <Route exact path="/BowlingGame" component={BowlingGame} />
          <Route exact path="/ClockGame" component={ClockGame} />
          <Route exact path="/AlienGame" component={AlienGame} />
          <Route exact path="/AvengersGame" component={AvengersGame} />
          <Route exact path="/MoleGame" component={MoleGame} />
          <Route exact path="/IncrediblesGame" component={IncrediblesGame} />
          <Route exact path="/ColorGame" component={ColorFun} />
          <Route exact path="/SolarGame" component={MySolarSystem} />
          <Route exact path="/Calculator" component={Calculator} />

          <Route exact path="/CashierGame" component={CashierGame} />
          <Route exact path="/Photosynthesis" component={Photosynthesis} />

          <Route
            exact
            path="/TemperatureConversions"
            component={TemperatureConversions}
          />
          <Route exact path="/CardGame" component={CardGame} />
          <Route exact path="/MotuPatlu" component={MotuPatlu} />
          <Route exact path="/StatesThatMatter" component={StatesThatMatter} />
          <Route exact path="/HitIt" component={HitIt} />
          <Route exact path="/PollutoFree" component={PollutoFree} />
          <Route exact path="/TrashGame" component={TrashGame} />
          <Route exact path="/RecycleIt" component={RecycleIt} />

          <Route exact path="/UserNavbar" component={UserNavbar} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/AboutPage" component={AboutPage} />
          <Route exact path="/Welcome" component={WelcomePage} />
          <Route exact path="/SalesPage" component={SalesPage} />
          <Route exact path="/CodeEditor" component={CodeEditor} />
          <Route exact path="/TeamsPage" component={TeamsPage} />
          <Route exact path="/EditProfile" component={EditProfile} />
          <Route exact path="/ForgotPass" component={ForgotPass} />
          <Route exact path="/flippable" component={Container} />
          <Route exact path="/:code" component={Preview} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
