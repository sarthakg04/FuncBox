import React , {useEffect} from 'react'
import './AboutPage.css'
import Navbar from '../Navbar/Navbar'


import hero from './assets/hero.webp'
import roadmap from './assets/roadmap.webp'
import bell from "./assets/bell.png"
import fb from "./assets/fb.svg"
import linked from "./assets/linked.svg"
import insta from "./assets/insta.svg"

export default function AboutPage() {

  useEffect(()=>{
    var dropdown = document.getElementsByClassName("question");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        var dropdownContent = this.nextElementSibling;
        this.getElementsByTagName('i')[0].classList.toggle('active')
        if (dropdownContent.style.maxHeight) {
          dropdownContent.style.maxHeight = null;
        } else {
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }
      });
    }
  },[]);

    return (
        <div className="aboutPage__main">
        <Navbar
        home_check = {false}
        about_check =  {true}
        shop_check = {false}
        />
        <div className="hero__section">
          <div className="about_heading">
          <h1>About us</h1>
          </div>
          <img src={hero} alt="hero" />
        </div>
        <div className="howWeWork">
          <h1>How we work</h1>
        </div>
        <div className="roadMap">
          <img src={roadmap} alt="roadmap" />
        </div>
        <div className="faqs">
          <div className="faq__heading">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age is Funcbox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Funcbox is designed for kids 6-12 years in age.</p>
          </div>
        </div>
        <div className="footer">
          <div className="getInTouch">
            <p>Get in Touch</p>
              <div className='input'>
              <input type="text" name="email" />
              <img src={bell} alt="" />
            </div>
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
