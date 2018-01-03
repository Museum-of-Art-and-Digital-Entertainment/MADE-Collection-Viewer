import React from "react";
import './GameListItem.css';
import { Link } from "react-router-dom"; 
import Thumbnail from "../Thumbnail";

// GameListItem renders Boxart from game 
export const GameListItem = props => (

    <Link className="gameLink" to={"/game/" + props.id}>
    	<div className="game">
          <img className= "shelfImg" src={props.boxart} alt="boxart"/>
        </div>
    </Link>

);
