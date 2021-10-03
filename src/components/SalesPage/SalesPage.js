import React from 'react'
import {Helmet} from "react-helmet"

import './SalesPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import kids from './assets/kids.svg'
import box from './assets/boxsvg.svg'
import van from './assets/van.svg'
import new_pic from './assets/new.svg'
import check from './assets/check.svg'
import house from './assets/house.svg'

export default function SalesPage() {
    return (
            <div>
                <Helmet>
                    <title>FuncBox - Shop</title>
                    <meta
                      name="description"
                      content="Funcbox provides an interactive box that teaches grade schoolers how to program apps. Hurry! Buy your own Funcbox Today"
                    />
                    <meta
                      name="keywords"
                      content="Coding for kids, ELearning, FuncBox, Coding, programming, STEM, Kids, Children, Buy Funcbox"
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
                about_check =  {false}
                shop_check = {true}
                />
            <div className="salesPage__main">
            <div className="hero__section">
            <div className="left__section">
                <img src={kids} alt="kids" />
            </div>
            <div className="right__section">
                <i className="fa-solid fa-cart-shopping" />
                <img src={box} alt="box" className="background__img" />
                <div className="content">
                <p className="title">FuncBox is a box full of surprises which will teach you education concepts and coding with a revolutionary twist.</p>
                <p><i class="fas fa-chevron-right"></i> Perfect for age-group 6-14 years.</p>
                <p><i class="fas fa-chevron-right"></i> Build your own fun game</p>
                <p><i class="fas fa-chevron-right"></i> Learn to code and explore.</p>
                <p><i class="fas fa-chevron-right"></i> Share your game with your friends.</p>
                </div>
            </div>
            </div>
            <div className="features">
            <div className="feature">
                <img src={van} alt="van" />
                <p>Free Shipping</p>
            </div>
            <div className="feature">
                <img src={new_pic} alt="new_pic" />
                <p>New Theme Every Month</p>
            </div>
            <div className="feature">
                <img src={check} alt="check" />
                <p>Cancel Anytime</p>
            </div>
            </div>

            <div class="marquee">
              <marquee direction="left" height="100px">
  We are not accepting any orders Due to COVID-19 restrictions.
  </marquee>
            </div>

            <div className="prices__heading">
            <h1>Our Plans</h1>
            <p>All of these Box types will be customised as per student grade</p>
            </div>
            <div className="prices">
            <div className="plan">
                <div className="plan-container">
                <div className="plan-details red">
                    <div className="heading">
                    <h2>Plan 1</h2>
                    </div>
                    <div className="details">
                    <ul>
                        <li>
                          • FuncBox Binder
                        </li>
                        <li>
                        • 3 mathematical apps
                        </li>
                        <li>
                        • 3 scientific apps
                        </li>
                        <li>
                        • 3 game apps
                        </li>
                        <li>
                        • Stickers
                        </li>
                        <li>
                        • Kickstart guide
                        </li>
                        <li>
                        • Interactive website
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Basic</h1>
                    <div className="price">
                    <p>Rs. 799/-</p>
                    <p className="atc">Add to Cart <span><i className="fas fa-shopping-cart" /></span> </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="plan">
                <div className="plan-container">
                <div className="plan-details yellow">
                    <div className="heading">
                    <h2>Plan 2</h2>
                    </div>
                    <div className="details">
                    <ul>
                      <li>
                        • FuncBox Binder
                      </li>
                      <li>
                      • 5 mathematical apps
                      </li>
                      <li>
                      • 5 scientific apps
                      </li>
                      <li>
                      • 5 game apps
                      </li>

                      <li>
                      • Stickers
                      </li>
                      <li>
                      • Mini fun deck
                      </li>
                      <li>
                      • Kickstart guide
                      </li>
                      <li>
                      • Interactive website
                      </li>
                    </ul>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Delux</h1>
                    <div className="price">
                    <p>Rs. 1199/-</p>
                    <p className="atc">Add to Cart <span><i className="fas fa-shopping-cart" /></span> </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="plan">
                <div className="plan-container">
                <div className="plan-details green">
                    <div className="heading">
                    <h2>Plan 3</h2>
                    </div>
                    <div className="details">
                    <ul>
                        <li>
                          • FuncBox Binder
                        </li>
                        <li>
                        • 8 mathematical apps
                        </li>
                        <li>
                        • 8 scientific apps
                        </li>
                        <li>
                        • 8 game apps
                        </li>
                        <li>
                        • 2 Surprise goodies
                        </li>
                        <li>
                        • Mystery toy
                        </li>
                        <li>
                        • Stickers
                        </li>
                        <li>
                        • Mini fun deck
                        </li>
                        <li>
                        • Kickstart guide
                        </li>
                        <li>
                        • Interactive website
                        </li>
                      </ul>

                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Premium</h1>
                    <div className="price">
                    <p>Rs. 1499/-</p>
                    <p className="atc">Add to Cart <span><i className="fas fa-shopping-cart" /></span> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="for__school">
            <div className="heading">
                <h1> For Schools </h1>
            </div>
            <div className="content">
                <img src={house} alt="house" />
                <div className="contentt">
                <p>Yay! FuncBox brings special discount for all the School Tie-ups. FuncBox can be easily incorporated in all the school grades. To make your students outperform and help your institute gain an edge over the others contact our team NOW!</p>
                <a href="https://forms.gle/TxefVyHrnWj1doSL7" target="_blank">Connect Today</a>
                </div>
            </div>
            </div>
            <Footer/>
      </div>
            </div>
    )
}
