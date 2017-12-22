import React, { Component } from "react";
import Input from "./Input";
import API from "../utils/API";
import './GameList/GameListItem.css';
import { GameList, GameListItem } from "./GameList";
import { Button, Container, Row, Col, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class User extends Component {
  state = {
    games: [
      {title: 'Mario Kart', platform: 'Nitendo', year:2017, multiplayer: true},
      {title: 'NBA 2K18', platform: 'Playstation', year:2017, multiplayer: true},
      {title: 'COD', platform: 'XBox', year:2017, multiplayer: true},
      {title: 'Crash', platform: 'Playstation', year:2005, multiplayer: false},
      {title: 'Zelda', platform: 'Nitendo', year:2017, multiplayer: false},
      {title: 'BattleFront', platform: 'Playstation', year:2005, multiplayer: false},
      {title: 'Madden', platform: 'Xbox', year:2010, multiplayer: true},
      {title: 'Madden', platform: 'Xbox', year:2010, multiplayer: true},
      {title: 'Madden', platform: 'Xbox', year:2010, multiplayer: true}
    ],
    title: "",
    platform: "",
    year: "",
    multiplayer: ""

  }

  checkState = () => {
    let searchObj = {};
    if (this.state.title.length > 0) {
      searchObj.title = this.state.title;
    }
    else if (this.state.platform.length > 0) {
      searchObj.platform = this.state.platform;
    }
    else if (this.state.year.length > 0) {
      searchObj.year = this.state.year;
    }
    else if (this.state.platform.multiplayer > 0) {
      searchObj.multiplayer = this.state.multiplayer;
    }
    console.log(searchObj)
    return searchObj;
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("INPUT CHANGE", this.state)
  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get games update the gamesearch state
    event.preventDefault();
    console.log("FORM SUBMIT");
    console.log(this.state)
    API.searchGet(this.checkState())
    .then(res => this.setState({games: res.data, title: "", platform: "", year: "", multiplayer: ""}))
    .catch(err => console.log(err));    
  }


  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row className="firstRow">
            <Col md="12">
              <form>
                <Container>
                  <Row>
                    <Col md="5">
                      <Input
                        name="title"
                        value={this.state.title}
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
                    {/*Platform dropdown selection*/}
                    <select
                      name="platform"
                      value={this.state.platform}
                      onChange={this.handleInputChange}
                    >
                      <option value="Nitendo">Nitendo</option>
                      <option value="Playstation">Playstation</option>
                      <option value="XBox">XBox</option>
                    </select>
                    {/*Year dropdown selection*/}
                    <select
                      name="year"
                      value={this.state.year}
                      onChange={this.handleInputChange}
                    >
                      <option value="1970">...1970</option>
                      <option value="1990">1970-1990</option>
                      <option value="2000">1990-2000</option>
                      <option value="2010">2000-2010</option>
                      <option value="2017">2010-2017</option>
                    </select>
                    {/*multiplayer dropdown selection*/}
                    <select
                      name="multiplayer"
                      value={this.state.multiplayer}
                      onChange={this.handleInputChange}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
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
          {/*<Row>*/}
            {/*<Col>*/}
              {!this.state.games.length ? (
                <h1 className="text-center">No Games to Display</h1>
              ) : (
                <div className="gameList">
                  {this.state.games.map(game => {
                    return (
                      <Col >
                      <GameListItem
                        key={game._id}
                        title={game.title}
                        description={game.description}
                        platform={game.platform}
                        boxart={game.boxart}
                      />
                      </Col>
                    );
                  })}
                </div>
              )}
            {/*</Col>*/}
          {/*</Row>*/}
        </Container>
      </div>
    );
  }
}

export default User;