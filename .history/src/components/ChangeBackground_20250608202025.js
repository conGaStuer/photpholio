import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/changebg.scss";
export default function ChangeBackground() {
  gsap.to(".circle-change", {});
  return (
    <div className="change-bg">
      <div className="circle-change c-left"></div>
      <div className="circle-change c-right"></div>
    </div>
  );
}
