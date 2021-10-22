import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import LandingPage from "./LandingPage/LandingPage";
import AboutPage from "./AboutPage/AboutPage";
import SalesPage from "./SalesPage/SalesPage";
import MoleGame from "./Games/WhackAMole/WhackAMole";
import IncrediblesGame from "./Games/IncrediblesGame/IncrediblesGame";
import TeamsPage from "./TeamsPage/TeamsPage";
import ColorFun from "./Games/ColorFun/ColorFun";
import MySolarSystem from "./Games/MySolarSystem/MySolarSystem";
import LetsMakeItRain from "./Games/LetsMakeItRain/LetsMakeItRain";
import WelcomePage from "./WelcomePage/WelcomePage";
import Calculator from "./Games/Calculator/Calculator";
import UserNavbar from "./UserNavbar/UserNavbar";
import EditProfile from "./Profile/EditProfile"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/AngryBirds" component={AngryBirds} />
          <Route exact path="/MissionMars" component={MissionMars} />
          <Route exact path="/MonkeyMultiplier" component={MonkeyMultiplier} />
          <Route exact path="/UserNavbar" component={UserNavbar} />

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
          <Route exact path="/TemperatureConversions" component={TemperatureConversions}/>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/AboutPage" component={AboutPage} />
          <Route exact path="/Welcome" component={WelcomePage} />
          <Route exact path="/CardGame" component={CardGame} />
          <Route exact path="/SalesPage" component={SalesPage} />
          <Route exact path="/CodeEditor" component={CodeEditor} />
          <Route exact path="/TeamsPage" component={TeamsPage} />
          <Route exact path="/EditProfile" component={EditProfile} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
