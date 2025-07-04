import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import "../styles/changebg.scss";
gsap.registerPlugin(ScrollTrigger);

export default function ChangeBackground() {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(".c-left", {
      width: "+=450",
      scrollTrigger: {
        trigger: ".c-left",
        start: "12% 60%",
        end: "20% center",
        markers: true,
        scrub: 2,
      },
    });
    gsap.to(".c-right", {
      width: "+=450",
      scrollTrigger: {
        trigger: ".c-right",
        start: "12% 60%",
        end: "20% center",
        markers: true,
        scrub: 2,
      },
    });
  }, []);
  return (
    <>
      <div className="change-bg">
        <div className="circle-change c-left" ref={container}></div>
        <div className="circle-change c-right"></div>
      </div>
      <div className="change-bg--text">
        <h1>Welcome to my shit Welcome to my shit </h1>
        <h2>Welcome to my shit </h2>
        <div className="text-parts">
          <div className="text-part">
            <span className="aa">01</span>
            <div className="text-part--intro">
              <h4>Frontend Devoloper</h4>
              <span>
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
              </span>
            </div>
          </div>
          <div className="text-part">
            <span className="aa">02</span>
            <div className="text-part--intro">
              <h4>Frontend Devoloper</h4>
              <span>
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
              </span>
            </div>
          </div>
          <div className="text-part">
            <span className="aa">03</span>
            <div className="text-part--intro">
              <h4>Frontend Devoloper</h4>
              <span>
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
                onjonegnojenojegonjegnokegknogeonkegonjepgnqepgnpqeng
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-big">
        <img
          className="center"
          src={require("../styles/figure.webp")}
          alt="center"
        />
      </div>
    </>
  );
}
