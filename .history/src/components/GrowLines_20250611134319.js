import React from "react";
import "../styles/growlines.scss";
export default function GrowLines() {
  return (
    <div className="bg-shadow">
      <img className="left" src={require("../styles/left.webp")} alt="left" />
      <img className="right" src={require("../styles/left.webp")} alt="right" />
    </div>
  );
}
