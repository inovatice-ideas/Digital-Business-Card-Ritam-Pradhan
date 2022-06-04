import React from "react"
import ReactDOM from "react-dom"
import ProfilePic from "./ProfilePic"
import Profile from "./Profile"
import "./Card.css"

function Card() {
    return (
        <div className="card-template">
            <ProfilePic />
            <Profile />
        </div>
    );
}

export default Card