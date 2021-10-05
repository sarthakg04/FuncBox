import React , {useEffect} from 'react'
import {Helmet} from "react-helmet"


import './AboutPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


// import hero from './assets/hero.webp'
// import roadmap from './assets/roadmap.webp'

export default function AboutPage() {


  const hero = 'https://ik.imagekit.io/funcboxImages/AboutPage_assets/hero_iVNs8MUzFqB.png?updatedAt=1633369545951'
  const roadmap = 'https://ik.imagekit.io/funcboxImages/AboutPage_assets/roadmap_Lh7cVLgeYGE.png?updatedAt=1633369642977'


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
            <h1>FAQs</h1>
          </div>
          <div className="faq">
            <div className="question">
            <p>What is FuncBox?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> FuncBox is a box full of surprises with games, goodies, and app cards with an intelligent live code editor that enables your kid to make his fun and educational apps, play them on any device and even share them with their friends.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>How does FuncBox work?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer">It's Simple! A separate unique code is generated for every child which comes within the box. Using that code, The child can log in to the website and open the code editor. The child can select the game they want to make and then type in their code from the app cards and make their own game. Once they finish writing the code, they can play their game and even share it!</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What age group is FuncBox for?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> We make personalized boxes based on the grade of the student. FuncBox is perfect for the age group 6-14 years. (ie Grade 1 to Grade 7)</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What kind of Computer do kids need to use FuncBox?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Any computer or laptop with a web browser is all they need. We run on a webpage that can be opened on any web browser. No complex tools to download or install.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>Can it work on a tablet or Ipad?</p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer"> Yes, Don't worry at all! We know kids love tablets. The code editor is perfectly designed for any tablet/Ipad/Laptop or PC.</p>
          </div>
          <div className="faq">
            <div className="question">
            <p>What language does FuncBox teaches? </p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer">It's Javascript! Nonetheless, it's not naked Javascript. We give a quick and painless library of programming orders, all painstakingly intended to be not difficult to type, simple to learn, and adaptable. </p>
          </div>
          <div className="faq">
            <div className="question">
            <p>Why Javascript? </p>
            <i class="fas fa-chevron-down"></i>
          </div>
            <p className="answer">Since it's ostensibly the most famous scripting language around. Javascript is perfect since it's the language of the web. Google, Facebook, Amazon, Instagram and Twitter are completely written in Javascript (undoubtedly somewhat). Javascript is likewise incredible in light of the fact that it's a nearby cousin to C, C++, Objective C, and Java, which are Big Important Languages utilized by the industry.</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
}
