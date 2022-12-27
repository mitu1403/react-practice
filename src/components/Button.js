import React, { useState } from "react";

function logRandom() {
  console.log(Math.random());
}
function Button() {
  const [counter, setCounter] = useState(1);
  // function handleClick() {
  //   setCounter(counter + 1);
  // }
  // can use arrow function instead of using like this. 
  // But its good to make another function.

  return (
    <button onClick={() => setCounter(counter * 2)}>
      Count - {counter}
    </button>
  );
}

export default Button;

// useState() results:
//   - state object (getter)
//   - updater function (setter)
// const [ currentStateValue, functiopnToSetNewStateValue ] = useState(initialValue)
