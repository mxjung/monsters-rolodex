import React from "react";
import "./card-list.style.css";
import {Card} from '../card/card.component';

// whatever that goes between <CardList name="Max"></CardList> is a children of the input, props

// We want components to take care of the rendering, but the components should not dictate how this component looks/create them - we will create a new component to do that, a card component

// Key is used to help react distinguish between our cards

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster = {monster}/>
    ))}
  </div>
);
