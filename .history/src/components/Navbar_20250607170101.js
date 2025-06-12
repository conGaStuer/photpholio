import React from "react";
import "../styles/navbar.scss";
export default function Navbar() {
  ScrollReveal().reveal(".nav-bar");
  return (
    <div className="nav-bar">
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
