import Navbar from "./components/Navbar";
import Circle from "./components/Circle";

import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <div class="background-blur"></div>

      <Navbar />
      <Circle text="Welcome to my site" />
    </div>
  );
}

export default App;
