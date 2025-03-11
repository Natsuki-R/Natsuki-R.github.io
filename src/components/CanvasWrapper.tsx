import React from "react";
import Canvas from "./canvas/Canvas";
import "./CanvasWrapper.css";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

const CanvasWrapper: React.FC = () => {
  return (
    <div className="canvas-container">
      <div className="logo-container">
        <Link to="/about">
          <img src={avatar} className="logo" />
        </Link>
        <p>See More</p>
      </div>
      <Canvas />
    </div>
  );
};

export default CanvasWrapper;
