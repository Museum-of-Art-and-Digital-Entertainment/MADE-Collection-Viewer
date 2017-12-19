import React, { Component } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { GameList, GameListItem } from "./GameList";
import { Container, Row, Col } from "./Grid";

class User extends Component {
  state = {
    games: [],
    titleSearch: "",
    platformSearch: "",
    yearSearch: "",
    multiplayerSearch: ""

  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    // API.getGames(this.state.gameSearch)
      // .then(res => this.setState({ games: res.data }))
      // .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-7 sm-3">
                      <Input
                        name="gameSearch"
                        value={this.state.titleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Game"
                      />
                    </Col>
                    <Col size="xs-1 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                    <Col size="xs-1 sm-1">
                      <Dropdown />
                    </Col>
                    <Col size="xs-1 sm-1">
                      <Dropdown />
                    </Col>
                    <Col size="xs-1 sm-2">
                      <Dropdown />
                    </Col>
                    <Col size="xs-1 sm-1">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Advanced Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.games.length ? (
                <h1 className="text-center">No Games to Display</h1>
              ) : (
                <GameList>
                  {this.state.games.map(game => {
                    return (
                      <GameListItem
                        key={game.title}
                        title={game.title}
                        description={game.description}
                        platform={game.platform}
                        boxart={game.boxart}
                      />
                    );
                  })}
                </GameList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default User;