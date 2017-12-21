import React, { Component } from "react";
import {  Row, Col } from 'reactstrap';
import { InputGroup, InputGroupButton, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import moment from 'moment';
import './AdminListItem.css'

// AdminListItem renders info for a single game 
class AdminListItem extends Component {
	state = {
		addCopies: 1,
		removeCopies: -1,
		download: this.props.downloaded,
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAddCopies = event => {
  	if (event.target.value >= 1 || event.target.value === '') {
  		this.handleInputChange(event);
  	}
  };

  handleRemoveCopies = event => {
  	if (event.target.value >= 1 || event.target.value === '') {
  		this.handleInputChange(event);
  	}
  };

  submitAddCopies = event => {

  };

  submitRemoveCopies = event => {

  };



	render() {
    return (
	    <div>
	    	<Row className='list-item'>
	    		<Col md="12" sm="9" className={`list-info ${(this.props.collected)? ' collected': ' uncollected'}`}>
	    			<Row>
	    				<Col md="5" sm="12" xs="12" className='light'>
	    					<h6>Title</h6>
	    					<p>{this.props.title}</p>
	    				</Col>
	    				<Col md="3" sm="12" xs="12" className='dark'>
	    					<h6>Platform</h6>
	    					<p>{this.props.platform}</p>
	    				</Col>
	    				<Col md="2" sm="12" xs="12" className='light'>
	    					<h6>Release Date</h6>
	    					<p>{(this.props.release)? moment.utc(this.props.release).format('MM/DD/YYYY'): "Unreleased or Date Missing"}</p>
	    				</Col>
	    				<Col md="2" sm="12" xs="12" className='dark'>
	    					<h6>Copies</h6>
	    					<p>{this.props.copies}</p>
	    				</Col>
	    			</Row>
	    		</Col>
	    		<Col md="12" sm="3" className='list-btns'>
	    			<Row>
	    				<Col md='3' sm='12' xs='12'>
					      <InputGroup>
					        <Input 
					        	value={this.state.addCopies}
					        	type="number" 
					        	name='addCopies' 
					        	onChange={this.handleAddCopies}
					        	step='1'/>
					        <InputGroupButton onClick={this.addCopies}>+</InputGroupButton>
					      </InputGroup>
					     </Col>
					     <Col md='3' sm='12' xs='12'>
					      <InputGroup>
					        <Input 
					        	value={this.state.removeCopies}
					        	type="number" 
					        	name='removeCopies' 
					        	onChange={this.handleRemoveCopies}
					        	step='1'/>
					        <InputGroupButton onClick={this.removeCopies}>-</InputGroupButton>
					      </InputGroup>
					     </Col>
					     <Col md='3' sm='12' xs='12'>
					      <Button onClick={this.updateGame}>Update</Button>
					     </Col>
					     <Col md='3' sm='12' xs='12'>
					      <h4>{(this.props.downloaded)? "Details Collected": "Details Needed"}</h4>
					     </Col>
	    			</Row>
	    		</Col>
	    	</Row>
	    </div>
    )
	};
};

export default AdminListItem;