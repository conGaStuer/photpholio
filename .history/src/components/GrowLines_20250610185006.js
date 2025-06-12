import React from "react";
import "../styles/growlines.scss";
export default function GrowLines() {
  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
      <svg width="200" height="200" viewBox="0 0 100 100">
        {/* Các đường cố định */}
        <line x1="50" y1="90" x2="40" y2="20" className="base-line" />
        <line x1="50" y1="90" x2="45" y2="25" className="base-line" />
        <line x1="50" y1="90" x2="50" y2="15" className="base-line" />
        <line x1="50" y1="90" x2="55" y2="25" className="base-line" />
        <line x1="50" y1="90" x2="60" y2="20" className="base-line" />
        {/* Hiệu ứng sáng lướt xuống */}
      </svg>
    </div>
  );
}
