import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import avatar from "../../assets/avatar.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={avatar} className="logo" />
        </Link>
      </div>
      <nav className="nav">
        {/* <div><Link to="/">Home</Link></div> */}
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/projects">Project</Link>
        </div>
        <div>
          <Link to="/bookmark">Bookmark</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/music">Music</Link>
        </div>
        {/* <div>
          <Link to="/contact">Contact</Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
