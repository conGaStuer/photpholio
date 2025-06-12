import React from "react";

export default function GrowLines() {
  const lines = [...Array(15)].map((_, i) => {
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
  });

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
        viewBox="0 0 1000 600"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.15))",
        }}
      >
        {lines}
      </svg>
    </div>
  );
}
