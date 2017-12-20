import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from 'reactstrap';
import './GameListItem.css';

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const GameListItem = props => (
    <Container className="gameList">
        <div className="game">
          <h1>{props.title}</h1>
          {/*<Thumbnail src={props.boxart || "https://placehold.it/300x300"} />*/}
        </div>
          {/*<h1>#</h1>*/}
        {/*<Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Description: {props.description}</p>
          <p>Platform: {props.platform}</p>
        </Col>*/}
    </Container>
);
