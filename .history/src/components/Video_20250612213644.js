import React, { useState } from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Video() {
  const container = useRef(null);
  const hoverImageRef = useRef(null); // Ref cho phần tử hình ảnh
  const [isHovering, setIsHovering] = useState(false); // Trạng thái hover
  const handleHover = () => {
    setIsHovering(!isHovering); // Chuyển đổi trạng thái hover
  };
  useEffect(() => {
    gsap.to(
      "body",
      {
        backgroundColor: "#dbe3fb",
        color: "#2f3343",
        scrollTrigger: {
          trigger: ".welcome", // Target the .center class (img element)
          start: "top center",
          end: "top center", // Immediate change (toggle)
          markers: true,
          scrub: 0.5, // Instant change, no scrubbing
        },
      },
      []
    );
    gsap.to(
      ".welcome",
      {
        color: "#2f3343",
        scrollTrigger: {
          trigger: ".welcome", // Target the .center class (img element)
          start: "top center",
          end: "top center", // Immediate change (toggle)
          markers: true,
          scrub: 0.5, // Instant change, no scrubbing
        },
      },
      []
    );
    gsap.to(hoverImageRef.current, {
      opacity: isHovering ? 1 : 0,
      display: isHovering ? "block" : "none",
      duration: 0.3,
      ease: "power1.out",
    });
  });
  return (
    <div className="video-side" ref={container}>
      <h1 className="welcome">
        We're building a new <span>.</span> reality that rewards players{" "}
        <span>.</span>and empowers humans & AI to thrive
      </h1>
      <div className="hover-image" style={{ display: "none", opacity: 0 }}>
        <img
          className="left"
          ref={hoverImageRef}
          src={require("../styles/chan.webp")}
          alt="left"
        />
      </div>
    </div>
  );
}
