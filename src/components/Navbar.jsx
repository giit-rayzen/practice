import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.png'

function BSNLNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#add8e6' }}> {/* Light blue color */}
      <Container>
        <Navbar.Brand as={Link} to="/">BSNL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/mobile">Mobile</Nav.Link>
            <Nav.Link as={Link} to="/fiber">BSNL Fiber</Nav.Link>
            <Nav.Link as={Link} to="/enterprise">Enterprise</Nav.Link>
            <Nav.Link as={Link} to="/tenders">Tenders</Nav.Link>
            <Nav.Link as={Link} to="/investors">Investors</Nav.Link>
            <Nav.Link as={Link} to="/aboutbsnl">About BSNL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default BSNLNavbar;
