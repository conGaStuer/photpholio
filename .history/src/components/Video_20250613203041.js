import React, { useState, useRef, useEffect } from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const container = useRef(null);
  const hoverImageRef = useRef(null); // Ref for the image element
  const [isHovering, setIsHovering] = useState(false); // Hover state

  // Handle hover state
  const handleHover = (state) => {
    setIsHovering(state);
  };

  useEffect(() => {
    // Animation for body background and text color
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

    // Animation for .welcome text
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

    // GSAP animation for hover image
    gsap.to(hoverImageRef.current, {
      width: isHovering ? "50%" : "0%", // Adjust width based on hover state
      opacity: isHovering ? 1 : 0,
      duration: 0.3,
      ease: "power1.out",
    });

    // Debug: Check ref
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
          className="span"
        >
          .
        </span>{" "}
        reality that rewards players and empowers humans & AI to thrive
      </h1>
      <div className="hover-image">
        <img
          className="left"
          src={require("../styles/chan.webp")}
          alt="left"
          ref={hoverImageRef}
        />
      </div>
    </div>
  );
}
