import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const GameListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.boxart || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Description: {props.description}</p>
          <p>Platform: {props.platform}</p>
        </Col>
      </Row>
    </Container>
  </li>
);
