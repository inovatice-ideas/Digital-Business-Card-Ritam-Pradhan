import React from "react"
import ReactDOM from "react-dom"
import mailIcon from "./images/mail_icon.png"
import "./index.css"

function Profile() {
    return (
        <div className="profile">
            <p className="info">Ritam Pradhan</p>
            <p className="info-designation">Frontend Developer</p>
            <p className="info-mobile">+91 6290473988</p>
            <a href="mailto:ritam.pradhan2002@gmail.com">
                <div className="email-button">
                    <img className="email-icon-pic" src={mailIcon} />
                    <p className="button-text">Email</p>
                </div>
            </a>
        </div>
    );
}

export default Profile;