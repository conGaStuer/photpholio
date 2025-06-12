import Navbar from "./components/Navbar";
import SlideText from "./components/SlideText";
import Shit3D from "./components/Shit3D";

import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <div class="background-blur"></div>

      <Navbar />

      <SlideText />
      <Shit3D />
    </div>
  );
}

export default App;
