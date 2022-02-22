import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./LandingPage.css";
import Navbar from "../Navbar/Navbar";
import Container from "../FlippableCard/Container";
import Ribbon from "./Ribbon";
import Footer from "../Footer/Footer";
import Example from "../VideoEmbed/Example";
import FrontTable from "../FrontTable/FrontTable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "./Carousel/CarouselComp";

// import Monkey from "../../assets.monkey.png"
// import Left from "../../assets.left.png"
// import downArrow from './assets/downArrow.svg'
// import roadmap from './assets/roadmap.svg'
// import howWorks from './assets/howWorks.png'
// import logo from './assets/logo.svg'
// import img1 from './assets/img1.png'
// import img2 from './assets/img2.png'

export default function LandingPage() {
  const Monkey =
    "https://ik.imagekit.io/funcboxImages/landing_page_monkey.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644310058601";
  const Left =
    "https://ik.imagekit.io/funcboxImages/landing_page_box.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644310106601";

  const roadmap =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/roadmap_dQ8uqJcgYEn.png?updatedAt=1633358515221";
  const logo =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/logo_OosTCu13D.png?updatedAt=1633358560424";
  const roadmap_pic1 =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/Group_236_dxE9XupeRdb.png?updatedAt=1636468991313";
  const roadmap_pic2 =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/Group_246_HHLbr4Ze-.png?updatedAt=1635786706331";
  const roadmap_pic3 =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/Group_237_cC4WV8E3_jn.png?updatedAt=1635786775387";
  const roadmap_pic4 =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/Group_238_WAVuVoX6QBy.png?updatedAt=1635786962987";

  return (
    <div>
      <Helmet>
        <title>FuncBox - Coding for Kids</title>
        <meta
          name="description"
          content="FuncBox brings a small box full of creative app cards which will help your kid learn to Code, Build and Share Apps"
        />
        <meta
          name="keywords"
          content="Coding for kids, ELearning, FuncBox, Coding, programming, STEM, Kids, Children"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Team Funcbox" />
      </Helmet>

      <div className="landingPage__main">
        <div id="top"></div>
        <Navbar home_check={true} about_check={false} shop_check={false} />
        <div className="Landing_container">
          <div className="upper">
            <div className="text">
              <h1>Introducing Coding for Kids</h1>
              <h3>Order your first FuncBox Today! </h3>
            </div>
            <div className="btn">
              <Link to="/SalesPage">
                <button>Buy Now!</button>
              </Link>
            </div>
          </div>

          <div className="lower">
            <LazyLoadImage src={Left} alt="" className="left" />
            <LazyLoadImage src={Monkey} alt="" className="right" />
          </div>
        </div>

        <div className="details">
          <div className="info">
            <strong>
              Introduce your child to the world of Creative Thinking and Logic
              Building
            </strong>
          </div>

          <div className="logo">
            <LazyLoadImage src={logo} alt="" />
          </div>
        </div>
        <Example />

        <div id="bottom"></div>
        <Ribbon color="#FFD830">
          <p
            className="ribbon_text carousel_text"
            style={{ textAlign: "center", height: "fit-content" }}
          >
            {" "}
            Build Games and Apps on the Concepts taught in your Classroom with
            Coding
          </p>
        </Ribbon>
        <Carousel />
        {/* <Container /> */}
        <div className="creativity_div">
          <h2 className="roadmap_heading">Why at an Early Age?</h2>
          <div className="creativity_container">
            <div className="creativity_text">
              <h2 className="creativity_text_heading">Creativity x Age</h2>
              <p>
                According to research, children's creativity peaks at the age of
                six, then gradually declines as they get older.
              </p>
            </div>
            <LazyLoadImage
              className="creativity_graph"
              src="https://ik.imagekit.io/funcboxImages/LandingPage_assets/Group_263_zvKZQY0-9.png?updatedAt=1640177452938"
              alt=""
            />
          </div>
        </div>

        <Ribbon color="#7bdc0096">
          <p className="ribbon_text"> Get your FuncBox Today ! Hurry</p>
          <Link to="/salespage" className="ribbon_button buy_now_button">
            Buy Now
          </Link>
        </Ribbon>
        <h2 className="roadmap_heading">
          Teach Your Kid Concepts Like Never Before
        </h2>
        <div className="roadMap">
          <LazyLoadImage src={roadmap} alt="" />
        </div>
        <div className="roadMap_mobile">
          <LazyLoadImage src={roadmap_pic1} alt="" />
          <LazyLoadImage src={roadmap_pic2} alt="" />
          <LazyLoadImage src={roadmap_pic3} alt="" />
          <LazyLoadImage src={roadmap_pic4} alt="" />
        </div>

        <Ribbon color="#FFC71C">
          <p className="ribbon_text">Sign Up Today ! To Buy your own FuncBox</p>
          <Link to="/signup" className="ribbon_button signup_button">
            Sign Up
          </Link>
        </Ribbon>
        <div className="caution_div">
          <h2 className="caution_heading">
            <LazyLoadImage
              style={{ margin: "10px", width: "30px" }}
              src="https://ik.imagekit.io/funcboxImages/LandingPage_assets/image_173_HVwwhVEcW.png?updatedAt=1640181516955"
              alt=""
            />
            Caution we make your kid smarter!
          </h2>

          <FrontTable />
        </div>

        <Footer />
      </div>
    </div>
  );
}
