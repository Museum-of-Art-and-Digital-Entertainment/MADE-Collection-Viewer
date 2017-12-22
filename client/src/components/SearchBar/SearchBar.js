import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
import API from '../../utils/adminAPI'

export default class SearchBar extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	platforms: []
    };
  	API.getPlatforms()
			.then(res => this.setState({ platforms: res.data }))
  		.catch(err => console.log(err));
  }

  componentDidMount() {
	};	



	render() {
		return (
			<div>
				<Row>
					<Col md='5' xs='12'>
						<Input 
							placeholder='Search Title'
							onChange={this.props.inputHandler}
							value={this.props.title}
							name={this.props.name}
						/>
					</Col>
					<Col md='5' xs='9'>
						<Input 
							type='select' 
							onChange = {this.props.inputHandler} 
							name='platform' 
							value={this.props.platform}
							style={{height:'100%'}}
						>
							<option value=''>Platform</option>
							{this.state.platforms.map((platform, i) => (
								<option key={platform.id} value={platform.id}>{platform.name}</option>
							))}
						</Input>
					</Col>
					<Col md='2' xs='3'>
						<Button onClick={this.props.buttonHandler}>Search</Button>
					</Col>
				</Row>
			</div>
		);
	}
}