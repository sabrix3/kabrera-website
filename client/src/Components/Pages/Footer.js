import React from 'react'
import AppNavbar from '../Route/AppNavbar'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
                <footer className="footer" style={{position:"absolute",marginTop:"-55px"}}>
                <div>
                    <h2 style={{fontFamily:"Roboto", color:"white"}}>Follow</h2>
                </div>
                <div>
                <a href="https://www.facebook.com/kabreraofficial"><FaFacebookSquare className="socials" style={{fontSize:"2em",margin:"5px",color:"white"}}/></a>
                <a href="https://www.instagram.com/kabreraofficial/?hl=fr"><FaInstagramSquare className="socials" style={{fontSize:"2em",margin:"5px",color:"white"}}/></a>
                <a href="https://www.youtube.com/channel/UCjcHmW7-GTxjK5529XQTtPA"><FaYoutubeSquare className="socials" style={{fontSize:"2em",margin:"5px",color:"white"}}/></a>
                </div>
                <h6 style={{color:"white", fontFamily:"Roboto", fontSize:"0.4em", marginTop:"5px"}}>© 2020 KADISSIA RECORDS. ALL RIGHTS RESERVED.</h6>
                </footer>   
        </div>
    )
}

export default Footer
