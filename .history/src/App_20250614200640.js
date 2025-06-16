import Navbar from "./components/Navbar";
import SlideText from "./components/SlideText";
import Shit3D from "./components/Shit3D";
import About from "./components/About";
import IntroText from "./components/IntroText";
import CircleLoader from "./components/CircleLoader";

import "./styles/app.scss";
import GrowLines from "./components/GrowLines";
import ChangeBackground from "./components/ChangeBackground";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
function App() {
  return (
    <div className="App">
      <div class="background-blur">
        <img className="left" src={require("./styles/left.webp")} alt="left" />
      </div>
      {/* <Loading /> */}
      <Navbar />
      <SlideText />
      <Shit3D />
      <IntroText />

      <About />
      <GrowLines />
      <ChangeBackground />
      <Video />
      <CircleLoader />
      <Contact />
    </div>
  );
}

export default App;
