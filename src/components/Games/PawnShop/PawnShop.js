import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function PawnShop(props) {
  return (
    <div>
      <GameContainer gid={45} location={props.location.pathname} />
    </div>
  );
}
