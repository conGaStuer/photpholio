import React from "react";
import "../styles/about.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
export default function About() {
  const headingRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.clear();

    gsap.to(
      ".see",
      {
        backgroundPosition: "0% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: ".see",
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      },
      []
    );
    gsap.to(
      ".spann",
      {
        backgroundPosition: "0% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: ".spann",
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      },
      []
    );
    gsap.to(
      ".span",
      {
        ease: "none",
        width: 500,
        fontSize: 25,
        borderRadius: 60,
        scrollTrigger: {
          trigger: ".span",
          markers: true,
          scrub: 3,
          start: "center center",
          end: "bottom center",
        },
      },
      []
    );
  });
  return (
    <section>
      <h1 className="see" ref={headingRef}>
        Welcome to my portfolio{" "}
      </h1>
      <h1 className="see seeyah">
        Wish you happy all the day ,{" "}
        <span className="spann">see yahhhhhhh</span>
      </h1>
      <span className="span">TraXuan na na na na na</span>
      <h3>
        Welcome to my portfolio ,Wish you happy all the day , see yahhhh Welcome
        to my portfolio ,Wish you happy all the day , see yahhhh
      </h3>
    </section>
  );
}
