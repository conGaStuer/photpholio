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
          scrub: 3,
          start: "top center",
          markers: true,
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
          scrub: 3,
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
        width: 380,
        fontSize: 25,
        scrollTrigger: {
          trigger: ".span",
          scrub: 0.5,
          start: "center center",
          end: "bottom center",
        },
      },
      []
    );
    gsap.to(
      ".h3",

      {
        backgroundPosition: "0% 50%",

        ease: "none",

        scrollTrigger: {
          trigger: ".h3",
          scrub: 4,
          start: "center center",
          end: "bottom center",
        },
      },
      []
    );
  });
  return (
    <section>
      <h1 className="see seeyah" ref={headingRef}>
        LayerEdge sets People as the foundation for the
        <span className="spann"> new Internet</span>
      </h1>
      <span className="span">Trust me , im bring light</span>
      <h3 className="h3">
        Welcome to my portfolio ,Wish you happy all the day , see yahhhh Welcome
        to my portfolio ,Wish you happy all the day , see yahhhh
      </h3>
    </section>
  );
}
