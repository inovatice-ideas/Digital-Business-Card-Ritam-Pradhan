import React from "react"
import ReactDOM from "react-dom"
import ProfilePic from "./ProfilePic"
import Profile from "./Profile"
import Card from "./Card"
import "./index.css"

function Frame() {
    return (
        <div className="frame-template">
            <Card />
        </div>
    );
}

export default Frame;