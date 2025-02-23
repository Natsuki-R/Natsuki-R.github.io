import React from "react"
import "./Header.css"

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Natsuki</h1>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
