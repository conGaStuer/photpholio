import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paddingTop: "100px",
      scrollTrigger: {
        trigger: container.current,
        start: "30% 50%",
        end: "80% center",
        scrub: 4,
        markers: true,
      },
    });

    tl.to(container.current, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "+=100px",
      height: "+=100px",
    });
    tl.to(container.current, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "45%",
      height: "55%",
    });
    tl.to(container.current, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "50%",
      height: "60%",
    });
    tl.to(container.current, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "60%",
      height: "100vh",
    });

    tl.to(container.current, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "100%", // Đảm bảo lấp đầy chiều ngang
      height: "100vh", // Đảm bảo lấp đầy chiều cao
      left: 0, // Căn trái để lấp đầy
      position: "absolute", // Giữ vị trí tuyệt đối, di chuyển theo scroll
      top: 0, // Tự động điều chỉnh top
      paddingBottom: "+200px",
    });
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
