import React from 'react';
import Navbar from '../Navbar/Navbar';
import PriceCard from '../PriceCard/PriceCard';
import './ShopingPage.css';
import insta from './assets/insta.svg';
import cloud from './assets/clouds.svg';
import { counter } from '@fortawesome/fontawesome-svg-core';

export default function ShopingPage() {


    // const [cart, setCart] = useState(1);
    // const [counterDisplay, setCounterDisplay] = useState(false);
    // const [AddToCartDisplay, setAddToDisplay] = useState(true);


    // const handleAddToCart = () => {
    //     setCounterDisplay(true);
    //     setAddToDisplay(false);
    // }

    // const counterDecrement = () => {
    //     if(cart>0) {
    //         setCart(cart-1);
    //     }
    // }

    // const counterIncrement = () => {
    //     setCart(cart+1);
    // }


    return (
        <div>
            <Navbar/>
            <div className="shop-header">
            <div className="">
            </div>
            <img src="sicon.svg" alt="" className="shop-icon" />
            <img src="trolley.svg" alt="" className="trolley" />
            </div>
            <div className="prices">
                <PriceCard
                    Heading = "Plan 1"
                    Color = "red"
                />
                <PriceCard
                    Heading = "Plan 2"
                    Color = "yellow"
                />
                <PriceCard
                    Heading = "Plan 3"
                    Color = "green"
                />
            {/* <div className="plan">
                <div className="plan-container">
                <div className="plan-details red">
                    <div className="heading">
                    <h2>Plan 1</h2>
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
                    <div className="add-to-cart">
                    <a href="#">Add To Cart</a>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Price</h1>
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
                    <div className="add-to-cart">
                    <button style={{display: AddToCartDisplay ? 'block' : 'none' }} onClick={handleAddToCart}>Add To Cart</button>
                    <div style={{display: counterDisplay ? 'block' : 'none' }} className="Cart-Counter">
                        <button onClick={counterDecrement}>-</button>
                        <span>{cart}</span>
                        <button onClick={counterIncrement}>+</button>
                    </div>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Price</h1>
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
                    <div className="add-to-cart" id="add">
                    <a href="#">Add To Cart</a>
                    </div>
                </div>
                <div className="black">
                </div>
                <div className="plan-cover">
                    <h1>Price</h1>
                </div>
                </div> 
                </div> */}
            </div>
            <div style={{backgroundImage: `url(${cloud})`}} className="footer">
            <img src="rocket.png" alt="" className="rocket" />
            <div className="margin">
                <p>hello</p>
            </div>
            <div className="text">
                <div className="icons">
                <img src={insta} alt="insta" />
                <img src={insta} alt="" />
                <img src={insta} alt="" />
                </div>
                <p>	© 2021, FuncBox India, Inc. All reserved copyright</p>
            </div>
            </div>
        </div>
    )
}
