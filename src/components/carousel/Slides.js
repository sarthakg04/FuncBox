import React from "react";
import Slide from "./Slide";
import { SLIDER_DATA } from "./SliderData";
const Slides = () => {
  return (
    <div>
      {SLIDER_DATA.map((data) => {
        return (
          <div key={data.id}>
            <Slide data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Slides;
