import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/changebg.scss";
export default function ChangeBackground() {
  gsap.to(".circle", {});
  return (
    <div className="change-bg">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
}
