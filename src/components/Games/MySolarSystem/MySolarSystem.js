import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function MySolarSystem(props) {
  return (
    <div>
      <GameContainer gid={12} location={props.location.pathname} />
    </div>
  );
}
