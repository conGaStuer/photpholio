import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useEffect(() => {
    gsap.to(".center", {
      className: "+=expanded",
      scrollTrigger: {
        trigger: ".center",
        start: "top 80%", // Bắt đầu khi phần tử vào tầm nhìn
        end: "bottom 20%", // Kết thúc khi scroll qua phần tử
        scrub: 2, // Tốc độ mượt mà
        markers: true, // Hiển thị markers để debug
      },
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
