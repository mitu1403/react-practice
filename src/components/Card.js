import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="github-profile">
      <img src={props.avatar} alt="lala" />
      <div className="info">
        <div className="name">{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

export default Card;
