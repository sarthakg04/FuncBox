import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function WhackAMole(props) {
  return (
    <div>
      <GameContainer gid={49} location={props.location.pathname}/>
    </div>
  );
}
