import React from "react";
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
      <img className="left" src={require("../styles/left.webp")} alt="left" />
    </div>
  );
}
