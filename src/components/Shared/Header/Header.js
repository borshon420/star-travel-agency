import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'black'}}  variant="dark">
          <Container>
            <Link to="/home">
              <img style={{ height: "80px" }} src={logo} alt="" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav className="nav-link">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
        </div>
    );
};

export default Header;