import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function ShootThePrimesGame(props) {
  return (
    <div>
      <GameContainer gid={59} location={props.location.pathname}/>
    </div>
  );
}
