import React from 'react'
import {Helmet} from "react-helmet"

import './LandingPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


// import downArrow from './assets/downArrow.svg'
// import roadmap from './assets/roadmap.svg'
// import howWorks from './assets/howWorks.png'
// import logo from './assets/logo.svg'
// import img1 from './assets/img1.png'
// import img2 from './assets/img2.png'

export default function LandingPage() {
  
  const homepageimg = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/homepageimg_eAE7Ev4l4.webp?updatedAt=1633350407186'
  const downArrow = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/downArrow_ERZrukLPOgq.svg?updatedAt=1633350406566'
  const roadmap = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/roadmap_KPBKbYICZ19.svg?updatedAt=1633350423096'
  const howWorks = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/howWorks_d9jnCExuqeK.png?updatedAt=1633350408220'
  const logo = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/logo_48r9sJgkg.svg?updatedAt=1633350411013'
  const img1 = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/img1_oY6UgmjUV.png?updatedAt=1633350409016'
  const img2 = 'https://ik.imagekit.io/funcboxImages/LandingPage_assets/img2_WF1sZcUIzJu.png?updatedAt=1633350410095'

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
            <meta 
              name="robots" 
              content="index, follow"
            />
            <meta 
              http-equiv="Content-Type" 
              content="text/html; charset=utf-8"
            />
            <meta 
              name="language" 
              content="English"
            />
            <meta 
              name="author" 
              content="Team Funcbox"
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
