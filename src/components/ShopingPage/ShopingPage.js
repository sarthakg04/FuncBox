import React from 'react';
import Navbar from '../Navbar/Navbar';
import PriceCard from '../PriceCard/PriceCard';
import './ShopingPage.css';
import insta from './assets/insta.svg';
import cloud from './assets/clouds.svg';
import sicon from './assets/sicon.svg';
import rocket from './assets/rocket.png';
import trolley from './assets/trolley.svg';

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
            {/* <Navbar/> */}
            <div className="shop-header">
            <div className="">
            </div>
            <img src={sicon} alt="" className="shop-icon" />
            <img src={trolley} alt="" className="trolley" />
            </div>
            <div className="prices">
                <PriceCard
                    Heading = "Plan 1"
                    Color = "red"
                    Feature_1 = "Features of plan 1"
                    Feature_2 = "Feature"
                    Feature_3 = "Feature"
                    Feature_4 = "Feature"
                    Feature_5 = "Feature"
                />
                <PriceCard
                    Heading = "Plan 2"
                    Color = "yellow"
                    Feature_1 = "Features of plan 2"
                    Feature_2 = "Feature"
                    Feature_3 = "Feature"
                    Feature_4 = "Feature"
                    Feature_5 = "Feature"
                />
                <PriceCard
                    Heading = "Plan 3"
                    Color = "green"
                    Feature_1 = "Features of plan 3"
                    Feature_2 = "Feature"
                    Feature_3 = "Feature"
                    Feature_4 = "Feature"
                    Feature_5 = "Feature"
                />
            </div>
            <div style={{backgroundImage: `url(${cloud})`}} className="footer">
            <img src={rocket} alt="" className="rocket" />
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
