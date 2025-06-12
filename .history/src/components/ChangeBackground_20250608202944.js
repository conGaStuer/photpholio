import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import "../styles/changebg.scss";
gsap.registerPlugin(ScrollTrigger);

export default function ChangeBackground() {
  const container = useRef();

  gsap.to(".c-left", {
    x: 200,
    scrollTrigger: {
      trigger: ".c-left",
      start: "15% 20%",
      end: "center center",
      markers: true,
      scrub: 1,
    },
  });
  return (
    <div className="change-bg">
      <div className="circle-change c-left" ref={container}></div>
      <div className="circle-change c-right"></div>
    </div>
  );
}
