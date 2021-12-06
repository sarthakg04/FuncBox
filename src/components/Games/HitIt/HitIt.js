import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function HitItGame(props) {
  return (
    <div>
      <GameContainer gid={31} location={props.location.pathname} />
    </div>
  );
}
