import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/navbar.scss";

export default function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    gsap.from(navRef.current, {
      y: 50,
      duration: 2,
      ease: "expo.out",
      delay: 2,
    });
  }, []);
  return (
    <div className="nav-bar" ref={navRef}>
      <div className="logo">
        <h4>XunKuong</h4>
      </div>
      <nav>
        <span>My portfolio</span>
        <span>Airdropnoobxx</span>
        <span>LFG</span>
        <span>Cooking</span>
      </nav>
      <div className="btn">
        {" "}
        <button>
          <span class="text original">Click me</span>
          <span class="text hover-text">Discover me now</span>
        </button>
      </div>
    </div>
  );
}
