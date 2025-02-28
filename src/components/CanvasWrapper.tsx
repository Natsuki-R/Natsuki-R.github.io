import React from "react";
import Canvas from "./canvas/Canvas";
import "./CanvasWrapper.css";
import avatar from "../assets/avatar.png";

const CanvasWrapper: React.FC = () => {
  return (
    <div className="canvas-container">
      <div className="logo-container">
        <a href="/home">
          <img src={avatar} className="logo" />
        </a>
        <p>See More</p>
      </div>
      <Canvas />
    </div>
  );
};

export default CanvasWrapper;
