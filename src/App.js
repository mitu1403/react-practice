import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  
  return (
    <div style={{ textAlign: "center", margin: "24% 0%" }}>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter} />
    </div>
  );
}

export default App;