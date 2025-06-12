import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GrowLines() {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");
    gsap.fromTo(
      paths,
      {
        opacity: 0,
        strokeDasharray: 600,
        strokeDashoffset: 600,
      },
      {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#000",
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1000 600"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.1))",
        }}
      >
        {[...Array(15)].map((_, i) => {
          const t = (i - 7) * 30;
          return (
            <path
              key={i}
              d={`M500,600 Q500 ${300 + t}, ${500 + t},0`}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}
