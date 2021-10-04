import React from 'react'
import AppNavbar from '../Route/AppNavbar'
import Footer from './Footer'

const Music = () => {
    return (
        <div>
            <AppNavbar/>
            <body>
                <div className="cont">
                    <img className="pic" src="music.jpg" alt="No image"/>
                    <iframe className="music" src="https://open.spotify.com/embed/artist/7FUgWzO98P0v31ffbh7bwi?theme=0" width="30%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <iframe className="followspotify" src="https://open.spotify.com/follow/1/?uri=spotify:artist:7FUgWzO98P0v31ffbh7bwi&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>
                </div>
                
            </body>
            <Footer/>
        </div>
    )
}

export default Music
