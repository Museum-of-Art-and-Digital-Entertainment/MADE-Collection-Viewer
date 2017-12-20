import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from 'reactstrap';
import './GameListItem.css';

// GameListItem renders Boxart from game 
export const GameListItem = props => (
    <Container className="game">
          <div>{props.title}</div>
          {/*<Thumbnail src={props.boxart || "https://placehold.it/300x300"} />*/}
    </Container>
);
