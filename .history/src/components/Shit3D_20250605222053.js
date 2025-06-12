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
        end: "center center",
        scrub: true,
      },
    });
  });
  return <div ref={container} className="circle"></div>;
}
