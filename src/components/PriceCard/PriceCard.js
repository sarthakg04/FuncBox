import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './PriceCard.css';

export default function PriceCard(props) {

    const {
        Heading,
        Color,
        Feature_1,
        Feature_2,
        Feature_3,
        Feature_4,
        Feature_5,
     } = props
    
    const [cart, setCart] = useState(1);
    const [counterDisplay, setCounterDisplay] = useState(false);
    const [AddToCartDisplay, setAddToDisplay] = useState(true);


    const handleAddToCart = () => {
        setCounterDisplay(true);
        setAddToDisplay(false);
    }

    const counterDecrement = () => {
        if(cart>0) {
            setCart(cart-1);
        }
    }

    const counterIncrement = () => {
        setCart(cart+1);
    }

    return (
        <div>
            <div className="plan">
                <div className="plan-container">
                <div className={"plan-details "+ Color }>
                    <div className="heading">
                    <h2>{Heading}</h2>
                    </div>
                    <div className="details">
                    <ul>
                        <li>
                        {Feature_1}
                        </li>
                        <li>
                        {Feature_2}
                        </li>
                        <li>
                        {Feature_3}
                        </li>
                        <li>
                        {Feature_4}
                        </li>
                        <li>
                        {Feature_5}
                        </li>
                    </ul>
                    </div>
                    <div className="add-to-cart">

                    <button 
                    className = {Color + ' Cart_btn'}
                    style={{ display: AddToCartDisplay ? 'block' : 'none',
                    color: 'white',
                    paddingLeft: "85%"
                    // position: 'relative',
                    // left: '85%'
                     }} 
                    onClick={handleAddToCart}
                    >
                        Add To Cart
                    </button>

                    <div style={{display: counterDisplay ? 'block' : 'none' }} className="Cart-Counter">
                        <button style={{color: 'white', padding: "0 5px 0 5px"}} className = {Color + ' Cart_btn'} onClick={counterDecrement}>-</button>
                        <span>{cart}</span>
                        <button style={{color: 'white', padding: "0 5px 0 5px"}} className = {Color + ' Cart_btn'} onClick={counterIncrement}>+</button>
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
        </div>
    )
}
