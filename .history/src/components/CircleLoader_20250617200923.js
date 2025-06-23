import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollProgressCircle({ scrollContainerRef }) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const updateScrollPercent = () => {
    if (!scrollContainerRef?.current) return;
    const scrollTop = scrollContainerRef.current.scrollTop;
    const scrollHeight = scrollContainerRef.current.scrollHeight;
    const clientHeight = scrollContainerRef.current.clientHeight;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercent(Math.floor(percent));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    ScrollTrigger.create({
      trigger: ".chanaaa",
      scroller: container,
      start: "top center",
      end: "top center",
      onEnter: () => setIsDark(true),
      onLeaveBack: () => setIsDark(false),
    });

    container.addEventListener("scroll", updateScrollPercent);
    return () => container.removeEventListener("scroll", updateScrollPercent);
  }, [scrollContainerRef]);

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
