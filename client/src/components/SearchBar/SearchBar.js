import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
import "./SearchBar.css";


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
					<Col className='col-search-title' md='4' xs='12'>
						<Input 
							className="title-seach-input"
							placeholder='Search Title'
							onChange={this.props.inputHandler}
							value={this.props.title}
							name={this.props.name}
						/>
					</Col>
					<Col className='col-search-year' md='2' xs='12'>
						<Input 
							className="year-seach-input"
							placeholder='Search Year'
							onChange={this.props.inputHandler}
							value={this.props.year}
							name='year'
						/>
					</Col>
					<Col className='col-search-platform' md='2' xs='9'>
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
								<option key={platform._id} value={platform.theGameDBId}>{platform.name}</option>
							))}
						</Input>
					</Col>
					<Col className='col-search-multiplayer' md='2'  xs='9'>
						<Input 
							className="plaform-dropdown"
							type='select' 
							onChange = {this.props.inputHandler} 
							name='multiplayer' 
							value={this.props.multiplayer}
							style={{height:'100%'}}
						>
							<option value=''>Multiplayer</option>
								<option value={this.props.multiplayer}>Yes</option>
								<option value={this.props.multiplayer}>No</option>
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