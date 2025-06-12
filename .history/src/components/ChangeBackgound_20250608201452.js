import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ChangeBackgound() {
  gsap.to(".circle", {});
  return (
    <div className="change-bg">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
}
