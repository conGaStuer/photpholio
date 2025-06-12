import Navbar from "./components/Navbar";
import SlideText from "./components/SlideText";
import Shit3D from "./components/Shit3D";
import About from "./components/About";
import IntroText from "./components/IntroText";

import "./styles/app.scss";
import GrowLines from "./components/GrowLines";
function App() {
  return (
    <div className="App">
      <div class="background-blur">
        <img className="left" src={require("./styles/left.webp")} alt="left" />
      </div>

      <Navbar />
      <SlideText />
      <Shit3D />
      <IntroText />

      <About />
      <GrowLines />
    </div>
  );
}

export default App;
