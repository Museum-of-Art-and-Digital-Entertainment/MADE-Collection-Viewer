import React, { Component } from "react";
import API from '../utils/adminAPI'
import { Container } from 'reactstrap';

class Admin extends Component {
	state = {
		games: [],
		offset: 0,
		limit: 50,
		title: ""
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
		return <Container>
				<h1>Admin Page</h1>
				<div id="games">
					{this.state.games.map((game, i) => (
						<p key={game.id}>{game.title}</p>
	        ))}
				</div>
			</Container>
	};
};

export default Admin; 