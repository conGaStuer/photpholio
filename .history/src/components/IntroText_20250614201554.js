import React, { useRef, useEffect } from "react";
import "../styles/introtext.scss";
import gsap from "gsap";
import MouseSvg from "../styles/mouse.svg"; // Import SVG as component

export default function IntroText() {
  const mouseRef = useRef(null); // Ref for SVG
  const btnBgRef = useRef(null); // Ref for "Discover now" button
  const btnPortfolioRef = useRef(null); // Ref for "Enjoy my portfolio" button

  useEffect(() => {
    // Animate mouse SVG (e.g., subtle bounce)
    gsap.to(mouseRef.current, {
      y: 10,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Hover animation for "Discover now" button
    gsap.to(btnBgRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
      paused: true, // Pause until hover
    });

    // Hover animation for "Enjoy my portfolio" button
    gsap.to(btnPortfolioRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
      paused: true, // Pause until hover
    });

    // Add event listeners for hover
    const handleHover = (ref, play) => {
      gsap.to(ref.current, { timeScale: play ? 1 : -1, duration: 0.3 });
    };

    btnBgRef.current.addEventListener("mouseenter", () =>
      handleHover(btnBgRef, true)
    );
    btnBgRef.current.addEventListener("mouseleave", () =>
      handleHover(btnBgRef, false)
    );
    btnPortfolioRef.current.addEventListener("mouseenter", () =>
      handleHover(btnPortfolioRef, true)
    );
    btnPortfolioRef.current.addEventListener("mouseleave", () =>
      handleHover(btnPortfolioRef, false)
    );

    return () => {
      // Cleanup event listeners
      btnBgRef.current.removeEventListener("mouseenter", () =>
        handleHover(btnBgRef, true)
      );
      btnBgRef.current.removeEventListener("mouseleave", () =>
        handleHover(btnBgRef, false)
      );
      btnPortfolioRef.current.removeEventListener("mouseenter", () =>
        handleHover(btnPortfolioRef, true)
      );
      btnPortfolioRef.current.removeEventListener("mouseleave", () =>
        handleHover(btnPortfolioRef, false)
      );
    };
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-text">
        <span>
          Tapping into devices' idle computational energy around the world to
          fuel a trust-native internet
        </span>
        <div className="button-container">
          <button ref={btnBgRef} className="btn-bg">
            Discover now
          </button>
          <button ref={btnPortfolioRef} className="btn-portfolio">
            Enjoy my portfolio
          </button>
        </div>
      </div>
      <MouseSvg ref={mouseRef} className="mouse" alt="mouse" />
    </div>
  );
}
