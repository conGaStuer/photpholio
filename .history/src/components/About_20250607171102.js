import React from "react";
import "../styles/about.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect } from "react";
export default function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.config({ trialWarn: false });
    console.clear();

    const split = new SplitText(headingRef.current, { type: "lines" });

    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPosition: "0% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: target,
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      });
    });
  }, []);
  return (
    <section>
      <h1 className="see" ref={headingRef}>
        Welcome to my portfolio{" "}
      </h1>
      <h1 className="see seeyah">
        Wish you happy all the day , <span>see yahhhhhhh</span>
      </h1>
      <span className="span">TraXuan na na na na na</span>
      <h3>
        Welcome to my portfolio ,Wish you happy all the day , see yahhhh Welcome
        to my portfolio ,Wish you happy all the day , see yahhhh
      </h3>
    </section>
  );
}
