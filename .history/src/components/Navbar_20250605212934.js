import React, { useState } from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menu = ["My portfolio", "Airdropnoobxx", "LFG", "Cooking"];

  return (
    <div className="nav-bar">
      <div className="logo">
        <h4>XunKuong</h4>
      </div>
      <nav>
        <div
          className="highlight"
          style={{ transform: `translateX(${activeIndex * 120}px)` }}
        />
        {menu.map((item, idx) => (
          <span key={idx} onMouseEnter={() => setActiveIndex(idx)}>
            {item}
          </span>
        ))}
      </nav>
      <div className="btn">
        <button>
          <span className="text original">Click me</span>
          <span className="text hover-text">Discover me now</span>
        </button>
      </div>
    </div>
  );
}
