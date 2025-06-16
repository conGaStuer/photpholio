import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/PageIntro.scss";

export default function PageIntro({ onComplete }) {
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Gọi callback khi animation xong
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    ).to(textRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="page-intro">
      <h1 ref={textRef}>Welcome to My Site</h1>
    </div>
  );
}
