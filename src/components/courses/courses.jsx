import React from "react";
import './courses.css'

const Courses = () => {
    return(
        <div className="courses">
            <div className="courses-title">
                <h2>Let's check our courses</h2>
            </div>

            <div className="courses-cards">
                <div className="card-course" id="card-course-1">
                    <h1>Business</h1>
                    <img src="/adm-card.png" alt="" />
                </div>
                <div className="card-course" id="card-course-2">
                    <h1>Acting and Drama</h1>
                    <img src="/teatro-card.png" alt="" />
                </div>
                <div className="card-course" id="card-course-3">
                    <h1>Technology and programming</h1>
                    <img src="/ti-card.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Courses