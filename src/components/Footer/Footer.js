import React from 'react'

import './Footer.css'


import bell from "./assets/bell.png"
import fb from "./assets/fb.svg"
import linked from "./assets/linked.svg"
import insta from "./assets/insta.svg"

export default function Footer() {
    return (
        <div>
            <div className="footer">
            <div className="getInTouch">
                <p>Get in Touch</p>
                <div className='input'>
                <input type="text" name="email" />
                <img src={bell} alt="bell" />
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
