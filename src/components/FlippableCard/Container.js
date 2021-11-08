import React from "react";
import FlippableCard, { Back, Front } from "./FlippableCard";
import "./Container.css";
function Container() {
  return (
    <div className="outer_container">
      <FlippableCard>
        <Front>
          <div className="info_container">
            <div className="info_card">
              <h1>Hello</h1>
            </div>
          </div>
        </Front>
        <Back>
          <div className="back_info_container">
            <div className="back_info_card">
              <h1>Bye</h1>
            </div>
          </div>
        </Back>
      </FlippableCard>
    </div>
  );
}

export default Container;
