import React, { Component } from "react";
import Input from "./Input";
// import Dropdown from "./Dropdown";
// import Button from "./Button";
import './GameList/GameListItem.css';
import { GameList, GameListItem } from "./GameList";
// import { Container, Row, Col } from "./Grid";
import { Button, Container, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class User extends Component {
  state = {
    games: [
      {title: 'Mario Kart', platform: 'Nitendo', year:2017, multiplayer: true},
      {title: 'NBA 2K18', platform: 'Playstation', year:2017, multiplayer: true},
      {title: 'COD', platform: 'XBox', year:2017, multiplayer: true},
      {title: 'Crash', platform: 'Playstation', year:2005, multiplayer: false}
    ],
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
        <Container fluid={true}>
          <Row >
            <Col md="12">
              <form>
                <Container>
                  <Row>
                    <Col md="5">
                      <Input
                        name="gameSearch"
                        value={this.state.titleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search Game Title"
                      />
                    </Col>
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                        color="info"
                      >
                        Search
                      </Button>
                    {/*<Col>*/}
                      <UncontrolledDropdown>
                        <DropdownToggle caret>
                          Platform
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Nitendo</DropdownItem>
                          <DropdownItem>Playstation</DropdownItem>
                          <DropdownItem>XBox</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    {/*</Col>*/}
                    {/*<Col>*/}
                      <UncontrolledDropdown>
                        <DropdownToggle caret>
                          Year
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>1950-1980</DropdownItem>
                          <DropdownItem>1980-2000</DropdownItem>
                          <DropdownItem>2000-2010</DropdownItem>
                          <DropdownItem>2010-present</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    {/*</Col>*/}
                    {/*<Col>*/}
                      <UncontrolledDropdown>
                        <DropdownToggle caret>
                          Multiplayer
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Yes</DropdownItem>
                          <DropdownItem>No</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    {/*</Col>*/}
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                        color="info"
                      >
                        Advanced Search
                      </Button>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col>
              {!this.state.games.length ? (
                <h1 className="text-center">No Games to Display</h1>
              ) : (
                <div>
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
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default User;