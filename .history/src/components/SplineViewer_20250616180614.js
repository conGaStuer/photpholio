import React, { useEffect, useRef } from "react";
import "@splinetool/viewer/build/spline-viewer.js"; // Import web component

export default function SplineViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.url =
        "https://prod.spline.design/NkFFCte08FCH2GKe/scene.splinecode";
    }
  }, []);

  return (
    <spline-viewer ref={viewerRef} style={{ width: "100%", height: "600px" }} />
  );
}
