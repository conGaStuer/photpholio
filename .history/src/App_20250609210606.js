import Navbar from "./components/Navbar";
import SlideText from "./components/SlideText";
import Shit3D from "./components/Shit3D";
import About from "./components/About";
import IntroText from "./components/IntroText";

import "./styles/app.scss";
import GrowLines from "./components/GrowLines";
import ChangeBackground from "./components/ChangeBackground";
function App() {
  return (
    <div className="App">
      <div class="background-blur">
        <img className="left" src={require("./styles/left.webp")} alt="left" />
      </div>

      <Navbar />
      <SlideText />
      <Shit3D />
      <ShinyController3D />
      <IntroText />

      <About />
      <GrowLines />
      <ChangeBackground />
    </div>
  );
}

export default App;
