import React, { useRef, useEffect } from "react";
import "../styles/growlines.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GrowLines() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "20% 50%",
        end: "80% center",
        scrub: 5,
        markers: true,
      },
    });

    tl.to(container.current, {
      width: 500, // Thu nhỏ dần
      height: 750,
      transform: "perspective(400px) rotateX(8deg) rotateY(16deg)",
      boxShadow: "0 18px 27px rgba(0, 0, 0, 0.18)",
      ease: "power1.out",
    });

    tl.to(container.current, {
      width: 400,
      height: 600,
      transform: "perspective(300px) rotateX(6deg) rotateY(12deg)",
      boxShadow: "0 16px 24px rgba(0, 0, 0, 0.16)",
      ease: "power1.out",
    });

    tl.to(container.current, {
      width: 300,
      height: 450,
      transform: "perspective(200px) rotateX(4deg) rotateY(8deg)",
      boxShadow: "0 14px 21px rgba(0, 0, 0, 0.14)",
      ease: "power1.out",
    });

    tl.to(container.current, {
      width: 200,
      height: 300,
      transform: "perspective(100px) rotateX(2deg) rotateY(4deg)",
      boxShadow: "0 12px 18px rgba(0, 0, 0, 0.12)",
      ease: "power1.out",
    });

    tl.to(container.current, {
      width: 100,
      height: 150,
      transform: "perspective(0px) rotateX(0deg) rotateY(0deg)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <img
        ref={container}
        className="center"
        src={require("../styles/retro1.jpg")}
        alt="center"
      />
    </div>
  );
}
