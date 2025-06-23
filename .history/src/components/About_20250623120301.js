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
        height: "+=10",
        fontSize: 17,
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
        I’m a passionate and detail-oriented developer with
        <span className="spann"> a strong mind</span>
      </h1>
      <span className="span">Trust me , im bring light</span>
      <h3 className="h3">
        Enthusiastic about learning new technologies and frameworks, and always
        ready to take on new challenges in the IT field.
      </h3>
    </section>
  );
}
