import React from "react";
import "../FlippableCard/FlippableCard.css";
import { useState } from "react";
function FlippableCard({ children }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      class={`_container`}
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <div class={`_card${flipped ? " _flipped" : ""}`}>{children}</div>
    </div>
  );
}
export const Front = ({ children }) => {
  return <div class="_front">{children}</div>;
};

export const Back = ({ children }) => {
  return <div class="_back">{children}</div>;
};

export default FlippableCard;
