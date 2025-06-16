import React, { useState, useRef, useEffect } from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const container = useRef(null);
  const hoverImageRef = useRef(null); // Ref cho phần tử hình ảnh
  const [isHovering, setIsHovering] = useState(false); // Trạng thái hover

  // Hàm xử lý hover
  const handleHover = (state) => {
    setIsHovering(state); // Cập nhật trạng thái dựa trên tham số
  };

  useEffect(() => {
    // Animation cho body
    gsap.to("body", {
      backgroundColor: "#dbe3fb",
      color: "#2f3343",
      scrollTrigger: {
        trigger: ".welcome",
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: 0.5,
      },
    });

    // Animation cho text .welcome
    gsap.to(".welcome", {
      color: "#2f3343",
      scrollTrigger: {
        trigger: ".welcome",
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: 0.5,
      },
    });

    // Animation cho hover image
    gsap.to(hoverImageRef.current, {
      opacity: isHovering ? 1 : 0,
      display: isHovering ? "block" : "none",
      duration: 0.3,
      ease: "power1.out",
    });

    // Debug: Kiểm tra ref
    console.log("Hover Image Ref:", hoverImageRef.current);

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isHovering]);

  return (
    <div className="video-side" ref={container}>
      <h1 className="welcome">
        We're building a new{" "}
        <span
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          .
        </span>{" "}
        reality that rewards players{" "}
        <span
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          .
        </span>{" "}
        and empowers humans & AI to thrive
      </h1>
      <div className="hover-image" ref={hoverImageRef}>
        <img className="left" src={require("../styles/chan.webp")} alt="left" />
      </div>
    </div>
  );
}
