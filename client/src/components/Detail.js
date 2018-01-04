import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Detail.css";
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


class Detail extends Component {

  state = {
    game: {}
  }

  loadDetails() {
    API.getGame(this.props.match.params.id)
      .then(res => this.setState({ game: res.data }))      
      .catch(err => console.log(err));
  }


  //When this component mounts, grab the game with the _id of this.props.match.params.id
  //e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadDetails();
    
  }

  render() {
    return (
      <Container className="detailsPage">
      <div className="background">
        <Row>
          <Col className="col">
            <Jumbotron className="titleDisplay">
              <h1>
                {this.state.game.title} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="info">
          <Col sm="4" className="col colImg">
            <img className= "boxartImg" src={this.state.game.boxartFront} alt="boxart"/>
            <Link className="linkText" to="/"><Button className="button" color="primary">← Back</Button></Link>
          </Col>
          <Col sm="8"className="col">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.game.overview}
              </p>
            </article>
            <h3>Developer</h3><p>{this.state.game.developer}</p>
            <h3>Publisher</h3><p>{this.state.game.publisher}</p>
            <h3>Platform</h3><p>{this.state.game.platform}</p>
            <h3>Copies</h3><p>{this.state.game.copies}</p>
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default Detail;