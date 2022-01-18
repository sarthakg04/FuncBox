import React from "react";
import "./howwework.css";

import child from "./assests/child.png";
import incredibles from "./assests/incredibles.png";
import mypackage from "./assests/package.png";
import parents from "./assests/parents.png";
import rocket from "./assests/rocket.png";
import van from "./assests/van.png";
import Vector from "./assests/Vector.png";
import Vector_center from "./assests/Vector_center.png";


const HowWeWork = () => {
  return (
    <div className="how-we-work">
      <div className="Main">
        {/* VECTOR IMAMGES */}

        <h1 className="heading">How we work</h1>
        <div className="Vector_center">
          <img src={Vector_center} alt="" />
        </div>
        <div className="Vector1">
          <img src={Vector} alt="" />
        </div>
        <div className="Vector2">
          <img src={Vector} alt="" />
        </div>
        <div className="Vector3">
          <img src={Vector} alt="" />
        </div>
        <div className="Vector4">
          <img src={Vector} alt="" />
        </div>
        <div className="Vector5">
          <img src={Vector} alt="" />
        </div>
        <div className="Vector6">
          <img src={Vector} alt="" />
        </div>

        {/* SIDE IMAGES */}

        <div className="child">
          <img src={child} alt="" />
        </div>
        <div className="incredibles">
          <img src={incredibles} alt="" />
        </div>
        <div className="mypackage">
          <img src={mypackage} alt="" />
        </div>
        <div className="parents">
          <img src={parents} alt="" />
        </div>
        <div className="rocket">
          <img src={rocket} alt="" />
        </div>
        <div className="van">
          <img src={van} alt="" />
        </div>

        {/* STEPS IMAGES */}

        <div className="O1">
          O1
        </div>
        <div className="O2">
          O2
        </div>
        <div className="O3">
          O3
        </div>
        <div className="O4">
          O4
        </div>
        <div className="O5">
          O5
        </div>
        <div className="O6">
          O6
        </div>

        {/* STEPS TEXT */}

        <div className="step1">Place your order today</div>
        <div className="step2">Yay! Now it is on us</div>
        <div className="step3">FuncBox arrives</div>
        <div className="step4">Start Coding</div>
        <div className="step5">Ideate your own apps</div>
        <div className="step6">Deploy!</div>
      </div>
    </div>
  );
};

export default HowWeWork;
