import React from "react"
import ReactDOM from "react-dom"
import ProfilePic from "./ProfilePic"
import Profile from "./Profile"
import About from "./About"
import Footer from "./Footer"
import Interest from "./Interests"
import "./index.css"

function Card() {
    return (
        <div className="card-template">
            <ProfilePic />
            <div className="bio-data">
                <Profile />
                <About />
                <Interest />
            </div>
            <Footer />
        </div>
    );
}

export default Card;