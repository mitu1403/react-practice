import React from "react";

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment)
  return (
    <button onClick={handleClick}>
      Increment +{props.increment}
    </button>
  );
}

export default Button;