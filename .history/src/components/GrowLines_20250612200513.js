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
        start: "center 50%",
        end: "bottom center",
        scrub: -10,
        markers: true,
      },
    });

    tl.to(container.current, {
      transform: "perspective(400px) rotateX(8deg) rotateY(16deg)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "+=100px",
      height: "+=100px",
      left: "35%",
    });

    tl.to(container.current, {
      transform: "perspective(300px) rotateX(6deg) rotateY(12deg)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "+=120px",
      height: "+=120px",
      left: "25%",
    });

    tl.to(container.current, {
      transform: "perspective(200px) rotateX(4deg) rotateY(8deg)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "+=140px",
      height: "+=140px",
      left: "20%",
    });

    tl.to(container.current, {
      transform: "perspective(100px) rotateX(2deg) rotateY(4deg)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "+=160px",
      height: "+=160px",
      left: "15%",
    });
    tl.to(container.current, {
      transform: "perspective(50px) rotateX(1deg) rotateY(2deg)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
      width: "+=180px",
      height: "+=180px",
      left: "8%",
    });
    tl.to(container.current, {
      transform: "perspective(0px) rotateX(0deg) rotateY(0deg)",
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
