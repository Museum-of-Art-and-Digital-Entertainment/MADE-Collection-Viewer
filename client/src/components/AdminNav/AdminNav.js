import React from "react";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import './AdminNav.css';

const AdminNav = props => (
	<div className='admin-nav-bar'>
	  <Nav className='admin-nav'>
	    <NavItem className='admin-nav-item'>
	      <NavLink className='admin-nav-link' href="/admin">Games</NavLink>
	    </NavItem>
	    <NavItem className='admin-nav-item'>
	      <NavLink className='admin-nav-link' href="/admin/game">Add Game</NavLink>
	    </NavItem>
	    <NavItem className='admin-nav-item nav-left'>
	      <NavLink className='admin-nav-link-btn' href="#"><Button color='primary'>Logout</Button></NavLink>
	    </NavItem>
	  </Nav>
	</div>
);

export default AdminNav;