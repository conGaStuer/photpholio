import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/changebg.scss";
export default function ChangeBackground() {
  gsap.to(".c-left", {
    x: 200,
    scrollTrigger: {
      trigger: ".c-left",
      start: "15% 20%",
      end: "center center",
      markers: true,
      scrub: 4,
    },
  });
  return (
    <div className="change-bg">
      <div className="circle-change c-left"></div>
      <div className="circle-change c-right"></div>
    </div>
  );
}
