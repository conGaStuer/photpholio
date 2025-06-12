import Navbar from "./components/Navbar";
import SlideText from "./components/SlideText";

import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <div class="background-blur"></div>

      <Navbar />
      <SlideText />
    </div>
  );
}

export default App;
