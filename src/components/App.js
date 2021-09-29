import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HashRouter } from "react-router-dom";

import AngryBirds from '../components/Games/AngryBirds/AngryBirds';
import MissionMars from '../components/Games/MissionMars/MissionMars';
import AvengersGame from './Games/AvengersGame/AvengersGame';
import MonkeyMultiplier from './Games/MonkeyMultiplier/MonkeyMultiplier';
import Login from '../components/LoginAndSignup/Login';
import Signup from '../components/LoginAndSignup/Signup';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import FuncBoxx from './FuncBoxx/FuncBoxx';
import BowlingGame from '../components/Games/BowlingGame/BowlingGame';
import ClockGame from '../components/Games/ClockGame/ClockGame'
import AlienGame from '../components/Games/AlienGame/AlienGame';
import CardGame from '../components/Games/CardGame/cardGame';
import ShopingPage from './ShopingPage/ShopingPage';
import LandingPage from './LandingPage/LandingPage';
import AboutPage from './AboutPage/AboutPage';
import SalesPage from './SalesPage/SalesPage';

function App() {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/AngryBirds" component={AngryBirds} />
          <Route exact path="/MissionMars" component={MissionMars} />
          <Route exact path="/MonkeyMultiplier" component={MonkeyMultiplier} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/CodeEditor" component={CodeEditor}/>
          <Route exact path="/FuncBoxx" component={FuncBoxx}/>
          <Route exact path="/BowlingGame" component={BowlingGame}/>
          <Route exact path="/ShopingPage" component={ShopingPage}/>
          <Route exact path="/ClockGame" component={ClockGame}/>
          <Route exact path="/AlienGame" component={AlienGame}/>
          <Route exact path="/AvengersGame" component={AvengersGame}/>
          <Route exact path="/LandingPage" component={LandingPage}/>
          <Route exact path="/AboutPage" component={AboutPage}/>
          <Route exact path="/CardGame" component={CardGame}/>
          <Route exact path="/SalesPage" component={SalesPage}/>

        </Switch>
      </div>
     </HashRouter>
  )
}
export default App;
