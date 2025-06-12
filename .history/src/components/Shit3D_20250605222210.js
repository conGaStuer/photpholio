import React, { useRef } from "react";
import "../styles/shit3d.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Shit3D() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    gsap.to(".circle", {
      y: 200,
      scrollTrigger: {
        start: "top 50%",
        end: "top center",
        scrub: true,
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
