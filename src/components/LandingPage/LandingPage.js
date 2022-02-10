import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./LandingPage.css";
import Navbar from "../Navbar/Navbar";
import Container from "../FlippableCard/Container";
import Ribbon from "./Ribbon";
import Footer from "../Footer/Footer";
import ImageSlider from "../carousel/ImageSlider";
import { SLIDER_DATA } from "../carousel/SliderData";
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
  const homepageimg =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/homepageimg_eAE7Ev4l4.webp?updatedAt=1633350407186";
  const downArrow =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/downarrow_g0iGjpCkA.png?updatedAt=1633370520165";
  const roadmap =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/roadmap_dQ8uqJcgYEn.png?updatedAt=1633358515221";
  const howWorks =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/howWorks_d9jnCExuqeK.png?updatedAt=1633350408220";
  const logo =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/logo_OosTCu13D.png?updatedAt=1633358560424";
  const img1 =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/img1_oY6UgmjUV.png?updatedAt=1633350409016";
  const img2 =
    "https://ik.imagekit.io/funcboxImages/LandingPage_assets/img2_WF1sZcUIzJu.png?updatedAt=1633350410095";
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
            <img src={Left} alt="" className="left" />
            <img src={Monkey} alt="" className="right" />
          </div>
        </div>

        {/* <div className="hero__section">
          <div className="hero__image">
            <img src={homepageimg} alt="" />
          </div>
          <div className="downArrow">
            <img src={downArrow} alt="" />
          </div>
        </div> */}
        <div className="details">
          <div className="info">
            <strong>
              Introduce your child to the world of Creative Thinking and Logic
              Building
            </strong>
          </div>

          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <ImageSlider slides={SLIDER_DATA} />
        <Container />
        <div className="creativity_div">
          <h2>Why at an Early Age?</h2>
          <div className="creativity_container">
            <div className="creativity_text">
              <h2 className="creativity_text_heading">Creativity x Age</h2>
              <p>
                According to research, children's creativity peaks at the age of
                six, then gradually declines as they get older.
              </p>
            </div>
            <img
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
          <img src={roadmap} alt="" />
        </div>
        <div className="roadMap_mobile">
          <img src={roadmap_pic1} alt="" />
          <img src={roadmap_pic2} alt="" />
          <img src={roadmap_pic3} alt="" />
          <img src={roadmap_pic4} alt="" />
        </div>
        {/* <div className="details">
          <div className="info">
            <p>
              Introduce your child to the world of Creative Thinking and Logic
              Building
            </p>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div> */}
        {/* <div className="how__works">
          <img src={howWorks} alt="" />
        </div> */}

        <Ribbon color="#FFC71C">
          <p className="ribbon_text">Sign Up Today ! To Buy your own FuncBox</p>
          <Link to="/signup" className="ribbon_button signup_button">
            Sign Up
          </Link>
        </Ribbon>

        <div className="caution_div">
          <h2 className="caution_heading">
            <img
              style={{ margin: "10px", width: "30px" }}
              src="https://ik.imagekit.io/funcboxImages/LandingPage_assets/image_173_HVwwhVEcW.png?updatedAt=1640181516955"
              alt=""
            />
            Caution we make your kid smarter!
          </h2>
          <img
            className="caution_table"
            src="https://ik.imagekit.io/funcboxImages/LandingPage_assets/Group_322_SYX3ELAI4.png?updatedAt=1640182579849"
            alt=""
          />
          <img
            className="children_image"
            src="https://ik.imagekit.io/funcboxImages/LandingPage_assets/PikPng_1_tzVajvGOH.png?updatedAt=1640181381233"
            alt=""
          />
        </div>
        {/* <div className="individuals">
          <div className="left__container">
            <img src={img1} alt="" />
          </div>

          <div className="right__container">
            <h1>For Individuals</h1>
            <p>
              We at FuncBox aim to bring a interactive box with 6 applications
              in it. To help your kid learn coding while playing.
            </p>
            <p>
              Want to make your kid standout from others? A monthly subscription
              of FuncBox brings new projects every month.
            </p>
            <p>
              “Coding as a team is a super fun way to spend time with your
              child.” Come Lets Build it together
            </p>
            <a href="#">Buy Now</a>
          </div>
        </div> */}
        {/* <div className="schools">
          <div className="left__container">
            <h1>For Schools</h1>
            <p>
              We at FuncBox aim to bring an exclusive element to make kids in
              the age group of 6-14 years learn concepts of Coding and Creative
              Thinking.
            </p>
            <p>
              We believe that this age is the best for the development of your
              child’s brain. We bring a non traditional method of teaching
              students from a Do it yourself Kit. Where they create, write,
              develop and deploy their own computer apps.
            </p>
            <p>Dont worry we dont make them mug up code.</p>
            <p>Bring a new dimension to teaching at your school.</p>
            <a href="https://forms.gle/TxefVyHrnWj1doSL7" target="_blank">
              Connect
            </a>
          </div>
          <div className="right__container">
            <img src={img2} alt="" />
          </div>
        </div> */}

        <Footer />
      </div>
    </div>
  );
}
