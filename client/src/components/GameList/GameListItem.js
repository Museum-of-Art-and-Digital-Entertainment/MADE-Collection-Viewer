import React from "react";
import './GameListItem.css';
import { Link } from "react-router-dom"; 
import Thumbnail from "../Thumbnail";

// GameListItem renders Boxart from game 
export const GameListItem = props => (
    <Link className="gameLink" to={"/game/" + props.id}>
          {/*<Thumbnail src={props.boxart || "https://placehold.it/300x300"} />*/}
          <img className= "game" src={props.boxart} alt="boxart"/>
    </Link>
);
