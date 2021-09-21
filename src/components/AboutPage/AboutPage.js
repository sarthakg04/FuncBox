import React from 'react'
import './AboutPage.css'
import Navbar from '../Navbar/Navbar'


import hero from './assets/hero.svg'
import roadmap from './assets/roadmap.png'
import bell from "./assets/bell.png"
import fb from "./assets/fb.svg"
import linked from "./assets/linked.svg"
import insta from "./assets/insta.svg"

export default function AboutPage() {
    return (
        <div className="landingPage__main">
        <Navbar/>
        <div className="hero__section">
          <h1>About us</h1>
          <img src={hero} alt="hero" />
        </div>
        <div className="howWeWork">
          <h1>How we work</h1>
        </div>
        <div className="roadMap">
          <img src={roadmap} alt="roadmap" />
        </div>
        <div className="faqs">
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <p>What age is Funcbox for?</p>
            <p> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
        </div>
        <div className="footer">
          <div className="getInTouch">
            <p>Get in Touch</p>
            <input type="text" name="email" defaultValue />
            <img src={bell} alt="bell" />
          </div>
          <div className="madeWith">
            <p>Made With ❤️  by Team FuncBox </p>
          </div>
          <div className="links">
            <div className="social">
              <a href="#">
                <img src={fb} alt="fb" />
              </a>
              <a href="#">
                <img src={linked} alt="linked" />
              </a>
              <a href="#">
                <img src={insta} alt="insta" />
              </a>
            </div>
            <div className="terms">
              <ul>
                <li>
                  <a href="#">Join our Team</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
