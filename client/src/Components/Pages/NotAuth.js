import React from 'react'
import { Link } from 'react-router-dom'
import AppNavbar from '../Route/AppNavbar'
import Footer from './Footer'

const NotAuth = () => {
    return (
        <div>
            <body>
            <AppNavbar/>
            <div className="cont">
            <img className="pic" src="Couverture.jpg" alt="No image"/>
            <div className="noaccess" style={{fontFamily:"Roboto", }}>
            <h2 style={{color:"white"}}> Sorry, you don't have access to this section</h2>
            <Link to='/' style={{color:"white"}}> Back to home page</Link>
            </div>
            </div>
            </body>
            <Footer/>
        </div>
    )
}

export default NotAuth
