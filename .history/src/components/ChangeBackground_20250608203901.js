import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import "../styles/changebg.scss";
gsap.registerPlugin(ScrollTrigger);

export default function ChangeBackground() {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(".c-left", {
      width: "+=500",
      scrollTrigger: {
        trigger: ".c-left",
        start: "15% center",
        end: "20% center",
        markers: true,
        scrub: 2,
      },
    });
    gsap.to(".c-right", {
      width: "+=500",
      scrollTrigger: {
        trigger: ".c-right",
        start: "15% center",
        end: "20% center",
        markers: true,
        scrub: 2,
      },
    });
  }, []);
  return (
    <div className="change-bg">
      <div className="circle-change c-left" ref={container}></div>
      <div className="circle-change c-right"></div>
    </div>
  );
}
