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
        scrub: 2,
      },
    });

    tl.to(".circle", { y: 400, x: -400, ease: "power1.out", duration: 2 });
    tl.to({}, { duration: 0.5 }); // pause logic

    tl.to(".circle", { x: 0, duration: 2, ease: "power2.out" });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".after-trigger", // phần tử này nằm dưới
        start: "top center", // khi after-trigger vừa vào viewport
        end: "center center",
        scrub: 5,
        markers: { startColor: "green", endColor: "green" },
        id: "continue-move",
      },
    });
    tl2.to(".circle", { y: "+=100", duration: 1, ease: "power1.out" });
  });
  return (
    <>
      <div ref={container} className="circle"></div>
      <div className="after-trigger" style={{ height: "100px" }}></div>
    </>
  );
}
