import React from 'react'
import AppNavbar from '../Route/AppNavbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <AppNavbar/>
            <body>
            <div className="cont">
                    <img className="pic" src="couverture.jpg" alt="No image"/>
                    <h1 className="h1">How I am ?</h1>
                    <p className="bio" style={{fontFamily:"Roboto",color:"white", textAlign:"justify", marginLeft:"auto", marginRight:"auto"}}>
                    Originally from the city of Nabeul located in the north west of Tunisia, 
                    Kabrera is imbued with his North African roots but also Latin from his Spanish mother.
                    A musicality as spicy as it is ecletic, blending R&B and Hip-Hop tones. 
                    His music is a hovering and turbulent journey between dreams, frustrations and different states of mind.
                    </p>
                </div>
            </body>
            <Footer/>
        </div>
    )
}

export default Home
