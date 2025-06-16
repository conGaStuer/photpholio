import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScrollProgressCircle() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const updateScrollPercent = () => {
    const scrollTop = window.scrollY;
    const winHeight = document.body.scrollHeight - window.innerHeight;
    const percent = Math.min((scrollTop / winHeight) * 100, 100);
    setScrollPercent(Math.floor(percent));
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPercent);
    return () => window.removeEventListener("scroll", updateScrollPercent);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 40,
        right: 40,
        width: 60,
        height: 80,
        zIndex: 9999,
      }}
    >
      <CircularProgressbar
        value={scrollPercent}
        text={`${scrollPercent}%`}
        strokeWidth={1}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#2f3343",
          trailColor: "#2c2c2c",
          textSize: "18px",
        })}
      />
    </div>
  );
}
