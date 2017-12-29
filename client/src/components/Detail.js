import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Detail.css";
import { Container, Row, Col, Jumbotron } from 'reactstrap';


class Detail extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log("props", props)
  //   this.state = {
  //     game: {}
  //   };
  // }
  state = {
    game: {}
  }

  loadDetails() {
    console.log("PROPS", this.props)
    API.getGame(this.props.match.params.id)
      .then(res => this.setState({ game: res.data }))
      //  console.log("RESULTS", res.data)
      
      .catch(err => console.log(err));
  }


  //When this component mounts, grab the game with the _id of this.props.match.params.id
  //e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("DETAILS")
    this.loadDetails();
    
  }

  // PIC game.boxartFront 
  // Platform game.platform
  // Developer game.developer
  // Publisher game.publisher
  // Realease Date game.realease
  // Genres game.genres



  render() {
    return (
      <Container className="detailsPage">
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
            <img className= "boxartImg" src={this.state.game.boxartFront} alt="boxart"/>
          </Col>
          <Col >
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.game.overview}
              </p>
            </article>
            <h3>Developer</h3><p>{this.state.game.developer}</p>
            <h3>Publisher</h3><p>{this.state.game.publisher}</p>
            <h3>Platform</h3><p>{this.state.game.platform}</p>
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