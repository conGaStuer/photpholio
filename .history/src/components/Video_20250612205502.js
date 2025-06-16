import React from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import "../styles/changebg.scss";
gsap.registerPlugin(ScrollTrigger);
export default function Video() {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(
      "body",
      {
        backgroundColor: "#dbe3fb",
        scrollTrigger: {
          trigger: ".center", // Target the .center class (img element)
          start: "70% center",
          end: "70% center", // Immediate change (toggle)
          markers: true,
          toggleActions: "play none none reverse", // Revert when scrolling back
          scrub: false, // Instant change, no scrubbing
        },
      },
      []
    );
  });
  return (
    <div className="video-side" ref={container}>
      <h1>welcome</h1>
    </div>
  );
}
