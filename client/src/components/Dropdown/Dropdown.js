import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Platform
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Nitendo</DropdownItem>
          <DropdownItem >Playstation</DropdownItem>
          <DropdownItem>Xbox</DropdownItem>
          {/*<DropdownItem divider />*/}
          <DropdownItem>Gamecube</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Example; 