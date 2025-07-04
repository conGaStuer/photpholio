import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/introtext.scss";
export default function IntroText() {
  const textRef = useRef();
  useEffect(() => {
    gsap.from({
      left: "400px",
      opacity: 1,
      duration: 2,
      ease: "expo.out",
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
          <button className="btn-bg">Discover now</button>
          <button>Enjoy my portfolio</button>
        </div>
      </div>
    </div>
  );
}
