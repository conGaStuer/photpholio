import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollProgressCircle() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const updateScrollPercent = () => {
    const scrollTop = window.scrollY;
    const winHeight = document.body.scrollHeight - window.innerHeight;
    const percent = Math.min((scrollTop / winHeight) * 100, 100);
    setScrollPercent(Math.floor(percent));
  };
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".change-bg",
      start: "top center",
      end: "bottom center",
      onEnter: () => setIsDark(true),
      onLeaveBack: () => setIsDark(false),
    });

    window.addEventListener("scroll", updateScrollPercent);
    return () => window.removeEventListener("scroll", updateScrollPercent);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 40,
        width: 50,
        height: 80,
        zIndex: 9999,
      }}
    >
      <CircularProgressbar
        value={scrollPercent}
        text={`${scrollPercent}%`}
        strokeWidth={2}
        styles={buildStyles({
          textColor: isDark ? "#2f3343" : "#fff",
          pathColor: isDark ? "#2f3343" : "#fff",
          trailColor: isDark ? "#fff" : "#2f3343",
          textSize: "18px",
        })}
      />
    </div>
  );
}
