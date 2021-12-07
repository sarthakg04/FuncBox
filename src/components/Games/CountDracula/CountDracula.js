import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function CountDracula(props) {
  return (
    <div>
      <GameContainer gid={47} location={props.location.pathname} />
    </div>
  );
}
