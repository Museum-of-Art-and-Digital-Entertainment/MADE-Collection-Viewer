import React, { Component } from "react";
import API from '../utils/adminAPI';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import moment from 'moment';


class UpdateGame extends Component {
	state = {
		id: 0,
		title: '',
		platformId: 0,
		platform: '',
		release: '',
		overview: '',
		esrb: '',
		players: '',
		coop: false,
		publisher: '',
		developer: '',
		genres: [],
		boxartFront: '',
		boxartBack: '',
		copies: 0,
		collected: false,
		popularity: 0,
		downloaded: false,
	};

	componentDidMount() {
		this.loadGame();
	};

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleArrayChange = event => {
  	const { name, value } = event.target;
  	let arr = value.split(',');
  	// arr = arr.map(e => e.trim());
  	this.setState({
  		[name]: arr
  	});
  };

  handleDateChange = event => {
  	const { name, value } = event.target;
  	let date = moment.utc(value, 'YYYY-MM-DD').format();
  	this.setState({
  		[name]: date
  	});
  };

  handleWholeNumber = event => {
  	const { name, value } = event.target;
  	let num = (value >= 0)? parseInt(value, 10) : 0;
  	this.setState( {
  		[name]: num
  	});
  }

	loadGame = () => {
		API.getGames({id:this.props.match.params.id})
			.then(res => {
				this.setState({...res.data[0]});
			})
			.catch(err => console.log(err));
	};

	render () {
		return (
			<Container>
				<Row>
					<Col md='6' xs='12'>
						<Form>
			        <FormGroup>
			          <Label for="titleInput">Title</Label>
			          <Input onChange={this.handleInputChange} type="text" name="title" id="titleInput" value={this.state.title} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="releaseInput">Release</Label>
			          <Input onChange={this.handleDateChange} type="date" name="release" id="releaseInput" value={moment.utc(this.state.release).format('YYYY-MM-DD')} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="esrbInput">ESRB</Label>
			          <Input onChange={this.handleInputChange} type="text" name="esrb" id="esrbInput" value={this.state.esrb} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="publisherInput">Publisher</Label>
			          <Input onChange={this.handleInputChange} type="text" name="publisher" id="publisherInput" value={this.state.publisher} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="developerInput">Developer</Label>
			          <Input onChange={this.handleInputChange} type="text" name="developer" id="developerInput" value={this.state.developer} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="genresInput">Genres</Label>
			          <Input onChange={this.handleArrayChange} type="text" name="genres" id="genresInput" value={this.state.genres} />
			          <FormText>Separate with a Comma</FormText>
			        </FormGroup>
			        <FormGroup>
			          <Label for="overviewInput">Overview</Label>
			          <Input onChange={this.handleInputChange} type="textarea" name="overview" id="overviewInput" value={this.state.overview} rows='6' />
			        </FormGroup>
			        <FormGroup>
			          <Label for="copiesInput">Copies</Label>
			          <Input onChange={this.handleWholeNumber} type="number" name="copies" id="copiesInput" value={this.state.copies} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="popularityInput">Popularity</Label>
			          <Input onChange={this.handleWholeNumber} type="number" name="popularity" id="popularityInput" value={this.state.popularity} />
			          <FormText>Set Popularity for Sorting by Popularity</FormText>
			        </FormGroup>
			        <FormGroup check>
			          <Label check>
			            <Input type="checkbox" name='collected' value={this.state.collected} checked={this.state.collected}/>{' '}
			            In collection
			          </Label>
			          <FormText> Should be checked if the game is in the collection</FormText>
			        </FormGroup>
			        <FormGroup check>
			          <Label check>
			            <Input type="checkbox" name='downloaded' value={this.state.downloaded} checked={this.state.downloaded}/>{' '}
			            Details Collected
			          </Label>
			          <FormText> Should be checked if the game's details were downloaded</FormText>
			        </FormGroup>
			        <Button>Submit</Button>
			      </Form>
					</Col>
					<Col md='6' xs='12'>
						<Row>
							<Col xs='6' sm='6'>
								<div>
									<img src={this.state.boxartFront} style={{'maxWidth': '100%'}} alt={this.state.title + ' box art front'}/>
									<p>Box Art Front</p>
								</div>
							</Col>
							<Col xs='6' sm='6'>
								<div>
									<img src={this.state.boxartBack} style={{'maxWidth': '100%'}}  alt={this.state.title + ' box art front'}/>
									<p>Box Art Back</p>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default UpdateGame;