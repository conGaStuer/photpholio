import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/introtext.scss";
export default function IntroText() {
  const textRef = useRef();
  const btn = useRef();
  useEffect(() => {
    gsap.from(textRef.current, {
      x: 600,
      duration: 2,
      ease: "expo.out",
      delay: 2,
    });
    gsap.from(btn.current, {
      y: -200,
      duration: 2,
      ease: "expo.out",
      delay: 2,
    });
  }, []);
  return (
    <div>
      <div className="intro-text">
        <span ref={textRef}>
          Tapping into devices' idle computational energy around the world to
          fuel a trust-native internet
        </span>
        <div className="">
          <button className="btn-bg" ref={btn}>
            Discover now
          </button>
          <button ref={btn}>Enjoy my portfolio</button>
        </div>
      </div>
    </div>
  );
}
