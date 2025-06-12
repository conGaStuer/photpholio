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
    tl2.to(".circle", { y: "+=250", duration: 3, ease: "power1.out" });
  });
  const handleMouseMove = (e) => {
    const circle = container.current;
    const rect = circle.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X within element
    const y = e.clientY - rect.top; // mouse Y within element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 10; // control sensitivity
    const rotateX = -(y - centerY) / 10;

    gsap.to(circle, {
      rotationY: rotateY,
      rotationX: rotateX,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(container.current, {
      rotationX: 0,
      rotationY: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  };
  return (
    <>
      <img
        src={require("../styles/3d2.jpg")}
        alt="circle"
        ref={container}
        className="circle"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
      />
      <div className="after-trigger" style={{ height: "100px" }}></div>
    </>
  );
}
