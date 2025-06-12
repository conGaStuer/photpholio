import React, { useRef } from "react";
import "../styles/shit3d.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Shit3D() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {});
  return <div ref={container} className="circle"></div>;
}
