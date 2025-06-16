import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/PageIntro.scss";

export default function PageIntro({ onComplete }) {
  const containerRef = useRef(null);

  const text = "WELCOME TO MY FUXKING WORLD ";

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".letter");

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      letters,
      { y: 80, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
      }
    ).to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="page-intro">
      <h1 ref={containerRef}>
        {text.split("").map((char, index) => (
          <span key={index} className="letter">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
