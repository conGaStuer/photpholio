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
        end: "80% center",
        scrub: 5,
        markers: true,
      },
    });
    tl.to(".center", {
      transform: "perspective(400px) rotateX(5deg) rotateY(10deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      duration: 2,
    });
    tl.to({}, { duration: 0.5 }); // pause logic

    tl.to(".center", {
      transform: "perspective(0px) rotateX(0deg) rotateY(0deg)", // Loại bỏ 3D
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Loại bỏ đổ bóng
      ease: "power1.out",
      duration: 2,
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
