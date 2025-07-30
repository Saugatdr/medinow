import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logobm from '../assets/logobm.png'
import { Link } from "react-router";
import './navigation.css'
import { useState } from 'react';

function Navigation() {

  const [activeLink, setActiveLink] = useState('1')

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={logobm}
              height="45"
              width="45"
              className="d-inline-block align-top"
              alt="Beautiful Mind Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} onClick={() => setActiveLink('1')} to="/" style={{color: activeLink == '1' ? 'blue': 'grey'}} > 
        Home
      </Nav.Link>
                 <Nav.Link as={Link} onClick={() => setActiveLink('2')} to="/dash" style={{color: activeLink == '2' ? 'blue': 'grey'}} > 
        Dashboard
      </Nav.Link>
             <Nav.Link as={Link} onClick={() => setActiveLink('3')} to="/records" style={{color: activeLink == '3' ? 'blue': 'grey'}} > 
        Records
      </Nav.Link>
            </Nav>
             </Navbar.Collapse>
            <NavDropdown title="Sign in as" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">
               Unsigned
              </NavDropdown.Item>
            </NavDropdown>
          
      </Container>
    </Navbar>
  );
}

export default Navigation;