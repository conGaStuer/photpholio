import React, { useRef, useEffect } from "react";
import "../styles/introtext.scss";
export default function IntroText() {
  return (
    <div>
      <div className="intro-text">
        <span>
          Tapping into devices' idle computational energy around the world to
          fuel a trust-native internet
        </span>
        <div className="">
          <button className="btn-bg">Discover now</button>
          <button>Enjoy my portfolio</button>
        </div>
      </div>
      <div className="svg">
        <img
          src={require("../styles/mouse.svg").default} // Use .default for Create React App
          alt="mouse"
          className="mouse"
        />
        <img
          src={require("../styles/mouse.svg").default} // Use .default for Create React App
          alt="mouse"
          className="mouse"
        />
      </div>
    </div>
  );
}
