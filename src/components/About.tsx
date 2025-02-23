import React from "react"
import "./About.css"
import slogan from "../assets/loveiswin.png"

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm a passionate web developer with experience in React and modern web technologies. I love creating intuitive and efficient user interfaces.
                    </p>
                    <p>
                        When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the kitchen.
                    </p>
                </div>
                <div className="about-image">
                    <img src={slogan} alt="Your Name" />
                </div>
            </div>
        </section>
    )
}

export default About
