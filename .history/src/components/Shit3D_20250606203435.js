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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".circle",
        start: "bottom 50%",
        end: "center center",
        scrub: 5,
        markers: {
          startColor: "white",
          endColor: "white",
          fontSize: "18px",
          fontWeight: "bold",
          indent: 20,
        },
      },
    });
    gsap.to(".circle", {
      x: -400,
      scrollTrigger: {
        trigger: ".circle",
        start: "bottom 90%", // Khi circle gần chạm top của viewport
        end: "top -20%", // Kéo dài scroll trigger để smooth
        scrub: 1,
        markers: { startColor: "lime", endColor: "lime" },
        id: "move-x",
      },
    });
    tl.to(".circle", { y: 400, x: -400, ease: "power1.out", duration: 1 });
    tl.to({}, { duration: 0.5 }); // pause logic

    tl.to(".circle", { x: 0, duration: 1.5, ease: "power2.out" });
  });
  return <div ref={container} className="circle"></div>;
}
