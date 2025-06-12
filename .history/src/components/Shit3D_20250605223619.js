import React, { useRef } from "react";
import "../styles/shit3d.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Shit3D() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); // <-- Cái này là bắt buộc

  const container = useRef();
  useGSAP(() => {
    gsap.to(".circle", {
      y: 200,
      scrollTrigger: {
        trigger: ".circle",
        start: "bottom 50%",
        end: "center center",
        scrub: 1,
        markers: {
          startColor: "white",
          endColor: "white",
          fontSize: "18px",
          fontWeight: "bold",
          indent: 20,
        },
      },
    });
  });
  return <div ref={container} className="circle"></div>;
}
