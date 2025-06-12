import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useEffect(() => {
    gsap.to(container.current, {
      className: "+=expanded", // Thêm class expanded khi scroll
      scrollTrigger: {
        trigger: container.current,
        markers: true, // Hiển thị markers để debug
        start: "20% center", // Bắt đầu khi phần tử ở 20% từ top đến center
        end: "80% center", // Kết thúc khi phần tử ở 80% từ top đến center
        scrub: 4, // Tốc độ mượt mà khi scroll
      },
    });

    // Cleanup khi component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <div ref={container} className="center" />
    </div>
  );
}
