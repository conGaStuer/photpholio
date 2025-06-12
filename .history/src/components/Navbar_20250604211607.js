import React from "react";
import "../styles/navbar.scss";
export default function Navbar() {
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
        <button>Discover me now</button>
        <span class="slide-text">Hello!</span>
      </div>
    </div>
  );
}
