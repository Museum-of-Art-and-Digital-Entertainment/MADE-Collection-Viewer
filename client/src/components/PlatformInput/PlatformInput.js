import React, { Component } from 'react';
import { Input } from 'reactstrap';


class PlatformInput extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	platforms: []
    };
  	props.platformQuery()
			.then(res => this.setState({ platforms: res.data }))
  		.catch(err => console.log(err));
  }

	render () {
		return (
			<Input 
				className="plaform-dropdown"
				type='select' 
				onChange = {this.props.inputHandler} 
				name= {this.props.name} 
				value={this.props.platform}
				style={{height:'100%'}}
			>
				<option value=''>Platform</option>
				{this.state.platforms.map((platform, i) => (
					<option key={platform._id} value={platform.theGamesDBId}>{platform.name}</option>
				))}
			</Input>
		)
	}
}

export default PlatformInput; 