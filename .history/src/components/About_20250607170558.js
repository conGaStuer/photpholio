import React from "react";
import "../styles/about.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
export default function About() {
  gsap.config({ trialWarn: false });
  console.clear();
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const split = new SplitText("h1", { type: "lines" });

  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
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
  return (
    <section>
      <h1 className="see">Welcome to my portfolio </h1>
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
