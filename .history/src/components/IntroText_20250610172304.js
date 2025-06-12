import React from "react";
import "../styles/introtext.scss";

export default function IntroText() {
  return (
    <div>
      <div className="intro-text">
        <span>
          Tapping into devices' idle computational energy around the world to
          fuel a trust-native internet
        </span>
        <div className="">
          <button className="btn-bg">Discover now</button>
          <button>Enjoy my portfolio</button>
        </div>
      </div>
      <svg
        class="border-line_line__7wXc4 hero_line__VHgTa"
        data-explor-line="true"
        viewBox="0 0 213 531"
      >
        <path
          class="border-line_path__MG9R4"
          d="M212.5 106.5L212.5 530.499C95.369 530.229 0.499981 435.278 0.499986 318.19L0.499995 106.5L0.508784 105.131C1.24217 47.273 48.4147 0.59533 106.5 0.595332C164.585 0.595339 211.758 47.273 212.491 105.131L212.5 106.5Z"
          data-path="true"
        ></path>
      </svg>
    </div>
  );
}
