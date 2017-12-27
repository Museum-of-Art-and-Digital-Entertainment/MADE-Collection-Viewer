import React from "react";
import { Button, ButtonGroup } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, InputGroupButton } from 'reactstrap';
import { Row, Col } from 'reactstrap';

const PageControl = props => (
		<Row>
			<Col xs='auto'>
				<ButtonGroup>
			    <Button onClick={props.changePage} value={1}>{'|<'}</Button>{' '}
			    <Button onClick={props.incrementPage} value={-1}>{'<<'}</Button>{' '}
			    <Button onClick={props.incrementPage} value={1}>{'>>'}</Button>{' '}
			    <Button onClick={props.changePage} value={props.lastPage}>{'>|'}</Button>
			  </ButtonGroup>
		  </Col>
			<Col xs='4'>
			  <InputGroup>
			  		<InputGroupAddon>Page</InputGroupAddon>
		        <Input type='number' value={props.page} onChange={props.inputHandler} name='page' style={{'textAlign': 'right', 'minWidth': '75px'}} />
		        <InputGroupAddon>/{props.lastPage}</InputGroupAddon>
		        <InputGroupButton onClick={props.changePage} value={props.page}>Go</InputGroupButton>
			  </InputGroup>
		  </Col>
	  </Row>
);

export default PageControl; 