import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Your custom CSS file for styling

function MainNavbar() {
  const [openDropdown, setOpenDropdown] = useState('');

  const handleMouseEnter = (dropdownId) => {
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setOpenDropdown('');
  };

  return (
    <Navbar expand="lg" variant="light" className="fixed-top" style={{ backgroundColor: '#add8e6' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">BSNL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* Mobile Section */}
            <NavDropdown
              title="Mobile"
              id="mobile-nav-dropdown"
              className="hover-highlight"
              show={openDropdown === 'mobile'}
              onMouseEnter={() => handleMouseEnter('mobile')}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/mobile/plans">Plans</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile/recharge">Recharge</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile/prepaid">Prepaid</NavDropdown.Item>
            </NavDropdown>

            {/* Fiber Section */}
            <NavDropdown
              title="Fiber"
              id="fiber-nav-dropdown"
              className="hover-highlight"
              show={openDropdown === 'fiber'}
              onMouseEnter={() => handleMouseEnter('fiber')}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/fiber/getbharatfiber">BSNL-Fiber</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fiber/prepaidfiber">Prepaid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fiber/postpaidfiber">Postpaid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fiber/installation">Installation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fiber/support">Support</NavDropdown.Item>
            </NavDropdown>

            {/* Enterprise Section */}
            <NavDropdown
              title="Enterprise"
              id="enterprise-nav-dropdown"
              className="hover-highlight"
              show={openDropdown === 'enterprise'}
              onMouseEnter={() => handleMouseEnter('enterprise')}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/enterprise/solutions">Solutions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/enterprise/services">Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/enterprise/support">Support</NavDropdown.Item>
            </NavDropdown>

            {/* Tenders Section */}
            <NavDropdown
              title="Tenders"
              id="tenders-nav-dropdown"
              className="hover-highlight"
              show={openDropdown === 'tenders'}
              onMouseEnter={() => handleMouseEnter('tenders')}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/tenders/discover">Discover</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tenders/tenderupload">Tender Upload</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tenders/support">Support</NavDropdown.Item>
            </NavDropdown>

            {/* Investors Section */}
            <NavDropdown
              title="Investors"
              id="investors-nav-dropdown"
              className="hover-highlight"
              show={openDropdown === 'investors'}
              onMouseEnter={() => handleMouseEnter('investors')}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/investors/financialresult">Financial Result</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/investors/investors">Investors</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/investors/report">Report</NavDropdown.Item>
            </NavDropdown>

            {/* About Us Section */}
            <NavDropdown
              title="About BSNL"
              id="aboutbsnl-nav-dropdown"
              className="hover-highlight"
              show={openDropdown === 'aboutbsnl'}
              onMouseEnter={() => handleMouseEnter('aboutbsnl')}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/aboutbsnl/achievements">Achievements</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aboutbsnl/vision">Mission & Vision</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aboutbsnl/staff">Staff</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
