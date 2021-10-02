import React from 'react'
import {Helmet} from "react-helmet"

import './LandingPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


import homepageimg from './assets/homepageimg.webp'
import downArrow from './assets/downArrow.svg'
import roadmap from './assets/roadmap.svg'
import howWorks from './assets/howWorks.png'
import logo from './assets/logo.svg'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'

export default function LandingPage() {
  return (
    <div>
      <Helmet>
            <title>Landing page</title>
            <meta
              name="description"
              content="this is the landing page description of funcbox company"
            />
            <meta
              name="keywords"
              content="education, online, coding, online coding, learn coding, e-learning, funcbox, programming for kids, programming"
            />
          </Helmet>
      <div className="landingPage__main">
          <Navbar
          home_check = {true}
          about_check =  {false}
          shop_check = {false}
          />
          <div className="hero__section">
            <div className="hero__image">
              <img src={homepageimg} alt="" />
            </div>
            <div className="downArrow">
              <img src={downArrow} alt="" />
            </div>
          </div>
          <div className="roadMap">
            <img src={roadmap} alt="" />
          </div>
          <div className="details">
            <div className="info">
              <p>Introduce your child to the world of Creative Thinking and Logic Building</p>
            </div>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="how__works">
            <img src={howWorks} alt="" />
          </div>
          <div className="individuals">
            <div className="left__container">
              <img src={img1} alt="" />
            </div>
            <div className="right__container">
              <h1>For Individuals</h1>
              <p>We at FuncBox aim to bring a interactive box with 6
                applications in it. To help your kid learn coding while
                playing.</p>
              <p>
                Want to make your kid standout from others? A monthly subscription of FuncBox brings new projects every month.
              </p>
              <p>
                “Coding as a team is a super fun way to spend time with
                your child.” Come Lets Build it together</p>
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="schools">
            <div className="left__container">
              <h1>For Schools</h1>
              <p>
                We at FuncBox aim to bring an exclusive element to make kids in the age group of 6-14 years learn concepts of Coding and Creative Thinking.
              </p>
              <p>
                We believe that this age is the best for the development of your child’s brain. We bring a non traditional method of teaching students from a Do it yourself Kit. Where they create, write, develop and deploy their own computer apps.
              </p>
              <p>
                Dont worry we dont make them mug up code.
              </p>
              <p>
                Bring a new dimension to teaching at your school.
              </p>
              <a href="https://forms.gle/TxefVyHrnWj1doSL7" target="_blank">Connect</a>
            </div>
            <div className="right__container">
              <img src={img2} alt="" />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
  )
}
