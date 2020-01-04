import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = ({ startLogout }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/dashboard"><h1>budgetIt</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/income"><h2>Income</h2></Nav.Link>
      <Nav.Link href="/dashboard"><h2>Expenses</h2></Nav.Link>
    </Nav>
    <Nav>
      <button className="button button--link" onClick={startLogout}><h2>Logout</h2></button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
