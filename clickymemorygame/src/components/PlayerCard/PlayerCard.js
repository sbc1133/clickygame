import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickPlayer(props.id)}/>
    </div>
  </div>
);

export default PlayerCard;