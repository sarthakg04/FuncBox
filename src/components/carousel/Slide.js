import React from "react";

const Slide = ({ data }) => {
  return (
    <div className="container">
      {/* <h1>Hellow World</h1> */}
      <div className="image-div">
        <img width="550px" src={data.image} alt="image" />
      </div>
      <div className="text-div">
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Slide;
