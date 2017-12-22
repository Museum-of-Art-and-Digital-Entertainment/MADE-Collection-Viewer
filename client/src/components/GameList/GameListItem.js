import React from "react";
import './GameListItem.css';
import { Link } from "react-router-dom"; 

// GameListItem renders Boxart from game 
export const GameListItem = props => (
    <Link className="gameLink" to={"/games/" + props._id}>
          {/*{props.title}*/}
          {/*<Thumbnail src={props.boxart || "https://placehold.it/300x300"} />*/}
          <img className= "game" src={props.boxart || "https://placehold.it/300x300"} width={100} height={100} alt="boxart"/>
    </Link>
);
