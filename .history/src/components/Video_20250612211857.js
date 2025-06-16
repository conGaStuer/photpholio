import React from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Video() {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(
      "body",
      {
        backgroundColor: "#dbe3fb",
        color: "#2f3343",
        scrollTrigger: {
          trigger: ".welcome", // Target the .center class (img element)
          start: "top center",
          end: "bottom center", // Immediate change (toggle)
          markers: true,
          scrub: -10, // Instant change, no scrubbing
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
          end: "bottom center", // Immediate change (toggle)
          markers: true,
          scrub: -10, // Instant change, no scrubbing
        },
      },
      []
    );
  });
  return (
    <div className="video-side" ref={container}>
      <h1 className="welcome">
        We're building a new reality that rewards players and empowers humans &
        AI to thrive
      </h1>
    </div>
  );
}
