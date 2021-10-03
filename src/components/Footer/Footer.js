import React from 'react'
import { useState } from 'react'

import './Footer.css'


import bell from "./assets/bell.png"
import fb from "./assets/fb.svg"
import linked from "./assets/linked.svg"
import insta from "./assets/insta.svg"

export default function Footer() {

    const [getInTouchEmail,setGetInTouchEmail] = useState('');


    const handleSubmit = () => {
        alert(`We will reach you out at ${getInTouchEmail}`);
    }
    return (
        <div>
            <div className="footer">
            <div className="getInTouch">
                <p>Get in Touch</p>
                <div className='input'>
                <input type="email" name="email" onChange = { e => setGetInTouchEmail(e.target.value) }/>
                <button onClick={handleSubmit}><img src={bell} alt="bell" /></button>
                </div>
            </div>
            <div className="madeWith">
                <p>Made With ❤️  by Team FuncBox </p>
            </div>
            <div className="links">
                <div className="social">
                <a href="https://www.facebook.com/funcbox.edu" target="_blank">
                    <img src={fb} alt="fb" />
                </a>
                <a href="https://www.linkedin.com/company/funcbox" target="_blank">
                    <img src={linked} alt="linked" />
                </a>
                <a href="https://www.instagram.com/funcbox_edu/?utm_medium=copy_link" target="_blank">
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