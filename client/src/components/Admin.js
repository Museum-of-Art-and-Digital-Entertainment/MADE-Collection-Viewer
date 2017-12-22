import React, { Component } from "react";
import API from '../utils/adminAPI'
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { Input } from 'reactstrap';
import AdminListItem from './AdminList';
import SearchBar from './SearchBar';

class Admin extends Component {
	state = {
		games: [],
		offset: 0,
		limit: 50,
		title: '',
		platform: '',
		sort: [],
		count: 0,
		query: this.props.match.params || {}
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
		if (this.state.title !== '') {
			query.title = this.state.title;
		}
		if (this.state.platform !== '') {
			query.platform = this.state.platform;
		}
		console.log(query);
		API.getGames(query)
			.then(res => {
				console.log(res.data.length, res.data);
				this.setState({ games: res.data })
			})
			.catch(err => console.log(err));
		API.getCount(query)
			.then(res => {
				console.log(res.data);
				this.setState({ count: res.data })
			})
			.catch(err => console.log(err));
	};

	searchGames = event => {
		this.loadGames();
	};

	changePage = event => {
		this.setState({offset: event.target.value * this.state.limit}, this.loadGames);
	};

	incrementPage = event => {
		const increment = this.state.offset + (this.state.limit * event.target.value);
		if (increment > 0 && increment < this.state.count)
			this.setState({offset: increment}, this.loadGames);
	};

	componentDidMount() {
		this.loadGames();
	};

	render () {
		return (
			<Container>
				<SearchBar 
					inputHandler={this.handleInputChange} 
					buttonHandler={this.searchGames} 
					title={this.state.title} 
					platform={this.state.platform}
					name='title' 
				/>
				<Row>
					<Col md='9' xs='12'>
			      <ButtonGroup>
			        <Button onClick={this.changePage} value={0}>{'|<'}</Button>{' '}
			        <Button onClick={this.incrementPage} value={-1}>{'<<'}</Button>{' '}
			        <Button onClick={this.incrementPage} value={1}>{'>>'}</Button>{' '}
			        <Button onClick={this.changePage} value={Math.floor(this.state.count/this.state.limit)}>{'>|'}</Button>
			      </ButtonGroup>
					</Col>
					<Col md='3' xs='12'>
						<div>
							<Input 
							type='select' 
							onChange = {this.inputHandler} 
							name='sort'
							value={this.state.sort}
							style={{height:'100%'}}
						>
							<option value={[]}>Sort</option>
							<option value={['title', 1]}>Title Descending</option>
							<option value={['title', -1]}>Title Ascending</option>
							<option value={['platform', 1]}>Platform Descending</option>
							<option value={['platform', -1]}>Platform Ascending</option>
							<option value={['release', 1]}>Release Descending</option>
							<option value={['release', -1]}>Release Ascending</option>
						</Input>	
						</div>
					</Col>
				</Row>
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