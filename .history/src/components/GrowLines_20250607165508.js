import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GrowLines() {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path, index) => {
      const length = path.getTotalLength();

      // Tạo 1 timeline ánh sáng chạy xuống liên tục
      gsap.fromTo(
        path,
        {
          strokeDasharray: `${length}`,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 2,
          repeat: -1,
          ease: "power1.inOut",
          delay: index * 0.1, // offset nhẹ để tạo hiệu ứng ánh sáng chùm
        }
      );
    });
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
        }}
      >
        {[...Array(15)].map((_, i) => {
          const t = (i - 7) * 30;
          return (
            <path
              key={i}
              d={`M500,600 Q500 ${300 + t}, ${500 + t},0`}
              stroke="url(#glowGradient)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
