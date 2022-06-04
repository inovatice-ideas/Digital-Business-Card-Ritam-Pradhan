import React from "react"
import ReactDOM from "react-dom"
import profilePic from "../src/images/profile_pic.jpg"
import "./ProfilePic.css"

function ProfilePic() {
    return (
        <div className="profile-section">
            <img className="profile-pic" src={profilePic} />
        </div>
    );
}

export default ProfilePic;