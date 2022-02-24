import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./AboutPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HowWeWork from "./HowWeWork";
import { faqs } from "./FAQs";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import hero from './assets/hero.webp'
// import roadmap from './assets/roadmap.webp'

export default function AboutPage() {
  const toggleMe = (idx) => {
    var dropdown = document.getElementsByClassName("question");
    for (let i = 0; i < dropdown.length; i++) {
      if (i === idx) {
        dropdown[i].getElementsByTagName("i")[0].classList.toggle("active");
        let dropdownContent = dropdown[i].nextElementSibling;
        if (dropdownContent.style.maxHeight) {
          dropdownContent.style.maxHeight = null;
        } else {
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }
      } else {
        let dropdownContent = dropdown[i].nextElementSibling;
        dropdown[i].getElementsByTagName("i")[0].classList.remove("active");
        if (dropdownContent.style.maxHeight)
          dropdownContent.style.maxHeight = null;
      }
    }
  };

  return (
    <div className="aboutPage__main">
      <Helmet>
        <title>FuncBox - About</title>
        <meta
          name="description"
          content="Visit to know more about how we build the attitude of experimenting, creating and building your kid's first self-coded app"
        />
        <meta
          name="keywords"
          content="Coding for kids, ELearning, About FuncBox, Coding, programming, STEM, Kids, Children, Funcbox, Know More"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Team Funcbox" />
      </Helmet>
      <Navbar
        home_check={false}
        about_check={true}
        shop_check={false}
        login_check={false}
      />
      <div className="hero__section">
        <div className="about_main_container">
          <div className="about_container1">
            <LazyLoadImage
              className="yellowbg"
              src="https://ik.imagekit.io/funcboxImages/Yellowbg_3fQeycethMjO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645030000836"
              alt="bgimg"
            />
            <LazyLoadImage
              className="phoneimg"
              // src={Phoneimg}
              src="https://ik.imagekit.io/funcboxImages/Group_347_Rkkvzxdb3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645029860211"
              alt="phone"
            />
          </div>
          <div className="about_container2">
            <h1>About Us</h1>
            <p>
              We at FuncBox bring a small box full of creative app cards which
              will help your kid learn to code, build creative apps, type these
              codes themselves and also share the same within peers. We also
              provide a really interactive code editor where your kid will be
              guided to develop code.
            </p>
          </div>
        </div>
      </div>
      <div className="howWeWork__section">
        <HowWeWork />
      </div>

      <div className="faqs">
        <div className="faq__heading">
          <h1>FAQs</h1>
        </div>
        <div className="faq_questions">
          {faqs.map((faq, index) => (
            <div className="faq" key={index} onClick={() => toggleMe(index)}>
              <div className="question">
                <p>{faq.question}</p>
                <i className="fas fa-chevron-down"></i>
              </div>
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
