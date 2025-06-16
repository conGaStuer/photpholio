import React, { useEffect, useRef } from "react";
import "../styles/shit3d.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Shit3D() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); // <-- Cái này là bắt buộc

  const container = useRef();
  useEffect(() => {
    gsap.from(container.current, {
      x: 850,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
    });
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".circle",
        start: "bottom 50%",
        end: "center center",
        scrub: 5,
      },
    });

    tl.to(".circle", {
      y: 400,
      x: -400,
      ease: "power1.out",
      duration: 2,
    });
    tl.to({}, { duration: 0.5 }); // pause logic

    tl.to(".circle", { x: -50, duration: 2, ease: "power2.out" });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".after-trigger", // phần tử này nằm dưới
        start: "top center", // khi after-trigger vừa vào viewport
        end: "center center",
        scrub: 5,
        // markers: { startColor: "green", endColor: "green" },
        id: "continue-move",
      },
    });
    tl2.to(".circle", { y: "+=200", duration: 3, ease: "power1.out" });
  });
  return (
    <>
      <img
        src={require("../styles/3d2.jpg")}
        alt="circle"
        ref={container}
        className="circle"
      />

      <div className="after-trigger" style={{ height: "100px" }}></div>
    </>
  );
}
