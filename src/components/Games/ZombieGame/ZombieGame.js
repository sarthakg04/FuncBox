import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function TemperatureGame(props) {
  return (
    <div>
      <GameContainer gid={27} location={props.location.pathname} />
    </div>
  );
}
