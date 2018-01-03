import React, { Component } from "react";
import API from '../utils/adminAPI';
import { Container, Row, Col } from 'reactstrap';
// import { Button, ButtonGroup } from 'reactstrap';
import { Input } from 'reactstrap';
import AdminListItem from './AdminList';
import SearchBar from './SearchBar';
import PageControl from './PageControl';
import AdminNav from './AdminNav';

class Admin extends Component {
	state = {
		games: [],
		offset: 0,
		limit: 50,
		title: '',
		platform: '',
		sort: '',
		count: 0,
		page: 1,
		lastPage: 1,
		query: this.props.match.params || {}
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePageInput = event => {
  	if ((event.target.value >= 1 && event.target.value <= this.state.lastPage) || event.target.value === '') {
  		this.handleInputChange(event);
  	}
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
		if (this.state.sort !== '') {
			query.sort = this.state.sort.split(',');
		}
		API.getGames(query)
			.then(res => {
				this.setState({ games: res.data })
			})
			.catch(err => console.log(err));
		API.getCount(query)
			.then(res => {
				this.setState({ count: res.data, lastPage: Math.ceil(res.data/this.state.limit) })
			})
			.catch(err => console.log(err));
	};

	searchGames = event => {
		this.setState({offset: 0, page: 1}, this.loadGames);
	};

	changePage = event => {
		if (event.target.value !== '') {
			this.setState({offset: (event.target.value - 1) * this.state.limit, page: event.target.value}, this.loadGames);
		}
	};

	incrementPage = event => {
		const change = parseInt(event.target.value, 10);
		const increment = this.state.offset + (this.state.limit * change);
		if (increment >= 0 && increment <= this.state.count)
			this.setState({offset: increment, page: parseInt(this.state.page, 10) + change}, this.loadGames);
	};

	componentDidMount() {
		this.loadGames();
	};

	render () {
		return (
			<Container>
				<AdminNav />
				<SearchBar 
					inputHandler={this.handleInputChange} 
					buttonHandler={this.searchGames} 
					platformQuery= {API.getPlatforms}
					title={this.state.title} 
					platform={this.state.platform}
					name='title' 
				/>
				<Row>
					<Col md='9' xs='12'>
						<PageControl
							changePage={this.changePage}
							incrementPage={this.incrementPage}
							lastPage={this.state.lastPage}
							page={this.state.page}
							inputHandler={this.handlePageInput}
						/>
					</Col>
					<Col md='3' xs='12'>
						<div>
							<Input 
							type='select' 
							onChange = {this.handleInputChange} 
							name='sort'
							value={this.state.sort}
							style={{height:'100%'}}
						>
							<option value={''}>Sort</option>
							<option value={'title, 1'}>Title Descending</option>
							<option value={'title, -1'}>Title Ascending</option>
							<option value={'platform, 1'}>Platform Descending</option>
							<option value={'platform, -1'}>Platform Ascending</option>
							<option value={'release, 1'}>Release Descending</option>
							<option value={'release, -1'}>Release Ascending</option>
						</Input>	
						</div>
					</Col>
				</Row>
				<div id="games">
					{this.state.games.map((game, i) => (
						<AdminListItem key={game._id} {...game}/>
	        ))}
				</div>
				<Row>
					<Col md='9' xs='12'>
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
		)
	};
};

export default Admin; 