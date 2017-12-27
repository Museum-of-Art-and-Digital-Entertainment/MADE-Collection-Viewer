import React from "react";
import './GameListItem.css';
import { Link } from "react-router-dom"; 
import boxart from "./marioOdessyBA.png"

// GameListItem renders Boxart from game 
export const GameListItem = props => (
    <Link className="gameLink" to={"/games/" + props.key}>
          {/*{props.title}*/}
          {/*<Thumbnail src={props.boxart || "https://placehold.it/300x300"} />*/}
          <img className= "game" src={boxart} alt="boxart"/>
    </Link>
);
