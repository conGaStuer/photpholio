import React, { useRef, useEffect } from "react";
import "../styles/introtext.scss";
import MouseSvg from "../styles/mouse.svg"; // Import SVG as component
export default function IntroText() {
  const mouseRef = useRef(null); // Ref for SVG
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
      <img src={require("../styles/mouse.svg")} alt="mouse" className="mouse" />
    </div>
  );
}
