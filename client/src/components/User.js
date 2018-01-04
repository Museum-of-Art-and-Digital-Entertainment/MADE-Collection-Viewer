import React, { Component } from "react";
import SearchBar from "./SearchBar";
import API from "../utils/API";
import './GameList/GameListItem.css';
import PageControl from './PageControl';
import { GameListItem } from "./GameList";
import { Container, Col, Row } from 'reactstrap';

class User extends Component {
  state = {
    games: [],
    title: "",
    platform: "",
    year: "",
    multiplayer: "",
    offset: 0, 
    limit: 28,
    sort: '',
    count: 0,
    page: 1,
    lastPage: 1,
    query: this.props.match.params || {}
  }
    

  loadGames = () => {
    let query = {
      offset: this.state.offset,
      limit: this.state.limit
    }
    if (this.state.title !== '') {
      query.title = this.state.title;
    }
    if (this.state.platform !== '') {
      query.platform = this.state.platform;
    }
    if (this.state.sort !== '') {
      query.sort = this.state.sort.split(',');
    }
    API.searchGet(query)
      .then(res => {
        this.setState({ games: res.data })
      })
      .catch(err => console.log(err));
    API.getCount(query)
      .then(res => {
        this.setState({ count: res.data, lastPage: Math.ceil(res.data/this.state.limit) })
      })
      .catch(err => console.log(err));
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
    return searchObj;
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  handlePageInput = event => {
    if ((event.target.value >= 1 && event.target.value <= this.state.lastPage) || event.target.value === '') {
      this.handleInputChange(event);
    }
  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get games update the gamesearch state
    event.preventDefault();
    API.searchGet(this.checkState())
    .then(res => this.setState({games: res.data, title: "", platform: "", year: "", multiplayer: ""}))
      // 
      // console.log(res.data)
    .catch(err => console.log(err))

  }

  incrementPage = event => {
    const change = parseInt(event.target.value, 10);
    const increment = this.state.offset + (this.state.limit * change);
    if (increment >= 0 && increment <= this.state.count)
      this.setState({offset: increment, page: parseInt(this.state.page, 10) + change}, this.loadGames);
  }

  componentDidMount() {
    this.loadGames();
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
              {this.state.games.map((game, i) => {
                return (
                  <div className="imageContainer" key={game._id}>
                  <Col >
                  <GameListItem
                    title={game.title}
                    description={game.description}
                    platform={game.platform}
                    boxart={game.boxartFront}
                    id={game._id}
                  />
                  </Col>
                  <div className="shelfContainer">
                    <div className="shelf"/>
                  </div>
                  </div>
                );
              })}
            </div>
          )}
          <Row className="pageControl">
            <Col xs='12'>
              <PageControl
                changePage={this.changePage}
                incrementPage={this.incrementPage}
                lastPage={this.state.lastPage}
                page={this.state.page}
                inputHandler={this.handlePageInput}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default User;