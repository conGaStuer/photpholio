import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircleLoader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 30ms mỗi bước → nhanh chậm tùy chỉnh

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: 120,
        height: 120,
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#00ff99",
          trailColor: "#2c2c2c",
          textSize: "16px",
        })}
      />
    </div>
  );
}
