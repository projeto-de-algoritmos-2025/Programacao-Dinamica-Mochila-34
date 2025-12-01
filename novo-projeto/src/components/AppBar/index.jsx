import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/header-style.css';

const AppBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="header-container">
      <Navbar.Brand as={Link} to="/">Knapsack Problem Solver</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;