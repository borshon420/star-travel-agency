import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
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
                <Link to="/destination">Destination</Link>
                <Link to="/promotion">Promotions</Link>
                {user.email && (<Link to="/myorder">My Orders</Link>)}
                {/* <Link to="/manageorder">Manage All Orders</Link> */}
                {/* login */}
                {user.email && (
                  <span style={{ color: "white", marginRight: "10px" }}>
                    
                    {user.displayName}
                  </span>
                )}
                {user.email ? 
              <Button onClick={logOut} className="me-2" variant="light">log Out</Button>
              :
              <Link to="/login">
                  <Button className="me-2" variant="light">Login</Button>
              </Link>} 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
        </div>
    );
};

export default Header;