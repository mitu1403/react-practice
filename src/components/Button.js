import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClickFunction}>
      Increment +2
    </button>
  );
}

export default Button;