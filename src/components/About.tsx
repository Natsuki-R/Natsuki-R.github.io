import React from "react"
import "./About.css"
import slogan from "../assets/loveiswin.png"

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>someone who often spends 2 hours daydreaming under the sun.</p>
                    <p>live for aha moments — Naval Ravikant<br />connecting the dots — Steve Jobs</p>
                    <p>As the saying goes, <br />"If you want to manage something, keep track of it at first." <br />That’s why I build this site—to manage my time and my life.</p>
                </div>
                <div className="about-image">
                    <img src={slogan} alt="Your Name" />
                </div>
            </div>
        </section>
    )
}

export default About
