import React, { useRef } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger); // <-- Cái này là bắt buộc
  const container = useRef();

  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <img
        ref={container}
        className="center"
        src={require("../styles/retro1.jpg")}
        alt="right"
      />
    </div>
  );
}
