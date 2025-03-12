import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import avatar from "../../assets/avatar.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useRef(0);

  // Toggle menu state with a more robust approach
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    if (newMenuState) {
      // Store current scroll position
      scrollY.current = window.scrollY;

      // Apply styles to body
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY.current);
    }
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);

        // Restore scroll position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY.current);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      // Clean up when component unmounts
      if (isMenuOpen) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY.current);
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
