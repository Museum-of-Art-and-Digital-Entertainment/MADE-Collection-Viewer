import React, { Component } from "react";
import SearchBar from "./SearchBar";
import API from "../utils/API";
import './GameList/GameListItem.css';
import { GameListItem } from "./GameList";
import { Container, Col } from 'reactstrap';

class User extends Component {
  state = {
    games: [],
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
    if (this.state.platform.length > 0) {
      searchObj.platform = this.state.platform;
    }
    if (this.state.year.length > 0) {
      searchObj.year = this.state.year;
    }
    if (this.state.multiplayer === "Yes" ) {
      searchObj.multiplayer = true;
    }
    if (this.state.multiplayer === "No") {
      searchObj.multiplayer = false;
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
    console.log("state1", this.state)
    API.searchGet(this.checkState())
    .then(res => this.setState({games: res.data, title: "", platform: "", year: "", multiplayer: ""}))
      // 
      // console.log(res.data)
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <Container fluid={true}>
          <SearchBar 
              inputHandler={this.handleInputChange} 
              buttonHandler={this.handleFormSubmit} 
              title={this.state.title} 
              platform={this.state.platform}
              name='title' 
              platformQuery={API.getPlatforms}
          /> 
          {!this.state.games.length ? (
            <div>
              <h1 className="text-center">No Games to Display</h1>
              <h2 className="text-center"> Please Search for a game </h2>
            </div>  
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
                    boxart={game.boxartFront}
                    id={game._id}
                  />
                  </Col>
                );
              })}
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default User;