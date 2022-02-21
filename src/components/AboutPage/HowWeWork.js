import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./howwework.css";


// import child from "./assets/child.png";
// import incredibles from "./assets/incredibles.png";
// import mypackage from "./assets/package.png";
// import parents from "./assets/parents.png";
// import rocket from "./assets/rocket.png";
// import van from "./assets/van.png";
// import Vector from "./assets/Vector.png";
// import Vector_center from "./assets/Vector_center.png";



const HowWeWork = () => {
  return (
      <div className="Main">
        {/* VECTOR IMAMGES */}

        <h1 className="heading">How we work</h1>
        <div className="Vector_center">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_center_zcq3tXrvw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000593" alt="" />
        </div>
        <div className="Vector1">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_BYCDUiogb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000316" alt="" />
        </div>
        <div className="Vector2">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_BYCDUiogb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000316" alt="" />
        </div>
        <div className="Vector3">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_BYCDUiogb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000316" alt="" />
        </div>
        <div className="Vector4">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_BYCDUiogb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000316" alt="" />
        </div>
        <div className="Vector5">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_BYCDUiogb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000316" alt="" />
        </div>
        <div className="Vector6">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/Vector_BYCDUiogb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000316" alt="" />
        </div>

        {/* SIDE IMAGES */}

        <div className="child">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/child_Tl0vXWaP6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645029997785" alt="" />
        </div>
        <div className="incredibles">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/incredibles_4J0jSyprT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645029998128" alt="" />
        </div>
        <div className="mypackage">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/package_SIdiLacRX7uF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645029998977" alt="" />
        </div>
        <div className="parents">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/parents_DqGLTiP9b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645029999154" alt="" />
        </div>
        <div className="rocket">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/rocket_GUYFaAeiG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645029999796" alt="" />
        </div>
        <div className="van">
          <LazyLoadImage src="https://ik.imagekit.io/funcboxImages/van_pt3a3bgKkzW4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000119" alt="" />
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
  );
};

export default HowWeWork;
