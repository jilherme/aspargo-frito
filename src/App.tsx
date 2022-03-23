import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://1.bp.blogspot.com/-4DenPPvBXX0/Tb7tJBCpCTI/AAAAAAAABOI/qE3fuxEAoOI/s1600/DSC06742.JPG"
          className="App-logo"
          alt="logo"
        />
        <p>Hello, Aspargos!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
