import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useEffect(() => {
    gsap.to(container.current, {
      className: "+=expanded",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // Bắt đầu khi phần tử vào tầm nhìn
        end: "bottom 20%", // Kết thúc khi gần ra khỏi tầm nhìn
        scrub: 0.5, // Tốc độ mượt mà
        markers: true, // Hiển thị markers để debug
      },
    });

    // Cleanup khi component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="bg-shadow"
      style={{ position: "relative", minHeight: "100vh", width: "100%" }}
    >
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <div ref={container} className="center-img" />
    </div>
  );
}
