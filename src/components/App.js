import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import MissionMars from '../components/MissionMars/MissionMars';
import Login from '../components/LoginAndSignup/Login';
import Signup from '../components/LoginAndSignup/Signup';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import FuncBoxx from './FuncBoxx/FuncBoxx';
import BowlingGame from '../components/BowlingGame/BowlingGame';
import ClockGame from '../components/ClockGame/ClockGame';
import ShopingPage from './ShopingPage/ShopingPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/MissionMars" component={MissionMars} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/CodeEditor" component={CodeEditor}/>
          <Route exact path="/FuncBoxx" component={FuncBoxx}/>
          <Route exact path="/BowlingGame" component={BowlingGame}/>
          <Route exact path="/ShopingPage" component={ShopingPage}/>
          <Route exact path="/ClockGame" component={ClockGame}/>
        </Switch>
      </div>
    </Router>
  )
}
export default App;
