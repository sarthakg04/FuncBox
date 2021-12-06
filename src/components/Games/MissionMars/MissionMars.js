import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function MissionMarsGame(props) {
  return (
    <div>
      <GameContainer gid={2} location={props.location.pathname}/>
    </div>
  );
}
