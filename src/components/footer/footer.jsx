import React from "react";
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="/logo-sem-fundo-branco.png" alt="" />
                <div className="footer-icons">
                    <a href=""><FaPhoneAlt /></a>
                    <a href=""><FaGoogle /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaYoutube /></a>
                </div>
            </div>

            <div className="footer-nav">
                <div className="collum-footer">
                    <h2>Contact</h2>
                    <p>Wingardium</p>
                    <p>Leviosa</p>
                    <p>Is not</p>
                    <p>Like that</p>
                </div>

                <div className="collum-footer">
                    <h2>About you</h2>
                    <p>Wingardium</p>
                    <p>Leviosa</p>
                </div>

                <div className="collum">
                    <h2>Join us</h2>
                    <p>Wingardium</p>
                    <p>Leviosa</p>
                    <p>Is not</p>
                </div>
            </div>
        </div>
    )
}

export default Footer