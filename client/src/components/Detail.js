import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container, Row, Col, Jumbotron } from 'reactstrap';


class Detail extends Component {
  state = {
    game: {}
  };
  //When this component mounts, grab the game with the _id of this.props.match.params.id
  //e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGame(this.props.match.params.id)
      .then(res => this.setState({ game: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container >
        <Row>
          <Col >
            <Jumbotron>
              <h1>
                {this.state.game.title} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col >
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.game.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col >
            <Link to="/">← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;