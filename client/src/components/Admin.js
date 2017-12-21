import React, { Component } from "react";
import API from '../utils/adminAPI'
import { Container } from 'reactstrap';
import AdminListItem from './AdminList';
import SearchBar from './SearchBar';

class Admin extends Component {
	state = {
		games: [],
		offset: 0,
		limit: 50,
		title: ""
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

	loadGames = () => {
		let query = {
			offset: this.state.offset,
			limit: this.state.limit
		}
		if (this.state.title !== "") {
			query.title = this.state.title
		}
		API.getGames(query)
			.then(res => this.setState({ games: res.data }))
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.loadGames();
	};

	render () {
		return (
			<Container>
				<h1>Admin Page</h1>
				<SearchBar inputHandler={this.handleInputChange} title={this.state.title} name='title' />
				<div id="games">
					{this.state.games.map((game, i) => (
						<AdminListItem key={game.id} {...game}/>
	        ))}
				</div>
			</Container>
		)
	};
};

export default Admin; 