import React from "react"
import { Link } from 'react-router-dom';
import "./Header.css"

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Natsuki</h1>
                <nav className="nav">
                    <div><Link to="/">About</Link></div>
                    <div><Link to="/music">Music</Link></div>
                    <div><Link to="/projects">Projects</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                </nav>
            </div>
        </header>
    )
}

export default Header
