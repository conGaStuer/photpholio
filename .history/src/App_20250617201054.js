import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import SlideText from "./components/SlideText";
import Shit3D from "./components/Shit3D";
import About from "./components/About";
import IntroText from "./components/IntroText";
import CircleLoader from "./components/CircleLoader";
import GrowLines from "./components/GrowLines";
import ChangeBackground from "./components/ChangeBackground";
import Video from "./components/Video";
import Footer from "./components/Footer";
import PageIntro from "./components/PageIntro"; // Cinematic intro
import ScrollProgressCircle from "./components/CircleLoader";

import "./styles/app.scss";

function App() {
  const [showContent, setShowContent] = useState(false);
  const appRef = useRef();

  return (
    <div className="App" ref={appRef}>
      {!showContent && <PageIntro onComplete={() => setShowContent(true)} />}

      {showContent && (
        <>
          <div className="background-blur">
            <img
              className="left"
              src={require("./styles/left.webp")}
              alt="left"
            />
          </div>
          <Navbar />
          <SlideText />
          <Shit3D />
          <IntroText />
          <About />
          <GrowLines />
          <ChangeBackground />
          <Video />
          <CircleLoader scrollContainerRef={appRef} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
