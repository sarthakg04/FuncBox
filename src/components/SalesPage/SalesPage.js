import React from 'react'
import './SalesPage.css'
import Navbar from '../Navbar/Navbar'

import kids from './assets/kids.svg'
import box from './assets/boxsvg.svg'
import van from './assets/van.svg'
import new_pic from './assets/new.svg'
import check from './assets/check.svg'
import house from './assets/house.svg'
import fb from './assets/fb.svg'
import linked from './assets/linked.svg'
import insta from './assets/insta.svg'
import bell from './assets/bell.png'

export default function SalesPage() {
    return (
            <div>
                <Navbar/>
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
                <p>Perfect for age-group 6-12 years.</p>
                <p>Perfect for age-group 6-12 years.</p>
                <p>Perfect for age-group 6-12 years.</p>
                <p>Perfect for age-group 6-12 years.</p>
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
                    <h2>Basic</h2>
                    </div>
                    <div className="details">
                    <ul>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Price</h1>
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
                    <h2>Delux</h2>
                    </div>
                    <div className="details">
                    <ul>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Price</h1>
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
                    <h2>Premium</h2>
                    </div>
                    <div className="details">
                    <ul>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                        <li>
                        Feature
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Price</h1>
                    <div className="price">
                    <p>Rs. 1499/-</p>
                    <p className="atc">Add to Cart <span><i className="fas fa-shopping-cart" /></span> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="payment">
            <a href="#">Proceed To Payment</a>
            </div>
            <div className="for__school">
            <div className="heading">
                <h1> For Schools </h1>
            </div>
            <div className="content">
                <img src={house} alt="house" />
                <div className="contentt">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, adipisci. Ratione ad unde suscipit illo, explicabo aperiam eum laudantium ea quidem nesciunt distinctio enim ut fuga temporibus? Voluptatum, reiciendis, veniam.</p>
                <a href="#">Connect Today</a>
                </div>
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
                    <img src={fb} alt="" />
                </a>
                <a href="#">
                    <img src={linked} alt="" />
                </a>
                <a href="#">
                    <img src={insta} alt="" />
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
            </div>
    )
}
