import React, { useState, useRef, useEffect } from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const container = useRef(null);
  const hoverImageRef = useRef(null); // Ref cho phần tử hình ảnh
  const spanRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false); // Trạng thái hover

  // Hàm xử lý hover
  const handleHover = (state) => {
    setIsHovering(state); // Cập nhật trạng thái dựa trên tham số
    if (spanRef.current) {
      gsap.to(spanRef.current, {
        scale: state ? 6 : 1,

        backgroundImage: state
          ? `url(${require("../styles/chan.webp")})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundClip: "div",
        color: state ? "transparent" : "#000", // Ẩn dấu chấm khi hiện hình
        ease: "sine.in",
        duration: 0.12,
      });
    }
  };

  useEffect(() => {
    // Animation cho body
    gsap.to("body", {
      backgroundColor: "#dbe3fb",
      color: "#2f3343",
      scrollTrigger: {
        trigger: ".welcome",
        start: "top center",
        end: "top center",
        markers: true,
        scrub: 1,
      },
    });

    // Animation cho text .welcome
    gsap.to(".welcome", {
      color: "#2f3343",
      scrollTrigger: {
        trigger: ".welcome",
        start: "top center",
        end: "top center",
        markers: true,
        scrub: 1,
      },
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isHovering]);

  return (
    <div className="video-side" ref={container}>
      <h1 className="welcome">
        We're building a new{" "}
        <div
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          className="spann"
          ref={spanRef}
        ></div>{" "}
        reality that rewards players and empowers humans & AI to thrive
      </h1>
    </div>
  );
}
