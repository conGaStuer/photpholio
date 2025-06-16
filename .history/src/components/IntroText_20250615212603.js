import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/introtext.scss";
export default function IntroText() {
  const textRef = useRef();
  const btn1Ref = useRef();
  const btn2Ref = useRef();
  useEffect(() => {
    gsap.from(textRef.current, {
      x: 600,
      duration: 2,
      ease: "expo.out",
      delay: 2,
    });
    gsap.from(btn1Ref.current, {
      y: -200,
      duration: 1.5,
      ease: "expo.out",
      delay: 2,
    });

    gsap.from(btn2Ref.current, {
      y: -200,
      duration: 1.5,
      ease: "expo.out",
      delay: 2.2,
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
          <button className="btn-bg" ref={btn1Ref}>
            Discover now
          </button>
          <button ref={btn2Ref}>Enjoy my portfolio</button>
        </div>
      </div>
    </div>
  );
}
