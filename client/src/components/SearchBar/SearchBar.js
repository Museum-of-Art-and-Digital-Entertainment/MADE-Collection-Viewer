import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
import './SearchBar.css'

export default class SearchBar extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	platforms: []
    };
  	props.platformQuery()
			.then(res => this.setState({ platforms: res.data }))
  		.catch(err => console.log(err));
  }

	render() {
		return (
			<div className='searchbar'>
				<Row className='search-bar-row'>
					<Col className='col-search-title' md='5' xs='12'>
						<Input 
							className="title-seach-input"
							placeholder='Search Title'
							onChange={this.props.inputHandler}
							value={this.props.title}
							name={this.props.name}
						/>
					</Col>
					<Col className='col-search-platform' md='5' xs='9'>
						<Input 
							className="plaform-dropdown"
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
					<Col className='col-search-btn' md='2' xs='3'>
						<Button className="search-btn" onClick={this.props.buttonHandler}>Search</Button>
					</Col>
				</Row>
			</div>
		);
	}
}