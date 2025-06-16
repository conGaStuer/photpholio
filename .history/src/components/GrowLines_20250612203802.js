import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);
  const leftImg = useRef(null);
  const rightImg = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 80%", // Start when the top of the container is 80% down the viewport
      end: "bottom top", // End when the bottom of the container reaches the top of the viewport
      scrub: 1, // Smoothly tie animation to scroll (adjust for speed)
      markers: true, // Remove in production
    });

    // Timeline for container animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Animate container (center-img) to grow smoothly
    tl.to(container.current, {
      width: "100%",
      height: "100vh",
      ease: "power1.out",
      duration: 2, // Slow down the animation
    });

    // Parallax effect for left and right images
    gsap.to(leftImg.current, {
      y: 100, // Move downward slightly as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(rightImg.current, {
      y: -100, // Move upward slightly for contrast
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="bg-shadow"
      style={{ position: "relative", minHeight: "100vh", width: "100%" }}
    >
      <img
        ref={leftImg}
        className="left"
        src={require("../styles/left.webp")}
        alt="left"
      />
      <img
        ref={rightImg}
        className="right"
        src={require("../styles/left.webp")} // Fix: Use right.webp if different
        alt="right"
      />
      <div ref={container} className="center-img" />
    </div>
  );
}
