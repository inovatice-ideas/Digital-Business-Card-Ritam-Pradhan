import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import twitterIcon from "./images/twitter_icon.png"
import facebookIcon from "./images/facebook_icon.png"
import instagramIcon from "./images/instagram_icon.png"
import linkedinIcon from "./images/linkedin_icon.png"
import githubIcon from "./images/github_icon.png"

function Footer() {
    return (
        <div className="footer-frame">
            <a href="https://twitter.com/deep_fantasy06"><img className="icon" src = {twitterIcon} /></a>
            <a href="https://www.facebook.com/profile.php?id=100006847305970"><img className="icon" src = {facebookIcon} /></a>
            <a href="https://www.instagram.com/deep_fantasy_0602/"><img className="icon" src = {instagramIcon} /></a>
            <a href="https://www.linkedin.com/in/ritam-pradhan-73283020a/"><img className="icon" src = {linkedinIcon} /></a>
            <a href="https://github.com/inovatice-ideas"><img className="icon" src = {githubIcon} /></a>
        </div>
    );
}

export default Footer;