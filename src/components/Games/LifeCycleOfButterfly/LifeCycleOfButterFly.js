import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function ButterflyGame(props) {
  return (
    <div>
      <GameContainer gid={32} location={props.location.pathname} />
    </div>
  );
}
