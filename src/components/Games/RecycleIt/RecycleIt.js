import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function RecycleItGame(props) {
  return (
    <div>
      <GameContainer gid={36} location={props.location.pathname} />
    </div>
  );
}
