import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function ColorFun(props) {
  return (
    <div>
      <GameContainer gid={11} location={props.location.pathname} />
    </div>
  );
}
