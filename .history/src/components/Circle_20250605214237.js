import React from "react";

export default function Circle({ text }) {
  return (
    <div>
      <h1>
        {text.split("").map((char, index) => (
          <span key={index}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </h1>
    </div>
  );
}
