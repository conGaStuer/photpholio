import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".center",
        start: "20% 50%",
        end: "bottom center",
        scrub: 0.5,
        markers: true,
      },
    });
    tl.to(".center", {
      transform: "perspective(400px) rotateX(8deg) rotateY(16deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      padding: "50px 100px",
      markers: true,
    });

    tl.to(".center", {
      transform: "perspective(300px) rotateX(6deg) rotateY(12deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      padding: "50px 100px",
    });
    tl.to(".center", {
      transform: "perspective(200px) rotateX(4deg) rotateY(8deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      scale: 1.3,
    });
    tl.to(".center", {
      transform: "perspective(100px) rotateX(2deg) rotateY(4deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      scale: 1.4,
    });
    tl.to(".center", {
      transform: "perspective(0px) rotateX(0deg) rotateY(0deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      scale: 1.5,
    });
  }, []);

  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <div ref={container} className="center" />
    </div>
  );
}
