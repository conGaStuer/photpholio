import React from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Video() {
  const container = useRef(null);
  const triggerText = useRef(null);
  const hoverImage = useRef(null);

  triggerText.current.addEventListener("mouseenter", () => {
    gsap.to(hoverImage.current, {
      opacity: 1,
      duration: 0.3,
      display: "block",
    });
  });

  triggerText.current.addEventListener("mouseleave", () => {
    gsap.to(hoverImage.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        hoverImage.current.style.display = "none";
      },
    });
  });
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
          ref={hoverImage}
          src={require("../styles/chan.webp")}
          alt="left"
        />
      </div>
    </div>
  );
}
