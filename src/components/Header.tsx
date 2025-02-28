import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import profile from "../assets/profile.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <a href="/">
          <img src={profile} className="logo" alt="Vite logo" />
        </a>
      </div>
      <nav className="nav">
        {/* <div><Link to="/">Home</Link></div> */}
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/music">Music</Link>
        </div>
        <div>
          <Link to="/bookmark">Bookmark</Link>
        </div>
        {/* <div>
          <Link to="/projects">Projects</Link>
        </div> */}
        {/* <div>
          <Link to="/contact">Contact</Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
