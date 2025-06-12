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
        end: "40% center",
        scrub: 5,
        markers: true,
      },
    });
    tl.to(".center", {
      transform: "perspective(400px) rotateX(8deg) rotateY(16deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      scale: 1.1,
    });

    tl.to(".center", {
      transform: "perspective(300px) rotateX(6deg) rotateY(12deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      scale: 1.2,
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
      <img
        ref={container}
        className="center"
        src={require("../styles/retro1.jpg")}
        alt="right"
      />
    </div>
  );
}
