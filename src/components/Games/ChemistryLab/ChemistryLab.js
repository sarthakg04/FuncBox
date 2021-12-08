import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function ChemistryLab(props) {
  return (
    <div>
      <GameContainer gid={48} location={props.location.pathname} />
    </div>
  );
}
