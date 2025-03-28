import React from "react";
import './home.css'
import { PiStudentBold } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";



const Home = () => {
    return(
        <div className="home">
            <div className="main-logo-home">
                <img src="/public/logo-sem-fundo-branco.png" alt=""/>
                <h1>Elddora University</h1>
                <p>THE CHARACTER OF SUCCESS</p>
            </div>

            <div className="cards-info-home">
                <div className="home-card">
                    <div className="card-icon">
                        <PiStudentBold size={15}/>
                    </div>
                    <div className="card-text">
                        <h2>Schoolarship</h2>
                        <p>The Eldora University values talent and dedication. We offer scholarships to support outstanding students on their academic journey.</p>
                    </div>
                </div>
                <div className="home-card">
                    <div className="card-icon">
                        <FaSchool size={15}/>
                    </div>
                    <div className="card-text">
                        <h2>Our campus</h2>
                        <p>The Eldora University campus is a vibrant community. Here, tradition meets innovation, surrounded by the serenity of nature. </p>
                    </div>
                </div>
                <div className="home-card">
                    <div className="card-icon">
                        <SiGoogleclassroom size={15}/>
                    </div>
                    <div className="card-text">
                        <h1>Programs</h1>
                        <p>Taught by experts, the classes combine theory and practice, fostering critical and creative learning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home