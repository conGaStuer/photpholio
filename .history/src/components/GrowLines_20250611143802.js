import React, { useEffect, useRef } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger); // <-- Cái này là bắt buộc
  const container = useRef(null);
  useEffect(() => {
    gsap.to(".center", {
      backgroundSize: "100% 100%", // Mở rộng background lên full size
      transform: "perspective(0px) rotateX(0deg) rotateY(0deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      scrollTrigger: {
        trigger: ".center",
        markers: true,
        start: "20% center",
        end: "40% center",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <div
        ref={container}
        className="center"
        src={require("../styles/retro1.jpg")}
        alt="right"
      ></div>
    </div>
  );
}
