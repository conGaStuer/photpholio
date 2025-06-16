import React, { useEffect, useRef } from "react";

export default function SplineViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup when component unmount
    };
  }, []);

  return (
    <spline-viewer
      ref={viewerRef}
      url="https://prod.spline.design/NkFFCte08FCH2GKe/scene.splinecode"
      style={{ width: "100%", height: "600px", border: "none" }}
    />
  );
}
