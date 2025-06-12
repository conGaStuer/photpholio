import React, { useEffect, useRef } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger); // <-- Cái này là bắt buộc
  const container = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".center",
        start: "20% 50%",
        end: "80% center",
        scrub: 5,
      },
    });
    tl.to(".center", {
      y: 400,
      x: -400,
      ease: "power1.out",
      duration: 2,
    });
    tl.to({}, { duration: 0.5 }); // pause logic

    tl.to(".circle", { x: -50, duration: 2, ease: "power2.out" });
  }, []);

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
