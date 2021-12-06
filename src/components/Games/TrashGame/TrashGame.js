import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function TrashGame(props) {
  return (
    <div>
      <GameContainer gid={38} location={props.location.pathname}/>
    </div>
  );
}
