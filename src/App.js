import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 2);
  return (
    <div style={{ textAlign: "center", margin: "24% 0px" }}>
      <Button onClickFunction={handleClick} />
      <Display message={counter} />
    </div>
  );
}

export default App;



// Parent Component can flow their data & behavior down to children components:

//   parent   -> App.js
//   children -> Button.js, Display.js

//   data -> counter
//   behavior -> handleClick()
