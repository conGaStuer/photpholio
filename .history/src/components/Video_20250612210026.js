import React, { useRef, useEffect } from "react";
import "../styles/video.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const container = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate body background color
    gsap.to("body", {
      backgroundColor: "#1a1a1a", // Dark background to match the image
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "50% center",
        markers: true,
        scrub: 1,
      },
    });

    // Parallax effect for the image
    gsap.to(imageRef.current, {
      y: "20%", // Move image down slightly as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: 1,
      },
    });

    // Title animation
    gsap.from(titleRef.current, {
      y: 100, // Start off-screen
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 50%",
        markers: true,
        toggleActions: "play none none reverse",
      },
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="video-side" ref={container}>
      <div className="background-image" ref={imageRef}>
        <img
          src={require("../styles/chan.webp")} // Replace with your image path
          alt="Hidden Realm"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1 className="welcome" ref={titleRef}>
        THE STORY OF
        <br />A HIDDEN REALM
      </h1>
      <div className="text-section" ref={textRef}>
        <p>
          Where realms converge, Zenty and Zenty bring a breath of fresh air.
          Unravel the untold tale within infinite opportunities.
        </p>
        <button className="discover-btn">DISCOVER REALM</button>
      </div>
    </div>
  );
}
