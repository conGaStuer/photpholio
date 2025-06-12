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
        trigger: container.current,
        markers: true, // Hiển thị markers để debug
        start: "20% center", // Bắt đầu mở rộng
        end: "80% center", // Kết thúc mở rộng
        scrub: 4, // Tốc độ mượt mà khi scroll
        onLeave: () => {
          // Khi scroll qua end, xóa class expanded
          gsap.to(container.current, {
            className: "-=expanded",
            duration: 0.3,
          });
        },
        onEnterBack: () => {
          // Khi scroll ngược lại, thêm class expanded
          gsap.to(container.current, {
            className: "+=expanded",
            duration: 0.3,
          });
        },
      },
    });

    tl.to(container.current, { className: "+=expanded" }); // Thêm class khi scroll vào

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
