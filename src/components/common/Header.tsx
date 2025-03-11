import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import avatar from "../../assets/avatar.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    // Toggle overflow on App div
    const appElement = document.querySelector(".App");
    if (appElement) {
      if (newMenuState) {
        appElement.classList.add("menu-open");
      } else {
        appElement.classList.remove("menu-open");
      }
    }
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        const appElement = document.querySelector(".App");
        if (appElement) {
          appElement.classList.remove("menu-open");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up when component unmounts
      const appElement = document.querySelector(".App");
      if (appElement) {
        appElement.classList.remove("menu-open");
      }
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={avatar} className="logo" alt="Logo" />
        </Link>
      </div>

      <button
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <div>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </div>
        <div>
          <Link to="/bookmark" onClick={() => setIsMenuOpen(false)}>
            Bookmark
          </Link>
        </div>
        <div>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
        </div>
        <div>
          <Link to="/music" onClick={() => setIsMenuOpen(false)}>
            Music
          </Link>
        </div>
        <div>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Project
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
