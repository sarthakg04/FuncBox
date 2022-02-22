import React from 'react'
import './TeamsPage.css'

import Navbar from '../Navbar/Navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Footer from '../Footer/Footer'

export default function TeamsPage() {
    return (
        <div>
            <Navbar/>
            <h1 className='Heading' style={{margin: "10px 0 20px 20px"}}>BUILD WITH US</h1>
            <LazyLoadImage className="TeamsImg" src="https://ik.imagekit.io/funcboxImages/TeamsPage/teams_DJWcwmp0P.png?updatedAt=1633445213862" alt="teams" />
            {/* <Footer/> */}
        </div>
    )
}
