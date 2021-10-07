import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './Footer.css'
import { Link } from 'react-router-dom'


// import bell from "./assets/bell.png"
// import fb from "./assets/fb.svg"
// import linked from "./assets/linked.svg"
// import insta from "./assets/insta.svg"

export default function Footer() {



    const bell = "https://ik.imagekit.io/funcboxImages/Footer_assets/bell_gFHth6UrGbt.png?updatedAt=1633351576358"
    const fb = "https://ik.imagekit.io/funcboxImages/Footer_assets/fb_1loztYmLx.png?updatedAt=1633369897725"
    const linked = "https://ik.imagekit.io/funcboxImages/Footer_assets/linked_VElNZJlpu.png?updatedAt=1633369896020"
    const insta = "https://ik.imagekit.io/funcboxImages/Footer_assets/insta_ESr1g9XOwSQ.png?updatedAt=1633369896765"



    const [getInTouchEmail,setGetInTouchEmail] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault()
        // alert(`We will reach you out at ${getInTouchEmail}`);
        const data = axios.get(`https://salty-escarpment-75223.herokuapp.com/email/${getInTouchEmail}`);
        // console.log(data)
        setGetInTouchEmail('')
    }

    // useEffect(async () => {


    // },[]);

    return (
        <div>
            <div className="footer">
            <div className="getInTouch">
                <p>Get in Touch</p>
                <div className='input'>
                {/* <form onSubmit={handleSubmit}> */}
                    <input type="email" name="email" value={getInTouchEmail} onChange = { e => setGetInTouchEmail(e.target.value) }/>
                    <button onClick={handleSubmit} className="Notification_btn" style={{background: `url(${bell}) no-repeat center`, minWidth:"30px", minHeight: "30px"}} type="submit"></button>
                {/* </form> */}
                </div>
            </div>
            <div className="madeWith">
                <Link to='/TeamsPage'>
                <p>Made With ❤️  by Team FuncBox </p>
                </Link>
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
