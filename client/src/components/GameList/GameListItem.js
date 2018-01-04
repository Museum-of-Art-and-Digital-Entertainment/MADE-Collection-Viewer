import React from "react";
import './GameListItem.css';
import { Link } from "react-router-dom"; 

// GameListItem renders Boxart from game 
export const GameListItem = props => (

    <Link className="gameLink" to={"/game/" + props.id}>
    	<div className="game">
          {	(props.boxart)? 
          	<img className= "shelfImg" src={props.boxart} alt={props.title}/>
          	:
          	<div className="placeHolder">
          		<span className="placeText">{props.title}</span>
          	</div>
          }
        </div>
    </Link>

);
