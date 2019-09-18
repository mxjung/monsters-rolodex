import React from "react";
import "./card.styles.css";

// Giving a different number in the URL gives us a unique monster image
export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
