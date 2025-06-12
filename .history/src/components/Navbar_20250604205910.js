import React from "react";
import "../styles/navbar.scss";
export default function Navbar() {
  return (
    <div className="nav-bar">
      <div>
        <h4>TraXuan</h4>
      </div>
      <nav>
        <span>My portfolio</span>
        <span>Airdropnoobxx</span>
        <span>LFG</span>
        <span>Cooking</span>
      </nav>
      <div>
        {" "}
        <button>Discover me now</button>
      </div>
    </div>
  );
}
